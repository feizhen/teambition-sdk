// id

declare module 'teambition-types' {
  export type ActivenessId = string & { kind: 'ActivenessId' }
  export type ActivityId = string & { kind: 'ActivityId' }
  export type ApplicationId = string & { kind: 'ApplicationId' }
  export type CollectionId = string & { kind: 'CollectionId' }
  export type CustomFieldCategoryId = string & { kind: 'CustomFieldCategoryId' }
  export type CustomFieldChoiceId = string & { kind: 'CustomFieldChoiceId' }
  export type CustomFieldId = string & { kind: 'CustomFieldId' }
  export type CustomFieldLinkId = string & { kind: 'CustomFieldLinkId' }
  export type CustomFieldValueId = string & { kind: 'CustomFieldValueId' }
  export type CustomRoleId = string & { kind: 'CustomRoleId' }
  export type EntryCategoryId = string & { kind: 'EntryCategoryId' }
  export type EntryId = string & { kind: 'EntryId' }
  export type EventId = string & { kind: 'EventId' }
  export type FeedbackId = string & { kind: 'FeedbackId' }
  export type FileId = string & { kind: 'FileId' }
  export type GroupId = string & { kind: 'GroupId' }
  export type HomeActivityId = string & { kind: 'HomeActivityId' }
  export type MemberId = string & { kind: 'MemberId' }
  export type MessageId = string & { kind: 'MessageId' }
  export type ObjectLinkId = string & { kind: 'ObjectLinkId' }
  export type OrganizationId = string & { kind: 'OrganizationId' }
  export type PostId = string & { kind: 'PostId' }
  export type PreferenceId = string & { kind: 'PreferenceId' }
  export type ProjectBoardId = string & { kind: 'ProjectBoardId' }
  export type ProjectId = string & { kind: 'ProjectId' }
  export type ProjectTagId = string & { kind: 'ProjectTagId' }
  export type RoomId = string & { kind: 'RoomId' }
  export type ScenarioFieldId = string & { kind: 'ScenarioFieldId' }
  export type ScenarioFieldConfigId = string & { kind: 'ScenarioFieldConfigId' }
  export type SmartGroupId = string & { kind: 'SmartGroupId' }
  export type SprintId = string & { kind: 'SprintId' }
  export type StageId = string & { kind: 'StageId' }
  export type SubscribeId = string & { kind: 'SubscribeId' }
  export type SubtaskId = string & { kind: 'SubtaskId' }
  export type TagCategoryId = string & { kind: 'TagCategoryId' }
  export type TagId = string & { kind: 'TagId' }
  export type TapChartId = string & { kind: 'TapChartId' }
  export type TapDashboardId = string & { kind: 'TapDashboardId' }
  export type TaskflowId = string & { kind: 'TaskflowId' }
  export type TaskflowStatusId = string & { kind: 'TaskflowStatusId' }
  export type TaskId = string & { kind: 'TaskId' }
  export type TasklistId = string & { kind: 'TasklistId' }
  export type TeamId = string & { kind: 'TeamId' }
  export type UserId = string & { kind: 'UserId' }
  export type VersionId = string & { kind: 'VersionId' }
  export type WorkId = string & { kind: 'WorkId' }
}

// computed id

declare module 'teambition-types' {
  export type DefaultRoleId = -1 | 0 | 1 | 2
  export type DetailObjectId = TaskId | PostId | EventId | FileId
  export type RoleId = DefaultRoleId | CustomRoleId
}

// types

