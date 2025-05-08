console.log(DebitCardType(5114496353984312));
console.log(DebitCardType(4155279860457));

function DebitCardType(num) {
  num = num.toString().replace(/\D/g, "");

  var re = new RegExp("^4");
  if (re.test(num)) return "Visa";

  re = new RegExp(
    "^(5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12})$"
  );
  if (re.test(num)) return "Mastercard";

  return "Invalid";
}
