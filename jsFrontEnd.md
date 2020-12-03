The following text is pseudo-code for the Javascript front-end of the Polaris music encyclopedia project. This particular document primarily outlines the Data Input Flow in which users add "Projects", which are then used to populate the rest of the encyclopedia, similar to how music databases like Discogs structure their data:

When addProject button is pressed,
display text boxes for:
`projectReferences (required),
    (if possible, automatically retrieve data from music database)
projectName (required),
projectReleaseDate (year required),
    projectRerelease (yes/no),
    if yes:
    projectMaster,
projectGroup(s),
    (search graph database for existing groups.
    if found save artist data and
    ArtistCity data in order        to autopopulate artist field)
projectArtist(s) (required)
   (autopopulate from group data if applicable)
    (search graph database for existing artists when editing)
    projectArtistCity (not required but
                    pop up a text box that is hard to exit out of),
    projectArtistRole (required, multiple values allowed),
    projectArtistGroupGuest (question asked is "Was this artist a guest or a
                            member of a contributing group?", if guest store
                            null and if from a group store the group id)
projectTracks:
    trackNumber (autopopulate),
    trackName (required),
    trackSongwriter(s) (required, add or select from projectGroup/Artist),
        have "same for all" button, if artist/group is added then update for project artists/groups
    trackComposer(s) (required, add or select from projectGroup/Artists),
        hame "same for all" button, if artist/group is added then update for project artists/groups
    trackNotes
projectLabel,
projectLinerNotes (long text),
projectBio (long text),`
{and then in an upload popup}
`projectCover (required, user uploads photos)
    projectMedia (user uploads photos & links videos),`



when all required project information is filled out,
allow user to click the submit button.
Sumbit button sends each item in the project:
each item in the project is sent as a graph database command:
`projectName (check required),
projectReleaseDate (check year required),
projectMaster,
projectArtist(s) (check required):
    projectArtistCity,
projectTracks:
    trackNumber(required),
    trackName(required),
    trackSongwriter(s)(required),
    trackComposer(s)(required),
    trackNotes,
projectGroup,
projectLabel,
projectLinerNotes (long string),
projectBio (long string),
projectCover is uploaded and the hyperlink is sent,
    projectMedia is uploaded or not, and hyperlinks are sent.`

each command is sent as EOS memos of NEO4j Cypher graph database commands.

Check user's recent transactions with the contract,
    require exponentially more tokens for each within the past hour
        (double if there are transactions in the past hour?),
    reduce tokens required with exponential decay,
Verify the user has approved transaction before displaying a sending screen,
Verify the transaction is irreversible before proceeding.



Infovis Toolkit Object:

`(hypergraph), as described in a separate document. `

`(label pie chart/sunburst chart), displaying share of plays/sales of major vs. independent labels with each subsidiary displayed in a deeper layer of the sunburst`

`(map overlay), displaying a map of artists, groups, and projects. Perhaps selectable areas and a hypergraph overlay. Consider incorporating cxc.world`



Informational display, off to the right:


Project Display (when a project is clicked):

`projectNumber (auto-assigned, uneditable)`

Include edit button for these fields:
`projectName,
projectAltNames,
projectReleaseDate,
projectMaster,
projectArtist(s):
    projectArtistCity,
projectTracks,
projectGroup(s),
projectLabel,
projectLinerNotes,
projectBio,
projectTrivia,
projectCover,
projectMedia,`

Track Display: (when a track is clicked):

`trackNumber (auto-assigned, uneditable),`

Include edit button for these fields:
`trackName,
trackAltNames,
trackSongwriter(s),
trackComposer(s),
trackNotes,`

Artist Display: (when an artist is clicked):

`artistNumber (auto-assigned, uneditable),
artistYearsActive (calculated by pinging graph database
                    for associated projectReleaseDates)
artistCities (calculated by pinging graph database for related
                    projectArtistCity values,
                    can be edited from Project Display)
artistRoles (calculated by pinging graph database for related
                    projectArtistRole values,
                    can be edited from Project Display)`
Include edit button for these fields:
`artistName,
artistAltNames,
artistBio,
artistTrivia,
artistMedia,`


Group Display: (when a group is clicked):

`groupNumber (auto-assigned, uneditable),
groupYearsActive (calculated by pinging graph database
                    for associated projectReleaseDates)
groupCities (calculated by pinging graph database for related
                    projectArtistCity values for matching
                    projectArtistGroupGuest,
                    can be edited from Project Display)`
Include edit button for these fields:
`groupName,
groupAltNames,
groupBio,
groupTrivia,
groupMedia,`


Label Display: (when a label is clicked):


`labelNumber (auto-assigned, uneditable),
labelYearsActive (calculated by pinging graph database
                    for associated projectReleaseDates)`

Include edit button for these fields:
`labelName,
labelCity
labelBio,
labelTrivia,
labelMedia,`