declare module 'teambition-types' {
  export type CustomFieldBoundType = 'member' | 'project' | 'application'
  export type CustomFieldType = 'date' | 'dropDown' | 'multipleChoice' | 'number' | 'text'
  export type CustomRoleType = 'project' | 'organization'
  export type CustomScenarioFieldType = 'customfield'
  export type DefaultColors = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple'
  export type DetailObjectType = 'entry' | 'event' | 'post' | 'task' | 'work'
  export type DetailObjectTypes = 'entries' | 'events' | 'posts' | 'tasks' | 'works'
  export type EventOfficialScenarioFieldType = 'content' | 'location' | 'tag'
  export type EventScenarioFieldIcon = 'event' | 'lecture' | 'training' | 'workshop' | 'forum' | 'seminar' | 'personal'
  export type ReminderType = 'customize' | 'dueDate' | 'startDate' | 'unset'
  export type ScenarioFieldConfigIcon = TaskScenarioFieldIcon | EventScenarioFieldIcon
  export type ScenarioFieldConfigObjectType = 'task' | 'event'
  export type ScenarioFieldType = CustomScenarioFieldType | TaskOfficialScenarioFieldType | EventOfficialScenarioFieldType
  export type ScenarioProTemplateConfigType = 'story' | 'bug' | 'subtask'
  export type SmartGroupType = 'story' | 'sprint' | 'bug'
  export type SmartGroupViewType = 'table' | 'time' | 'kanban'
  export type SwimAxisLane = 'sprint' | 'subtask' | 'executor' | 'stage' | 'priority' | 'isDone'
    | 'taskType' | 'rating' | 'storyPoint'
  export type TagType = 'organization' | 'project'
  export type TaskOfficialScenarioFieldType = 'note' | 'priority' | 'tag' | 'worktimes' | 'storyPoint' | 'taskProgress' | 'rating' | 'sprint'
  export type TaskPriority = 0 | 1 | 2
  export type TaskScenarioFieldIcon = 'task' | 'requirement' | 'bug' | 'hr' | 'resource' | 'order' | 'salesLead' | 'subtask'
  export type TeamMemberStatus = 'in' | 'quited' | 'disabled'
  export type VisibleOption = 'members' | 'involves'
}

declare module 'teambition-types' {

  export interface CustomFieldValue {
    _customfieldId: CustomFieldId
    type: CustomFieldType
    values: string[]
  }

  export interface Reminder {
    date: string
    members: UserId[]
    type: ReminderType
    _creatorId: UserId
  }

  export interface LikeSchema {
    isLike: boolean
    likesCount: number
    likesGroup: ExecutorOrCreator[]
  }

  export interface TbUrlSchema {
    statusCode: number
    isExist: boolean
    code: string
    origin?: string
  }

  export interface ProjectInviteSchema {
    projectId: ProjectId
    invitorId: string
    signCode: string
  }

  export interface UserSnippet {
    _id: UserId
    name: string
    avatarUrl: string
  }

  export interface ExecutorOrCreator extends UserSnippet {
    isRobot?: boolean
  }

  export interface InviteLinkSchema {
    inviteLink: string
    mobileInviteLink: string
    signCode: string
    created: string
    expiration: string
  }

  export interface CreatedInProjectSchema {
    work: number
    post: number
    event: number
    task: number
  }

  export interface RecommendMemberSchema extends UserSnippet {
    email: string
    latestActived: string
    isActive: boolean
    website: string
    title: string
    location: string
  }

  export interface ProjectStatisticSchema {
    task: {
      total: number
      done: number
      today: number
    }
    recent: number[]
    days: number[][]
  }

  export interface ReportSummarySchema {
    accomplishedDelayTasksCount: number
    accomplishedOntimeTasksCount: number
    accomplishedWeekSubTaskCount: number
    accomplishedWeekTaskCount: number
    inprogressDelayTasksCount: number
    inprogressOntimeTasksCount: number
    inprogressSubTasksCount: number
    notStartedTasksCount: number
    totalTasksCount: number
    unassignedTasksCount: number
    accomplishedTasksCount: number
    accomplishedWeekTasksCount: number
    accomplishedOntimeWeekTasksCount: number
    accomplishedWeekSubTasksCount: number
    accomplishedOntimeWeekSubTasksCount: number
    accomplishedSubTasksCount: number
    accomplishedOntimeSubTasksCount: number
  }

  export interface ReportAnalysisSchema {
    values: {
      unfinishedTaskCount: number
      // 2016-08-22 这种格式
      date: string
    }[]
  }

  export interface FavoriteResponse {
    _id: string
    _creatorId: UserId
    _refId: DetailObjectId
    refType: string
    isFavorite: boolean
    isUpdated: boolean
    isVisible: boolean
    data: any
    created: string
    updated: string
  }

  export interface UndoFavoriteResponse {
    _refId: DetailObjectId
    refType: DetailObjectType
    isFavorite: boolean
  }

  export interface TasksMeCount {
    executedTasksDoneCount: number
    executedTasksUndoneCount: number
    createdTasksDoneCount: number
    createdTasksUndoneCount: number
    involvedTasksDoneCount: number
    involvedTasksUndoneCount: number
    createdSubtasksDoneCount: number
    createdSubtasksUndoneCount: number
    executedSubtasksDoneCount: number
    executedSubtasksUndoneCount: number
  }

