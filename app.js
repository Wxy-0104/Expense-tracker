//全局变量
let records = [];

//默认jp
let currentLang = "jp";

let currentMonth = "";

// all / income / expense
let currentFilter = "all";

//search keyword
let currentSearch = "";

//dom
const dom = {
    langSelect: document.getElementById("languageSelect"),
    monthFilter: document.getElementById("monthFilter"),
    title: document.querySelector(".title"),
    addTitle: document.getElementById("addTitle"),
    incomeLabel: document.getElementById("incomeLabel"),
    expenseLabel: document.getElementById("expenseLabel"),
    balanceLabel: document.getElementById("balanceLabel"),
    listTitle: document.getElementById("listTitle"),
    searchInput: document.getElementById("searchInput"),
    addRecordBtn: document.getElementById("addRecordBtn"),
    clearDataBtn: document.getElementById("clearDataBtn"),
    amountInput: document.getElementById("amountInput"),
    categorySelect: document.getElementById("categorySelect"),
    dateInput: document.getElementById("dateInput"),
    noteInput: document.getElementById("noteInput"),
    typeSelect: document.getElementById("typeSelect"),
    activeTypeBtn: document.querySelectorAll(".type-btn.active"),



}

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
    dom.langSelect.addEventListener("change", () => {
        changeLanguage(dom.langSelect.value);
    })
    //月份筛选
    dom.monthFilter.addEventListener("change", () => {
        currentMonth = dom.monthFilter.value;
        render();
    })
    //类型切换（收入/支出）

    //添加按钮
    dom.addRecordBtn.addEventListener("click", addRecord);
    //搜索输入

    //筛选按钮

    //清空数据按钮
    dom.clearDataBtn.addEventListener("click", clearData);
}

//语言切换
function changeLanguage(lang) {
    currentLang = lang;
    render();
}

//数据操作核心函数
function addRecord() {
    //获取输入数据
    const amount = parseInt(dom.amountInput.value);

    if (isNaN(amount) || amount <= 0) return alert("请输入有效的金额");

    const type = document.querySelector(".type-btn.active").id === "incomeBtn" ? "income" : "expense";

    const newRecord = {
        id: Date.now(),
        type: type,
        amount: amount,
        category: dom.categorySelect.value || "其他",
        date: dom.dateInput.value || new Date().toISOString().split("T")[0],
        note: dom.noteInput.value,

    }
    records.push(newRecord);

    saveToLocalStorage();
    clearForm();
    render();

    console.log("添加成功");

}

function deleteRecord(id) {

}

function editRecord(id) {

}

function saveToLocalStorage() {

}

function loadFromLocalStorage() {

}

function clearForm() {

}





function generateMonthOptions() {
    const select = dom.monthFilter;
}

//文本更新
// ==================== 更新页面文字（多语言切换核心） ====================
function updateTexts() {
    const t = i18n[currentLang];

    // Header 标题
    if (dom.title) dom.title.textContent = t.title;

    // 添加区域标题
    if (dom.addTitle) dom.addTitle.textContent = t.addTitle;

    // 统计区域
    if (dom.incomeLabel) dom.incomeLabel.textContent = t.totalIncome;

    if (dom.expenseLabel) dom.expenseLabel.textContent = t.totalExpense;

    if (dom.balanceLabel) dom.balanceLabel.textContent = t.balance;

    // 列表标题
    if (dom.listTitle) dom.listTitle.textContent = t.listTitle;

    // 搜索框 placeholder
    if (dom.searchInput) dom.searchInput.placeholder = t.searchPlaceholder;

    // 添加按钮
    if (dom.addRecordBtn) dom.addRecordBtn.textContent = t.addButton;
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
