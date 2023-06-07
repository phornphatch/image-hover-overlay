type Props = {
  title: string;
  hoverTitle: string;
  hoverDescription: string;
  link?: string;
  image: string;
  imageAlt: string;
  titleTextClasses?: string;
  overlayClasses?: string;
  hoverTitleTextClasses?: string;
  hoverDescriptionTextClasses?: string;
  hoverContainerClasses?: string;
};

export default function ImageHoverOverlay({
  title,
  hoverTitle,
  hoverDescription,
  link,
  image,
  imageAlt,
  titleTextClasses,
  overlayClasses,
  hoverTitleTextClasses,
  hoverDescriptionTextClasses,
  hoverContainerClasses,
}: Props) {
  return (
    <>
      <div className={`image-hover-overlay--container ${overlayClasses}`}>
        <div className={`image-hover-overlay--title ${titleTextClasses}`}>
          {title}
        </div>
        <img
          src={image}
          alt={imageAlt}
          className="image-hover-overlay--image"
        />
        {link && (
          <a
            className={`image-hover-overlay--overlay ${hoverContainerClasses}`}
            href={link}
          >
            <div className={`image-hover-overlay--hovercontainer `}>
              <div
                className={`image-hover-overlay--hovertitle ${hoverTitleTextClasses}`}
              >
                {hoverTitle}
              </div>
              <div
                className={`image-hover-overlay--hoverdescription ${hoverDescriptionTextClasses}`}
              >
                {hoverDescription}
              </div>
            </div>
          </a>
        )}

        {!link && (
          <div
            className={`image-hover-overlay--overlay ${hoverContainerClasses}`}
          >
            <div className={`image-hover-overlay--hovercontainer `}>
              <div
                className={`image-hover-overlay--hovertitle ${hoverTitleTextClasses}`}
              >
                {hoverTitle}
              </div>
              <div
                className={`image-hover-overlay--hoverdescription ${hoverDescriptionTextClasses}`}
              >
                {hoverDescription}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
