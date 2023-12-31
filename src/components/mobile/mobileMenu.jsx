import * as GiIcons from 'react-icons/gi'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToDelete, goToSettings, goToFeed } from '../../router/Coordinators'

export const MobileMenu = (props) => {

    const navigate = useNavigate()

    return (
        <>
            <Menu
                className="w-[43vw]"
            >
                <MenuButton
                    color={"white"}
                    aria-label="options"
                    as={IconButton} icon={<GiIcons.GiHamburgerMenu />}
                    bgColor={"#FE7E02"}
                    _hover={{ bg: '#FE7E02' }}
                    _active={{ bg: '#FE7E02' }}
                />
                <MenuList
                    minW={2}
                    bgColor={"#fefdfc"}
                >

                    <MenuItem
                        bgColor={"#fefdfc"}
                        fontSize={14}
                        _hover={{ bgColor: '#f0eeee' }}
                        onClick={() => goToFeed(navigate)}>
                        Ir para o feed
                    </MenuItem>

                    <MenuItem
                        bgColor={"#fefdfc"}
                        fontSize={14}
                        _hover={{ bgColor: '#f0eeee' }}
                        onClick={() => goToSettings(navigate)}>
                        Editar informações
                    </MenuItem>

                    <MenuItem
                        bgColor={"#fefdfc"}
                        fontSize={14}
                        _hover={{ bgColor: '#f0eeee' }}
                        onClick={() => goToDelete(navigate)}>
                        Deletar conta
                    </MenuItem>

                    <MenuItem
                        bgColor={"#fefdfc"}
                        fontSize={14}
                        _hover={{ bgColor: '#f0eeee' }}
                        onClick={props.logout}>
                        Sair
                    </MenuItem>

                </MenuList>
            </Menu>
        </>
    )
}