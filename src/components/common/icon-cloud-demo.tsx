import { IconCloud } from "@/components/ui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css", // corrigé (css3 → css)
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "figma",
]

export function IconCloudDemo() {

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  )

  return (
    <div className="absolute z-15 left-50 lg:left-100 flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}