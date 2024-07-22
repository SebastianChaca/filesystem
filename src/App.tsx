import { useState } from 'react';

import './App.css';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Folder, FolderOpen, MediaCd } from '@react95/icons';

type Folder = {
  name: string;
  folders?: Folder[];
};

function App() {
  const nodes: Folder[] = [
    {
      name: 'Home',
      folders: [
        {
          name: 'Music',
          folders: [
            {
              name: 'Metal',
              folders: [
                {
                  name: 'Limp Bizkit',
                  folders: [
                    {
                      name: 'Chocolate Starfish and the Hot Dog Flavored Water',
                      folders: [
                        { name: 'Intro.mp3' },
                        { name: 'Hot Dog.mp3' },
                        { name: 'My Generation.mp3' },
                        { name: 'Full Nelson.mp3' },
                        { name: 'My Way.mp3' },
                        { name: "Rollin' (Air Raid Vehicle).mp3" },
                        { name: "Livin' It Up.mp3" },
                        { name: 'The One.mp3' },
                        { name: 'Getcha Groove On.mp3' },
                        { name: 'Take a Look Around.mp3' },
                        { name: "It'll Be OK.mp3" },
                        { name: 'Boiler.mp3' },
                        { name: 'Hold On.mp3' },
                        { name: "Rollin' (Urban Assault Vehicle).mp3" },
                        { name: 'Outro.mp3' },
                      ],
                    },
                  ],
                },
                { name: 'Korn', folders: [] },
              ],
            },
          ],
        },
        { name: 'Movies', folders: [] },
        { name: 'Games', folders: [] },
      ],
    },
  ];
  return (
    <Flex justifyContent={'left'}>
      <Box h={'100vh'} w={'100vw'}>
        {nodes.map((folder) => (
          <FolderComponent folder={folder} />
        ))}
      </Box>
    </Flex>
  );
}
function FolderComponent({ folder }: { folder: Folder }) {
  const [isOpen, setOpen] = useState(false);

  const FolderIcon = () => {
    return isOpen ? <FolderOpen variant="32x32_4" /> : <Folder variant="32x32_4" />;
  };
  return (
    <>
      <Flex alignItems={'center'} onClick={() => setOpen((prev) => !prev)} mt={3}>
        {folder.folders ? <FolderIcon /> : <MediaCd variant="32x32_4" />}
        <Text ml="4px" fontSize={'16px'}>
          {folder.name}
        </Text>
      </Flex>
      {isOpen &&
        folder.folders?.map((f) => {
          return (
            <Box pl={8} my={2}>
              <FolderComponent folder={f} key={f.name} />
            </Box>
          );
        })}
    </>
  );
}
export default App;
