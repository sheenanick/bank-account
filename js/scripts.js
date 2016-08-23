var account1 = {};

// Back-end
function NewAccount(nombre, initialD) {
  this.name = nombre;
  this.balance = initialD;
}
NewAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

NewAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}
// Front-end
$(document).ready(function() {
  $("form#first").submit(function(event){
    event.preventDefault();
    debugger;
    var nombre = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());
    account1 = new NewAccount(nombre, initialDeposit);
    console.log(account1);
    console.log(account1.name1);
    $("ul#bankAccounts").append("<li><span class='bankAccount1'>" + account1.name + "</span></li>");
    $("#balanceInsert").text(account1.balance);
    $(".balance h1").show();
    $(".second").show();
  });
  $("form#second").submit(function(event){
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());
    if(deposit){
      account1.deposit(deposit);
    }
    if(withdrawal){
      account1.withdraw(withdrawal);
    }
    $("#balanceInsert").text(account1.balance);
    console.log(account1.balance);
  });
});
