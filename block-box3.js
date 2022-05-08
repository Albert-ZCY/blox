// by Albert Z

Blockly.Blocks['b3_color_rgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("RGB颜色 ")
            .appendField("红：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "R")
            .appendField("绿：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "G")
            .appendField("蓝：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "B");
        this.setColour(10);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_color_rgba'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("RGBA颜色 ")
            .appendField("红：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "R")
            .appendField("绿：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "G")
            .appendField("蓝：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "B")
            .appendField("透明度：")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "A");
        this.setColour(10);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_vector_3'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("三维向量 ")
            .appendField("x:")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "X")
            .appendField("y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "Y")
            .appendField("z:")
            .appendField(new Blockly.FieldNumber(0, 0, 1), "Z");
        this.setColour(10);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_async'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("同步执行");
        this.appendStatementInput("CODE")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_sleep'] = {
    init: function () {
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("等待");
        this.appendDummyInput()
            .appendField("秒");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_run'] = {
    init: function () {
        this.appendValueInput("CODE")
            .appendField("运行");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3_junk'] = {
    init: function () {
        this.appendValueInput("CODE")
            .appendField("丢弃");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_project_name'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("项目名称");
        this.setOutput(true, 'String');
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_current_tick'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("计时器数值");
        this.setOutput(true, 'Number');
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_say'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("广播");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_arg'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("事件参数：")
            .appendField(new Blockly.FieldTextInput("tick"), "NAME");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_world'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当 世界 触发")
            .appendField(new Blockly.FieldDropdown([["时间循环", "TICK"], ["玩家聊天", "CHAT"], ["玩家加入", "JOIN"], ["玩家离开", "LEAVE"], ["按下按键", "PRESS"], ["松开按键", "RELEASE"], ["点击实体", "CLICKE"], ["实体创建", "CREATE"], ["玩家造成伤害", "DAMAGE"], ["玩家死亡", "DIE"], ['发生互动', 'INTERACT']]), "NAME")
            .appendField("事件");
        this.appendStatementInput("FUNC")
            .setCheck(null)
            .appendField("执行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_entity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当 实体 ")
            .appendField(new Blockly.FieldTextInput("entity"), "ENTITY")
            .appendField("触发")
            .appendField(new Blockly.FieldDropdown([["点击事件", "CLICK"], ["触碰实体", "ECONTACT"], ["停止触碰实体", "ESEPARATE"], ["进入液体", "FENTER"], ["离开液体", "FLEAVE"], ["进行互动", "INTERACT"], ["触碰方块", "VCONTACT"], ["停止触碰方块", "CSEPARATE"]]), "NAME")
            .appendField("事件")
        this.appendStatementInput("FUNC")
            .setCheck(null)
            .appendField("执行");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['b3world_create_entity'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("创建实体 参数:");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_add_zone'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("添加区域 参数:");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_remove_zone'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("删除区域 参数:");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_query'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("搜索实体 条件:");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_query_all'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("搜索所有实体 条件:");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3world_sound'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("播放声音");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
}; 

Blockly.Blocks['b3world_weather'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置天气为")
            .appendField(new Blockly.FieldDropdown([["雨", "RAIN"], ["雾", "FOG"], ["雪", "SNOW"]]), "WEATHER");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3voxels_shape'] = {
    init: function () {
        this.appendValueInput("CONFIG")
            .setCheck("String")
            .appendField("设置地图大小");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(150);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
}; 

Blockly.Blocks['b3voxels_set'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("放置方块")
            .appendField(new Blockly.FieldTextInput("名称或id"), "NAME")
            .appendField("在")
            .appendField(new Blockly.FieldTextInput("X坐标"), "X")
            .appendField(new Blockly.FieldTextInput("Y坐标"), "Y")
            .appendField(new Blockly.FieldTextInput("Z坐标"), "Z")
            .appendField("面向")
            .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "ROTATION");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(150);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3voxels_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取方块")
            .appendField(new Blockly.FieldTextInput("X坐标"), "X")
            .appendField(new Blockly.FieldTextInput("Y坐标"), "Y")
            .appendField(new Blockly.FieldTextInput("Z坐标"), "Z");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(150);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_get'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("从实体");
        this.appendDummyInput()
            .appendField("获取")
            .appendField(new Blockly.FieldDropdown([["玩家", "PLAYER"]]), "OBJ");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_mesh'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("设置实体");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("形状");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_pos'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("设置实体");
        this.appendDummyInput()
            .appendField('位置：')
            .appendField(new Blockly.FieldTextInput("X坐标"), "X")
            .appendField(new Blockly.FieldTextInput("Y坐标"), "Y")
            .appendField(new Blockly.FieldTextInput("Z坐标"), "Z");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_say'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("实体");
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("发言");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_enableInteract'] = {
    init: function () {
        this.appendValueInput('NAME')
            .appendField(new Blockly.FieldDropdown([["允许", "true"], ["禁止", "false"]]), "ABLE")
            .appendField("实体");
        this.appendDummyInput()
            .appendField("互动");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_text'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("设置实体");
        this.appendValueInput('TEXT')
            .setCheck(null)
            .appendField('互动提示文本');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_destroy'] = {
    init: function () {
        this.appendValueInput('NAME')
            .appendField("销毁实体");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_name'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("玩家");
        this.appendDummyInput()
            .appendField("用户名");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_id'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("玩家");
        this.appendDummyInput()
            .appendField("ID");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_key'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("玩家");
        this.appendDummyInput()
            .appendField("标识码");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_sp'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("设置玩家");
        this.appendDummyInput()
            .appendField("出生地点")
            .appendField(new Blockly.FieldTextInput("X坐标"), "X")
            .appendField(new Blockly.FieldTextInput("Y坐标"), "Y")
            .appendField(new Blockly.FieldTextInput("Z坐标"), "Z");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("填写参数");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_send'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("向玩家");
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("发送私信");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_fly'] = {
    init: function () {
        this.appendValueInput('NAME')
            .appendField(new Blockly.FieldDropdown([["允许", "true"], ["禁止", "false"]]), "ABLE")
            .setCheck(null)
            .appendField("玩家");
        this.appendDummyInput()
            .appendField("飞行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};