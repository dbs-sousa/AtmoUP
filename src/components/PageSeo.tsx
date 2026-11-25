import { Helmet } from "react-helmet-async";
import { BASE_URL } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown>;
}

const PageSeo = ({ title, description, path, breadcrumbs, schema }: PageSeoProps) => {
  const canonicalUrl = `${BASE_URL}${path === "/" ? "/" : path}`;

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: `${BASE_URL}${item.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default PageSeo;