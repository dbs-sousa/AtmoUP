import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureAttribution, captureSource } from "@/lib/leads";

export default function LeadAttribution() {
  const { search } = useLocation();
  useEffect(() => {
    try {
      captureAttribution(search, sessionStorage);
      if (new URLSearchParams(search).has("origem")) captureSource(search, "", sessionStorage);
    } catch { /* Storage may be blocked. */ }
  }, [search]);
  return null;
}