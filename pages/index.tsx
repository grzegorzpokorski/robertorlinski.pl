import { FC } from 'react';
import { GetStaticProps } from 'next';

import { CenteredText } from 'Components/CenteredText';
import { TextWithLinks } from 'Components/TextWithLinks';
import { NewArticles } from 'Components/NewArticles';
import { MainBanner } from 'Components/MainBanner';
import { Newsletter } from 'Components/Newsletter';
import { Wrapper } from 'Components/Wrapper';
import { Button } from 'Components/Button';
import { TextBlock } from 'Components/TextBlock';
import { Head } from 'Components/Head';
import { P } from 'Components/P';

import { getNewestPosts } from 'Helpers/content/posts';
import { addressSeparator } from 'AddressSeparator';
import { mySummary } from 'Data/mySummary';
import { siteName } from 'SiteName';
import { slogan } from 'Slogan';

import { PostsContainer } from 'Types/content';

import bannerImage from 'Images/banners/me.jpg';

import Playground from 'playground-workspace/playground/src/Playground';
import '@reach/tabs/styles.css';

const Home: FC<PostsContainer> = ({ posts }) => {
  const meta = {
    title: `${siteName} ${addressSeparator} ${slogan}`,
    description:
      'W WordPressie widziałem już prawie wszystko, więc teraz skupiam się na front-endzie. Programuję dla siebie oraz klientów, piszę na blogu i nagrywam filmy na YouTubie. Po godzinach działam jako aktywista ✨',
  };

  return (
    <>
      <Head {...meta} />
      <MainBanner
        title="Cześć, jestem Robert!"
        image={{
          src: bannerImage,
          alt: 'Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.',
        }}
      />
      <Wrapper as="main">
        <TextBlock>
          <P>
            Przez parę ostatnich lat pracowałem z WordPressem, aż do momentu, w którym okazało się,
            że niewiele może mnie w nim już zaskoczyć - dlatego niedawno przerzuciłem się w pełni na
            front-end.
          </P>
          <TextWithLinks text={mySummary} />
          <CenteredText as="footer">
            <Button href="/najpopularniejsze">Najpopularniejsze artykuły</Button>
          </CenteredText>
        </TextBlock>
        <Playground
          id="example"
          initialSnippet={{
            markup: `<div id=app />`,
            css: ``,
            javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));`,
          }}
          defaultEditorTab="javascript"
          transformJs
        />
        <NewArticles {...{ posts }} />
        <Newsletter />
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNewestPosts();

  return {
    props: { posts },
  };
};

export default Home;
