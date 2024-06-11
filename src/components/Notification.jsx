const Notification = () => {
  return (
    <div className="pt-28 pb-10 px-10">
      <div className="flex flex-col gap-2">
        <b className="text-3xl">What&apos;s  New</b>
        <p className="text-zinc-400">The latest releases from artists, podcasts and shows you follow.</p>
        <div className=" flex gap-4 py-4">
          <p className="font-semibold py-1 px-3 bg-zinc-800 rounded-full">Music</p>
          <p className="font-semibold py-1 px-3 bg-zinc-800 rounded-full">Podcast & Shows</p>
        </div>
      </div>
      <div className="pt-16 space-y-4">
        <b className="text-3xl text-center"> We don&apos;t have any updates for you yet</b>
        <p className="font-semibold">When there&apos;s news, we&apos;ll post it here. Follow your favourite artists and podcasts to stay updated on them too.</p>
      </div>
    </div>
  )
}
export default Notification