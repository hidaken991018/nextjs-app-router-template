import Image from 'next/image'
import { SampleMantineButton } from '@/components/atoms/MantineButton'
import { UpCounter } from '@/components/atoms/UpCounter'
import { ViewCount } from '@/components/atoms/ViewCount'
import { RoutingButton } from '@/components/atoms/RoutingButton'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <p>Reduxの調査　「UP」押下でカウントが増える。「sample」押下でsampleページに遷移。<br />sampleページと同じ値になっていることを確認</p>
        <UpCounter />
        <ViewCount />
        <RoutingButton to={"/sample"}>sample</RoutingButton>


      </div>



    </main>
  )
}
