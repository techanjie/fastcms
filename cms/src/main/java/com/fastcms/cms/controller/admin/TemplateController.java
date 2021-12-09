/**
 * Copyright (c) 广州小橘灯信息科技有限公司 2016-2017, wjun_java@163.com.
 * <p>
 * Licensed under the GNU Lesser General Public License (LGPL) ,Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.gnu.org/licenses/lgpl-3.0.txt
 * http://www.xjd2020.com
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fastcms.cms.controller.admin;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.fastcms.cms.entity.Menu;
import com.fastcms.cms.service.IMenuService;
import com.fastcms.common.constants.FastcmsConstants;
import com.fastcms.common.model.RestResult;
import com.fastcms.common.model.RestResultUtils;
import com.fastcms.common.utils.FileUtils;
import com.fastcms.core.mybatis.PageModel;
import com.fastcms.core.template.Template;
import com.fastcms.core.template.TemplateService;
import com.fastcms.core.utils.DirUtils;
import com.fastcms.service.IConfigService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 模板管理
 * @author： wjun_java@163.com
 * @date： 2021/2/18
 * @description：
 * @modifiedBy：
 * @version: 1.0
 */
@RestController
@RequestMapping(FastcmsConstants.ADMIN_MAPPING + "/template")
public class TemplateController {

    @Autowired
    private TemplateService templateService;

    @Autowired
    private IConfigService configService;

    @Autowired
    private IMenuService menuService;

    /**
     * 模板列表
     * @return
     */
    @GetMapping("list")
    public RestResult<List<Template>> list() {
        return RestResultUtils.success(templateService.getTemplateList());
    }

    /**
     * 获取当前模板
     * @return
     */
    @GetMapping("current")
    public RestResult<Template> getCurrTemplate() {
        return RestResultUtils.success(templateService.getCurrTemplate());
    }

    /**
     * 安装模板
     * @param file
     * @return
     */
    @PostMapping("install")
    public Object install(@RequestParam("file") MultipartFile file) {

        String fileName = file.getOriginalFilename();
        String suffixName = fileName.substring(fileName.lastIndexOf(".") + 1);
        //检查文件格式是否合法
        if(StringUtils.isEmpty(suffixName)) {
            return RestResultUtils.failed("文件格式不合格，请上传zip文件");
        }
        if(!"zip".equalsIgnoreCase(suffixName)) {
            return RestResultUtils.failed("文件格式不合格，请上传zip文件");
        }

        File uploadFile = new File(DirUtils.getTemplateDir(), file.getOriginalFilename());
        try {
            file.transferTo(uploadFile);
            templateService.install(uploadFile);
            return RestResultUtils.success();
        } catch (Exception e) {
            return RestResultUtils.failed(e.getMessage());
        } finally {
            if(uploadFile != null) {
                uploadFile.delete();
            }
        }
    }

    /**
     * 卸载模板
     * @param templateId    模板id
     * @return
     */
    @PostMapping("unInstall")
    public Object unInstall(@RequestParam("templateId") String templateId) {

        try {
            templateService.unInstall(templateId);
            return RestResultUtils.success();
        } catch (Exception e) {
            return RestResultUtils.failed(e.getMessage());
        }

    }

    /**
     * 获取模板文件树
     * @return
     */
    @GetMapping("files/tree/list")
    public Object treeList() {
        Template currTemplate = templateService.getCurrTemplate();
        if(currTemplate == null) {
            return RestResultUtils.failed("模板不存在");
        }

        try {
            return RestResultUtils.success(templateService.getTemplateTreeFiles());
        } catch (Exception e) {
            return RestResultUtils.failed(e.getMessage());
        }
    }

