import * as React from 'react'
import { Image, Link, BlitzPage, useMutation, Routes, useSession } from "blitz"
import PublicLayout from 'app/core/layouts/PublicLayout'

const FreeTutorialsPublicPage: BlitzPage = () => {
  return (
    <>
      
    </>
  )
}

FreeTutorialsPublicPage.getLayout = page => <PublicLayout title="XPerks | Free Tutorials">{page}</PublicLayout>
export default FreeTutorialsPublicPage