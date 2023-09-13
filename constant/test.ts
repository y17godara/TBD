export const routes = [
    {
      name: "The Group",
      path: "/thegroup",
      children: [
        { name: "Who we are", path: "/thegroup/who-we-are" },
        {
          name: "Governance",
          path: "/thegroup/governance",
          children: [
            { name: "Model 231", path: "/thegroup/governance/model-231" },
            { name: "Ethical Code", path: "/thegroup/governance/ethical-code" },
            { name: "Transparency", path: "/thegroup/governance/transparency" },
            {
              name: "Legality Rating",
              path: "/thegroup/governance/legality-rating",
            },
            {
              name: "Whistleblowing",
              path: "/thegroup/governance/whistleblowing",
            },
          ],
        },
        {
          name: "Excellence",
          path: "/thegroup/excellence",
          children: [
            {
              name: "Quality & Safety",
              path: "/thegroup/excellence/quality-safety",
            },
            { name: "Innovation", path: "/thegroup/excellence/innovation" },
            {
              name: "Research Center",
              path: "/thegroup/excellence/research-center",
            },
          ],
        },
        { name: "Our People", path: "/thegroup/our-people" },
        {
          name: "Production and Distribution",
          path: "/thegroup/production-distribution",
        },
      ],
    },
    {
      name: "Our Brands",
      path: "/ourbrands",
      children: [
        { name: "Example 1", path: "/ourbrands/example-1" },
        { name: "Example 2", path: "/ourbrands/example-2" },
        // Add more brand routes here
      ],
    },
    {
      name: "Sustainability",
      path: "/sustainability",
      children: [
        { name: "Sustainability Goals", path: "/sustainability/goals" },
        {
          name: "Social Responsibility",
          path: "/sustainability/social-responsibility",
        },
        { name: "Territory", path: "/sustainability/territory" },
      ],
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  