    /**
     * 获取文件内容
     * @param filePath
     * @return
     */
    @GetMapping("files/get")
    public Object getFileContent(@RequestParam("filePath") String filePath) {

        if(StringUtils.isBlank(filePath) || filePath.contains("..")) {
            return RestResultUtils.failed("文件不存在");
        }

        Template currTemplate = templateService.getCurrTemplate();
        if(currTemplate == null) {
            return RestResultUtils.failed("未找到目标模板");
        }

        Path templatePath = currTemplate.getTemplatePath();

        Path file = Paths.get(templatePath.toString().concat(filePath.substring(currTemplate.getPathName().length())));
        if(Files.isDirectory(file)) {
            return RestResultUtils.failed("请指定一个文件");
        }

        if(!Files.exists(file)) {
            return RestResultUtils.failed("文件不存在");
        }

        Map<String, Object> result = new HashMap<>();
        if(file != null) {
            try {
                result.put("fileContent", FileCopyUtils.copyToString(new FileReader(file.toFile())));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return RestResultUtils.success(result);
    }

    /**
     * 激活模板
     * @param templateId    模板id
     * @return
     */
    @PostMapping("enable/{templateId}")
    public Object enable(@PathVariable("templateId") String templateId) {
        configService.saveConfig(FastcmsConstants.TEMPLATE_ENABLE_ID, templateId);
        return RestResultUtils.success();
    }

    /**
     * 保存模板
     * @param dirName
     * @param fileName
     * @param fileContent
     * @return
     * @throws IOException
     */
    @PostMapping("save")
    public Object save(String dirName, String fileName, String fileContent) throws IOException {
        Template currTemplate = templateService.getCurrTemplate();
        if(currTemplate == null) {
            return RestResultUtils.failed("没有找到模板");
        }
        Path templatePath = currTemplate.getTemplatePath();

        if(StringUtils.isNotBlank(dirName)) {
            if(dirName.contains("..")) dirName = "";
            templatePath = Paths.get(templatePath.toString().concat("/" + dirName));
        }

        if(StringUtils.isNotBlank(fileName) && fileName.contains("..")) {
            return RestResultUtils.failed("没有找到模板");
        }

        Stream<Path> list = Files.list(templatePath);
        List<Path> files = listPathFiles(list.collect(Collectors.toList()));

        Path currFile = getCurrFile(files, fileName);

        if(currFile == null) {
            return RestResultUtils.failed("文件不存在");
        }

        File file = currFile.toFile();
        if(!file.canWrite()) {
            return RestResultUtils.failed("文件没有写入权限");
        }

        FileUtils.writeString(file, fileContent);

        return RestResultUtils.success();
    }

    /**
     * 上传模板文件
     * @param dirName
     * @param files
     * @return
     */
    @PostMapping("upload")
    @ExceptionHandler(value = MultipartException.class)
    public Object upload(String dirName, @RequestParam("files") MultipartFile files[]) {

        Template currTemplate = templateService.getCurrTemplate();
        if(currTemplate == null) {
            return RestResultUtils.failed("没有找到模板");
        }
        if(files == null || files.length <=0) {
            return RestResultUtils.failed("请选择需要上传的模板文件");
        }

        Path templatePath = currTemplate.getTemplatePath();

        if(StringUtils.isNotBlank(dirName)) {
            if(dirName.contains("..")) {
                return RestResultUtils.failed("目录不存在");
            }
            templatePath = Paths.get(templatePath.toString().concat("/" + dirName));
        }

        List<String> errorFiles = new ArrayList<>();

        for(MultipartFile file : files) {

            if(FileUtils.isNotAllowFile(file.getOriginalFilename())) {
                continue;
            }

            File uploadFile = new File(templatePath.toString(), file.getOriginalFilename());
            try {
                if (!uploadFile.getParentFile().exists()) {
                    uploadFile.getParentFile().mkdirs();
                }
                file.transferTo(uploadFile);
                long fileSize = uploadFile.length();
                if(fileSize > 1024 * 1024 * 5) {
                    uploadFile.delete();
                    errorFiles.add(file.getOriginalFilename());
                    continue;
                }
            } catch (IOException e) {
                e.printStackTrace();
                if(uploadFile != null) {
                    uploadFile.delete();
                }
                errorFiles.add(file.getOriginalFilename());
            }
        }

        return errorFiles.isEmpty() ? RestResultUtils.success()
                : RestResultUtils.failed(errorFiles.stream().collect(Collectors.joining(",")).concat(",以上文件上传失败"));
    }

    /**
     * 删除模板文件
     * @param filePath
     * @return
     */
    @PostMapping("file/delete/{filePath}")
    public Object delFile(@PathVariable("filePath") String filePath) {

        if(StringUtils.isBlank(filePath)) {
            return RestResultUtils.failed("文件路径为空");
        }

        if(filePath.contains("..")) {
            return RestResultUtils.failed("文件路径不合法");
        }

        Template currTemplate = templateService.getCurrTemplate();
        if(currTemplate == null) {
            return RestResultUtils.failed("没有找到模板");
        }
        Path templatePath = currTemplate.getTemplatePath();
        try {
            Paths.get(templatePath.toString() + File.separator + filePath).toFile().delete();
            return RestResultUtils.success();
        } catch (Exception e) {
            e.printStackTrace();
            return RestResultUtils.failed(e.getMessage());
        }
    }

    /**
     * 菜单列表
     * @param page
     * @return
     */
    @RequestMapping("menu/list")
    public RestResult<Page<Menu>> menuList(PageModel page) {
        QueryWrapper queryWrapper = new QueryWrapper();
        Page<Menu> pageData = menuService.page(page.toPage(), queryWrapper);
        return RestResultUtils.success(pageData);
    }

    /**
     * 菜单信息
     * @param menuId
     * @return
     */
    @RequestMapping("menu/get/{menuId}")
    public RestResult<Menu> getMenu(@PathVariable("menuId") Long menuId) {
        return RestResultUtils.success(menuService.getById(menuId));
    }

    /**
     * 保存菜单
     * @param menu
     * @return
     */
    @PostMapping("menu/save")
    public RestResult<Boolean> saveMenu(@Validated Menu menu) {
        return RestResultUtils.success(menuService.saveOrUpdate(menu));
    }

    /**
     * 删除菜单
     * @param menuId
     * @return
     */
    @PostMapping("menu/delete/{menuId}")
    public RestResult<Boolean> doDeleteMenu(@PathVariable("menuId") Long menuId) {
        return RestResultUtils.success(menuService.removeById(menuId));
    }

    List<Path> listPathFiles(List<Path> files) {
        return files.stream().filter(item -> item.toFile().isFile() && !item.getFileName().toString().endsWith(".properties")).collect(Collectors.toList());
    }

    Path getCurrFile(List<Path> files, String fileName) {
        for (Path file : files) {
            if(file.getFileName().toString().equals(fileName)){
                return file;
            }
        }
        return null;
    }

}
