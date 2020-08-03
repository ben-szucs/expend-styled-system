import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Text, Flex, Link, Box } from "rebass"
import Button from "../components/Button"
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    

    <Text variant="h3" mt={4}>Text styles</Text>
    <Divider mb={2}/>
    <Text variant="h1">Expend Header 1</Text>
    <Text variant="h2">Expend Header 2</Text>
    <Text variant="h3">Expend Header 3</Text>
    <Text variant="h4">Expend Header 4</Text>
    <Text variant="h5">Expend Header 5</Text>
    <Text variant="p1">Expend Header 1 - The quick brown fox jumps over the lazy dog</Text>
    <Text variant="p2" bg="text">Expend Header 2 - The quick brown fox jumps over the lazy dog</Text>
    
    <Text variant="h3" mt={4}>Link styles</Text>
    <Divider mb={2}/>
    <Flex flexDirection="column">
      <Link variant="default">Default link</Link>
      <Link variant="nav">Nav link</Link>
      <Link variant="navInverse">Nav Inverse link</Link>
    </Flex>

    <Text variant="h3" mt={4}>Button styles</Text>
    <Divider mb={2}/>
    <Flex mx={-2}>
      <Flex flexDirection="column" p={2}>
        <Button type="primary" mb={2}>Primary</Button>
        <Button type="secondary" mb={2}>Secondary</Button>
        <Button type="teritary" mb={2}>Teritary</Button>
        <Button type="light" mb={2}>Light Button</Button>
        <Button type="dark">Dark Button</Button>
      </Flex>
      <Flex flexDirection="column" p={2}>
        <Button fill="outlined" type="primary" mb={2}>Primary</Button>
        <Button fill="outlined" type="secondary" mb={2}>Secondary</Button>
        <Button fill="outlined" type="teritary" mb={2}>Teritary</Button>
        <Button fill="outlined" type="light" mb={2}>Light Button</Button>
        <Button fill="outlined" type="dark">Dark Button</Button>
      </Flex>
    </Flex>
  </Layout>
)

const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  background: ${({theme}) => theme.colors.grey100};
`

export default IndexPage
