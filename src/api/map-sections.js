export const mapSections = (sections) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid, image_grid } = section;
      // console.log(image_grid);

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section) => {
  const {
    __component: component,
    title,
    description: text,
    metadata: { background, section_id: sectionId },
  } = section;

  const srcImg = section?.image?.data?.attributes?.url || '';

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section) => {
  const {
    __component: component,
    title,
    content: html,
    metadata: { background, section_id: sectionId },
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section) => {
  const {
    title,
    description,
    metadata: { background, section_id: sectionId },
    text_grid: grid,
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title, description } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section) => {
  console.log(section);

  const {
    title,
    description,
    metadata: { background = false, section_id: sectionId },
    image_grid: grid,
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { data },
      } = img;
      const srcImg = data[0].attributes.url;
      const altText = data[0].attributes.alternativeText || '';
      return {
        srcImg,
        altText,
      };
    }),
  };
};
