//全局变量
let records = [];

//默认jp
let currentLang = "jp";

let currentMonth = "";

// all / income / expense
let currentFilter = "all";

//search keyword
let currentSearch = "";

//i18n语言包
const i18n = {
    "jp": {
        title: "家計簿",
        allMonths: "全ての月",
        income: "収入",
        expense: "支出",
        amount: "金額",
        category: "カテゴリー",
        date: "日付",
        note: "メモ",
        addButton: "記録を追加",
        totalIncome: "総収入",
        totalExpense: "総支出",
        balance: "残高",
        all: "全て",
        searchPlaceholder: "検索...",
        listTitle: "記録一覧",
        totalCount: "合計",
        records: "記録",
        clearData: "データをクリア"
    },
    "zh": {
        title: "记账本",
        allMonths: "所有月份",
        income: "收入",
        expense: "支出",
        amount: "金额",
        category: "类别",
        date: "日期",
        note: "备注",
        addButton: "添加记录",
        totalIncome: "总收入",
        totalExpense: "总支出",
        balance: "余额",
        all: "全部",
        searchPlaceholder: "搜索...",
        listTitle: "记录列表",
        totalCount: "总计",
        records: "记录",
        clearData: "清空数据"

    },
    "en": {
        title: "Account Book",
        allMonths: "All Months",
        income: "Income",
        expense: "Expense",
        amount: "Amount",
        category: "Category",
        date: "Date",
        note: "Note",
        addButton: "Add Record",
        totalIncome: "Total Income",
        totalExpense: "Total Expense",
        balance: "Balance",
        all: "All",
        searchPlaceholder: "Search...",
        listTitle: "Record List",
        totalCount: "Total Count",
        records: "Records",
        clearData: "Clear Data"
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

//页面加载完成后初始化
document.addEventListener("DOMContentLoaded", init);

//事件绑定
function bindEvents() {
    //语言切换
    const langSelect = document.getElementById("languageSelect");
    langSelect.addEventListener("change", () => {
        changeLanguage(langSelect.value);
    })
    //月份筛选
    dom.monthFilter.addEventListener("change", () => {
        currentMonth = this.value;
        render();
    })
    //类型切换（收入/支出）

    //添加记录按钮

    //搜索输入

    //筛选按钮

    //清空数据按钮
}

//语言切换
function changeLanguage(lang) {
    currentLang = lang;
    render();
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

function generateMonthOptions() {
    const select = dom.monthFilter;
}

//文本更新
// ==================== 更新页面文字（多语言切换核心） ====================
function updateTexts() {
    const t = i18n[currentLang];

    // Header 标题（你的HTML用的是 class="title"）
    const titleEl = document.querySelector('.title');
    if (titleEl) titleEl.textContent = t.title;

    // 添加区域标题
    const addTitle = document.getElementById('addTitle');
    if (addTitle) addTitle.textContent = t.addTitle;

    // 统计区域
    const incomeLabel = document.getElementById('incomeLabel');
    if (incomeLabel) incomeLabel.textContent = t.totalIncome;

    const expenseLabel = document.getElementById('expenseLabel');
    if (expenseLabel) expenseLabel.textContent = t.totalExpense;

    const balanceLabel = document.getElementById('balanceLabel');
    if (balanceLabel) balanceLabel.textContent = t.balance;

    // 列表标题
    const listTitle = document.getElementById('listTitle');
    if (listTitle) listTitle.textContent = t.listTitle;

    // 搜索框 placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // 添加按钮
    const addBtn = document.getElementById('addRecordBtn');
    if (addBtn) addBtn.textContent = t.addButton;
}

//渲染函数
function render() {
    updateTexts();
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
