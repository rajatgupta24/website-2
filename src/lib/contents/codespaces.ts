import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "../components/ui-library/feature-table/feature-table.types";

export const codespacesToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "Pricing (Hosted)",
    },
  },
  {
    type: "text",
    data: {
      text: "Free Tier",
    },
  },
  {
    type: "text",
    data: {
      text: "License",
    },
  },
  {
    type: "text",
    data: {
      text: "Availability",
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub Integration",
      image: {
        alt: "GitHub",
        path: "/svg/github.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab Integration",
      image: {
        alt: "GitLab",
        path: "/svg/gitlab.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket Integration",
      image: {
        alt: "Bitbucket",
        path: "/svg/bitbucket.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on GKE",
      image: {
        alt: "GCP",
        path: "/svg/brands/gcp.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on EKS",
      image: {
        alt: "aws",
        path: "/svg/brands/aws.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on AKS",
      image: {
        alt: "azure",
        path: "/svg/brands/azure.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on Kubernetes",
      image: {
        alt: "kubernetes",
        path: "/svg/brands/kubernetes.svg",
      },
    },
  },
  {
    type: "text",
    data: {
      text: "Prebuilds",
    },
  },
  {
    type: "text",
    data: {
      text: "Snapshots",
    },
  },
  {
    type: "text",
    data: {
      text: "VS Code Extensions",
    },
  },
  {
    type: "text",
    data: {
      text: "iPad Support",
    },
  },
  {
    type: "text",
    data: {
      text: "Virtual Desktop (VNC)",
    },
  },
  {
    type: "text",
    data: {
      text: "Desktop VS Code",
    },
  },
  {
    type: "text",
    data: {
      text: "Multi-IDE Support",
    },
  },
];

export const gitpodColumns: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Gitpod",
    image: {
      alt: "gitpod",
      path: "/images/gitpod-logo.svg",
    },
  },
  items: [
    {
      term: "Pricing (Hosted)",
      text: "Free for Open-Source",
    },
    {
      term: "Free Tier",
      text: "50h per month",
    },
    {
      term: "License",
      text: "Open Source",
    },
    {
      term: "Availability",
      text: "Everyone",
    },
    {
      term: "GitHub Integration",
      availability: true,
    },
    {
      term: "GitLab Integration",
      availability: true,
    },
    {
      term: "Bitbucket Integration",
      availability: true,
    },
    {
      term: "Self-Host on GKE",
      availability: true,
    },
    {
      term: "Self-Host on EKS",
      availability: true,
    },
    {
      term: "Self-Host on AKS",
      availability: true,
    },
    {
      term: "Self-Host on Kubernetes",
      availability: true,
    },
    {
      term: "Prebuilds",
      availability: true,
    },
    {
      term: "Snapshots",
      availability: true,
    },
    {
      term: "VS Code Extensions",
      availability: true,
    },
    {
      term: "iPad Support",
      availability: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availability: true,
    },
    {
      term: "Desktop VS Code",
      availability: true,
    },
    {
      term: "Multi-IDE Support",
      availability: true,
    },
  ],
};

export const codespacesColumn: FeatureTableColumn = {
  isHighlighted: false,
  header: {
    headline: "Codespaces",
    image: {
      alt: "github",
      path: "/svg/github.svg",
    },
  },
  items: [
    {
      term: "Pricing (Hosted)",
      text: "$$$",
    },
    {
      term: "Free Tier",
      availability: false,
    },
    {
      term: "License",
      text: "Proprietary",
    },
    {
      term: "Availability",
      text: "Teams, Enterprise",
    },
    {
      term: "GitHub Integration",
      availability: true,
    },
    {
      term: "GitLab Integration",
      availability: false,
    },
    {
      term: "Bitbucket Integration",
      availability: false,
    },
    {
      term: "Self-Host on GKE",
      availability: false,
    },
    {
      term: "Self-Host on EKS",
      availability: false,
    },
    {
      term: "Self-Host on AKS",
      availability: false,
    },
    {
      term: "Self-Host on Kubernetes",
      availability: false,
    },
    {
      term: "Prebuilds",
      availability: false,
    },
    {
      term: "Snapshots",
      availability: false,
    },
    {
      term: "VS Code Extensions",
      availability: true,
    },
    {
      term: "iPad Support",
      availability: true,
    },
    {
      term: "Virtual Desktop (VNC)",
      availability: true,
    },
    {
      term: "Desktop VS Code",
      availability: true,
    },
    {
      term: "Multi-IDE Support",
      availability: false,
    },
  ],
};

export const codespacesComparison: FeatureTable = {
  toc: codespacesToc,
  columns: [gitpodColumns, codespacesColumn],
};
