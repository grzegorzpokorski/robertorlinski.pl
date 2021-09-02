import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';

export const prepareMDX = async (
  source: string,
  options: {
    resourcePath: string;
    imagesDirectory: string;
  },
) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe',
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild',
    );
  }

  const { resourcePath, imagesDirectory } = options;

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: resourcePath,
    xdmOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: path.join(process.cwd(), 'public', imagesDirectory),
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpg': 'file',
        '.gif': 'file',
      },
      publicPath: imagesDirectory,
      write: true,
    }),
  });

  return {
    content: code,
    metaData: frontmatter,
  };
};
