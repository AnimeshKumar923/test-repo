**UPDATE** @derberg 

- I did quite a LOT of brainstorming as to how to include the `workflow_dispatch` into the YAML file.
- I've used these past 3 days to figure out how to integrate the `workflow_dispatch` event into this.
- Read a lot of docs, articles, googled, asked chatGPT (specifically about the `Create episode.json file` section as I've zero knowledge about bash scripting)
- Created a new branch named `workflow-dispatch-test` branching out from `folder-deletion-test`
- I've added the `workflow_dispatch` from the reference that you gave:
> `workflow_dispatch` example with some input data -> https://github.com/asyncapi/.github/blob/master/.github/workflows/global-remover.yml#L8-L14

- I figured out that you've to run this workflow on the default branch, hence changed the default branch from `master` to `workflow-dispatch-test` and then the workflow executed successfully.

**Test cases**

- The 1st case executed successfully on the `workflow-dispatch-test` branch.
  - [GitHub Action details](https://github.com/AnimeshKumar923/asyncapi-community/actions/runs/5627376693)
  - [Spotify Podcast link](https://podcasters.spotify.com/pod/show/animeshkumar923/episodes/Spec-3-0-Docs-July-20th-2023-e277m9b)

- The 2nd case executed successfully on the `workflow-dispatch-test` branch. I ran it after deleting the `episode.json` file in the root directory and it was a success!
  - [GitHub Action details](https://github.com/AnimeshKumar923/asyncapi-community/actions/runs/5627475072/job/15250047131)
  - [Spotify Podcast link](https://podcasters.spotify.com/pod/show/animeshkumar923/episodes/What-is-AsyncAPI-e277mh0)


Please provide your feedback. :pray: