import { ApiProperty } from "@nestjs/swagger";

export class LikeResult {
  @ApiProperty({
    example: true,
    description: 'Состояние лайка после операции',
  })
  isLiked: boolean;

  @ApiProperty({
    example: 13,
    description: 'Количество лайков после операции',
  })
  likeCount: number;
}
