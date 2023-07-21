# This documentation section will remain only in this forked repository and will not be added to main https://github.com/asyncapi/community repository without discussing it with the maintainers.



Table of contents
=============================================================

- [Introduction](#introduction)
- [How I approached it?](#how-i-approached-it)
- [How to find YouTube ID?](#how-to-find-youtube-id)
  - [List of different types of YouTube links](#list-of-different-types-of-youtube-links)
- [How to use the action?](#how-to-use-the-action)
  - [Setup the secrets](#setup-the-secrets)
  - [After setting-up secrets, follow this section](#after-setting-up-secrets-follow-this-section)
- [How you can test this](#how-you-can-test-this)
  - [NOTE ON VIDEO IDs](#note-on-video-ids)
- [Test cases](#test-cases)
- [Branch which contains these changes](#branch-which-contains-these-changes)
- [Points to note](#points-to-note)
- [Ending notes](#ending-notes)





# Introduction

- First of all, I've FINALLY resolved this issue https://github.com/asyncapi/community/issues/621 after various obstacles.
- [This is the first file](https://podcasters.spotify.com/pod/show/animeshkumar923/episodes/demo-audio-3-e2704o9) which was using the youtube-to-anchorFM action.
- This was not an easy task for me, like seriously! This was an untouched and unfamiliar topic for me (CI/CD). Was a little scared as how to approach it but the [official documentation](https://github.com/marketplace/actions/upload-episode-from-youtube-to-anchor-fm#how-it-works) helped a lot (~80% was clear from there, thanks to the folks who wrote it).

# How I approached it?

- 1st step was to read the official documentation.
- Going through each step carefully and following the documentation along.
- Made an account on [Anchor.fm, now Spotify Podcast](https://podcasters.spotify.com) (which is now owned by Spotify)
- Uploaded an initial recording as it requires at-least one previous upload to work well.
- Tried setting it up locally but failed. The error was a timeout which I couldn't figure out due to limited knowledge of the codebase of the action.
- After that analyzed some already existing actions and how they work. Asked chatGPT about what are the components of a GitHub action. The full chat can be found [here](https://chat.openai.com/share/ff59536b-47da-4a8a-9f17-c876c84f0f0c) if someone is interested in checking it out.
- After getting some hints, I thought about trying different approaches.
- Identified the unnecessary files by analyzing the existing actions and their different dependencies.
Deleted them to reduce storage issue and only keep required files.
- Then added the 'deleted and optimized folder' to the `.github/workflows/` folder.
- Gave multiple attempts to create `.yml` file and got it after sometime.
- Tested it by adding the `video ID` to the `episode.json` file.
- Tested 3 cases and got it right.
- Really happy that I got this running. :)

---
---

# How to find YouTube ID?

Let's take this video for example with link: https://youtu.be/3rg_7hIb9PQ

Here the video ID is the word after `https://youtu.be/`, i.e., `3rg_7hIb9PQ`

## List of different types of YouTube links

- `https://www.youtube.com/watch?v=VIDEO_ID`
  - Here, it can be https://www.youtube.com/watch?v=3rg_7hIb9PQ
- `https://youtu.be/VIDEO_ID`
  - Here, it can be https://www.youtu.be/3rg_7hIb9PQ
- `https://www.youtube.com/embed/VIDEO_ID`
  - Here, it can be https://www.youtube.com/embed/3rg_7hIb9PQ
- `https://www.youtube.com/playlist?list=PLAYLIST_ID`
  - Here, it can be https://www.youtube.com/playlist?list=PLbi1gRlP7piiaD67o1F4EOPoZztg2r8l6
- `https://www.youtube.com/shorts/VIDEO_ID`
  - Here, it can be https://www.youtube.com/shorts/3rg_7hIb9PQ
- `https://www.youtube.com/watch?v=VIDEO_ID&list=PLAYLIST_ID`
  - Here, it can be https://www.youtube.com/watch?v=deLUAobdVpw&list=PLbi1gRlP7piiaD67o1F4EOPoZztg2r8l6
- `https://youtube.com/shorts/VIDEO_ID?feature=share`
  - Here, it can be https://youtube.com/shorts/U5jUr8XAF_M?feature=share

*If you find more formats, please add to this list by raising an issue and with a follow-up Pull Request (PR)*

# How to use the action?

## Setup the secrets

**In [my repository](https://github.com/AnimeshKumar923/asyncapi-community/tree/youtube-to-anchor-workflow) on `youtube-to-anchor-workflow` branch, the secrets are already setup so you can skip the [secrets section](#setup-the-secrets) and jump directly to [here](#after-setting-up-secrets-follow-this)**

**This step requires you to have a [Spotify Podcast](https://podcasters.spotify.com) Account. If you don't have, you can create one [here](https://podcasters.spotify.com/getstarted/new)**
  - You can select `I want to create a podcast and follow the instructions ahead.

- If you've forked the repository, go to that.
- After that -> settings -> select `secrets and variables` -> `Actions` from drop-down menu -> Click on `New repository secret` button.
- In the `Name` field enter `ANCHOR_EMAIL`.
- In the `Secret` field enter your `email` that is used on AnchorFM/Spotify Podcast.
- Now, Add another secret by click on `New repository secret` button.
- In the `Name` field enter `ANCHOR_PASSWORD`.
- In the `Secret` field enter your `password` that is used on AnchorFM/Spotify Podcast. (don't worry, it will be private.)


## After setting-up secrets, follow this section

- For every video, for now I guess, you have to provide the YouTube ID in the `episode.json` file which is in the root folder of repository.
- Then you've to commit and push the changes to the master of asyncapi/community repository.
- After successful completion of the `action`, the podcast goes into draft/unpublished state.
- After trying out 3 attempts of this change, I've observed that the video goes into draft/unpublished state which is a good way to review the changes and update the metadata of the podcast episode.
- After that, the maintainers can attend to those episode and update the information required.

# How you can test this?

If you want to test this, you can follow these steps:

- Go to [this repository](https://github.com/AnimeshKumar923/asyncapi-community/tree/youtube-to-anchor-workflow).
- Fork this repository using the button somewhere on top of of the page.
- Create a local branch in your own repository.
- Change the branch to your local branch if it is not already on it.
- Change the [episode.json file](https://github.com/AnimeshKumar923/asyncapi-community/blob/youtube-to-anchor-workflow/episode.json) with your desired video ID. [How to find Youtube ID?](#how-to-find-youtube-id)
- Commit your changes to the `your-local-branch` branch.
- You can simply do it from the GitHub UI itself.
  - If you're doing it locally within terminal, make sure to push it on the `your-local-branch` by executing `git push origin your-local-branch`.
- Raise a PR to merge your code/video ID from `your-local-branch` to `youtube-to-anchor-workflow` branch.
- After successful merging the branch, the action will be executed. It may take some time because it build the environment, so please have patience.
- After that you can go to [this Podcast link](https://podcasters.spotify.com/pod/show/animeshkumar923) or [this Spotify link](https://open.spotify.com/show/1o6QPcllwCl5J67R9BjHkF) to check the upload.
  - It may have the title `Untitled`. The last file I checked and uploaded was `demo audio #5` Check commits for more details.

## NOTE ON VIDEO IDs

- You can raise a PR if your're changing video ID update
- Please avoid songs ID as copyright issues can arise.
- Only add such videos which you think may not be already there on Spotify.

# Test cases

1. [First test case](https://github.com/AnimeshKumar923/asyncapi-community/actions/runs/5564932458/jobs/10164874511)
2. [Second test case](https://github.com/AnimeshKumar923/asyncapi-community/actions/runs/5564988895/jobs/10164983690)
3. [Third test case](https://github.com/AnimeshKumar923/asyncapi-community/actions/runs/5564988895/jobs/10164983690)

`Please update the test cases here if your episode was successfully uploaded on AnchorFM/Spotify Podcast either by raising an issue and a follow-up PR or create an issue and ping me to add the test case.`

# Branch which contains these changes

https://github.com/AnimeshKumar923/asyncapi-community/tree/youtube-to-anchor-workflow

# Points to note

```yml
name: 'Upload Episode from YouTube To Anchor.Fm'

on:
  push:
    paths:
      - episode.json
    branches:
      - master
      - youtube-to-anchor-workflow

jobs:
  upload_episode:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Upload Episode from YouTube To Anchor.Fm
        uses: Schrodinger-Hat/youtube-to-anchorfm@v2.0.0
        env:
          ANCHOR_EMAIL: ${{ secrets.ANCHOR_EMAIL }}
          ANCHOR_PASSWORD: ${{ secrets.ANCHOR_PASSWORD }}
          EPISODE_PATH: /github/workspace
          URL_IN_DESCRIPTION: true
          # POSTPROCESSOR_ARGS: 'ffmpeg:-ac 1'
          # SAVE_AS_DRAFT: true
```
---

```yml
        on:
        push:
          paths:
            - episode.json
          branches:
            - master
            - youtube-to-anchor-workflow
```
- `branches` can be updated/removed to only specify the master branch. Currently set to accept from the two branches, i.e, `master` and `youtube-to-anchor-workflow`


# Ending notes

- This note is 100% organic &copy &reg &trade @AnimeshKumar923
(i.e., I've written all these documentations line-by-line with careful and thorough consideration, and thinking. It's my first time writing such long documentation so there may be things which I'm lacking hence, your feedback is very much required and appreciated.)
- Now make me a CI/CD engineer already. :stuck_out_tongue_winking_eye:
