# WAHA Custom Fork Progress

## Milestones
- [x] **Milestone 1: Update WAHA Base to Latest Version**
  - [x] Fetch latest `upstream` tags and branches
  - [x] Create a feature branch or merge `upstream/core` into `core`
  - [x] Resolve any Git merge conflicts
- [x] **Milestone 2: Re-apply Media Sending Customizations**
  - [x] Re-add the helper `resolveFileToBuffer` in `src/core/utils/media.utils.ts`
  - [x] Update NOWEB engine controller with custom media sending logic
  - [x] Update WEBJS engine controller with custom media sending logic
- [x] **Milestone 3: Build & Verification**
  - [x] Install dependencies with Yarn (`yarn install`)
  - [x] Build the project and verify TypeScript compilation (`yarn build`)
  - [x] Run automated tests to check for regressions (`yarn test`)
  - [x] Generate updated JS files for patch Docker build in `dist`
- [x] **Milestone 4: Deployment & Verification**
  - [x] Test the local build with NestJS server
  - [x] Verify Docker patch build works using `Dockerfile.patch`
