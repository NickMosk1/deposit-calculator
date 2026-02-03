package com.example.deposit_calculator.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public class CalculationRequest {

    @NotNull(message = "Сумма вклада обязательна")
    @DecimalMin(value = "1000.00", message = "Минимальная сумма вклада: 1000 ₽")
    @DecimalMax(value = "10000000.00", message = "Максимальная сумма вклада: 10 000 000 ₽")
    private BigDecimal amount;

    @NotNull(message = "Срок вклада обязателен")
    @Min(value = 1, message = "Минимальный срок: 1 месяц")
    @Max(value = 60, message = "Максимальный срок: 60 месяцев")
    private Integer months;

    @NotNull(message = "Процентная ставка обязательна")
    @DecimalMin(value = "1.00", message = "Минимальная ставка: 1%")
    @DecimalMax(value = "20.00", message = "Максимальная ставка: 20%")
    private BigDecimal rate;

    public CalculationRequest() {}

    public CalculationRequest(BigDecimal amount, Integer months, BigDecimal rate) {
        this.amount = amount;
        this.months = months;
        this.rate = rate;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Integer getMonths() {
        return months;
    }

    public void setMonths(Integer months) {
        this.months = months;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }
}
