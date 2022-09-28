import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import rickAndMortyapi from './api'
import { IconButton, InputAdornment, Container, TextField } from '@mui/material'
import CharacterCard from '../components/CharacterCard'


interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}


const Home: NextPage = () => {


  const [data, setData] = useState<Character>()
  const [character, setPokemon] = useState('1')


  useEffect(() => {
    (async function () {
      const result = await rickAndMortyapi.get(character)
      setData(result.data)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data) {
    return (
      <Container sx={{
        background: '#75afce',
        width: '80vw',
        height: 500,
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px'
      }}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size='small'
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          size='small'
          sx={{ width: '10%' }} />
        <CharacterCard />
      </Container>
    )
  } else {
    return (
      <Container className={styles.container}>
        no hay datos
      </Container>
    )
  }
}

export default Home
