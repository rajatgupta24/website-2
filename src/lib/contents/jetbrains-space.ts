import type { TableData } from "$lib/types/table-data.type";
import type { Feature } from "$lib/types/feature.type";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "$lib/components/ui-library/feature-table/feature-table.types";

export const openSourceFeature = {
  title: "Open-source",
  paragraph:
    "Gitpod puts developers' interest first and seemlessly integrates with your existing tools & workflows.",
  featureList: [
    "Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes",
    "Contribute to Gitpod and build your own customizations",
    "Works just as smoothly with GitHub, GitLab and Bitbucket",
  ],
  image: {
    src: "/images/github-codespaces/spaces-3.svg",
    alt: "Gitpod integrations",
  },
};

export const features: Feature[] = [
  {
    title: "Your environment, your tools, your&nbsp;craft",
    paragraph:
      "We adapt, so you don't need to. That's why we natively integrated JetBrains IDEs into Gitpod next to VS Code. Don't limit yourself or your team to a single vendor and choose from the best options available.",
    image: {
      src: "/images/jetbrains-space/ides.png",
      alt: "Multiple IDEs supported by Gitpod",
    },
  },
  openSourceFeature,
  {
    title: "Ephemeral workspaces",
    paragraph:
      "Spin up preconfigured, standardized dev environments from any git context when you need them and close them when you're done. Once you’ve experienced the freedom, you won’t go back to the friction of long-living stateful environments as JetBrains Spaces offers it.",
    image: {
      src: "/svg/features/muti-track-development.svg",
      alt: "Ephemeral Workspaces",
    },
  },
  {
    title: "Greater cost-efficiency",
    paragraph:
      "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <strong>Saves you money, helps our planet 🌱</strong>.",
    image: {
      src: "/svg/jetbrains-space/cost-efficency.svg",
      alt: "Greater cost-efficiency",
    },
    footnote:
      'Price comparison for a developer working 5h per day, 21 per month with 8 core CPUs and 12GB RAM. Last verified 9 Dec 2021. Sources: <a href="/pricing">Gitpod</a>, <a href="https://www.jetbrains.com/space/buy/?billing=yearly#cloud" target="_blank">JetBrains Space</a>.',
  },
];

export const gitpodTableData: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Gitpod",
    image: {
      alt: "Gitpod",
      path: "/svg/media-kit/logo-mark.svg",
    },
  },
  items: [
    {
      term: "Pricing (SAAS)",
      text: "Free for 50h/month",
    },
    {
      term: "License",
      text: "Open-Source",
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
      term: "Self-Host on GCP",
      availability: true,
    },
    {
      term: "Self-Host on AWS",
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
      term: "Jetbrains Ide Support",
      availability: true,
    },
    {
      term: "VS Code Support",
      availability: true,
    },
  ],
};

export const jetbrainsTableData: FeatureTableColumn = {
  header: {
    headline: "JetBrains Space",
    image: {
      alt: "JetBrains Space",
      path: "/svg/jetbrains-space/space.svg",
    },
  },
  items: [
    {
      term: "Pricing (SAAS)",
      text: "$$$",
    },
    {
      term: "License",
      text: "Proprietary",
    },
    {
      term: "GitHub Integration",
      availability: false,
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
      term: "Self-Host on GCP",
      availability: false,
    },
    {
      term: "Self-Host on AWS",
      availability: false,
    },
    {
      term: "Self-Host on Kubernetes",
      availability: false,
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
      availability: false,
    },
    {
      term: "Jetbrains Ide Support",
      availability: true,
    },
    {
      term: "VS Code Support",
      availability: false,
    },
  ],
};

export const JetbraisSpaceToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "Pricing (SAAS)",
    },
  },
  {
    type: "text",
    data: {
      text: "License",
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
      text: "Self-Host on GCP",
      image: {
        alt: "GCP",
        path: "/svg/brands/gcp.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on AWS",
      image: {
        alt: "AWS",
        path: "/svg/brands/aws.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on Kubernetes",
      image: {
        alt: "Kubernetes",
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
      text: "Jetbrains Ide Support",
    },
  },
  {
    type: "text",
    data: {
      text: "VS Code Support",
    },
  },
];

export const JetBrainsComparison: FeatureTable = {
  toc: JetbraisSpaceToc,
  columns: [gitpodTableData, jetbrainsTableData],
};
