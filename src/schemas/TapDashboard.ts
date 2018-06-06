import { RDBType, Relationship, SchemaDef } from 'reactivedb/interface'
import { schemaColl } from './schemas'

import {
  UserId,
  ProjectId,
  TapChartId,
  TapDashboardId,
  ExecutorOrCreator,
  TapGenericFilterRequest as FilterRequest,
  TapGenericFilterResponse as FilterResponse
} from 'teambition-types'

import {
  TapChart
} from './TapChart'

export type TapDashboardDisplay = {
  layout: 'folder' | 'details'
  visible: boolean
  dependency?: string[]
}

export type TapCoordSize = 'small' | 'mid' | 'large'

export interface TapCoordination {
  _objectId: TapDashboardId | TapChartId
  order?: number
  size?: TapCoordSize
}

export type TapDashboardSectionId = string & { kind: 'TapDashboardSectionId' }

export interface TapDashboardSection {
  _id: TapDashboardSectionId
  name: string
}

export interface TapDashboard<T extends FilterRequest | FilterResponse> {
  _id: TapDashboardId

  _projectId: ProjectId

  _creatorId: UserId
  creator?: ExecutorOrCreator

  _ancestorId: TapDashboardId | null
  ancestor?: TapDashboard<FilterResponse>

  name: string
  desc: string
  display: TapDashboardDisplay
  coords: TapCoordination[]
  coverChart?: TapChart<FilterResponse>

  sections: TapDashboardSection[]
  _selectedSectionId: TapDashboardSectionId

  filter: T
  filterList: FilterResponse

  thumbnail: string

  tapcharts: TapChart<FilterResponse>[]
  tapdashboards: TapDashboard<FilterResponse>[]

  lastRefreshed: string
}

const schema: SchemaDef<TapDashboard<FilterRequest | FilterResponse>> = {
  _id: {
    type: RDBType.STRING,
    primaryKey: true
  },

  _projectId: {
    type: RDBType.STRING
  },

  _creatorId: {
    type: RDBType.STRING
  },
  creator: {
    type: Relationship.oneToOne,
    virtual: {
      name: 'User',
      where: (userTable: any) => ({
        _creatorId: userTable._id
      })
    }
  },

  _ancestorId: {
    type: RDBType.STRING
  },
  ancestor: {
    type: Relationship.oneToOne,
    virtual: {
      name: 'TapDashboard',
      where: (tapDashboardTable: any) => ({
        _ancestorId: tapDashboardTable._id
      })
    }
  },

  name: {
    type: RDBType.STRING
  },
  desc: {
    type: RDBType.STRING
  },
  display: {
    type: RDBType.OBJECT
  },
  coords: {
    type: RDBType.OBJECT
  },
  coverChart: {
    type: RDBType.OBJECT
  },

  sections: {
    type: RDBType.OBJECT
  },

  _selectedSectionId: {
    type: RDBType.STRING
  },

  filter: {
    type: RDBType.OBJECT
  },

  filterList: {
    type: RDBType.OBJECT
  },

  thumbnail: {
    type: RDBType.STRING
  },

  tapcharts: {
    type: Relationship.oneToMany,
    virtual: {
      name: 'TapChart',
      where: (tapChartTable: any) => ({
        _id: tapChartTable._tapdashboardId
      })
    }
  },
  tapdashboards: {
    type: Relationship.oneToMany,
    virtual: {
      name: 'TapDashboard',
      where: (tapDashboardTable: any) => ({
        _id: tapDashboardTable._ancestorId
      })
    }
  },
  lastRefreshed: {
    type: RDBType.DATE_TIME
  }
}

schemaColl.add({ schema, name: 'TapDashboard' })
