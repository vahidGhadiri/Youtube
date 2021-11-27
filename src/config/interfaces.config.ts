export interface InitialStateInterface {
    videos: Array<object>
    isLoading: boolean,
    error: null
}

export interface VideosActionInterface {
    type: string
    data: any
}

export interface VideosListItemInterface {

    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string,
                width: number,
                height: number
            },
            medium: {
                url: string,
                width: number,
                height: number
            },
            high: {
                url: string,
                width: number,
                height: number
            },
            standard: {
                url: string,
                width: number,
                height: number
            },
            maxres: {
                url: string,
                width: number,
                height: number
            }
        },
        channelTitle: string,
        tags: string[],
        categoryId: string,
        liveBroadcastContent: string,
        localized: {
            title: string,
            description: string
        }
    },
    contentDetails: {
        duration: string,
        dimension: string,
        definition: string,
        caption: string,
        licensedContent: boolean,
        contentRating: object,
        projection: string
    },
    statistics: {
        viewCount: string,
        likeCount: string,
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string
    }

}

export interface VideosListResponseInterface {
    etag: string
    kind: string
    items: VideosListItemInterface[],
    nextPageToken: string
    pageInfo: { totalResults: number, resultsPerPage: number }
}

export interface SidebarInterface {
    name: string,
    icon: string,
    route: string
}