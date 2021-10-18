import styled from "styled-components";
import { motion } from "framer-motion";

const cats = [
  "Dirceu",
  "Bozó",
  "Letícia",
  "Bento",
  "Gato Amarelo",
  "Branquinha",
  "Vaquinha",
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #101010;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  width: 100%;
  max-width: 800px;
  color: #464646;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 10px;
`;

const ListItem = styled.li`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

function App() {
  return (
    <Container>
      <List>
        {cats.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{
              opacity: 0,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          >
            <ListItem>{cat}</ListItem>
          </motion.div>
        ))}
      </List>
    </Container>
  );
}

export default App;
