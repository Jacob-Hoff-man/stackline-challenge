import { ReactElement } from 'react'
import { Container, Paper, styled, Typography, Divider, Chip } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ItemDetailContainer = styled(Paper)(() => ({
    marginLeft: 16,
    marginRight: 8,
    paddingTop: 24,
    paddingBottom: 320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
}));

const ItemDetailThumbnail = styled(Container)(() => ({
    marginLeft: 0,
    paddingLeft: 0,
}))

const ItemTitle = styled(Typography)(() => ({
    paddingTop: 24
}))

const ItemSubtitle = styled(Typography)(() => ({
    color: 'gray',
    marginBottom: 16
}))

const ItemTags = styled(Container)(() => ({
    marginTop: 16,
}))

const ItemTagChip = styled(Chip)(() => ({
    marginRight: 4,
    marginBottom: 16,
    fontWeight: 200,
    borderRadius: 4
}))

const ItemDetail = (): ReactElement => {
    const item = useSelector((state: RootState) => state.item.item)

    return (
        <>
            {
                item && (
                    <ItemDetailContainer>
                        <Container>
                            <ItemDetailThumbnail maxWidth={false} >
                                <img src={item.image} alt="Logo" className="item-thumbnail" />
                            </ItemDetailThumbnail>
                            <ItemTitle variant="h5" gutterBottom>
                                {item.title}
                            </ItemTitle>
                            <ItemSubtitle gutterBottom>
                                {item.subtitle}
                            </ItemSubtitle>
                            <Divider />
                            <ItemTags>
                                {
                                    item.tags.map((tag) => <ItemTagChip key={tag} label={tag} variant='outlined' />)
                                }
                            </ItemTags>
                            <Divider />
                        </Container>
                    </ItemDetailContainer>
                )
            }
        </>
    )
}

export default ItemDetail