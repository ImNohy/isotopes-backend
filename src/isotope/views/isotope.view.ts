import { ApiProperty } from '@nestjs/swagger';

export class IsotopeView {
    @ApiProperty({ example: 1, description: 'Идентификатор изотопа' })
    id: number;

    @ApiProperty({ example: 'Уран-235', description: 'Название изотопа' })
    name: string;

    @ApiProperty({
        example: 'Описание изотопа',
        nullable: true,
        type: String,
        description: 'Описание; null, если не задано',
    })
    description: string | null;

    @ApiProperty({
        example: 'isotopes/abc-123/image.png',
        nullable: true,
        type: String,
        description: 'Ключ изображения в MinIO',
    })
    imageUrl: string | null;

    @ApiProperty({
        example: 'isotopes/abc-123/video.mp4',
        nullable: true,
        type: String,
        description: 'Ключ видео в MinIO',
    })
    videoUrl: string | null;

    @ApiProperty({
        example: '703800000000000000',
        nullable: true,
        type: String,
        description: 'Период полураспада в наносекундах (bigint как строка)',
    })
    halfLife: string | null;

    @ApiProperty({
        example: '700 млн лет',
        description: 'Отформатированный период полураспада',
    })
    halfLifeFormatted: string;

    @ApiProperty({
        example: false,
        nullable: true,
        type: Boolean,
        description: 'Является ли альфа-излучателем',
    })
    isAlpha: boolean | null;

    @ApiProperty({ example: 12, description: 'Количество лайков' })
    likeCount: number;

    @ApiProperty({
        example: true,
        description: 'Поставил ли лайк текущий пользователь',
    })
    isLiked: boolean;

    @ApiProperty({
        example: false,
        description: 'Является ли текущий пользователь автором',
    })
    isAuthor: boolean;
}
