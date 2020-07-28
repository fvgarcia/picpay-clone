import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Search = styled.TextInput`
    margin-left: 16px;
    flex: 1;
    border-radius: 20px
    background: #131418;
    padding: 0 16px;
`;

export const SectionTitle = styled.Text`
    margin: 20px 16px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Card = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const CardImage = styled.View`
    flex-direction: row;
`;

export const Image = styled.Image``;

export const Description = styled.Text`
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    flex: 1
    justify-content: flex-start;
`;

export const Title = styled.Text`
    margin-left: 15px;
    color: #fff;
    font-size: 18px;
`;

export const CardActions = styled.TouchableOpacity`
    justify-content: flex-end;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const Find = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FindTitle = styled.Text`
    margin: 20px 0;
    font-size: 24px;
    color: #fff;
`;

export const FindText = styled.Text`
    width: 330px
    text-align: center;
    color: #fff;
    font-size: 16px;
`;

export const FindButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #10c86e;
    height: 45px;
    border-radius: 25px;
    margin: 20px 10px;
    padding: 0 40px;
`;

export const FindButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
`;