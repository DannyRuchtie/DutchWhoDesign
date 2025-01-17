export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Dutch Who Design" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Dutch designers and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dutchwho.design" />
      <meta property="og:title" content="Dutch Who Design" />
      <meta
        property="og:description"
        content="A repository of talented Dutch designers."
      />
      <meta property="og:image" content="https://dutchwho.design/img/preview.png" />

      <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)"/>
      <meta name="theme-color" content="#111"  media="(prefers-color-scheme: dark)"/>

    
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="dutch who design"/>


      <meta name="twitter:url" content="https://dutchwho.design" />
      <meta name="twitter:title" content="Dutch Who Design" />
      <meta
        name="twitter:description"
        content="A repository of talented Dutch designers."
      />
      <meta name="twitter:image" content="https://dutchwho.design/img/preview.png"  />
    </>
  );
}
