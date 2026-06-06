let records = [];

//默认jp
let currentLang = "jp";

let currentMonth = "";

// all / income / expense
let currentFilter = "all";

//search keyword
currentSearch = "";

//i18n语言包
const i18n = {
    "jp": {
        title: "家計簿",
        allMonths: "全ての月"
    },
    "zh": {
        title: "记账本",
        allMonths: "所有月份"
    },
    "en": {
        title: "Account Book",
        allMonths: "All Months"
    }

}


//初始化函数
function init() {
    //绑定所有事件
    bindEvents();

    //生成月份选项
    generateMonthOptions();

    //记载本地数据
    loadFromLocalStorage();

    render();
}

//事件绑定
function bindEvents() {
    //语言切换

    //月份筛选

    //类型切换（收入/支出）

    //添加记录按钮

    //搜索输入

    //筛选按钮

    //清空数据按钮
}

//数据操作核心函数
function addRecord() {

}

function deleteRecord(id) {

}

function editRecord(id) {

}

function saveToLocalStorage() {

}

function loadFromLocalStorage() {

}



//dom
const dom = {
    languageSelect: document.getElementById("languageSelect"),
    monthFilter: document.getElementById("monthFilter")
}

dom.languageSelect.addEventListener("change", () => {
    currentLang = this.value;
    render();
})

dom.monthFilter.addEventListener("change", () => {
    currentMonth = this.value;
    render();
})

function generateMonthOptions() {
    const select = dom.monthFilter;
}


//渲染函数
function render() {
    renderHeader();
    renderSummary();
    renderRecordList();
}

//子函数渲染
function renderHeader() { }
function renderSummary() { }
function renderRecordList() { }

//辅助工具函数
function generationMonthOption() { }

function filterRecords() { }
