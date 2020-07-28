import React from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import {
    Wrapper,
    Container,
    Header,
    Search,
    SectionTitle,
    Card,
    CardImage,
    Title,
    Description,
    Bold,
    CardBody,
    CardActions,
    Image,
    Divider,
    Find,
    FindTitle,
    FindText,
    FindButton,
    FindButtonText
 } from './styles';

import img1 from '../../images/01.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';
import img14 from '../../images/14.png';
import smiles from '../../images/smile.png'

const items = [
    {
        key: String(Math.random()),
        img: img14,
        label: 'Pagar nas Maquininhas',
        description: 'Pague em maquininhas Cielo e Getnet escaneando o QR code'
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Pagar Conta',
        description: 'Pague sua conta de luz, água, boletos bancários etc.'
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'Cobrar',
        description: 'Cobre um amigo'
    },
    {
        key: String(Math.random()),
        img: img1,
        label: 'Recarga de Celular',
        description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios'
    },
];

const Pay = () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    <Search placeholder="Quem você quer pagar?" placeholderTextColor="#92929c">
                    </Search>
                </Header>
                <SectionTitle>Serviços</SectionTitle>
                {items.map(item => (
                    <Card key={item.key}>
                        <CardImage>
                            <Image source={item.img} />
                        </CardImage>
                        <CardBody>
                            <Title>
                                {item.label}
                            </Title>
                            <Description>
                                {item.description}
                            </Description>                    
                        </CardBody>
                        <CardActions>
                            <Feather name="more-vertical" size={30} color="#92929c" />
                        </CardActions>
                    </Card>
                ))}                
                <Divider />
                <SectionTitle>Contatos</SectionTitle>
                <Find>
                    <Image source={smiles} />
                    <FindTitle>
                        <Bold>Encontre seus amigos</Bold>
                    </FindTitle>
                    <FindText>
                        Libere acesso a sua agenda para saber quem já está no PicPay. Junte-se aos seus amigos
                        para pagar e receber dinheiro mais rápido!
                    </FindText>
                    <FindButton>
                        <FindButtonText>Autorizar agenda</FindButtonText>
                    </FindButton>
                </Find>
            </Container>
        </Wrapper>
    );
};

export default Pay;