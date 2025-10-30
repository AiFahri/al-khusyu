import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    if (title) {
      const fullTitle = `${title} | Yayasan Al-Khusyu'`;
      document.title = fullTitle;
    }

    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    if (description) {
      updateMetaTag("description", description);
      updatePropertyTag("og:description", description);
      updatePropertyTag("twitter:description", description);
    }

    if (title) {
      updatePropertyTag("og:title", title);
      updatePropertyTag("twitter:title", title);
    }

    if (image) {
      const fullImageUrl = image.startsWith("http")
        ? image
        : `https://www.alkhusyu.com${image}`;
      updatePropertyTag("og:image", fullImageUrl);
      updatePropertyTag("twitter:image", fullImageUrl);
    }

    if (url) {
      const fullUrl = url.startsWith("http")
        ? url
        : `https://www.alkhusyu.com${url}`;
      updatePropertyTag("og:url", fullUrl);
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute("href", fullUrl);
    }

    if (type) {
      updatePropertyTag("og:type", type);
    }

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    }
  }, [title, description, keywords, image, url, type, noindex]);

  // Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Yayasan Pendidikan & Sosial Al-Khusyu'",
    url: "https://www.alkhusyu.com",
    logo: "https://www.alkhusyu.com/navbar-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Blitar",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
    },
    sameAs: [],
    description:
      "Yayasan Al-Khusyu' menyelenggarakan pendidikan berbasis pesantren dengan program RA, MI, SMP, dan SMK.",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "organization-schema";
    script.textContent = JSON.stringify(organizationSchema);

    const existingScript = document.getElementById("organization-schema");
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("organization-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
