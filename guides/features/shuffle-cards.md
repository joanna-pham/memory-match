Instructions - Shuffle Cards
--

### Overview

In this feature:
- You will be adding the functionality to shuffle the game cards

    - To clarify what this means, `shuffling` the cards means that the logo images should be placed on the cards randomly when they are dynamically created

- There are no specific instructions for this Feature Set, as implementations can vary greatly, and we know you have the ability to do it on your own, but requirements are below:
  - The order of the logo images must be random when the game begins, and when the game is reset.
    - Example of shuffling:
    ![shuffling example](../feature-gifs/shuffle.gif)
- When your game card images are being shuffled on game start and game reset, Congratulations on completing the MVP!!! Move on to the `After Each Feature` section below!


### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "Added simple HTML skeleton"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin skeleton`

- Finally, you will want to create a pull request. This will merge the code from your newly **completed** feature branch into your `master` branch.

  1. Navigate to <kbd>New Pull Request</kbd>:
  ![Navigate to pull requests](../post-feature/navigate-to-pull-request.gif)
  2. Compare changes to merge:
  ![Compare changes to merge](../post-feature/compare-changes.gif)
  3. Create a new pull request:
  ![Create new pull request](../post-feature/create-pull-request.gif)
  4. Merge the pull request:
  ![merge pull request](../feature-gifs/merge-request.gif)
  5. Update master with the new changes:
  - Note: you must `checkout` to the `master` branch and then `git pull origin master` to update your local `master` branch with the new code you just merged into the remote `master` branch.
  ![Update master](../post-feature/pull-new-changes.gif)
  6. Create a pull request from your `feature` branch to the `student-reviews` branch and send the pull request to your lead instructor in Slack.
    - You will be deleting this branch only `AFTER` your pull request has been approved!
![pull request from master](../post-feature/pull-request.gif)
  7. Go back to [Features](../../README.md#features), if you're still working through the project.
