function validateForm() {
    var name = document.getElementsByName("name")[0].value;
    var rate = document.getElementsByName("rate")[0].value;
    var weight = document.getElementsByName("weight")[0].value;
    var itemSelect = document.getElementById("itemSelect").value;
  
    if (name != "" && rate != "" && weight != "" && itemSelect != "") {
      window.print();
    } else {
      alert("Please fill all required fields.");
    }
  }

  function calculateAmount() {
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const expense = parseFloat(document.getElementById('expense').value) || 0;
    const labour = parseFloat(document.getElementById('labour').value) || 0;
    const pay = parseFloat(document.getElementById('pay').value) || 0;
    const amount = (rate / 40) * weight;
    document.getElementById("amount").innerHTML = "رقم: " + amount;
    const totalExpense = (amount * expense) / 100;
    document.getElementById('expenseAmount').innerHTML = ' خرچہ: ' + totalExpense;
    document.getElementById('labouramount').innerHTML = 'مزدوری:' + labour;
    const totalAmount = amount - totalExpense - labour;
    document.getElementById('totalamount').innerHTML = 'کل رقم: ' + totalAmount;
    document.getElementById('paying').innerHTML = ' نقد رقم : ' + pay;
    const remainingAmount = totalAmount - pay;
     document.getElementById('remainingAmount').innerHTML = 'بقایا رقم : ' + Math.round( remainingAmount);


}