import { Link } from '@chakra-ui/core'

const FooterLink = ({ item }) => {
  return (
    <>
      <Link
        mr={4}
        mb={2}
        data-event-category='Footer'
        data-event-action={item.name}
        href={item.url}
        _hover={{
          color: 'primary.base',
          textDecoration: 'underline'
        }}
        isExternal
      >
        {item.name}
      </Link>
    </>
  )
}

export default FooterLink
