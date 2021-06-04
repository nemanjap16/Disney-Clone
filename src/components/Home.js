import styled from "styled-components";
import SlickSlider from "./imgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/firebase";
import { setMovies } from "../app/features/movieSlice";
import { selectUserName } from "../app/features/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
        return doc;
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div>
      <Container>
        <SlickSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </div>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
