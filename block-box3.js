// by Albert Z
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

Blockly.Blocks['b3event_tick_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("时间事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_chat_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("聊天事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_join_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("玩家加入事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_leave_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("玩家离开事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_interact_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("互动事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_click_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("点击实体事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_press_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("按下按键事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_release_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("松开按键事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
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

Blockly.Blocks['b3event_entity_create_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("实体创建事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_damage_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("受伤害事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3event_die_bond'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("死亡事件绑定");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("填写函数名称");
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

Blockly.Blocks['b3entity_mesh'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("设置实体形状");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_pos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置实体位置")
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
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("实体发言");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_enableInteract'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["允许", "true"], ["禁止", "false"]]), "ABLE")
            .appendField("实体互动");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_text'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("设置互动提示文本");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3entity_destroy'] = {
    init: function () {
        this.appendDummyInput()
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
        this.appendDummyInput()
            .appendField("玩家用户名");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("玩家ID");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_key'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("玩家标识码");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_sp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置玩家出生点")
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
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("私信玩家");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b3player_fly'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["允许", "true"], ["禁止", "false"]]), "ABLE")
            .appendField("玩家飞行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};