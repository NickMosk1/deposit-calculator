package com.example.deposit_calculator.service;

import com.example.deposit_calculator.dto.CalculationRequest;
import com.example.deposit_calculator.dto.CalculationResponse;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class CalculationService {

    private static final int CALCULATION_SCALE = 10;
    private static final int RESULT_SCALE = 2;
    private static final BigDecimal MONTHS_IN_YEAR = BigDecimal.valueOf(12);
    private static final BigDecimal ONE_HUNDRED = BigDecimal.valueOf(100);

    public CalculationResponse calculate(CalculationRequest request) {
        BigDecimal amount = request.getAmount();
        int months = request.getMonths();
        BigDecimal rate = request.getRate();

        BigDecimal monthlyRate = rate.divide(ONE_HUNDRED, CALCULATION_SCALE, RoundingMode.HALF_UP).divide(MONTHS_IN_YEAR, CALCULATION_SCALE, RoundingMode.HALF_UP);
        BigDecimal base = BigDecimal.ONE.add(monthlyRate);
        BigDecimal powerResult = base.pow(months);

        BigDecimal total = amount.multiply(powerResult).setScale(RESULT_SCALE, RoundingMode.HALF_UP);
        BigDecimal profit = total.subtract(amount).setScale(RESULT_SCALE, RoundingMode.HALF_UP);

        return new CalculationResponse(total, profit);
    }
}
