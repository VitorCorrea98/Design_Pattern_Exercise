interface ContentType {
  render(): string;
}

class ImageContent implements ContentType {
  render() {
    return "Image Content";
  }
}

class VideoContent implements ContentType {
  render() {
    return "Video Content";
  }
}

interface RenderingFormat {
  screen(): string;
}

class DesktopRendering implements RenderingFormat {
  screen() {
    return "Desktop Screen";
  }
}

class MobileRendering implements RenderingFormat {
  screen() {
    return "Mobile Screen";
  }
}

class Content {
  constructor(private contentType: ContentType, 
    private renderingFormat: RenderingFormat) {
  }

  perfomFormat() {
    return this.renderingFormat.screen();
  }

  performContent() {
    return this.contentType.render();
  }

  setContentType(contentType: ContentType) {
    this.contentType = contentType;
  }

  setRenderingFormat(renderingFormat: RenderingFormat) {
    this.renderingFormat = renderingFormat;
  }
}

const mobileFormat = new MobileRendering();
const desktopFormat = new DesktopRendering();

const imageContent = new ImageContent();
const videoContent = new VideoContent();

const content = new Content(imageContent, mobileFormat);
console.log(content.performContent()); // Image Content
console.log(content.perfomFormat()); // Mobile Screen

content.setRenderingFormat(desktopFormat);
content.setContentType(videoContent);
console.log(content.performContent()); // Video Content
console.log(content.perfomFormat()); // Desktop Screen