export const Footer = () => {
  return (
    <footer className='bottom-0 py-6 realtive md:pt-5 md:pb-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row'>
        <p className='text-sm leading-loose text-center text-muted-foreground md:text-left'>
          Built by <a href='https://github.com/hulkobain' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>Raul😻</a>.
          All rights reserved. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
