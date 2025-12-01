import { useEffect } from "react";

const Sitemap = () => {
  useEffect(() => {
    // Redirect to the static sitemap.xml file
    // This ensures the file is served directly without React Router interference
    window.location.replace("/sitemap.xml");
  }, []);

  return null;
};

export default Sitemap;

