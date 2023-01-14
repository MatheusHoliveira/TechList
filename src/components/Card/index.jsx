import { Container, IconContainer, Title, Description } from "./styles";

const Card = ({ id, name, description, primaryColor, icon: Icon, onClick }) => {
  return (
    <Container onClick={() => onClick(id)}>
      <IconContainer secondaryColor={secondaryColor}>
        <Icon size={24} style={{ color: primaryColor }} />
      </IconContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
