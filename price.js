var basePrice = 12.99;

$(".calculate").change(function () {
    newPrice = basePrice;
    $(".calculate option:selected").each(function () {
        newPrice += parseFloat($(this).data('price'));
        console.log(typeof newPrice);
    });
    newPrice = newPrice.toFixed(2);
    $("#item-price").html(newPrice);
});