import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>} >
            Order by : Relevence
            </MenuButton>
            <MenuList>
                <MenuItem>Relevence</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
      )
}

export default SortSelector