
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Actor": [
      "Bot",
      "EnterpriseUserAccount",
      "Mannequin",
      "Organization",
      "User"
    ],
    "Assignable": [
      "Issue",
      "PullRequest"
    ],
    "Assignee": [
      "Bot",
      "Mannequin",
      "Organization",
      "User"
    ],
    "AuditEntry": [
      "MembersCanDeleteReposClearAuditEntry",
      "MembersCanDeleteReposDisableAuditEntry",
      "MembersCanDeleteReposEnableAuditEntry",
      "OauthApplicationCreateAuditEntry",
      "OrgAddBillingManagerAuditEntry",
      "OrgAddMemberAuditEntry",
      "OrgBlockUserAuditEntry",
      "OrgConfigDisableCollaboratorsOnlyAuditEntry",
      "OrgConfigEnableCollaboratorsOnlyAuditEntry",
      "OrgCreateAuditEntry",
      "OrgDisableOauthAppRestrictionsAuditEntry",
      "OrgDisableSamlAuditEntry",
      "OrgDisableTwoFactorRequirementAuditEntry",
      "OrgEnableOauthAppRestrictionsAuditEntry",
      "OrgEnableSamlAuditEntry",
      "OrgEnableTwoFactorRequirementAuditEntry",
      "OrgInviteMemberAuditEntry",
      "OrgInviteToBusinessAuditEntry",
      "OrgOauthAppAccessApprovedAuditEntry",
      "OrgOauthAppAccessDeniedAuditEntry",
      "OrgOauthAppAccessRequestedAuditEntry",
      "OrgRemoveBillingManagerAuditEntry",
      "OrgRemoveMemberAuditEntry",
      "OrgRemoveOutsideCollaboratorAuditEntry",
      "OrgRestoreMemberAuditEntry",
      "OrgUnblockUserAuditEntry",
      "OrgUpdateDefaultRepositoryPermissionAuditEntry",
      "OrgUpdateMemberAuditEntry",
      "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
      "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "RepoAccessAuditEntry",
      "RepoAddMemberAuditEntry",
      "RepoAddTopicAuditEntry",
      "RepoArchivedAuditEntry",
      "RepoChangeMergeSettingAuditEntry",
      "RepoConfigDisableAnonymousGitAccessAuditEntry",
      "RepoConfigDisableCollaboratorsOnlyAuditEntry",
      "RepoConfigDisableContributorsOnlyAuditEntry",
      "RepoConfigDisableSockpuppetDisallowedAuditEntry",
      "RepoConfigEnableAnonymousGitAccessAuditEntry",
      "RepoConfigEnableCollaboratorsOnlyAuditEntry",
      "RepoConfigEnableContributorsOnlyAuditEntry",
      "RepoConfigEnableSockpuppetDisallowedAuditEntry",
      "RepoConfigLockAnonymousGitAccessAuditEntry",
      "RepoConfigUnlockAnonymousGitAccessAuditEntry",
      "RepoCreateAuditEntry",
      "RepoDestroyAuditEntry",
      "RepoRemoveMemberAuditEntry",
      "RepoRemoveTopicAuditEntry",
      "RepositoryVisibilityChangeDisableAuditEntry",
      "RepositoryVisibilityChangeEnableAuditEntry",
      "TeamAddMemberAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamChangeParentTeamAuditEntry",
      "TeamRemoveMemberAuditEntry",
      "TeamRemoveRepositoryAuditEntry"
    ],
    "AuditEntryActor": [
      "Bot",
      "Organization",
      "User"
    ],
    "Closable": [
      "Issue",
      "Milestone",
      "Project",
      "PullRequest"
    ],
    "Closer": [
      "Commit",
      "PullRequest"
    ],
    "Comment": [
      "CommitComment",
      "GistComment",
      "Issue",
      "IssueComment",
      "PullRequest",
      "PullRequestReview",
      "PullRequestReviewComment",
      "TeamDiscussion",
      "TeamDiscussionComment"
    ],
    "Contribution": [
      "CreatedCommitContribution",
      "CreatedIssueContribution",
      "CreatedPullRequestContribution",
      "CreatedPullRequestReviewContribution",
      "CreatedRepositoryContribution",
      "JoinedGitHubContribution",
      "RestrictedContribution"
    ],
    "CreatedIssueOrRestrictedContribution": [
      "CreatedIssueContribution",
      "RestrictedContribution"
    ],
    "CreatedPullRequestOrRestrictedContribution": [
      "CreatedPullRequestContribution",
      "RestrictedContribution"
    ],
    "CreatedRepositoryOrRestrictedContribution": [
      "CreatedRepositoryContribution",
      "RestrictedContribution"
    ],
    "Deletable": [
      "CommitComment",
      "GistComment",
      "IssueComment",
      "PullRequestReview",
      "PullRequestReviewComment",
      "TeamDiscussion",
      "TeamDiscussionComment"
    ],
    "EnterpriseAuditEntryData": [
      "MembersCanDeleteReposClearAuditEntry",
      "MembersCanDeleteReposDisableAuditEntry",
      "MembersCanDeleteReposEnableAuditEntry",
      "OrgInviteToBusinessAuditEntry",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "RepositoryVisibilityChangeDisableAuditEntry",
      "RepositoryVisibilityChangeEnableAuditEntry"
    ],
    "EnterpriseMember": [
      "EnterpriseUserAccount",
      "User"
    ],
    "GitObject": [
      "Blob",
      "Commit",
      "Tag",
      "Tree"
    ],
    "GitSignature": [
      "GpgSignature",
      "SmimeSignature",
      "UnknownSignature"
    ],
    "HovercardContext": [
      "GenericHovercardContext",
      "OrganizationTeamsHovercardContext",
      "OrganizationsHovercardContext",
      "ReviewStatusHovercardContext",
      "ViewerHovercardContext"
    ],
    "IpAllowListOwner": [
      "Enterprise",
      "Organization"
    ],
    "IssueOrPullRequest": [
      "Issue",
      "PullRequest"
    ],
    "IssueTimelineItem": [
      "AssignedEvent",
      "ClosedEvent",
      "Commit",
      "CrossReferencedEvent",
      "DemilestonedEvent",
      "IssueComment",
      "LabeledEvent",
      "LockedEvent",
      "MilestonedEvent",
      "ReferencedEvent",
      "RenamedTitleEvent",
      "ReopenedEvent",
      "SubscribedEvent",
      "TransferredEvent",
      "UnassignedEvent",
      "UnlabeledEvent",
      "UnlockedEvent",
      "UnsubscribedEvent",
      "UserBlockedEvent"
    ],
    "IssueTimelineItems": [
      "AddedToProjectEvent",
      "AssignedEvent",
      "ClosedEvent",
      "CommentDeletedEvent",
      "ConnectedEvent",
      "ConvertedNoteToIssueEvent",
      "CrossReferencedEvent",
      "DemilestonedEvent",
      "DisconnectedEvent",
      "IssueComment",
      "LabeledEvent",
      "LockedEvent",
      "MarkedAsDuplicateEvent",
      "MentionedEvent",
      "MilestonedEvent",
      "MovedColumnsInProjectEvent",
      "PinnedEvent",
      "ReferencedEvent",
      "RemovedFromProjectEvent",
      "RenamedTitleEvent",
      "ReopenedEvent",
      "SubscribedEvent",
      "TransferredEvent",
      "UnassignedEvent",
      "UnlabeledEvent",
      "UnlockedEvent",
      "UnmarkedAsDuplicateEvent",
      "UnpinnedEvent",
      "UnsubscribedEvent",
      "UserBlockedEvent"
    ],
    "Labelable": [
      "Issue",
      "PullRequest"
    ],
    "Lockable": [
      "Issue",
      "PullRequest"
    ],
    "MemberStatusable": [
      "Organization",
      "Team"
    ],
    "MilestoneItem": [
      "Issue",
      "PullRequest"
    ],
    "Minimizable": [
      "CommitComment",
      "GistComment",
      "IssueComment",
      "PullRequestReviewComment"
    ],
    "Node": [
      "AddedToProjectEvent",
      "App",
      "AssignedEvent",
      "AutoMergeDisabledEvent",
      "AutoMergeEnabledEvent",
      "AutoRebaseEnabledEvent",
      "AutoSquashEnabledEvent",
      "AutomaticBaseChangeFailedEvent",
      "AutomaticBaseChangeSucceededEvent",
      "BaseRefChangedEvent",
      "BaseRefDeletedEvent",
      "BaseRefForcePushedEvent",
      "Blob",
      "Bot",
      "BranchProtectionRule",
      "CWE",
      "CheckRun",
      "CheckSuite",
      "ClosedEvent",
      "CodeOfConduct",
      "CommentDeletedEvent",
      "Commit",
      "CommitComment",
      "CommitCommentThread",
      "ConnectedEvent",
      "ConvertToDraftEvent",
      "ConvertedNoteToIssueEvent",
      "CrossReferencedEvent",
      "DemilestonedEvent",
      "DeployKey",
      "DeployedEvent",
      "Deployment",
      "DeploymentEnvironmentChangedEvent",
      "DeploymentStatus",
      "DisconnectedEvent",
      "Enterprise",
      "EnterpriseAdministratorInvitation",
      "EnterpriseIdentityProvider",
      "EnterpriseRepositoryInfo",
      "EnterpriseServerInstallation",
      "EnterpriseServerUserAccount",
      "EnterpriseServerUserAccountEmail",
      "EnterpriseServerUserAccountsUpload",
      "EnterpriseUserAccount",
      "ExternalIdentity",
      "Gist",
      "GistComment",
      "HeadRefDeletedEvent",
      "HeadRefForcePushedEvent",
      "HeadRefRestoredEvent",
      "IpAllowListEntry",
      "Issue",
      "IssueComment",
      "Label",
      "LabeledEvent",
      "Language",
      "License",
      "LockedEvent",
      "Mannequin",
      "MarkedAsDuplicateEvent",
      "MarketplaceCategory",
      "MarketplaceListing",
      "MembersCanDeleteReposClearAuditEntry",
      "MembersCanDeleteReposDisableAuditEntry",
      "MembersCanDeleteReposEnableAuditEntry",
      "MentionedEvent",
      "MergedEvent",
      "Milestone",
      "MilestonedEvent",
      "MovedColumnsInProjectEvent",
      "OauthApplicationCreateAuditEntry",
      "OrgAddBillingManagerAuditEntry",
      "OrgAddMemberAuditEntry",
      "OrgBlockUserAuditEntry",
      "OrgConfigDisableCollaboratorsOnlyAuditEntry",
      "OrgConfigEnableCollaboratorsOnlyAuditEntry",
      "OrgCreateAuditEntry",
      "OrgDisableOauthAppRestrictionsAuditEntry",
      "OrgDisableSamlAuditEntry",
      "OrgDisableTwoFactorRequirementAuditEntry",
      "OrgEnableOauthAppRestrictionsAuditEntry",
      "OrgEnableSamlAuditEntry",
      "OrgEnableTwoFactorRequirementAuditEntry",
      "OrgInviteMemberAuditEntry",
      "OrgInviteToBusinessAuditEntry",
      "OrgOauthAppAccessApprovedAuditEntry",
      "OrgOauthAppAccessDeniedAuditEntry",
      "OrgOauthAppAccessRequestedAuditEntry",
      "OrgRemoveBillingManagerAuditEntry",
      "OrgRemoveMemberAuditEntry",
      "OrgRemoveOutsideCollaboratorAuditEntry",
      "OrgRestoreMemberAuditEntry",
      "OrgUnblockUserAuditEntry",
      "OrgUpdateDefaultRepositoryPermissionAuditEntry",
      "OrgUpdateMemberAuditEntry",
      "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
      "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
      "Organization",
      "OrganizationIdentityProvider",
      "OrganizationInvitation",
      "Package",
      "PackageFile",
      "PackageTag",
      "PackageVersion",
      "PinnedEvent",
      "PinnedIssue",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "Project",
      "ProjectCard",
      "ProjectColumn",
      "PublicKey",
      "PullRequest",
      "PullRequestCommit",
      "PullRequestCommitCommentThread",
      "PullRequestReview",
      "PullRequestReviewComment",
      "PullRequestReviewThread",
      "Push",
      "PushAllowance",
      "Reaction",
      "ReadyForReviewEvent",
      "Ref",
      "ReferencedEvent",
      "Release",
      "ReleaseAsset",
      "RemovedFromProjectEvent",
      "RenamedTitleEvent",
      "ReopenedEvent",
      "RepoAccessAuditEntry",
      "RepoAddMemberAuditEntry",
      "RepoAddTopicAuditEntry",
      "RepoArchivedAuditEntry",
      "RepoChangeMergeSettingAuditEntry",
      "RepoConfigDisableAnonymousGitAccessAuditEntry",
      "RepoConfigDisableCollaboratorsOnlyAuditEntry",
      "RepoConfigDisableContributorsOnlyAuditEntry",
      "RepoConfigDisableSockpuppetDisallowedAuditEntry",
      "RepoConfigEnableAnonymousGitAccessAuditEntry",
      "RepoConfigEnableCollaboratorsOnlyAuditEntry",
      "RepoConfigEnableContributorsOnlyAuditEntry",
      "RepoConfigEnableSockpuppetDisallowedAuditEntry",
      "RepoConfigLockAnonymousGitAccessAuditEntry",
      "RepoConfigUnlockAnonymousGitAccessAuditEntry",
      "RepoCreateAuditEntry",
      "RepoDestroyAuditEntry",
      "RepoRemoveMemberAuditEntry",
      "RepoRemoveTopicAuditEntry",
      "Repository",
      "RepositoryInvitation",
      "RepositoryTopic",
      "RepositoryVisibilityChangeDisableAuditEntry",
      "RepositoryVisibilityChangeEnableAuditEntry",
      "RepositoryVulnerabilityAlert",
      "ReviewDismissalAllowance",
      "ReviewDismissedEvent",
      "ReviewRequest",
      "ReviewRequestRemovedEvent",
      "ReviewRequestedEvent",
      "SavedReply",
      "SecurityAdvisory",
      "SponsorsListing",
      "SponsorsTier",
      "Sponsorship",
      "Status",
      "StatusCheckRollup",
      "StatusContext",
      "SubscribedEvent",
      "Tag",
      "Team",
      "TeamAddMemberAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamChangeParentTeamAuditEntry",
      "TeamDiscussion",
      "TeamDiscussionComment",
      "TeamRemoveMemberAuditEntry",
      "TeamRemoveRepositoryAuditEntry",
      "Topic",
      "TransferredEvent",
      "Tree",
      "UnassignedEvent",
      "UnlabeledEvent",
      "UnlockedEvent",
      "UnmarkedAsDuplicateEvent",
      "UnpinnedEvent",
      "UnsubscribedEvent",
      "User",
      "UserBlockedEvent",
      "UserContentEdit",
      "UserStatus",
      "VerifiableDomain"
    ],
    "OauthApplicationAuditEntryData": [
      "OauthApplicationCreateAuditEntry",
      "OrgOauthAppAccessApprovedAuditEntry",
      "OrgOauthAppAccessDeniedAuditEntry",
      "OrgOauthAppAccessRequestedAuditEntry"
    ],
    "OrgRestoreMemberAuditEntryMembership": [
      "OrgRestoreMemberMembershipOrganizationAuditEntryData",
      "OrgRestoreMemberMembershipRepositoryAuditEntryData",
      "OrgRestoreMemberMembershipTeamAuditEntryData"
    ],
    "OrganizationAuditEntry": [
      "MembersCanDeleteReposClearAuditEntry",
      "MembersCanDeleteReposDisableAuditEntry",
      "MembersCanDeleteReposEnableAuditEntry",
      "OauthApplicationCreateAuditEntry",
      "OrgAddBillingManagerAuditEntry",
      "OrgAddMemberAuditEntry",
      "OrgBlockUserAuditEntry",
      "OrgConfigDisableCollaboratorsOnlyAuditEntry",
      "OrgConfigEnableCollaboratorsOnlyAuditEntry",
      "OrgCreateAuditEntry",
      "OrgDisableOauthAppRestrictionsAuditEntry",
      "OrgDisableSamlAuditEntry",
      "OrgDisableTwoFactorRequirementAuditEntry",
      "OrgEnableOauthAppRestrictionsAuditEntry",
      "OrgEnableSamlAuditEntry",
      "OrgEnableTwoFactorRequirementAuditEntry",
      "OrgInviteMemberAuditEntry",
      "OrgInviteToBusinessAuditEntry",
      "OrgOauthAppAccessApprovedAuditEntry",
      "OrgOauthAppAccessDeniedAuditEntry",
      "OrgOauthAppAccessRequestedAuditEntry",
      "OrgRemoveBillingManagerAuditEntry",
      "OrgRemoveMemberAuditEntry",
      "OrgRemoveOutsideCollaboratorAuditEntry",
      "OrgRestoreMemberAuditEntry",
      "OrgUnblockUserAuditEntry",
      "OrgUpdateDefaultRepositoryPermissionAuditEntry",
      "OrgUpdateMemberAuditEntry",
      "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
      "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "RepoAccessAuditEntry",
      "RepoAddMemberAuditEntry",
      "RepoAddTopicAuditEntry",
      "RepoArchivedAuditEntry",
      "RepoChangeMergeSettingAuditEntry",
      "RepoConfigDisableAnonymousGitAccessAuditEntry",
      "RepoConfigDisableCollaboratorsOnlyAuditEntry",
      "RepoConfigDisableContributorsOnlyAuditEntry",
      "RepoConfigDisableSockpuppetDisallowedAuditEntry",
      "RepoConfigEnableAnonymousGitAccessAuditEntry",
      "RepoConfigEnableCollaboratorsOnlyAuditEntry",
      "RepoConfigEnableContributorsOnlyAuditEntry",
      "RepoConfigEnableSockpuppetDisallowedAuditEntry",
      "RepoConfigLockAnonymousGitAccessAuditEntry",
      "RepoConfigUnlockAnonymousGitAccessAuditEntry",
      "RepoCreateAuditEntry",
      "RepoDestroyAuditEntry",
      "RepoRemoveMemberAuditEntry",
      "RepoRemoveTopicAuditEntry",
      "RepositoryVisibilityChangeDisableAuditEntry",
      "RepositoryVisibilityChangeEnableAuditEntry",
      "TeamAddMemberAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamChangeParentTeamAuditEntry",
      "TeamRemoveMemberAuditEntry",
      "TeamRemoveRepositoryAuditEntry"
    ],
    "OrganizationAuditEntryData": [
      "MembersCanDeleteReposClearAuditEntry",
      "MembersCanDeleteReposDisableAuditEntry",
      "MembersCanDeleteReposEnableAuditEntry",
      "OauthApplicationCreateAuditEntry",
      "OrgAddBillingManagerAuditEntry",
      "OrgAddMemberAuditEntry",
      "OrgBlockUserAuditEntry",
      "OrgConfigDisableCollaboratorsOnlyAuditEntry",
      "OrgConfigEnableCollaboratorsOnlyAuditEntry",
      "OrgCreateAuditEntry",
      "OrgDisableOauthAppRestrictionsAuditEntry",
      "OrgDisableSamlAuditEntry",
      "OrgDisableTwoFactorRequirementAuditEntry",
      "OrgEnableOauthAppRestrictionsAuditEntry",
      "OrgEnableSamlAuditEntry",
      "OrgEnableTwoFactorRequirementAuditEntry",
      "OrgInviteMemberAuditEntry",
      "OrgInviteToBusinessAuditEntry",
      "OrgOauthAppAccessApprovedAuditEntry",
      "OrgOauthAppAccessDeniedAuditEntry",
      "OrgOauthAppAccessRequestedAuditEntry",
      "OrgRemoveBillingManagerAuditEntry",
      "OrgRemoveMemberAuditEntry",
      "OrgRemoveOutsideCollaboratorAuditEntry",
      "OrgRestoreMemberAuditEntry",
      "OrgRestoreMemberMembershipOrganizationAuditEntryData",
      "OrgUnblockUserAuditEntry",
      "OrgUpdateDefaultRepositoryPermissionAuditEntry",
      "OrgUpdateMemberAuditEntry",
      "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
      "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "RepoAccessAuditEntry",
      "RepoAddMemberAuditEntry",
      "RepoAddTopicAuditEntry",
      "RepoArchivedAuditEntry",
      "RepoChangeMergeSettingAuditEntry",
      "RepoConfigDisableAnonymousGitAccessAuditEntry",
      "RepoConfigDisableCollaboratorsOnlyAuditEntry",
      "RepoConfigDisableContributorsOnlyAuditEntry",
      "RepoConfigDisableSockpuppetDisallowedAuditEntry",
      "RepoConfigEnableAnonymousGitAccessAuditEntry",
      "RepoConfigEnableCollaboratorsOnlyAuditEntry",
      "RepoConfigEnableContributorsOnlyAuditEntry",
      "RepoConfigEnableSockpuppetDisallowedAuditEntry",
      "RepoConfigLockAnonymousGitAccessAuditEntry",
      "RepoConfigUnlockAnonymousGitAccessAuditEntry",
      "RepoCreateAuditEntry",
      "RepoDestroyAuditEntry",
      "RepoRemoveMemberAuditEntry",
      "RepoRemoveTopicAuditEntry",
      "RepositoryVisibilityChangeDisableAuditEntry",
      "RepositoryVisibilityChangeEnableAuditEntry",
      "TeamAddMemberAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamChangeParentTeamAuditEntry",
      "TeamRemoveMemberAuditEntry",
      "TeamRemoveRepositoryAuditEntry"
    ],
    "PackageOwner": [
      "Organization",
      "Repository",
      "User"
    ],
    "PermissionGranter": [
      "Organization",
      "Repository",
      "Team"
    ],
    "PinnableItem": [
      "Gist",
      "Repository"
    ],
    "ProfileOwner": [
      "Organization",
      "User"
    ],
    "ProjectCardItem": [
      "Issue",
      "PullRequest"
    ],
    "ProjectOwner": [
      "Organization",
      "Repository",
      "User"
    ],
    "PullRequestTimelineItem": [
      "AssignedEvent",
      "BaseRefDeletedEvent",
      "BaseRefForcePushedEvent",
      "ClosedEvent",
      "Commit",
      "CommitCommentThread",
      "CrossReferencedEvent",
      "DemilestonedEvent",
      "DeployedEvent",
      "DeploymentEnvironmentChangedEvent",
      "HeadRefDeletedEvent",
      "HeadRefForcePushedEvent",
      "HeadRefRestoredEvent",
      "IssueComment",
      "LabeledEvent",
      "LockedEvent",
      "MergedEvent",
      "MilestonedEvent",
      "PullRequestReview",
      "PullRequestReviewComment",
      "PullRequestReviewThread",
      "ReferencedEvent",
      "RenamedTitleEvent",
      "ReopenedEvent",
      "ReviewDismissedEvent",
      "ReviewRequestRemovedEvent",
      "ReviewRequestedEvent",
      "SubscribedEvent",
      "UnassignedEvent",
      "UnlabeledEvent",
      "UnlockedEvent",
      "UnsubscribedEvent",
      "UserBlockedEvent"
    ],
    "PullRequestTimelineItems": [
      "AddedToProjectEvent",
      "AssignedEvent",
      "AutoMergeDisabledEvent",
      "AutoMergeEnabledEvent",
      "AutoRebaseEnabledEvent",
      "AutoSquashEnabledEvent",
      "AutomaticBaseChangeFailedEvent",
      "AutomaticBaseChangeSucceededEvent",
      "BaseRefChangedEvent",
      "BaseRefDeletedEvent",
      "BaseRefForcePushedEvent",
      "ClosedEvent",
      "CommentDeletedEvent",
      "ConnectedEvent",
      "ConvertToDraftEvent",
      "ConvertedNoteToIssueEvent",
      "CrossReferencedEvent",
      "DemilestonedEvent",
      "DeployedEvent",
      "DeploymentEnvironmentChangedEvent",
      "DisconnectedEvent",
      "HeadRefDeletedEvent",
      "HeadRefForcePushedEvent",
      "HeadRefRestoredEvent",
      "IssueComment",
      "LabeledEvent",
      "LockedEvent",
      "MarkedAsDuplicateEvent",
      "MentionedEvent",
      "MergedEvent",
      "MilestonedEvent",
      "MovedColumnsInProjectEvent",
      "PinnedEvent",
      "PullRequestCommit",
      "PullRequestCommitCommentThread",
      "PullRequestReview",
      "PullRequestReviewThread",
      "PullRequestRevisionMarker",
      "ReadyForReviewEvent",
      "ReferencedEvent",
      "RemovedFromProjectEvent",
      "RenamedTitleEvent",
      "ReopenedEvent",
      "ReviewDismissedEvent",
      "ReviewRequestRemovedEvent",
      "ReviewRequestedEvent",
      "SubscribedEvent",
      "TransferredEvent",
      "UnassignedEvent",
      "UnlabeledEvent",
      "UnlockedEvent",
      "UnmarkedAsDuplicateEvent",
      "UnpinnedEvent",
      "UnsubscribedEvent",
      "UserBlockedEvent"
    ],
    "PushAllowanceActor": [
      "App",
      "Team",
      "User"
    ],
    "Reactable": [
      "CommitComment",
      "Issue",
      "IssueComment",
      "PullRequest",
      "PullRequestReview",
      "PullRequestReviewComment",
      "TeamDiscussion",
      "TeamDiscussionComment"
    ],
    "ReferencedSubject": [
      "Issue",
      "PullRequest"
    ],
    "RenamedTitleSubject": [
      "Issue",
      "PullRequest"
    ],
    "RepositoryAuditEntryData": [
      "OrgRestoreMemberMembershipRepositoryAuditEntryData",
      "PrivateRepositoryForkingDisableAuditEntry",
      "PrivateRepositoryForkingEnableAuditEntry",
      "RepoAccessAuditEntry",
      "RepoAddMemberAuditEntry",
      "RepoAddTopicAuditEntry",
      "RepoArchivedAuditEntry",
      "RepoChangeMergeSettingAuditEntry",
      "RepoConfigDisableAnonymousGitAccessAuditEntry",
      "RepoConfigDisableCollaboratorsOnlyAuditEntry",
      "RepoConfigDisableContributorsOnlyAuditEntry",
      "RepoConfigDisableSockpuppetDisallowedAuditEntry",
      "RepoConfigEnableAnonymousGitAccessAuditEntry",
      "RepoConfigEnableCollaboratorsOnlyAuditEntry",
      "RepoConfigEnableContributorsOnlyAuditEntry",
      "RepoConfigEnableSockpuppetDisallowedAuditEntry",
      "RepoConfigLockAnonymousGitAccessAuditEntry",
      "RepoConfigUnlockAnonymousGitAccessAuditEntry",
      "RepoCreateAuditEntry",
      "RepoDestroyAuditEntry",
      "RepoRemoveMemberAuditEntry",
      "RepoRemoveTopicAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamRemoveRepositoryAuditEntry"
    ],
    "RepositoryInfo": [
      "Repository"
    ],
    "RepositoryNode": [
      "CommitComment",
      "CommitCommentThread",
      "Issue",
      "IssueComment",
      "PullRequest",
      "PullRequestCommitCommentThread",
      "PullRequestReview",
      "PullRequestReviewComment",
      "RepositoryVulnerabilityAlert"
    ],
    "RepositoryOwner": [
      "Organization",
      "User"
    ],
    "RequestedReviewer": [
      "Mannequin",
      "Team",
      "User"
    ],
    "RequirableByPullRequest": [
      "CheckRun",
      "StatusContext"
    ],
    "ReviewDismissalAllowanceActor": [
      "Team",
      "User"
    ],
    "SearchResultItem": [
      "App",
      "Issue",
      "MarketplaceListing",
      "Organization",
      "PullRequest",
      "Repository",
      "User"
    ],
    "Sponsor": [
      "Organization",
      "User"
    ],
    "Sponsorable": [
      "Organization",
      "User"
    ],
    "SponsorableItem": [
      "Organization",
      "User"
    ],
    "Starrable": [
      "Gist",
      "Repository",
      "Topic"
    ],
    "StatusCheckRollupContext": [
      "CheckRun",
      "StatusContext"
    ],
    "Subscribable": [
      "Commit",
      "Issue",
      "PullRequest",
      "Repository",
      "Team",
      "TeamDiscussion"
    ],
    "TeamAuditEntryData": [
      "OrgRestoreMemberMembershipTeamAuditEntryData",
      "TeamAddMemberAuditEntry",
      "TeamAddRepositoryAuditEntry",
      "TeamChangeParentTeamAuditEntry",
      "TeamRemoveMemberAuditEntry",
      "TeamRemoveRepositoryAuditEntry"
    ],
    "TopicAuditEntryData": [
      "RepoAddTopicAuditEntry",
      "RepoRemoveTopicAuditEntry"
    ],
    "UniformResourceLocatable": [
      "Bot",
      "CheckRun",
      "ClosedEvent",
      "Commit",
      "ConvertToDraftEvent",
      "CrossReferencedEvent",
      "Gist",
      "Issue",
      "Mannequin",
      "MergedEvent",
      "Milestone",
      "Organization",
      "PullRequest",
      "PullRequestCommit",
      "ReadyForReviewEvent",
      "Release",
      "Repository",
      "RepositoryTopic",
      "ReviewDismissedEvent",
      "TeamDiscussion",
      "TeamDiscussionComment",
      "User"
    ],
    "Updatable": [
      "CommitComment",
      "GistComment",
      "Issue",
      "IssueComment",
      "Project",
      "PullRequest",
      "PullRequestReview",
      "PullRequestReviewComment",
      "TeamDiscussion",
      "TeamDiscussionComment"
    ],
    "UpdatableComment": [
      "CommitComment",
      "GistComment",
      "Issue",
      "IssueComment",
      "PullRequest",
      "PullRequestReview",
      "PullRequestReviewComment",
      "TeamDiscussion",
      "TeamDiscussionComment"
    ],
    "VerifiableDomainOwner": [
      "Enterprise",
      "Organization"
    ]
  }
};
      export default result;
    