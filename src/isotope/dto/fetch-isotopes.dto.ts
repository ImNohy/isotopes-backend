import { ApiProperty } from "@nestjs/swagger";
import { IsotopeView } from "../views/isotope.view.js";

export class FetchIsotopesResponse {
    @ApiProperty({ type: IsotopeView, isArray: true })
    isotopes: IsotopeView[];

    @ApiProperty({
        example: 20,
        description: 'Применённый фильтр; -1, если фильтр не задан',
    })
    maxHalfLifeExponent: number;
}
