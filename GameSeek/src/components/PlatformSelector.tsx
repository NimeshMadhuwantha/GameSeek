import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props{
  onSelectPlatform: (Platform: Platform) => void
}

const PlatformSelector = ({onSelectPlatform}: Props) => {
    const {data,error} = usePlatforms();
    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>} >Platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector