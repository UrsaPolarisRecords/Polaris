Node Types:
```
    Song
        *#
        *name
        altnames
        *songwriters
        lyrics
        trivia
    Track
        *#
        *name
        altnames
        arrangers
        bio
        trivia
    Release
        *#
        *name
        altnames
        *releaseDate
	*Master? (Boolean)
        linerNotes
        bio
        trivia
        Cover
    Master Project
        *#
        *name
        altnames
        bio
        trivia
    Label
        *#
        *name
        altnames
        city
        bio
        trivia
    Group
        *#
        *name
        altnames
	city
        bio
        trivia
    Artist
        *#
        *name
	*color
        altnames
	city        
	bio
        trivia
    Media
        *#
        *dataLink
        title
        description
        location
        date
    Role
        *#
        *name 
        category
```

Edges per Node:
```
    Song:
        Track --> Uses --> Song
        Artist --> Writer --> Song
    Track:
        Track --> Samples --> Track
        Release --> Uses (Track number) --> Track
        Master Project --> Uses --> Track
        Group --> Played On --> Track
        Artist --> Played On (Roles) --> Track
        Artist --> Guest On (Roles) --> Track
    Release:
        Label --> Publishes (date, format) --> Release
        Artist--> Contributed To (Roles) --> Release
    Master Project:
        Release --> reReleases --> Master Project
        Group --> Created --> Master Project
    Label:
        connects to Release and Picture nodes
    Group:
        Artist--> Has Been a Member of (Projects) --> Group
    Artist:
        connects to Song, Track, Group, Release, Picture, and Role nodes
    Picture:
        Release --> Photographed In --> Media
        Label --> Photographed In --> Media
        Group --> Photographed In --> Media
        Artist --> Photographed In --> Media
    Role:
        Artist --> Has Done --> Role
```
the 'Roles' nodes may be omitted if there is a means to easily search artists' roles as an attribute of an edge between two nodes.
