import { Stack } from "@mui/material"
import List from "./modules/list"
import Header from "./modules/header"


export default async function App() {
  const data = await getPumpList()
  return (
    <Stack className="app" pt={7}>
      <Header />
      <List data={data} />
      <Detail />
    </Stack>
  )
}

export const dynamic = "force-dynamic"
