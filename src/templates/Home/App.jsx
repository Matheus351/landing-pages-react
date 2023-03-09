import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { useEffect, useState, useRef } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?slug=create-new-page&populate=deep',
        );
        const json = await data.json();
        const pageData = mapData(json.data);
        console.log(pageData);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}
export default Home;
