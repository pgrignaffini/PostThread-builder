import React, { useState, useEffect } from 'react'
import Comments from '../../components/Feed/Comments'
import { useRouter } from 'next/router'

export default function CommentsPage() {

    const router = useRouter()
    const postId = router.query.postId

    return (
        <div>
            <Comments postId={postId} />
        </div>
    )
}