  export type TapBaseRefType = keyof TapGenericFilterRequest

  export type TapBaseDataType = 'type/MongoId' | 'type/Date' | 'type/DateCollection' | 'type/Number' | 'type/String' | 'type/Boolean'

  export type TapSupportedRelative = 'all' | 'past7days' | 'pastmonth' | 'past3months'

  export type TapFilterTarget<R extends TapBaseRefType, D extends TapBaseDataType, U> = {
    refType: R
    isRequired: boolean
    dataType: D
    refData?: U
    defaultValue?: U,
  }

  export interface TapGenericFilterRequest {
    projectId?: ProjectId[]
    executorId?: UserId[]
    executorGroup?: TeamId[]
    stageId?: StageId[]
    organizationId?: OrganizationId[]
    creatorId?: UserId[]
    creatorGroup?: TeamId[]
    tasklistId?: TasklistId[]
    createBegin?: string
    createEnd?: string
    createRelative?: string
    dueBegin?: string
    dueEnd?: string
    dueRelative?: string
    accBegin?: string
    accEnd?: string
    accRelative?: string
    startBegin?: string
    startEnd?: string
    startRelative?: string
    rangeBegin?: string
    rangeEnd?: string
    rangeRelative?: string
    isDone?: boolean
    isArchived?: boolean
    priority?: number
    isOverdue?: boolean
    limit?: number
    isSubtask?: boolean
    pageCount?: number
    pageNum?: number
    sprintId?: SprintId[]
    weekend?: number[]
    holiday?: string[]
    groupField?: string
  }

  export type TapGenericFilterResponse = Array<
    TapFilterTarget<'projectId', 'type/MongoId', ProjectId[]> |
    TapFilterTarget<'executorId', 'type/MongoId', UserId[]> |
    TapFilterTarget<'executorGroup', 'type/MongoId', TeamId[]> |
    TapFilterTarget<'stageId', 'type/MongoId', StageId[]> |
    TapFilterTarget<'organizationId', 'type/MongoId', OrganizationId[]> |
    TapFilterTarget<'creatorId', 'type/MongoId', UserId[]> |
    TapFilterTarget<'creatorGroup', 'type/MongoId', TeamId[]> |
    TapFilterTarget<'tasklistId', 'type/MongoId', TasklistId[]> |
    TapFilterTarget<'createBegin', 'type/Date', string> |
    TapFilterTarget<'createEnd', 'type/Date', string> |
    TapFilterTarget<'createRelative', 'type/String', TapSupportedRelative> |
    TapFilterTarget<'dueBegin', 'type/Date', string> |
    TapFilterTarget<'dueEnd', 'type/Date', string> |
    TapFilterTarget<'dueRelative', 'type/String', TapSupportedRelative> |
    TapFilterTarget<'accBegin', 'type/Date', string> |
    TapFilterTarget<'accEnd', 'type/Date', string> |
    TapFilterTarget<'accRelative', 'type/String', TapSupportedRelative> |
    TapFilterTarget<'startBegin', 'type/Date', string> |
    TapFilterTarget<'startEnd', 'type/Date', string> |
    TapFilterTarget<'startRelative', 'type/String', TapSupportedRelative> |
    TapFilterTarget<'rangeBegin', 'type/Date', string> |
    TapFilterTarget<'rangeEnd', 'type/Date', string> |
    TapFilterTarget<'rangeRelative', 'type/String', TapSupportedRelative> |
    TapFilterTarget<'isDone', 'type/Boolean', boolean> |
    TapFilterTarget<'isArchived', 'type/Boolean', boolean> |
    TapFilterTarget<'priority', 'type/Number', number> |
    TapFilterTarget<'isOverdue', 'type/Boolean', boolean> |
    TapFilterTarget<'limit', 'type/Number', number> |
    TapFilterTarget<'isSubtask', 'type/Boolean', boolean> |
    TapFilterTarget<'pageCount', 'type/Number', number> |
    TapFilterTarget<'pageNum', 'type/Number', number> |
    TapFilterTarget<'sprintId', 'type/MongoId', SprintId[]> |
    TapFilterTarget<'weekend', 'type/Number', number[]> |
    TapFilterTarget<'holiday', 'type/DateCollection', string[]> |
    TapFilterTarget<'groupField', 'type/String', string>
    >

}
