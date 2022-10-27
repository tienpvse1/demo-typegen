import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AddCityData: any;
  ConnectionCursor: any;
  Data: any;
  DataRequestBonus: any;
  DataRequestBonus2: any;
  DataRequestSalary: any;
  DataUserFile: any;
  DateTime: any;
  JSON: any;
  MatchItem: any;
  MigrateMessage: any;
  Object: any;
  RenderedApproverBonusObject: any;
  RenderedObject: any;
  RenderedObjectBonusOffice: any;
  RenderedObjectBonusOfficeApprover: any;
  RenderedObjectOffice: any;
  RenderedObjectOfficeMinMax: any;
  RenderedOfficeObject: any;
  RenderedTeamObject: any;
  RenderedUserObject: any;
  RenderedUserUpdateObject: any;
  SearchResult: any;
  SeedingData: any;
  TestBodyData: any;
  _int4: any;
  bigint: any;
  data: any;
  data1: any;
  data2: any;
  float8: any;
  json: any;
  jsonb: any;
  listBonusID: any;
  obj: any;
  timestamptz: any;
  uuid: any;
};

export type AirtableInput = {
  bonus: Scalars['String'];
  mt4?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type BankMigrateOutput = {
  __typename?: 'BankMigrateOutput';
  data?: Maybe<Scalars['MigrateMessage']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type BonusBlacklistResponse = {
  __typename?: 'BonusBlacklistResponse';
  data?: Maybe<Nq_Bonus_Blacklist>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type BonusPayload = {
  amount: Scalars['Float'];
  id: Scalars['Float'];
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ChangeOfficeResponse = {
  __typename?: 'ChangeOfficeResponse';
  data?: Maybe<Nq_Change_Office_Request>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type ChangeProfileStatusArgs = {
  /** reason why user is rejected */
  description?: InputMaybe<Scalars['String']>;
  /** id of users */
  id: Scalars['String'];
  verified?: InputMaybe<Nq_Verified_Status>;
};

export type CityOutput = {
  __typename?: 'CityOutput';
  data?: Maybe<Scalars['AddCityData']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum CorePreferredPayment {
  Nl = 'nl',
  Ppd = 'ppd'
}

export enum CoreRole {
  Admin = 'Admin',
  Administrator = 'Administrator',
  Approver = 'Approver',
  Inspector = 'Inspector',
  Leader = 'Leader',
  Manager = 'Manager',
  Ret = 'Ret',
  Sale = 'Sale',
  SaleManager = 'SaleManager'
}

export enum CoreSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Core_PreferredPaymentFilterComparison = {
  eq?: InputMaybe<Core_PreferredPayment>;
  gt?: InputMaybe<Core_PreferredPayment>;
  gte?: InputMaybe<Core_PreferredPayment>;
  iLike?: InputMaybe<Core_PreferredPayment>;
  in?: InputMaybe<Array<Core_PreferredPayment>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Core_PreferredPayment>;
  lt?: InputMaybe<Core_PreferredPayment>;
  lte?: InputMaybe<Core_PreferredPayment>;
  neq?: InputMaybe<Core_PreferredPayment>;
  notILike?: InputMaybe<Core_PreferredPayment>;
  notIn?: InputMaybe<Array<Core_PreferredPayment>>;
  notLike?: InputMaybe<Core_PreferredPayment>;
};

export type CreateAnnouncementInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  office_ids: Array<Scalars['Float']>;
  take_effect_from?: InputMaybe<Scalars['DateTime']>;
  take_effect_to?: InputMaybe<Scalars['DateTime']>;
};

export type CreateBonusBlacklistInput = {
  description?: InputMaybe<Scalars['String']>;
  is_banned?: InputMaybe<Scalars['Boolean']>;
  profile_id: Scalars['String'];
};

export type CreateManyNq_Review_Withdrawal_Request_DtosInput = {
  /** Array of records to create */
  nq_review_withdrawal_request_dtos: Array<CreateNq_Review_Withdrawal_Request_Dto>;
};

export type CreateNq_ProfileSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: Nq_ProfileSubscriptionFilter;
};

export type CreateNq_Review_Withdrawal_Request_Dto = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  issuer_id?: InputMaybe<Scalars['String']>;
  processor_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreateOfficeDto = {
  address: Scalars['String'];
  airtable?: InputMaybe<AirtableInput>;
  airtable_base_id?: InputMaybe<Scalars['String']>;
  airtable_base_name?: InputMaybe<Scalars['String']>;
  city_id: Scalars['Float'];
  code?: InputMaybe<Scalars['String']>;
  managed_by_id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  office_rules?: InputMaybe<Array<CreateOfficeRuleInput>>;
};

export type CreateOfficeRuleInput = {
  amount: Scalars['Float'];
  time_range: Scalars['Float'];
};

export type CreateOneNq_Review_Withdrawal_Request_DtoInput = {
  /** The record to create */
  nq_review_withdrawal_request_dto: CreateNq_Review_Withdrawal_Request_Dto;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteInput = {
  id: Scalars['String'];
};

export type DeleteManyNq_Review_Withdrawal_Request_DtosInput = {
  /** Filter to find records to delete */
  filter: Nq_Review_Withdrawal_Request_DtoDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteOneNq_ProfileSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: Nq_ProfileSubscriptionFilter;
};

export type DeleteOneNq_Review_Withdrawal_Request_DtoInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOutput = {
  __typename?: 'DeleteOutput';
  deleteCount: Scalars['Int'];
};

export type ExportCsvInput = {
  current_page?: InputMaybe<Scalars['Int']>;
  end_day?: InputMaybe<Scalars['String']>;
  max_total?: InputMaybe<Scalars['Int']>;
  min_total?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  start_day?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExportCsvOutput = {
  __typename?: 'ExportCsvOutput';
  data?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ExportOfficeCsvOutput = {
  __typename?: 'ExportOfficeCsvOutput';
  data?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ExportTeamCsvOutput = {
  __typename?: 'ExportTeamCsvOutput';
  data?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ExportUserCsvOutput = {
  __typename?: 'ExportUserCsvOutput';
  data?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ForceOutput = {
  __typename?: 'ForceOutput';
  status: Scalars['String'];
};

export type ForceSyncResponse = {
  __typename?: 'ForceSyncResponse';
  status: Scalars['String'];
};

export type GetHistoryOutput = {
  __typename?: 'GetHistoryOutput';
  data?: Maybe<Scalars['Data']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetInitialNotificationInput = {
  filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetOfficeWithMemberFilterV2Output = {
  __typename?: 'GetOfficeWithMemberFilterV2Output';
  data?: Maybe<Scalars['Data']>;
  message: Scalars['String'];
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetTeamInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetTeamOutput = {
  __typename?: 'GetTeamOutput';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['jsonb']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type GetUserWithFilterOutput = {
  __typename?: 'GetUserWithFilterOutput';
  data?: Maybe<Scalars['Data']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum HasuraSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum HistoryType {
  RequestUpdateVerifiedStatus = 'REQUEST_UPDATE_VERIFIED_STATUS',
  UpdateProfile = 'UPDATE_PROFILE',
  UpdateStatus = 'UPDATE_STATUS'
}

export enum HistoryTypes {
  RequestUpdateVerifiedStatus = 'REQUEST_UPDATE_VERIFIED_STATUS',
  UpdateProfile = 'UPDATE_PROFILE',
  UpdateStatus = 'UPDATE_STATUS'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type InitialNotificationOutput = {
  __typename?: 'InitialNotificationOutput';
  bonu?: Maybe<Bonus>;
  bonus_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_readed?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<Profile>;
  profileByCreatedBy?: Maybe<Profile>;
  rely_id?: Maybe<Scalars['String']>;
  report?: Maybe<Report>;
  report_id?: Maybe<Scalars['String']>;
  report_rely?: Maybe<Report_Rely>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type InportDataFromAirtableDto = {
  office_name: Scalars['String'];
};

export type InportDataFromAirtableOutput = {
  __typename?: 'InportDataFromAirtableOutput';
  result: Scalars['String'];
};

export type InsertTeamInput = {
  manager_id?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  office_id: Scalars['Int'];
  /** a list of id of users(profiles) */
  user_ids?: InputMaybe<Array<Scalars['String']>>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int'];
  upper: Scalars['Int'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export enum KeyOfBonusType {
  Bonus = 'bonus',
  Bonus2 = 'bonus2',
  Salary = 'salary'
}

export type ListBonusId = {
  id?: InputMaybe<Scalars['Int']>;
  transfer_option?: InputMaybe<Scalars['Int']>;
};

export type ListSalaryId = {
  id?: InputMaybe<Scalars['Int']>;
  transfer_option?: InputMaybe<Scalars['Int']>;
};

export type MarkTransferredBonusDto = {
  dtos: Array<BonusPayload>;
  type: KeyOfBonusType;
};

export type MasUpdateUser = {
  free?: InputMaybe<Scalars['Boolean']>;
  officeId?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type MassUpdateProfileDto = {
  office_code: Scalars['String'];
  profile_email: Scalars['String'];
  team_name?: InputMaybe<Scalars['String']>;
};

export type MigrateBonusOutput = {
  __typename?: 'MigrateBonusOutput';
  data?: Maybe<Scalars['Data']>;
  message: Scalars['String'];
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type MigrateOutput = {
  __typename?: 'MigrateOutput';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  add_team_and_reassign_members: Nq_Team_Response;
  changeProfileStatusGql: Nq_Profile_Response;
  count_transferred_data: Scalars['Int'];
  createManyNq_review_withdrawal_request_dtos: Array<Nq_Review_Withdrawal_Request_Dto>;
  createOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_Dto;
  create_announcement: Nq_Announcement_Response;
  create_bonus_blacklist: BonusBlacklistResponse;
  create_offices: Nq_Office_Response;
  custom_update_team: Nq_Team_Response;
  deleteManyNq_review_withdrawal_request_dtos: DeleteManyResponse;
  deleteOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_DtoDeleteResponse;
  forceSyncGql: ForceSyncResponse;
  mark_bonus_as_transferred_with_crypto: Scalars['String'];
  massUpdateProfile: Nq_Mass_Update_Profile_Response;
  nonTransactionalUpdateProfile: Nq_Mass_Update_Profile_Response;
  process_change_office: ChangeOfficeResponse;
  signup: Nq_Profile_Response;
  synchronize_airtable_base: Nq_Synchronize_Airtable_Base_Response;
  updateManyNq_review_withdrawal_request_dtos: UpdateManyResponse;
  updateOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_Dto;
  update_office_v2: Nq_Update_Office_Response_Dto;
  upload_office: Nq_Export_Office_Response;
  upload_team: Nq_Export_Team_Response;
};


export type MutationAdd_Team_And_Reassign_MembersArgs = {
  input: InsertTeamInput;
};


export type MutationChangeProfileStatusGqlArgs = {
  input: ChangeProfileStatusArgs;
};


export type MutationCreateManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: CreateManyNq_Review_Withdrawal_Request_DtosInput;
};


export type MutationCreateOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: CreateOneNq_Review_Withdrawal_Request_DtoInput;
};


export type MutationCreate_AnnouncementArgs = {
  input: CreateAnnouncementInput;
};


export type MutationCreate_Bonus_BlacklistArgs = {
  input: CreateBonusBlacklistInput;
};


export type MutationCreate_OfficesArgs = {
  input: CreateOfficeDto;
};


export type MutationCustom_Update_TeamArgs = {
  input: UpdateTeamInput;
};


export type MutationDeleteManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: DeleteManyNq_Review_Withdrawal_Request_DtosInput;
};


export type MutationDeleteOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: DeleteOneNq_Review_Withdrawal_Request_DtoInput;
};


export type MutationMark_Bonus_As_Transferred_With_CryptoArgs = {
  input: MarkTransferredBonusDto;
};


export type MutationMassUpdateProfileArgs = {
  input: Array<MassUpdateProfileDto>;
};


export type MutationNonTransactionalUpdateProfileArgs = {
  input: Array<MassUpdateProfileDto>;
};


export type MutationProcess_Change_OfficeArgs = {
  input: ProcessChangeOfficeInput;
};


export type MutationSignupArgs = {
  input: Nq_Sign_Up;
};


export type MutationSynchronize_Airtable_BaseArgs = {
  input: SynchronizeAirtableBaseInput;
};


export type MutationUpdateManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: UpdateManyNq_Review_Withdrawal_Request_DtosInput;
};


export type MutationUpdateOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: UpdateOneNq_Review_Withdrawal_Request_DtoInput;
};


export type MutationUpdate_Office_V2Args = {
  _set: Nq_Update_Office_Dto;
  where: Scalars['JSON'];
};


export type MutationUpload_OfficeArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scalars['JSON']>>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpload_TeamArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scalars['JSON']>>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Nq_ProfileDeleteResponse = {
  __typename?: 'Nq_profileDeleteResponse';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  address_wallet?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  bank_account?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['DateTime']>;
  birthday?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
  domicile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  envelope?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_update_password?: Maybe<Scalars['Boolean']>;
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['DateTime']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  preferred_payment?: Maybe<Core_PreferredPayment>;
  relation_id?: Maybe<Scalars['String']>;
  residence?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Float']>;
};

export type Nq_Review_Withdrawal_Request_DtoConnection = {
  __typename?: 'Nq_review_withdrawal_request_dtoConnection';
  /** Array of edges. */
  edges: Array<Nq_Review_Withdrawal_Request_DtoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type Nq_Review_Withdrawal_Request_DtoDeleteResponse = {
  __typename?: 'Nq_review_withdrawal_request_dtoDeleteResponse';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  issuer_id?: Maybe<Scalars['String']>;
  processor_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OfficeInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type OfficeOutput = {
  __typename?: 'OfficeOutput';
  address?: Maybe<Scalars['String']>;
  airtable?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  date_request_bonus?: Maybe<Scalars['String']>;
  date_request_salary?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type OfficeRuleDto = {
  __typename?: 'OfficeRuleDto';
  amount?: Maybe<Scalars['Float']>;
  created_at: Scalars['DateTime'];
  created_by_id?: Maybe<Scalars['String']>;
  creator?: Maybe<Nq_Profile>;
  id: Scalars['ID'];
  office?: Maybe<Nq_Office>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
};

export type OfficeRuleDtoAggregateGroupBy = {
  __typename?: 'OfficeRuleDtoAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OfficeRuleDtoCountAggregate = {
  __typename?: 'OfficeRuleDtoCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type OfficeRuleDtoEdge = {
  __typename?: 'OfficeRuleDtoEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OfficeRuleDto */
  node: OfficeRuleDto;
};

export type OfficeRuleDtoFilter = {
  and?: InputMaybe<Array<OfficeRuleDtoFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OfficeRuleDtoFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type OfficeRuleDtoMaxAggregate = {
  __typename?: 'OfficeRuleDtoMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OfficeRuleDtoMinAggregate = {
  __typename?: 'OfficeRuleDtoMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OfficeRuleDtoSort = {
  direction: CoreSortDirection;
  field: OfficeRuleDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OfficeRuleDtoSortFields {
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type OutDeleteUserFile = {
  __typename?: 'OutDeleteUserFile';
  data?: Maybe<Scalars['DataUserFile']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type Output = {
  __typename?: 'Output';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type OutputBonu2forUpdate = {
  __typename?: 'OutputBonu2forUpdate';
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type OutputBonuforUpdate = {
  __typename?: 'OutputBonuforUpdate';
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type OutputBonus = {
  __typename?: 'OutputBonus';
  errorMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type OutputCheckUserProfile = {
  __typename?: 'OutputCheckUserProfile';
  data?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type OutputCronUpdateUser = {
  __typename?: 'OutputCronUpdateUser';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type OutputDelete = {
  __typename?: 'OutputDelete';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type OutputSalaryforUpdate = {
  __typename?: 'OutputSalaryforUpdate';
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Param = {
  __typename?: 'Param';
  attributesToCrop?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributesToHighlight?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributesToRetrieve?: Maybe<Array<Maybe<Scalars['String']>>>;
  cropLength?: Maybe<Scalars['Int']>;
  cropMarker?: Maybe<Scalars['String']>;
  facetsDistribution?: Maybe<Array<Maybe<Scalars['String']>>>;
  highlightPostTag?: Maybe<Scalars['String']>;
  highlightPreTag?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  matches?: Maybe<Scalars['Boolean']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Params = {
  attributesToCrop?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attributesToHighlight?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attributesToRetrieve?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cropLength?: InputMaybe<Scalars['Int']>;
  cropMarker?: InputMaybe<Scalars['String']>;
  facetsDistribution?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  highlightPostTag?: InputMaybe<Scalars['String']>;
  highlightPreTag?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  matches?: InputMaybe<Scalars['Boolean']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PreferredPayment {
  Nl = 'nl',
  Ppd = 'ppd'
}

export type ProcessChangeOfficeInput = {
  request_id: Scalars['String'];
};

export type ProfileDto = {
  account_holder?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  address_wallet?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Scalars['String']>;
  bank_account?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['DateTime']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  domicile?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  envelope?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_update_password?: InputMaybe<Scalars['Boolean']>;
  national_id?: InputMaybe<Scalars['String']>;
  national_id_issue_date?: InputMaybe<Scalars['DateTime']>;
  national_id_machine_detect?: InputMaybe<Scalars['String']>;
  ngan_luong_acconut?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  place_issue_national_id?: InputMaybe<Scalars['String']>;
  preferred_payment?: InputMaybe<Core_PreferredPayment>;
  relation_id?: InputMaybe<Scalars['String']>;
  residence?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  saler_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Float']>;
  total_withdrawal?: InputMaybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  user_name?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  exportBonuses: Scalars['String'];
  filter_offices: Nq_Paginated_Office;
  filter_profiles: Nq_Paginated_Profile;
  filter_teams: Nq_Paginated_Team;
  genRandomAccount: Scalars['String'];
  getBanks: Nq_BankOffsetConnection;
  get_airtable_bases: Nq_Airtable_Base_Response;
  nq_review_withdrawal_request_dto?: Maybe<Nq_Review_Withdrawal_Request_Dto>;
  nq_review_withdrawal_request_dtos: Nq_Review_Withdrawal_Request_DtoConnection;
  send_verify_email: Nq_Verify_Email_Response;
  verify_emails: Nq_Check_Profile_Response;
};


export type QueryExportBonusesArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilter_OfficesArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  export?: InputMaybe<Scalars['Boolean']>;
  export_all?: InputMaybe<Scalars['Boolean']>;
  export_fields?: InputMaybe<Array<Scalars['String']>>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
};


export type QueryFilter_ProfilesArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['DateTime']>;
  created_to?: InputMaybe<Scalars['DateTime']>;
  current_page?: InputMaybe<Scalars['Int']>;
  from_withdrawal_count?: InputMaybe<Scalars['Int']>;
  in_office_only?: InputMaybe<Scalars['Boolean']>;
  is_in_bonus_blacklist?: InputMaybe<Array<Scalars['Boolean']>>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preferred_payment?: InputMaybe<Array<CorePreferredPayment>>;
  role?: InputMaybe<Array<CoreRole>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  to_withdrawal_count?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Array<Scalars['Int']>>;
};


export type QueryFilter_TeamsArgs = {
  city_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
};


export type QueryGetBanksArgs = {
  filter?: InputMaybe<Nq_BankFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<Nq_BankSort>>;
};


export type QueryGet_Airtable_BasesArgs = {
  airtable_base_id?: InputMaybe<Scalars['String']>;
};


export type QueryNq_Review_Withdrawal_Request_DtoArgs = {
  id: Scalars['ID'];
};


export type QueryNq_Review_Withdrawal_Request_DtosArgs = {
  filter?: InputMaybe<Nq_Review_Withdrawal_Request_DtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoSort>>;
};


export type QuerySend_Verify_EmailArgs = {
  ids: Array<Scalars['String']>;
};


export type QueryVerify_EmailsArgs = {
  emails: Array<Scalars['String']>;
};

export type QueryHistoryOutput = {
  __typename?: 'QueryHistoryOutput';
  data: Scalars['Data'];
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success?: Maybe<Scalars['Boolean']>;
};

export type RequestBonus2Output = {
  __typename?: 'RequestBonus2Output';
  data?: Maybe<Scalars['DataRequestBonus2']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type RequestBonusInput = {
  id: Scalars['String'];
};

export type RequestBonusOutput = {
  __typename?: 'RequestBonusOutput';
  data?: Maybe<Scalars['DataRequestBonus']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type RequestSalaryOutput = {
  __typename?: 'RequestSalaryOutput';
  data?: Maybe<Scalars['DataRequestSalary']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export enum Role {
  Leader = 'Leader',
  Manager = 'Manager',
  SaleManager = 'Sale_Manager'
}

export type SampleInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  managed_by?: InputMaybe<Scalars['String']>;
  role_type: Scalars['Int'];
  team_id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type SampleInput1 = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SampleOutput1 = {
  __typename?: 'SampleOutput1';
  accessToken: Scalars['String'];
};

export type SearchInput = {
  index?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Params>;
};

export type SearchOutput = {
  __typename?: 'SearchOutput';
  data?: Maybe<Scalars['Data']>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type SearchParams = {
  __typename?: 'SearchParams';
  attributesToCrop?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributesToHighlight?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributesToRetrieve?: Maybe<Array<Maybe<Scalars['String']>>>;
  cropLength?: Maybe<Scalars['Int']>;
  cropMarker?: Maybe<Scalars['String']>;
  facetsDistribution?: Maybe<Array<Maybe<Scalars['String']>>>;
  highlightPostTag?: Maybe<Scalars['String']>;
  highlightPreTag?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  matches?: Maybe<Scalars['Boolean']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SeedingBanksOutput = {
  __typename?: 'SeedingBanksOutput';
  data?: Maybe<Scalars['SeedingData']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SignedUrlOutput = {
  __typename?: 'SignedURLOutput';
  url: Scalars['String'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdNq_profile: Nq_Profile;
  deletedManyNq_profiles: DeleteManyResponse;
  deletedOneNq_profile: Nq_ProfileDeleteResponse;
  updatedManyNq_profiles: UpdateManyResponse;
  updatedOneNq_profile: Nq_Profile;
};


export type SubscriptionCreatedNq_ProfileArgs = {
  input?: InputMaybe<CreateNq_ProfileSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneNq_ProfileArgs = {
  input?: InputMaybe<DeleteOneNq_ProfileSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneNq_ProfileArgs = {
  input?: InputMaybe<UpdateOneNq_ProfileSubscriptionFilterInput>;
};

export type SynchronizeAirtableBaseInput = {
  office_id: Scalars['Int'];
};

export type SynchronizedNotificationResponse = {
  __typename?: 'SynchronizedNotificationResponse';
  data?: Maybe<Scalars['String']>;
};

export type TeamListV2Output = {
  __typename?: 'TeamListV2Output';
  data?: Maybe<Scalars['Data']>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type TeamOutput = {
  __typename?: 'TeamOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type TestBodyOutput = {
  __typename?: 'TestBodyOutput';
  data?: Maybe<Scalars['TestBodyData']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyNq_Review_Withdrawal_Request_DtosInput = {
  /** Filter used to find fields to update */
  filter: Nq_Review_Withdrawal_Request_DtoUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateNq_Review_Withdrawal_Request_Dto;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateNq_Review_Withdrawal_Request_Dto = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  issuer_id?: InputMaybe<Scalars['String']>;
  processor_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateOneNq_ProfileSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: Nq_ProfileSubscriptionFilter;
};

export type UpdateOneNq_Review_Withdrawal_Request_DtoInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateNq_Review_Withdrawal_Request_Dto;
};

export type UpdateTeamInput = {
  manager_id?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  office_id: Scalars['Int'];
  team_id: Scalars['Int'];
  user_ids?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateUserInput = {
  office_id: Scalars['Int'];
  profile_id: Scalars['String'];
  team_id?: InputMaybe<Scalars['Int']>;
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  message?: Maybe<Scalars['String']>;
};

export type UpdateUsingAirtableInput = {
  baseId?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
};

export type UpdateUsingAirtableOutput = {
  __typename?: 'UpdateUsingAirtableOutput';
  message?: Maybe<Scalars['String']>;
};

export type UpdateVerifiedStatusInput = {
  description: Scalars['String'];
  id: Scalars['String'];
  verified: Scalars['String'];
};

export type UpdateVerifiedStatusOutput = {
  __typename?: 'UpdateVerifiedStatusOutput';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  address_wallet?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  domicile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  envelope?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_update_password?: Maybe<Scalars['Boolean']>;
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['String']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  preffered_payment?: Maybe<PreferredPayment>;
  residence?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Int']>;
};

export type WithdrawalRequestDto = {
  __typename?: 'WithdrawalRequestDto';
  bonus_id: Scalars['String'];
  bonus_type: Scalars['String'];
  profile_id: Scalars['String'];
};

export type WithdrawalRequestDtoAggregateGroupBy = {
  __typename?: 'WithdrawalRequestDtoAggregateGroupBy';
  profile_id?: Maybe<Scalars['String']>;
};

export type WithdrawalRequestDtoCountAggregate = {
  __typename?: 'WithdrawalRequestDtoCountAggregate';
  profile_id?: Maybe<Scalars['Int']>;
};

export type WithdrawalRequestDtoEdge = {
  __typename?: 'WithdrawalRequestDtoEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the WithdrawalRequestDto */
  node: WithdrawalRequestDto;
};

export type WithdrawalRequestDtoMaxAggregate = {
  __typename?: 'WithdrawalRequestDtoMaxAggregate';
  profile_id?: Maybe<Scalars['String']>;
};

export type WithdrawalRequestDtoMinAggregate = {
  __typename?: 'WithdrawalRequestDtoMinAggregate';
  profile_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "actual_transferred_crypto" */
export type Actual_Transferred_Crypto = {
  __typename?: 'actual_transferred_crypto';
  amount: Scalars['float8'];
  /** An object relationship */
  bonus?: Maybe<Bonus>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  receiver?: Maybe<Profile>;
  receiver_id?: Maybe<Scalars['String']>;
  to_address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  value?: Maybe<Scalars['String']>;
  /** A computed field, executes function "get_value_as_double" */
  value_as_float?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Aggregate = {
  __typename?: 'actual_transferred_crypto_aggregate';
  aggregate?: Maybe<Actual_Transferred_Crypto_Aggregate_Fields>;
  nodes: Array<Actual_Transferred_Crypto>;
};

/** aggregate fields of "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Aggregate_Fields = {
  __typename?: 'actual_transferred_crypto_aggregate_fields';
  avg?: Maybe<Actual_Transferred_Crypto_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Actual_Transferred_Crypto_Max_Fields>;
  min?: Maybe<Actual_Transferred_Crypto_Min_Fields>;
  stddev?: Maybe<Actual_Transferred_Crypto_Stddev_Fields>;
  stddev_pop?: Maybe<Actual_Transferred_Crypto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Actual_Transferred_Crypto_Stddev_Samp_Fields>;
  sum?: Maybe<Actual_Transferred_Crypto_Sum_Fields>;
  var_pop?: Maybe<Actual_Transferred_Crypto_Var_Pop_Fields>;
  var_samp?: Maybe<Actual_Transferred_Crypto_Var_Samp_Fields>;
  variance?: Maybe<Actual_Transferred_Crypto_Variance_Fields>;
};


/** aggregate fields of "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Aggregate_Order_By = {
  avg?: InputMaybe<Actual_Transferred_Crypto_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actual_Transferred_Crypto_Max_Order_By>;
  min?: InputMaybe<Actual_Transferred_Crypto_Min_Order_By>;
  stddev?: InputMaybe<Actual_Transferred_Crypto_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Actual_Transferred_Crypto_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Actual_Transferred_Crypto_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Actual_Transferred_Crypto_Sum_Order_By>;
  var_pop?: InputMaybe<Actual_Transferred_Crypto_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Actual_Transferred_Crypto_Var_Samp_Order_By>;
  variance?: InputMaybe<Actual_Transferred_Crypto_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Arr_Rel_Insert_Input = {
  data: Array<Actual_Transferred_Crypto_Insert_Input>;
  on_conflict?: InputMaybe<Actual_Transferred_Crypto_On_Conflict>;
};

/** aggregate avg on columns */
export type Actual_Transferred_Crypto_Avg_Fields = {
  __typename?: 'actual_transferred_crypto_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "actual_transferred_crypto". All fields are combined with a logical 'AND'. */
export type Actual_Transferred_Crypto_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Actual_Transferred_Crypto_Bool_Exp>>>;
  _not?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Actual_Transferred_Crypto_Bool_Exp>>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  bonus?: InputMaybe<Bonus_Bool_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  from_address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  receiver?: InputMaybe<Profile_Bool_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  to_address?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "actual_transferred_crypto" */
export enum Actual_Transferred_Crypto_Constraint {
  /** unique or primary key constraint */
  ActualTransferredCryptoPkey = 'actual_transferred_crypto_pkey'
}

/** input type for incrementing integer column in table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  from_address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  receiver_id?: InputMaybe<Scalars['String']>;
  to_address?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Actual_Transferred_Crypto_Max_Fields = {
  __typename?: 'actual_transferred_crypto_max_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['String']>;
  to_address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  from_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  to_address?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Actual_Transferred_Crypto_Min_Fields = {
  __typename?: 'actual_transferred_crypto_min_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  from_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_id?: Maybe<Scalars['String']>;
  to_address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  from_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  to_address?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Mutation_Response = {
  __typename?: 'actual_transferred_crypto_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Actual_Transferred_Crypto>;
};

/** input type for inserting object relation for remote table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Obj_Rel_Insert_Input = {
  data: Actual_Transferred_Crypto_Insert_Input;
  on_conflict?: InputMaybe<Actual_Transferred_Crypto_On_Conflict>;
};

/** on conflict condition type for table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_On_Conflict = {
  constraint: Actual_Transferred_Crypto_Constraint;
  update_columns: Array<Actual_Transferred_Crypto_Update_Column>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};

/** ordering options when selecting data from "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Bonus_Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  from_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Profile_Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  to_address?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "actual_transferred_crypto" */
export enum Actual_Transferred_Crypto_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  from_address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver_id?: InputMaybe<Scalars['String']>;
  to_address?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Actual_Transferred_Crypto_Stddev_Fields = {
  __typename?: 'actual_transferred_crypto_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Actual_Transferred_Crypto_Stddev_Pop_Fields = {
  __typename?: 'actual_transferred_crypto_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Actual_Transferred_Crypto_Stddev_Samp_Fields = {
  __typename?: 'actual_transferred_crypto_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Actual_Transferred_Crypto_Sum_Fields = {
  __typename?: 'actual_transferred_crypto_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "actual_transferred_crypto" */
export enum Actual_Transferred_Crypto_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Actual_Transferred_Crypto_Var_Pop_Fields = {
  __typename?: 'actual_transferred_crypto_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Actual_Transferred_Crypto_Var_Samp_Fields = {
  __typename?: 'actual_transferred_crypto_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Actual_Transferred_Crypto_Variance_Fields = {
  __typename?: 'actual_transferred_crypto_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "actual_transferred_crypto" */
export type Actual_Transferred_Crypto_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

export type AddPasswordOutput = {
  __typename?: 'addPasswordOutput';
  text?: Maybe<Scalars['String']>;
};

export type AddReportOutput = {
  __typename?: 'addReportOutput';
  message: Scalars['String'];
  status: Scalars['Int'];
};

export type AddSampleOfficeOutput = {
  __typename?: 'addSampleOfficeOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type AddUserOutput = {
  __typename?: 'addUserOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type AdminUpdateUserOutput = {
  __typename?: 'adminUpdateUserOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** columns and relationships of "announcement" */
export type Announcement = {
  __typename?: 'announcement';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  office_announcements: Array<Office_Announcement>;
  /** An aggregated array relationship */
  office_announcements_aggregate: Office_Announcement_Aggregate;
  /** An object relationship */
  profile?: Maybe<Profile>;
  take_effect_from?: Maybe<Scalars['timestamptz']>;
  take_effect_to?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "announcement" */
export type AnnouncementOffice_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** columns and relationships of "announcement" */
export type AnnouncementOffice_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};

/** aggregated selection of "announcement" */
export type Announcement_Aggregate = {
  __typename?: 'announcement_aggregate';
  aggregate?: Maybe<Announcement_Aggregate_Fields>;
  nodes: Array<Announcement>;
};

/** aggregate fields of "announcement" */
export type Announcement_Aggregate_Fields = {
  __typename?: 'announcement_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Announcement_Max_Fields>;
  min?: Maybe<Announcement_Min_Fields>;
};


/** aggregate fields of "announcement" */
export type Announcement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Announcement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "announcement" */
export type Announcement_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Announcement_Max_Order_By>;
  min?: InputMaybe<Announcement_Min_Order_By>;
};

/** input type for inserting array relation for remote table "announcement" */
export type Announcement_Arr_Rel_Insert_Input = {
  data: Array<Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Announcement_On_Conflict>;
};

/** Boolean expression to filter rows from the table "announcement". All fields are combined with a logical 'AND'. */
export type Announcement_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Announcement_Bool_Exp>>>;
  _not?: InputMaybe<Announcement_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Announcement_Bool_Exp>>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  office_announcements?: InputMaybe<Office_Announcement_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  take_effect_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  take_effect_to?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "announcement" */
export enum Announcement_Constraint {
  /** unique or primary key constraint */
  AnnouncementPkey = 'announcement_pkey'
}

/** input type for inserting data into table "announcement" */
export type Announcement_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  office_announcements?: InputMaybe<Office_Announcement_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  take_effect_from?: InputMaybe<Scalars['timestamptz']>;
  take_effect_to?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Announcement_Max_Fields = {
  __typename?: 'announcement_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  take_effect_from?: Maybe<Scalars['timestamptz']>;
  take_effect_to?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "announcement" */
export type Announcement_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  take_effect_from?: InputMaybe<Order_By>;
  take_effect_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Announcement_Min_Fields = {
  __typename?: 'announcement_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  take_effect_from?: Maybe<Scalars['timestamptz']>;
  take_effect_to?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "announcement" */
export type Announcement_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  take_effect_from?: InputMaybe<Order_By>;
  take_effect_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "announcement" */
export type Announcement_Mutation_Response = {
  __typename?: 'announcement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Announcement>;
};

/** input type for inserting object relation for remote table "announcement" */
export type Announcement_Obj_Rel_Insert_Input = {
  data: Announcement_Insert_Input;
  on_conflict?: InputMaybe<Announcement_On_Conflict>;
};

/** on conflict condition type for table "announcement" */
export type Announcement_On_Conflict = {
  constraint: Announcement_Constraint;
  update_columns: Array<Announcement_Update_Column>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};

/** ordering options when selecting data from "announcement" */
export type Announcement_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  office_announcements_aggregate?: InputMaybe<Office_Announcement_Aggregate_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  take_effect_from?: InputMaybe<Order_By>;
  take_effect_to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "announcement" */
export type Announcement_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "announcement" */
export enum Announcement_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TakeEffectFrom = 'take_effect_from',
  /** column name */
  TakeEffectTo = 'take_effect_to',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "announcement" */
export type Announcement_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  take_effect_from?: InputMaybe<Scalars['timestamptz']>;
  take_effect_to?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "announcement" */
export enum Announcement_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TakeEffectFrom = 'take_effect_from',
  /** column name */
  TakeEffectTo = 'take_effect_to',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ApproverGetListBonus2Output = {
  __typename?: 'approverGetListBonus2Output';
  data?: Maybe<Scalars['data2']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ApproverGetListBonusOutput = {
  __typename?: 'approverGetListBonusOutput';
  data?: Maybe<Scalars['RenderedApproverBonusObject']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ApproverGetListSalaryOutput = {
  __typename?: 'approverGetListSalaryOutput';
  data?: Maybe<Scalars['data']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Approver_Get_Bonuses_V2_Args = {
  max_amount?: InputMaybe<Scalars['Int']>;
  min_amount?: InputMaybe<Scalars['Int']>;
  status_args?: InputMaybe<Scalars['_int4']>;
  type?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "approver_office" */
export type Approver_Office = {
  __typename?: 'approver_office';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  office?: Maybe<Office>;
  office_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  profile: Profile;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "approver_office" */
export type Approver_Office_Aggregate = {
  __typename?: 'approver_office_aggregate';
  aggregate?: Maybe<Approver_Office_Aggregate_Fields>;
  nodes: Array<Approver_Office>;
};

/** aggregate fields of "approver_office" */
export type Approver_Office_Aggregate_Fields = {
  __typename?: 'approver_office_aggregate_fields';
  avg?: Maybe<Approver_Office_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Approver_Office_Max_Fields>;
  min?: Maybe<Approver_Office_Min_Fields>;
  stddev?: Maybe<Approver_Office_Stddev_Fields>;
  stddev_pop?: Maybe<Approver_Office_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Approver_Office_Stddev_Samp_Fields>;
  sum?: Maybe<Approver_Office_Sum_Fields>;
  var_pop?: Maybe<Approver_Office_Var_Pop_Fields>;
  var_samp?: Maybe<Approver_Office_Var_Samp_Fields>;
  variance?: Maybe<Approver_Office_Variance_Fields>;
};


/** aggregate fields of "approver_office" */
export type Approver_Office_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Approver_Office_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "approver_office" */
export type Approver_Office_Aggregate_Order_By = {
  avg?: InputMaybe<Approver_Office_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Approver_Office_Max_Order_By>;
  min?: InputMaybe<Approver_Office_Min_Order_By>;
  stddev?: InputMaybe<Approver_Office_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Approver_Office_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Approver_Office_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Approver_Office_Sum_Order_By>;
  var_pop?: InputMaybe<Approver_Office_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Approver_Office_Var_Samp_Order_By>;
  variance?: InputMaybe<Approver_Office_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "approver_office" */
export type Approver_Office_Arr_Rel_Insert_Input = {
  data: Array<Approver_Office_Insert_Input>;
  on_conflict?: InputMaybe<Approver_Office_On_Conflict>;
};

/** aggregate avg on columns */
export type Approver_Office_Avg_Fields = {
  __typename?: 'approver_office_avg_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "approver_office" */
export type Approver_Office_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "approver_office". All fields are combined with a logical 'AND'. */
export type Approver_Office_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Approver_Office_Bool_Exp>>>;
  _not?: InputMaybe<Approver_Office_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Approver_Office_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  office?: InputMaybe<Office_Bool_Exp>;
  office_id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "approver_office" */
export enum Approver_Office_Constraint {
  /** unique or primary key constraint */
  ApproverOfficePkey = 'approver_office_pkey'
}

/** input type for incrementing integer column in table "approver_office" */
export type Approver_Office_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  office_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "approver_office" */
export type Approver_Office_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  office_id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Approver_Office_Max_Fields = {
  __typename?: 'approver_office_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "approver_office" */
export type Approver_Office_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Approver_Office_Min_Fields = {
  __typename?: 'approver_office_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "approver_office" */
export type Approver_Office_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "approver_office" */
export type Approver_Office_Mutation_Response = {
  __typename?: 'approver_office_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Approver_Office>;
};

/** input type for inserting object relation for remote table "approver_office" */
export type Approver_Office_Obj_Rel_Insert_Input = {
  data: Approver_Office_Insert_Input;
  on_conflict?: InputMaybe<Approver_Office_On_Conflict>;
};

/** on conflict condition type for table "approver_office" */
export type Approver_Office_On_Conflict = {
  constraint: Approver_Office_Constraint;
  update_columns: Array<Approver_Office_Update_Column>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};

/** ordering options when selecting data from "approver_office" */
export type Approver_Office_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office?: InputMaybe<Office_Order_By>;
  office_id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "approver_office" */
export type Approver_Office_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "approver_office" */
export enum Approver_Office_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "approver_office" */
export type Approver_Office_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Approver_Office_Stddev_Fields = {
  __typename?: 'approver_office_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "approver_office" */
export type Approver_Office_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Approver_Office_Stddev_Pop_Fields = {
  __typename?: 'approver_office_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "approver_office" */
export type Approver_Office_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Approver_Office_Stddev_Samp_Fields = {
  __typename?: 'approver_office_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "approver_office" */
export type Approver_Office_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Approver_Office_Sum_Fields = {
  __typename?: 'approver_office_sum_fields';
  id?: Maybe<Scalars['Int']>;
  office_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "approver_office" */
export type Approver_Office_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** update columns of table "approver_office" */
export enum Approver_Office_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Approver_Office_Var_Pop_Fields = {
  __typename?: 'approver_office_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "approver_office" */
export type Approver_Office_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Approver_Office_Var_Samp_Fields = {
  __typename?: 'approver_office_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "approver_office" */
export type Approver_Office_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Approver_Office_Variance_Fields = {
  __typename?: 'approver_office_variance_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "approver_office" */
export type Approver_Office_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "bank" */
export type Bank = {
  __typename?: 'bank';
  /** An array relationship */
  bank_accounts: Array<Bank_Account>;
  /** An aggregated array relationship */
  bank_accounts_aggregate: Bank_Account_Aggregate;
  code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "bank" */
export type BankBank_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};


/** columns and relationships of "bank" */
export type BankBank_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};

export type BankAccount = {
  account_holder: Scalars['String'];
  account_number: Scalars['String'];
  bank_id: Scalars['String'];
};

/** columns and relationships of "bank_account" */
export type Bank_Account = {
  __typename?: 'bank_account';
  account_holder_name: Scalars['String'];
  /** An object relationship */
  bank: Bank;
  bank_account_no?: Maybe<Scalars['String']>;
  /** An array relationship */
  bank_errors: Array<Bank_Error>;
  /** An aggregated array relationship */
  bank_errors_aggregate: Bank_Error_Aggregate;
  bank_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  profile: Profile;
  profile_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  verified: Scalars['Boolean'];
};


/** columns and relationships of "bank_account" */
export type Bank_AccountBank_ErrorsArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};


/** columns and relationships of "bank_account" */
export type Bank_AccountBank_Errors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};

/** aggregated selection of "bank_account" */
export type Bank_Account_Aggregate = {
  __typename?: 'bank_account_aggregate';
  aggregate?: Maybe<Bank_Account_Aggregate_Fields>;
  nodes: Array<Bank_Account>;
};

/** aggregate fields of "bank_account" */
export type Bank_Account_Aggregate_Fields = {
  __typename?: 'bank_account_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bank_Account_Max_Fields>;
  min?: Maybe<Bank_Account_Min_Fields>;
};


/** aggregate fields of "bank_account" */
export type Bank_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bank_account" */
export type Bank_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bank_Account_Max_Order_By>;
  min?: InputMaybe<Bank_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bank_account" */
export type Bank_Account_Arr_Rel_Insert_Input = {
  data: Array<Bank_Account_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bank_account". All fields are combined with a logical 'AND'. */
export type Bank_Account_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bank_Account_Bool_Exp>>>;
  _not?: InputMaybe<Bank_Account_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bank_Account_Bool_Exp>>>;
  account_holder_name?: InputMaybe<String_Comparison_Exp>;
  bank?: InputMaybe<Bank_Bool_Exp>;
  bank_account_no?: InputMaybe<String_Comparison_Exp>;
  bank_errors?: InputMaybe<Bank_Error_Bool_Exp>;
  bank_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "bank_account" */
export enum Bank_Account_Constraint {
  /** unique or primary key constraint */
  BankAccountPkey = 'bank_account_pkey',
  /** unique or primary key constraint */
  BankAccountProfileIdKey = 'bank_account_profile_id_key'
}

/** input type for inserting data into table "bank_account" */
export type Bank_Account_Insert_Input = {
  account_holder_name?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Bank_Obj_Rel_Insert_Input>;
  bank_account_no?: InputMaybe<Scalars['String']>;
  bank_errors?: InputMaybe<Bank_Error_Arr_Rel_Insert_Input>;
  bank_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Bank_Account_Max_Fields = {
  __typename?: 'bank_account_max_fields';
  account_holder_name?: Maybe<Scalars['String']>;
  bank_account_no?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bank_account" */
export type Bank_Account_Max_Order_By = {
  account_holder_name?: InputMaybe<Order_By>;
  bank_account_no?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bank_Account_Min_Fields = {
  __typename?: 'bank_account_min_fields';
  account_holder_name?: Maybe<Scalars['String']>;
  bank_account_no?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bank_account" */
export type Bank_Account_Min_Order_By = {
  account_holder_name?: InputMaybe<Order_By>;
  bank_account_no?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bank_account" */
export type Bank_Account_Mutation_Response = {
  __typename?: 'bank_account_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bank_Account>;
};

/** input type for inserting object relation for remote table "bank_account" */
export type Bank_Account_Obj_Rel_Insert_Input = {
  data: Bank_Account_Insert_Input;
  on_conflict?: InputMaybe<Bank_Account_On_Conflict>;
};

/** on conflict condition type for table "bank_account" */
export type Bank_Account_On_Conflict = {
  constraint: Bank_Account_Constraint;
  update_columns: Array<Bank_Account_Update_Column>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};

/** ordering options when selecting data from "bank_account" */
export type Bank_Account_Order_By = {
  account_holder_name?: InputMaybe<Order_By>;
  bank?: InputMaybe<Bank_Order_By>;
  bank_account_no?: InputMaybe<Order_By>;
  bank_errors_aggregate?: InputMaybe<Bank_Error_Aggregate_Order_By>;
  bank_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bank_account" */
export type Bank_Account_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bank_account" */
export enum Bank_Account_Select_Column {
  /** column name */
  AccountHolderName = 'account_holder_name',
  /** column name */
  BankAccountNo = 'bank_account_no',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "bank_account" */
export type Bank_Account_Set_Input = {
  account_holder_name?: InputMaybe<Scalars['String']>;
  bank_account_no?: InputMaybe<Scalars['String']>;
  bank_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "bank_account" */
export enum Bank_Account_Update_Column {
  /** column name */
  AccountHolderName = 'account_holder_name',
  /** column name */
  BankAccountNo = 'bank_account_no',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Verified = 'verified'
}

/** aggregated selection of "bank" */
export type Bank_Aggregate = {
  __typename?: 'bank_aggregate';
  aggregate?: Maybe<Bank_Aggregate_Fields>;
  nodes: Array<Bank>;
};

/** aggregate fields of "bank" */
export type Bank_Aggregate_Fields = {
  __typename?: 'bank_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bank_Max_Fields>;
  min?: Maybe<Bank_Min_Fields>;
};


/** aggregate fields of "bank" */
export type Bank_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bank" */
export type Bank_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bank_Max_Order_By>;
  min?: InputMaybe<Bank_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bank" */
export type Bank_Arr_Rel_Insert_Input = {
  data: Array<Bank_Insert_Input>;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bank". All fields are combined with a logical 'AND'. */
export type Bank_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bank_Bool_Exp>>>;
  _not?: InputMaybe<Bank_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bank_Bool_Exp>>>;
  bank_accounts?: InputMaybe<Bank_Account_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bank" */
export enum Bank_Constraint {
  /** unique or primary key constraint */
  BankCodeKey = 'bank_code_key',
  /** unique or primary key constraint */
  BankPkey = 'bank_pkey'
}

/** columns and relationships of "bank_error" */
export type Bank_Error = {
  __typename?: 'bank_error';
  /** An object relationship */
  bank_account: Bank_Account;
  bank_account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "bank_error" */
export type Bank_Error_Aggregate = {
  __typename?: 'bank_error_aggregate';
  aggregate?: Maybe<Bank_Error_Aggregate_Fields>;
  nodes: Array<Bank_Error>;
};

/** aggregate fields of "bank_error" */
export type Bank_Error_Aggregate_Fields = {
  __typename?: 'bank_error_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bank_Error_Max_Fields>;
  min?: Maybe<Bank_Error_Min_Fields>;
};


/** aggregate fields of "bank_error" */
export type Bank_Error_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Error_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bank_error" */
export type Bank_Error_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bank_Error_Max_Order_By>;
  min?: InputMaybe<Bank_Error_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bank_error" */
export type Bank_Error_Arr_Rel_Insert_Input = {
  data: Array<Bank_Error_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Error_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bank_error". All fields are combined with a logical 'AND'. */
export type Bank_Error_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bank_Error_Bool_Exp>>>;
  _not?: InputMaybe<Bank_Error_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bank_Error_Bool_Exp>>>;
  bank_account?: InputMaybe<Bank_Account_Bool_Exp>;
  bank_account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bank_error" */
export enum Bank_Error_Constraint {
  /** unique or primary key constraint */
  BankErrorPkey = 'bank_error_pkey'
}

/** input type for inserting data into table "bank_error" */
export type Bank_Error_Insert_Input = {
  bank_account?: InputMaybe<Bank_Account_Obj_Rel_Insert_Input>;
  bank_account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bank_Error_Max_Fields = {
  __typename?: 'bank_error_max_fields';
  bank_account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bank_error" */
export type Bank_Error_Max_Order_By = {
  bank_account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bank_Error_Min_Fields = {
  __typename?: 'bank_error_min_fields';
  bank_account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bank_error" */
export type Bank_Error_Min_Order_By = {
  bank_account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bank_error" */
export type Bank_Error_Mutation_Response = {
  __typename?: 'bank_error_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bank_Error>;
};

/** input type for inserting object relation for remote table "bank_error" */
export type Bank_Error_Obj_Rel_Insert_Input = {
  data: Bank_Error_Insert_Input;
  on_conflict?: InputMaybe<Bank_Error_On_Conflict>;
};

/** on conflict condition type for table "bank_error" */
export type Bank_Error_On_Conflict = {
  constraint: Bank_Error_Constraint;
  update_columns: Array<Bank_Error_Update_Column>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};

/** ordering options when selecting data from "bank_error" */
export type Bank_Error_Order_By = {
  bank_account?: InputMaybe<Bank_Account_Order_By>;
  bank_account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bank_error" */
export type Bank_Error_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bank_error" */
export enum Bank_Error_Select_Column {
  /** column name */
  BankAccountId = 'bank_account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bank_error" */
export type Bank_Error_Set_Input = {
  bank_account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "bank_error" */
export enum Bank_Error_Update_Column {
  /** column name */
  BankAccountId = 'bank_account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "bank" */
export type Bank_Insert_Input = {
  bank_accounts?: InputMaybe<Bank_Account_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bank_Max_Fields = {
  __typename?: 'bank_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bank" */
export type Bank_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bank_Min_Fields = {
  __typename?: 'bank_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bank" */
export type Bank_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bank" */
export type Bank_Mutation_Response = {
  __typename?: 'bank_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bank>;
};

/** input type for inserting object relation for remote table "bank" */
export type Bank_Obj_Rel_Insert_Input = {
  data: Bank_Insert_Input;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};

/** on conflict condition type for table "bank" */
export type Bank_On_Conflict = {
  constraint: Bank_Constraint;
  update_columns: Array<Bank_Update_Column>;
  where?: InputMaybe<Bank_Bool_Exp>;
};

/** ordering options when selecting data from "bank" */
export type Bank_Order_By = {
  bank_accounts_aggregate?: InputMaybe<Bank_Account_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bank" */
export type Bank_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bank" */
export enum Bank_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bank" */
export type Bank_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "bank" */
export enum Bank_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type BannedUserOutput = {
  __typename?: 'bannedUserOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "blacklist_conversation_message" */
export type Blacklist_Conversation_Message = {
  __typename?: 'blacklist_conversation_message';
  blacklist_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  bonus_blacklist?: Maybe<Bonus_Blacklist>;
  created_at: Scalars['timestamptz'];
  created_by_id: Scalars['String'];
  id: Scalars['Int'];
  message: Scalars['String'];
  /** A computed field, executes function "get_message_owner" */
  owner?: Maybe<Array<Profile>>;
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  replied_message?: Maybe<Blacklist_Conversation_Message>;
  replied_message_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  reply_messages: Array<Blacklist_Conversation_Message>;
  /** An aggregated array relationship */
  reply_messages_aggregate: Blacklist_Conversation_Message_Aggregate;
  thread_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  thread_owner?: Maybe<Profile>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "blacklist_conversation_message" */
export type Blacklist_Conversation_MessageOwnerArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "blacklist_conversation_message" */
export type Blacklist_Conversation_MessageReply_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "blacklist_conversation_message" */
export type Blacklist_Conversation_MessageReply_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};

/** aggregated selection of "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Aggregate = {
  __typename?: 'blacklist_conversation_message_aggregate';
  aggregate?: Maybe<Blacklist_Conversation_Message_Aggregate_Fields>;
  nodes: Array<Blacklist_Conversation_Message>;
};

/** aggregate fields of "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Aggregate_Fields = {
  __typename?: 'blacklist_conversation_message_aggregate_fields';
  avg?: Maybe<Blacklist_Conversation_Message_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blacklist_Conversation_Message_Max_Fields>;
  min?: Maybe<Blacklist_Conversation_Message_Min_Fields>;
  stddev?: Maybe<Blacklist_Conversation_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Blacklist_Conversation_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blacklist_Conversation_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Blacklist_Conversation_Message_Sum_Fields>;
  var_pop?: Maybe<Blacklist_Conversation_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Blacklist_Conversation_Message_Var_Samp_Fields>;
  variance?: Maybe<Blacklist_Conversation_Message_Variance_Fields>;
};


/** aggregate fields of "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Aggregate_Order_By = {
  avg?: InputMaybe<Blacklist_Conversation_Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blacklist_Conversation_Message_Max_Order_By>;
  min?: InputMaybe<Blacklist_Conversation_Message_Min_Order_By>;
  stddev?: InputMaybe<Blacklist_Conversation_Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blacklist_Conversation_Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blacklist_Conversation_Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blacklist_Conversation_Message_Sum_Order_By>;
  var_pop?: InputMaybe<Blacklist_Conversation_Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blacklist_Conversation_Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Blacklist_Conversation_Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Arr_Rel_Insert_Input = {
  data: Array<Blacklist_Conversation_Message_Insert_Input>;
  on_conflict?: InputMaybe<Blacklist_Conversation_Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Blacklist_Conversation_Message_Avg_Fields = {
  __typename?: 'blacklist_conversation_message_avg_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blacklist_conversation_message". All fields are combined with a logical 'AND'. */
export type Blacklist_Conversation_Message_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Blacklist_Conversation_Message_Bool_Exp>>>;
  _not?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Blacklist_Conversation_Message_Bool_Exp>>>;
  blacklist_id?: InputMaybe<Uuid_Comparison_Exp>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  replied_message?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  replied_message_id?: InputMaybe<Int_Comparison_Exp>;
  reply_messages?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  thread_id?: InputMaybe<String_Comparison_Exp>;
  thread_owner?: InputMaybe<Profile_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "blacklist_conversation_message" */
export enum Blacklist_Conversation_Message_Constraint {
  /** unique or primary key constraint */
  BlacklistConversationPkey = 'blacklist_conversation_pkey'
}

/** input type for incrementing integer column in table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  replied_message_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Insert_Input = {
  blacklist_id?: InputMaybe<Scalars['uuid']>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  replied_message?: InputMaybe<Blacklist_Conversation_Message_Obj_Rel_Insert_Input>;
  replied_message_id?: InputMaybe<Scalars['Int']>;
  reply_messages?: InputMaybe<Blacklist_Conversation_Message_Arr_Rel_Insert_Input>;
  thread_id?: InputMaybe<Scalars['String']>;
  thread_owner?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Blacklist_Conversation_Message_Max_Fields = {
  __typename?: 'blacklist_conversation_message_max_fields';
  blacklist_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  replied_message_id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Max_Order_By = {
  blacklist_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blacklist_Conversation_Message_Min_Fields = {
  __typename?: 'blacklist_conversation_message_min_fields';
  blacklist_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  replied_message_id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Min_Order_By = {
  blacklist_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Mutation_Response = {
  __typename?: 'blacklist_conversation_message_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blacklist_Conversation_Message>;
};

/** input type for inserting object relation for remote table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Obj_Rel_Insert_Input = {
  data: Blacklist_Conversation_Message_Insert_Input;
  on_conflict?: InputMaybe<Blacklist_Conversation_Message_On_Conflict>;
};

/** on conflict condition type for table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_On_Conflict = {
  constraint: Blacklist_Conversation_Message_Constraint;
  update_columns: Array<Blacklist_Conversation_Message_Update_Column>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};

/** ordering options when selecting data from "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Order_By = {
  blacklist_id?: InputMaybe<Order_By>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  replied_message?: InputMaybe<Blacklist_Conversation_Message_Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
  reply_messages_aggregate?: InputMaybe<Blacklist_Conversation_Message_Aggregate_Order_By>;
  thread_id?: InputMaybe<Order_By>;
  thread_owner?: InputMaybe<Profile_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "blacklist_conversation_message" */
export enum Blacklist_Conversation_Message_Select_Column {
  /** column name */
  BlacklistId = 'blacklist_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  RepliedMessageId = 'replied_message_id',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Set_Input = {
  blacklist_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  replied_message_id?: InputMaybe<Scalars['Int']>;
  thread_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Blacklist_Conversation_Message_Stddev_Fields = {
  __typename?: 'blacklist_conversation_message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blacklist_Conversation_Message_Stddev_Pop_Fields = {
  __typename?: 'blacklist_conversation_message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blacklist_Conversation_Message_Stddev_Samp_Fields = {
  __typename?: 'blacklist_conversation_message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Blacklist_Conversation_Message_Sum_Fields = {
  __typename?: 'blacklist_conversation_message_sum_fields';
  id?: Maybe<Scalars['Int']>;
  replied_message_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** update columns of table "blacklist_conversation_message" */
export enum Blacklist_Conversation_Message_Update_Column {
  /** column name */
  BlacklistId = 'blacklist_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  RepliedMessageId = 'replied_message_id',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Blacklist_Conversation_Message_Var_Pop_Fields = {
  __typename?: 'blacklist_conversation_message_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blacklist_Conversation_Message_Var_Samp_Fields = {
  __typename?: 'blacklist_conversation_message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blacklist_Conversation_Message_Variance_Fields = {
  __typename?: 'blacklist_conversation_message_variance_fields';
  id?: Maybe<Scalars['Float']>;
  replied_message_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blacklist_conversation_message" */
export type Blacklist_Conversation_Message_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  replied_message_id?: InputMaybe<Order_By>;
};

/**
 * a collection of history that tracking ban data, if user is ban/unban, everything will be track here
 *
 *
 * columns and relationships of "blacklist_history"
 *
 */
export type Blacklist_History = {
  __typename?: 'blacklist_history';
  banned: Scalars['Boolean'];
  blacklist_id: Scalars['uuid'];
  /** An object relationship */
  bonus_blacklist: Bonus_Blacklist;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  reason?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "blacklist_history" */
export type Blacklist_History_Aggregate = {
  __typename?: 'blacklist_history_aggregate';
  aggregate?: Maybe<Blacklist_History_Aggregate_Fields>;
  nodes: Array<Blacklist_History>;
};

/** aggregate fields of "blacklist_history" */
export type Blacklist_History_Aggregate_Fields = {
  __typename?: 'blacklist_history_aggregate_fields';
  avg?: Maybe<Blacklist_History_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blacklist_History_Max_Fields>;
  min?: Maybe<Blacklist_History_Min_Fields>;
  stddev?: Maybe<Blacklist_History_Stddev_Fields>;
  stddev_pop?: Maybe<Blacklist_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blacklist_History_Stddev_Samp_Fields>;
  sum?: Maybe<Blacklist_History_Sum_Fields>;
  var_pop?: Maybe<Blacklist_History_Var_Pop_Fields>;
  var_samp?: Maybe<Blacklist_History_Var_Samp_Fields>;
  variance?: Maybe<Blacklist_History_Variance_Fields>;
};


/** aggregate fields of "blacklist_history" */
export type Blacklist_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blacklist_history" */
export type Blacklist_History_Aggregate_Order_By = {
  avg?: InputMaybe<Blacklist_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blacklist_History_Max_Order_By>;
  min?: InputMaybe<Blacklist_History_Min_Order_By>;
  stddev?: InputMaybe<Blacklist_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blacklist_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blacklist_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blacklist_History_Sum_Order_By>;
  var_pop?: InputMaybe<Blacklist_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blacklist_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Blacklist_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blacklist_history" */
export type Blacklist_History_Arr_Rel_Insert_Input = {
  data: Array<Blacklist_History_Insert_Input>;
  on_conflict?: InputMaybe<Blacklist_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Blacklist_History_Avg_Fields = {
  __typename?: 'blacklist_history_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blacklist_history" */
export type Blacklist_History_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blacklist_history". All fields are combined with a logical 'AND'. */
export type Blacklist_History_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Blacklist_History_Bool_Exp>>>;
  _not?: InputMaybe<Blacklist_History_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Blacklist_History_Bool_Exp>>>;
  banned?: InputMaybe<Boolean_Comparison_Exp>;
  blacklist_id?: InputMaybe<Uuid_Comparison_Exp>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "blacklist_history" */
export enum Blacklist_History_Constraint {
  /** unique or primary key constraint */
  BlacklistHistoryPkey = 'blacklist_history_pkey'
}

/** input type for incrementing integer column in table "blacklist_history" */
export type Blacklist_History_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "blacklist_history" */
export type Blacklist_History_Insert_Input = {
  banned?: InputMaybe<Scalars['Boolean']>;
  blacklist_id?: InputMaybe<Scalars['uuid']>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  reason?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Blacklist_History_Max_Fields = {
  __typename?: 'blacklist_history_max_fields';
  blacklist_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "blacklist_history" */
export type Blacklist_History_Max_Order_By = {
  blacklist_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blacklist_History_Min_Fields = {
  __typename?: 'blacklist_history_min_fields';
  blacklist_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "blacklist_history" */
export type Blacklist_History_Min_Order_By = {
  blacklist_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blacklist_history" */
export type Blacklist_History_Mutation_Response = {
  __typename?: 'blacklist_history_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blacklist_History>;
};

/** input type for inserting object relation for remote table "blacklist_history" */
export type Blacklist_History_Obj_Rel_Insert_Input = {
  data: Blacklist_History_Insert_Input;
  on_conflict?: InputMaybe<Blacklist_History_On_Conflict>;
};

/** on conflict condition type for table "blacklist_history" */
export type Blacklist_History_On_Conflict = {
  constraint: Blacklist_History_Constraint;
  update_columns: Array<Blacklist_History_Update_Column>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};

/** ordering options when selecting data from "blacklist_history" */
export type Blacklist_History_Order_By = {
  banned?: InputMaybe<Order_By>;
  blacklist_id?: InputMaybe<Order_By>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "blacklist_history" */
export type Blacklist_History_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "blacklist_history" */
export enum Blacklist_History_Select_Column {
  /** column name */
  Banned = 'banned',
  /** column name */
  BlacklistId = 'blacklist_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reason = 'reason',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "blacklist_history" */
export type Blacklist_History_Set_Input = {
  banned?: InputMaybe<Scalars['Boolean']>;
  blacklist_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  reason?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Blacklist_History_Stddev_Fields = {
  __typename?: 'blacklist_history_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blacklist_history" */
export type Blacklist_History_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blacklist_History_Stddev_Pop_Fields = {
  __typename?: 'blacklist_history_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blacklist_history" */
export type Blacklist_History_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blacklist_History_Stddev_Samp_Fields = {
  __typename?: 'blacklist_history_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blacklist_history" */
export type Blacklist_History_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Blacklist_History_Sum_Fields = {
  __typename?: 'blacklist_history_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "blacklist_history" */
export type Blacklist_History_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "blacklist_history" */
export enum Blacklist_History_Update_Column {
  /** column name */
  Banned = 'banned',
  /** column name */
  BlacklistId = 'blacklist_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Reason = 'reason',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Blacklist_History_Var_Pop_Fields = {
  __typename?: 'blacklist_history_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blacklist_history" */
export type Blacklist_History_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blacklist_History_Var_Samp_Fields = {
  __typename?: 'blacklist_history_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blacklist_history" */
export type Blacklist_History_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blacklist_History_Variance_Fields = {
  __typename?: 'blacklist_history_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blacklist_history" */
export type Blacklist_History_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "bonus" */
export type Bonus = {
  __typename?: 'bonus';
  /** An array relationship */
  actual_transferred_cryptos: Array<Actual_Transferred_Crypto>;
  /** An aggregated array relationship */
  actual_transferred_cryptos_aggregate: Actual_Transferred_Crypto_Aggregate;
  /** A computed field, executes function "get_applying_rule_row" */
  applying_rule?: Maybe<Array<Office_Rule>>;
  /** A computed field, executes function "get_applying_rule_for_bonus_2_row" */
  applying_rule_bonus_2?: Maybe<Array<Office_Rule>>;
  /** A computed field, executes function "get_applying_rule_for_salary_row" */
  applying_rule_salary?: Maybe<Array<Office_Rule>>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "bonus_2_date_available" */
  bonus_2_date_available?: Maybe<Scalars['Boolean']>;
  bonus_2_transfer_option?: Maybe<Scalars['Int']>;
  /** A computed field, executes function "bonus_date_available" */
  bonus_date_available?: Maybe<Scalars['Boolean']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  bonus_transfer_option?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_at_bonus?: Maybe<Scalars['timestamptz']>;
  created_at_bonus_2?: Maybe<Scalars['timestamptz']>;
  created_at_salary?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  crypto_transactions: Array<Crypto_Transaction>;
  /** An aggregated array relationship */
  crypto_transactions_aggregate: Crypto_Transaction_Aggregate;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_bonus_2?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  ftd: Scalars['Int'];
  id: Scalars['Int'];
  id_airtable?: Maybe<Scalars['String']>;
  /** A computed field, executes function "is_banned" */
  is_banned?: Maybe<Scalars['Boolean']>;
  linkPDF?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  numCustomer: Scalars['Int'];
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An object relationship */
  profileByUserId?: Maybe<Profile>;
  /** An array relationship */
  reports: Array<Report>;
  /** An aggregated array relationship */
  reports_aggregate: Report_Aggregate;
  salary?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "calculate_salary_ppd" */
  salary_PPD?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "salary_date_available" */
  salary_date_available?: Maybe<Scalars['Boolean']>;
  salary_transfer_option?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  status_2: Scalars['Int'];
  status_salary?: Maybe<Scalars['Int']>;
  total: Scalars['bigint'];
  total_2?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "calculate_bonus_2_ppd" */
  total_2_PPD?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "calculate_bonus_ppd" */
  total_PPD?: Maybe<Scalars['float8']>;
  total_bonus_salary?: Maybe<Scalars['bigint']>;
  transfer_data?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "bonus" */
export type BonusActual_Transferred_CryptosArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusActual_Transferred_Cryptos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusApplying_RuleArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusApplying_Rule_Bonus_2Args = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusApplying_Rule_SalaryArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusCrypto_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusCrypto_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusReportsArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "bonus" */
export type BonusTransfer_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type BonusListOutput = {
  __typename?: 'bonusListOutput';
  data?: Maybe<Scalars['RenderedObject']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type BonusStatisticsOutput = {
  __typename?: 'bonusStatisticsOutput';
  data?: Maybe<Array<Maybe<Scalars['RenderedObject']>>>;
  status?: Maybe<Scalars['String']>;
};

/** aggregated selection of "bonus" */
export type Bonus_Aggregate = {
  __typename?: 'bonus_aggregate';
  aggregate?: Maybe<Bonus_Aggregate_Fields>;
  nodes: Array<Bonus>;
};

/** aggregate fields of "bonus" */
export type Bonus_Aggregate_Fields = {
  __typename?: 'bonus_aggregate_fields';
  avg?: Maybe<Bonus_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bonus_Max_Fields>;
  min?: Maybe<Bonus_Min_Fields>;
  stddev?: Maybe<Bonus_Stddev_Fields>;
  stddev_pop?: Maybe<Bonus_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bonus_Stddev_Samp_Fields>;
  sum?: Maybe<Bonus_Sum_Fields>;
  var_pop?: Maybe<Bonus_Var_Pop_Fields>;
  var_samp?: Maybe<Bonus_Var_Samp_Fields>;
  variance?: Maybe<Bonus_Variance_Fields>;
};


/** aggregate fields of "bonus" */
export type Bonus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bonus" */
export type Bonus_Aggregate_Order_By = {
  avg?: InputMaybe<Bonus_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonus_Max_Order_By>;
  min?: InputMaybe<Bonus_Min_Order_By>;
  stddev?: InputMaybe<Bonus_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bonus_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bonus_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bonus_Sum_Order_By>;
  var_pop?: InputMaybe<Bonus_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bonus_Var_Samp_Order_By>;
  variance?: InputMaybe<Bonus_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Bonus_Append_Input = {
  transfer_data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "bonus" */
export type Bonus_Arr_Rel_Insert_Input = {
  data: Array<Bonus_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_On_Conflict>;
};

/** aggregate avg on columns */
export type Bonus_Avg_Fields = {
  __typename?: 'bonus_avg_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bonus" */
export type Bonus_Avg_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** columns and relationships of "bonus_blacklist" */
export type Bonus_Blacklist = {
  __typename?: 'bonus_blacklist';
  /** An array relationship */
  blacklist_conversation_messages: Array<Blacklist_Conversation_Message>;
  /** An aggregated array relationship */
  blacklist_conversation_messages_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** An array relationship */
  blacklist_histories: Array<Blacklist_History>;
  /** An aggregated array relationship */
  blacklist_histories_aggregate: Blacklist_History_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  created_by: Profile;
  created_by_id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_banned: Scalars['Boolean'];
  /** An array relationship */
  notifications: Array<Notification>;
  /** An aggregated array relationship */
  notifications_aggregate: Notification_Aggregate;
  /** An object relationship */
  profile: Profile;
  profile_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistBlacklist_Conversation_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistBlacklist_Conversation_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistBlacklist_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistBlacklist_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


/** columns and relationships of "bonus_blacklist" */
export type Bonus_BlacklistNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** aggregated selection of "bonus_blacklist" */
export type Bonus_Blacklist_Aggregate = {
  __typename?: 'bonus_blacklist_aggregate';
  aggregate?: Maybe<Bonus_Blacklist_Aggregate_Fields>;
  nodes: Array<Bonus_Blacklist>;
};

/** aggregate fields of "bonus_blacklist" */
export type Bonus_Blacklist_Aggregate_Fields = {
  __typename?: 'bonus_blacklist_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bonus_Blacklist_Max_Fields>;
  min?: Maybe<Bonus_Blacklist_Min_Fields>;
};


/** aggregate fields of "bonus_blacklist" */
export type Bonus_Blacklist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bonus_blacklist" */
export type Bonus_Blacklist_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonus_Blacklist_Max_Order_By>;
  min?: InputMaybe<Bonus_Blacklist_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bonus_blacklist" */
export type Bonus_Blacklist_Arr_Rel_Insert_Input = {
  data: Array<Bonus_Blacklist_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Blacklist_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bonus_blacklist". All fields are combined with a logical 'AND'. */
export type Bonus_Blacklist_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bonus_Blacklist_Bool_Exp>>>;
  _not?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bonus_Blacklist_Bool_Exp>>>;
  blacklist_conversation_messages?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  blacklist_histories?: InputMaybe<Blacklist_History_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Profile_Bool_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_banned?: InputMaybe<Boolean_Comparison_Exp>;
  notifications?: InputMaybe<Notification_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonus_blacklist" */
export enum Bonus_Blacklist_Constraint {
  /** unique or primary key constraint */
  BonusBlacklistPkey = 'bonus_blacklist_pkey',
  /** unique or primary key constraint */
  BonusBlacklistProfileIdKey = 'bonus_blacklist_profile_id_key'
}

/** input type for inserting data into table "bonus_blacklist" */
export type Bonus_Blacklist_Insert_Input = {
  blacklist_conversation_messages?: InputMaybe<Blacklist_Conversation_Message_Arr_Rel_Insert_Input>;
  blacklist_histories?: InputMaybe<Blacklist_History_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  created_by_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_banned?: InputMaybe<Scalars['Boolean']>;
  notifications?: InputMaybe<Notification_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bonus_Blacklist_Max_Fields = {
  __typename?: 'bonus_blacklist_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bonus_blacklist" */
export type Bonus_Blacklist_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonus_Blacklist_Min_Fields = {
  __typename?: 'bonus_blacklist_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bonus_blacklist" */
export type Bonus_Blacklist_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonus_blacklist" */
export type Bonus_Blacklist_Mutation_Response = {
  __typename?: 'bonus_blacklist_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bonus_Blacklist>;
};

/** input type for inserting object relation for remote table "bonus_blacklist" */
export type Bonus_Blacklist_Obj_Rel_Insert_Input = {
  data: Bonus_Blacklist_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Blacklist_On_Conflict>;
};

/** on conflict condition type for table "bonus_blacklist" */
export type Bonus_Blacklist_On_Conflict = {
  constraint: Bonus_Blacklist_Constraint;
  update_columns: Array<Bonus_Blacklist_Update_Column>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};

/** ordering options when selecting data from "bonus_blacklist" */
export type Bonus_Blacklist_Order_By = {
  blacklist_conversation_messages_aggregate?: InputMaybe<Blacklist_Conversation_Message_Aggregate_Order_By>;
  blacklist_histories_aggregate?: InputMaybe<Blacklist_History_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Profile_Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_banned?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notification_Aggregate_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bonus_blacklist" */
export type Bonus_Blacklist_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bonus_blacklist" */
export enum Bonus_Blacklist_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsBanned = 'is_banned',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bonus_blacklist" */
export type Bonus_Blacklist_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_banned?: InputMaybe<Scalars['Boolean']>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "bonus_blacklist" */
export enum Bonus_Blacklist_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsBanned = 'is_banned',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to filter rows from the table "bonus". All fields are combined with a logical 'AND'. */
export type Bonus_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bonus_Bool_Exp>>>;
  _not?: InputMaybe<Bonus_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bonus_Bool_Exp>>>;
  actual_transferred_cryptos?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
  approved_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_by?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  bonus_2_transfer_option?: InputMaybe<Int_Comparison_Exp>;
  bonus_manage?: InputMaybe<Int_Comparison_Exp>;
  bonus_sale_manage?: InputMaybe<Int_Comparison_Exp>;
  bonus_transfer_option?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at_bonus?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at_bonus_2?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at_salary?: InputMaybe<Timestamptz_Comparison_Exp>;
  crypto_transactions?: InputMaybe<Crypto_Transaction_Bool_Exp>;
  date_request_bonus?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_request_bonus_2?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_request_salary?: InputMaybe<Timestamptz_Comparison_Exp>;
  ftd?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  id_airtable?: InputMaybe<String_Comparison_Exp>;
  linkPDF?: InputMaybe<String_Comparison_Exp>;
  month?: InputMaybe<Int_Comparison_Exp>;
  numCustomer?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileByUserId?: InputMaybe<Profile_Bool_Exp>;
  reports?: InputMaybe<Report_Bool_Exp>;
  salary?: InputMaybe<Bigint_Comparison_Exp>;
  salary_transfer_option?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  status_2?: InputMaybe<Int_Comparison_Exp>;
  status_salary?: InputMaybe<Int_Comparison_Exp>;
  total?: InputMaybe<Bigint_Comparison_Exp>;
  total_2?: InputMaybe<Bigint_Comparison_Exp>;
  total_bonus_salary?: InputMaybe<Bigint_Comparison_Exp>;
  transfer_data?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonus" */
export enum Bonus_Constraint {
  /** unique or primary key constraint */
  BonusPkey = 'bonus_pkey',
  /** unique or primary key constraint */
  BonusUserIdMonthYearKey = 'bonus_user_id_month_year_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Bonus_Delete_At_Path_Input = {
  transfer_data?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Bonus_Delete_Elem_Input = {
  transfer_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Bonus_Delete_Key_Input = {
  transfer_data?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "bonus_fee_history" */
export type Bonus_Fee_History = {
  __typename?: 'bonus_fee_history';
  amount: Scalars['Int'];
  bonus_id: Scalars['Int'];
  bonus_type: Bonus_Type_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "bonus_fee_history" */
export type Bonus_Fee_History_Aggregate = {
  __typename?: 'bonus_fee_history_aggregate';
  aggregate?: Maybe<Bonus_Fee_History_Aggregate_Fields>;
  nodes: Array<Bonus_Fee_History>;
};

/** aggregate fields of "bonus_fee_history" */
export type Bonus_Fee_History_Aggregate_Fields = {
  __typename?: 'bonus_fee_history_aggregate_fields';
  avg?: Maybe<Bonus_Fee_History_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bonus_Fee_History_Max_Fields>;
  min?: Maybe<Bonus_Fee_History_Min_Fields>;
  stddev?: Maybe<Bonus_Fee_History_Stddev_Fields>;
  stddev_pop?: Maybe<Bonus_Fee_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bonus_Fee_History_Stddev_Samp_Fields>;
  sum?: Maybe<Bonus_Fee_History_Sum_Fields>;
  var_pop?: Maybe<Bonus_Fee_History_Var_Pop_Fields>;
  var_samp?: Maybe<Bonus_Fee_History_Var_Samp_Fields>;
  variance?: Maybe<Bonus_Fee_History_Variance_Fields>;
};


/** aggregate fields of "bonus_fee_history" */
export type Bonus_Fee_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonus_Fee_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bonus_fee_history" */
export type Bonus_Fee_History_Aggregate_Order_By = {
  avg?: InputMaybe<Bonus_Fee_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonus_Fee_History_Max_Order_By>;
  min?: InputMaybe<Bonus_Fee_History_Min_Order_By>;
  stddev?: InputMaybe<Bonus_Fee_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bonus_Fee_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bonus_Fee_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bonus_Fee_History_Sum_Order_By>;
  var_pop?: InputMaybe<Bonus_Fee_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bonus_Fee_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Bonus_Fee_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bonus_fee_history" */
export type Bonus_Fee_History_Arr_Rel_Insert_Input = {
  data: Array<Bonus_Fee_History_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Fee_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Bonus_Fee_History_Avg_Fields = {
  __typename?: 'bonus_fee_history_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bonus_fee_history". All fields are combined with a logical 'AND'. */
export type Bonus_Fee_History_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bonus_Fee_History_Bool_Exp>>>;
  _not?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bonus_Fee_History_Bool_Exp>>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  bonus_type?: InputMaybe<Bonus_Type_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonus_fee_history" */
export enum Bonus_Fee_History_Constraint {
  /** unique or primary key constraint */
  BonusFeeHistoryPkey = 'bonus_fee_history_pkey'
}

/** input type for incrementing integer column in table "bonus_fee_history" */
export type Bonus_Fee_History_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bonus_fee_history" */
export type Bonus_Fee_History_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bonus_Fee_History_Max_Fields = {
  __typename?: 'bonus_fee_history_max_fields';
  amount?: Maybe<Scalars['Int']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonus_Fee_History_Min_Fields = {
  __typename?: 'bonus_fee_history_min_fields';
  amount?: Maybe<Scalars['Int']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonus_fee_history" */
export type Bonus_Fee_History_Mutation_Response = {
  __typename?: 'bonus_fee_history_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bonus_Fee_History>;
};

/** input type for inserting object relation for remote table "bonus_fee_history" */
export type Bonus_Fee_History_Obj_Rel_Insert_Input = {
  data: Bonus_Fee_History_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Fee_History_On_Conflict>;
};

/** on conflict condition type for table "bonus_fee_history" */
export type Bonus_Fee_History_On_Conflict = {
  constraint: Bonus_Fee_History_Constraint;
  update_columns: Array<Bonus_Fee_History_Update_Column>;
  where?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
};

/** ordering options when selecting data from "bonus_fee_history" */
export type Bonus_Fee_History_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bonus_fee_history" */
export type Bonus_Fee_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bonus_fee_history" */
export enum Bonus_Fee_History_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bonus_fee_history" */
export type Bonus_Fee_History_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Bonus_Fee_History_Stddev_Fields = {
  __typename?: 'bonus_fee_history_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bonus_Fee_History_Stddev_Pop_Fields = {
  __typename?: 'bonus_fee_history_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bonus_Fee_History_Stddev_Samp_Fields = {
  __typename?: 'bonus_fee_history_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bonus_Fee_History_Sum_Fields = {
  __typename?: 'bonus_fee_history_sum_fields';
  amount?: Maybe<Scalars['Int']>;
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "bonus_fee_history" */
export enum Bonus_Fee_History_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Bonus_Fee_History_Var_Pop_Fields = {
  __typename?: 'bonus_fee_history_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bonus_Fee_History_Var_Samp_Fields = {
  __typename?: 'bonus_fee_history_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bonus_Fee_History_Variance_Fields = {
  __typename?: 'bonus_fee_history_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bonus_fee_history" */
export type Bonus_Fee_History_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** input type for incrementing integer column in table "bonus" */
export type Bonus_Inc_Input = {
  bonus_2_transfer_option?: InputMaybe<Scalars['Int']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  bonus_transfer_option?: InputMaybe<Scalars['Int']>;
  ftd?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  numCustomer?: InputMaybe<Scalars['Int']>;
  salary?: InputMaybe<Scalars['bigint']>;
  salary_transfer_option?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  status_2?: InputMaybe<Scalars['Int']>;
  status_salary?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['bigint']>;
  total_2?: InputMaybe<Scalars['bigint']>;
  total_bonus_salary?: InputMaybe<Scalars['bigint']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bonus" */
export type Bonus_Insert_Input = {
  actual_transferred_cryptos?: InputMaybe<Actual_Transferred_Crypto_Arr_Rel_Insert_Input>;
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  bonus_2_transfer_option?: InputMaybe<Scalars['Int']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  bonus_transfer_option?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_at_bonus?: InputMaybe<Scalars['timestamptz']>;
  created_at_bonus_2?: InputMaybe<Scalars['timestamptz']>;
  created_at_salary?: InputMaybe<Scalars['timestamptz']>;
  crypto_transactions?: InputMaybe<Crypto_Transaction_Arr_Rel_Insert_Input>;
  date_request_bonus?: InputMaybe<Scalars['timestamptz']>;
  date_request_bonus_2?: InputMaybe<Scalars['timestamptz']>;
  date_request_salary?: InputMaybe<Scalars['timestamptz']>;
  ftd?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  id_airtable?: InputMaybe<Scalars['String']>;
  linkPDF?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['Int']>;
  numCustomer?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByUserId?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  reports?: InputMaybe<Report_Arr_Rel_Insert_Input>;
  salary?: InputMaybe<Scalars['bigint']>;
  salary_transfer_option?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  status_2?: InputMaybe<Scalars['Int']>;
  status_salary?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['bigint']>;
  total_2?: InputMaybe<Scalars['bigint']>;
  total_bonus_salary?: InputMaybe<Scalars['bigint']>;
  transfer_data?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Bonus_Max_Fields = {
  __typename?: 'bonus_max_fields';
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  bonus_2_transfer_option?: Maybe<Scalars['Int']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  bonus_transfer_option?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_at_bonus?: Maybe<Scalars['timestamptz']>;
  created_at_bonus_2?: Maybe<Scalars['timestamptz']>;
  created_at_salary?: Maybe<Scalars['timestamptz']>;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_bonus_2?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  ftd?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  id_airtable?: Maybe<Scalars['String']>;
  linkPDF?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  numCustomer?: Maybe<Scalars['Int']>;
  salary?: Maybe<Scalars['bigint']>;
  salary_transfer_option?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  status_2?: Maybe<Scalars['Int']>;
  status_salary?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['bigint']>;
  total_2?: Maybe<Scalars['bigint']>;
  total_bonus_salary?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "bonus" */
export type Bonus_Max_Order_By = {
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_at_bonus?: InputMaybe<Order_By>;
  created_at_bonus_2?: InputMaybe<Order_By>;
  created_at_salary?: InputMaybe<Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_bonus_2?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_airtable?: InputMaybe<Order_By>;
  linkPDF?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonus_Min_Fields = {
  __typename?: 'bonus_min_fields';
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  bonus_2_transfer_option?: Maybe<Scalars['Int']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  bonus_transfer_option?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_at_bonus?: Maybe<Scalars['timestamptz']>;
  created_at_bonus_2?: Maybe<Scalars['timestamptz']>;
  created_at_salary?: Maybe<Scalars['timestamptz']>;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_bonus_2?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  ftd?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  id_airtable?: Maybe<Scalars['String']>;
  linkPDF?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  numCustomer?: Maybe<Scalars['Int']>;
  salary?: Maybe<Scalars['bigint']>;
  salary_transfer_option?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  status_2?: Maybe<Scalars['Int']>;
  status_salary?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['bigint']>;
  total_2?: Maybe<Scalars['bigint']>;
  total_bonus_salary?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "bonus" */
export type Bonus_Min_Order_By = {
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_at_bonus?: InputMaybe<Order_By>;
  created_at_bonus_2?: InputMaybe<Order_By>;
  created_at_salary?: InputMaybe<Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_bonus_2?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_airtable?: InputMaybe<Order_By>;
  linkPDF?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonus" */
export type Bonus_Mutation_Response = {
  __typename?: 'bonus_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bonus>;
};

/** input type for inserting object relation for remote table "bonus" */
export type Bonus_Obj_Rel_Insert_Input = {
  data: Bonus_Insert_Input;
  on_conflict?: InputMaybe<Bonus_On_Conflict>;
};

/**
 * a child table represent relation between bonus and office_rule_table
 *
 *
 * columns and relationships of "bonus_office_rule"
 *
 */
export type Bonus_Office_Rule = {
  __typename?: 'bonus_office_rule';
  bonus_id: Scalars['Int'];
  bonus_type: Bonus_Type_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  office_rule_id: Scalars['uuid'];
  paid?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "bonus_office_rule" */
export type Bonus_Office_Rule_Aggregate = {
  __typename?: 'bonus_office_rule_aggregate';
  aggregate?: Maybe<Bonus_Office_Rule_Aggregate_Fields>;
  nodes: Array<Bonus_Office_Rule>;
};

/** aggregate fields of "bonus_office_rule" */
export type Bonus_Office_Rule_Aggregate_Fields = {
  __typename?: 'bonus_office_rule_aggregate_fields';
  avg?: Maybe<Bonus_Office_Rule_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bonus_Office_Rule_Max_Fields>;
  min?: Maybe<Bonus_Office_Rule_Min_Fields>;
  stddev?: Maybe<Bonus_Office_Rule_Stddev_Fields>;
  stddev_pop?: Maybe<Bonus_Office_Rule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bonus_Office_Rule_Stddev_Samp_Fields>;
  sum?: Maybe<Bonus_Office_Rule_Sum_Fields>;
  var_pop?: Maybe<Bonus_Office_Rule_Var_Pop_Fields>;
  var_samp?: Maybe<Bonus_Office_Rule_Var_Samp_Fields>;
  variance?: Maybe<Bonus_Office_Rule_Variance_Fields>;
};


/** aggregate fields of "bonus_office_rule" */
export type Bonus_Office_Rule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bonus_office_rule" */
export type Bonus_Office_Rule_Aggregate_Order_By = {
  avg?: InputMaybe<Bonus_Office_Rule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonus_Office_Rule_Max_Order_By>;
  min?: InputMaybe<Bonus_Office_Rule_Min_Order_By>;
  stddev?: InputMaybe<Bonus_Office_Rule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bonus_Office_Rule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bonus_Office_Rule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bonus_Office_Rule_Sum_Order_By>;
  var_pop?: InputMaybe<Bonus_Office_Rule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bonus_Office_Rule_Var_Samp_Order_By>;
  variance?: InputMaybe<Bonus_Office_Rule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bonus_office_rule" */
export type Bonus_Office_Rule_Arr_Rel_Insert_Input = {
  data: Array<Bonus_Office_Rule_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Office_Rule_On_Conflict>;
};

/** aggregate avg on columns */
export type Bonus_Office_Rule_Avg_Fields = {
  __typename?: 'bonus_office_rule_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bonus_office_rule". All fields are combined with a logical 'AND'. */
export type Bonus_Office_Rule_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bonus_Office_Rule_Bool_Exp>>>;
  _not?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bonus_Office_Rule_Bool_Exp>>>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  bonus_type?: InputMaybe<Bonus_Type_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  office_rule_id?: InputMaybe<Uuid_Comparison_Exp>;
  paid?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonus_office_rule" */
export enum Bonus_Office_Rule_Constraint {
  /** unique or primary key constraint */
  BonusOfficeRulePkey = 'bonus_office_rule_pkey'
}

/** input type for incrementing integer column in table "bonus_office_rule" */
export type Bonus_Office_Rule_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bonus_office_rule" */
export type Bonus_Office_Rule_Insert_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  office_rule_id?: InputMaybe<Scalars['uuid']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bonus_Office_Rule_Max_Fields = {
  __typename?: 'bonus_office_rule_max_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  office_rule_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Max_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_rule_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonus_Office_Rule_Min_Fields = {
  __typename?: 'bonus_office_rule_min_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  office_rule_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Min_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_rule_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonus_office_rule" */
export type Bonus_Office_Rule_Mutation_Response = {
  __typename?: 'bonus_office_rule_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bonus_Office_Rule>;
};

/** input type for inserting object relation for remote table "bonus_office_rule" */
export type Bonus_Office_Rule_Obj_Rel_Insert_Input = {
  data: Bonus_Office_Rule_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Office_Rule_On_Conflict>;
};

/** on conflict condition type for table "bonus_office_rule" */
export type Bonus_Office_Rule_On_Conflict = {
  constraint: Bonus_Office_Rule_Constraint;
  update_columns: Array<Bonus_Office_Rule_Update_Column>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};

/** ordering options when selecting data from "bonus_office_rule" */
export type Bonus_Office_Rule_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_rule_id?: InputMaybe<Order_By>;
  paid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bonus_office_rule" */
export type Bonus_Office_Rule_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bonus_office_rule" */
export enum Bonus_Office_Rule_Select_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeRuleId = 'office_rule_id',
  /** column name */
  Paid = 'paid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bonus_office_rule" */
export type Bonus_Office_Rule_Set_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  office_rule_id?: InputMaybe<Scalars['uuid']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Bonus_Office_Rule_Stddev_Fields = {
  __typename?: 'bonus_office_rule_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bonus_Office_Rule_Stddev_Pop_Fields = {
  __typename?: 'bonus_office_rule_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bonus_Office_Rule_Stddev_Samp_Fields = {
  __typename?: 'bonus_office_rule_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bonus_Office_Rule_Sum_Fields = {
  __typename?: 'bonus_office_rule_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "bonus_office_rule" */
export enum Bonus_Office_Rule_Update_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeRuleId = 'office_rule_id',
  /** column name */
  Paid = 'paid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Bonus_Office_Rule_Var_Pop_Fields = {
  __typename?: 'bonus_office_rule_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bonus_Office_Rule_Var_Samp_Fields = {
  __typename?: 'bonus_office_rule_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bonus_Office_Rule_Variance_Fields = {
  __typename?: 'bonus_office_rule_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bonus_office_rule" */
export type Bonus_Office_Rule_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** on conflict condition type for table "bonus" */
export type Bonus_On_Conflict = {
  constraint: Bonus_Constraint;
  update_columns: Array<Bonus_Update_Column>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};

/** ordering options when selecting data from "bonus" */
export type Bonus_Order_By = {
  actual_transferred_cryptos_aggregate?: InputMaybe<Actual_Transferred_Crypto_Aggregate_Order_By>;
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_at_bonus?: InputMaybe<Order_By>;
  created_at_bonus_2?: InputMaybe<Order_By>;
  created_at_salary?: InputMaybe<Order_By>;
  crypto_transactions_aggregate?: InputMaybe<Crypto_Transaction_Aggregate_Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_bonus_2?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_airtable?: InputMaybe<Order_By>;
  linkPDF?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileByUserId?: InputMaybe<Profile_Order_By>;
  reports_aggregate?: InputMaybe<Report_Aggregate_Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  transfer_data?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bonus" */
export type Bonus_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Bonus_Prepend_Input = {
  transfer_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "bonus" */
export enum Bonus_Select_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  Bonus_2TransferOption = 'bonus_2_transfer_option',
  /** column name */
  BonusManage = 'bonus_manage',
  /** column name */
  BonusSaleManage = 'bonus_sale_manage',
  /** column name */
  BonusTransferOption = 'bonus_transfer_option',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedAtBonus = 'created_at_bonus',
  /** column name */
  CreatedAtBonus_2 = 'created_at_bonus_2',
  /** column name */
  CreatedAtSalary = 'created_at_salary',
  /** column name */
  DateRequestBonus = 'date_request_bonus',
  /** column name */
  DateRequestBonus_2 = 'date_request_bonus_2',
  /** column name */
  DateRequestSalary = 'date_request_salary',
  /** column name */
  Ftd = 'ftd',
  /** column name */
  Id = 'id',
  /** column name */
  IdAirtable = 'id_airtable',
  /** column name */
  LinkPdf = 'linkPDF',
  /** column name */
  Month = 'month',
  /** column name */
  NumCustomer = 'numCustomer',
  /** column name */
  Salary = 'salary',
  /** column name */
  SalaryTransferOption = 'salary_transfer_option',
  /** column name */
  Status = 'status',
  /** column name */
  Status_2 = 'status_2',
  /** column name */
  StatusSalary = 'status_salary',
  /** column name */
  Total = 'total',
  /** column name */
  Total_2 = 'total_2',
  /** column name */
  TotalBonusSalary = 'total_bonus_salary',
  /** column name */
  TransferData = 'transfer_data',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "bonus" */
export type Bonus_Set_Input = {
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  bonus_2_transfer_option?: InputMaybe<Scalars['Int']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  bonus_transfer_option?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_at_bonus?: InputMaybe<Scalars['timestamptz']>;
  created_at_bonus_2?: InputMaybe<Scalars['timestamptz']>;
  created_at_salary?: InputMaybe<Scalars['timestamptz']>;
  date_request_bonus?: InputMaybe<Scalars['timestamptz']>;
  date_request_bonus_2?: InputMaybe<Scalars['timestamptz']>;
  date_request_salary?: InputMaybe<Scalars['timestamptz']>;
  ftd?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  id_airtable?: InputMaybe<Scalars['String']>;
  linkPDF?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['Int']>;
  numCustomer?: InputMaybe<Scalars['Int']>;
  salary?: InputMaybe<Scalars['bigint']>;
  salary_transfer_option?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  status_2?: InputMaybe<Scalars['Int']>;
  status_salary?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['bigint']>;
  total_2?: InputMaybe<Scalars['bigint']>;
  total_bonus_salary?: InputMaybe<Scalars['bigint']>;
  transfer_data?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Bonus_Stddev_Fields = {
  __typename?: 'bonus_stddev_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bonus" */
export type Bonus_Stddev_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bonus_Stddev_Pop_Fields = {
  __typename?: 'bonus_stddev_pop_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bonus" */
export type Bonus_Stddev_Pop_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bonus_Stddev_Samp_Fields = {
  __typename?: 'bonus_stddev_samp_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bonus" */
export type Bonus_Stddev_Samp_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bonus_Sum_Fields = {
  __typename?: 'bonus_sum_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Int']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  bonus_transfer_option?: Maybe<Scalars['Int']>;
  ftd?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  numCustomer?: Maybe<Scalars['Int']>;
  salary?: Maybe<Scalars['bigint']>;
  salary_transfer_option?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  status_2?: Maybe<Scalars['Int']>;
  status_salary?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['bigint']>;
  total_2?: Maybe<Scalars['bigint']>;
  total_bonus_salary?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bonus" */
export type Bonus_Sum_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** columns and relationships of "bonus_type" */
export type Bonus_Type = {
  __typename?: 'bonus_type';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "bonus_type" */
export type Bonus_Type_Aggregate = {
  __typename?: 'bonus_type_aggregate';
  aggregate?: Maybe<Bonus_Type_Aggregate_Fields>;
  nodes: Array<Bonus_Type>;
};

/** aggregate fields of "bonus_type" */
export type Bonus_Type_Aggregate_Fields = {
  __typename?: 'bonus_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bonus_Type_Max_Fields>;
  min?: Maybe<Bonus_Type_Min_Fields>;
};


/** aggregate fields of "bonus_type" */
export type Bonus_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonus_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bonus_type" */
export type Bonus_Type_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonus_Type_Max_Order_By>;
  min?: InputMaybe<Bonus_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bonus_type" */
export type Bonus_Type_Arr_Rel_Insert_Input = {
  data: Array<Bonus_Type_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bonus_type". All fields are combined with a logical 'AND'. */
export type Bonus_Type_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Bonus_Type_Bool_Exp>>>;
  _not?: InputMaybe<Bonus_Type_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Bonus_Type_Bool_Exp>>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonus_type" */
export enum Bonus_Type_Constraint {
  /** unique or primary key constraint */
  BonusTypePkey = 'bonus_type_pkey'
}

export enum Bonus_Type_Enum {
  Salary = 'salary',
  /** bonus 1 */
  Total = 'total',
  /** bonus 2 */
  Total_2 = 'total_2'
}

/** expression to compare columns of type bonus_type_enum. All fields are combined with logical 'AND'. */
export type Bonus_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Bonus_Type_Enum>;
  _in?: InputMaybe<Array<Bonus_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Bonus_Type_Enum>;
  _nin?: InputMaybe<Array<Bonus_Type_Enum>>;
};

/** input type for inserting data into table "bonus_type" */
export type Bonus_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Bonus_Type_Max_Fields = {
  __typename?: 'bonus_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bonus_type" */
export type Bonus_Type_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonus_Type_Min_Fields = {
  __typename?: 'bonus_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bonus_type" */
export type Bonus_Type_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonus_type" */
export type Bonus_Type_Mutation_Response = {
  __typename?: 'bonus_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bonus_Type>;
};

/** input type for inserting object relation for remote table "bonus_type" */
export type Bonus_Type_Obj_Rel_Insert_Input = {
  data: Bonus_Type_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Type_On_Conflict>;
};

/** on conflict condition type for table "bonus_type" */
export type Bonus_Type_On_Conflict = {
  constraint: Bonus_Type_Constraint;
  update_columns: Array<Bonus_Type_Update_Column>;
  where?: InputMaybe<Bonus_Type_Bool_Exp>;
};

/** ordering options when selecting data from "bonus_type" */
export type Bonus_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "bonus_type" */
export type Bonus_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "bonus_type" */
export enum Bonus_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "bonus_type" */
export type Bonus_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "bonus_type" */
export enum Bonus_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "bonus" */
export enum Bonus_Update_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  Bonus_2TransferOption = 'bonus_2_transfer_option',
  /** column name */
  BonusManage = 'bonus_manage',
  /** column name */
  BonusSaleManage = 'bonus_sale_manage',
  /** column name */
  BonusTransferOption = 'bonus_transfer_option',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedAtBonus = 'created_at_bonus',
  /** column name */
  CreatedAtBonus_2 = 'created_at_bonus_2',
  /** column name */
  CreatedAtSalary = 'created_at_salary',
  /** column name */
  DateRequestBonus = 'date_request_bonus',
  /** column name */
  DateRequestBonus_2 = 'date_request_bonus_2',
  /** column name */
  DateRequestSalary = 'date_request_salary',
  /** column name */
  Ftd = 'ftd',
  /** column name */
  Id = 'id',
  /** column name */
  IdAirtable = 'id_airtable',
  /** column name */
  LinkPdf = 'linkPDF',
  /** column name */
  Month = 'month',
  /** column name */
  NumCustomer = 'numCustomer',
  /** column name */
  Salary = 'salary',
  /** column name */
  SalaryTransferOption = 'salary_transfer_option',
  /** column name */
  Status = 'status',
  /** column name */
  Status_2 = 'status_2',
  /** column name */
  StatusSalary = 'status_salary',
  /** column name */
  Total = 'total',
  /** column name */
  Total_2 = 'total_2',
  /** column name */
  TotalBonusSalary = 'total_bonus_salary',
  /** column name */
  TransferData = 'transfer_data',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Bonus_Var_Pop_Fields = {
  __typename?: 'bonus_var_pop_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bonus" */
export type Bonus_Var_Pop_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bonus_Var_Samp_Fields = {
  __typename?: 'bonus_var_samp_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bonus" */
export type Bonus_Var_Samp_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bonus_Variance_Fields = {
  __typename?: 'bonus_variance_fields';
  bonus_2_transfer_option?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  bonus_transfer_option?: Maybe<Scalars['Float']>;
  ftd?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  numCustomer?: Maybe<Scalars['Float']>;
  salary?: Maybe<Scalars['Float']>;
  salary_transfer_option?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  status_2?: Maybe<Scalars['Float']>;
  status_salary?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_2?: Maybe<Scalars['Float']>;
  total_bonus_salary?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bonus" */
export type Bonus_Variance_Order_By = {
  bonus_2_transfer_option?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  bonus_transfer_option?: InputMaybe<Order_By>;
  ftd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  numCustomer?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  salary_transfer_option?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_2?: InputMaybe<Order_By>;
  status_salary?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  total_2?: InputMaybe<Order_By>;
  total_bonus_salary?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** columns and relationships of "breach_user" */
export type Breach_User = {
  __typename?: 'breach_user';
  amount: Scalars['bigint'];
  amount_left?: Maybe<Scalars['bigint']>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  created_by?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  penalize_users: Array<Penalize_User>;
  /** An aggregated array relationship */
  penalize_users_aggregate: Penalize_User_Aggregate;
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileByCreatedBy?: Maybe<Profile>;
  /** An object relationship */
  profileByUpdatedBy?: Maybe<Profile>;
  type?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  updated_by?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
};


/** columns and relationships of "breach_user" */
export type Breach_UserPenalize_UsersArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};


/** columns and relationships of "breach_user" */
export type Breach_UserPenalize_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};

/** aggregated selection of "breach_user" */
export type Breach_User_Aggregate = {
  __typename?: 'breach_user_aggregate';
  aggregate?: Maybe<Breach_User_Aggregate_Fields>;
  nodes: Array<Breach_User>;
};

/** aggregate fields of "breach_user" */
export type Breach_User_Aggregate_Fields = {
  __typename?: 'breach_user_aggregate_fields';
  avg?: Maybe<Breach_User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Breach_User_Max_Fields>;
  min?: Maybe<Breach_User_Min_Fields>;
  stddev?: Maybe<Breach_User_Stddev_Fields>;
  stddev_pop?: Maybe<Breach_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Breach_User_Stddev_Samp_Fields>;
  sum?: Maybe<Breach_User_Sum_Fields>;
  var_pop?: Maybe<Breach_User_Var_Pop_Fields>;
  var_samp?: Maybe<Breach_User_Var_Samp_Fields>;
  variance?: Maybe<Breach_User_Variance_Fields>;
};


/** aggregate fields of "breach_user" */
export type Breach_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Breach_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "breach_user" */
export type Breach_User_Aggregate_Order_By = {
  avg?: InputMaybe<Breach_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Breach_User_Max_Order_By>;
  min?: InputMaybe<Breach_User_Min_Order_By>;
  stddev?: InputMaybe<Breach_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Breach_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Breach_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Breach_User_Sum_Order_By>;
  var_pop?: InputMaybe<Breach_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Breach_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Breach_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "breach_user" */
export type Breach_User_Arr_Rel_Insert_Input = {
  data: Array<Breach_User_Insert_Input>;
  on_conflict?: InputMaybe<Breach_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Breach_User_Avg_Fields = {
  __typename?: 'breach_user_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "breach_user" */
export type Breach_User_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "breach_user". All fields are combined with a logical 'AND'. */
export type Breach_User_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Breach_User_Bool_Exp>>>;
  _not?: InputMaybe<Breach_User_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Breach_User_Bool_Exp>>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount_left?: InputMaybe<Bigint_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  penalize_users?: InputMaybe<Penalize_User_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileByCreatedBy?: InputMaybe<Profile_Bool_Exp>;
  profileByUpdatedBy?: InputMaybe<Profile_Bool_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "breach_user" */
export enum Breach_User_Constraint {
  /** unique or primary key constraint */
  BreachUserIdKey = 'breach_user_id_key',
  /** unique or primary key constraint */
  BreachUserPkey = 'breach_user_pkey'
}

/** input type for incrementing integer column in table "breach_user" */
export type Breach_User_Inc_Input = {
  amount?: InputMaybe<Scalars['bigint']>;
  amount_left?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "breach_user" */
export type Breach_User_Insert_Input = {
  amount?: InputMaybe<Scalars['bigint']>;
  amount_left?: InputMaybe<Scalars['bigint']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  penalize_users?: InputMaybe<Penalize_User_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByCreatedBy?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByUpdatedBy?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Breach_User_Max_Fields = {
  __typename?: 'breach_user_max_fields';
  amount?: Maybe<Scalars['bigint']>;
  amount_left?: Maybe<Scalars['bigint']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "breach_user" */
export type Breach_User_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Breach_User_Min_Fields = {
  __typename?: 'breach_user_min_fields';
  amount?: Maybe<Scalars['bigint']>;
  amount_left?: Maybe<Scalars['bigint']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "breach_user" */
export type Breach_User_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "breach_user" */
export type Breach_User_Mutation_Response = {
  __typename?: 'breach_user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Breach_User>;
};

/** input type for inserting object relation for remote table "breach_user" */
export type Breach_User_Obj_Rel_Insert_Input = {
  data: Breach_User_Insert_Input;
  on_conflict?: InputMaybe<Breach_User_On_Conflict>;
};

/** on conflict condition type for table "breach_user" */
export type Breach_User_On_Conflict = {
  constraint: Breach_User_Constraint;
  update_columns: Array<Breach_User_Update_Column>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};

/** ordering options when selecting data from "breach_user" */
export type Breach_User_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalize_users_aggregate?: InputMaybe<Penalize_User_Aggregate_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileByCreatedBy?: InputMaybe<Profile_Order_By>;
  profileByUpdatedBy?: InputMaybe<Profile_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "breach_user" */
export type Breach_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "breach_user" */
export enum Breach_User_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountLeft = 'amount_left',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "breach_user" */
export type Breach_User_Set_Input = {
  amount?: InputMaybe<Scalars['bigint']>;
  amount_left?: InputMaybe<Scalars['bigint']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Breach_User_Stddev_Fields = {
  __typename?: 'breach_user_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "breach_user" */
export type Breach_User_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Breach_User_Stddev_Pop_Fields = {
  __typename?: 'breach_user_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "breach_user" */
export type Breach_User_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Breach_User_Stddev_Samp_Fields = {
  __typename?: 'breach_user_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "breach_user" */
export type Breach_User_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Breach_User_Sum_Fields = {
  __typename?: 'breach_user_sum_fields';
  amount?: Maybe<Scalars['bigint']>;
  amount_left?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "breach_user" */
export type Breach_User_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "breach_user" */
export enum Breach_User_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountLeft = 'amount_left',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Breach_User_Var_Pop_Fields = {
  __typename?: 'breach_user_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "breach_user" */
export type Breach_User_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Breach_User_Var_Samp_Fields = {
  __typename?: 'breach_user_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "breach_user" */
export type Breach_User_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Breach_User_Variance_Fields = {
  __typename?: 'breach_user_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  amount_left?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "breach_user" */
export type Breach_User_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  amount_left?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

export type CalculatePenalizeBonusInput = {
  bonus_id: Scalars['Int'];
  type?: InputMaybe<Array<TypeBonus>>;
};

export type CalculatePenalizeBonusOutput = {
  __typename?: 'calculatePenalizeBonusOutput';
  data?: Maybe<Scalars['obj']>;
  total_penalize?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "category_document" */
export type Category_Document = {
  __typename?: 'category_document';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  total_document: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "category_document" */
export type Category_Document_Aggregate = {
  __typename?: 'category_document_aggregate';
  aggregate?: Maybe<Category_Document_Aggregate_Fields>;
  nodes: Array<Category_Document>;
};

/** aggregate fields of "category_document" */
export type Category_Document_Aggregate_Fields = {
  __typename?: 'category_document_aggregate_fields';
  avg?: Maybe<Category_Document_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Category_Document_Max_Fields>;
  min?: Maybe<Category_Document_Min_Fields>;
  stddev?: Maybe<Category_Document_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Document_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Document_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Document_Sum_Fields>;
  var_pop?: Maybe<Category_Document_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Document_Var_Samp_Fields>;
  variance?: Maybe<Category_Document_Variance_Fields>;
};


/** aggregate fields of "category_document" */
export type Category_Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "category_document" */
export type Category_Document_Aggregate_Order_By = {
  avg?: InputMaybe<Category_Document_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Category_Document_Max_Order_By>;
  min?: InputMaybe<Category_Document_Min_Order_By>;
  stddev?: InputMaybe<Category_Document_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Category_Document_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Category_Document_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Category_Document_Sum_Order_By>;
  var_pop?: InputMaybe<Category_Document_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Category_Document_Var_Samp_Order_By>;
  variance?: InputMaybe<Category_Document_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "category_document" */
export type Category_Document_Arr_Rel_Insert_Input = {
  data: Array<Category_Document_Insert_Input>;
  on_conflict?: InputMaybe<Category_Document_On_Conflict>;
};

/** aggregate avg on columns */
export type Category_Document_Avg_Fields = {
  __typename?: 'category_document_avg_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "category_document" */
export type Category_Document_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "category_document". All fields are combined with a logical 'AND'. */
export type Category_Document_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Category_Document_Bool_Exp>>>;
  _not?: InputMaybe<Category_Document_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Category_Document_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  total_document?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "category_document" */
export enum Category_Document_Constraint {
  /** unique or primary key constraint */
  CategoryDocumentNameKey = 'category_document_name_key',
  /** unique or primary key constraint */
  CategoryDocumentPkey = 'category_document_pkey'
}

/** input type for incrementing integer column in table "category_document" */
export type Category_Document_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  total_document?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "category_document" */
export type Category_Document_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  total_document?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Category_Document_Max_Fields = {
  __typename?: 'category_document_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  total_document?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "category_document" */
export type Category_Document_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Category_Document_Min_Fields = {
  __typename?: 'category_document_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  total_document?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "category_document" */
export type Category_Document_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "category_document" */
export type Category_Document_Mutation_Response = {
  __typename?: 'category_document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Category_Document>;
};

/** input type for inserting object relation for remote table "category_document" */
export type Category_Document_Obj_Rel_Insert_Input = {
  data: Category_Document_Insert_Input;
  on_conflict?: InputMaybe<Category_Document_On_Conflict>;
};

/** on conflict condition type for table "category_document" */
export type Category_Document_On_Conflict = {
  constraint: Category_Document_Constraint;
  update_columns: Array<Category_Document_Update_Column>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};

/** ordering options when selecting data from "category_document" */
export type Category_Document_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "category_document" */
export type Category_Document_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "category_document" */
export enum Category_Document_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TotalDocument = 'total_document',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "category_document" */
export type Category_Document_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  total_document?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Category_Document_Stddev_Fields = {
  __typename?: 'category_document_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "category_document" */
export type Category_Document_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Category_Document_Stddev_Pop_Fields = {
  __typename?: 'category_document_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "category_document" */
export type Category_Document_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Category_Document_Stddev_Samp_Fields = {
  __typename?: 'category_document_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "category_document" */
export type Category_Document_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Category_Document_Sum_Fields = {
  __typename?: 'category_document_sum_fields';
  id?: Maybe<Scalars['Int']>;
  total_document?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "category_document" */
export type Category_Document_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** update columns of table "category_document" */
export enum Category_Document_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TotalDocument = 'total_document',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Category_Document_Var_Pop_Fields = {
  __typename?: 'category_document_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "category_document" */
export type Category_Document_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Category_Document_Var_Samp_Fields = {
  __typename?: 'category_document_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "category_document" */
export type Category_Document_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Category_Document_Variance_Fields = {
  __typename?: 'category_document_variance_fields';
  id?: Maybe<Scalars['Float']>;
  total_document?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "category_document" */
export type Category_Document_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  total_document?: InputMaybe<Order_By>;
};

/**
 * a collection of change office request made by sales, rets, will be approved by approver. When this request is approved,  its status will be changed to 'confirmed' and user's office will be change to the office which has target_office_id
 *
 *
 * columns and relationships of "change_office_request"
 *
 */
export type Change_Office_Request = {
  __typename?: 'change_office_request';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  issuer: Profile;
  issuer_id: Scalars['String'];
  /** An object relationship */
  office: Office;
  reason?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  target_office_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "change_office_request" */
export type Change_Office_Request_Aggregate = {
  __typename?: 'change_office_request_aggregate';
  aggregate?: Maybe<Change_Office_Request_Aggregate_Fields>;
  nodes: Array<Change_Office_Request>;
};

/** aggregate fields of "change_office_request" */
export type Change_Office_Request_Aggregate_Fields = {
  __typename?: 'change_office_request_aggregate_fields';
  avg?: Maybe<Change_Office_Request_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Change_Office_Request_Max_Fields>;
  min?: Maybe<Change_Office_Request_Min_Fields>;
  stddev?: Maybe<Change_Office_Request_Stddev_Fields>;
  stddev_pop?: Maybe<Change_Office_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Change_Office_Request_Stddev_Samp_Fields>;
  sum?: Maybe<Change_Office_Request_Sum_Fields>;
  var_pop?: Maybe<Change_Office_Request_Var_Pop_Fields>;
  var_samp?: Maybe<Change_Office_Request_Var_Samp_Fields>;
  variance?: Maybe<Change_Office_Request_Variance_Fields>;
};


/** aggregate fields of "change_office_request" */
export type Change_Office_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "change_office_request" */
export type Change_Office_Request_Aggregate_Order_By = {
  avg?: InputMaybe<Change_Office_Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Change_Office_Request_Max_Order_By>;
  min?: InputMaybe<Change_Office_Request_Min_Order_By>;
  stddev?: InputMaybe<Change_Office_Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Change_Office_Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Change_Office_Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Change_Office_Request_Sum_Order_By>;
  var_pop?: InputMaybe<Change_Office_Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Change_Office_Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Change_Office_Request_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "change_office_request" */
export type Change_Office_Request_Arr_Rel_Insert_Input = {
  data: Array<Change_Office_Request_Insert_Input>;
  on_conflict?: InputMaybe<Change_Office_Request_On_Conflict>;
};

/** aggregate avg on columns */
export type Change_Office_Request_Avg_Fields = {
  __typename?: 'change_office_request_avg_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "change_office_request" */
export type Change_Office_Request_Avg_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "change_office_request". All fields are combined with a logical 'AND'. */
export type Change_Office_Request_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Change_Office_Request_Bool_Exp>>>;
  _not?: InputMaybe<Change_Office_Request_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Change_Office_Request_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issuer?: InputMaybe<Profile_Bool_Exp>;
  issuer_id?: InputMaybe<String_Comparison_Exp>;
  office?: InputMaybe<Office_Bool_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  target_office_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "change_office_request" */
export enum Change_Office_Request_Constraint {
  /** unique or primary key constraint */
  ChangeOfficeRequestPkey = 'change_office_request_pkey'
}

/** input type for incrementing integer column in table "change_office_request" */
export type Change_Office_Request_Inc_Input = {
  target_office_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "change_office_request" */
export type Change_Office_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  issuer?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  issuer_id?: InputMaybe<Scalars['String']>;
  office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  target_office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Change_Office_Request_Max_Fields = {
  __typename?: 'change_office_request_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  issuer_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "change_office_request" */
export type Change_Office_Request_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  target_office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Change_Office_Request_Min_Fields = {
  __typename?: 'change_office_request_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  issuer_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "change_office_request" */
export type Change_Office_Request_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  target_office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "change_office_request" */
export type Change_Office_Request_Mutation_Response = {
  __typename?: 'change_office_request_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Change_Office_Request>;
};

/** input type for inserting object relation for remote table "change_office_request" */
export type Change_Office_Request_Obj_Rel_Insert_Input = {
  data: Change_Office_Request_Insert_Input;
  on_conflict?: InputMaybe<Change_Office_Request_On_Conflict>;
};

/** on conflict condition type for table "change_office_request" */
export type Change_Office_Request_On_Conflict = {
  constraint: Change_Office_Request_Constraint;
  update_columns: Array<Change_Office_Request_Update_Column>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};

/** ordering options when selecting data from "change_office_request" */
export type Change_Office_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer?: InputMaybe<Profile_Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  office?: InputMaybe<Office_Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  target_office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "change_office_request" */
export type Change_Office_Request_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "change_office_request" */
export enum Change_Office_Request_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  Reason = 'reason',
  /** column name */
  Status = 'status',
  /** column name */
  TargetOfficeId = 'target_office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "change_office_request" */
export type Change_Office_Request_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  issuer_id?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  target_office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Change_Office_Request_Stddev_Fields = {
  __typename?: 'change_office_request_stddev_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "change_office_request" */
export type Change_Office_Request_Stddev_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Change_Office_Request_Stddev_Pop_Fields = {
  __typename?: 'change_office_request_stddev_pop_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "change_office_request" */
export type Change_Office_Request_Stddev_Pop_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Change_Office_Request_Stddev_Samp_Fields = {
  __typename?: 'change_office_request_stddev_samp_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "change_office_request" */
export type Change_Office_Request_Stddev_Samp_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Change_Office_Request_Sum_Fields = {
  __typename?: 'change_office_request_sum_fields';
  target_office_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "change_office_request" */
export type Change_Office_Request_Sum_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** update columns of table "change_office_request" */
export enum Change_Office_Request_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  Reason = 'reason',
  /** column name */
  Status = 'status',
  /** column name */
  TargetOfficeId = 'target_office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Change_Office_Request_Var_Pop_Fields = {
  __typename?: 'change_office_request_var_pop_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "change_office_request" */
export type Change_Office_Request_Var_Pop_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Change_Office_Request_Var_Samp_Fields = {
  __typename?: 'change_office_request_var_samp_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "change_office_request" */
export type Change_Office_Request_Var_Samp_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Change_Office_Request_Variance_Fields = {
  __typename?: 'change_office_request_variance_fields';
  target_office_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "change_office_request" */
export type Change_Office_Request_Variance_Order_By = {
  target_office_id?: InputMaybe<Order_By>;
};

export type CheckNationalCardOutput = {
  __typename?: 'checkNationalCardOutput';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** columns and relationships of "city" */
export type City = {
  __typename?: 'city';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  offices: Array<Office>;
  /** An aggregated array relationship */
  offices_aggregate: Office_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "city" */
export type CityOfficesArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** columns and relationships of "city" */
export type CityOffices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};

/** aggregated selection of "city" */
export type City_Aggregate = {
  __typename?: 'city_aggregate';
  aggregate?: Maybe<City_Aggregate_Fields>;
  nodes: Array<City>;
};

/** aggregate fields of "city" */
export type City_Aggregate_Fields = {
  __typename?: 'city_aggregate_fields';
  avg?: Maybe<City_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<City_Max_Fields>;
  min?: Maybe<City_Min_Fields>;
  stddev?: Maybe<City_Stddev_Fields>;
  stddev_pop?: Maybe<City_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<City_Stddev_Samp_Fields>;
  sum?: Maybe<City_Sum_Fields>;
  var_pop?: Maybe<City_Var_Pop_Fields>;
  var_samp?: Maybe<City_Var_Samp_Fields>;
  variance?: Maybe<City_Variance_Fields>;
};


/** aggregate fields of "city" */
export type City_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<City_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "city" */
export type City_Aggregate_Order_By = {
  avg?: InputMaybe<City_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<City_Max_Order_By>;
  min?: InputMaybe<City_Min_Order_By>;
  stddev?: InputMaybe<City_Stddev_Order_By>;
  stddev_pop?: InputMaybe<City_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<City_Stddev_Samp_Order_By>;
  sum?: InputMaybe<City_Sum_Order_By>;
  var_pop?: InputMaybe<City_Var_Pop_Order_By>;
  var_samp?: InputMaybe<City_Var_Samp_Order_By>;
  variance?: InputMaybe<City_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "city" */
export type City_Arr_Rel_Insert_Input = {
  data: Array<City_Insert_Input>;
  on_conflict?: InputMaybe<City_On_Conflict>;
};

/** aggregate avg on columns */
export type City_Avg_Fields = {
  __typename?: 'city_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "city" */
export type City_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "city". All fields are combined with a logical 'AND'. */
export type City_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<City_Bool_Exp>>>;
  _not?: InputMaybe<City_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<City_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  offices?: InputMaybe<Office_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "city" */
export enum City_Constraint {
  /** unique or primary key constraint */
  CityPkey = 'city_pkey'
}

/** input type for incrementing integer column in table "city" */
export type City_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "city" */
export type City_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offices?: InputMaybe<Office_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type City_Max_Fields = {
  __typename?: 'city_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "city" */
export type City_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type City_Min_Fields = {
  __typename?: 'city_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "city" */
export type City_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "city" */
export type City_Mutation_Response = {
  __typename?: 'city_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<City>;
};

/** input type for inserting object relation for remote table "city" */
export type City_Obj_Rel_Insert_Input = {
  data: City_Insert_Input;
  on_conflict?: InputMaybe<City_On_Conflict>;
};

/** on conflict condition type for table "city" */
export type City_On_Conflict = {
  constraint: City_Constraint;
  update_columns: Array<City_Update_Column>;
  where?: InputMaybe<City_Bool_Exp>;
};

/** ordering options when selecting data from "city" */
export type City_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  offices_aggregate?: InputMaybe<Office_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "city" */
export type City_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "city" */
export enum City_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "city" */
export type City_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type City_Stddev_Fields = {
  __typename?: 'city_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "city" */
export type City_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type City_Stddev_Pop_Fields = {
  __typename?: 'city_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "city" */
export type City_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type City_Stddev_Samp_Fields = {
  __typename?: 'city_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "city" */
export type City_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type City_Sum_Fields = {
  __typename?: 'city_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "city" */
export type City_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "city" */
export enum City_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type City_Var_Pop_Fields = {
  __typename?: 'city_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "city" */
export type City_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type City_Var_Samp_Fields = {
  __typename?: 'city_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "city" */
export type City_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type City_Variance_Fields = {
  __typename?: 'city_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "city" */
export type City_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export enum Core_PreferredPayment {
  Nl = 'nl',
  Ppd = 'ppd'
}

export type CronUpdateBonusOutput = {
  __typename?: 'cronUpdateBonusOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "crypto_transaction" */
export type Crypto_Transaction = {
  __typename?: 'crypto_transaction';
  amount: Scalars['float8'];
  /** An object relationship */
  bonus: Bonus;
  bonus_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  receiver: Profile;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id: Scalars['String'];
  /** An object relationship */
  sender?: Maybe<Profile>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "crypto_transaction" */
export type Crypto_Transaction_Aggregate = {
  __typename?: 'crypto_transaction_aggregate';
  aggregate?: Maybe<Crypto_Transaction_Aggregate_Fields>;
  nodes: Array<Crypto_Transaction>;
};

/** aggregate fields of "crypto_transaction" */
export type Crypto_Transaction_Aggregate_Fields = {
  __typename?: 'crypto_transaction_aggregate_fields';
  avg?: Maybe<Crypto_Transaction_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Crypto_Transaction_Max_Fields>;
  min?: Maybe<Crypto_Transaction_Min_Fields>;
  stddev?: Maybe<Crypto_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Crypto_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crypto_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Crypto_Transaction_Sum_Fields>;
  var_pop?: Maybe<Crypto_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Crypto_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Crypto_Transaction_Variance_Fields>;
};


/** aggregate fields of "crypto_transaction" */
export type Crypto_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "crypto_transaction" */
export type Crypto_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Crypto_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Crypto_Transaction_Max_Order_By>;
  min?: InputMaybe<Crypto_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Crypto_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Crypto_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Crypto_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Crypto_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Crypto_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Crypto_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Crypto_Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "crypto_transaction" */
export type Crypto_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Crypto_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Crypto_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Crypto_Transaction_Avg_Fields = {
  __typename?: 'crypto_transaction_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "crypto_transaction". All fields are combined with a logical 'AND'. */
export type Crypto_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Crypto_Transaction_Bool_Exp>>>;
  _not?: InputMaybe<Crypto_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Crypto_Transaction_Bool_Exp>>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  bonus?: InputMaybe<Bonus_Bool_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  receiver?: InputMaybe<Profile_Bool_Exp>;
  receiver_address?: InputMaybe<String_Comparison_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Profile_Bool_Exp>;
  sender_address?: InputMaybe<String_Comparison_Exp>;
  sender_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "crypto_transaction" */
export enum Crypto_Transaction_Constraint {
  /** unique or primary key constraint */
  CryptoTransactionPkey = 'crypto_transaction_pkey'
}

/** input type for incrementing integer column in table "crypto_transaction" */
export type Crypto_Transaction_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "crypto_transaction" */
export type Crypto_Transaction_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  receiver_address?: InputMaybe<Scalars['String']>;
  receiver_id?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Crypto_Transaction_Max_Fields = {
  __typename?: 'crypto_transaction_max_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_address?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Crypto_Transaction_Min_Fields = {
  __typename?: 'crypto_transaction_min_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_address?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "crypto_transaction" */
export type Crypto_Transaction_Mutation_Response = {
  __typename?: 'crypto_transaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Crypto_Transaction>;
};

/** input type for inserting object relation for remote table "crypto_transaction" */
export type Crypto_Transaction_Obj_Rel_Insert_Input = {
  data: Crypto_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Crypto_Transaction_On_Conflict>;
};

/** on conflict condition type for table "crypto_transaction" */
export type Crypto_Transaction_On_Conflict = {
  constraint: Crypto_Transaction_Constraint;
  update_columns: Array<Crypto_Transaction_Update_Column>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};

/** ordering options when selecting data from "crypto_transaction" */
export type Crypto_Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Bonus_Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Profile_Order_By>;
  receiver_address?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Profile_Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "crypto_transaction" */
export type Crypto_Transaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "crypto_transaction" */
export enum Crypto_Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "crypto_transaction" */
export type Crypto_Transaction_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver_address?: InputMaybe<Scalars['String']>;
  receiver_id?: InputMaybe<Scalars['String']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Crypto_Transaction_Stddev_Fields = {
  __typename?: 'crypto_transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Crypto_Transaction_Stddev_Pop_Fields = {
  __typename?: 'crypto_transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Crypto_Transaction_Stddev_Samp_Fields = {
  __typename?: 'crypto_transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Crypto_Transaction_Sum_Fields = {
  __typename?: 'crypto_transaction_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "crypto_transaction" */
export enum Crypto_Transaction_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Crypto_Transaction_Var_Pop_Fields = {
  __typename?: 'crypto_transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Crypto_Transaction_Var_Samp_Fields = {
  __typename?: 'crypto_transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Crypto_Transaction_Variance_Fields = {
  __typename?: 'crypto_transaction_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "crypto_transaction" */
export type Crypto_Transaction_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

export type DeleteOfficeOutput = {
  __typename?: 'deleteOfficeOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type DeleteSampleOfficeOutput = {
  __typename?: 'deleteSampleOfficeOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type DeleteTeamOutput = {
  __typename?: 'deleteTeamOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "document" */
export type Document = {
  __typename?: 'document';
  /** An object relationship */
  category_document: Category_Document;
  category_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  link_document: Scalars['String'];
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "document" */
export type Document_Aggregate = {
  __typename?: 'document_aggregate';
  aggregate?: Maybe<Document_Aggregate_Fields>;
  nodes: Array<Document>;
};

/** aggregate fields of "document" */
export type Document_Aggregate_Fields = {
  __typename?: 'document_aggregate_fields';
  avg?: Maybe<Document_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Max_Fields>;
  min?: Maybe<Document_Min_Fields>;
  stddev?: Maybe<Document_Stddev_Fields>;
  stddev_pop?: Maybe<Document_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Document_Stddev_Samp_Fields>;
  sum?: Maybe<Document_Sum_Fields>;
  var_pop?: Maybe<Document_Var_Pop_Fields>;
  var_samp?: Maybe<Document_Var_Samp_Fields>;
  variance?: Maybe<Document_Variance_Fields>;
};


/** aggregate fields of "document" */
export type Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document" */
export type Document_Aggregate_Order_By = {
  avg?: InputMaybe<Document_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Document_Max_Order_By>;
  min?: InputMaybe<Document_Min_Order_By>;
  stddev?: InputMaybe<Document_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Document_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Document_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Document_Sum_Order_By>;
  var_pop?: InputMaybe<Document_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Document_Var_Samp_Order_By>;
  variance?: InputMaybe<Document_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "document" */
export type Document_Arr_Rel_Insert_Input = {
  data: Array<Document_Insert_Input>;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};

/** aggregate avg on columns */
export type Document_Avg_Fields = {
  __typename?: 'document_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document" */
export type Document_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type Document_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Document_Bool_Exp>>>;
  _not?: InputMaybe<Document_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Document_Bool_Exp>>>;
  category_document?: InputMaybe<Category_Document_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  link_document?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "document" */
export enum Document_Constraint {
  /** unique or primary key constraint */
  DoucumentPkey = 'doucument_pkey'
}

/** input type for incrementing integer column in table "document" */
export type Document_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "document" */
export type Document_Insert_Input = {
  category_document?: InputMaybe<Category_Document_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  link_document?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Document_Max_Fields = {
  __typename?: 'document_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  link_document?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "document" */
export type Document_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_document?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Min_Fields = {
  __typename?: 'document_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  link_document?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "document" */
export type Document_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_document?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "document" */
export type Document_Mutation_Response = {
  __typename?: 'document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document>;
};

/** input type for inserting object relation for remote table "document" */
export type Document_Obj_Rel_Insert_Input = {
  data: Document_Insert_Input;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};

/** on conflict condition type for table "document" */
export type Document_On_Conflict = {
  constraint: Document_Constraint;
  update_columns: Array<Document_Update_Column>;
  where?: InputMaybe<Document_Bool_Exp>;
};

/** ordering options when selecting data from "document" */
export type Document_Order_By = {
  category_document?: InputMaybe<Category_Document_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_document?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "document" */
export type Document_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "document" */
export enum Document_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LinkDocument = 'link_document',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "document" */
export type Document_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  link_document?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Document_Stddev_Fields = {
  __typename?: 'document_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document" */
export type Document_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Document_Stddev_Pop_Fields = {
  __typename?: 'document_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document" */
export type Document_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Document_Stddev_Samp_Fields = {
  __typename?: 'document_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document" */
export type Document_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Document_Sum_Fields = {
  __typename?: 'document_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "document" */
export type Document_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "document" */
export enum Document_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LinkDocument = 'link_document',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Document_Var_Pop_Fields = {
  __typename?: 'document_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document" */
export type Document_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Document_Var_Samp_Fields = {
  __typename?: 'document_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document" */
export type Document_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Document_Variance_Fields = {
  __typename?: 'document_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document" */
export type Document_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "docusign" */
export type Docusign = {
  __typename?: 'docusign';
  access_token: Scalars['String'];
  id: Scalars['Int'];
  refresh_token: Scalars['String'];
};

/** aggregated selection of "docusign" */
export type Docusign_Aggregate = {
  __typename?: 'docusign_aggregate';
  aggregate?: Maybe<Docusign_Aggregate_Fields>;
  nodes: Array<Docusign>;
};

/** aggregate fields of "docusign" */
export type Docusign_Aggregate_Fields = {
  __typename?: 'docusign_aggregate_fields';
  avg?: Maybe<Docusign_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Docusign_Max_Fields>;
  min?: Maybe<Docusign_Min_Fields>;
  stddev?: Maybe<Docusign_Stddev_Fields>;
  stddev_pop?: Maybe<Docusign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Docusign_Stddev_Samp_Fields>;
  sum?: Maybe<Docusign_Sum_Fields>;
  var_pop?: Maybe<Docusign_Var_Pop_Fields>;
  var_samp?: Maybe<Docusign_Var_Samp_Fields>;
  variance?: Maybe<Docusign_Variance_Fields>;
};


/** aggregate fields of "docusign" */
export type Docusign_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Docusign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "docusign" */
export type Docusign_Aggregate_Order_By = {
  avg?: InputMaybe<Docusign_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Docusign_Max_Order_By>;
  min?: InputMaybe<Docusign_Min_Order_By>;
  stddev?: InputMaybe<Docusign_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Docusign_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Docusign_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Docusign_Sum_Order_By>;
  var_pop?: InputMaybe<Docusign_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Docusign_Var_Samp_Order_By>;
  variance?: InputMaybe<Docusign_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "docusign" */
export type Docusign_Arr_Rel_Insert_Input = {
  data: Array<Docusign_Insert_Input>;
  on_conflict?: InputMaybe<Docusign_On_Conflict>;
};

/** aggregate avg on columns */
export type Docusign_Avg_Fields = {
  __typename?: 'docusign_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "docusign" */
export type Docusign_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "docusign". All fields are combined with a logical 'AND'. */
export type Docusign_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Docusign_Bool_Exp>>>;
  _not?: InputMaybe<Docusign_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Docusign_Bool_Exp>>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "docusign" */
export enum Docusign_Constraint {
  /** unique or primary key constraint */
  DocusignPkey = 'docusign_pkey'
}

/** input type for incrementing integer column in table "docusign" */
export type Docusign_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "docusign" */
export type Docusign_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  refresh_token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Docusign_Max_Fields = {
  __typename?: 'docusign_max_fields';
  access_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "docusign" */
export type Docusign_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Docusign_Min_Fields = {
  __typename?: 'docusign_min_fields';
  access_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "docusign" */
export type Docusign_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "docusign" */
export type Docusign_Mutation_Response = {
  __typename?: 'docusign_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Docusign>;
};

/** input type for inserting object relation for remote table "docusign" */
export type Docusign_Obj_Rel_Insert_Input = {
  data: Docusign_Insert_Input;
  on_conflict?: InputMaybe<Docusign_On_Conflict>;
};

/** on conflict condition type for table "docusign" */
export type Docusign_On_Conflict = {
  constraint: Docusign_Constraint;
  update_columns: Array<Docusign_Update_Column>;
  where?: InputMaybe<Docusign_Bool_Exp>;
};

/** ordering options when selecting data from "docusign" */
export type Docusign_Order_By = {
  access_token?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "docusign" */
export type Docusign_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "docusign" */
export enum Docusign_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  Id = 'id',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "docusign" */
export type Docusign_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  refresh_token?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Docusign_Stddev_Fields = {
  __typename?: 'docusign_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "docusign" */
export type Docusign_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Docusign_Stddev_Pop_Fields = {
  __typename?: 'docusign_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "docusign" */
export type Docusign_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Docusign_Stddev_Samp_Fields = {
  __typename?: 'docusign_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "docusign" */
export type Docusign_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Docusign_Sum_Fields = {
  __typename?: 'docusign_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "docusign" */
export type Docusign_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "docusign" */
export enum Docusign_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  Id = 'id',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** aggregate var_pop on columns */
export type Docusign_Var_Pop_Fields = {
  __typename?: 'docusign_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "docusign" */
export type Docusign_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Docusign_Var_Samp_Fields = {
  __typename?: 'docusign_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "docusign" */
export type Docusign_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Docusign_Variance_Fields = {
  __typename?: 'docusign_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "docusign" */
export type Docusign_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx = {
  __typename?: 'exported_bonus_xlsx';
  created_at: Scalars['timestamptz'];
  download_status: Scalars['String'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** A computed field, executes function "get_xlsx_url" */
  uploaded_url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Aggregate = {
  __typename?: 'exported_bonus_xlsx_aggregate';
  aggregate?: Maybe<Exported_Bonus_Xlsx_Aggregate_Fields>;
  nodes: Array<Exported_Bonus_Xlsx>;
};

/** aggregate fields of "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Aggregate_Fields = {
  __typename?: 'exported_bonus_xlsx_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Exported_Bonus_Xlsx_Max_Fields>;
  min?: Maybe<Exported_Bonus_Xlsx_Min_Fields>;
};


/** aggregate fields of "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exported_Bonus_Xlsx_Max_Order_By>;
  min?: InputMaybe<Exported_Bonus_Xlsx_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Arr_Rel_Insert_Input = {
  data: Array<Exported_Bonus_Xlsx_Insert_Input>;
  on_conflict?: InputMaybe<Exported_Bonus_Xlsx_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exported_bonus_xlsx". All fields are combined with a logical 'AND'. */
export type Exported_Bonus_Xlsx_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>>>;
  _not?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  download_status?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exported_bonus_xlsx" */
export enum Exported_Bonus_Xlsx_Constraint {
  /** unique or primary key constraint */
  ExportedBonusXlsxPkey = 'exported_bonus_xlsx_pkey'
}

/** input type for inserting data into table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  download_status?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Exported_Bonus_Xlsx_Max_Fields = {
  __typename?: 'exported_bonus_xlsx_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  download_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  download_status?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exported_Bonus_Xlsx_Min_Fields = {
  __typename?: 'exported_bonus_xlsx_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  download_status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  download_status?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Mutation_Response = {
  __typename?: 'exported_bonus_xlsx_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Exported_Bonus_Xlsx>;
};

/** input type for inserting object relation for remote table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Obj_Rel_Insert_Input = {
  data: Exported_Bonus_Xlsx_Insert_Input;
  on_conflict?: InputMaybe<Exported_Bonus_Xlsx_On_Conflict>;
};

/** on conflict condition type for table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_On_Conflict = {
  constraint: Exported_Bonus_Xlsx_Constraint;
  update_columns: Array<Exported_Bonus_Xlsx_Update_Column>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};

/** ordering options when selecting data from "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Order_By = {
  created_at?: InputMaybe<Order_By>;
  download_status?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "exported_bonus_xlsx" */
export enum Exported_Bonus_Xlsx_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DownloadStatus = 'download_status',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exported_bonus_xlsx" */
export type Exported_Bonus_Xlsx_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  download_status?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "exported_bonus_xlsx" */
export enum Exported_Bonus_Xlsx_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DownloadStatus = 'download_status',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Filter_Actual_Transferred_Crypto_Args = {
  ppd_from?: InputMaybe<Scalars['float8']>;
  ppd_to?: InputMaybe<Scalars['float8']>;
};

export type Filter_Blacklist_Conversation_Message_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_Bonus_Args = {
  criteria?: InputMaybe<Scalars['String']>;
  ppd_from?: InputMaybe<Scalars['float8']>;
  ppd_to?: InputMaybe<Scalars['float8']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  transferred_date_from?: InputMaybe<Scalars['bigint']>;
  transferred_date_to?: InputMaybe<Scalars['bigint']>;
};

export type Filter_Bonus_Multisend_Args = {
  criteria?: InputMaybe<Scalars['String']>;
  ppd_from?: InputMaybe<Scalars['float8']>;
  ppd_to?: InputMaybe<Scalars['float8']>;
};

export type Filter_Breach_User_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_History_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_Office_V2_Args = {
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_Profile_V2_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_Review_Withdrawal_Request_Args = {
  search?: InputMaybe<Scalars['String']>;
};

export type Filter_Teams_V2_Args = {
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

export type GetBalanceNganLuongOutput = {
  __typename?: 'getBalanceNganLuongOutput';
  data?: Maybe<Array<Maybe<Scalars['data']>>>;
};

export type GetBonusLeaderOutput = {
  __typename?: 'getBonusLeaderOutput';
  data?: Maybe<Array<Maybe<Scalars['RenderedObject']>>>;
  numBonus?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type GetBonusOfficeAdminOutput = {
  __typename?: 'getBonusOfficeAdminOutput';
  data?: Maybe<Scalars['RenderedObjectBonusOffice']>;
};

export type GetBonusOfficeApproverOutput = {
  __typename?: 'getBonusOfficeApproverOutput';
  data?: Maybe<Scalars['RenderedObjectBonusOffice']>;
};

export type GetManagerOutput = {
  __typename?: 'getManagerOutput';
  data?: Maybe<Scalars['Data']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetOfficeWithMemberMinMaxOutput = {
  __typename?: 'getOfficeWithMemberMinMaxOutput';
  data?: Maybe<Array<Maybe<Scalars['RenderedObjectOfficeMinMax']>>>;
  numElement?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type GetOfficeWithMemberOutput = {
  __typename?: 'getOfficeWithMemberOutput';
  data?: Maybe<Scalars['RenderedObjectOffice']>;
  message?: Maybe<Scalars['String']>;
  status_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Get_Exported_Bonus_Xlsx_Args = {
  direction?: InputMaybe<Scalars['String']>;
};

export type GetmanageAvailableOutput = {
  __typename?: 'getmanageAvailableOutput';
  data?: Maybe<Array<Maybe<Scalars['Object']>>>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "history" */
export type History = {
  __typename?: 'history';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  new_value?: Maybe<Scalars['jsonb']>;
  old_value?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  profile_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  updated_profile?: Maybe<Profile>;
  updated_profile_id?: Maybe<Scalars['String']>;
  variance_data?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "history" */
export type HistoryNew_ValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "history" */
export type HistoryOld_ValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "history" */
export type HistoryVariance_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "history" */
export type History_Aggregate = {
  __typename?: 'history_aggregate';
  aggregate?: Maybe<History_Aggregate_Fields>;
  nodes: Array<History>;
};

/** aggregate fields of "history" */
export type History_Aggregate_Fields = {
  __typename?: 'history_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<History_Max_Fields>;
  min?: Maybe<History_Min_Fields>;
};


/** aggregate fields of "history" */
export type History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "history" */
export type History_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<History_Max_Order_By>;
  min?: InputMaybe<History_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type History_Append_Input = {
  new_value?: InputMaybe<Scalars['jsonb']>;
  old_value?: InputMaybe<Scalars['jsonb']>;
  variance_data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "history" */
export type History_Arr_Rel_Insert_Input = {
  data: Array<History_Insert_Input>;
  on_conflict?: InputMaybe<History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "history". All fields are combined with a logical 'AND'. */
export type History_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<History_Bool_Exp>>>;
  _not?: InputMaybe<History_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<History_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  new_value?: InputMaybe<Jsonb_Comparison_Exp>;
  old_value?: InputMaybe<Jsonb_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_profile?: InputMaybe<Profile_Bool_Exp>;
  updated_profile_id?: InputMaybe<String_Comparison_Exp>;
  variance_data?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "history" */
export enum History_Constraint {
  /** unique or primary key constraint */
  HistoryPkey = 'history_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type History_Delete_At_Path_Input = {
  new_value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  old_value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variance_data?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type History_Delete_Elem_Input = {
  new_value?: InputMaybe<Scalars['Int']>;
  old_value?: InputMaybe<Scalars['Int']>;
  variance_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type History_Delete_Key_Input = {
  new_value?: InputMaybe<Scalars['String']>;
  old_value?: InputMaybe<Scalars['String']>;
  variance_data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "history" */
export type History_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  new_value?: InputMaybe<Scalars['jsonb']>;
  old_value?: InputMaybe<Scalars['jsonb']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  updated_profile_id?: InputMaybe<Scalars['String']>;
  variance_data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type History_Max_Fields = {
  __typename?: 'history_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_profile_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "history" */
export type History_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_profile_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type History_Min_Fields = {
  __typename?: 'history_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_profile_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "history" */
export type History_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_profile_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "history" */
export type History_Mutation_Response = {
  __typename?: 'history_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<History>;
};

/** input type for inserting object relation for remote table "history" */
export type History_Obj_Rel_Insert_Input = {
  data: History_Insert_Input;
  on_conflict?: InputMaybe<History_On_Conflict>;
};

/** on conflict condition type for table "history" */
export type History_On_Conflict = {
  constraint: History_Constraint;
  update_columns: Array<History_Update_Column>;
  where?: InputMaybe<History_Bool_Exp>;
};

/** ordering options when selecting data from "history" */
export type History_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_value?: InputMaybe<Order_By>;
  old_value?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_profile?: InputMaybe<Profile_Order_By>;
  updated_profile_id?: InputMaybe<Order_By>;
  variance_data?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "history" */
export type History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type History_Prepend_Input = {
  new_value?: InputMaybe<Scalars['jsonb']>;
  old_value?: InputMaybe<Scalars['jsonb']>;
  variance_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "history" */
export enum History_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NewValue = 'new_value',
  /** column name */
  OldValue = 'old_value',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedProfileId = 'updated_profile_id',
  /** column name */
  VarianceData = 'variance_data'
}

/** input type for updating data in table "history" */
export type History_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  new_value?: InputMaybe<Scalars['jsonb']>;
  old_value?: InputMaybe<Scalars['jsonb']>;
  profile_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_profile_id?: InputMaybe<Scalars['String']>;
  variance_data?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "history" */
export enum History_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NewValue = 'new_value',
  /** column name */
  OldValue = 'old_value',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedProfileId = 'updated_profile_id',
  /** column name */
  VarianceData = 'variance_data'
}

export type ImportRelationshipOutput = {
  __typename?: 'importRelationshipOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type ImportUserToKeycloakOutput = {
  __typename?: 'importUserToKeycloakOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "income" */
export type Income = {
  __typename?: 'income';
  airtable_id: Scalars['String'];
  amount?: Maybe<Scalars['float8']>;
  approved_by_id: Scalars['String'];
  banned_until: Scalars['timestamptz'];
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  link_pdf: Scalars['String'];
  month: Scalars['Int'];
  requested_at?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  transfer_data: Scalars['jsonb'];
  transfer_option: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  year: Scalars['Int'];
};


/** columns and relationships of "income" */
export type IncomeTransfer_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "income" */
export type Income_Aggregate = {
  __typename?: 'income_aggregate';
  aggregate?: Maybe<Income_Aggregate_Fields>;
  nodes: Array<Income>;
};

/** aggregate fields of "income" */
export type Income_Aggregate_Fields = {
  __typename?: 'income_aggregate_fields';
  avg?: Maybe<Income_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Income_Max_Fields>;
  min?: Maybe<Income_Min_Fields>;
  stddev?: Maybe<Income_Stddev_Fields>;
  stddev_pop?: Maybe<Income_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Income_Stddev_Samp_Fields>;
  sum?: Maybe<Income_Sum_Fields>;
  var_pop?: Maybe<Income_Var_Pop_Fields>;
  var_samp?: Maybe<Income_Var_Samp_Fields>;
  variance?: Maybe<Income_Variance_Fields>;
};


/** aggregate fields of "income" */
export type Income_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Income_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "income" */
export type Income_Aggregate_Order_By = {
  avg?: InputMaybe<Income_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Income_Max_Order_By>;
  min?: InputMaybe<Income_Min_Order_By>;
  stddev?: InputMaybe<Income_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Income_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Income_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Income_Sum_Order_By>;
  var_pop?: InputMaybe<Income_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Income_Var_Samp_Order_By>;
  variance?: InputMaybe<Income_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Income_Append_Input = {
  transfer_data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "income" */
export type Income_Arr_Rel_Insert_Input = {
  data: Array<Income_Insert_Input>;
  on_conflict?: InputMaybe<Income_On_Conflict>;
};

/** aggregate avg on columns */
export type Income_Avg_Fields = {
  __typename?: 'income_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "income" */
export type Income_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "income". All fields are combined with a logical 'AND'. */
export type Income_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Income_Bool_Exp>>>;
  _not?: InputMaybe<Income_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Income_Bool_Exp>>>;
  airtable_id?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  approved_by_id?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  bonus_manage?: InputMaybe<Int_Comparison_Exp>;
  bonus_sale_manage?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  link_pdf?: InputMaybe<String_Comparison_Exp>;
  month?: InputMaybe<Int_Comparison_Exp>;
  requested_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transfer_data?: InputMaybe<Jsonb_Comparison_Exp>;
  transfer_option?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "income" */
export enum Income_Constraint {
  /** unique or primary key constraint */
  IncomePkey = 'income_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Income_Delete_At_Path_Input = {
  transfer_data?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Income_Delete_Elem_Input = {
  transfer_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Income_Delete_Key_Input = {
  transfer_data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "income" */
export type Income_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "income" */
export type Income_Insert_Input = {
  airtable_id?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['float8']>;
  approved_by_id?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  link_pdf?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['Int']>;
  requested_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  transfer_data?: InputMaybe<Scalars['jsonb']>;
  transfer_option?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Income_Max_Fields = {
  __typename?: 'income_max_fields';
  airtable_id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  approved_by_id?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  link_pdf?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  requested_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  transfer_option?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "income" */
export type Income_Max_Order_By = {
  airtable_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  approved_by_id?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_pdf?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transfer_option?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Income_Min_Fields = {
  __typename?: 'income_min_fields';
  airtable_id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  approved_by_id?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  link_pdf?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  requested_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  transfer_option?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "income" */
export type Income_Min_Order_By = {
  airtable_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  approved_by_id?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_pdf?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transfer_option?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "income" */
export type Income_Mutation_Response = {
  __typename?: 'income_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Income>;
};

/** input type for inserting object relation for remote table "income" */
export type Income_Obj_Rel_Insert_Input = {
  data: Income_Insert_Input;
  on_conflict?: InputMaybe<Income_On_Conflict>;
};

/** on conflict condition type for table "income" */
export type Income_On_Conflict = {
  constraint: Income_Constraint;
  update_columns: Array<Income_Update_Column>;
  where?: InputMaybe<Income_Bool_Exp>;
};

/** ordering options when selecting data from "income" */
export type Income_Order_By = {
  airtable_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  approved_by_id?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link_pdf?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transfer_data?: InputMaybe<Order_By>;
  transfer_option?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "income" */
export type Income_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Income_Prepend_Input = {
  transfer_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "income" */
export enum Income_Select_Column {
  /** column name */
  AirtableId = 'airtable_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  ApprovedById = 'approved_by_id',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  BonusManage = 'bonus_manage',
  /** column name */
  BonusSaleManage = 'bonus_sale_manage',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LinkPdf = 'link_pdf',
  /** column name */
  Month = 'month',
  /** column name */
  RequestedAt = 'requested_at',
  /** column name */
  Status = 'status',
  /** column name */
  TransferData = 'transfer_data',
  /** column name */
  TransferOption = 'transfer_option',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "income" */
export type Income_Set_Input = {
  airtable_id?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['float8']>;
  approved_by_id?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  bonus_manage?: InputMaybe<Scalars['Int']>;
  bonus_sale_manage?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  link_pdf?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['Int']>;
  requested_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  transfer_data?: InputMaybe<Scalars['jsonb']>;
  transfer_option?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Income_Stddev_Fields = {
  __typename?: 'income_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "income" */
export type Income_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Income_Stddev_Pop_Fields = {
  __typename?: 'income_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "income" */
export type Income_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Income_Stddev_Samp_Fields = {
  __typename?: 'income_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "income" */
export type Income_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Income_Sum_Fields = {
  __typename?: 'income_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  bonus_manage?: Maybe<Scalars['Int']>;
  bonus_sale_manage?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "income" */
export type Income_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** update columns of table "income" */
export enum Income_Update_Column {
  /** column name */
  AirtableId = 'airtable_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  ApprovedById = 'approved_by_id',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  BonusManage = 'bonus_manage',
  /** column name */
  BonusSaleManage = 'bonus_sale_manage',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LinkPdf = 'link_pdf',
  /** column name */
  Month = 'month',
  /** column name */
  RequestedAt = 'requested_at',
  /** column name */
  Status = 'status',
  /** column name */
  TransferData = 'transfer_data',
  /** column name */
  TransferOption = 'transfer_option',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Income_Var_Pop_Fields = {
  __typename?: 'income_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "income" */
export type Income_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Income_Var_Samp_Fields = {
  __typename?: 'income_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "income" */
export type Income_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Income_Variance_Fields = {
  __typename?: 'income_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  bonus_manage?: Maybe<Scalars['Float']>;
  bonus_sale_manage?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "income" */
export type Income_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_manage?: InputMaybe<Order_By>;
  bonus_sale_manage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

export type InsertTeamCustomOutput = {
  __typename?: 'insertTeamCustomOutput';
  data?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type InsertTeamOutput = {
  __typename?: 'insertTeamOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

export type MassUpdateUserOutput = {
  __typename?: 'massUpdateUserOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "actionName" */
  actionName?: Maybe<SampleOutput>;
  /** perform the action: "addCity" */
  addCity?: Maybe<CityOutput>;
  /** perform the action: "addPassword" */
  addPassword?: Maybe<AddPasswordOutput>;
  /** perform the action: "addReport" */
  addReport?: Maybe<AddReportOutput>;
  /** perform the action: "addReportForBonus" */
  addReportForBonus?: Maybe<AddReportOutput>;
  /** perform the action: "addSampleOffice" */
  addSampleOffice?: Maybe<AddSampleOfficeOutput>;
  /** perform the action: "addTeam" */
  addTeam?: Maybe<TeamOutput>;
  /** perform the action: "addUser" */
  addUser?: Maybe<AddUserOutput>;
  add_team_and_reassign_members: Nq_Team_Response;
  /** perform the action: "adminUpdateUser" */
  adminUpdateUser?: Maybe<AdminUpdateUserOutput>;
  /** perform the action: "approverGetListBonus" */
  approverGetListBonus?: Maybe<ApproverGetListBonusOutput>;
  /** perform the action: "approverGetListBonus2" */
  approverGetListBonus2?: Maybe<ApproverGetListBonus2Output>;
  /** perform the action: "approverGetListSalary" */
  approverGetListSalary?: Maybe<ApproverGetListSalaryOutput>;
  /** perform the action: "bannedUser" */
  bannedUser?: Maybe<BannedUserOutput>;
  /** perform the action: "bonusList" */
  bonusList?: Maybe<BonusListOutput>;
  changeProfileStatusGql: Nq_Profile_Response;
  /** perform the action: "changeVerifiedStatus" */
  changeVerifiedStatus?: Maybe<UpdateVerifiedStatusOutput>;
  /** perform the action: "checkUserProfile" */
  checkUserProfile?: Maybe<OutputCheckUserProfile>;
  count_transferred_data: Scalars['Int'];
  createManyNq_review_withdrawal_request_dtos: Array<Nq_Review_Withdrawal_Request_Dto>;
  createOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_Dto;
  create_announcement: Nq_Announcement_Response;
  create_bonus_blacklist: BonusBlacklistResponse;
  create_offices: Nq_Office_Response;
  /** perform the action: "cronUpdateBonus" */
  cronUpdateBonus?: Maybe<CronUpdateBonusOutput>;
  /** perform the action: "cronUpdateUser" */
  cronUpdateUser?: Maybe<OutputCronUpdateUser>;
  custom_update_team: Nq_Team_Response;
  deleteManyNq_review_withdrawal_request_dtos: DeleteManyResponse;
  /** perform the action: "deleteOffice" */
  deleteOffice?: Maybe<DeleteOfficeOutput>;
  deleteOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_DtoDeleteResponse;
  /** perform the action: "deleteSampleOffice" */
  deleteSampleOffice?: Maybe<DeleteSampleOfficeOutput>;
  /** perform the action: "deleteTeam" */
  deleteTeam?: Maybe<DeleteTeamOutput>;
  /** perform the action: "deleteUser" */
  deleteUser?: Maybe<DeleteOutput>;
  /** perform the action: "deleteUserFile" */
  deleteUserFile?: Maybe<OutDeleteUserFile>;
  /** perform the action: "deleteUserKeyCloak" */
  deleteUserKeyCloak?: Maybe<OutputDelete>;
  /** delete data from the table: "actual_transferred_crypto" */
  delete_actual_transferred_crypto?: Maybe<Actual_Transferred_Crypto_Mutation_Response>;
  /** delete single row from the table: "actual_transferred_crypto" */
  delete_actual_transferred_crypto_by_pk?: Maybe<Actual_Transferred_Crypto>;
  /** delete data from the table: "announcement" */
  delete_announcement?: Maybe<Announcement_Mutation_Response>;
  /** delete single row from the table: "announcement" */
  delete_announcement_by_pk?: Maybe<Announcement>;
  /** delete data from the table: "approver_office" */
  delete_approver_office?: Maybe<Approver_Office_Mutation_Response>;
  /** delete single row from the table: "approver_office" */
  delete_approver_office_by_pk?: Maybe<Approver_Office>;
  /** delete data from the table: "bank" */
  delete_bank?: Maybe<Bank_Mutation_Response>;
  /** delete data from the table: "bank_account" */
  delete_bank_account?: Maybe<Bank_Account_Mutation_Response>;
  /** delete single row from the table: "bank_account" */
  delete_bank_account_by_pk?: Maybe<Bank_Account>;
  /** delete single row from the table: "bank" */
  delete_bank_by_pk?: Maybe<Bank>;
  /** delete data from the table: "bank_error" */
  delete_bank_error?: Maybe<Bank_Error_Mutation_Response>;
  /** delete single row from the table: "bank_error" */
  delete_bank_error_by_pk?: Maybe<Bank_Error>;
  /** delete data from the table: "blacklist_conversation_message" */
  delete_blacklist_conversation_message?: Maybe<Blacklist_Conversation_Message_Mutation_Response>;
  /** delete single row from the table: "blacklist_conversation_message" */
  delete_blacklist_conversation_message_by_pk?: Maybe<Blacklist_Conversation_Message>;
  /** delete data from the table: "blacklist_history" */
  delete_blacklist_history?: Maybe<Blacklist_History_Mutation_Response>;
  /** delete single row from the table: "blacklist_history" */
  delete_blacklist_history_by_pk?: Maybe<Blacklist_History>;
  /** delete data from the table: "bonus" */
  delete_bonus?: Maybe<Bonus_Mutation_Response>;
  /** delete data from the table: "bonus_blacklist" */
  delete_bonus_blacklist?: Maybe<Bonus_Blacklist_Mutation_Response>;
  /** delete single row from the table: "bonus_blacklist" */
  delete_bonus_blacklist_by_pk?: Maybe<Bonus_Blacklist>;
  /** delete single row from the table: "bonus" */
  delete_bonus_by_pk?: Maybe<Bonus>;
  /** delete data from the table: "bonus_fee_history" */
  delete_bonus_fee_history?: Maybe<Bonus_Fee_History_Mutation_Response>;
  /** delete single row from the table: "bonus_fee_history" */
  delete_bonus_fee_history_by_pk?: Maybe<Bonus_Fee_History>;
  /** delete data from the table: "bonus_office_rule" */
  delete_bonus_office_rule?: Maybe<Bonus_Office_Rule_Mutation_Response>;
  /** delete single row from the table: "bonus_office_rule" */
  delete_bonus_office_rule_by_pk?: Maybe<Bonus_Office_Rule>;
  /** delete data from the table: "bonus_type" */
  delete_bonus_type?: Maybe<Bonus_Type_Mutation_Response>;
  /** delete single row from the table: "bonus_type" */
  delete_bonus_type_by_pk?: Maybe<Bonus_Type>;
  /** delete data from the table: "breach_user" */
  delete_breach_user?: Maybe<Breach_User_Mutation_Response>;
  /** delete single row from the table: "breach_user" */
  delete_breach_user_by_pk?: Maybe<Breach_User>;
  /** delete data from the table: "category_document" */
  delete_category_document?: Maybe<Category_Document_Mutation_Response>;
  /** delete single row from the table: "category_document" */
  delete_category_document_by_pk?: Maybe<Category_Document>;
  /** delete data from the table: "change_office_request" */
  delete_change_office_request?: Maybe<Change_Office_Request_Mutation_Response>;
  /** delete single row from the table: "change_office_request" */
  delete_change_office_request_by_pk?: Maybe<Change_Office_Request>;
  /** delete data from the table: "city" */
  delete_city?: Maybe<City_Mutation_Response>;
  /** delete single row from the table: "city" */
  delete_city_by_pk?: Maybe<City>;
  /** delete data from the table: "crypto_transaction" */
  delete_crypto_transaction?: Maybe<Crypto_Transaction_Mutation_Response>;
  /** delete single row from the table: "crypto_transaction" */
  delete_crypto_transaction_by_pk?: Maybe<Crypto_Transaction>;
  /** delete data from the table: "document" */
  delete_document?: Maybe<Document_Mutation_Response>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete data from the table: "docusign" */
  delete_docusign?: Maybe<Docusign_Mutation_Response>;
  /** delete single row from the table: "docusign" */
  delete_docusign_by_pk?: Maybe<Docusign>;
  /** delete data from the table: "exported_bonus_xlsx" */
  delete_exported_bonus_xlsx?: Maybe<Exported_Bonus_Xlsx_Mutation_Response>;
  /** delete single row from the table: "exported_bonus_xlsx" */
  delete_exported_bonus_xlsx_by_pk?: Maybe<Exported_Bonus_Xlsx>;
  /** delete data from the table: "history" */
  delete_history?: Maybe<History_Mutation_Response>;
  /** delete single row from the table: "history" */
  delete_history_by_pk?: Maybe<History>;
  /** delete data from the table: "income" */
  delete_income?: Maybe<Income_Mutation_Response>;
  /** delete single row from the table: "income" */
  delete_income_by_pk?: Maybe<Income>;
  /** delete data from the table: "ngan_luong_transaction" */
  delete_ngan_luong_transaction?: Maybe<Ngan_Luong_Transaction_Mutation_Response>;
  /** delete single row from the table: "ngan_luong_transaction" */
  delete_ngan_luong_transaction_by_pk?: Maybe<Ngan_Luong_Transaction>;
  /** delete data from the table: "ninepay_transaction" */
  delete_ninepay_transaction?: Maybe<Ninepay_Transaction_Mutation_Response>;
  /** delete single row from the table: "ninepay_transaction" */
  delete_ninepay_transaction_by_pk?: Maybe<Ninepay_Transaction>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "office" */
  delete_office?: Maybe<Office_Mutation_Response>;
  /** delete data from the table: "office_announcement" */
  delete_office_announcement?: Maybe<Office_Announcement_Mutation_Response>;
  /** delete single row from the table: "office_announcement" */
  delete_office_announcement_by_pk?: Maybe<Office_Announcement>;
  /** delete single row from the table: "office" */
  delete_office_by_pk?: Maybe<Office>;
  /** delete data from the table: "office_rule" */
  delete_office_rule?: Maybe<Office_Rule_Mutation_Response>;
  /** delete single row from the table: "office_rule" */
  delete_office_rule_by_pk?: Maybe<Office_Rule>;
  /** delete data from the table: "payment_method" */
  delete_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** delete single row from the table: "payment_method" */
  delete_payment_method_by_pk?: Maybe<Payment_Method>;
  /** delete data from the table: "penalize_user" */
  delete_penalize_user?: Maybe<Penalize_User_Mutation_Response>;
  /** delete single row from the table: "penalize_user" */
  delete_penalize_user_by_pk?: Maybe<Penalize_User>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<Profile_Mutation_Response>;
  /** delete single row from the table: "profile" */
  delete_profile_by_pk?: Maybe<Profile>;
  /** delete data from the table: "relationship" */
  delete_relationship?: Maybe<Relationship_Mutation_Response>;
  /** delete single row from the table: "relationship" */
  delete_relationship_by_pk?: Maybe<Relationship>;
  /** delete data from the table: "report" */
  delete_report?: Maybe<Report_Mutation_Response>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>;
  /** delete data from the table: "report_rely" */
  delete_report_rely?: Maybe<Report_Rely_Mutation_Response>;
  /** delete single row from the table: "report_rely" */
  delete_report_rely_by_pk?: Maybe<Report_Rely>;
  /** delete data from the table: "review_withdrawal_request" */
  delete_review_withdrawal_request?: Maybe<Review_Withdrawal_Request_Mutation_Response>;
  /** delete single row from the table: "review_withdrawal_request" */
  delete_review_withdrawal_request_by_pk?: Maybe<Review_Withdrawal_Request>;
  /** delete data from the table: "seen_announcement" */
  delete_seen_announcement?: Maybe<Seen_Announcement_Mutation_Response>;
  /** delete single row from the table: "seen_announcement" */
  delete_seen_announcement_by_pk?: Maybe<Seen_Announcement>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** delete data from the table: "verify_history" */
  delete_verify_history?: Maybe<Verify_History_Mutation_Response>;
  /** delete single row from the table: "verify_history" */
  delete_verify_history_by_pk?: Maybe<Verify_History>;
  /** delete data from the table: "verify_type" */
  delete_verify_type?: Maybe<Verify_Type_Mutation_Response>;
  /** delete single row from the table: "verify_type" */
  delete_verify_type_by_pk?: Maybe<Verify_Type>;
  /** delete data from the table: "withdrawal_request" */
  delete_withdrawal_request?: Maybe<Withdrawal_Request_Mutation_Response>;
  /** delete single row from the table: "withdrawal_request" */
  delete_withdrawal_request_by_pk?: Maybe<Withdrawal_Request>;
  /** perform the action: "exportCsv" */
  exportCsv?: Maybe<ExportCsvOutput>;
  /** perform the action: "exportOfficeCsv" */
  exportOfficeCsv?: Maybe<ExportOfficeCsvOutput>;
  /** perform the action: "exportTeamCsv" */
  exportTeamCsv?: Maybe<ExportTeamCsvOutput>;
  /** perform the action: "exportUserCsv" */
  exportUserCsv?: Maybe<ExportUserCsvOutput>;
  /** perform the action: "forceSync" */
  forceSync?: Maybe<ForceOutput>;
  forceSyncGql: ForceSyncResponse;
  /** perform the action: "importDataFromAirTable" */
  importDataFromAirTable?: Maybe<ResultImport>;
  /** perform the action: "importProfile" */
  importProfile?: Maybe<Result>;
  /** perform the action: "importRelationship" */
  importRelationship?: Maybe<ImportRelationshipOutput>;
  /** perform the action: "importUserToKeycloak" */
  importUserToKeycloak?: Maybe<ImportUserToKeycloakOutput>;
  /** perform the action: "import_data_from_airtable" */
  import_data_from_airtable?: Maybe<InportDataFromAirtableOutput>;
  /** perform the action: "insertTeam" */
  insertTeam?: Maybe<InsertTeamOutput>;
  /** perform the action: "insertTeamCustom" */
  insertTeamCustom?: Maybe<InsertTeamCustomOutput>;
  /** insert data into the table: "actual_transferred_crypto" */
  insert_actual_transferred_crypto?: Maybe<Actual_Transferred_Crypto_Mutation_Response>;
  /** insert a single row into the table: "actual_transferred_crypto" */
  insert_actual_transferred_crypto_one?: Maybe<Actual_Transferred_Crypto>;
  /** insert data into the table: "announcement" */
  insert_announcement?: Maybe<Announcement_Mutation_Response>;
  /** insert a single row into the table: "announcement" */
  insert_announcement_one?: Maybe<Announcement>;
  /** insert data into the table: "approver_office" */
  insert_approver_office?: Maybe<Approver_Office_Mutation_Response>;
  /** insert a single row into the table: "approver_office" */
  insert_approver_office_one?: Maybe<Approver_Office>;
  /** insert data into the table: "bank" */
  insert_bank?: Maybe<Bank_Mutation_Response>;
  /** insert data into the table: "bank_account" */
  insert_bank_account?: Maybe<Bank_Account_Mutation_Response>;
  /** insert a single row into the table: "bank_account" */
  insert_bank_account_one?: Maybe<Bank_Account>;
  /** insert data into the table: "bank_error" */
  insert_bank_error?: Maybe<Bank_Error_Mutation_Response>;
  /** insert a single row into the table: "bank_error" */
  insert_bank_error_one?: Maybe<Bank_Error>;
  /** insert a single row into the table: "bank" */
  insert_bank_one?: Maybe<Bank>;
  /** insert data into the table: "blacklist_conversation_message" */
  insert_blacklist_conversation_message?: Maybe<Blacklist_Conversation_Message_Mutation_Response>;
  /** insert a single row into the table: "blacklist_conversation_message" */
  insert_blacklist_conversation_message_one?: Maybe<Blacklist_Conversation_Message>;
  /** insert data into the table: "blacklist_history" */
  insert_blacklist_history?: Maybe<Blacklist_History_Mutation_Response>;
  /** insert a single row into the table: "blacklist_history" */
  insert_blacklist_history_one?: Maybe<Blacklist_History>;
  /** insert data into the table: "bonus" */
  insert_bonus?: Maybe<Bonus_Mutation_Response>;
  /** insert data into the table: "bonus_blacklist" */
  insert_bonus_blacklist?: Maybe<Bonus_Blacklist_Mutation_Response>;
  /** insert a single row into the table: "bonus_blacklist" */
  insert_bonus_blacklist_one?: Maybe<Bonus_Blacklist>;
  /** insert data into the table: "bonus_fee_history" */
  insert_bonus_fee_history?: Maybe<Bonus_Fee_History_Mutation_Response>;
  /** insert a single row into the table: "bonus_fee_history" */
  insert_bonus_fee_history_one?: Maybe<Bonus_Fee_History>;
  /** insert data into the table: "bonus_office_rule" */
  insert_bonus_office_rule?: Maybe<Bonus_Office_Rule_Mutation_Response>;
  /** insert a single row into the table: "bonus_office_rule" */
  insert_bonus_office_rule_one?: Maybe<Bonus_Office_Rule>;
  /** insert a single row into the table: "bonus" */
  insert_bonus_one?: Maybe<Bonus>;
  /** insert data into the table: "bonus_type" */
  insert_bonus_type?: Maybe<Bonus_Type_Mutation_Response>;
  /** insert a single row into the table: "bonus_type" */
  insert_bonus_type_one?: Maybe<Bonus_Type>;
  /** insert data into the table: "breach_user" */
  insert_breach_user?: Maybe<Breach_User_Mutation_Response>;
  /** insert a single row into the table: "breach_user" */
  insert_breach_user_one?: Maybe<Breach_User>;
  /** insert data into the table: "category_document" */
  insert_category_document?: Maybe<Category_Document_Mutation_Response>;
  /** insert a single row into the table: "category_document" */
  insert_category_document_one?: Maybe<Category_Document>;
  /** insert data into the table: "change_office_request" */
  insert_change_office_request?: Maybe<Change_Office_Request_Mutation_Response>;
  /** insert a single row into the table: "change_office_request" */
  insert_change_office_request_one?: Maybe<Change_Office_Request>;
  /** insert data into the table: "city" */
  insert_city?: Maybe<City_Mutation_Response>;
  /** insert a single row into the table: "city" */
  insert_city_one?: Maybe<City>;
  /** insert data into the table: "crypto_transaction" */
  insert_crypto_transaction?: Maybe<Crypto_Transaction_Mutation_Response>;
  /** insert a single row into the table: "crypto_transaction" */
  insert_crypto_transaction_one?: Maybe<Crypto_Transaction>;
  /** insert data into the table: "document" */
  insert_document?: Maybe<Document_Mutation_Response>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<Document>;
  /** insert data into the table: "docusign" */
  insert_docusign?: Maybe<Docusign_Mutation_Response>;
  /** insert a single row into the table: "docusign" */
  insert_docusign_one?: Maybe<Docusign>;
  /** insert data into the table: "exported_bonus_xlsx" */
  insert_exported_bonus_xlsx?: Maybe<Exported_Bonus_Xlsx_Mutation_Response>;
  /** insert a single row into the table: "exported_bonus_xlsx" */
  insert_exported_bonus_xlsx_one?: Maybe<Exported_Bonus_Xlsx>;
  /** insert data into the table: "history" */
  insert_history?: Maybe<History_Mutation_Response>;
  /** insert a single row into the table: "history" */
  insert_history_one?: Maybe<History>;
  /** insert data into the table: "income" */
  insert_income?: Maybe<Income_Mutation_Response>;
  /** insert a single row into the table: "income" */
  insert_income_one?: Maybe<Income>;
  /** insert data into the table: "ngan_luong_transaction" */
  insert_ngan_luong_transaction?: Maybe<Ngan_Luong_Transaction_Mutation_Response>;
  /** insert a single row into the table: "ngan_luong_transaction" */
  insert_ngan_luong_transaction_one?: Maybe<Ngan_Luong_Transaction>;
  /** insert data into the table: "ninepay_transaction" */
  insert_ninepay_transaction?: Maybe<Ninepay_Transaction_Mutation_Response>;
  /** insert a single row into the table: "ninepay_transaction" */
  insert_ninepay_transaction_one?: Maybe<Ninepay_Transaction>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "office" */
  insert_office?: Maybe<Office_Mutation_Response>;
  /** insert data into the table: "office_announcement" */
  insert_office_announcement?: Maybe<Office_Announcement_Mutation_Response>;
  /** insert a single row into the table: "office_announcement" */
  insert_office_announcement_one?: Maybe<Office_Announcement>;
  /** insert a single row into the table: "office" */
  insert_office_one?: Maybe<Office>;
  /** insert data into the table: "office_rule" */
  insert_office_rule?: Maybe<Office_Rule_Mutation_Response>;
  /** insert a single row into the table: "office_rule" */
  insert_office_rule_one?: Maybe<Office_Rule>;
  /** insert data into the table: "payment_method" */
  insert_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** insert a single row into the table: "payment_method" */
  insert_payment_method_one?: Maybe<Payment_Method>;
  /** insert data into the table: "penalize_user" */
  insert_penalize_user?: Maybe<Penalize_User_Mutation_Response>;
  /** insert a single row into the table: "penalize_user" */
  insert_penalize_user_one?: Maybe<Penalize_User>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "relationship" */
  insert_relationship?: Maybe<Relationship_Mutation_Response>;
  /** insert a single row into the table: "relationship" */
  insert_relationship_one?: Maybe<Relationship>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<Report_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>;
  /** insert data into the table: "report_rely" */
  insert_report_rely?: Maybe<Report_Rely_Mutation_Response>;
  /** insert a single row into the table: "report_rely" */
  insert_report_rely_one?: Maybe<Report_Rely>;
  /** insert data into the table: "review_withdrawal_request" */
  insert_review_withdrawal_request?: Maybe<Review_Withdrawal_Request_Mutation_Response>;
  /** insert a single row into the table: "review_withdrawal_request" */
  insert_review_withdrawal_request_one?: Maybe<Review_Withdrawal_Request>;
  /** insert data into the table: "seen_announcement" */
  insert_seen_announcement?: Maybe<Seen_Announcement_Mutation_Response>;
  /** insert a single row into the table: "seen_announcement" */
  insert_seen_announcement_one?: Maybe<Seen_Announcement>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** insert data into the table: "verify_history" */
  insert_verify_history?: Maybe<Verify_History_Mutation_Response>;
  /** insert a single row into the table: "verify_history" */
  insert_verify_history_one?: Maybe<Verify_History>;
  /** insert data into the table: "verify_type" */
  insert_verify_type?: Maybe<Verify_Type_Mutation_Response>;
  /** insert a single row into the table: "verify_type" */
  insert_verify_type_one?: Maybe<Verify_Type>;
  /** insert data into the table: "withdrawal_request" */
  insert_withdrawal_request?: Maybe<Withdrawal_Request_Mutation_Response>;
  /** insert a single row into the table: "withdrawal_request" */
  insert_withdrawal_request_one?: Maybe<Withdrawal_Request>;
  mark_bonus_as_transferred_with_crypto: Scalars['String'];
  massUpdateProfile: Nq_Mass_Update_Profile_Response;
  /** perform the action: "massUpdateUser" */
  massUpdateUser?: Maybe<MassUpdateUserOutput>;
  /** perform the action: "migrateBank" */
  migrateBank?: Maybe<BankMigrateOutput>;
  /** perform the action: "migrateEmptyBonus" */
  migrateEmptyBonus?: Maybe<MigrateBonusOutput>;
  /** perform the action: "migrateTotalWithdrawal" */
  migrateTotalWithdrawal?: Maybe<MigrateOutput>;
  nonTransactionalUpdateProfile: Nq_Mass_Update_Profile_Response;
  /** perform the action: "officeList" */
  officeList?: Maybe<OfficeListOutput>;
  process_change_office: ChangeOfficeResponse;
  /** perform the action: "replaceUser" */
  replaceUser?: Maybe<AddUserOutput>;
  /** perform the action: "requestBonus" */
  requestBonus?: Maybe<RequestBonusOutput>;
  /** perform the action: "requestBonus2" */
  requestBonus2?: Maybe<RequestBonus2Output>;
  /** perform the action: "requestSalary" */
  requestSalary?: Maybe<RequestSalaryOutput>;
  /** perform the action: "resendEmail" */
  resendEmail?: Maybe<ResendEmailOutput>;
  /** perform the action: "resetPassword" */
  resetPassword?: Maybe<ResetPasswordOutput>;
  /** perform the action: "seedingBanks" */
  seedingBanks?: Maybe<SeedingBanksOutput>;
  /** perform the action: "sendDocument" */
  sendDocument?: Maybe<SendDocumentOutput>;
  /** perform the action: "sendMail" */
  sendMail?: Maybe<SendMailOutput>;
  /** perform the action: "signUp" */
  signUp?: Maybe<SignUpOutput>;
  signup: Nq_Profile_Response;
  /** perform the action: "syncBreachAirtable" */
  syncBreachAirtable?: Maybe<SyncBreachAirtableOutput>;
  synchronize_airtable_base: Nq_Synchronize_Airtable_Base_Response;
  /** perform the action: "teamList" */
  teamList?: Maybe<TeamListOutput>;
  /** perform the action: "testBody" */
  testBody?: Maybe<TestBodyOutput>;
  /** perform the action: "updateBonus" */
  updateBonus?: Maybe<OutputBonuforUpdate>;
  /** perform the action: "updateBonus2" */
  updateBonus2?: Maybe<OutputBonu2forUpdate>;
  updateManyNq_review_withdrawal_request_dtos: UpdateManyResponse;
  updateOneNq_review_withdrawal_request_dto: Nq_Review_Withdrawal_Request_Dto;
  /** perform the action: "updateRole" */
  updateRole?: Maybe<ResultUpdateRole>;
  /** perform the action: "updateSalary" */
  updateSalary?: Maybe<OutputSalaryforUpdate>;
  /** perform the action: "updateStatus" */
  updateStatus?: Maybe<ResultUpdateStatus>;
  /** perform the action: "updateTeam" */
  updateTeam?: Maybe<InsertTeamOutput>;
  /** perform the action: "updateTeamCustom" */
  updateTeamCustom?: Maybe<UpdateTeamCustomOutput>;
  /** perform the action: "updateUser" */
  updateUser?: Maybe<UpdateUserProfileOutput>;
  /** perform the action: "updateUserTeamAndOffice" */
  updateUserTeamAndOffice?: Maybe<UpdateUserOutput>;
  /** perform the action: "updateUserTeamAndOfficeUsingAirtable" */
  updateUserTeamAndOfficeUsingAirtable?: Maybe<UpdateUsingAirtableOutput>;
  /** update data of the table: "actual_transferred_crypto" */
  update_actual_transferred_crypto?: Maybe<Actual_Transferred_Crypto_Mutation_Response>;
  /** update single row of the table: "actual_transferred_crypto" */
  update_actual_transferred_crypto_by_pk?: Maybe<Actual_Transferred_Crypto>;
  /** update data of the table: "announcement" */
  update_announcement?: Maybe<Announcement_Mutation_Response>;
  /** update single row of the table: "announcement" */
  update_announcement_by_pk?: Maybe<Announcement>;
  /** update data of the table: "approver_office" */
  update_approver_office?: Maybe<Approver_Office_Mutation_Response>;
  /** update single row of the table: "approver_office" */
  update_approver_office_by_pk?: Maybe<Approver_Office>;
  /** update data of the table: "bank" */
  update_bank?: Maybe<Bank_Mutation_Response>;
  /** update data of the table: "bank_account" */
  update_bank_account?: Maybe<Bank_Account_Mutation_Response>;
  /** update single row of the table: "bank_account" */
  update_bank_account_by_pk?: Maybe<Bank_Account>;
  /** update single row of the table: "bank" */
  update_bank_by_pk?: Maybe<Bank>;
  /** update data of the table: "bank_error" */
  update_bank_error?: Maybe<Bank_Error_Mutation_Response>;
  /** update single row of the table: "bank_error" */
  update_bank_error_by_pk?: Maybe<Bank_Error>;
  /** update data of the table: "blacklist_conversation_message" */
  update_blacklist_conversation_message?: Maybe<Blacklist_Conversation_Message_Mutation_Response>;
  /** update single row of the table: "blacklist_conversation_message" */
  update_blacklist_conversation_message_by_pk?: Maybe<Blacklist_Conversation_Message>;
  /** update data of the table: "blacklist_history" */
  update_blacklist_history?: Maybe<Blacklist_History_Mutation_Response>;
  /** update single row of the table: "blacklist_history" */
  update_blacklist_history_by_pk?: Maybe<Blacklist_History>;
  /** update data of the table: "bonus" */
  update_bonus?: Maybe<Bonus_Mutation_Response>;
  /** update data of the table: "bonus_blacklist" */
  update_bonus_blacklist?: Maybe<Bonus_Blacklist_Mutation_Response>;
  /** update single row of the table: "bonus_blacklist" */
  update_bonus_blacklist_by_pk?: Maybe<Bonus_Blacklist>;
  /** update single row of the table: "bonus" */
  update_bonus_by_pk?: Maybe<Bonus>;
  /** update data of the table: "bonus_fee_history" */
  update_bonus_fee_history?: Maybe<Bonus_Fee_History_Mutation_Response>;
  /** update single row of the table: "bonus_fee_history" */
  update_bonus_fee_history_by_pk?: Maybe<Bonus_Fee_History>;
  /** update data of the table: "bonus_office_rule" */
  update_bonus_office_rule?: Maybe<Bonus_Office_Rule_Mutation_Response>;
  /** update single row of the table: "bonus_office_rule" */
  update_bonus_office_rule_by_pk?: Maybe<Bonus_Office_Rule>;
  /** update data of the table: "bonus_type" */
  update_bonus_type?: Maybe<Bonus_Type_Mutation_Response>;
  /** update single row of the table: "bonus_type" */
  update_bonus_type_by_pk?: Maybe<Bonus_Type>;
  /** update data of the table: "breach_user" */
  update_breach_user?: Maybe<Breach_User_Mutation_Response>;
  /** update single row of the table: "breach_user" */
  update_breach_user_by_pk?: Maybe<Breach_User>;
  /** update data of the table: "category_document" */
  update_category_document?: Maybe<Category_Document_Mutation_Response>;
  /** update single row of the table: "category_document" */
  update_category_document_by_pk?: Maybe<Category_Document>;
  /** update data of the table: "change_office_request" */
  update_change_office_request?: Maybe<Change_Office_Request_Mutation_Response>;
  /** update single row of the table: "change_office_request" */
  update_change_office_request_by_pk?: Maybe<Change_Office_Request>;
  /** update data of the table: "city" */
  update_city?: Maybe<City_Mutation_Response>;
  /** update single row of the table: "city" */
  update_city_by_pk?: Maybe<City>;
  /** update data of the table: "crypto_transaction" */
  update_crypto_transaction?: Maybe<Crypto_Transaction_Mutation_Response>;
  /** update single row of the table: "crypto_transaction" */
  update_crypto_transaction_by_pk?: Maybe<Crypto_Transaction>;
  /** update data of the table: "document" */
  update_document?: Maybe<Document_Mutation_Response>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update data of the table: "docusign" */
  update_docusign?: Maybe<Docusign_Mutation_Response>;
  /** update single row of the table: "docusign" */
  update_docusign_by_pk?: Maybe<Docusign>;
  /** update data of the table: "exported_bonus_xlsx" */
  update_exported_bonus_xlsx?: Maybe<Exported_Bonus_Xlsx_Mutation_Response>;
  /** update single row of the table: "exported_bonus_xlsx" */
  update_exported_bonus_xlsx_by_pk?: Maybe<Exported_Bonus_Xlsx>;
  /** update data of the table: "history" */
  update_history?: Maybe<History_Mutation_Response>;
  /** update single row of the table: "history" */
  update_history_by_pk?: Maybe<History>;
  /** update data of the table: "income" */
  update_income?: Maybe<Income_Mutation_Response>;
  /** update single row of the table: "income" */
  update_income_by_pk?: Maybe<Income>;
  /** update data of the table: "ngan_luong_transaction" */
  update_ngan_luong_transaction?: Maybe<Ngan_Luong_Transaction_Mutation_Response>;
  /** update single row of the table: "ngan_luong_transaction" */
  update_ngan_luong_transaction_by_pk?: Maybe<Ngan_Luong_Transaction>;
  /** update data of the table: "ninepay_transaction" */
  update_ninepay_transaction?: Maybe<Ninepay_Transaction_Mutation_Response>;
  /** update single row of the table: "ninepay_transaction" */
  update_ninepay_transaction_by_pk?: Maybe<Ninepay_Transaction>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update data of the table: "office" */
  update_office?: Maybe<Office_Mutation_Response>;
  /** update data of the table: "office_announcement" */
  update_office_announcement?: Maybe<Office_Announcement_Mutation_Response>;
  /** update single row of the table: "office_announcement" */
  update_office_announcement_by_pk?: Maybe<Office_Announcement>;
  /** update single row of the table: "office" */
  update_office_by_pk?: Maybe<Office>;
  /** update data of the table: "office_rule" */
  update_office_rule?: Maybe<Office_Rule_Mutation_Response>;
  /** update single row of the table: "office_rule" */
  update_office_rule_by_pk?: Maybe<Office_Rule>;
  update_office_v2: Nq_Update_Office_Response_Dto;
  /** update data of the table: "payment_method" */
  update_payment_method?: Maybe<Payment_Method_Mutation_Response>;
  /** update single row of the table: "payment_method" */
  update_payment_method_by_pk?: Maybe<Payment_Method>;
  /** update data of the table: "penalize_user" */
  update_penalize_user?: Maybe<Penalize_User_Mutation_Response>;
  /** update single row of the table: "penalize_user" */
  update_penalize_user_by_pk?: Maybe<Penalize_User>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update data of the table: "relationship" */
  update_relationship?: Maybe<Relationship_Mutation_Response>;
  /** update single row of the table: "relationship" */
  update_relationship_by_pk?: Maybe<Relationship>;
  /** update data of the table: "report" */
  update_report?: Maybe<Report_Mutation_Response>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>;
  /** update data of the table: "report_rely" */
  update_report_rely?: Maybe<Report_Rely_Mutation_Response>;
  /** update single row of the table: "report_rely" */
  update_report_rely_by_pk?: Maybe<Report_Rely>;
  /** update data of the table: "review_withdrawal_request" */
  update_review_withdrawal_request?: Maybe<Review_Withdrawal_Request_Mutation_Response>;
  /** update single row of the table: "review_withdrawal_request" */
  update_review_withdrawal_request_by_pk?: Maybe<Review_Withdrawal_Request>;
  /** update data of the table: "seen_announcement" */
  update_seen_announcement?: Maybe<Seen_Announcement_Mutation_Response>;
  /** update single row of the table: "seen_announcement" */
  update_seen_announcement_by_pk?: Maybe<Seen_Announcement>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
  /** update data of the table: "verify_history" */
  update_verify_history?: Maybe<Verify_History_Mutation_Response>;
  /** update single row of the table: "verify_history" */
  update_verify_history_by_pk?: Maybe<Verify_History>;
  /** update data of the table: "verify_type" */
  update_verify_type?: Maybe<Verify_Type_Mutation_Response>;
  /** update single row of the table: "verify_type" */
  update_verify_type_by_pk?: Maybe<Verify_Type>;
  /** update data of the table: "withdrawal_request" */
  update_withdrawal_request?: Maybe<Withdrawal_Request_Mutation_Response>;
  /** update single row of the table: "withdrawal_request" */
  update_withdrawal_request_by_pk?: Maybe<Withdrawal_Request>;
  upload_office: Nq_Export_Office_Response;
  upload_team: Nq_Export_Team_Response;
  /** perform the action: "userList" */
  userList?: Maybe<UserListOutput>;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootAddPasswordArgs = {
  newPassword: Scalars['String'];
  userId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAddReportArgs = {
  bonus_date?: InputMaybe<Scalars['String']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  idReport?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  typeReport?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootAddReportForBonusArgs = {
  bonus_date?: InputMaybe<Scalars['String']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  idReport?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  typeReport?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootAddUserArgs = {
  email: Scalars['String'];
  fullname: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role_type?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  team_id?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootAdd_Team_And_Reassign_MembersArgs = {
  input: InsertTeamInput;
};


/** mutation root */
export type Mutation_RootAdminUpdateUserArgs = {
  fullName: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preffered_payment?: InputMaybe<PreferredPayment>;
  role_type?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  team_id?: InputMaybe<Scalars['Int']>;
  user_id: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootApproverGetListBonusArgs = {
  current_page?: InputMaybe<Scalars['Int']>;
  end_day?: InputMaybe<Scalars['String']>;
  list_month_year?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_month?: InputMaybe<Scalars['Int']>;
  max_total?: InputMaybe<Scalars['bigint']>;
  min_month?: InputMaybe<Scalars['Int']>;
  min_total?: InputMaybe<Scalars['bigint']>;
  office_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preferred_payment?: InputMaybe<Array<InputMaybe<PreferredPayment>>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  start_day?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  team_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  type?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootApproverGetListBonus2Args = {
  current_page?: InputMaybe<Scalars['Int']>;
  list_month_year?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_amount?: InputMaybe<Scalars['Int']>;
  min_amount?: InputMaybe<Scalars['Int']>;
  office?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  salary_status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  search?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


/** mutation root */
export type Mutation_RootApproverGetListSalaryArgs = {
  current_page?: InputMaybe<Scalars['Int']>;
  list_month_year?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_amount?: InputMaybe<Scalars['Int']>;
  min_amount?: InputMaybe<Scalars['Int']>;
  office?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  salary_status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  search?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


/** mutation root */
export type Mutation_RootBannedUserArgs = {
  user_id?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootBonusListArgs = {
  current_page?: InputMaybe<Scalars['Int']>;
  end_day?: InputMaybe<Scalars['String']>;
  list_month_year?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_month?: InputMaybe<Scalars['Int']>;
  max_total?: InputMaybe<Scalars['bigint']>;
  min_month?: InputMaybe<Scalars['Int']>;
  min_total?: InputMaybe<Scalars['bigint']>;
  office_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  start_day?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  team_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  type?: InputMaybe<Scalars['Int']>;
  user_list?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  year?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootChangeProfileStatusGqlArgs = {
  input: ChangeProfileStatusArgs;
};


/** mutation root */
export type Mutation_RootChangeVerifiedStatusArgs = {
  body: UpdateVerifiedStatusInput;
};


/** mutation root */
export type Mutation_RootCreateManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: CreateManyNq_Review_Withdrawal_Request_DtosInput;
};


/** mutation root */
export type Mutation_RootCreateOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: CreateOneNq_Review_Withdrawal_Request_DtoInput;
};


/** mutation root */
export type Mutation_RootCreate_AnnouncementArgs = {
  input: CreateAnnouncementInput;
};


/** mutation root */
export type Mutation_RootCreate_Bonus_BlacklistArgs = {
  input: CreateBonusBlacklistInput;
};


/** mutation root */
export type Mutation_RootCreate_OfficesArgs = {
  input: CreateOfficeDto;
};


/** mutation root */
export type Mutation_RootCronUpdateBonusArgs = {
  fieldsToUpdate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nameOffice?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootCronUpdateUserArgs = {
  nameOffice?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootCustom_Update_TeamArgs = {
  input: UpdateTeamInput;
};


/** mutation root */
export type Mutation_RootDeleteManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: DeleteManyNq_Review_Withdrawal_Request_DtosInput;
};


/** mutation root */
export type Mutation_RootDeleteOfficeArgs = {
  office_id?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootDeleteOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: DeleteOneNq_Review_Withdrawal_Request_DtoInput;
};


/** mutation root */
export type Mutation_RootDeleteTeamArgs = {
  team_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteUserFileArgs = {
  type: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Actual_Transferred_CryptoArgs = {
  where: Actual_Transferred_Crypto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actual_Transferred_Crypto_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AnnouncementArgs = {
  where: Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Approver_OfficeArgs = {
  where: Approver_Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Approver_Office_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BankArgs = {
  where: Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_AccountArgs = {
  where: Bank_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_Account_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bank_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bank_ErrorArgs = {
  where: Bank_Error_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_Error_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Blacklist_Conversation_MessageArgs = {
  where: Blacklist_Conversation_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blacklist_Conversation_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Blacklist_HistoryArgs = {
  where: Blacklist_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blacklist_History_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BonusArgs = {
  where: Bonus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bonus_BlacklistArgs = {
  where: Bonus_Blacklist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Blacklist_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bonus_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Fee_HistoryArgs = {
  where: Bonus_Fee_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Fee_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Office_RuleArgs = {
  where: Bonus_Office_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Office_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bonus_TypeArgs = {
  where: Bonus_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bonus_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Breach_UserArgs = {
  where: Breach_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Breach_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Category_DocumentArgs = {
  where: Category_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_Document_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Change_Office_RequestArgs = {
  where: Change_Office_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Change_Office_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CityArgs = {
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_City_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Crypto_TransactionArgs = {
  where: Crypto_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Crypto_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DocumentArgs = {
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DocusignArgs = {
  where: Docusign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Docusign_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Exported_Bonus_XlsxArgs = {
  where: Exported_Bonus_Xlsx_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exported_Bonus_Xlsx_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HistoryArgs = {
  where: History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_IncomeArgs = {
  where: Income_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Income_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ngan_Luong_TransactionArgs = {
  where: Ngan_Luong_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ngan_Luong_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ninepay_TransactionArgs = {
  where: Ninepay_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ninepay_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OfficeArgs = {
  where: Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Office_AnnouncementArgs = {
  where: Office_Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Office_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Office_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Office_RuleArgs = {
  where: Office_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Office_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_MethodArgs = {
  where: Payment_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Method_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Penalize_UserArgs = {
  where: Penalize_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Penalize_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProfileArgs = {
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RelationshipArgs = {
  where: Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Relationship_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ReportArgs = {
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Report_RelyArgs = {
  where: Report_Rely_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_Rely_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Review_Withdrawal_RequestArgs = {
  where: Review_Withdrawal_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_Withdrawal_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Seen_AnnouncementArgs = {
  where: Seen_Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seen_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Verify_HistoryArgs = {
  where: Verify_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verify_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verify_TypeArgs = {
  where: Verify_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verify_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Withdrawal_RequestArgs = {
  where: Withdrawal_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Withdrawal_Request_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootExportCsvArgs = {
  current_page?: InputMaybe<Scalars['Int']>;
  end_day?: InputMaybe<Scalars['String']>;
  list_month_year?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_month?: InputMaybe<Scalars['Int']>;
  max_total?: InputMaybe<Scalars['bigint']>;
  min_month?: InputMaybe<Scalars['Int']>;
  min_total?: InputMaybe<Scalars['bigint']>;
  office_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  start_day?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  team_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  type?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootExportOfficeCsvArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  type_export?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootExportTeamCsvArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  type_export?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootExportUserCsvArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['String']>;
  created_to?: InputMaybe<Scalars['String']>;
  current_page?: InputMaybe<Scalars['Int']>;
  is_black_list?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  number_withdrawals_from?: InputMaybe<Scalars['Int']>;
  number_withdrawals_to?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  type_export?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verified?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootImportDataFromAirTableArgs = {
  nameOffice?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootImport_Data_From_AirtableArgs = {
  office_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertTeamArgs = {
  idOffice: Scalars['Int'];
  managed_by?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootInsertTeamCustomArgs = {
  leader: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  office: Scalars['Int'];
  sales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootInsert_Actual_Transferred_CryptoArgs = {
  objects: Array<Actual_Transferred_Crypto_Insert_Input>;
  on_conflict?: InputMaybe<Actual_Transferred_Crypto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actual_Transferred_Crypto_OneArgs = {
  object: Actual_Transferred_Crypto_Insert_Input;
  on_conflict?: InputMaybe<Actual_Transferred_Crypto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AnnouncementArgs = {
  objects: Array<Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcement_OneArgs = {
  object: Announcement_Insert_Input;
  on_conflict?: InputMaybe<Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Approver_OfficeArgs = {
  objects: Array<Approver_Office_Insert_Input>;
  on_conflict?: InputMaybe<Approver_Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Approver_Office_OneArgs = {
  object: Approver_Office_Insert_Input;
  on_conflict?: InputMaybe<Approver_Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BankArgs = {
  objects: Array<Bank_Insert_Input>;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_AccountArgs = {
  objects: Array<Bank_Account_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_Account_OneArgs = {
  object: Bank_Account_Insert_Input;
  on_conflict?: InputMaybe<Bank_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_ErrorArgs = {
  objects: Array<Bank_Error_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Error_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_Error_OneArgs = {
  object: Bank_Error_Insert_Input;
  on_conflict?: InputMaybe<Bank_Error_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_OneArgs = {
  object: Bank_Insert_Input;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklist_Conversation_MessageArgs = {
  objects: Array<Blacklist_Conversation_Message_Insert_Input>;
  on_conflict?: InputMaybe<Blacklist_Conversation_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklist_Conversation_Message_OneArgs = {
  object: Blacklist_Conversation_Message_Insert_Input;
  on_conflict?: InputMaybe<Blacklist_Conversation_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklist_HistoryArgs = {
  objects: Array<Blacklist_History_Insert_Input>;
  on_conflict?: InputMaybe<Blacklist_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklist_History_OneArgs = {
  object: Blacklist_History_Insert_Input;
  on_conflict?: InputMaybe<Blacklist_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BonusArgs = {
  objects: Array<Bonus_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_BlacklistArgs = {
  objects: Array<Bonus_Blacklist_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Blacklist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Blacklist_OneArgs = {
  object: Bonus_Blacklist_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Blacklist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Fee_HistoryArgs = {
  objects: Array<Bonus_Fee_History_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Fee_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Fee_History_OneArgs = {
  object: Bonus_Fee_History_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Fee_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Office_RuleArgs = {
  objects: Array<Bonus_Office_Rule_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Office_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Office_Rule_OneArgs = {
  object: Bonus_Office_Rule_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Office_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_OneArgs = {
  object: Bonus_Insert_Input;
  on_conflict?: InputMaybe<Bonus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_TypeArgs = {
  objects: Array<Bonus_Type_Insert_Input>;
  on_conflict?: InputMaybe<Bonus_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bonus_Type_OneArgs = {
  object: Bonus_Type_Insert_Input;
  on_conflict?: InputMaybe<Bonus_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Breach_UserArgs = {
  objects: Array<Breach_User_Insert_Input>;
  on_conflict?: InputMaybe<Breach_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Breach_User_OneArgs = {
  object: Breach_User_Insert_Input;
  on_conflict?: InputMaybe<Breach_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_DocumentArgs = {
  objects: Array<Category_Document_Insert_Input>;
  on_conflict?: InputMaybe<Category_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_Document_OneArgs = {
  object: Category_Document_Insert_Input;
  on_conflict?: InputMaybe<Category_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Change_Office_RequestArgs = {
  objects: Array<Change_Office_Request_Insert_Input>;
  on_conflict?: InputMaybe<Change_Office_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Change_Office_Request_OneArgs = {
  object: Change_Office_Request_Insert_Input;
  on_conflict?: InputMaybe<Change_Office_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CityArgs = {
  objects: Array<City_Insert_Input>;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_City_OneArgs = {
  object: City_Insert_Input;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Crypto_TransactionArgs = {
  objects: Array<Crypto_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Crypto_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Crypto_Transaction_OneArgs = {
  object: Crypto_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Crypto_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentArgs = {
  objects: Array<Document_Insert_Input>;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_OneArgs = {
  object: Document_Insert_Input;
  on_conflict?: InputMaybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocusignArgs = {
  objects: Array<Docusign_Insert_Input>;
  on_conflict?: InputMaybe<Docusign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Docusign_OneArgs = {
  object: Docusign_Insert_Input;
  on_conflict?: InputMaybe<Docusign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exported_Bonus_XlsxArgs = {
  objects: Array<Exported_Bonus_Xlsx_Insert_Input>;
  on_conflict?: InputMaybe<Exported_Bonus_Xlsx_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exported_Bonus_Xlsx_OneArgs = {
  object: Exported_Bonus_Xlsx_Insert_Input;
  on_conflict?: InputMaybe<Exported_Bonus_Xlsx_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HistoryArgs = {
  objects: Array<History_Insert_Input>;
  on_conflict?: InputMaybe<History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_History_OneArgs = {
  object: History_Insert_Input;
  on_conflict?: InputMaybe<History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IncomeArgs = {
  objects: Array<Income_Insert_Input>;
  on_conflict?: InputMaybe<Income_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Income_OneArgs = {
  object: Income_Insert_Input;
  on_conflict?: InputMaybe<Income_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ngan_Luong_TransactionArgs = {
  objects: Array<Ngan_Luong_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Ngan_Luong_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ngan_Luong_Transaction_OneArgs = {
  object: Ngan_Luong_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Ngan_Luong_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ninepay_TransactionArgs = {
  objects: Array<Ninepay_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Ninepay_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ninepay_Transaction_OneArgs = {
  object: Ninepay_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Ninepay_Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OfficeArgs = {
  objects: Array<Office_Insert_Input>;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_AnnouncementArgs = {
  objects: Array<Office_Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Office_Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_Announcement_OneArgs = {
  object: Office_Announcement_Insert_Input;
  on_conflict?: InputMaybe<Office_Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_OneArgs = {
  object: Office_Insert_Input;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_RuleArgs = {
  objects: Array<Office_Rule_Insert_Input>;
  on_conflict?: InputMaybe<Office_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_Rule_OneArgs = {
  object: Office_Rule_Insert_Input;
  on_conflict?: InputMaybe<Office_Rule_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_MethodArgs = {
  objects: Array<Payment_Method_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Method_OneArgs = {
  object: Payment_Method_Insert_Input;
  on_conflict?: InputMaybe<Payment_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Penalize_UserArgs = {
  objects: Array<Penalize_User_Insert_Input>;
  on_conflict?: InputMaybe<Penalize_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Penalize_User_OneArgs = {
  object: Penalize_User_Insert_Input;
  on_conflict?: InputMaybe<Penalize_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RelationshipArgs = {
  objects: Array<Relationship_Insert_Input>;
  on_conflict?: InputMaybe<Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Relationship_OneArgs = {
  object: Relationship_Insert_Input;
  on_conflict?: InputMaybe<Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportArgs = {
  objects: Array<Report_Insert_Input>;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_OneArgs = {
  object: Report_Insert_Input;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_RelyArgs = {
  objects: Array<Report_Rely_Insert_Input>;
  on_conflict?: InputMaybe<Report_Rely_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_Rely_OneArgs = {
  object: Report_Rely_Insert_Input;
  on_conflict?: InputMaybe<Report_Rely_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Withdrawal_RequestArgs = {
  objects: Array<Review_Withdrawal_Request_Insert_Input>;
  on_conflict?: InputMaybe<Review_Withdrawal_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_Withdrawal_Request_OneArgs = {
  object: Review_Withdrawal_Request_Insert_Input;
  on_conflict?: InputMaybe<Review_Withdrawal_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seen_AnnouncementArgs = {
  objects: Array<Seen_Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Seen_Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seen_Announcement_OneArgs = {
  object: Seen_Announcement_Insert_Input;
  on_conflict?: InputMaybe<Seen_Announcement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verify_HistoryArgs = {
  objects: Array<Verify_History_Insert_Input>;
  on_conflict?: InputMaybe<Verify_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verify_History_OneArgs = {
  object: Verify_History_Insert_Input;
  on_conflict?: InputMaybe<Verify_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verify_TypeArgs = {
  objects: Array<Verify_Type_Insert_Input>;
  on_conflict?: InputMaybe<Verify_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verify_Type_OneArgs = {
  object: Verify_Type_Insert_Input;
  on_conflict?: InputMaybe<Verify_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Withdrawal_RequestArgs = {
  objects: Array<Withdrawal_Request_Insert_Input>;
  on_conflict?: InputMaybe<Withdrawal_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Withdrawal_Request_OneArgs = {
  object: Withdrawal_Request_Insert_Input;
  on_conflict?: InputMaybe<Withdrawal_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMark_Bonus_As_Transferred_With_CryptoArgs = {
  input: MarkTransferredBonusDto;
};


/** mutation root */
export type Mutation_RootMassUpdateProfileArgs = {
  input: Array<MassUpdateProfileDto>;
};


/** mutation root */
export type Mutation_RootMassUpdateUserArgs = {
  data?: InputMaybe<Array<InputMaybe<MasUpdateUser>>>;
};


/** mutation root */
export type Mutation_RootNonTransactionalUpdateProfileArgs = {
  input: Array<MassUpdateProfileDto>;
};


/** mutation root */
export type Mutation_RootOfficeListArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootProcess_Change_OfficeArgs = {
  input: ProcessChangeOfficeInput;
};


/** mutation root */
export type Mutation_RootReplaceUserArgs = {
  email: Scalars['String'];
  fullname: Scalars['String'];
  managed_by?: InputMaybe<Scalars['String']>;
  role_type: Scalars['Int'];
  team_id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootRequestBonusArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRequestBonus2Args = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRequestSalaryArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootResendEmailArgs = {
  user_id?: InputMaybe<Array<Scalars['String']>>;
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignUpArgs = {
  address_wallet?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<BankAccount>;
  birthday: Scalars['timestamptz'];
  domicile: Scalars['String'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  national_id: Scalars['String'];
  national_id_issue_date: Scalars['timestamptz'];
  ngan_luong_account: Scalars['String'];
  office_id: Scalars['Int'];
  password: Scalars['String'];
  phone: Scalars['String'];
  place_issue_national_id: Scalars['String'];
  preffered_payment: Scalars['String'];
  residence: Scalars['String'];
  role_type?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  input: Nq_Sign_Up;
};


/** mutation root */
export type Mutation_RootSynchronize_Airtable_BaseArgs = {
  input: SynchronizeAirtableBaseInput;
};


/** mutation root */
export type Mutation_RootTeamListArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootTestBodyArgs = {
  city?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdateBonusArgs = {
  content?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<ListBonusId>>>;
  key_9pay?: InputMaybe<Scalars['String']>;
  merchant_id?: InputMaybe<Scalars['String']>;
  merchant_password?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  user_email?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdateBonus2Args = {
  content?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<ListBonusId>>>;
  key_9pay?: InputMaybe<Scalars['String']>;
  merchant_id?: InputMaybe<Scalars['String']>;
  merchant_password?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  user_email?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdateManyNq_Review_Withdrawal_Request_DtosArgs = {
  input: UpdateManyNq_Review_Withdrawal_Request_DtosInput;
};


/** mutation root */
export type Mutation_RootUpdateOneNq_Review_Withdrawal_Request_DtoArgs = {
  input: UpdateOneNq_Review_Withdrawal_Request_DtoInput;
};


/** mutation root */
export type Mutation_RootUpdateRoleArgs = {
  idUserChange: Scalars['String'];
  type: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootUpdateSalaryArgs = {
  content?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<ListSalaryId>>>;
  key_9pay?: InputMaybe<Scalars['String']>;
  merchant_id?: InputMaybe<Scalars['String']>;
  merchant_password?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
  user_email?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdateStatusArgs = {
  active: Scalars['Int'];
  idUser: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateTeamArgs = {
  idOffice: Scalars['Int'];
  idTeam: Scalars['Int'];
  managed_by?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** mutation root */
export type Mutation_RootUpdateTeamCustomArgs = {
  leader: Scalars['String'];
  office: Scalars['Int'];
  sales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  team_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  address_wallet?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<BankAccount>;
  birthday?: InputMaybe<Scalars['timestamptz']>;
  domicile?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  national_id?: InputMaybe<Scalars['String']>;
  national_id_issue_date?: InputMaybe<Scalars['timestamptz']>;
  ngan_luong_acconut?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  place_issue_national_id?: InputMaybe<Scalars['String']>;
  residence?: InputMaybe<Scalars['String']>;
  saler_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootUpdateUserTeamAndOfficeArgs = {
  body: Array<InputMaybe<UpdateUserInput>>;
};


/** mutation root */
export type Mutation_RootUpdateUserTeamAndOfficeUsingAirtableArgs = {
  body: UpdateUsingAirtableInput;
};


/** mutation root */
export type Mutation_RootUpdate_Actual_Transferred_CryptoArgs = {
  _inc?: InputMaybe<Actual_Transferred_Crypto_Inc_Input>;
  _set?: InputMaybe<Actual_Transferred_Crypto_Set_Input>;
  where: Actual_Transferred_Crypto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actual_Transferred_Crypto_By_PkArgs = {
  _inc?: InputMaybe<Actual_Transferred_Crypto_Inc_Input>;
  _set?: InputMaybe<Actual_Transferred_Crypto_Set_Input>;
  pk_columns: Actual_Transferred_Crypto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AnnouncementArgs = {
  _set?: InputMaybe<Announcement_Set_Input>;
  where: Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Announcement_By_PkArgs = {
  _set?: InputMaybe<Announcement_Set_Input>;
  pk_columns: Announcement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Approver_OfficeArgs = {
  _inc?: InputMaybe<Approver_Office_Inc_Input>;
  _set?: InputMaybe<Approver_Office_Set_Input>;
  where: Approver_Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Approver_Office_By_PkArgs = {
  _inc?: InputMaybe<Approver_Office_Inc_Input>;
  _set?: InputMaybe<Approver_Office_Set_Input>;
  pk_columns: Approver_Office_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BankArgs = {
  _set?: InputMaybe<Bank_Set_Input>;
  where: Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_AccountArgs = {
  _set?: InputMaybe<Bank_Account_Set_Input>;
  where: Bank_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_Account_By_PkArgs = {
  _set?: InputMaybe<Bank_Account_Set_Input>;
  pk_columns: Bank_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_By_PkArgs = {
  _set?: InputMaybe<Bank_Set_Input>;
  pk_columns: Bank_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_ErrorArgs = {
  _set?: InputMaybe<Bank_Error_Set_Input>;
  where: Bank_Error_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_Error_By_PkArgs = {
  _set?: InputMaybe<Bank_Error_Set_Input>;
  pk_columns: Bank_Error_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklist_Conversation_MessageArgs = {
  _inc?: InputMaybe<Blacklist_Conversation_Message_Inc_Input>;
  _set?: InputMaybe<Blacklist_Conversation_Message_Set_Input>;
  where: Blacklist_Conversation_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklist_Conversation_Message_By_PkArgs = {
  _inc?: InputMaybe<Blacklist_Conversation_Message_Inc_Input>;
  _set?: InputMaybe<Blacklist_Conversation_Message_Set_Input>;
  pk_columns: Blacklist_Conversation_Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklist_HistoryArgs = {
  _inc?: InputMaybe<Blacklist_History_Inc_Input>;
  _set?: InputMaybe<Blacklist_History_Set_Input>;
  where: Blacklist_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklist_History_By_PkArgs = {
  _inc?: InputMaybe<Blacklist_History_Inc_Input>;
  _set?: InputMaybe<Blacklist_History_Set_Input>;
  pk_columns: Blacklist_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BonusArgs = {
  _append?: InputMaybe<Bonus_Append_Input>;
  _delete_at_path?: InputMaybe<Bonus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Bonus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Bonus_Delete_Key_Input>;
  _inc?: InputMaybe<Bonus_Inc_Input>;
  _prepend?: InputMaybe<Bonus_Prepend_Input>;
  _set?: InputMaybe<Bonus_Set_Input>;
  where: Bonus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_BlacklistArgs = {
  _set?: InputMaybe<Bonus_Blacklist_Set_Input>;
  where: Bonus_Blacklist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Blacklist_By_PkArgs = {
  _set?: InputMaybe<Bonus_Blacklist_Set_Input>;
  pk_columns: Bonus_Blacklist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_By_PkArgs = {
  _append?: InputMaybe<Bonus_Append_Input>;
  _delete_at_path?: InputMaybe<Bonus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Bonus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Bonus_Delete_Key_Input>;
  _inc?: InputMaybe<Bonus_Inc_Input>;
  _prepend?: InputMaybe<Bonus_Prepend_Input>;
  _set?: InputMaybe<Bonus_Set_Input>;
  pk_columns: Bonus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Fee_HistoryArgs = {
  _inc?: InputMaybe<Bonus_Fee_History_Inc_Input>;
  _set?: InputMaybe<Bonus_Fee_History_Set_Input>;
  where: Bonus_Fee_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Fee_History_By_PkArgs = {
  _inc?: InputMaybe<Bonus_Fee_History_Inc_Input>;
  _set?: InputMaybe<Bonus_Fee_History_Set_Input>;
  pk_columns: Bonus_Fee_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Office_RuleArgs = {
  _inc?: InputMaybe<Bonus_Office_Rule_Inc_Input>;
  _set?: InputMaybe<Bonus_Office_Rule_Set_Input>;
  where: Bonus_Office_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Office_Rule_By_PkArgs = {
  _inc?: InputMaybe<Bonus_Office_Rule_Inc_Input>;
  _set?: InputMaybe<Bonus_Office_Rule_Set_Input>;
  pk_columns: Bonus_Office_Rule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_TypeArgs = {
  _set?: InputMaybe<Bonus_Type_Set_Input>;
  where: Bonus_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bonus_Type_By_PkArgs = {
  _set?: InputMaybe<Bonus_Type_Set_Input>;
  pk_columns: Bonus_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Breach_UserArgs = {
  _inc?: InputMaybe<Breach_User_Inc_Input>;
  _set?: InputMaybe<Breach_User_Set_Input>;
  where: Breach_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Breach_User_By_PkArgs = {
  _inc?: InputMaybe<Breach_User_Inc_Input>;
  _set?: InputMaybe<Breach_User_Set_Input>;
  pk_columns: Breach_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_DocumentArgs = {
  _inc?: InputMaybe<Category_Document_Inc_Input>;
  _set?: InputMaybe<Category_Document_Set_Input>;
  where: Category_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_Document_By_PkArgs = {
  _inc?: InputMaybe<Category_Document_Inc_Input>;
  _set?: InputMaybe<Category_Document_Set_Input>;
  pk_columns: Category_Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Change_Office_RequestArgs = {
  _inc?: InputMaybe<Change_Office_Request_Inc_Input>;
  _set?: InputMaybe<Change_Office_Request_Set_Input>;
  where: Change_Office_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Change_Office_Request_By_PkArgs = {
  _inc?: InputMaybe<Change_Office_Request_Inc_Input>;
  _set?: InputMaybe<Change_Office_Request_Set_Input>;
  pk_columns: Change_Office_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CityArgs = {
  _inc?: InputMaybe<City_Inc_Input>;
  _set?: InputMaybe<City_Set_Input>;
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_City_By_PkArgs = {
  _inc?: InputMaybe<City_Inc_Input>;
  _set?: InputMaybe<City_Set_Input>;
  pk_columns: City_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Crypto_TransactionArgs = {
  _inc?: InputMaybe<Crypto_Transaction_Inc_Input>;
  _set?: InputMaybe<Crypto_Transaction_Set_Input>;
  where: Crypto_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Crypto_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Crypto_Transaction_Inc_Input>;
  _set?: InputMaybe<Crypto_Transaction_Set_Input>;
  pk_columns: Crypto_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentArgs = {
  _inc?: InputMaybe<Document_Inc_Input>;
  _set?: InputMaybe<Document_Set_Input>;
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_By_PkArgs = {
  _inc?: InputMaybe<Document_Inc_Input>;
  _set?: InputMaybe<Document_Set_Input>;
  pk_columns: Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DocusignArgs = {
  _inc?: InputMaybe<Docusign_Inc_Input>;
  _set?: InputMaybe<Docusign_Set_Input>;
  where: Docusign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Docusign_By_PkArgs = {
  _inc?: InputMaybe<Docusign_Inc_Input>;
  _set?: InputMaybe<Docusign_Set_Input>;
  pk_columns: Docusign_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exported_Bonus_XlsxArgs = {
  _set?: InputMaybe<Exported_Bonus_Xlsx_Set_Input>;
  where: Exported_Bonus_Xlsx_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exported_Bonus_Xlsx_By_PkArgs = {
  _set?: InputMaybe<Exported_Bonus_Xlsx_Set_Input>;
  pk_columns: Exported_Bonus_Xlsx_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HistoryArgs = {
  _append?: InputMaybe<History_Append_Input>;
  _delete_at_path?: InputMaybe<History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<History_Delete_Key_Input>;
  _prepend?: InputMaybe<History_Prepend_Input>;
  _set?: InputMaybe<History_Set_Input>;
  where: History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_History_By_PkArgs = {
  _append?: InputMaybe<History_Append_Input>;
  _delete_at_path?: InputMaybe<History_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<History_Delete_Elem_Input>;
  _delete_key?: InputMaybe<History_Delete_Key_Input>;
  _prepend?: InputMaybe<History_Prepend_Input>;
  _set?: InputMaybe<History_Set_Input>;
  pk_columns: History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_IncomeArgs = {
  _append?: InputMaybe<Income_Append_Input>;
  _delete_at_path?: InputMaybe<Income_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Income_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Income_Delete_Key_Input>;
  _inc?: InputMaybe<Income_Inc_Input>;
  _prepend?: InputMaybe<Income_Prepend_Input>;
  _set?: InputMaybe<Income_Set_Input>;
  where: Income_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Income_By_PkArgs = {
  _append?: InputMaybe<Income_Append_Input>;
  _delete_at_path?: InputMaybe<Income_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Income_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Income_Delete_Key_Input>;
  _inc?: InputMaybe<Income_Inc_Input>;
  _prepend?: InputMaybe<Income_Prepend_Input>;
  _set?: InputMaybe<Income_Set_Input>;
  pk_columns: Income_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ngan_Luong_TransactionArgs = {
  _inc?: InputMaybe<Ngan_Luong_Transaction_Inc_Input>;
  _set?: InputMaybe<Ngan_Luong_Transaction_Set_Input>;
  where: Ngan_Luong_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ngan_Luong_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Ngan_Luong_Transaction_Inc_Input>;
  _set?: InputMaybe<Ngan_Luong_Transaction_Set_Input>;
  pk_columns: Ngan_Luong_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ninepay_TransactionArgs = {
  _append?: InputMaybe<Ninepay_Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Ninepay_Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Ninepay_Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Ninepay_Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Ninepay_Transaction_Inc_Input>;
  _prepend?: InputMaybe<Ninepay_Transaction_Prepend_Input>;
  _set?: InputMaybe<Ninepay_Transaction_Set_Input>;
  where: Ninepay_Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ninepay_Transaction_By_PkArgs = {
  _append?: InputMaybe<Ninepay_Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Ninepay_Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Ninepay_Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Ninepay_Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Ninepay_Transaction_Inc_Input>;
  _prepend?: InputMaybe<Ninepay_Transaction_Prepend_Input>;
  _set?: InputMaybe<Ninepay_Transaction_Set_Input>;
  pk_columns: Ninepay_Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OfficeArgs = {
  _append?: InputMaybe<Office_Append_Input>;
  _delete_at_path?: InputMaybe<Office_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Office_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Office_Delete_Key_Input>;
  _inc?: InputMaybe<Office_Inc_Input>;
  _prepend?: InputMaybe<Office_Prepend_Input>;
  _set?: InputMaybe<Office_Set_Input>;
  where: Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Office_AnnouncementArgs = {
  _inc?: InputMaybe<Office_Announcement_Inc_Input>;
  _set?: InputMaybe<Office_Announcement_Set_Input>;
  where: Office_Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Office_Announcement_By_PkArgs = {
  _inc?: InputMaybe<Office_Announcement_Inc_Input>;
  _set?: InputMaybe<Office_Announcement_Set_Input>;
  pk_columns: Office_Announcement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Office_By_PkArgs = {
  _append?: InputMaybe<Office_Append_Input>;
  _delete_at_path?: InputMaybe<Office_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Office_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Office_Delete_Key_Input>;
  _inc?: InputMaybe<Office_Inc_Input>;
  _prepend?: InputMaybe<Office_Prepend_Input>;
  _set?: InputMaybe<Office_Set_Input>;
  pk_columns: Office_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Office_RuleArgs = {
  _inc?: InputMaybe<Office_Rule_Inc_Input>;
  _set?: InputMaybe<Office_Rule_Set_Input>;
  where: Office_Rule_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Office_Rule_By_PkArgs = {
  _inc?: InputMaybe<Office_Rule_Inc_Input>;
  _set?: InputMaybe<Office_Rule_Set_Input>;
  pk_columns: Office_Rule_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Office_V2Args = {
  _set: Nq_Update_Office_Dto;
  where: Scalars['JSON'];
};


/** mutation root */
export type Mutation_RootUpdate_Payment_MethodArgs = {
  _set?: InputMaybe<Payment_Method_Set_Input>;
  where: Payment_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Method_By_PkArgs = {
  _set?: InputMaybe<Payment_Method_Set_Input>;
  pk_columns: Payment_Method_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Penalize_UserArgs = {
  _inc?: InputMaybe<Penalize_User_Inc_Input>;
  _set?: InputMaybe<Penalize_User_Set_Input>;
  where: Penalize_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Penalize_User_By_PkArgs = {
  _inc?: InputMaybe<Penalize_User_Inc_Input>;
  _set?: InputMaybe<Penalize_User_Set_Input>;
  pk_columns: Penalize_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_By_PkArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  pk_columns: Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RelationshipArgs = {
  _inc?: InputMaybe<Relationship_Inc_Input>;
  _set?: InputMaybe<Relationship_Set_Input>;
  where: Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Relationship_By_PkArgs = {
  _inc?: InputMaybe<Relationship_Inc_Input>;
  _set?: InputMaybe<Relationship_Set_Input>;
  pk_columns: Relationship_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReportArgs = {
  _inc?: InputMaybe<Report_Inc_Input>;
  _set?: InputMaybe<Report_Set_Input>;
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_By_PkArgs = {
  _inc?: InputMaybe<Report_Inc_Input>;
  _set?: InputMaybe<Report_Set_Input>;
  pk_columns: Report_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Report_RelyArgs = {
  _inc?: InputMaybe<Report_Rely_Inc_Input>;
  _set?: InputMaybe<Report_Rely_Set_Input>;
  where: Report_Rely_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_Rely_By_PkArgs = {
  _inc?: InputMaybe<Report_Rely_Inc_Input>;
  _set?: InputMaybe<Report_Rely_Set_Input>;
  pk_columns: Report_Rely_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Withdrawal_RequestArgs = {
  _set?: InputMaybe<Review_Withdrawal_Request_Set_Input>;
  where: Review_Withdrawal_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_Withdrawal_Request_By_PkArgs = {
  _set?: InputMaybe<Review_Withdrawal_Request_Set_Input>;
  pk_columns: Review_Withdrawal_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Seen_AnnouncementArgs = {
  _set?: InputMaybe<Seen_Announcement_Set_Input>;
  where: Seen_Announcement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seen_Announcement_By_PkArgs = {
  _set?: InputMaybe<Seen_Announcement_Set_Input>;
  pk_columns: Seen_Announcement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _inc?: InputMaybe<Team_Inc_Input>;
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _inc?: InputMaybe<Team_Inc_Input>;
  _set?: InputMaybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verify_HistoryArgs = {
  _set?: InputMaybe<Verify_History_Set_Input>;
  where: Verify_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verify_History_By_PkArgs = {
  _set?: InputMaybe<Verify_History_Set_Input>;
  pk_columns: Verify_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verify_TypeArgs = {
  _set?: InputMaybe<Verify_Type_Set_Input>;
  where: Verify_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verify_Type_By_PkArgs = {
  _set?: InputMaybe<Verify_Type_Set_Input>;
  pk_columns: Verify_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Withdrawal_RequestArgs = {
  _inc?: InputMaybe<Withdrawal_Request_Inc_Input>;
  _set?: InputMaybe<Withdrawal_Request_Set_Input>;
  where: Withdrawal_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Withdrawal_Request_By_PkArgs = {
  _inc?: InputMaybe<Withdrawal_Request_Inc_Input>;
  _set?: InputMaybe<Withdrawal_Request_Set_Input>;
  pk_columns: Withdrawal_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpload_OfficeArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scalars['JSON']>>;
  where?: InputMaybe<Scalars['JSON']>;
};


/** mutation root */
export type Mutation_RootUpload_TeamArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scalars['JSON']>>;
  where?: InputMaybe<Scalars['JSON']>;
};


/** mutation root */
export type Mutation_RootUserListArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['String']>;
  created_to?: InputMaybe<Scalars['String']>;
  current_page?: InputMaybe<Scalars['Int']>;
  fromWithdrawalCount?: InputMaybe<Scalars['Int']>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preffered_payment?: InputMaybe<Array<InputMaybe<PreferredPayment>>>;
  role?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  toWithdrawalCount?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "ngan_luong_transaction" */
export type Ngan_Luong_Transaction = {
  __typename?: 'ngan_luong_transaction';
  bonus_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  from_account: Scalars['String'];
  id: Scalars['Int'];
  reference_code: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  to_account: Scalars['String'];
  transaction_id: Scalars['String'];
  type?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Aggregate = {
  __typename?: 'ngan_luong_transaction_aggregate';
  aggregate?: Maybe<Ngan_Luong_Transaction_Aggregate_Fields>;
  nodes: Array<Ngan_Luong_Transaction>;
};

/** aggregate fields of "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Aggregate_Fields = {
  __typename?: 'ngan_luong_transaction_aggregate_fields';
  avg?: Maybe<Ngan_Luong_Transaction_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ngan_Luong_Transaction_Max_Fields>;
  min?: Maybe<Ngan_Luong_Transaction_Min_Fields>;
  stddev?: Maybe<Ngan_Luong_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Ngan_Luong_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ngan_Luong_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Ngan_Luong_Transaction_Sum_Fields>;
  var_pop?: Maybe<Ngan_Luong_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Ngan_Luong_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Ngan_Luong_Transaction_Variance_Fields>;
};


/** aggregate fields of "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ngan_Luong_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Ngan_Luong_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ngan_Luong_Transaction_Max_Order_By>;
  min?: InputMaybe<Ngan_Luong_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Ngan_Luong_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ngan_Luong_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ngan_Luong_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ngan_Luong_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Ngan_Luong_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ngan_Luong_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Ngan_Luong_Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Ngan_Luong_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Ngan_Luong_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Ngan_Luong_Transaction_Avg_Fields = {
  __typename?: 'ngan_luong_transaction_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ngan_luong_transaction". All fields are combined with a logical 'AND'. */
export type Ngan_Luong_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Ngan_Luong_Transaction_Bool_Exp>>>;
  _not?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Ngan_Luong_Transaction_Bool_Exp>>>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  from_account?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  reference_code?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  to_account?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ngan_luong_transaction" */
export enum Ngan_Luong_Transaction_Constraint {
  /** unique or primary key constraint */
  NganLuongTransactionPkey = 'ngan_luong_transaction_pkey',
  /** unique or primary key constraint */
  NganLuongTransactionReferenceCodeKey = 'ngan_luong_transaction_reference_code_key'
}

/** input type for incrementing integer column in table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Insert_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  from_account?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  reference_code?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  to_account?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ngan_Luong_Transaction_Max_Fields = {
  __typename?: 'ngan_luong_transaction_max_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from_account?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  reference_code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  to_account?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Max_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  from_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reference_code?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_account?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ngan_Luong_Transaction_Min_Fields = {
  __typename?: 'ngan_luong_transaction_min_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from_account?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  reference_code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  to_account?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Min_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  from_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reference_code?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_account?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Mutation_Response = {
  __typename?: 'ngan_luong_transaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ngan_Luong_Transaction>;
};

/** input type for inserting object relation for remote table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Obj_Rel_Insert_Input = {
  data: Ngan_Luong_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Ngan_Luong_Transaction_On_Conflict>;
};

/** on conflict condition type for table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_On_Conflict = {
  constraint: Ngan_Luong_Transaction_Constraint;
  update_columns: Array<Ngan_Luong_Transaction_Update_Column>;
  where?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
};

/** ordering options when selecting data from "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  from_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reference_code?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_account?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ngan_luong_transaction" */
export enum Ngan_Luong_Transaction_Select_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromAccount = 'from_account',
  /** column name */
  Id = 'id',
  /** column name */
  ReferenceCode = 'reference_code',
  /** column name */
  Status = 'status',
  /** column name */
  ToAccount = 'to_account',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Set_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  from_account?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  reference_code?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  to_account?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ngan_Luong_Transaction_Stddev_Fields = {
  __typename?: 'ngan_luong_transaction_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ngan_Luong_Transaction_Stddev_Pop_Fields = {
  __typename?: 'ngan_luong_transaction_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ngan_Luong_Transaction_Stddev_Samp_Fields = {
  __typename?: 'ngan_luong_transaction_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ngan_Luong_Transaction_Sum_Fields = {
  __typename?: 'ngan_luong_transaction_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "ngan_luong_transaction" */
export enum Ngan_Luong_Transaction_Update_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromAccount = 'from_account',
  /** column name */
  Id = 'id',
  /** column name */
  ReferenceCode = 'reference_code',
  /** column name */
  Status = 'status',
  /** column name */
  ToAccount = 'to_account',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Ngan_Luong_Transaction_Var_Pop_Fields = {
  __typename?: 'ngan_luong_transaction_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ngan_Luong_Transaction_Var_Samp_Fields = {
  __typename?: 'ngan_luong_transaction_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ngan_Luong_Transaction_Variance_Fields = {
  __typename?: 'ngan_luong_transaction_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ngan_luong_transaction" */
export type Ngan_Luong_Transaction_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** columns and relationships of "ninepay_transaction" */
export type Ninepay_Transaction = {
  __typename?: 'ninepay_transaction';
  bonus_id?: Maybe<Scalars['Int']>;
  bonus_type: Bonus_Type_Enum;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  is_ipn?: Maybe<Scalars['Boolean']>;
  request_id?: Maybe<Scalars['String']>;
  request_payload?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "ninepay_transaction" */
export type Ninepay_TransactionDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "ninepay_transaction" */
export type Ninepay_TransactionRequest_PayloadArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "ninepay_transaction" */
export type Ninepay_Transaction_Aggregate = {
  __typename?: 'ninepay_transaction_aggregate';
  aggregate?: Maybe<Ninepay_Transaction_Aggregate_Fields>;
  nodes: Array<Ninepay_Transaction>;
};

/** aggregate fields of "ninepay_transaction" */
export type Ninepay_Transaction_Aggregate_Fields = {
  __typename?: 'ninepay_transaction_aggregate_fields';
  avg?: Maybe<Ninepay_Transaction_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ninepay_Transaction_Max_Fields>;
  min?: Maybe<Ninepay_Transaction_Min_Fields>;
  stddev?: Maybe<Ninepay_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Ninepay_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ninepay_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Ninepay_Transaction_Sum_Fields>;
  var_pop?: Maybe<Ninepay_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Ninepay_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Ninepay_Transaction_Variance_Fields>;
};


/** aggregate fields of "ninepay_transaction" */
export type Ninepay_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ninepay_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ninepay_transaction" */
export type Ninepay_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Ninepay_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ninepay_Transaction_Max_Order_By>;
  min?: InputMaybe<Ninepay_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Ninepay_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ninepay_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ninepay_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ninepay_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Ninepay_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ninepay_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Ninepay_Transaction_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Ninepay_Transaction_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  request_payload?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "ninepay_transaction" */
export type Ninepay_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Ninepay_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Ninepay_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Ninepay_Transaction_Avg_Fields = {
  __typename?: 'ninepay_transaction_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ninepay_transaction". All fields are combined with a logical 'AND'. */
export type Ninepay_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Ninepay_Transaction_Bool_Exp>>>;
  _not?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Ninepay_Transaction_Bool_Exp>>>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  bonus_type?: InputMaybe<Bonus_Type_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_ipn?: InputMaybe<Boolean_Comparison_Exp>;
  request_id?: InputMaybe<String_Comparison_Exp>;
  request_payload?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "ninepay_transaction" */
export enum Ninepay_Transaction_Constraint {
  /** unique or primary key constraint */
  NinepayTransactionPkey = 'ninepay_transaction_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Ninepay_Transaction_Delete_At_Path_Input = {
  data?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  request_payload?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Ninepay_Transaction_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
  request_payload?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Ninepay_Transaction_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
  request_payload?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "ninepay_transaction" */
export type Ninepay_Transaction_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ninepay_transaction" */
export type Ninepay_Transaction_Insert_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_ipn?: InputMaybe<Scalars['Boolean']>;
  request_id?: InputMaybe<Scalars['String']>;
  request_payload?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Ninepay_Transaction_Max_Fields = {
  __typename?: 'ninepay_transaction_max_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  request_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Max_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ninepay_Transaction_Min_Fields = {
  __typename?: 'ninepay_transaction_min_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  request_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Min_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ninepay_transaction" */
export type Ninepay_Transaction_Mutation_Response = {
  __typename?: 'ninepay_transaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ninepay_Transaction>;
};

/** input type for inserting object relation for remote table "ninepay_transaction" */
export type Ninepay_Transaction_Obj_Rel_Insert_Input = {
  data: Ninepay_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Ninepay_Transaction_On_Conflict>;
};

/** on conflict condition type for table "ninepay_transaction" */
export type Ninepay_Transaction_On_Conflict = {
  constraint: Ninepay_Transaction_Constraint;
  update_columns: Array<Ninepay_Transaction_Update_Column>;
  where?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
};

/** ordering options when selecting data from "ninepay_transaction" */
export type Ninepay_Transaction_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_ipn?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  request_payload?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "ninepay_transaction" */
export type Ninepay_Transaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Ninepay_Transaction_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  request_payload?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "ninepay_transaction" */
export enum Ninepay_Transaction_Select_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsIpn = 'is_ipn',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  RequestPayload = 'request_payload',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "ninepay_transaction" */
export type Ninepay_Transaction_Set_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_ipn?: InputMaybe<Scalars['Boolean']>;
  request_id?: InputMaybe<Scalars['String']>;
  request_payload?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Ninepay_Transaction_Stddev_Fields = {
  __typename?: 'ninepay_transaction_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ninepay_Transaction_Stddev_Pop_Fields = {
  __typename?: 'ninepay_transaction_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ninepay_Transaction_Stddev_Samp_Fields = {
  __typename?: 'ninepay_transaction_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ninepay_Transaction_Sum_Fields = {
  __typename?: 'ninepay_transaction_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "ninepay_transaction" */
export enum Ninepay_Transaction_Update_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsIpn = 'is_ipn',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  RequestPayload = 'request_payload',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Ninepay_Transaction_Var_Pop_Fields = {
  __typename?: 'ninepay_transaction_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ninepay_Transaction_Var_Samp_Fields = {
  __typename?: 'ninepay_transaction_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ninepay_Transaction_Variance_Fields = {
  __typename?: 'ninepay_transaction_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ninepay_transaction" */
export type Ninepay_Transaction_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "notification" */
export type Notification = {
  __typename?: 'notification';
  /** An object relationship */
  bonu?: Maybe<Bonus>;
  /** An object relationship */
  bonus_blacklist?: Maybe<Bonus_Blacklist>;
  bonus_blacklist_id?: Maybe<Scalars['uuid']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_readed: Scalars['Boolean'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileByCreatedBy?: Maybe<Profile>;
  rely_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  report?: Maybe<Report>;
  report_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  report_rely?: Maybe<Report_Rely>;
  type: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'notification_aggregate_fields';
  avg?: Maybe<Notification_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
  stddev?: Maybe<Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Variance_Fields>;
};


/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification" */
export type Notification_Aggregate_Order_By = {
  avg?: InputMaybe<Notification_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Max_Order_By>;
  min?: InputMaybe<Notification_Min_Order_By>;
  stddev?: InputMaybe<Notification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notification" */
export type Notification_Arr_Rel_Insert_Input = {
  data: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** aggregate avg on columns */
export type Notification_Avg_Fields = {
  __typename?: 'notification_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification" */
export type Notification_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Notification_Bool_Exp>>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Notification_Bool_Exp>>>;
  bonu?: InputMaybe<Bonus_Bool_Exp>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  bonus_blacklist_id?: InputMaybe<Uuid_Comparison_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_readed?: InputMaybe<Boolean_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileByCreatedBy?: InputMaybe<Profile_Bool_Exp>;
  rely_id?: InputMaybe<Int_Comparison_Exp>;
  report?: InputMaybe<Report_Bool_Exp>;
  report_id?: InputMaybe<Int_Comparison_Exp>;
  report_rely?: InputMaybe<Report_Rely_Bool_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey'
}

/** input type for incrementing integer column in table "notification" */
export type Notification_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rely_id?: InputMaybe<Scalars['Int']>;
  report_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  bonu?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Obj_Rel_Insert_Input>;
  bonus_blacklist_id?: InputMaybe<Scalars['uuid']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_readed?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByCreatedBy?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  rely_id?: InputMaybe<Scalars['Int']>;
  report?: InputMaybe<Report_Obj_Rel_Insert_Input>;
  report_id?: InputMaybe<Scalars['Int']>;
  report_rely?: InputMaybe<Report_Rely_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: 'notification_max_fields';
  bonus_blacklist_id?: Maybe<Scalars['uuid']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  rely_id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notification" */
export type Notification_Max_Order_By = {
  bonus_blacklist_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'notification_min_fields';
  bonus_blacklist_id?: Maybe<Scalars['uuid']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  rely_id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notification" */
export type Notification_Min_Order_By = {
  bonus_blacklist_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: 'notification_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Notification>;
};

/** input type for inserting object relation for remote table "notification" */
export type Notification_Obj_Rel_Insert_Input = {
  data: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** on conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** ordering options when selecting data from "notification" */
export type Notification_Order_By = {
  bonu?: InputMaybe<Bonus_Order_By>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Order_By>;
  bonus_blacklist_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_readed?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileByCreatedBy?: InputMaybe<Profile_Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report?: InputMaybe<Report_Order_By>;
  report_id?: InputMaybe<Order_By>;
  report_rely?: InputMaybe<Report_Rely_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "notification" */
export type Notification_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  BonusBlacklistId = 'bonus_blacklist_id',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsReaded = 'is_readed',
  /** column name */
  RelyId = 'rely_id',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  bonus_blacklist_id?: InputMaybe<Scalars['uuid']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_readed?: InputMaybe<Scalars['Boolean']>;
  rely_id?: InputMaybe<Scalars['Int']>;
  report_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Notification_Stddev_Fields = {
  __typename?: 'notification_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification" */
export type Notification_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notification_Stddev_Pop_Fields = {
  __typename?: 'notification_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification" */
export type Notification_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notification_Stddev_Samp_Fields = {
  __typename?: 'notification_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification" */
export type Notification_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Notification_Sum_Fields = {
  __typename?: 'notification_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rely_id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notification" */
export type Notification_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  BonusBlacklistId = 'bonus_blacklist_id',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsReaded = 'is_readed',
  /** column name */
  RelyId = 'rely_id',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Notification_Var_Pop_Fields = {
  __typename?: 'notification_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification" */
export type Notification_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notification_Var_Samp_Fields = {
  __typename?: 'notification_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification" */
export type Notification_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Notification_Variance_Fields = {
  __typename?: 'notification_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rely_id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification" */
export type Notification_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rely_id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

export type Nq_Airtable = {
  bonus: Scalars['String'];
  mt4?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
};

export type Nq_Airtable_Base = {
  __typename?: 'nq_airtable_base';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Nq_Airtable_Base_Query = {
  __typename?: 'nq_airtable_base_query';
  base: Array<Nq_Airtable_Base>;
  current_base?: Maybe<Nq_Airtable_Base>;
};

export type Nq_Airtable_Base_Response = {
  __typename?: 'nq_airtable_base_response';
  data?: Maybe<Nq_Airtable_Base_Query>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Announcement = {
  __typename?: 'nq_announcement';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_bies?: Maybe<Array<Nq_Profile>>;
  created_by_id: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  office_announcements?: Maybe<Array<Nq_Office_Announcement>>;
  take_effect_from: Scalars['DateTime'];
  take_effect_to: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};


export type Nq_AnnouncementCreated_BiesArgs = {
  filter?: InputMaybe<Nq_ProfileFilter>;
  sorting?: InputMaybe<Array<Nq_ProfileSort>>;
};


export type Nq_AnnouncementOffice_AnnouncementsArgs = {
  filter?: InputMaybe<Nq_Office_AnnouncementFilter>;
  sorting?: InputMaybe<Array<Nq_Office_AnnouncementSort>>;
};

export type Nq_AnnouncementAggregateGroupBy = {
  __typename?: 'nq_announcementAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_AnnouncementCountAggregate = {
  __typename?: 'nq_announcementCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_AnnouncementEdge = {
  __typename?: 'nq_announcementEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_announcement */
  node: Nq_Announcement;
};

export type Nq_AnnouncementMaxAggregate = {
  __typename?: 'nq_announcementMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_AnnouncementMinAggregate = {
  __typename?: 'nq_announcementMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Announcement_Response = {
  __typename?: 'nq_announcement_response';
  data?: Maybe<Nq_Announcement>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Approver_Office = {
  __typename?: 'nq_approver_office';
  created_at: Scalars['DateTime'];
  id: Scalars['Int'];
  office?: Maybe<Nq_Office>;
  office_id: Scalars['Float'];
  profile?: Maybe<Nq_Profile>;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type Nq_Approver_OfficeAggregateGroupBy = {
  __typename?: 'nq_approver_officeAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Approver_OfficeAvgAggregate = {
  __typename?: 'nq_approver_officeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Approver_OfficeCountAggregate = {
  __typename?: 'nq_approver_officeCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Approver_OfficeEdge = {
  __typename?: 'nq_approver_officeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_approver_office */
  node: Nq_Approver_Office;
};

export type Nq_Approver_OfficeMaxAggregate = {
  __typename?: 'nq_approver_officeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Approver_OfficeMinAggregate = {
  __typename?: 'nq_approver_officeMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Approver_OfficeSumAggregate = {
  __typename?: 'nq_approver_officeSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Bank = {
  __typename?: 'nq_bank';
  bank_accounts?: Maybe<Array<Nq_Bank_Account>>;
  code: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type Nq_BankBank_AccountsArgs = {
  filter?: InputMaybe<Nq_Bank_AccountFilter>;
  sorting?: InputMaybe<Array<Nq_Bank_AccountSort>>;
};

export type Nq_BankAggregateGroupBy = {
  __typename?: 'nq_bankAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_BankCountAggregate = {
  __typename?: 'nq_bankCountAggregate';
  code?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_BankFilter = {
  and?: InputMaybe<Array<Nq_BankFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Nq_BankFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_BankMaxAggregate = {
  __typename?: 'nq_bankMaxAggregate';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_BankMinAggregate = {
  __typename?: 'nq_bankMinAggregate';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_BankOffsetConnection = {
  __typename?: 'nq_bankOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Nq_Bank>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type Nq_BankSort = {
  direction: CoreSortDirection;
  field: Nq_BankSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_BankSortFields {
  Code = 'code',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Nq_Bank_Account = {
  __typename?: 'nq_bank_account';
  account_holder_name: Scalars['String'];
  bank?: Maybe<Nq_Bank>;
  bank_account_no: Scalars['String'];
  bank_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  errors?: Maybe<Array<Nq_Bank_Error>>;
  id: Scalars['ID'];
  profile?: Maybe<Nq_Profile>;
  profile_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};


export type Nq_Bank_AccountErrorsArgs = {
  filter?: InputMaybe<Nq_Bank_ErrorFilter>;
  sorting?: InputMaybe<Array<Nq_Bank_ErrorSort>>;
};

export type Nq_Bank_AccountAggregateGroupBy = {
  __typename?: 'nq_bank_accountAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_AccountCountAggregate = {
  __typename?: 'nq_bank_accountCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Bank_AccountEdge = {
  __typename?: 'nq_bank_accountEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_bank_account */
  node: Nq_Bank_Account;
};

export type Nq_Bank_AccountFilter = {
  and?: InputMaybe<Array<Nq_Bank_AccountFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Bank_AccountFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Bank_AccountMaxAggregate = {
  __typename?: 'nq_bank_accountMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_AccountMinAggregate = {
  __typename?: 'nq_bank_accountMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_AccountSort = {
  direction: CoreSortDirection;
  field: Nq_Bank_AccountSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_Bank_AccountSortFields {
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Nq_Bank_Error = {
  __typename?: 'nq_bank_error';
  bank_account?: Maybe<Nq_Bank_Account>;
  bank_account_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
};

export type Nq_Bank_ErrorAggregateGroupBy = {
  __typename?: 'nq_bank_errorAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_ErrorCountAggregate = {
  __typename?: 'nq_bank_errorCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Bank_ErrorEdge = {
  __typename?: 'nq_bank_errorEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_bank_error */
  node: Nq_Bank_Error;
};

export type Nq_Bank_ErrorFilter = {
  and?: InputMaybe<Array<Nq_Bank_ErrorFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Bank_ErrorFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Bank_ErrorMaxAggregate = {
  __typename?: 'nq_bank_errorMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_ErrorMinAggregate = {
  __typename?: 'nq_bank_errorMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bank_ErrorSort = {
  direction: CoreSortDirection;
  field: Nq_Bank_ErrorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_Bank_ErrorSortFields {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Nq_Bonus = {
  __typename?: 'nq_bonus';
  approved_at: Scalars['String'];
  approved_by?: Maybe<Nq_Profile>;
  banned_until: Scalars['DateTime'];
  bonus_2_transfer_option: Scalars['Int'];
  bonus_manage: Scalars['Int'];
  bonus_sale_manage: Scalars['Int'];
  bonus_transfer_option: Scalars['Int'];
  created_at: Scalars['DateTime'];
  date_request_bonus: Scalars['DateTime'];
  date_request_bonus_2: Scalars['DateTime'];
  date_request_salary: Scalars['DateTime'];
  id: Scalars['Int'];
  id_airtable: Scalars['String'];
  linkPDF: Scalars['String'];
  month: Scalars['Int'];
  numCustomer: Scalars['Int'];
  profile?: Maybe<Nq_Profile>;
  reports?: Maybe<Array<Nq_Report>>;
  salary: Scalars['Int'];
  salary_transfer_option: Scalars['Int'];
  status: Scalars['Int'];
  status_2: Scalars['Float'];
  status_salary: Scalars['Int'];
  total: Scalars['Int'];
  total_2: Scalars['String'];
  total_bonus_salary: Scalars['Int'];
  transfer_data: Scalars['JSON'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
  year: Scalars['Int'];
};


export type Nq_BonusReportsArgs = {
  filter?: InputMaybe<Nq_ReportFilter>;
  sorting?: InputMaybe<Array<Nq_ReportSort>>;
};

export type Nq_BonusAggregateGroupBy = {
  __typename?: 'nq_bonusAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_BonusAvgAggregate = {
  __typename?: 'nq_bonusAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_BonusCountAggregate = {
  __typename?: 'nq_bonusCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_BonusMaxAggregate = {
  __typename?: 'nq_bonusMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_BonusMinAggregate = {
  __typename?: 'nq_bonusMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_BonusSumAggregate = {
  __typename?: 'nq_bonusSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Bonus_Blacklist = {
  __typename?: 'nq_bonus_blacklist';
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Nq_Profile>;
  created_by_id: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  is_banned: Scalars['Boolean'];
  profile?: Maybe<Nq_Profile>;
  profile_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Nq_Bonus_BlacklistAggregateGroupBy = {
  __typename?: 'nq_bonus_blacklistAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bonus_BlacklistCountAggregate = {
  __typename?: 'nq_bonus_blacklistCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Bonus_BlacklistEdge = {
  __typename?: 'nq_bonus_blacklistEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_bonus_blacklist */
  node: Nq_Bonus_Blacklist;
};

export type Nq_Bonus_BlacklistFilter = {
  and?: InputMaybe<Array<Nq_Bonus_BlacklistFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Bonus_BlacklistFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Bonus_BlacklistMaxAggregate = {
  __typename?: 'nq_bonus_blacklistMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bonus_BlacklistMinAggregate = {
  __typename?: 'nq_bonus_blacklistMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Bonus_BlacklistSort = {
  direction: CoreSortDirection;
  field: Nq_Bonus_BlacklistSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_Bonus_BlacklistSortFields {
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Nq_Change_Office_Request = {
  __typename?: 'nq_change_office_request';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  issuer?: Maybe<Nq_Profile>;
  issuer_id: Scalars['String'];
  office?: Maybe<Nq_Office>;
  reason: Scalars['String'];
  status: Scalars['String'];
  target_office_id: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type Nq_Change_Office_RequestAggregateGroupBy = {
  __typename?: 'nq_change_office_requestAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  issuer_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Change_Office_RequestAvgAggregate = {
  __typename?: 'nq_change_office_requestAvgAggregate';
  target_office_id?: Maybe<Scalars['Float']>;
};

export type Nq_Change_Office_RequestCountAggregate = {
  __typename?: 'nq_change_office_requestCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  issuer_id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Change_Office_RequestEdge = {
  __typename?: 'nq_change_office_requestEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_change_office_request */
  node: Nq_Change_Office_Request;
};

export type Nq_Change_Office_RequestMaxAggregate = {
  __typename?: 'nq_change_office_requestMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  issuer_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Change_Office_RequestMinAggregate = {
  __typename?: 'nq_change_office_requestMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  issuer_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target_office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Change_Office_RequestSumAggregate = {
  __typename?: 'nq_change_office_requestSumAggregate';
  target_office_id?: Maybe<Scalars['Float']>;
};

export type Nq_Check_Profile_Dto = {
  __typename?: 'nq_check_profile_dto';
  emails: Array<Scalars['String']>;
  uploaded_url: Scalars['String'];
};

export type Nq_Check_Profile_Response = {
  __typename?: 'nq_check_profile_response';
  data?: Maybe<Nq_Check_Profile_Dto>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_City = {
  __typename?: 'nq_city';
  created_at: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  offices?: Maybe<Array<Nq_Office>>;
  updated_at: Scalars['DateTime'];
};


export type Nq_CityOfficesArgs = {
  filter?: InputMaybe<Nq_OfficeFilter>;
  sorting?: InputMaybe<Array<Nq_OfficeSort>>;
};

export type Nq_CityAggregateGroupBy = {
  __typename?: 'nq_cityAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_CityAvgAggregate = {
  __typename?: 'nq_cityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_CityCountAggregate = {
  __typename?: 'nq_cityCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type Nq_CityEdge = {
  __typename?: 'nq_cityEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_city */
  node: Nq_City;
};

export type Nq_CityMaxAggregate = {
  __typename?: 'nq_cityMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_CityMinAggregate = {
  __typename?: 'nq_cityMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_CitySumAggregate = {
  __typename?: 'nq_citySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Crypto_Transaction = {
  __typename?: 'nq_crypto_transaction';
  amount?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Nq_Bonus>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  receiver?: Maybe<Nq_Profile>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender?: Maybe<Nq_Profile>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type Nq_Crypto_TransactionAggregateGroupBy = {
  __typename?: 'nq_crypto_transactionAggregateGroupBy';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Crypto_TransactionAvgAggregate = {
  __typename?: 'nq_crypto_transactionAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

export type Nq_Crypto_TransactionCountAggregate = {
  __typename?: 'nq_crypto_transactionCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  receiver_address?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_address?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Crypto_TransactionEdge = {
  __typename?: 'nq_crypto_transactionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_crypto_transaction */
  node: Nq_Crypto_Transaction;
};

export type Nq_Crypto_TransactionMaxAggregate = {
  __typename?: 'nq_crypto_transactionMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Crypto_TransactionMinAggregate = {
  __typename?: 'nq_crypto_transactionMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  receiver_address?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Crypto_TransactionSumAggregate = {
  __typename?: 'nq_crypto_transactionSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

export type Nq_Export_Office = {
  __typename?: 'nq_export_office';
  uploaded_url: Scalars['String'];
};

export type Nq_Export_Office_Response = {
  __typename?: 'nq_export_office_response';
  data?: Maybe<Nq_Export_Office>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Export_Team = {
  __typename?: 'nq_export_team';
  uploaded_url: Scalars['String'];
};

export type Nq_Export_Team_Response = {
  __typename?: 'nq_export_team_response';
  data?: Maybe<Nq_Export_Team>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Exported_Bonus_Xlsx = {
  __typename?: 'nq_exported_bonus_xlsx';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Nq_Exported_Bonus_XlsxAggregateGroupBy = {
  __typename?: 'nq_exported_bonus_xlsxAggregateGroupBy';
  id?: Maybe<Scalars['String']>;
};

export type Nq_Exported_Bonus_XlsxCountAggregate = {
  __typename?: 'nq_exported_bonus_xlsxCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Exported_Bonus_XlsxEdge = {
  __typename?: 'nq_exported_bonus_xlsxEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_exported_bonus_xlsx */
  node: Nq_Exported_Bonus_Xlsx;
};

export type Nq_Exported_Bonus_XlsxMaxAggregate = {
  __typename?: 'nq_exported_bonus_xlsxMaxAggregate';
  id?: Maybe<Scalars['String']>;
};

export type Nq_Exported_Bonus_XlsxMinAggregate = {
  __typename?: 'nq_exported_bonus_xlsxMinAggregate';
  id?: Maybe<Scalars['String']>;
};

export type Nq_History = {
  __typename?: 'nq_history';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  new_value: Scalars['JSON'];
  old_value: Scalars['JSON'];
  profile?: Maybe<Nq_Profile>;
  profile_id: Scalars['String'];
  type: HistoryType;
  updated_at: Scalars['DateTime'];
  updated_profile_id: Scalars['String'];
  variance_data: Scalars['JSON'];
};

export type Nq_HistoryAggregateGroupBy = {
  __typename?: 'nq_historyAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_HistoryCountAggregate = {
  __typename?: 'nq_historyCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_HistoryEdge = {
  __typename?: 'nq_historyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_history */
  node: Nq_History;
};

export type Nq_HistoryMaxAggregate = {
  __typename?: 'nq_historyMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_HistoryMinAggregate = {
  __typename?: 'nq_historyMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_Mass_Update_Profile_Response = {
  __typename?: 'nq_mass_update_profile_response';
  data?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Notification = {
  __typename?: 'nq_notification';
  bonus?: Maybe<Nq_Bonus>;
  bonus_id: Scalars['Int'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Nq_Profile>;
  created_by_id: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  is_read: Scalars['Boolean'];
  profile?: Maybe<Nq_Profile>;
  profile_id: Scalars['String'];
  rely?: Maybe<Nq_Report_Rely>;
  rely_id: Scalars['Int'];
  report?: Maybe<Nq_Report>;
  report_id: Scalars['Int'];
  type: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type Nq_NotificationAggregateGroupBy = {
  __typename?: 'nq_notificationAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_NotificationAvgAggregate = {
  __typename?: 'nq_notificationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_NotificationCountAggregate = {
  __typename?: 'nq_notificationCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_NotificationEdge = {
  __typename?: 'nq_notificationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_notification */
  node: Nq_Notification;
};

export type Nq_NotificationMaxAggregate = {
  __typename?: 'nq_notificationMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_NotificationMinAggregate = {
  __typename?: 'nq_notificationMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_NotificationSumAggregate = {
  __typename?: 'nq_notificationSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Office = {
  __typename?: 'nq_office';
  address?: Maybe<Scalars['String']>;
  airtable?: Maybe<Scalars['JSON']>;
  city?: Maybe<Nq_City>;
  city_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  date_request_bonus?: Maybe<Scalars['DateTime']>;
  date_request_salary?: Maybe<Scalars['DateTime']>;
  format_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  managed_by?: Maybe<Nq_Profile>;
  managed_by_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office_rules?: Maybe<Array<OfficeRuleDto>>;
  relations_count?: Maybe<Scalars['Int']>;
  teams?: Maybe<Array<Nq_Team>>;
  teams_count?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
};


export type Nq_OfficeOffice_RulesArgs = {
  filter?: InputMaybe<OfficeRuleDtoFilter>;
  sorting?: InputMaybe<Array<OfficeRuleDtoSort>>;
};


export type Nq_OfficeTeamsArgs = {
  filter?: InputMaybe<Nq_TeamFilter>;
  sorting?: InputMaybe<Array<Nq_TeamSort>>;
};

export type Nq_OfficeAggregateGroupBy = {
  __typename?: 'nq_officeAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_OfficeAvgAggregate = {
  __typename?: 'nq_officeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_OfficeCountAggregate = {
  __typename?: 'nq_officeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type Nq_OfficeEdge = {
  __typename?: 'nq_officeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_office */
  node: Nq_Office;
};

export type Nq_OfficeFilter = {
  and?: InputMaybe<Array<Nq_OfficeFilter>>;
  city?: InputMaybe<Nq_OfficeFilternq_CityFilter>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  office_rules?: InputMaybe<Nq_OfficeFilterOfficeRuleDtoFilter>;
  or?: InputMaybe<Array<Nq_OfficeFilter>>;
  teams?: InputMaybe<Nq_OfficeFilternq_TeamFilter>;
};

export type Nq_OfficeFilterOfficeRuleDtoFilter = {
  and?: InputMaybe<Array<Nq_OfficeFilterOfficeRuleDtoFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_OfficeFilterOfficeRuleDtoFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_OfficeFilternq_CityFilter = {
  and?: InputMaybe<Array<Nq_OfficeFilternq_CityFilter>>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Nq_OfficeFilternq_CityFilter>>;
};

export type Nq_OfficeFilternq_TeamFilter = {
  and?: InputMaybe<Array<Nq_OfficeFilternq_TeamFilter>>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<Nq_OfficeFilternq_TeamFilter>>;
};

export type Nq_OfficeMaxAggregate = {
  __typename?: 'nq_officeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_OfficeMinAggregate = {
  __typename?: 'nq_officeMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Nq_OfficeSort = {
  direction: CoreSortDirection;
  field: Nq_OfficeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_OfficeSortFields {
  Id = 'id',
  Name = 'name'
}

export type Nq_OfficeSumAggregate = {
  __typename?: 'nq_officeSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Office_Announcement = {
  __typename?: 'nq_office_announcement';
  announcement?: Maybe<Nq_Announcement>;
  announcement_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  office?: Maybe<Nq_Office>;
  office_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Nq_Office_AnnouncementAggregateGroupBy = {
  __typename?: 'nq_office_announcementAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Office_AnnouncementCountAggregate = {
  __typename?: 'nq_office_announcementCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Office_AnnouncementEdge = {
  __typename?: 'nq_office_announcementEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_office_announcement */
  node: Nq_Office_Announcement;
};

export type Nq_Office_AnnouncementFilter = {
  and?: InputMaybe<Array<Nq_Office_AnnouncementFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Office_AnnouncementFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Office_AnnouncementMaxAggregate = {
  __typename?: 'nq_office_announcementMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Office_AnnouncementMinAggregate = {
  __typename?: 'nq_office_announcementMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Office_AnnouncementSort = {
  direction: CoreSortDirection;
  field: Nq_Office_AnnouncementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_Office_AnnouncementSortFields {
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Nq_Office_Response = {
  __typename?: 'nq_office_response';
  data?: Maybe<Nq_Office>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Paginated_Office = {
  __typename?: 'nq_paginated_office';
  data?: Maybe<Array<Maybe<Nq_Office>>>;
  hasNextPage: Scalars['Boolean'];
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
  uploaded_url?: Maybe<Scalars['String']>;
};

export type Nq_Paginated_Profile = {
  __typename?: 'nq_paginated_profile';
  data?: Maybe<Array<Maybe<Nq_Profile>>>;
  hasNextPage: Scalars['Boolean'];
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Nq_Paginated_Team = {
  __typename?: 'nq_paginated_team';
  data?: Maybe<Array<Maybe<Nq_Team>>>;
  hasNextPage: Scalars['Boolean'];
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Nq_Profile = {
  __typename?: 'nq_profile';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  address_wallet?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  bank_account?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['DateTime']>;
  birthday?: Maybe<Scalars['DateTime']>;
  bonus_blacklist?: Maybe<Nq_Bonus_Blacklist>;
  created_announcements?: Maybe<Nq_Announcement>;
  created_at: Scalars['DateTime'];
  created_bonus_blacklists?: Maybe<Array<Nq_Bonus_Blacklist>>;
  created_office_rules?: Maybe<Array<OfficeRuleDto>>;
  created_review_withdrawal_requests?: Maybe<Array<Nq_Review_Withdrawal_Request_Dto>>;
  domicile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  envelope?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_update_password?: Maybe<Scalars['Boolean']>;
  managed_relations?: Maybe<Array<Nq_Relation>>;
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['DateTime']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  preferred_payment?: Maybe<Core_PreferredPayment>;
  relation?: Maybe<Nq_Relation>;
  relation_id?: Maybe<Scalars['String']>;
  residence?: Maybe<Scalars['String']>;
  review_withdrawal_requests?: Maybe<Array<Nq_Review_Withdrawal_Request_Dto>>;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
  user_name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Float']>;
};


export type Nq_ProfileCreated_Bonus_BlacklistsArgs = {
  filter?: InputMaybe<Nq_Bonus_BlacklistFilter>;
  sorting?: InputMaybe<Array<Nq_Bonus_BlacklistSort>>;
};


export type Nq_ProfileCreated_Office_RulesArgs = {
  filter?: InputMaybe<OfficeRuleDtoFilter>;
  sorting?: InputMaybe<Array<OfficeRuleDtoSort>>;
};


export type Nq_ProfileCreated_Review_Withdrawal_RequestsArgs = {
  filter?: InputMaybe<Nq_Review_Withdrawal_Request_DtoFilter>;
  sorting?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoSort>>;
};


export type Nq_ProfileManaged_RelationsArgs = {
  filter?: InputMaybe<Nq_RelationFilter>;
  sorting?: InputMaybe<Array<Nq_RelationSort>>;
};


export type Nq_ProfileReview_Withdrawal_RequestsArgs = {
  filter?: InputMaybe<Nq_Review_Withdrawal_Request_DtoFilter>;
  sorting?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoSort>>;
};

export type Nq_ProfileAggregateGroupBy = {
  __typename?: 'nq_profileAggregateGroupBy';
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  preferred_payment?: Maybe<Core_PreferredPayment>;
  role?: Maybe<Scalars['String']>;
};

export type Nq_ProfileCountAggregate = {
  __typename?: 'nq_profileCountAggregate';
  fullname?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  preferred_payment?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
};

export type Nq_ProfileFilter = {
  and?: InputMaybe<Array<Nq_ProfileFilter>>;
  bonus_blacklist?: InputMaybe<Nq_ProfileFilternq_Bonus_BlacklistFilter>;
  created_announcements?: InputMaybe<Nq_ProfileFilternq_AnnouncementFilter>;
  created_bonus_blacklists?: InputMaybe<Nq_ProfileFilternq_Bonus_BlacklistFilter>;
  created_office_rules?: InputMaybe<Nq_ProfileFilterOfficeRuleDtoFilter>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileFilter>>;
  preferred_payment?: InputMaybe<Core_PreferredPaymentFilterComparison>;
  relation?: InputMaybe<Nq_ProfileFilternq_RelationFilter>;
  role?: InputMaybe<StringFieldComparison>;
};

export type Nq_ProfileFilterOfficeRuleDtoFilter = {
  and?: InputMaybe<Array<Nq_ProfileFilterOfficeRuleDtoFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileFilterOfficeRuleDtoFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_ProfileFilternq_AnnouncementFilter = {
  and?: InputMaybe<Array<Nq_ProfileFilternq_AnnouncementFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileFilternq_AnnouncementFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_ProfileFilternq_Bonus_BlacklistFilter = {
  and?: InputMaybe<Array<Nq_ProfileFilternq_Bonus_BlacklistFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileFilternq_Bonus_BlacklistFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_ProfileFilternq_RelationFilter = {
  and?: InputMaybe<Array<Nq_ProfileFilternq_RelationFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileFilternq_RelationFilter>>;
};

export type Nq_ProfileMaxAggregate = {
  __typename?: 'nq_profileMaxAggregate';
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  preferred_payment?: Maybe<Core_PreferredPayment>;
  role?: Maybe<Scalars['String']>;
};

export type Nq_ProfileMinAggregate = {
  __typename?: 'nq_profileMinAggregate';
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  preferred_payment?: Maybe<Core_PreferredPayment>;
  role?: Maybe<Scalars['String']>;
};

export type Nq_ProfileSort = {
  direction: CoreSortDirection;
  field: Nq_ProfileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_ProfileSortFields {
  Fullname = 'fullname',
  Id = 'id',
  PreferredPayment = 'preferred_payment',
  Role = 'role'
}

export type Nq_ProfileSubscriptionFilter = {
  and?: InputMaybe<Array<Nq_ProfileSubscriptionFilter>>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_ProfileSubscriptionFilter>>;
  preferred_payment?: InputMaybe<Core_PreferredPaymentFilterComparison>;
  role?: InputMaybe<StringFieldComparison>;
};

export type Nq_Profile_Response = {
  __typename?: 'nq_profile_response';
  data?: Maybe<Nq_Profile>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Relation = {
  __typename?: 'nq_relation';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  managed_by_id: Scalars['String'];
  manager?: Maybe<Nq_Profile>;
  profile?: Maybe<Nq_Profile>;
  team?: Maybe<Nq_Team>;
  team_id: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  user_id?: Maybe<Scalars['String']>;
};

export type Nq_RelationAggregateGroupBy = {
  __typename?: 'nq_relationAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_RelationCountAggregate = {
  __typename?: 'nq_relationCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_RelationEdge = {
  __typename?: 'nq_relationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_relation */
  node: Nq_Relation;
};

export type Nq_RelationFilter = {
  and?: InputMaybe<Array<Nq_RelationFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  manager?: InputMaybe<Nq_RelationFilternq_ProfileFilter>;
  or?: InputMaybe<Array<Nq_RelationFilter>>;
  profile?: InputMaybe<Nq_RelationFilternq_ProfileFilter>;
  team?: InputMaybe<Nq_RelationFilternq_TeamFilter>;
};

export type Nq_RelationFilternq_ProfileFilter = {
  and?: InputMaybe<Array<Nq_RelationFilternq_ProfileFilter>>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_RelationFilternq_ProfileFilter>>;
  preferred_payment?: InputMaybe<Core_PreferredPaymentFilterComparison>;
  role?: InputMaybe<StringFieldComparison>;
};

export type Nq_RelationFilternq_TeamFilter = {
  and?: InputMaybe<Array<Nq_RelationFilternq_TeamFilter>>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<Nq_RelationFilternq_TeamFilter>>;
};

export type Nq_RelationMaxAggregate = {
  __typename?: 'nq_relationMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_RelationMinAggregate = {
  __typename?: 'nq_relationMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type Nq_RelationSort = {
  direction: CoreSortDirection;
  field: Nq_RelationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_RelationSortFields {
  Id = 'id'
}

export type Nq_Report = {
  __typename?: 'nq_report';
  bonus_date: Scalars['DateTime'];
  bonus_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['Int'];
  is_done: Scalars['Boolean'];
  is_readed: Scalars['Boolean'];
  last_rely_id: Scalars['Int'];
  status: Scalars['Int'];
  type: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type Nq_ReportFilter = {
  and?: InputMaybe<Array<Nq_ReportFilter>>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<Nq_ReportFilter>>;
};

export type Nq_ReportSort = {
  direction: CoreSortDirection;
  field: Nq_ReportSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_ReportSortFields {
  Id = 'id'
}

export type Nq_Report_Rely = {
  __typename?: 'nq_report_rely';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['Int'];
  is_approver: Scalars['Boolean'];
  profile?: Maybe<Nq_Profile>;
  report?: Maybe<Nq_Report>;
  report_id: Scalars['Int'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type Nq_Report_RelyAggregateGroupBy = {
  __typename?: 'nq_report_relyAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Report_RelyAvgAggregate = {
  __typename?: 'nq_report_relyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Report_RelyCountAggregate = {
  __typename?: 'nq_report_relyCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Report_RelyEdge = {
  __typename?: 'nq_report_relyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_report_rely */
  node: Nq_Report_Rely;
};

export type Nq_Report_RelyMaxAggregate = {
  __typename?: 'nq_report_relyMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Report_RelyMinAggregate = {
  __typename?: 'nq_report_relyMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_Report_RelySumAggregate = {
  __typename?: 'nq_report_relySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Nq_Review_Withdrawal_Request_Dto = {
  __typename?: 'nq_review_withdrawal_request_dto';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issuer?: Maybe<Nq_Profile>;
  issuer_id?: Maybe<Scalars['String']>;
  processor?: Maybe<Nq_Profile>;
  processor_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type Nq_Review_Withdrawal_Request_DtoAggregateGroupBy = {
  __typename?: 'nq_review_withdrawal_request_dtoAggregateGroupBy';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Review_Withdrawal_Request_DtoCountAggregate = {
  __typename?: 'nq_review_withdrawal_request_dtoCountAggregate';
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Nq_Review_Withdrawal_Request_DtoDeleteFilter = {
  and?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoDeleteFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoDeleteFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Review_Withdrawal_Request_DtoEdge = {
  __typename?: 'nq_review_withdrawal_request_dtoEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_review_withdrawal_request_dto */
  node: Nq_Review_Withdrawal_Request_Dto;
};

export type Nq_Review_Withdrawal_Request_DtoFilter = {
  and?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Review_Withdrawal_Request_DtoMaxAggregate = {
  __typename?: 'nq_review_withdrawal_request_dtoMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Review_Withdrawal_Request_DtoMinAggregate = {
  __typename?: 'nq_review_withdrawal_request_dtoMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Nq_Review_Withdrawal_Request_DtoSort = {
  direction: CoreSortDirection;
  field: Nq_Review_Withdrawal_Request_DtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_Review_Withdrawal_Request_DtoSortFields {
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Nq_Review_Withdrawal_Request_DtoUpdateFilter = {
  and?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoUpdateFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoUpdateFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type Nq_Sign_Up = {
  address_wallet?: InputMaybe<Scalars['String']>;
  bank: Nq_Sign_Up_Bank;
  birthday: Scalars['DateTime'];
  domicile: Scalars['String'];
  email: Scalars['String'];
  fullname: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  national_id: Scalars['String'];
  national_id_issue_date: Scalars['DateTime'];
  ngan_luong_account: Scalars['String'];
  office_id: Scalars['Float'];
  password: Scalars['String'];
  phone: Scalars['String'];
  place_issue_national_id: Scalars['String'];
  preffered_payment: Scalars['String'];
  residence: Scalars['String'];
  role_type: Scalars['Float'];
};

export type Nq_Sign_Up_Bank = {
  account_holder: Scalars['String'];
  account_number: Scalars['String'];
  bank_id: Scalars['String'];
};

export type Nq_Synchronize_Airtable_Base_Response = {
  __typename?: 'nq_synchronize_airtable_base_response';
  data?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Team = {
  __typename?: 'nq_team';
  address: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  creator?: Maybe<Nq_Profile>;
  format_name: Scalars['String'];
  id: Scalars['Int'];
  is_empty: Scalars['Boolean'];
  leaders?: Maybe<Array<Maybe<Nq_Profile>>>;
  managed_by_id?: Maybe<Scalars['String']>;
  manager?: Maybe<Nq_Profile>;
  name: Scalars['String'];
  office?: Maybe<Nq_Office>;
  office_id: Scalars['Float'];
  relation_count?: Maybe<Scalars['Float']>;
  relations?: Maybe<Array<Nq_Relation>>;
  updated_at: Scalars['DateTime'];
};


export type Nq_TeamRelationsArgs = {
  filter?: InputMaybe<Nq_RelationFilter>;
  sorting?: InputMaybe<Array<Nq_RelationSort>>;
};

export type Nq_TeamAggregateGroupBy = {
  __typename?: 'nq_teamAggregateGroupBy';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_TeamCountAggregate = {
  __typename?: 'nq_teamCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_TeamEdge = {
  __typename?: 'nq_teamEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the nq_team */
  node: Nq_Team;
};

export type Nq_TeamFilter = {
  and?: InputMaybe<Array<Nq_TeamFilter>>;
  creator?: InputMaybe<Nq_TeamFilternq_ProfileFilter>;
  id?: InputMaybe<IntFieldComparison>;
  manager?: InputMaybe<Nq_TeamFilternq_ProfileFilter>;
  office?: InputMaybe<Nq_TeamFilternq_OfficeFilter>;
  or?: InputMaybe<Array<Nq_TeamFilter>>;
  relations?: InputMaybe<Nq_TeamFilternq_RelationFilter>;
};

export type Nq_TeamFilternq_OfficeFilter = {
  and?: InputMaybe<Array<Nq_TeamFilternq_OfficeFilter>>;
  id?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Nq_TeamFilternq_OfficeFilter>>;
};

export type Nq_TeamFilternq_ProfileFilter = {
  and?: InputMaybe<Array<Nq_TeamFilternq_ProfileFilter>>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_TeamFilternq_ProfileFilter>>;
  preferred_payment?: InputMaybe<Core_PreferredPaymentFilterComparison>;
  role?: InputMaybe<StringFieldComparison>;
};

export type Nq_TeamFilternq_RelationFilter = {
  and?: InputMaybe<Array<Nq_TeamFilternq_RelationFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<Nq_TeamFilternq_RelationFilter>>;
};

export type Nq_TeamMaxAggregate = {
  __typename?: 'nq_teamMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_TeamMinAggregate = {
  __typename?: 'nq_teamMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Nq_TeamSort = {
  direction: CoreSortDirection;
  field: Nq_TeamSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Nq_TeamSortFields {
  Id = 'id'
}

export type Nq_Team_Response = {
  __typename?: 'nq_team_response';
  data?: Maybe<Nq_Team>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Update_Office_Dto = {
  address?: InputMaybe<Scalars['String']>;
  airtable?: InputMaybe<Nq_Airtable>;
  airtable_base_id?: InputMaybe<Scalars['String']>;
  airtable_base_name?: InputMaybe<Scalars['String']>;
  city_id?: InputMaybe<Scalars['Float']>;
  code?: InputMaybe<Scalars['String']>;
  date_request_bonus?: InputMaybe<Scalars['DateTime']>;
  date_request_salary?: InputMaybe<Scalars['DateTime']>;
  format_name?: InputMaybe<Scalars['String']>;
  managed_by?: InputMaybe<Scalars['String']>;
  managed_by_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_rules?: InputMaybe<Array<InputMaybe<Nq_Update_Office_Rule>>>;
};

export type Nq_Update_Office_Response = {
  __typename?: 'nq_update_office_response';
  affected_rows: Scalars['Float'];
};

export type Nq_Update_Office_Response_Dto = {
  __typename?: 'nq_update_office_response_dto';
  data?: Maybe<Nq_Update_Office_Response>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

export type Nq_Update_Office_Rule = {
  amount?: InputMaybe<Scalars['Float']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  office_id?: InputMaybe<Scalars['Float']>;
  time_range?: InputMaybe<Scalars['Float']>;
};

export enum Nq_Verified_Status {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type Nq_Verify_Email = {
  __typename?: 'nq_verify_email';
  error_ids: Array<Scalars['String']>;
  message: Scalars['String'];
};

export type Nq_Verify_Email_Response = {
  __typename?: 'nq_verify_email_response';
  data?: Maybe<Nq_Verify_Email>;
  message: Scalars['String'];
  status_code: Scalars['Int'];
  success: Scalars['Boolean'];
};

/** columns and relationships of "office" */
export type Office = {
  __typename?: 'office';
  address: Scalars['String'];
  airtable?: Maybe<Scalars['jsonb']>;
  airtable_base_id?: Maybe<Scalars['String']>;
  airtable_base_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  approver_offices: Array<Approver_Office>;
  /** An aggregated array relationship */
  approver_offices_aggregate: Approver_Office_Aggregate;
  /** An array relationship */
  change_office_requests: Array<Change_Office_Request>;
  /** An aggregated array relationship */
  change_office_requests_aggregate: Change_Office_Request_Aggregate;
  /** An object relationship */
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "get_office_member_count" */
  employee_count?: Maybe<Scalars['bigint']>;
  format_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  managed_by?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  office_announcements: Array<Office_Announcement>;
  /** An aggregated array relationship */
  office_announcements_aggregate: Office_Announcement_Aggregate;
  /** An array relationship */
  office_rules: Array<Office_Rule>;
  /** An aggregated array relationship */
  office_rules_aggregate: Office_Rule_Aggregate;
  /** An object relationship */
  profileManagedBy?: Maybe<Profile>;
  /** A computed field, executes function "get_office_team_count" */
  team_count?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  teams: Array<Team>;
  /** An aggregated array relationship */
  teams_aggregate: Team_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "office" */
export type OfficeAirtableArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "office" */
export type OfficeApprover_OfficesArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeApprover_Offices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeChange_Office_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeChange_Office_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeOffice_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeOffice_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeOffice_RulesArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeOffice_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeTeamsArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "office" */
export type OfficeTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};

export type OfficeListOutput = {
  __typename?: 'officeListOutput';
  data?: Maybe<Scalars['RenderedOfficeObject']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "office" */
export type Office_Aggregate = {
  __typename?: 'office_aggregate';
  aggregate?: Maybe<Office_Aggregate_Fields>;
  nodes: Array<Office>;
};

/** aggregate fields of "office" */
export type Office_Aggregate_Fields = {
  __typename?: 'office_aggregate_fields';
  avg?: Maybe<Office_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Office_Max_Fields>;
  min?: Maybe<Office_Min_Fields>;
  stddev?: Maybe<Office_Stddev_Fields>;
  stddev_pop?: Maybe<Office_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Office_Stddev_Samp_Fields>;
  sum?: Maybe<Office_Sum_Fields>;
  var_pop?: Maybe<Office_Var_Pop_Fields>;
  var_samp?: Maybe<Office_Var_Samp_Fields>;
  variance?: Maybe<Office_Variance_Fields>;
};


/** aggregate fields of "office" */
export type Office_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Office_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "office" */
export type Office_Aggregate_Order_By = {
  avg?: InputMaybe<Office_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Office_Max_Order_By>;
  min?: InputMaybe<Office_Min_Order_By>;
  stddev?: InputMaybe<Office_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Office_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Office_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Office_Sum_Order_By>;
  var_pop?: InputMaybe<Office_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Office_Var_Samp_Order_By>;
  variance?: InputMaybe<Office_Variance_Order_By>;
};

/** columns and relationships of "office_announcement" */
export type Office_Announcement = {
  __typename?: 'office_announcement';
  /** An object relationship */
  announcement: Announcement;
  announcement_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  office: Office;
  office_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "office_announcement" */
export type Office_Announcement_Aggregate = {
  __typename?: 'office_announcement_aggregate';
  aggregate?: Maybe<Office_Announcement_Aggregate_Fields>;
  nodes: Array<Office_Announcement>;
};

/** aggregate fields of "office_announcement" */
export type Office_Announcement_Aggregate_Fields = {
  __typename?: 'office_announcement_aggregate_fields';
  avg?: Maybe<Office_Announcement_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Office_Announcement_Max_Fields>;
  min?: Maybe<Office_Announcement_Min_Fields>;
  stddev?: Maybe<Office_Announcement_Stddev_Fields>;
  stddev_pop?: Maybe<Office_Announcement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Office_Announcement_Stddev_Samp_Fields>;
  sum?: Maybe<Office_Announcement_Sum_Fields>;
  var_pop?: Maybe<Office_Announcement_Var_Pop_Fields>;
  var_samp?: Maybe<Office_Announcement_Var_Samp_Fields>;
  variance?: Maybe<Office_Announcement_Variance_Fields>;
};


/** aggregate fields of "office_announcement" */
export type Office_Announcement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "office_announcement" */
export type Office_Announcement_Aggregate_Order_By = {
  avg?: InputMaybe<Office_Announcement_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Office_Announcement_Max_Order_By>;
  min?: InputMaybe<Office_Announcement_Min_Order_By>;
  stddev?: InputMaybe<Office_Announcement_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Office_Announcement_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Office_Announcement_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Office_Announcement_Sum_Order_By>;
  var_pop?: InputMaybe<Office_Announcement_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Office_Announcement_Var_Samp_Order_By>;
  variance?: InputMaybe<Office_Announcement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "office_announcement" */
export type Office_Announcement_Arr_Rel_Insert_Input = {
  data: Array<Office_Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Office_Announcement_On_Conflict>;
};

/** aggregate avg on columns */
export type Office_Announcement_Avg_Fields = {
  __typename?: 'office_announcement_avg_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "office_announcement" */
export type Office_Announcement_Avg_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "office_announcement". All fields are combined with a logical 'AND'. */
export type Office_Announcement_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Office_Announcement_Bool_Exp>>>;
  _not?: InputMaybe<Office_Announcement_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Office_Announcement_Bool_Exp>>>;
  announcement?: InputMaybe<Announcement_Bool_Exp>;
  announcement_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  office?: InputMaybe<Office_Bool_Exp>;
  office_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "office_announcement" */
export enum Office_Announcement_Constraint {
  /** unique or primary key constraint */
  OfficeAnnouncementPkey = 'office_announcement_pkey'
}

/** input type for incrementing integer column in table "office_announcement" */
export type Office_Announcement_Inc_Input = {
  office_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "office_announcement" */
export type Office_Announcement_Insert_Input = {
  announcement?: InputMaybe<Announcement_Obj_Rel_Insert_Input>;
  announcement_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Office_Announcement_Max_Fields = {
  __typename?: 'office_announcement_max_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "office_announcement" */
export type Office_Announcement_Max_Order_By = {
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Office_Announcement_Min_Fields = {
  __typename?: 'office_announcement_min_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "office_announcement" */
export type Office_Announcement_Min_Order_By = {
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "office_announcement" */
export type Office_Announcement_Mutation_Response = {
  __typename?: 'office_announcement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Office_Announcement>;
};

/** input type for inserting object relation for remote table "office_announcement" */
export type Office_Announcement_Obj_Rel_Insert_Input = {
  data: Office_Announcement_Insert_Input;
  on_conflict?: InputMaybe<Office_Announcement_On_Conflict>;
};

/** on conflict condition type for table "office_announcement" */
export type Office_Announcement_On_Conflict = {
  constraint: Office_Announcement_Constraint;
  update_columns: Array<Office_Announcement_Update_Column>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};

/** ordering options when selecting data from "office_announcement" */
export type Office_Announcement_Order_By = {
  announcement?: InputMaybe<Announcement_Order_By>;
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office?: InputMaybe<Office_Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "office_announcement" */
export type Office_Announcement_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "office_announcement" */
export enum Office_Announcement_Select_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "office_announcement" */
export type Office_Announcement_Set_Input = {
  announcement_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Office_Announcement_Stddev_Fields = {
  __typename?: 'office_announcement_stddev_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "office_announcement" */
export type Office_Announcement_Stddev_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Office_Announcement_Stddev_Pop_Fields = {
  __typename?: 'office_announcement_stddev_pop_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "office_announcement" */
export type Office_Announcement_Stddev_Pop_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Office_Announcement_Stddev_Samp_Fields = {
  __typename?: 'office_announcement_stddev_samp_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "office_announcement" */
export type Office_Announcement_Stddev_Samp_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Office_Announcement_Sum_Fields = {
  __typename?: 'office_announcement_sum_fields';
  office_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "office_announcement" */
export type Office_Announcement_Sum_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** update columns of table "office_announcement" */
export enum Office_Announcement_Update_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Office_Announcement_Var_Pop_Fields = {
  __typename?: 'office_announcement_var_pop_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "office_announcement" */
export type Office_Announcement_Var_Pop_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Office_Announcement_Var_Samp_Fields = {
  __typename?: 'office_announcement_var_samp_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "office_announcement" */
export type Office_Announcement_Var_Samp_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Office_Announcement_Variance_Fields = {
  __typename?: 'office_announcement_variance_fields';
  office_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "office_announcement" */
export type Office_Announcement_Variance_Order_By = {
  office_id?: InputMaybe<Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Office_Append_Input = {
  airtable?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "office" */
export type Office_Arr_Rel_Insert_Input = {
  data: Array<Office_Insert_Input>;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};

/** aggregate avg on columns */
export type Office_Avg_Fields = {
  __typename?: 'office_avg_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "office" */
export type Office_Avg_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "office". All fields are combined with a logical 'AND'. */
export type Office_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Office_Bool_Exp>>>;
  _not?: InputMaybe<Office_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Office_Bool_Exp>>>;
  address?: InputMaybe<String_Comparison_Exp>;
  airtable?: InputMaybe<Jsonb_Comparison_Exp>;
  airtable_base_id?: InputMaybe<String_Comparison_Exp>;
  airtable_base_name?: InputMaybe<String_Comparison_Exp>;
  approver_offices?: InputMaybe<Approver_Office_Bool_Exp>;
  change_office_requests?: InputMaybe<Change_Office_Request_Bool_Exp>;
  city?: InputMaybe<City_Bool_Exp>;
  city_id?: InputMaybe<Int_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_request_bonus?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_request_salary?: InputMaybe<Timestamptz_Comparison_Exp>;
  format_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  managed_by?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  office_announcements?: InputMaybe<Office_Announcement_Bool_Exp>;
  office_rules?: InputMaybe<Office_Rule_Bool_Exp>;
  profileManagedBy?: InputMaybe<Profile_Bool_Exp>;
  teams?: InputMaybe<Team_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "office" */
export enum Office_Constraint {
  /** unique or primary key constraint */
  OfficeCodeKey = 'office_code_key',
  /** unique or primary key constraint */
  OfficeIdOfficeKey = 'office_id_office_key',
  /** unique or primary key constraint */
  OfficePkey = 'office_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Office_Delete_At_Path_Input = {
  airtable?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Office_Delete_Elem_Input = {
  airtable?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Office_Delete_Key_Input = {
  airtable?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "office" */
export type Office_Inc_Input = {
  city_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "office" */
export type Office_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  airtable?: InputMaybe<Scalars['jsonb']>;
  airtable_base_id?: InputMaybe<Scalars['String']>;
  airtable_base_name?: InputMaybe<Scalars['String']>;
  approver_offices?: InputMaybe<Approver_Office_Arr_Rel_Insert_Input>;
  change_office_requests?: InputMaybe<Change_Office_Request_Arr_Rel_Insert_Input>;
  city?: InputMaybe<City_Obj_Rel_Insert_Input>;
  city_id?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_request_bonus?: InputMaybe<Scalars['timestamptz']>;
  date_request_salary?: InputMaybe<Scalars['timestamptz']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  managed_by?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_announcements?: InputMaybe<Office_Announcement_Arr_Rel_Insert_Input>;
  office_rules?: InputMaybe<Office_Rule_Arr_Rel_Insert_Input>;
  profileManagedBy?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Office_Max_Fields = {
  __typename?: 'office_max_fields';
  address?: Maybe<Scalars['String']>;
  airtable_base_id?: Maybe<Scalars['String']>;
  airtable_base_name?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "office" */
export type Office_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  airtable_base_id?: InputMaybe<Order_By>;
  airtable_base_name?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Office_Min_Fields = {
  __typename?: 'office_min_fields';
  address?: Maybe<Scalars['String']>;
  airtable_base_id?: Maybe<Scalars['String']>;
  airtable_base_name?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_request_bonus?: Maybe<Scalars['timestamptz']>;
  date_request_salary?: Maybe<Scalars['timestamptz']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "office" */
export type Office_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  airtable_base_id?: InputMaybe<Order_By>;
  airtable_base_name?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "office" */
export type Office_Mutation_Response = {
  __typename?: 'office_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Office>;
};

/** input type for inserting object relation for remote table "office" */
export type Office_Obj_Rel_Insert_Input = {
  data: Office_Insert_Input;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};

/** on conflict condition type for table "office" */
export type Office_On_Conflict = {
  constraint: Office_Constraint;
  update_columns: Array<Office_Update_Column>;
  where?: InputMaybe<Office_Bool_Exp>;
};

/** ordering options when selecting data from "office" */
export type Office_Order_By = {
  address?: InputMaybe<Order_By>;
  airtable?: InputMaybe<Order_By>;
  airtable_base_id?: InputMaybe<Order_By>;
  airtable_base_name?: InputMaybe<Order_By>;
  approver_offices_aggregate?: InputMaybe<Approver_Office_Aggregate_Order_By>;
  change_office_requests_aggregate?: InputMaybe<Change_Office_Request_Aggregate_Order_By>;
  city?: InputMaybe<City_Order_By>;
  city_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_request_bonus?: InputMaybe<Order_By>;
  date_request_salary?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  office_announcements_aggregate?: InputMaybe<Office_Announcement_Aggregate_Order_By>;
  office_rules_aggregate?: InputMaybe<Office_Rule_Aggregate_Order_By>;
  profileManagedBy?: InputMaybe<Profile_Order_By>;
  teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "office" */
export type Office_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Office_Prepend_Input = {
  airtable?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "office_rule" */
export type Office_Rule = {
  __typename?: 'office_rule';
  amount?: Maybe<Scalars['float8']>;
  /** An array relationship */
  bonus_office_rules: Array<Bonus_Office_Rule>;
  /** An aggregated array relationship */
  bonus_office_rules_aggregate: Bonus_Office_Rule_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by_id: Scalars['String'];
  /** An object relationship */
  creator: Profile;
  id: Scalars['uuid'];
  /** An object relationship */
  office: Office;
  office_id: Scalars['Int'];
  time_range?: Maybe<Scalars['bigint']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "office_rule" */
export type Office_RuleBonus_Office_RulesArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};


/** columns and relationships of "office_rule" */
export type Office_RuleBonus_Office_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};

/** aggregated selection of "office_rule" */
export type Office_Rule_Aggregate = {
  __typename?: 'office_rule_aggregate';
  aggregate?: Maybe<Office_Rule_Aggregate_Fields>;
  nodes: Array<Office_Rule>;
};

/** aggregate fields of "office_rule" */
export type Office_Rule_Aggregate_Fields = {
  __typename?: 'office_rule_aggregate_fields';
  avg?: Maybe<Office_Rule_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Office_Rule_Max_Fields>;
  min?: Maybe<Office_Rule_Min_Fields>;
  stddev?: Maybe<Office_Rule_Stddev_Fields>;
  stddev_pop?: Maybe<Office_Rule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Office_Rule_Stddev_Samp_Fields>;
  sum?: Maybe<Office_Rule_Sum_Fields>;
  var_pop?: Maybe<Office_Rule_Var_Pop_Fields>;
  var_samp?: Maybe<Office_Rule_Var_Samp_Fields>;
  variance?: Maybe<Office_Rule_Variance_Fields>;
};


/** aggregate fields of "office_rule" */
export type Office_Rule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Office_Rule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "office_rule" */
export type Office_Rule_Aggregate_Order_By = {
  avg?: InputMaybe<Office_Rule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Office_Rule_Max_Order_By>;
  min?: InputMaybe<Office_Rule_Min_Order_By>;
  stddev?: InputMaybe<Office_Rule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Office_Rule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Office_Rule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Office_Rule_Sum_Order_By>;
  var_pop?: InputMaybe<Office_Rule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Office_Rule_Var_Samp_Order_By>;
  variance?: InputMaybe<Office_Rule_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "office_rule" */
export type Office_Rule_Arr_Rel_Insert_Input = {
  data: Array<Office_Rule_Insert_Input>;
  on_conflict?: InputMaybe<Office_Rule_On_Conflict>;
};

/** aggregate avg on columns */
export type Office_Rule_Avg_Fields = {
  __typename?: 'office_rule_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "office_rule" */
export type Office_Rule_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "office_rule". All fields are combined with a logical 'AND'. */
export type Office_Rule_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Office_Rule_Bool_Exp>>>;
  _not?: InputMaybe<Office_Rule_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Office_Rule_Bool_Exp>>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  bonus_office_rules?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<Profile_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  office?: InputMaybe<Office_Bool_Exp>;
  office_id?: InputMaybe<Int_Comparison_Exp>;
  time_range?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "office_rule" */
export enum Office_Rule_Constraint {
  /** unique or primary key constraint */
  OfficeRulePkey = 'office_rule_pkey'
}

/** input type for incrementing integer column in table "office_rule" */
export type Office_Rule_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  office_id?: InputMaybe<Scalars['Int']>;
  time_range?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "office_rule" */
export type Office_Rule_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  bonus_office_rules?: InputMaybe<Bonus_Office_Rule_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  office_id?: InputMaybe<Scalars['Int']>;
  time_range?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Office_Rule_Max_Fields = {
  __typename?: 'office_rule_max_fields';
  amount?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  office_id?: Maybe<Scalars['Int']>;
  time_range?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "office_rule" */
export type Office_Rule_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Office_Rule_Min_Fields = {
  __typename?: 'office_rule_min_fields';
  amount?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  office_id?: Maybe<Scalars['Int']>;
  time_range?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "office_rule" */
export type Office_Rule_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "office_rule" */
export type Office_Rule_Mutation_Response = {
  __typename?: 'office_rule_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Office_Rule>;
};

/** input type for inserting object relation for remote table "office_rule" */
export type Office_Rule_Obj_Rel_Insert_Input = {
  data: Office_Rule_Insert_Input;
  on_conflict?: InputMaybe<Office_Rule_On_Conflict>;
};

/** on conflict condition type for table "office_rule" */
export type Office_Rule_On_Conflict = {
  constraint: Office_Rule_Constraint;
  update_columns: Array<Office_Rule_Update_Column>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};

/** ordering options when selecting data from "office_rule" */
export type Office_Rule_Order_By = {
  amount?: InputMaybe<Order_By>;
  bonus_office_rules_aggregate?: InputMaybe<Bonus_Office_Rule_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Profile_Order_By>;
  id?: InputMaybe<Order_By>;
  office?: InputMaybe<Office_Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "office_rule" */
export type Office_Rule_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "office_rule" */
export enum Office_Rule_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  TimeRange = 'time_range',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "office_rule" */
export type Office_Rule_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  office_id?: InputMaybe<Scalars['Int']>;
  time_range?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Office_Rule_Stddev_Fields = {
  __typename?: 'office_rule_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "office_rule" */
export type Office_Rule_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Office_Rule_Stddev_Pop_Fields = {
  __typename?: 'office_rule_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "office_rule" */
export type Office_Rule_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Office_Rule_Stddev_Samp_Fields = {
  __typename?: 'office_rule_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "office_rule" */
export type Office_Rule_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Office_Rule_Sum_Fields = {
  __typename?: 'office_rule_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  office_id?: Maybe<Scalars['Int']>;
  time_range?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "office_rule" */
export type Office_Rule_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** update columns of table "office_rule" */
export enum Office_Rule_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  TimeRange = 'time_range',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Office_Rule_Var_Pop_Fields = {
  __typename?: 'office_rule_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "office_rule" */
export type Office_Rule_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Office_Rule_Var_Samp_Fields = {
  __typename?: 'office_rule_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "office_rule" */
export type Office_Rule_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Office_Rule_Variance_Fields = {
  __typename?: 'office_rule_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
  time_range?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "office_rule" */
export type Office_Rule_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  time_range?: InputMaybe<Order_By>;
};

/** select columns of table "office" */
export enum Office_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Airtable = 'airtable',
  /** column name */
  AirtableBaseId = 'airtable_base_id',
  /** column name */
  AirtableBaseName = 'airtable_base_name',
  /** column name */
  CityId = 'city_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateRequestBonus = 'date_request_bonus',
  /** column name */
  DateRequestSalary = 'date_request_salary',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Id = 'id',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "office" */
export type Office_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  airtable?: InputMaybe<Scalars['jsonb']>;
  airtable_base_id?: InputMaybe<Scalars['String']>;
  airtable_base_name?: InputMaybe<Scalars['String']>;
  city_id?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_request_bonus?: InputMaybe<Scalars['timestamptz']>;
  date_request_salary?: InputMaybe<Scalars['timestamptz']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  managed_by?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Office_Stddev_Fields = {
  __typename?: 'office_stddev_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "office" */
export type Office_Stddev_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Office_Stddev_Pop_Fields = {
  __typename?: 'office_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "office" */
export type Office_Stddev_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Office_Stddev_Samp_Fields = {
  __typename?: 'office_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "office" */
export type Office_Stddev_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Office_Sum_Fields = {
  __typename?: 'office_sum_fields';
  city_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "office" */
export type Office_Sum_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "office" */
export enum Office_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Airtable = 'airtable',
  /** column name */
  AirtableBaseId = 'airtable_base_id',
  /** column name */
  AirtableBaseName = 'airtable_base_name',
  /** column name */
  CityId = 'city_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateRequestBonus = 'date_request_bonus',
  /** column name */
  DateRequestSalary = 'date_request_salary',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Id = 'id',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Office_Var_Pop_Fields = {
  __typename?: 'office_var_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "office" */
export type Office_Var_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Office_Var_Samp_Fields = {
  __typename?: 'office_var_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "office" */
export type Office_Var_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Office_Variance_Fields = {
  __typename?: 'office_variance_fields';
  city_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "office" */
export type Office_Variance_Order_By = {
  city_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type OutputReport = {
  __typename?: 'outputReport';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "payment_method" */
export type Payment_Method = {
  __typename?: 'payment_method';
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  profiles: Array<Profile>;
  /** An aggregated array relationship */
  profiles_aggregate: Profile_Aggregate;
};


/** columns and relationships of "payment_method" */
export type Payment_MethodProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "payment_method" */
export type Payment_MethodProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** aggregated selection of "payment_method" */
export type Payment_Method_Aggregate = {
  __typename?: 'payment_method_aggregate';
  aggregate?: Maybe<Payment_Method_Aggregate_Fields>;
  nodes: Array<Payment_Method>;
};

/** aggregate fields of "payment_method" */
export type Payment_Method_Aggregate_Fields = {
  __typename?: 'payment_method_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Payment_Method_Max_Fields>;
  min?: Maybe<Payment_Method_Min_Fields>;
};


/** aggregate fields of "payment_method" */
export type Payment_Method_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Method_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payment_method" */
export type Payment_Method_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payment_Method_Max_Order_By>;
  min?: InputMaybe<Payment_Method_Min_Order_By>;
};

/** input type for inserting array relation for remote table "payment_method" */
export type Payment_Method_Arr_Rel_Insert_Input = {
  data: Array<Payment_Method_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Method_On_Conflict>;
};

/** Boolean expression to filter rows from the table "payment_method". All fields are combined with a logical 'AND'. */
export type Payment_Method_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Payment_Method_Bool_Exp>>>;
  _not?: InputMaybe<Payment_Method_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Payment_Method_Bool_Exp>>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profiles?: InputMaybe<Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "payment_method" */
export enum Payment_Method_Constraint {
  /** unique or primary key constraint */
  PaymentMethodNameKey = 'payment_method_name_key',
  /** unique or primary key constraint */
  PaymentMethodPkey = 'payment_method_pkey'
}

export enum Payment_Method_Enum {
  /** nl */
  Nl = 'nl',
  /** ppd */
  Ppd = 'ppd'
}

/** expression to compare columns of type payment_method_enum. All fields are combined with logical 'AND'. */
export type Payment_Method_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Method_Enum>;
  _in?: InputMaybe<Array<Payment_Method_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Payment_Method_Enum>;
  _nin?: InputMaybe<Array<Payment_Method_Enum>>;
};

/** input type for inserting data into table "payment_method" */
export type Payment_Method_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profiles?: InputMaybe<Profile_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payment_Method_Max_Fields = {
  __typename?: 'payment_method_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "payment_method" */
export type Payment_Method_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Method_Min_Fields = {
  __typename?: 'payment_method_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "payment_method" */
export type Payment_Method_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payment_method" */
export type Payment_Method_Mutation_Response = {
  __typename?: 'payment_method_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Method>;
};

/** input type for inserting object relation for remote table "payment_method" */
export type Payment_Method_Obj_Rel_Insert_Input = {
  data: Payment_Method_Insert_Input;
  on_conflict?: InputMaybe<Payment_Method_On_Conflict>;
};

/** on conflict condition type for table "payment_method" */
export type Payment_Method_On_Conflict = {
  constraint: Payment_Method_Constraint;
  update_columns: Array<Payment_Method_Update_Column>;
  where?: InputMaybe<Payment_Method_Bool_Exp>;
};

/** ordering options when selecting data from "payment_method" */
export type Payment_Method_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profiles_aggregate?: InputMaybe<Profile_Aggregate_Order_By>;
};

/** primary key columns input for table: "payment_method" */
export type Payment_Method_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "payment_method" */
export enum Payment_Method_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "payment_method" */
export type Payment_Method_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "payment_method" */
export enum Payment_Method_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "penalize_user" */
export type Penalize_User = {
  __typename?: 'penalize_user';
  after_amount: Scalars['bigint'];
  amount: Scalars['bigint'];
  before_amount: Scalars['bigint'];
  /** An object relationship */
  bonus: Bonus;
  bonus_id: Scalars['Int'];
  /** An object relationship */
  bonus_type: Bonus_Type;
  breach_id: Scalars['uuid'];
  /** An object relationship */
  breach_user: Breach_User;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  type: Bonus_Type_Enum;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "penalize_user" */
export type Penalize_User_Aggregate = {
  __typename?: 'penalize_user_aggregate';
  aggregate?: Maybe<Penalize_User_Aggregate_Fields>;
  nodes: Array<Penalize_User>;
};

/** aggregate fields of "penalize_user" */
export type Penalize_User_Aggregate_Fields = {
  __typename?: 'penalize_user_aggregate_fields';
  avg?: Maybe<Penalize_User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Penalize_User_Max_Fields>;
  min?: Maybe<Penalize_User_Min_Fields>;
  stddev?: Maybe<Penalize_User_Stddev_Fields>;
  stddev_pop?: Maybe<Penalize_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Penalize_User_Stddev_Samp_Fields>;
  sum?: Maybe<Penalize_User_Sum_Fields>;
  var_pop?: Maybe<Penalize_User_Var_Pop_Fields>;
  var_samp?: Maybe<Penalize_User_Var_Samp_Fields>;
  variance?: Maybe<Penalize_User_Variance_Fields>;
};


/** aggregate fields of "penalize_user" */
export type Penalize_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Penalize_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "penalize_user" */
export type Penalize_User_Aggregate_Order_By = {
  avg?: InputMaybe<Penalize_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Penalize_User_Max_Order_By>;
  min?: InputMaybe<Penalize_User_Min_Order_By>;
  stddev?: InputMaybe<Penalize_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Penalize_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Penalize_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Penalize_User_Sum_Order_By>;
  var_pop?: InputMaybe<Penalize_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Penalize_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Penalize_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "penalize_user" */
export type Penalize_User_Arr_Rel_Insert_Input = {
  data: Array<Penalize_User_Insert_Input>;
  on_conflict?: InputMaybe<Penalize_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Penalize_User_Avg_Fields = {
  __typename?: 'penalize_user_avg_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "penalize_user" */
export type Penalize_User_Avg_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "penalize_user". All fields are combined with a logical 'AND'. */
export type Penalize_User_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Penalize_User_Bool_Exp>>>;
  _not?: InputMaybe<Penalize_User_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Penalize_User_Bool_Exp>>>;
  after_amount?: InputMaybe<Bigint_Comparison_Exp>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  before_amount?: InputMaybe<Bigint_Comparison_Exp>;
  bonus?: InputMaybe<Bonus_Bool_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  bonus_type?: InputMaybe<Bonus_Type_Bool_Exp>;
  breach_id?: InputMaybe<Uuid_Comparison_Exp>;
  breach_user?: InputMaybe<Breach_User_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Bonus_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "penalize_user" */
export enum Penalize_User_Constraint {
  /** unique or primary key constraint */
  PenalizeUserIdKey = 'penalize_user_id_key',
  /** unique or primary key constraint */
  PenalizeUserPkey = 'penalize_user_pkey'
}

/** input type for incrementing integer column in table "penalize_user" */
export type Penalize_User_Inc_Input = {
  after_amount?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['bigint']>;
  before_amount?: InputMaybe<Scalars['bigint']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "penalize_user" */
export type Penalize_User_Insert_Input = {
  after_amount?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['bigint']>;
  before_amount?: InputMaybe<Scalars['bigint']>;
  bonus?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Bonus_Type_Obj_Rel_Insert_Input>;
  breach_id?: InputMaybe<Scalars['uuid']>;
  breach_user?: InputMaybe<Breach_User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Bonus_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Penalize_User_Max_Fields = {
  __typename?: 'penalize_user_max_fields';
  after_amount?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['bigint']>;
  before_amount?: Maybe<Scalars['bigint']>;
  bonus_id?: Maybe<Scalars['Int']>;
  breach_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "penalize_user" */
export type Penalize_User_Max_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  breach_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Penalize_User_Min_Fields = {
  __typename?: 'penalize_user_min_fields';
  after_amount?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['bigint']>;
  before_amount?: Maybe<Scalars['bigint']>;
  bonus_id?: Maybe<Scalars['Int']>;
  breach_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "penalize_user" */
export type Penalize_User_Min_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  breach_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "penalize_user" */
export type Penalize_User_Mutation_Response = {
  __typename?: 'penalize_user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Penalize_User>;
};

/** input type for inserting object relation for remote table "penalize_user" */
export type Penalize_User_Obj_Rel_Insert_Input = {
  data: Penalize_User_Insert_Input;
  on_conflict?: InputMaybe<Penalize_User_On_Conflict>;
};

/** on conflict condition type for table "penalize_user" */
export type Penalize_User_On_Conflict = {
  constraint: Penalize_User_Constraint;
  update_columns: Array<Penalize_User_Update_Column>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};

/** ordering options when selecting data from "penalize_user" */
export type Penalize_User_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Bonus_Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Bonus_Type_Order_By>;
  breach_id?: InputMaybe<Order_By>;
  breach_user?: InputMaybe<Breach_User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "penalize_user" */
export type Penalize_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "penalize_user" */
export enum Penalize_User_Select_Column {
  /** column name */
  AfterAmount = 'after_amount',
  /** column name */
  Amount = 'amount',
  /** column name */
  BeforeAmount = 'before_amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BreachId = 'breach_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "penalize_user" */
export type Penalize_User_Set_Input = {
  after_amount?: InputMaybe<Scalars['bigint']>;
  amount?: InputMaybe<Scalars['bigint']>;
  before_amount?: InputMaybe<Scalars['bigint']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  breach_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Bonus_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Penalize_User_Stddev_Fields = {
  __typename?: 'penalize_user_stddev_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "penalize_user" */
export type Penalize_User_Stddev_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Penalize_User_Stddev_Pop_Fields = {
  __typename?: 'penalize_user_stddev_pop_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "penalize_user" */
export type Penalize_User_Stddev_Pop_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Penalize_User_Stddev_Samp_Fields = {
  __typename?: 'penalize_user_stddev_samp_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "penalize_user" */
export type Penalize_User_Stddev_Samp_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Penalize_User_Sum_Fields = {
  __typename?: 'penalize_user_sum_fields';
  after_amount?: Maybe<Scalars['bigint']>;
  amount?: Maybe<Scalars['bigint']>;
  before_amount?: Maybe<Scalars['bigint']>;
  bonus_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "penalize_user" */
export type Penalize_User_Sum_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** update columns of table "penalize_user" */
export enum Penalize_User_Update_Column {
  /** column name */
  AfterAmount = 'after_amount',
  /** column name */
  Amount = 'amount',
  /** column name */
  BeforeAmount = 'before_amount',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BreachId = 'breach_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Penalize_User_Var_Pop_Fields = {
  __typename?: 'penalize_user_var_pop_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "penalize_user" */
export type Penalize_User_Var_Pop_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Penalize_User_Var_Samp_Fields = {
  __typename?: 'penalize_user_var_samp_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "penalize_user" */
export type Penalize_User_Var_Samp_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Penalize_User_Variance_Fields = {
  __typename?: 'penalize_user_variance_fields';
  after_amount?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  before_amount?: Maybe<Scalars['Float']>;
  bonus_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "penalize_user" */
export type Penalize_User_Variance_Order_By = {
  after_amount?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  before_amount?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  /** An array relationship */
  actual_transferred_cryptos: Array<Actual_Transferred_Crypto>;
  /** An aggregated array relationship */
  actual_transferred_cryptos_aggregate: Actual_Transferred_Crypto_Aggregate;
  address_wallet?: Maybe<Scalars['String']>;
  /** An array relationship */
  approver_offices: Array<Approver_Office>;
  /** An aggregated array relationship */
  approver_offices_aggregate: Approver_Office_Aggregate;
  /** A computed field, executes function "user_profile_avatar" */
  avatar?: Maybe<Scalars['String']>;
  /** A computed field, executes function "user_profile_cmnd_back" */
  back_link_cmnd?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  /** An object relationship */
  bank_account?: Maybe<Bank_Account>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  birthday?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  blacklist_conversation_messages: Array<Blacklist_Conversation_Message>;
  /** An aggregated array relationship */
  blacklist_conversation_messages_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** An array relationship */
  bonus: Array<Bonus>;
  /** An array relationship */
  bonusByUserId: Array<Bonus>;
  /** An aggregated array relationship */
  bonusByUserId_aggregate: Bonus_Aggregate;
  /** An aggregated array relationship */
  bonus_aggregate: Bonus_Aggregate;
  /** An object relationship */
  bonus_blacklist?: Maybe<Bonus_Blacklist>;
  /** An array relationship */
  breach_users: Array<Breach_User>;
  /** An aggregated array relationship */
  breach_users_aggregate: Breach_User_Aggregate;
  /** An array relationship */
  category_documents: Array<Category_Document>;
  /** An aggregated array relationship */
  category_documents_aggregate: Category_Document_Aggregate;
  /** An array relationship */
  change_office_requests: Array<Change_Office_Request>;
  /** An aggregated array relationship */
  change_office_requests_aggregate: Change_Office_Request_Aggregate;
  /** An array relationship */
  created_announcements: Array<Announcement>;
  /** An aggregated array relationship */
  created_announcements_aggregate: Announcement_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  created_bonus_blacklists: Array<Bonus_Blacklist>;
  /** An aggregated array relationship */
  created_bonus_blacklists_aggregate: Bonus_Blacklist_Aggregate;
  /** An array relationship */
  created_office_rules: Array<Office_Rule>;
  /** An aggregated array relationship */
  created_office_rules_aggregate: Office_Rule_Aggregate;
  /** An array relationship */
  created_review_withdrawal_requests: Array<Review_Withdrawal_Request>;
  /** An aggregated array relationship */
  created_review_withdrawal_requests_aggregate: Review_Withdrawal_Request_Aggregate;
  /** An array relationship */
  documents: Array<Document>;
  /** An aggregated array relationship */
  documents_aggregate: Document_Aggregate;
  /** A computed field, executes function "user_profile_envelopuser" */
  docusign?: Maybe<Scalars['String']>;
  domicile?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  envelope?: Maybe<Scalars['String']>;
  format_name: Scalars['String'];
  /** A computed field, executes function "user_profile_cmnd_front" */
  front_link_cmnd?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** An array relationship */
  histories: Array<History>;
  /** An aggregated array relationship */
  histories_aggregate: History_Aggregate;
  id: Scalars['String'];
  /** A computed field, executes function "is_banned_profile" */
  is_banned?: Maybe<Scalars['Boolean']>;
  /** A computed field, executes function "is_send_document" */
  is_send_document?: Maybe<Scalars['Boolean']>;
  is_update_password: Scalars['Boolean'];
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['timestamptz']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  /** An array relationship */
  offices: Array<Office>;
  /** An aggregated array relationship */
  offices_aggregate: Office_Aggregate;
  /** An object relationship */
  payment_method?: Maybe<Payment_Method>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  preffered_payment?: Maybe<Payment_Method_Enum>;
  /** A computed field, executes function "user_profile_qrcode" */
  qr_code?: Maybe<Scalars['String']>;
  /** An array relationship */
  received_crypto_transactions: Array<Crypto_Transaction>;
  /** An aggregated array relationship */
  received_crypto_transactions_aggregate: Crypto_Transaction_Aggregate;
  /** An object relationship */
  relationship?: Maybe<Relationship>;
  /** An array relationship */
  relationships: Array<Relationship>;
  /** An aggregated array relationship */
  relationships_aggregate: Relationship_Aggregate;
  /** An array relationship */
  report_relies: Array<Report_Rely>;
  /** An aggregated array relationship */
  report_relies_aggregate: Report_Rely_Aggregate;
  /** An array relationship */
  reports: Array<Report>;
  /** An aggregated array relationship */
  reports_aggregate: Report_Aggregate;
  residence?: Maybe<Scalars['String']>;
  /** An array relationship */
  review_withdrawal_requests: Array<Review_Withdrawal_Request>;
  /** An aggregated array relationship */
  review_withdrawal_requests_aggregate: Review_Withdrawal_Request_Aggregate;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  seen_announcements: Array<Seen_Announcement>;
  /** An aggregated array relationship */
  seen_announcements_aggregate: Seen_Announcement_Aggregate;
  /** An array relationship */
  sent_crypto_transactions: Array<Crypto_Transaction>;
  /** An aggregated array relationship */
  sent_crypto_transactions_aggregate: Crypto_Transaction_Aggregate;
  status?: Maybe<Scalars['Int']>;
  /** An array relationship */
  teams: Array<Team>;
  /** An aggregated array relationship */
  teams_aggregate: Team_Aggregate;
  /** An array relationship */
  thread: Array<Blacklist_Conversation_Message>;
  /** An aggregated array relationship */
  thread_aggregate: Blacklist_Conversation_Message_Aggregate;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  verified: Scalars['Int'];
  /** An array relationship */
  verified_histories: Array<Verify_History>;
  /** An aggregated array relationship */
  verified_histories_aggregate: Verify_History_Aggregate;
  /** An array relationship */
  verify_histories: Array<Verify_History>;
  /** An aggregated array relationship */
  verify_histories_aggregate: Verify_History_Aggregate;
};


/** columns and relationships of "profile" */
export type ProfileActual_Transferred_CryptosArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileActual_Transferred_Cryptos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileApprover_OfficesArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileApprover_Offices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBlacklist_Conversation_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBlacklist_Conversation_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBonusArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBonusByUserIdArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBonusByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBonus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBreach_UsersArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileBreach_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCategory_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCategory_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileChange_Office_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileChange_Office_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Bonus_BlacklistsArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Bonus_Blacklists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Office_RulesArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Office_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Review_Withdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileCreated_Review_Withdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileHistoriesArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileHistories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileOfficesArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileOffices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReceived_Crypto_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReceived_Crypto_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileRelationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReport_ReliesArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReport_Relies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReportsArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReview_Withdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileReview_Withdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileSeen_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileSeen_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileSent_Crypto_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileSent_Crypto_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileTeamsArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileThreadArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileThread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileVerified_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileVerified_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileVerify_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileVerify_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  avg?: Maybe<Profile_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
  stddev?: Maybe<Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Sum_Fields>;
  var_pop?: Maybe<Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Var_Samp_Fields>;
  variance?: Maybe<Profile_Variance_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile" */
export type Profile_Aggregate_Order_By = {
  avg?: InputMaybe<Profile_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profile_Max_Order_By>;
  min?: InputMaybe<Profile_Min_Order_By>;
  stddev?: InputMaybe<Profile_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Profile_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Profile_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Profile_Sum_Order_By>;
  var_pop?: InputMaybe<Profile_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Profile_Var_Samp_Order_By>;
  variance?: InputMaybe<Profile_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profile" */
export type Profile_Arr_Rel_Insert_Input = {
  data: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** aggregate avg on columns */
export type Profile_Avg_Fields = {
  __typename?: 'profile_avg_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "profile" */
export type Profile_Avg_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Profile_Bool_Exp>>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Profile_Bool_Exp>>>;
  account_holder?: InputMaybe<String_Comparison_Exp>;
  account_number?: InputMaybe<String_Comparison_Exp>;
  actual_transferred_cryptos?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
  address_wallet?: InputMaybe<String_Comparison_Exp>;
  approver_offices?: InputMaybe<Approver_Office_Bool_Exp>;
  bank?: InputMaybe<String_Comparison_Exp>;
  bank_account?: InputMaybe<Bank_Account_Bool_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  blacklist_conversation_messages?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  bonus?: InputMaybe<Bonus_Bool_Exp>;
  bonusByUserId?: InputMaybe<Bonus_Bool_Exp>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  breach_users?: InputMaybe<Breach_User_Bool_Exp>;
  category_documents?: InputMaybe<Category_Document_Bool_Exp>;
  change_office_requests?: InputMaybe<Change_Office_Request_Bool_Exp>;
  created_announcements?: InputMaybe<Announcement_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_bonus_blacklists?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
  created_office_rules?: InputMaybe<Office_Rule_Bool_Exp>;
  created_review_withdrawal_requests?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
  documents?: InputMaybe<Document_Bool_Exp>;
  domicile?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  envelope?: InputMaybe<String_Comparison_Exp>;
  format_name?: InputMaybe<String_Comparison_Exp>;
  fullname?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  histories?: InputMaybe<History_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_update_password?: InputMaybe<Boolean_Comparison_Exp>;
  national_id?: InputMaybe<String_Comparison_Exp>;
  national_id_issue_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  national_id_machine_detect?: InputMaybe<String_Comparison_Exp>;
  ngan_luong_acconut?: InputMaybe<String_Comparison_Exp>;
  offices?: InputMaybe<Office_Bool_Exp>;
  payment_method?: InputMaybe<Payment_Method_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  place_issue_national_id?: InputMaybe<String_Comparison_Exp>;
  preffered_payment?: InputMaybe<Payment_Method_Enum_Comparison_Exp>;
  received_crypto_transactions?: InputMaybe<Crypto_Transaction_Bool_Exp>;
  relationship?: InputMaybe<Relationship_Bool_Exp>;
  relationships?: InputMaybe<Relationship_Bool_Exp>;
  report_relies?: InputMaybe<Report_Rely_Bool_Exp>;
  reports?: InputMaybe<Report_Bool_Exp>;
  residence?: InputMaybe<String_Comparison_Exp>;
  review_withdrawal_requests?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  saler_id?: InputMaybe<String_Comparison_Exp>;
  seen_announcements?: InputMaybe<Seen_Announcement_Bool_Exp>;
  sent_crypto_transactions?: InputMaybe<Crypto_Transaction_Bool_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  teams?: InputMaybe<Team_Bool_Exp>;
  thread?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
  total_withdrawal?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<String_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Int_Comparison_Exp>;
  verified_histories?: InputMaybe<Verify_History_Bool_Exp>;
  verify_histories?: InputMaybe<Verify_History_Bool_Exp>;
};

/** unique or primary key constraints on table "profile" */
export enum Profile_Constraint {
  /** unique or primary key constraint */
  ProfilePkey = 'profile_pkey'
}

/** input type for incrementing integer column in table "profile" */
export type Profile_Inc_Input = {
  status?: InputMaybe<Scalars['Int']>;
  total_withdrawal?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  account_holder?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  actual_transferred_cryptos?: InputMaybe<Actual_Transferred_Crypto_Arr_Rel_Insert_Input>;
  address_wallet?: InputMaybe<Scalars['String']>;
  approver_offices?: InputMaybe<Approver_Office_Arr_Rel_Insert_Input>;
  bank?: InputMaybe<Scalars['String']>;
  bank_account?: InputMaybe<Bank_Account_Obj_Rel_Insert_Input>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  birthday?: InputMaybe<Scalars['timestamptz']>;
  blacklist_conversation_messages?: InputMaybe<Blacklist_Conversation_Message_Arr_Rel_Insert_Input>;
  bonus?: InputMaybe<Bonus_Arr_Rel_Insert_Input>;
  bonusByUserId?: InputMaybe<Bonus_Arr_Rel_Insert_Input>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Obj_Rel_Insert_Input>;
  breach_users?: InputMaybe<Breach_User_Arr_Rel_Insert_Input>;
  category_documents?: InputMaybe<Category_Document_Arr_Rel_Insert_Input>;
  change_office_requests?: InputMaybe<Change_Office_Request_Arr_Rel_Insert_Input>;
  created_announcements?: InputMaybe<Announcement_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_bonus_blacklists?: InputMaybe<Bonus_Blacklist_Arr_Rel_Insert_Input>;
  created_office_rules?: InputMaybe<Office_Rule_Arr_Rel_Insert_Input>;
  created_review_withdrawal_requests?: InputMaybe<Review_Withdrawal_Request_Arr_Rel_Insert_Input>;
  documents?: InputMaybe<Document_Arr_Rel_Insert_Input>;
  domicile?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  envelope?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  histories?: InputMaybe<History_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  is_update_password?: InputMaybe<Scalars['Boolean']>;
  national_id?: InputMaybe<Scalars['String']>;
  national_id_issue_date?: InputMaybe<Scalars['timestamptz']>;
  national_id_machine_detect?: InputMaybe<Scalars['String']>;
  ngan_luong_acconut?: InputMaybe<Scalars['String']>;
  offices?: InputMaybe<Office_Arr_Rel_Insert_Input>;
  payment_method?: InputMaybe<Payment_Method_Obj_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  place_issue_national_id?: InputMaybe<Scalars['String']>;
  preffered_payment?: InputMaybe<Payment_Method_Enum>;
  received_crypto_transactions?: InputMaybe<Crypto_Transaction_Arr_Rel_Insert_Input>;
  relationship?: InputMaybe<Relationship_Obj_Rel_Insert_Input>;
  relationships?: InputMaybe<Relationship_Arr_Rel_Insert_Input>;
  report_relies?: InputMaybe<Report_Rely_Arr_Rel_Insert_Input>;
  reports?: InputMaybe<Report_Arr_Rel_Insert_Input>;
  residence?: InputMaybe<Scalars['String']>;
  review_withdrawal_requests?: InputMaybe<Review_Withdrawal_Request_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']>;
  saler_id?: InputMaybe<Scalars['String']>;
  seen_announcements?: InputMaybe<Seen_Announcement_Arr_Rel_Insert_Input>;
  sent_crypto_transactions?: InputMaybe<Crypto_Transaction_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['Int']>;
  teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  thread?: InputMaybe<Blacklist_Conversation_Message_Arr_Rel_Insert_Input>;
  total_withdrawal?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Int']>;
  verified_histories?: InputMaybe<Verify_History_Arr_Rel_Insert_Input>;
  verify_histories?: InputMaybe<Verify_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  address_wallet?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  domicile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  envelope?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['timestamptz']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  residence?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "profile" */
export type Profile_Max_Order_By = {
  account_holder?: InputMaybe<Order_By>;
  account_number?: InputMaybe<Order_By>;
  address_wallet?: InputMaybe<Order_By>;
  bank?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  domicile?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  envelope?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  national_id?: InputMaybe<Order_By>;
  national_id_issue_date?: InputMaybe<Order_By>;
  national_id_machine_detect?: InputMaybe<Order_By>;
  ngan_luong_acconut?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  place_issue_national_id?: InputMaybe<Order_By>;
  residence?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  saler_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  account_holder?: Maybe<Scalars['String']>;
  account_number?: Maybe<Scalars['String']>;
  address_wallet?: Maybe<Scalars['String']>;
  bank?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  domicile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  envelope?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  national_id?: Maybe<Scalars['String']>;
  national_id_issue_date?: Maybe<Scalars['timestamptz']>;
  national_id_machine_detect?: Maybe<Scalars['String']>;
  ngan_luong_acconut?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  place_issue_national_id?: Maybe<Scalars['String']>;
  residence?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  saler_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "profile" */
export type Profile_Min_Order_By = {
  account_holder?: InputMaybe<Order_By>;
  account_number?: InputMaybe<Order_By>;
  address_wallet?: InputMaybe<Order_By>;
  bank?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  domicile?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  envelope?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  national_id?: InputMaybe<Order_By>;
  national_id_issue_date?: InputMaybe<Order_By>;
  national_id_machine_detect?: InputMaybe<Order_By>;
  ngan_luong_acconut?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  place_issue_national_id?: InputMaybe<Order_By>;
  residence?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  saler_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: 'profile_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** on conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns: Array<Profile_Update_Column>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** ordering options when selecting data from "profile" */
export type Profile_Order_By = {
  account_holder?: InputMaybe<Order_By>;
  account_number?: InputMaybe<Order_By>;
  actual_transferred_cryptos_aggregate?: InputMaybe<Actual_Transferred_Crypto_Aggregate_Order_By>;
  address_wallet?: InputMaybe<Order_By>;
  approver_offices_aggregate?: InputMaybe<Approver_Office_Aggregate_Order_By>;
  bank?: InputMaybe<Order_By>;
  bank_account?: InputMaybe<Bank_Account_Order_By>;
  banned_until?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  blacklist_conversation_messages_aggregate?: InputMaybe<Blacklist_Conversation_Message_Aggregate_Order_By>;
  bonusByUserId_aggregate?: InputMaybe<Bonus_Aggregate_Order_By>;
  bonus_aggregate?: InputMaybe<Bonus_Aggregate_Order_By>;
  bonus_blacklist?: InputMaybe<Bonus_Blacklist_Order_By>;
  breach_users_aggregate?: InputMaybe<Breach_User_Aggregate_Order_By>;
  category_documents_aggregate?: InputMaybe<Category_Document_Aggregate_Order_By>;
  change_office_requests_aggregate?: InputMaybe<Change_Office_Request_Aggregate_Order_By>;
  created_announcements_aggregate?: InputMaybe<Announcement_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_bonus_blacklists_aggregate?: InputMaybe<Bonus_Blacklist_Aggregate_Order_By>;
  created_office_rules_aggregate?: InputMaybe<Office_Rule_Aggregate_Order_By>;
  created_review_withdrawal_requests_aggregate?: InputMaybe<Review_Withdrawal_Request_Aggregate_Order_By>;
  documents_aggregate?: InputMaybe<Document_Aggregate_Order_By>;
  domicile?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  envelope?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  fullname?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  histories_aggregate?: InputMaybe<History_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_update_password?: InputMaybe<Order_By>;
  national_id?: InputMaybe<Order_By>;
  national_id_issue_date?: InputMaybe<Order_By>;
  national_id_machine_detect?: InputMaybe<Order_By>;
  ngan_luong_acconut?: InputMaybe<Order_By>;
  offices_aggregate?: InputMaybe<Office_Aggregate_Order_By>;
  payment_method?: InputMaybe<Payment_Method_Order_By>;
  phone?: InputMaybe<Order_By>;
  place_issue_national_id?: InputMaybe<Order_By>;
  preffered_payment?: InputMaybe<Order_By>;
  received_crypto_transactions_aggregate?: InputMaybe<Crypto_Transaction_Aggregate_Order_By>;
  relationship?: InputMaybe<Relationship_Order_By>;
  relationships_aggregate?: InputMaybe<Relationship_Aggregate_Order_By>;
  report_relies_aggregate?: InputMaybe<Report_Rely_Aggregate_Order_By>;
  reports_aggregate?: InputMaybe<Report_Aggregate_Order_By>;
  residence?: InputMaybe<Order_By>;
  review_withdrawal_requests_aggregate?: InputMaybe<Review_Withdrawal_Request_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  saler_id?: InputMaybe<Order_By>;
  seen_announcements_aggregate?: InputMaybe<Seen_Announcement_Aggregate_Order_By>;
  sent_crypto_transactions_aggregate?: InputMaybe<Crypto_Transaction_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  thread_aggregate?: InputMaybe<Blacklist_Conversation_Message_Aggregate_Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
  verified_histories_aggregate?: InputMaybe<Verify_History_Aggregate_Order_By>;
  verify_histories_aggregate?: InputMaybe<Verify_History_Aggregate_Order_By>;
};

/** primary key columns input for table: "profile" */
export type Profile_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  AccountHolder = 'account_holder',
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  AddressWallet = 'address_wallet',
  /** column name */
  Bank = 'bank',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domicile = 'domicile',
  /** column name */
  Email = 'email',
  /** column name */
  Envelope = 'envelope',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsUpdatePassword = 'is_update_password',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  NationalIdIssueDate = 'national_id_issue_date',
  /** column name */
  NationalIdMachineDetect = 'national_id_machine_detect',
  /** column name */
  NganLuongAcconut = 'ngan_luong_acconut',
  /** column name */
  Phone = 'phone',
  /** column name */
  PlaceIssueNationalId = 'place_issue_national_id',
  /** column name */
  PrefferedPayment = 'preffered_payment',
  /** column name */
  Residence = 'residence',
  /** column name */
  Role = 'role',
  /** column name */
  SalerId = 'saler_id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalWithdrawal = 'total_withdrawal',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserName = 'user_name',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  account_holder?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  address_wallet?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  birthday?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  domicile?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  envelope?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_update_password?: InputMaybe<Scalars['Boolean']>;
  national_id?: InputMaybe<Scalars['String']>;
  national_id_issue_date?: InputMaybe<Scalars['timestamptz']>;
  national_id_machine_detect?: InputMaybe<Scalars['String']>;
  ngan_luong_acconut?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  place_issue_national_id?: InputMaybe<Scalars['String']>;
  preffered_payment?: InputMaybe<Payment_Method_Enum>;
  residence?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  saler_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  total_withdrawal?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Profile_Stddev_Fields = {
  __typename?: 'profile_stddev_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "profile" */
export type Profile_Stddev_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profile_Stddev_Pop_Fields = {
  __typename?: 'profile_stddev_pop_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "profile" */
export type Profile_Stddev_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profile_Stddev_Samp_Fields = {
  __typename?: 'profile_stddev_samp_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "profile" */
export type Profile_Stddev_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Profile_Sum_Fields = {
  __typename?: 'profile_sum_fields';
  status?: Maybe<Scalars['Int']>;
  total_withdrawal?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "profile" */
export type Profile_Sum_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** update columns of table "profile" */
export enum Profile_Update_Column {
  /** column name */
  AccountHolder = 'account_holder',
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  AddressWallet = 'address_wallet',
  /** column name */
  Bank = 'bank',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domicile = 'domicile',
  /** column name */
  Email = 'email',
  /** column name */
  Envelope = 'envelope',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsUpdatePassword = 'is_update_password',
  /** column name */
  NationalId = 'national_id',
  /** column name */
  NationalIdIssueDate = 'national_id_issue_date',
  /** column name */
  NationalIdMachineDetect = 'national_id_machine_detect',
  /** column name */
  NganLuongAcconut = 'ngan_luong_acconut',
  /** column name */
  Phone = 'phone',
  /** column name */
  PlaceIssueNationalId = 'place_issue_national_id',
  /** column name */
  PrefferedPayment = 'preffered_payment',
  /** column name */
  Residence = 'residence',
  /** column name */
  Role = 'role',
  /** column name */
  SalerId = 'saler_id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalWithdrawal = 'total_withdrawal',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserName = 'user_name',
  /** column name */
  Verified = 'verified'
}

/** aggregate var_pop on columns */
export type Profile_Var_Pop_Fields = {
  __typename?: 'profile_var_pop_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "profile" */
export type Profile_Var_Pop_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profile_Var_Samp_Fields = {
  __typename?: 'profile_var_samp_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "profile" */
export type Profile_Var_Samp_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Profile_Variance_Fields = {
  __typename?: 'profile_variance_fields';
  status?: Maybe<Scalars['Float']>;
  total_withdrawal?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "profile" */
export type Profile_Variance_Order_By = {
  status?: InputMaybe<Order_By>;
  total_withdrawal?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "actual_transferred_crypto" */
  actual_transferred_crypto: Array<Actual_Transferred_Crypto>;
  /** fetch aggregated fields from the table: "actual_transferred_crypto" */
  actual_transferred_crypto_aggregate: Actual_Transferred_Crypto_Aggregate;
  /** fetch data from the table: "actual_transferred_crypto" using primary key columns */
  actual_transferred_crypto_by_pk?: Maybe<Actual_Transferred_Crypto>;
  /** fetch data from the table: "announcement" */
  announcement: Array<Announcement>;
  /** fetch aggregated fields from the table: "announcement" */
  announcement_aggregate: Announcement_Aggregate;
  /** fetch data from the table: "announcement" using primary key columns */
  announcement_by_pk?: Maybe<Announcement>;
  /** execute function "approver_get_bonuses_v2" which returns "bonus" */
  approver_get_bonuses_v2: Array<Bonus>;
  /** execute function "approver_get_bonuses_v2" and query aggregates on result of table type "bonus" */
  approver_get_bonuses_v2_aggregate: Bonus_Aggregate;
  /** fetch data from the table: "approver_office" */
  approver_office: Array<Approver_Office>;
  /** fetch aggregated fields from the table: "approver_office" */
  approver_office_aggregate: Approver_Office_Aggregate;
  /** fetch data from the table: "approver_office" using primary key columns */
  approver_office_by_pk?: Maybe<Approver_Office>;
  /** fetch data from the table: "bank" */
  bank: Array<Bank>;
  /** fetch data from the table: "bank_account" */
  bank_account: Array<Bank_Account>;
  /** fetch aggregated fields from the table: "bank_account" */
  bank_account_aggregate: Bank_Account_Aggregate;
  /** fetch data from the table: "bank_account" using primary key columns */
  bank_account_by_pk?: Maybe<Bank_Account>;
  /** fetch aggregated fields from the table: "bank" */
  bank_aggregate: Bank_Aggregate;
  /** fetch data from the table: "bank" using primary key columns */
  bank_by_pk?: Maybe<Bank>;
  /** fetch data from the table: "bank_error" */
  bank_error: Array<Bank_Error>;
  /** fetch aggregated fields from the table: "bank_error" */
  bank_error_aggregate: Bank_Error_Aggregate;
  /** fetch data from the table: "bank_error" using primary key columns */
  bank_error_by_pk?: Maybe<Bank_Error>;
  /** fetch data from the table: "blacklist_conversation_message" */
  blacklist_conversation_message: Array<Blacklist_Conversation_Message>;
  /** fetch aggregated fields from the table: "blacklist_conversation_message" */
  blacklist_conversation_message_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** fetch data from the table: "blacklist_conversation_message" using primary key columns */
  blacklist_conversation_message_by_pk?: Maybe<Blacklist_Conversation_Message>;
  /** fetch data from the table: "blacklist_history" */
  blacklist_history: Array<Blacklist_History>;
  /** fetch aggregated fields from the table: "blacklist_history" */
  blacklist_history_aggregate: Blacklist_History_Aggregate;
  /** fetch data from the table: "blacklist_history" using primary key columns */
  blacklist_history_by_pk?: Maybe<Blacklist_History>;
  /** fetch data from the table: "bonus" */
  bonus: Array<Bonus>;
  /** fetch aggregated fields from the table: "bonus" */
  bonus_aggregate: Bonus_Aggregate;
  /** fetch data from the table: "bonus_blacklist" */
  bonus_blacklist: Array<Bonus_Blacklist>;
  /** fetch aggregated fields from the table: "bonus_blacklist" */
  bonus_blacklist_aggregate: Bonus_Blacklist_Aggregate;
  /** fetch data from the table: "bonus_blacklist" using primary key columns */
  bonus_blacklist_by_pk?: Maybe<Bonus_Blacklist>;
  /** fetch data from the table: "bonus" using primary key columns */
  bonus_by_pk?: Maybe<Bonus>;
  /** fetch data from the table: "bonus_fee_history" */
  bonus_fee_history: Array<Bonus_Fee_History>;
  /** fetch aggregated fields from the table: "bonus_fee_history" */
  bonus_fee_history_aggregate: Bonus_Fee_History_Aggregate;
  /** fetch data from the table: "bonus_fee_history" using primary key columns */
  bonus_fee_history_by_pk?: Maybe<Bonus_Fee_History>;
  /** fetch data from the table: "bonus_office_rule" */
  bonus_office_rule: Array<Bonus_Office_Rule>;
  /** fetch aggregated fields from the table: "bonus_office_rule" */
  bonus_office_rule_aggregate: Bonus_Office_Rule_Aggregate;
  /** fetch data from the table: "bonus_office_rule" using primary key columns */
  bonus_office_rule_by_pk?: Maybe<Bonus_Office_Rule>;
  /** fetch data from the table: "bonus_type" */
  bonus_type: Array<Bonus_Type>;
  /** fetch aggregated fields from the table: "bonus_type" */
  bonus_type_aggregate: Bonus_Type_Aggregate;
  /** fetch data from the table: "bonus_type" using primary key columns */
  bonus_type_by_pk?: Maybe<Bonus_Type>;
  /** fetch data from the table: "breach_user" */
  breach_user: Array<Breach_User>;
  /** fetch aggregated fields from the table: "breach_user" */
  breach_user_aggregate: Breach_User_Aggregate;
  /** fetch data from the table: "breach_user" using primary key columns */
  breach_user_by_pk?: Maybe<Breach_User>;
  /** perform the action: "calculatePenalizeBonus" */
  calculatePenalizeBonus?: Maybe<CalculatePenalizeBonusOutput>;
  /** fetch data from the table: "category_document" */
  category_document: Array<Category_Document>;
  /** fetch aggregated fields from the table: "category_document" */
  category_document_aggregate: Category_Document_Aggregate;
  /** fetch data from the table: "category_document" using primary key columns */
  category_document_by_pk?: Maybe<Category_Document>;
  /** fetch data from the table: "change_office_request" */
  change_office_request: Array<Change_Office_Request>;
  /** fetch aggregated fields from the table: "change_office_request" */
  change_office_request_aggregate: Change_Office_Request_Aggregate;
  /** fetch data from the table: "change_office_request" using primary key columns */
  change_office_request_by_pk?: Maybe<Change_Office_Request>;
  /** perform the action: "checkNationalCard" */
  checkNationalCard?: Maybe<CheckNationalCardOutput>;
  /** fetch data from the table: "city" */
  city: Array<City>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: City_Aggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<City>;
  /** fetch data from the table: "crypto_transaction" */
  crypto_transaction: Array<Crypto_Transaction>;
  /** fetch aggregated fields from the table: "crypto_transaction" */
  crypto_transaction_aggregate: Crypto_Transaction_Aggregate;
  /** fetch data from the table: "crypto_transaction" using primary key columns */
  crypto_transaction_by_pk?: Maybe<Crypto_Transaction>;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<Document>;
  /** fetch data from the table: "docusign" */
  docusign: Array<Docusign>;
  /** fetch aggregated fields from the table: "docusign" */
  docusign_aggregate: Docusign_Aggregate;
  /** fetch data from the table: "docusign" using primary key columns */
  docusign_by_pk?: Maybe<Docusign>;
  exportBonuses: Scalars['String'];
  /** fetch data from the table: "exported_bonus_xlsx" */
  exported_bonus_xlsx: Array<Exported_Bonus_Xlsx>;
  /** fetch aggregated fields from the table: "exported_bonus_xlsx" */
  exported_bonus_xlsx_aggregate: Exported_Bonus_Xlsx_Aggregate;
  /** fetch data from the table: "exported_bonus_xlsx" using primary key columns */
  exported_bonus_xlsx_by_pk?: Maybe<Exported_Bonus_Xlsx>;
  /** execute function "filter_actual_transferred_crypto" which returns "actual_transferred_crypto" */
  filter_actual_transferred_crypto: Array<Actual_Transferred_Crypto>;
  /** execute function "filter_actual_transferred_crypto" and query aggregates on result of table type "actual_transferred_crypto" */
  filter_actual_transferred_crypto_aggregate: Actual_Transferred_Crypto_Aggregate;
  /** execute function "filter_blacklist_conversation_message" which returns "blacklist_conversation_message" */
  filter_blacklist_conversation_message: Array<Blacklist_Conversation_Message>;
  /** execute function "filter_blacklist_conversation_message" and query aggregates on result of table type "blacklist_conversation_message" */
  filter_blacklist_conversation_message_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** execute function "filter_bonus" which returns "bonus" */
  filter_bonus: Array<Bonus>;
  /** execute function "filter_bonus" and query aggregates on result of table type "bonus" */
  filter_bonus_aggregate: Bonus_Aggregate;
  /** execute function "filter_bonus_multisend" which returns "bonus" */
  filter_bonus_multisend: Array<Bonus>;
  /** execute function "filter_bonus_multisend" and query aggregates on result of table type "bonus" */
  filter_bonus_multisend_aggregate: Bonus_Aggregate;
  /** execute function "filter_breach_user" which returns "breach_user" */
  filter_breach_user: Array<Breach_User>;
  /** execute function "filter_breach_user" and query aggregates on result of table type "breach_user" */
  filter_breach_user_aggregate: Breach_User_Aggregate;
  /** execute function "filter_history" which returns "history" */
  filter_history: Array<History>;
  /** execute function "filter_history" and query aggregates on result of table type "history" */
  filter_history_aggregate: History_Aggregate;
  /** execute function "filter_office_v2" which returns "office" */
  filter_office_v2: Array<Office>;
  /** execute function "filter_office_v2" and query aggregates on result of table type "office" */
  filter_office_v2_aggregate: Office_Aggregate;
  filter_offices: Nq_Paginated_Office;
  /** execute function "filter_profile_v2" which returns "profile" */
  filter_profile_v2: Array<Profile>;
  /** execute function "filter_profile_v2" and query aggregates on result of table type "profile" */
  filter_profile_v2_aggregate: Profile_Aggregate;
  filter_profiles: Nq_Paginated_Profile;
  /** execute function "filter_review_withdrawal_request" which returns "review_withdrawal_request" */
  filter_review_withdrawal_request: Array<Review_Withdrawal_Request>;
  /** execute function "filter_review_withdrawal_request" and query aggregates on result of table type "review_withdrawal_request" */
  filter_review_withdrawal_request_aggregate: Review_Withdrawal_Request_Aggregate;
  filter_teams: Nq_Paginated_Team;
  /** execute function "filter_teams_v2" which returns "team" */
  filter_teams_v2: Array<Team>;
  /** execute function "filter_teams_v2" and query aggregates on result of table type "team" */
  filter_teams_v2_aggregate: Team_Aggregate;
  genRandomAccount: Scalars['String'];
  /** perform the action: "getBalanceNganLuong" */
  getBalanceNganLuong?: Maybe<GetBalanceNganLuongOutput>;
  getBanks: Nq_BankOffsetConnection;
  /** perform the action: "getBonusLeader" */
  getBonusLeader?: Maybe<GetBonusLeaderOutput>;
  /** perform the action: "getBonusOfficeAdmin" */
  getBonusOfficeAdmin?: Maybe<GetBonusOfficeAdminOutput>;
  /** perform the action: "getBonusOfficeApprover" */
  getBonusOfficeApprover?: Maybe<GetBonusOfficeApproverOutput>;
  /** perform the action: "getBonusStatistics" */
  getBonusStatistics?: Maybe<BonusStatisticsOutput>;
  /** perform the action: "getHistory" */
  getHistory?: Maybe<QueryHistoryOutput>;
  /** perform the action: "getManager" */
  getManager?: Maybe<GetManagerOutput>;
  /** perform the action: "getOffice" */
  getOffice?: Maybe<Array<Maybe<OfficeOutput>>>;
  /** perform the action: "getOfficeWithMember" */
  getOfficeWithMember?: Maybe<GetOfficeWithMemberOutput>;
  /** perform the action: "getOfficeWithMemberFilter" */
  getOfficeWithMemberFilter?: Maybe<GetOfficeWithMemberMinMaxOutput>;
  /** perform the action: "getOfficeWithMemberFilterV2" */
  getOfficeWithMemberFilterV2?: Maybe<GetOfficeWithMemberFilterV2Output>;
  /** perform the action: "getSignedURL" */
  getSignedURL?: Maybe<SignedUrlOutput>;
  /** perform the action: "getTeam" */
  getTeam?: Maybe<Array<Maybe<GetTeamOutput>>>;
  /** perform the action: "getUserWithFilter" */
  getUserWithFilter?: Maybe<GetUserWithFilterOutput>;
  get_airtable_bases: Nq_Airtable_Base_Response;
  /** execute function "get_bonus_by_role" which returns "bonus" */
  get_bonus_by_role: Array<Bonus>;
  /** execute function "get_bonus_by_role" and query aggregates on result of table type "bonus" */
  get_bonus_by_role_aggregate: Bonus_Aggregate;
  /** execute function "get_exported_bonus_xlsx" which returns "exported_bonus_xlsx" */
  get_exported_bonus_xlsx: Array<Exported_Bonus_Xlsx>;
  /** execute function "get_exported_bonus_xlsx" and query aggregates on result of table type "exported_bonus_xlsx" */
  get_exported_bonus_xlsx_aggregate: Exported_Bonus_Xlsx_Aggregate;
  /** perform the action: "get_initial_notifications" */
  get_initial_notifications?: Maybe<Array<Maybe<InitialNotificationOutput>>>;
  /** execute function "get_new_announcement" which returns "announcement" */
  get_new_announcement: Array<Announcement>;
  /** execute function "get_new_announcement" and query aggregates on result of table type "announcement" */
  get_new_announcement_aggregate: Announcement_Aggregate;
  /** execute function "get_withdrawal_requests" which returns "withdrawal_request" */
  get_withdrawal_requests: Array<Withdrawal_Request>;
  /** execute function "get_withdrawal_requests" and query aggregates on result of table type "withdrawal_request" */
  get_withdrawal_requests_aggregate: Withdrawal_Request_Aggregate;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "history" using primary key columns */
  history_by_pk?: Maybe<History>;
  /** fetch data from the table: "income" */
  income: Array<Income>;
  /** fetch aggregated fields from the table: "income" */
  income_aggregate: Income_Aggregate;
  /** fetch data from the table: "income" using primary key columns */
  income_by_pk?: Maybe<Income>;
  /** perform the action: "manageAvailable" */
  manageAvailable?: Maybe<GetmanageAvailableOutput>;
  /** fetch data from the table: "ngan_luong_transaction" */
  ngan_luong_transaction: Array<Ngan_Luong_Transaction>;
  /** fetch aggregated fields from the table: "ngan_luong_transaction" */
  ngan_luong_transaction_aggregate: Ngan_Luong_Transaction_Aggregate;
  /** fetch data from the table: "ngan_luong_transaction" using primary key columns */
  ngan_luong_transaction_by_pk?: Maybe<Ngan_Luong_Transaction>;
  /** fetch data from the table: "ninepay_transaction" */
  ninepay_transaction: Array<Ninepay_Transaction>;
  /** fetch aggregated fields from the table: "ninepay_transaction" */
  ninepay_transaction_aggregate: Ninepay_Transaction_Aggregate;
  /** fetch data from the table: "ninepay_transaction" using primary key columns */
  ninepay_transaction_by_pk?: Maybe<Ninepay_Transaction>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  nq_review_withdrawal_request_dto?: Maybe<Nq_Review_Withdrawal_Request_Dto>;
  nq_review_withdrawal_request_dtos: Nq_Review_Withdrawal_Request_DtoConnection;
  /** fetch data from the table: "office" */
  office: Array<Office>;
  /** fetch aggregated fields from the table: "office" */
  office_aggregate: Office_Aggregate;
  /** fetch data from the table: "office_announcement" */
  office_announcement: Array<Office_Announcement>;
  /** fetch aggregated fields from the table: "office_announcement" */
  office_announcement_aggregate: Office_Announcement_Aggregate;
  /** fetch data from the table: "office_announcement" using primary key columns */
  office_announcement_by_pk?: Maybe<Office_Announcement>;
  /** fetch data from the table: "office" using primary key columns */
  office_by_pk?: Maybe<Office>;
  /** fetch data from the table: "office_rule" */
  office_rule: Array<Office_Rule>;
  /** fetch aggregated fields from the table: "office_rule" */
  office_rule_aggregate: Office_Rule_Aggregate;
  /** fetch data from the table: "office_rule" using primary key columns */
  office_rule_by_pk?: Maybe<Office_Rule>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<Payment_Method>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: Payment_Method_Aggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<Payment_Method>;
  /** fetch data from the table: "penalize_user" */
  penalize_user: Array<Penalize_User>;
  /** fetch aggregated fields from the table: "penalize_user" */
  penalize_user_aggregate: Penalize_User_Aggregate;
  /** fetch data from the table: "penalize_user" using primary key columns */
  penalize_user_by_pk?: Maybe<Penalize_User>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "relationship" */
  relationship: Array<Relationship>;
  /** fetch aggregated fields from the table: "relationship" */
  relationship_aggregate: Relationship_Aggregate;
  /** fetch data from the table: "relationship" using primary key columns */
  relationship_by_pk?: Maybe<Relationship>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "report_rely" */
  report_rely: Array<Report_Rely>;
  /** fetch aggregated fields from the table: "report_rely" */
  report_rely_aggregate: Report_Rely_Aggregate;
  /** fetch data from the table: "report_rely" using primary key columns */
  report_rely_by_pk?: Maybe<Report_Rely>;
  /** fetch data from the table: "review_withdrawal_request" */
  review_withdrawal_request: Array<Review_Withdrawal_Request>;
  /** fetch aggregated fields from the table: "review_withdrawal_request" */
  review_withdrawal_request_aggregate: Review_Withdrawal_Request_Aggregate;
  /** fetch data from the table: "review_withdrawal_request" using primary key columns */
  review_withdrawal_request_by_pk?: Maybe<Review_Withdrawal_Request>;
  /** perform the action: "search" */
  search?: Maybe<SearchOutput>;
  /** execute function "search_user" which returns "profile" */
  search_user: Array<Profile>;
  /** execute function "search_user" and query aggregates on result of table type "profile" */
  search_user_aggregate: Profile_Aggregate;
  /** fetch data from the table: "seen_announcement" */
  seen_announcement: Array<Seen_Announcement>;
  /** fetch aggregated fields from the table: "seen_announcement" */
  seen_announcement_aggregate: Seen_Announcement_Aggregate;
  /** fetch data from the table: "seen_announcement" using primary key columns */
  seen_announcement_by_pk?: Maybe<Seen_Announcement>;
  send_verify_email: Nq_Verify_Email_Response;
  /** perform the action: "synchronizeMeilisearch" */
  synchronizeMeilisearch?: Maybe<SynchronizedNotificationResponse>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** perform the action: "teamListV2" */
  teamListV2?: Maybe<TeamListV2Output>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  verify_emails: Nq_Check_Profile_Response;
  /** fetch data from the table: "verify_history" */
  verify_history: Array<Verify_History>;
  /** fetch aggregated fields from the table: "verify_history" */
  verify_history_aggregate: Verify_History_Aggregate;
  /** fetch data from the table: "verify_history" using primary key columns */
  verify_history_by_pk?: Maybe<Verify_History>;
  /** fetch data from the table: "verify_type" */
  verify_type: Array<Verify_Type>;
  /** fetch aggregated fields from the table: "verify_type" */
  verify_type_aggregate: Verify_Type_Aggregate;
  /** fetch data from the table: "verify_type" using primary key columns */
  verify_type_by_pk?: Maybe<Verify_Type>;
  /** fetch data from the table: "withdrawal_request" */
  withdrawal_request: Array<Withdrawal_Request>;
  /** fetch aggregated fields from the table: "withdrawal_request" */
  withdrawal_request_aggregate: Withdrawal_Request_Aggregate;
  /** fetch data from the table: "withdrawal_request" using primary key columns */
  withdrawal_request_by_pk?: Maybe<Withdrawal_Request>;
};


/** query root */
export type Query_RootActual_Transferred_CryptoArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** query root */
export type Query_RootActual_Transferred_Crypto_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** query root */
export type Query_RootActual_Transferred_Crypto_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootAnnouncement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootApprover_Get_Bonuses_V2Args = {
  args: Approver_Get_Bonuses_V2_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootApprover_Get_Bonuses_V2_AggregateArgs = {
  args: Approver_Get_Bonuses_V2_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootApprover_OfficeArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** query root */
export type Query_RootApprover_Office_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** query root */
export type Query_RootApprover_Office_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBankArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** query root */
export type Query_RootBank_AccountArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};


/** query root */
export type Query_RootBank_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};


/** query root */
export type Query_RootBank_Account_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** query root */
export type Query_RootBank_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBank_ErrorArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};


/** query root */
export type Query_RootBank_Error_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};


/** query root */
export type Query_RootBank_Error_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBlacklist_Conversation_MessageArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_Conversation_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_Conversation_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBlacklist_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** query root */
export type Query_RootBlacklist_History_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBonusArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_BlacklistArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Blacklist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Blacklist_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBonus_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBonus_Fee_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Fee_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Fee_History_Order_By>>;
  where?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Fee_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Fee_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Fee_History_Order_By>>;
  where?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Fee_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBonus_Office_RuleArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Office_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Office_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBonus_TypeArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Type_Order_By>>;
  where?: InputMaybe<Bonus_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Type_Order_By>>;
  where?: InputMaybe<Bonus_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBonus_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootBreach_UserArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** query root */
export type Query_RootBreach_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** query root */
export type Query_RootBreach_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCalculatePenalizeBonusArgs = {
  input: CalculatePenalizeBonusInput;
};


/** query root */
export type Query_RootCategory_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_Document_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootChange_Office_RequestArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** query root */
export type Query_RootChange_Office_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** query root */
export type Query_RootChange_Office_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCityArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


/** query root */
export type Query_RootCity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


/** query root */
export type Query_RootCity_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCrypto_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootCrypto_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootCrypto_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocumentArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDocusignArgs = {
  distinct_on?: InputMaybe<Array<Docusign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Docusign_Order_By>>;
  where?: InputMaybe<Docusign_Bool_Exp>;
};


/** query root */
export type Query_RootDocusign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Docusign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Docusign_Order_By>>;
  where?: InputMaybe<Docusign_Bool_Exp>;
};


/** query root */
export type Query_RootDocusign_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootExportBonusesArgs = {
  args?: InputMaybe<Scalars['JSON']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


/** query root */
export type Query_RootExported_Bonus_XlsxArgs = {
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** query root */
export type Query_RootExported_Bonus_Xlsx_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** query root */
export type Query_RootExported_Bonus_Xlsx_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFilter_Actual_Transferred_CryptoArgs = {
  args: Filter_Actual_Transferred_Crypto_Args;
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Actual_Transferred_Crypto_AggregateArgs = {
  args: Filter_Actual_Transferred_Crypto_Args;
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Blacklist_Conversation_MessageArgs = {
  args: Filter_Blacklist_Conversation_Message_Args;
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Blacklist_Conversation_Message_AggregateArgs = {
  args: Filter_Blacklist_Conversation_Message_Args;
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_BonusArgs = {
  args: Filter_Bonus_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Bonus_AggregateArgs = {
  args: Filter_Bonus_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Bonus_MultisendArgs = {
  args: Filter_Bonus_Multisend_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Bonus_Multisend_AggregateArgs = {
  args: Filter_Bonus_Multisend_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Breach_UserArgs = {
  args: Filter_Breach_User_Args;
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Breach_User_AggregateArgs = {
  args: Filter_Breach_User_Args;
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_HistoryArgs = {
  args: Filter_History_Args;
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_History_AggregateArgs = {
  args: Filter_History_Args;
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Office_V2Args = {
  args: Filter_Office_V2_Args;
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Office_V2_AggregateArgs = {
  args: Filter_Office_V2_Args;
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_OfficesArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  export?: InputMaybe<Scalars['Boolean']>;
  export_all?: InputMaybe<Scalars['Boolean']>;
  export_fields?: InputMaybe<Array<Scalars['String']>>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
};


/** query root */
export type Query_RootFilter_Profile_V2Args = {
  args: Filter_Profile_V2_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Profile_V2_AggregateArgs = {
  args: Filter_Profile_V2_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_ProfilesArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['DateTime']>;
  created_to?: InputMaybe<Scalars['DateTime']>;
  current_page?: InputMaybe<Scalars['Int']>;
  from_withdrawal_count?: InputMaybe<Scalars['Int']>;
  in_office_only?: InputMaybe<Scalars['Boolean']>;
  is_in_bonus_blacklist?: InputMaybe<Array<Scalars['Boolean']>>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preferred_payment?: InputMaybe<Array<CorePreferredPayment>>;
  role?: InputMaybe<Array<CoreRole>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  to_withdrawal_count?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Array<Scalars['Int']>>;
};


/** query root */
export type Query_RootFilter_Review_Withdrawal_RequestArgs = {
  args: Filter_Review_Withdrawal_Request_Args;
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Review_Withdrawal_Request_AggregateArgs = {
  args: Filter_Review_Withdrawal_Request_Args;
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_TeamsArgs = {
  city_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<CoreSortDirection>;
};


/** query root */
export type Query_RootFilter_Teams_V2Args = {
  args: Filter_Teams_V2_Args;
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootFilter_Teams_V2_AggregateArgs = {
  args: Filter_Teams_V2_Args;
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootGetBanksArgs = {
  filter?: InputMaybe<Nq_BankFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<Nq_BankSort>>;
};


/** query root */
export type Query_RootGetBonusLeaderArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootGetBonusStatisticsArgs = {
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootGetHistoryArgs = {
  order?: InputMaybe<SortDirection>;
  orderBy?: InputMaybe<Scalars['String']>;
  pageNum?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<HistoryTypes>>>;
};


/** query root */
export type Query_RootGetManagerArgs = {
  role?: InputMaybe<Role>;
};


/** query root */
export type Query_RootGetOfficeArgs = {
  query?: InputMaybe<OfficeInput>;
};


/** query root */
export type Query_RootGetOfficeWithMemberFilterArgs = {
  city?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** query root */
export type Query_RootGetOfficeWithMemberFilterV2Args = {
  city?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** query root */
export type Query_RootGetSignedUrlArgs = {
  envelope?: InputMaybe<Scalars['String']>;
  type: Scalars['Int'];
};


/** query root */
export type Query_RootGetTeamArgs = {
  query?: InputMaybe<GetTeamInput>;
};


/** query root */
export type Query_RootGetUserWithFilterArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['String']>;
  created_to?: InputMaybe<Scalars['String']>;
  current_page?: InputMaybe<Scalars['Int']>;
  fromWithdrawalCount?: InputMaybe<Scalars['Int']>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preffered_payment?: InputMaybe<Array<InputMaybe<PreferredPayment>>>;
  role?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  toWithdrawalCount?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Array<Scalars['Int']>>;
};


/** query root */
export type Query_RootGet_Airtable_BasesArgs = {
  airtable_base_id?: InputMaybe<Scalars['String']>;
};


/** query root */
export type Query_RootGet_Bonus_By_RoleArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Bonus_By_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Exported_Bonus_XlsxArgs = {
  args: Get_Exported_Bonus_Xlsx_Args;
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Exported_Bonus_Xlsx_AggregateArgs = {
  args: Get_Exported_Bonus_Xlsx_Args;
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Initial_NotificationsArgs = {
  args?: InputMaybe<GetInitialNotificationInput>;
};


/** query root */
export type Query_RootGet_New_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootGet_New_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Withdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Withdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootHistoryArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** query root */
export type Query_RootHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** query root */
export type Query_RootHistory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootIncomeArgs = {
  distinct_on?: InputMaybe<Array<Income_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Income_Order_By>>;
  where?: InputMaybe<Income_Bool_Exp>;
};


/** query root */
export type Query_RootIncome_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Income_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Income_Order_By>>;
  where?: InputMaybe<Income_Bool_Exp>;
};


/** query root */
export type Query_RootIncome_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootManageAvailableArgs = {
  type?: InputMaybe<Scalars['Int']>;
};


/** query root */
export type Query_RootNgan_Luong_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ngan_Luong_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ngan_Luong_Transaction_Order_By>>;
  where?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootNgan_Luong_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ngan_Luong_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ngan_Luong_Transaction_Order_By>>;
  where?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootNgan_Luong_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNinepay_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ninepay_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ninepay_Transaction_Order_By>>;
  where?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootNinepay_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ninepay_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ninepay_Transaction_Order_By>>;
  where?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
};


/** query root */
export type Query_RootNinepay_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


/** query root */
export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


/** query root */
export type Query_RootNotification_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNq_Review_Withdrawal_Request_DtoArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootNq_Review_Withdrawal_Request_DtosArgs = {
  filter?: InputMaybe<Nq_Review_Withdrawal_Request_DtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<Nq_Review_Withdrawal_Request_DtoSort>>;
};


/** query root */
export type Query_RootOfficeArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOffice_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOffice_RuleArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** query root */
export type Query_RootOffice_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPayment_MethodArgs = {
  distinct_on?: InputMaybe<Array<Payment_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Method_Order_By>>;
  where?: InputMaybe<Payment_Method_Bool_Exp>;
};


/** query root */
export type Query_RootPayment_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Method_Order_By>>;
  where?: InputMaybe<Payment_Method_Bool_Exp>;
};


/** query root */
export type Query_RootPayment_Method_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootPenalize_UserArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};


/** query root */
export type Query_RootPenalize_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};


/** query root */
export type Query_RootPenalize_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootRelationshipArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** query root */
export type Query_RootRelationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** query root */
export type Query_RootRelationship_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** query root */
export type Query_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** query root */
export type Query_RootReport_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootReport_RelyArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** query root */
export type Query_RootReport_Rely_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** query root */
export type Query_RootReport_Rely_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootReview_Withdrawal_RequestArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootReview_Withdrawal_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootReview_Withdrawal_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSearchArgs = {
  body: SearchInput;
};


/** query root */
export type Query_RootSearch_UserArgs = {
  args: Search_User_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootSearch_User_AggregateArgs = {
  args: Search_User_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** query root */
export type Query_RootSeen_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootSeen_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** query root */
export type Query_RootSeen_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSend_Verify_EmailArgs = {
  ids: Array<Scalars['String']>;
};


/** query root */
export type Query_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootTeamListV2Args = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
};


/** query root */
export type Query_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootVerify_EmailsArgs = {
  emails: Array<Scalars['String']>;
};


/** query root */
export type Query_RootVerify_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** query root */
export type Query_RootVerify_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** query root */
export type Query_RootVerify_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootVerify_TypeArgs = {
  distinct_on?: InputMaybe<Array<Verify_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_Type_Order_By>>;
  where?: InputMaybe<Verify_Type_Bool_Exp>;
};


/** query root */
export type Query_RootVerify_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_Type_Order_By>>;
  where?: InputMaybe<Verify_Type_Bool_Exp>;
};


/** query root */
export type Query_RootVerify_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootWithdrawal_RequestArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootWithdrawal_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** query root */
export type Query_RootWithdrawal_Request_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "relationship" */
export type Relationship = {
  __typename?: 'relationship';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  managed_by?: Maybe<Scalars['String']>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An object relationship */
  profileByUserId: Profile;
  /** An object relationship */
  team?: Maybe<Team>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "relationship" */
export type Relationship_Aggregate = {
  __typename?: 'relationship_aggregate';
  aggregate?: Maybe<Relationship_Aggregate_Fields>;
  nodes: Array<Relationship>;
};

/** aggregate fields of "relationship" */
export type Relationship_Aggregate_Fields = {
  __typename?: 'relationship_aggregate_fields';
  avg?: Maybe<Relationship_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Relationship_Max_Fields>;
  min?: Maybe<Relationship_Min_Fields>;
  stddev?: Maybe<Relationship_Stddev_Fields>;
  stddev_pop?: Maybe<Relationship_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Relationship_Stddev_Samp_Fields>;
  sum?: Maybe<Relationship_Sum_Fields>;
  var_pop?: Maybe<Relationship_Var_Pop_Fields>;
  var_samp?: Maybe<Relationship_Var_Samp_Fields>;
  variance?: Maybe<Relationship_Variance_Fields>;
};


/** aggregate fields of "relationship" */
export type Relationship_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Relationship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "relationship" */
export type Relationship_Aggregate_Order_By = {
  avg?: InputMaybe<Relationship_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Relationship_Max_Order_By>;
  min?: InputMaybe<Relationship_Min_Order_By>;
  stddev?: InputMaybe<Relationship_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Relationship_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Relationship_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Relationship_Sum_Order_By>;
  var_pop?: InputMaybe<Relationship_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Relationship_Var_Samp_Order_By>;
  variance?: InputMaybe<Relationship_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "relationship" */
export type Relationship_Arr_Rel_Insert_Input = {
  data: Array<Relationship_Insert_Input>;
  on_conflict?: InputMaybe<Relationship_On_Conflict>;
};

/** aggregate avg on columns */
export type Relationship_Avg_Fields = {
  __typename?: 'relationship_avg_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "relationship" */
export type Relationship_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "relationship". All fields are combined with a logical 'AND'. */
export type Relationship_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Relationship_Bool_Exp>>>;
  _not?: InputMaybe<Relationship_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Relationship_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  managed_by?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileByUserId?: InputMaybe<Profile_Bool_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "relationship" */
export enum Relationship_Constraint {
  /** unique or primary key constraint */
  RelationshipPkey = 'relationship_pkey',
  /** unique or primary key constraint */
  RelationshipUserIdKey = 'relationship_user_id_key'
}

/** input type for incrementing integer column in table "relationship" */
export type Relationship_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  team_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "relationship" */
export type Relationship_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  managed_by?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByUserId?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Relationship_Max_Fields = {
  __typename?: 'relationship_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "relationship" */
export type Relationship_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Relationship_Min_Fields = {
  __typename?: 'relationship_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "relationship" */
export type Relationship_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "relationship" */
export type Relationship_Mutation_Response = {
  __typename?: 'relationship_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Relationship>;
};

/** input type for inserting object relation for remote table "relationship" */
export type Relationship_Obj_Rel_Insert_Input = {
  data: Relationship_Insert_Input;
  on_conflict?: InputMaybe<Relationship_On_Conflict>;
};

/** on conflict condition type for table "relationship" */
export type Relationship_On_Conflict = {
  constraint: Relationship_Constraint;
  update_columns: Array<Relationship_Update_Column>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};

/** ordering options when selecting data from "relationship" */
export type Relationship_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileByUserId?: InputMaybe<Profile_Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "relationship" */
export type Relationship_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "relationship" */
export enum Relationship_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "relationship" */
export type Relationship_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  managed_by?: InputMaybe<Scalars['String']>;
  team_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Relationship_Stddev_Fields = {
  __typename?: 'relationship_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "relationship" */
export type Relationship_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Relationship_Stddev_Pop_Fields = {
  __typename?: 'relationship_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "relationship" */
export type Relationship_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Relationship_Stddev_Samp_Fields = {
  __typename?: 'relationship_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "relationship" */
export type Relationship_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Relationship_Sum_Fields = {
  __typename?: 'relationship_sum_fields';
  id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "relationship" */
export type Relationship_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** update columns of table "relationship" */
export enum Relationship_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Relationship_Var_Pop_Fields = {
  __typename?: 'relationship_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "relationship" */
export type Relationship_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Relationship_Var_Samp_Fields = {
  __typename?: 'relationship_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "relationship" */
export type Relationship_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Relationship_Variance_Fields = {
  __typename?: 'relationship_variance_fields';
  id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "relationship" */
export type Relationship_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

export type ReplaceUserOutput = {
  __typename?: 'replaceUserOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "report" */
export type Report = {
  __typename?: 'report';
  /** An object relationship */
  bonu?: Maybe<Bonus>;
  bonus_date?: Maybe<Scalars['String']>;
  bonus_id?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_done?: Maybe<Scalars['Boolean']>;
  is_readed?: Maybe<Scalars['Boolean']>;
  last_rely_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  last_reply?: Maybe<Report_Rely>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An array relationship */
  report_relies: Array<Report_Rely>;
  /** An aggregated array relationship */
  report_relies_aggregate: Report_Rely_Aggregate;
  status: Scalars['Boolean'];
  type: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "report" */
export type ReportReport_ReliesArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** columns and relationships of "report" */
export type ReportReport_Relies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};

/** aggregated selection of "report" */
export type Report_Aggregate = {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<Report_Aggregate_Fields>;
  nodes: Array<Report>;
};

/** aggregate fields of "report" */
export type Report_Aggregate_Fields = {
  __typename?: 'report_aggregate_fields';
  avg?: Maybe<Report_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Report_Max_Fields>;
  min?: Maybe<Report_Min_Fields>;
  stddev?: Maybe<Report_Stddev_Fields>;
  stddev_pop?: Maybe<Report_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Report_Stddev_Samp_Fields>;
  sum?: Maybe<Report_Sum_Fields>;
  var_pop?: Maybe<Report_Var_Pop_Fields>;
  var_samp?: Maybe<Report_Var_Samp_Fields>;
  variance?: Maybe<Report_Variance_Fields>;
};


/** aggregate fields of "report" */
export type Report_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "report" */
export type Report_Aggregate_Order_By = {
  avg?: InputMaybe<Report_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Report_Max_Order_By>;
  min?: InputMaybe<Report_Min_Order_By>;
  stddev?: InputMaybe<Report_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Report_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Report_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Report_Sum_Order_By>;
  var_pop?: InputMaybe<Report_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Report_Var_Samp_Order_By>;
  variance?: InputMaybe<Report_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "report" */
export type Report_Arr_Rel_Insert_Input = {
  data: Array<Report_Insert_Input>;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};

/** aggregate avg on columns */
export type Report_Avg_Fields = {
  __typename?: 'report_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "report" */
export type Report_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type Report_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Report_Bool_Exp>>>;
  _not?: InputMaybe<Report_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Report_Bool_Exp>>>;
  bonu?: InputMaybe<Bonus_Bool_Exp>;
  bonus_date?: InputMaybe<String_Comparison_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_done?: InputMaybe<Boolean_Comparison_Exp>;
  is_readed?: InputMaybe<Boolean_Comparison_Exp>;
  last_rely_id?: InputMaybe<Int_Comparison_Exp>;
  last_reply?: InputMaybe<Report_Rely_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  report_relies?: InputMaybe<Report_Rely_Bool_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "report" */
export enum Report_Constraint {
  /** unique or primary key constraint */
  ReportLastRelyIdKey = 'report_last_rely_id_key',
  /** unique or primary key constraint */
  ReportPkey = 'report_pkey'
}

/** input type for incrementing integer column in table "report" */
export type Report_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  last_rely_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "report" */
export type Report_Insert_Input = {
  bonu?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_date?: InputMaybe<Scalars['String']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_done?: InputMaybe<Scalars['Boolean']>;
  is_readed?: InputMaybe<Scalars['Boolean']>;
  last_rely_id?: InputMaybe<Scalars['Int']>;
  last_reply?: InputMaybe<Report_Rely_Obj_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  report_relies?: InputMaybe<Report_Rely_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Report_Max_Fields = {
  __typename?: 'report_max_fields';
  bonus_date?: Maybe<Scalars['String']>;
  bonus_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_rely_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "report" */
export type Report_Max_Order_By = {
  bonus_date?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Min_Fields = {
  __typename?: 'report_min_fields';
  bonus_date?: Maybe<Scalars['String']>;
  bonus_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_rely_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "report" */
export type Report_Min_Order_By = {
  bonus_date?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "report" */
export type Report_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Report>;
};

/** input type for inserting object relation for remote table "report" */
export type Report_Obj_Rel_Insert_Input = {
  data: Report_Insert_Input;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};

/** on conflict condition type for table "report" */
export type Report_On_Conflict = {
  constraint: Report_Constraint;
  update_columns: Array<Report_Update_Column>;
  where?: InputMaybe<Report_Bool_Exp>;
};

/** ordering options when selecting data from "report" */
export type Report_Order_By = {
  bonu?: InputMaybe<Bonus_Order_By>;
  bonus_date?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_done?: InputMaybe<Order_By>;
  is_readed?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  last_reply?: InputMaybe<Report_Rely_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  report_relies_aggregate?: InputMaybe<Report_Rely_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "report" */
export type Report_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "report_rely" */
export type Report_Rely = {
  __typename?: 'report_rely';
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  is_approver: Scalars['Boolean'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  report: Report;
  report_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "report_rely" */
export type Report_Rely_Aggregate = {
  __typename?: 'report_rely_aggregate';
  aggregate?: Maybe<Report_Rely_Aggregate_Fields>;
  nodes: Array<Report_Rely>;
};

/** aggregate fields of "report_rely" */
export type Report_Rely_Aggregate_Fields = {
  __typename?: 'report_rely_aggregate_fields';
  avg?: Maybe<Report_Rely_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Report_Rely_Max_Fields>;
  min?: Maybe<Report_Rely_Min_Fields>;
  stddev?: Maybe<Report_Rely_Stddev_Fields>;
  stddev_pop?: Maybe<Report_Rely_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Report_Rely_Stddev_Samp_Fields>;
  sum?: Maybe<Report_Rely_Sum_Fields>;
  var_pop?: Maybe<Report_Rely_Var_Pop_Fields>;
  var_samp?: Maybe<Report_Rely_Var_Samp_Fields>;
  variance?: Maybe<Report_Rely_Variance_Fields>;
};


/** aggregate fields of "report_rely" */
export type Report_Rely_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Rely_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "report_rely" */
export type Report_Rely_Aggregate_Order_By = {
  avg?: InputMaybe<Report_Rely_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Report_Rely_Max_Order_By>;
  min?: InputMaybe<Report_Rely_Min_Order_By>;
  stddev?: InputMaybe<Report_Rely_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Report_Rely_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Report_Rely_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Report_Rely_Sum_Order_By>;
  var_pop?: InputMaybe<Report_Rely_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Report_Rely_Var_Samp_Order_By>;
  variance?: InputMaybe<Report_Rely_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "report_rely" */
export type Report_Rely_Arr_Rel_Insert_Input = {
  data: Array<Report_Rely_Insert_Input>;
  on_conflict?: InputMaybe<Report_Rely_On_Conflict>;
};

/** aggregate avg on columns */
export type Report_Rely_Avg_Fields = {
  __typename?: 'report_rely_avg_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "report_rely" */
export type Report_Rely_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "report_rely". All fields are combined with a logical 'AND'. */
export type Report_Rely_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Report_Rely_Bool_Exp>>>;
  _not?: InputMaybe<Report_Rely_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Report_Rely_Bool_Exp>>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_approver?: InputMaybe<Boolean_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  report?: InputMaybe<Report_Bool_Exp>;
  report_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "report_rely" */
export enum Report_Rely_Constraint {
  /** unique or primary key constraint */
  ReportRelyPkey = 'report_rely_pkey'
}

/** input type for incrementing integer column in table "report_rely" */
export type Report_Rely_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  report_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "report_rely" */
export type Report_Rely_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_approver?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  report?: InputMaybe<Report_Obj_Rel_Insert_Input>;
  report_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Report_Rely_Max_Fields = {
  __typename?: 'report_rely_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "report_rely" */
export type Report_Rely_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Rely_Min_Fields = {
  __typename?: 'report_rely_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "report_rely" */
export type Report_Rely_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "report_rely" */
export type Report_Rely_Mutation_Response = {
  __typename?: 'report_rely_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Report_Rely>;
};

/** input type for inserting object relation for remote table "report_rely" */
export type Report_Rely_Obj_Rel_Insert_Input = {
  data: Report_Rely_Insert_Input;
  on_conflict?: InputMaybe<Report_Rely_On_Conflict>;
};

/** on conflict condition type for table "report_rely" */
export type Report_Rely_On_Conflict = {
  constraint: Report_Rely_Constraint;
  update_columns: Array<Report_Rely_Update_Column>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};

/** ordering options when selecting data from "report_rely" */
export type Report_Rely_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_approver?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  report?: InputMaybe<Report_Order_By>;
  report_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "report_rely" */
export type Report_Rely_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "report_rely" */
export enum Report_Rely_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsApprover = 'is_approver',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "report_rely" */
export type Report_Rely_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_approver?: InputMaybe<Scalars['Boolean']>;
  report_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Report_Rely_Stddev_Fields = {
  __typename?: 'report_rely_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "report_rely" */
export type Report_Rely_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Report_Rely_Stddev_Pop_Fields = {
  __typename?: 'report_rely_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "report_rely" */
export type Report_Rely_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Report_Rely_Stddev_Samp_Fields = {
  __typename?: 'report_rely_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "report_rely" */
export type Report_Rely_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Report_Rely_Sum_Fields = {
  __typename?: 'report_rely_sum_fields';
  id?: Maybe<Scalars['Int']>;
  report_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "report_rely" */
export type Report_Rely_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** update columns of table "report_rely" */
export enum Report_Rely_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsApprover = 'is_approver',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Report_Rely_Var_Pop_Fields = {
  __typename?: 'report_rely_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "report_rely" */
export type Report_Rely_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Report_Rely_Var_Samp_Fields = {
  __typename?: 'report_rely_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "report_rely" */
export type Report_Rely_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Report_Rely_Variance_Fields = {
  __typename?: 'report_rely_variance_fields';
  id?: Maybe<Scalars['Float']>;
  report_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "report_rely" */
export type Report_Rely_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
};

/** select columns of table "report" */
export enum Report_Select_Column {
  /** column name */
  BonusDate = 'bonus_date',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'is_done',
  /** column name */
  IsReaded = 'is_readed',
  /** column name */
  LastRelyId = 'last_rely_id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "report" */
export type Report_Set_Input = {
  bonus_date?: InputMaybe<Scalars['String']>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_done?: InputMaybe<Scalars['Boolean']>;
  is_readed?: InputMaybe<Scalars['Boolean']>;
  last_rely_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Report_Stddev_Fields = {
  __typename?: 'report_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "report" */
export type Report_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Report_Stddev_Pop_Fields = {
  __typename?: 'report_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "report" */
export type Report_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Report_Stddev_Samp_Fields = {
  __typename?: 'report_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "report" */
export type Report_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Report_Sum_Fields = {
  __typename?: 'report_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  last_rely_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "report" */
export type Report_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** update columns of table "report" */
export enum Report_Update_Column {
  /** column name */
  BonusDate = 'bonus_date',
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'is_done',
  /** column name */
  IsReaded = 'is_readed',
  /** column name */
  LastRelyId = 'last_rely_id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Report_Var_Pop_Fields = {
  __typename?: 'report_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "report" */
export type Report_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Report_Var_Samp_Fields = {
  __typename?: 'report_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "report" */
export type Report_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Report_Variance_Fields = {
  __typename?: 'report_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  last_rely_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "report" */
export type Report_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_rely_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

export type ResendEmailOutput = {
  __typename?: 'resendEmailOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type ResetPasswordOutput = {
  __typename?: 'resetPasswordOutput';
  text?: Maybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'result';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type ResultImport = {
  __typename?: 'resultImport';
  text: Scalars['String'];
};

export type ResultUpdateRole = {
  __typename?: 'resultUpdateRole';
  result?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ResultUpdateStatus = {
  __typename?: 'resultUpdateStatus';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/**
 * this table contains requests made by approver, sales, waiting to be approved
 *
 *
 * columns and relationships of "review_withdrawal_request"
 *
 */
export type Review_Withdrawal_Request = {
  __typename?: 'review_withdrawal_request';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  issuer: Profile;
  issuer_id: Scalars['String'];
  /** An object relationship */
  processor?: Maybe<Profile>;
  processor_id?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  updated_by_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Profile>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "review_withdrawal_request" */
export type Review_Withdrawal_Request_Aggregate = {
  __typename?: 'review_withdrawal_request_aggregate';
  aggregate?: Maybe<Review_Withdrawal_Request_Aggregate_Fields>;
  nodes: Array<Review_Withdrawal_Request>;
};

/** aggregate fields of "review_withdrawal_request" */
export type Review_Withdrawal_Request_Aggregate_Fields = {
  __typename?: 'review_withdrawal_request_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Review_Withdrawal_Request_Max_Fields>;
  min?: Maybe<Review_Withdrawal_Request_Min_Fields>;
};


/** aggregate fields of "review_withdrawal_request" */
export type Review_Withdrawal_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Review_Withdrawal_Request_Max_Order_By>;
  min?: InputMaybe<Review_Withdrawal_Request_Min_Order_By>;
};

/** input type for inserting array relation for remote table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Arr_Rel_Insert_Input = {
  data: Array<Review_Withdrawal_Request_Insert_Input>;
  on_conflict?: InputMaybe<Review_Withdrawal_Request_On_Conflict>;
};

/** Boolean expression to filter rows from the table "review_withdrawal_request". All fields are combined with a logical 'AND'. */
export type Review_Withdrawal_Request_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Review_Withdrawal_Request_Bool_Exp>>>;
  _not?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Review_Withdrawal_Request_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issuer?: InputMaybe<Profile_Bool_Exp>;
  issuer_id?: InputMaybe<String_Comparison_Exp>;
  processor?: InputMaybe<Profile_Bool_Exp>;
  processor_id?: InputMaybe<String_Comparison_Exp>;
  reject_reason?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Profile_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "review_withdrawal_request" */
export enum Review_Withdrawal_Request_Constraint {
  /** unique or primary key constraint */
  ReviewBonusHistoryRequestPkey = 'review_bonus_history_request_pkey'
}

/** input type for inserting data into table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  issuer?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  issuer_id?: InputMaybe<Scalars['String']>;
  processor?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  processor_id?: InputMaybe<Scalars['String']>;
  reject_reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Review_Withdrawal_Request_Max_Fields = {
  __typename?: 'review_withdrawal_request_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  issuer_id?: Maybe<Scalars['String']>;
  processor_id?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  processor_id?: InputMaybe<Order_By>;
  reject_reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Review_Withdrawal_Request_Min_Fields = {
  __typename?: 'review_withdrawal_request_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  issuer_id?: Maybe<Scalars['String']>;
  processor_id?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  processor_id?: InputMaybe<Order_By>;
  reject_reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Mutation_Response = {
  __typename?: 'review_withdrawal_request_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Review_Withdrawal_Request>;
};

/** input type for inserting object relation for remote table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Obj_Rel_Insert_Input = {
  data: Review_Withdrawal_Request_Insert_Input;
  on_conflict?: InputMaybe<Review_Withdrawal_Request_On_Conflict>;
};

/** on conflict condition type for table "review_withdrawal_request" */
export type Review_Withdrawal_Request_On_Conflict = {
  constraint: Review_Withdrawal_Request_Constraint;
  update_columns: Array<Review_Withdrawal_Request_Update_Column>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};

/** ordering options when selecting data from "review_withdrawal_request" */
export type Review_Withdrawal_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issuer?: InputMaybe<Profile_Order_By>;
  issuer_id?: InputMaybe<Order_By>;
  processor?: InputMaybe<Profile_Order_By>;
  processor_id?: InputMaybe<Order_By>;
  reject_reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Profile_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "review_withdrawal_request" */
export type Review_Withdrawal_Request_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review_withdrawal_request" */
export enum Review_Withdrawal_Request_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  ProcessorId = 'processor_id',
  /** column name */
  RejectReason = 'reject_reason',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedById = 'updated_by_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "review_withdrawal_request" */
export type Review_Withdrawal_Request_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  issuer_id?: InputMaybe<Scalars['String']>;
  processor_id?: InputMaybe<Scalars['String']>;
  reject_reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "review_withdrawal_request" */
export enum Review_Withdrawal_Request_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IssuerId = 'issuer_id',
  /** column name */
  ProcessorId = 'processor_id',
  /** column name */
  RejectReason = 'reject_reason',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedById = 'updated_by_id',
  /** column name */
  UserId = 'user_id'
}

export type Search_User_Args = {
  search?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "seen_announcement" */
export type Seen_Announcement = {
  __typename?: 'seen_announcement';
  /** An object relationship */
  announcement: Announcement;
  announcement_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  profile: Profile;
  profile_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "seen_announcement" */
export type Seen_Announcement_Aggregate = {
  __typename?: 'seen_announcement_aggregate';
  aggregate?: Maybe<Seen_Announcement_Aggregate_Fields>;
  nodes: Array<Seen_Announcement>;
};

/** aggregate fields of "seen_announcement" */
export type Seen_Announcement_Aggregate_Fields = {
  __typename?: 'seen_announcement_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Seen_Announcement_Max_Fields>;
  min?: Maybe<Seen_Announcement_Min_Fields>;
};


/** aggregate fields of "seen_announcement" */
export type Seen_Announcement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seen_announcement" */
export type Seen_Announcement_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Seen_Announcement_Max_Order_By>;
  min?: InputMaybe<Seen_Announcement_Min_Order_By>;
};

/** input type for inserting array relation for remote table "seen_announcement" */
export type Seen_Announcement_Arr_Rel_Insert_Input = {
  data: Array<Seen_Announcement_Insert_Input>;
  on_conflict?: InputMaybe<Seen_Announcement_On_Conflict>;
};

/** Boolean expression to filter rows from the table "seen_announcement". All fields are combined with a logical 'AND'. */
export type Seen_Announcement_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Seen_Announcement_Bool_Exp>>>;
  _not?: InputMaybe<Seen_Announcement_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Seen_Announcement_Bool_Exp>>>;
  announcement?: InputMaybe<Announcement_Bool_Exp>;
  announcement_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "seen_announcement" */
export enum Seen_Announcement_Constraint {
  /** unique or primary key constraint */
  SeenAnnouncementPkey = 'seen_announcement_pkey'
}

/** input type for inserting data into table "seen_announcement" */
export type Seen_Announcement_Insert_Input = {
  announcement?: InputMaybe<Announcement_Obj_Rel_Insert_Input>;
  announcement_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Seen_Announcement_Max_Fields = {
  __typename?: 'seen_announcement_max_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "seen_announcement" */
export type Seen_Announcement_Max_Order_By = {
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Seen_Announcement_Min_Fields = {
  __typename?: 'seen_announcement_min_fields';
  announcement_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "seen_announcement" */
export type Seen_Announcement_Min_Order_By = {
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "seen_announcement" */
export type Seen_Announcement_Mutation_Response = {
  __typename?: 'seen_announcement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Seen_Announcement>;
};

/** input type for inserting object relation for remote table "seen_announcement" */
export type Seen_Announcement_Obj_Rel_Insert_Input = {
  data: Seen_Announcement_Insert_Input;
  on_conflict?: InputMaybe<Seen_Announcement_On_Conflict>;
};

/** on conflict condition type for table "seen_announcement" */
export type Seen_Announcement_On_Conflict = {
  constraint: Seen_Announcement_Constraint;
  update_columns: Array<Seen_Announcement_Update_Column>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};

/** ordering options when selecting data from "seen_announcement" */
export type Seen_Announcement_Order_By = {
  announcement?: InputMaybe<Announcement_Order_By>;
  announcement_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "seen_announcement" */
export type Seen_Announcement_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "seen_announcement" */
export enum Seen_Announcement_Select_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "seen_announcement" */
export type Seen_Announcement_Set_Input = {
  announcement_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "seen_announcement" */
export enum Seen_Announcement_Update_Column {
  /** column name */
  AnnouncementId = 'announcement_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type SendDocumentOutput = {
  __typename?: 'sendDocumentOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type SendMailOutput = {
  __typename?: 'sendMailOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type SignUpOutput = {
  __typename?: 'signUpOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "actual_transferred_crypto" */
  actual_transferred_crypto: Array<Actual_Transferred_Crypto>;
  /** fetch aggregated fields from the table: "actual_transferred_crypto" */
  actual_transferred_crypto_aggregate: Actual_Transferred_Crypto_Aggregate;
  /** fetch data from the table: "actual_transferred_crypto" using primary key columns */
  actual_transferred_crypto_by_pk?: Maybe<Actual_Transferred_Crypto>;
  /** fetch data from the table: "announcement" */
  announcement: Array<Announcement>;
  /** fetch aggregated fields from the table: "announcement" */
  announcement_aggregate: Announcement_Aggregate;
  /** fetch data from the table: "announcement" using primary key columns */
  announcement_by_pk?: Maybe<Announcement>;
  /** execute function "approver_get_bonuses_v2" which returns "bonus" */
  approver_get_bonuses_v2: Array<Bonus>;
  /** execute function "approver_get_bonuses_v2" and query aggregates on result of table type "bonus" */
  approver_get_bonuses_v2_aggregate: Bonus_Aggregate;
  /** fetch data from the table: "approver_office" */
  approver_office: Array<Approver_Office>;
  /** fetch aggregated fields from the table: "approver_office" */
  approver_office_aggregate: Approver_Office_Aggregate;
  /** fetch data from the table: "approver_office" using primary key columns */
  approver_office_by_pk?: Maybe<Approver_Office>;
  /** fetch data from the table: "bank" */
  bank: Array<Bank>;
  /** fetch data from the table: "bank_account" */
  bank_account: Array<Bank_Account>;
  /** fetch aggregated fields from the table: "bank_account" */
  bank_account_aggregate: Bank_Account_Aggregate;
  /** fetch data from the table: "bank_account" using primary key columns */
  bank_account_by_pk?: Maybe<Bank_Account>;
  /** fetch aggregated fields from the table: "bank" */
  bank_aggregate: Bank_Aggregate;
  /** fetch data from the table: "bank" using primary key columns */
  bank_by_pk?: Maybe<Bank>;
  /** fetch data from the table: "bank_error" */
  bank_error: Array<Bank_Error>;
  /** fetch aggregated fields from the table: "bank_error" */
  bank_error_aggregate: Bank_Error_Aggregate;
  /** fetch data from the table: "bank_error" using primary key columns */
  bank_error_by_pk?: Maybe<Bank_Error>;
  /** fetch data from the table: "blacklist_conversation_message" */
  blacklist_conversation_message: Array<Blacklist_Conversation_Message>;
  /** fetch aggregated fields from the table: "blacklist_conversation_message" */
  blacklist_conversation_message_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** fetch data from the table: "blacklist_conversation_message" using primary key columns */
  blacklist_conversation_message_by_pk?: Maybe<Blacklist_Conversation_Message>;
  /** fetch data from the table: "blacklist_history" */
  blacklist_history: Array<Blacklist_History>;
  /** fetch aggregated fields from the table: "blacklist_history" */
  blacklist_history_aggregate: Blacklist_History_Aggregate;
  /** fetch data from the table: "blacklist_history" using primary key columns */
  blacklist_history_by_pk?: Maybe<Blacklist_History>;
  /** fetch data from the table: "bonus" */
  bonus: Array<Bonus>;
  /** fetch aggregated fields from the table: "bonus" */
  bonus_aggregate: Bonus_Aggregate;
  /** fetch data from the table: "bonus_blacklist" */
  bonus_blacklist: Array<Bonus_Blacklist>;
  /** fetch aggregated fields from the table: "bonus_blacklist" */
  bonus_blacklist_aggregate: Bonus_Blacklist_Aggregate;
  /** fetch data from the table: "bonus_blacklist" using primary key columns */
  bonus_blacklist_by_pk?: Maybe<Bonus_Blacklist>;
  /** fetch data from the table: "bonus" using primary key columns */
  bonus_by_pk?: Maybe<Bonus>;
  /** fetch data from the table: "bonus_fee_history" */
  bonus_fee_history: Array<Bonus_Fee_History>;
  /** fetch aggregated fields from the table: "bonus_fee_history" */
  bonus_fee_history_aggregate: Bonus_Fee_History_Aggregate;
  /** fetch data from the table: "bonus_fee_history" using primary key columns */
  bonus_fee_history_by_pk?: Maybe<Bonus_Fee_History>;
  /** fetch data from the table: "bonus_office_rule" */
  bonus_office_rule: Array<Bonus_Office_Rule>;
  /** fetch aggregated fields from the table: "bonus_office_rule" */
  bonus_office_rule_aggregate: Bonus_Office_Rule_Aggregate;
  /** fetch data from the table: "bonus_office_rule" using primary key columns */
  bonus_office_rule_by_pk?: Maybe<Bonus_Office_Rule>;
  /** fetch data from the table: "bonus_type" */
  bonus_type: Array<Bonus_Type>;
  /** fetch aggregated fields from the table: "bonus_type" */
  bonus_type_aggregate: Bonus_Type_Aggregate;
  /** fetch data from the table: "bonus_type" using primary key columns */
  bonus_type_by_pk?: Maybe<Bonus_Type>;
  /** fetch data from the table: "breach_user" */
  breach_user: Array<Breach_User>;
  /** fetch aggregated fields from the table: "breach_user" */
  breach_user_aggregate: Breach_User_Aggregate;
  /** fetch data from the table: "breach_user" using primary key columns */
  breach_user_by_pk?: Maybe<Breach_User>;
  /** perform the action: "calculatePenalizeBonus" */
  calculatePenalizeBonus?: Maybe<CalculatePenalizeBonusOutput>;
  /** fetch data from the table: "category_document" */
  category_document: Array<Category_Document>;
  /** fetch aggregated fields from the table: "category_document" */
  category_document_aggregate: Category_Document_Aggregate;
  /** fetch data from the table: "category_document" using primary key columns */
  category_document_by_pk?: Maybe<Category_Document>;
  /** fetch data from the table: "change_office_request" */
  change_office_request: Array<Change_Office_Request>;
  /** fetch aggregated fields from the table: "change_office_request" */
  change_office_request_aggregate: Change_Office_Request_Aggregate;
  /** fetch data from the table: "change_office_request" using primary key columns */
  change_office_request_by_pk?: Maybe<Change_Office_Request>;
  /** perform the action: "checkNationalCard" */
  checkNationalCard?: Maybe<CheckNationalCardOutput>;
  /** fetch data from the table: "city" */
  city: Array<City>;
  /** fetch aggregated fields from the table: "city" */
  city_aggregate: City_Aggregate;
  /** fetch data from the table: "city" using primary key columns */
  city_by_pk?: Maybe<City>;
  createdNq_profile: Nq_Profile;
  /** fetch data from the table: "crypto_transaction" */
  crypto_transaction: Array<Crypto_Transaction>;
  /** fetch aggregated fields from the table: "crypto_transaction" */
  crypto_transaction_aggregate: Crypto_Transaction_Aggregate;
  /** fetch data from the table: "crypto_transaction" using primary key columns */
  crypto_transaction_by_pk?: Maybe<Crypto_Transaction>;
  deletedManyNq_profiles: DeleteManyResponse;
  deletedOneNq_profile: Nq_ProfileDeleteResponse;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document_by_pk?: Maybe<Document>;
  /** fetch data from the table: "docusign" */
  docusign: Array<Docusign>;
  /** fetch aggregated fields from the table: "docusign" */
  docusign_aggregate: Docusign_Aggregate;
  /** fetch data from the table: "docusign" using primary key columns */
  docusign_by_pk?: Maybe<Docusign>;
  /** fetch data from the table: "exported_bonus_xlsx" */
  exported_bonus_xlsx: Array<Exported_Bonus_Xlsx>;
  /** fetch aggregated fields from the table: "exported_bonus_xlsx" */
  exported_bonus_xlsx_aggregate: Exported_Bonus_Xlsx_Aggregate;
  /** fetch data from the table: "exported_bonus_xlsx" using primary key columns */
  exported_bonus_xlsx_by_pk?: Maybe<Exported_Bonus_Xlsx>;
  /** execute function "filter_actual_transferred_crypto" which returns "actual_transferred_crypto" */
  filter_actual_transferred_crypto: Array<Actual_Transferred_Crypto>;
  /** execute function "filter_actual_transferred_crypto" and query aggregates on result of table type "actual_transferred_crypto" */
  filter_actual_transferred_crypto_aggregate: Actual_Transferred_Crypto_Aggregate;
  /** execute function "filter_blacklist_conversation_message" which returns "blacklist_conversation_message" */
  filter_blacklist_conversation_message: Array<Blacklist_Conversation_Message>;
  /** execute function "filter_blacklist_conversation_message" and query aggregates on result of table type "blacklist_conversation_message" */
  filter_blacklist_conversation_message_aggregate: Blacklist_Conversation_Message_Aggregate;
  /** execute function "filter_bonus" which returns "bonus" */
  filter_bonus: Array<Bonus>;
  /** execute function "filter_bonus" and query aggregates on result of table type "bonus" */
  filter_bonus_aggregate: Bonus_Aggregate;
  /** execute function "filter_bonus_multisend" which returns "bonus" */
  filter_bonus_multisend: Array<Bonus>;
  /** execute function "filter_bonus_multisend" and query aggregates on result of table type "bonus" */
  filter_bonus_multisend_aggregate: Bonus_Aggregate;
  /** execute function "filter_breach_user" which returns "breach_user" */
  filter_breach_user: Array<Breach_User>;
  /** execute function "filter_breach_user" and query aggregates on result of table type "breach_user" */
  filter_breach_user_aggregate: Breach_User_Aggregate;
  /** execute function "filter_history" which returns "history" */
  filter_history: Array<History>;
  /** execute function "filter_history" and query aggregates on result of table type "history" */
  filter_history_aggregate: History_Aggregate;
  /** execute function "filter_office_v2" which returns "office" */
  filter_office_v2: Array<Office>;
  /** execute function "filter_office_v2" and query aggregates on result of table type "office" */
  filter_office_v2_aggregate: Office_Aggregate;
  /** execute function "filter_profile_v2" which returns "profile" */
  filter_profile_v2: Array<Profile>;
  /** execute function "filter_profile_v2" and query aggregates on result of table type "profile" */
  filter_profile_v2_aggregate: Profile_Aggregate;
  /** execute function "filter_review_withdrawal_request" which returns "review_withdrawal_request" */
  filter_review_withdrawal_request: Array<Review_Withdrawal_Request>;
  /** execute function "filter_review_withdrawal_request" and query aggregates on result of table type "review_withdrawal_request" */
  filter_review_withdrawal_request_aggregate: Review_Withdrawal_Request_Aggregate;
  /** execute function "filter_teams_v2" which returns "team" */
  filter_teams_v2: Array<Team>;
  /** execute function "filter_teams_v2" and query aggregates on result of table type "team" */
  filter_teams_v2_aggregate: Team_Aggregate;
  /** perform the action: "getBalanceNganLuong" */
  getBalanceNganLuong?: Maybe<GetBalanceNganLuongOutput>;
  /** perform the action: "getBonusLeader" */
  getBonusLeader?: Maybe<GetBonusLeaderOutput>;
  /** perform the action: "getBonusOfficeAdmin" */
  getBonusOfficeAdmin?: Maybe<GetBonusOfficeAdminOutput>;
  /** perform the action: "getBonusOfficeApprover" */
  getBonusOfficeApprover?: Maybe<GetBonusOfficeApproverOutput>;
  /** perform the action: "getBonusStatistics" */
  getBonusStatistics?: Maybe<BonusStatisticsOutput>;
  /** perform the action: "getHistory" */
  getHistory?: Maybe<QueryHistoryOutput>;
  /** perform the action: "getManager" */
  getManager?: Maybe<GetManagerOutput>;
  /** perform the action: "getOffice" */
  getOffice?: Maybe<Array<Maybe<OfficeOutput>>>;
  /** perform the action: "getOfficeWithMember" */
  getOfficeWithMember?: Maybe<GetOfficeWithMemberOutput>;
  /** perform the action: "getOfficeWithMemberFilter" */
  getOfficeWithMemberFilter?: Maybe<GetOfficeWithMemberMinMaxOutput>;
  /** perform the action: "getOfficeWithMemberFilterV2" */
  getOfficeWithMemberFilterV2?: Maybe<GetOfficeWithMemberFilterV2Output>;
  /** perform the action: "getSignedURL" */
  getSignedURL?: Maybe<SignedUrlOutput>;
  /** perform the action: "getTeam" */
  getTeam?: Maybe<Array<Maybe<GetTeamOutput>>>;
  /** perform the action: "getUserWithFilter" */
  getUserWithFilter?: Maybe<GetUserWithFilterOutput>;
  /** execute function "get_bonus_by_role" which returns "bonus" */
  get_bonus_by_role: Array<Bonus>;
  /** execute function "get_bonus_by_role" and query aggregates on result of table type "bonus" */
  get_bonus_by_role_aggregate: Bonus_Aggregate;
  /** execute function "get_exported_bonus_xlsx" which returns "exported_bonus_xlsx" */
  get_exported_bonus_xlsx: Array<Exported_Bonus_Xlsx>;
  /** execute function "get_exported_bonus_xlsx" and query aggregates on result of table type "exported_bonus_xlsx" */
  get_exported_bonus_xlsx_aggregate: Exported_Bonus_Xlsx_Aggregate;
  /** perform the action: "get_initial_notifications" */
  get_initial_notifications?: Maybe<Array<Maybe<InitialNotificationOutput>>>;
  /** execute function "get_new_announcement" which returns "announcement" */
  get_new_announcement: Array<Announcement>;
  /** execute function "get_new_announcement" and query aggregates on result of table type "announcement" */
  get_new_announcement_aggregate: Announcement_Aggregate;
  /** execute function "get_withdrawal_requests" which returns "withdrawal_request" */
  get_withdrawal_requests: Array<Withdrawal_Request>;
  /** execute function "get_withdrawal_requests" and query aggregates on result of table type "withdrawal_request" */
  get_withdrawal_requests_aggregate: Withdrawal_Request_Aggregate;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "history" using primary key columns */
  history_by_pk?: Maybe<History>;
  /** fetch data from the table: "income" */
  income: Array<Income>;
  /** fetch aggregated fields from the table: "income" */
  income_aggregate: Income_Aggregate;
  /** fetch data from the table: "income" using primary key columns */
  income_by_pk?: Maybe<Income>;
  /** perform the action: "manageAvailable" */
  manageAvailable?: Maybe<GetmanageAvailableOutput>;
  /** fetch data from the table: "ngan_luong_transaction" */
  ngan_luong_transaction: Array<Ngan_Luong_Transaction>;
  /** fetch aggregated fields from the table: "ngan_luong_transaction" */
  ngan_luong_transaction_aggregate: Ngan_Luong_Transaction_Aggregate;
  /** fetch data from the table: "ngan_luong_transaction" using primary key columns */
  ngan_luong_transaction_by_pk?: Maybe<Ngan_Luong_Transaction>;
  /** fetch data from the table: "ninepay_transaction" */
  ninepay_transaction: Array<Ninepay_Transaction>;
  /** fetch aggregated fields from the table: "ninepay_transaction" */
  ninepay_transaction_aggregate: Ninepay_Transaction_Aggregate;
  /** fetch data from the table: "ninepay_transaction" using primary key columns */
  ninepay_transaction_by_pk?: Maybe<Ninepay_Transaction>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "office" */
  office: Array<Office>;
  /** fetch aggregated fields from the table: "office" */
  office_aggregate: Office_Aggregate;
  /** fetch data from the table: "office_announcement" */
  office_announcement: Array<Office_Announcement>;
  /** fetch aggregated fields from the table: "office_announcement" */
  office_announcement_aggregate: Office_Announcement_Aggregate;
  /** fetch data from the table: "office_announcement" using primary key columns */
  office_announcement_by_pk?: Maybe<Office_Announcement>;
  /** fetch data from the table: "office" using primary key columns */
  office_by_pk?: Maybe<Office>;
  /** fetch data from the table: "office_rule" */
  office_rule: Array<Office_Rule>;
  /** fetch aggregated fields from the table: "office_rule" */
  office_rule_aggregate: Office_Rule_Aggregate;
  /** fetch data from the table: "office_rule" using primary key columns */
  office_rule_by_pk?: Maybe<Office_Rule>;
  /** fetch data from the table: "payment_method" */
  payment_method: Array<Payment_Method>;
  /** fetch aggregated fields from the table: "payment_method" */
  payment_method_aggregate: Payment_Method_Aggregate;
  /** fetch data from the table: "payment_method" using primary key columns */
  payment_method_by_pk?: Maybe<Payment_Method>;
  /** fetch data from the table: "penalize_user" */
  penalize_user: Array<Penalize_User>;
  /** fetch aggregated fields from the table: "penalize_user" */
  penalize_user_aggregate: Penalize_User_Aggregate;
  /** fetch data from the table: "penalize_user" using primary key columns */
  penalize_user_by_pk?: Maybe<Penalize_User>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "relationship" */
  relationship: Array<Relationship>;
  /** fetch aggregated fields from the table: "relationship" */
  relationship_aggregate: Relationship_Aggregate;
  /** fetch data from the table: "relationship" using primary key columns */
  relationship_by_pk?: Maybe<Relationship>;
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "report_rely" */
  report_rely: Array<Report_Rely>;
  /** fetch aggregated fields from the table: "report_rely" */
  report_rely_aggregate: Report_Rely_Aggregate;
  /** fetch data from the table: "report_rely" using primary key columns */
  report_rely_by_pk?: Maybe<Report_Rely>;
  /** fetch data from the table: "review_withdrawal_request" */
  review_withdrawal_request: Array<Review_Withdrawal_Request>;
  /** fetch aggregated fields from the table: "review_withdrawal_request" */
  review_withdrawal_request_aggregate: Review_Withdrawal_Request_Aggregate;
  /** fetch data from the table: "review_withdrawal_request" using primary key columns */
  review_withdrawal_request_by_pk?: Maybe<Review_Withdrawal_Request>;
  /** perform the action: "search" */
  search?: Maybe<SearchOutput>;
  /** execute function "search_user" which returns "profile" */
  search_user: Array<Profile>;
  /** execute function "search_user" and query aggregates on result of table type "profile" */
  search_user_aggregate: Profile_Aggregate;
  /** fetch data from the table: "seen_announcement" */
  seen_announcement: Array<Seen_Announcement>;
  /** fetch aggregated fields from the table: "seen_announcement" */
  seen_announcement_aggregate: Seen_Announcement_Aggregate;
  /** fetch data from the table: "seen_announcement" using primary key columns */
  seen_announcement_by_pk?: Maybe<Seen_Announcement>;
  /** perform the action: "synchronizeMeilisearch" */
  synchronizeMeilisearch?: Maybe<SynchronizedNotificationResponse>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** perform the action: "teamListV2" */
  teamListV2?: Maybe<TeamListV2Output>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  updatedManyNq_profiles: UpdateManyResponse;
  updatedOneNq_profile: Nq_Profile;
  /** fetch data from the table: "verify_history" */
  verify_history: Array<Verify_History>;
  /** fetch aggregated fields from the table: "verify_history" */
  verify_history_aggregate: Verify_History_Aggregate;
  /** fetch data from the table: "verify_history" using primary key columns */
  verify_history_by_pk?: Maybe<Verify_History>;
  /** fetch data from the table: "verify_type" */
  verify_type: Array<Verify_Type>;
  /** fetch aggregated fields from the table: "verify_type" */
  verify_type_aggregate: Verify_Type_Aggregate;
  /** fetch data from the table: "verify_type" using primary key columns */
  verify_type_by_pk?: Maybe<Verify_Type>;
  /** fetch data from the table: "withdrawal_request" */
  withdrawal_request: Array<Withdrawal_Request>;
  /** fetch aggregated fields from the table: "withdrawal_request" */
  withdrawal_request_aggregate: Withdrawal_Request_Aggregate;
  /** fetch data from the table: "withdrawal_request" using primary key columns */
  withdrawal_request_by_pk?: Maybe<Withdrawal_Request>;
};


/** subscription root */
export type Subscription_RootActual_Transferred_CryptoArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActual_Transferred_Crypto_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActual_Transferred_Crypto_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnouncement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootApprover_Get_Bonuses_V2Args = {
  args: Approver_Get_Bonuses_V2_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApprover_Get_Bonuses_V2_AggregateArgs = {
  args: Approver_Get_Bonuses_V2_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApprover_OfficeArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApprover_Office_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Approver_Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Approver_Office_Order_By>>;
  where?: InputMaybe<Approver_Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApprover_Office_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBankArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_AccountArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Account_Order_By>>;
  where?: InputMaybe<Bank_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_Account_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBank_ErrorArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_Error_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Error_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Error_Order_By>>;
  where?: InputMaybe<Bank_Error_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBank_Error_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBlacklist_Conversation_MessageArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_Conversation_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_Conversation_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBlacklist_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklist_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_History_Order_By>>;
  where?: InputMaybe<Blacklist_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlacklist_History_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBonusArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_BlacklistArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Blacklist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Blacklist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Blacklist_Order_By>>;
  where?: InputMaybe<Bonus_Blacklist_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Blacklist_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBonus_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBonus_Fee_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Fee_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Fee_History_Order_By>>;
  where?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Fee_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Fee_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Fee_History_Order_By>>;
  where?: InputMaybe<Bonus_Fee_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Fee_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBonus_Office_RuleArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Office_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Office_Rule_Order_By>>;
  where?: InputMaybe<Bonus_Office_Rule_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Office_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBonus_TypeArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Type_Order_By>>;
  where?: InputMaybe<Bonus_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Type_Order_By>>;
  where?: InputMaybe<Bonus_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBonus_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootBreach_UserArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBreach_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBreach_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCalculatePenalizeBonusArgs = {
  input: CalculatePenalizeBonusInput;
};


/** subscription root */
export type Subscription_RootCategory_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Document_Order_By>>;
  where?: InputMaybe<Category_Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_Document_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootChange_Office_RequestArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChange_Office_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Change_Office_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Change_Office_Request_Order_By>>;
  where?: InputMaybe<Change_Office_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChange_Office_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCityArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCity_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCreatedNq_ProfileArgs = {
  input?: InputMaybe<CreateNq_ProfileSubscriptionFilterInput>;
};


/** subscription root */
export type Subscription_RootCrypto_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCrypto_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crypto_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crypto_Transaction_Order_By>>;
  where?: InputMaybe<Crypto_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCrypto_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDeletedOneNq_ProfileArgs = {
  input?: InputMaybe<DeleteOneNq_ProfileSubscriptionFilterInput>;
};


/** subscription root */
export type Subscription_RootDocumentArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Document_Order_By>>;
  where?: InputMaybe<Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDocusignArgs = {
  distinct_on?: InputMaybe<Array<Docusign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Docusign_Order_By>>;
  where?: InputMaybe<Docusign_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocusign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Docusign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Docusign_Order_By>>;
  where?: InputMaybe<Docusign_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocusign_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootExported_Bonus_XlsxArgs = {
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExported_Bonus_Xlsx_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootExported_Bonus_Xlsx_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFilter_Actual_Transferred_CryptoArgs = {
  args: Filter_Actual_Transferred_Crypto_Args;
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Actual_Transferred_Crypto_AggregateArgs = {
  args: Filter_Actual_Transferred_Crypto_Args;
  distinct_on?: InputMaybe<Array<Actual_Transferred_Crypto_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actual_Transferred_Crypto_Order_By>>;
  where?: InputMaybe<Actual_Transferred_Crypto_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Blacklist_Conversation_MessageArgs = {
  args: Filter_Blacklist_Conversation_Message_Args;
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Blacklist_Conversation_Message_AggregateArgs = {
  args: Filter_Blacklist_Conversation_Message_Args;
  distinct_on?: InputMaybe<Array<Blacklist_Conversation_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklist_Conversation_Message_Order_By>>;
  where?: InputMaybe<Blacklist_Conversation_Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_BonusArgs = {
  args: Filter_Bonus_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Bonus_AggregateArgs = {
  args: Filter_Bonus_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Bonus_MultisendArgs = {
  args: Filter_Bonus_Multisend_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Bonus_Multisend_AggregateArgs = {
  args: Filter_Bonus_Multisend_Args;
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Breach_UserArgs = {
  args: Filter_Breach_User_Args;
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Breach_User_AggregateArgs = {
  args: Filter_Breach_User_Args;
  distinct_on?: InputMaybe<Array<Breach_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Breach_User_Order_By>>;
  where?: InputMaybe<Breach_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_HistoryArgs = {
  args: Filter_History_Args;
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_History_AggregateArgs = {
  args: Filter_History_Args;
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Office_V2Args = {
  args: Filter_Office_V2_Args;
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Office_V2_AggregateArgs = {
  args: Filter_Office_V2_Args;
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Profile_V2Args = {
  args: Filter_Profile_V2_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Profile_V2_AggregateArgs = {
  args: Filter_Profile_V2_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Review_Withdrawal_RequestArgs = {
  args: Filter_Review_Withdrawal_Request_Args;
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Review_Withdrawal_Request_AggregateArgs = {
  args: Filter_Review_Withdrawal_Request_Args;
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Teams_V2Args = {
  args: Filter_Teams_V2_Args;
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFilter_Teams_V2_AggregateArgs = {
  args: Filter_Teams_V2_Args;
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGetBonusLeaderArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGetBonusStatisticsArgs = {
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGetHistoryArgs = {
  order?: InputMaybe<SortDirection>;
  orderBy?: InputMaybe<Scalars['String']>;
  pageNum?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<HistoryTypes>>>;
};


/** subscription root */
export type Subscription_RootGetManagerArgs = {
  role?: InputMaybe<Role>;
};


/** subscription root */
export type Subscription_RootGetOfficeArgs = {
  query?: InputMaybe<OfficeInput>;
};


/** subscription root */
export type Subscription_RootGetOfficeWithMemberFilterArgs = {
  city?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** subscription root */
export type Subscription_RootGetOfficeWithMemberFilterV2Args = {
  city?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** subscription root */
export type Subscription_RootGetSignedUrlArgs = {
  envelope?: InputMaybe<Scalars['String']>;
  type: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGetTeamArgs = {
  query?: InputMaybe<GetTeamInput>;
};


/** subscription root */
export type Subscription_RootGetUserWithFilterArgs = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  created_from?: InputMaybe<Scalars['String']>;
  created_to?: InputMaybe<Scalars['String']>;
  current_page?: InputMaybe<Scalars['Int']>;
  fromWithdrawalCount?: InputMaybe<Scalars['Int']>;
  is_update_password?: InputMaybe<Array<Scalars['Boolean']>>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  preffered_payment?: InputMaybe<Array<InputMaybe<PreferredPayment>>>;
  role?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
  status_list?: InputMaybe<Array<Scalars['Int']>>;
  team_list?: InputMaybe<Array<Scalars['Int']>>;
  toWithdrawalCount?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Array<Scalars['Int']>>;
};


/** subscription root */
export type Subscription_RootGet_Bonus_By_RoleArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Bonus_By_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bonus_Order_By>>;
  where?: InputMaybe<Bonus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Exported_Bonus_XlsxArgs = {
  args: Get_Exported_Bonus_Xlsx_Args;
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Exported_Bonus_Xlsx_AggregateArgs = {
  args: Get_Exported_Bonus_Xlsx_Args;
  distinct_on?: InputMaybe<Array<Exported_Bonus_Xlsx_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Exported_Bonus_Xlsx_Order_By>>;
  where?: InputMaybe<Exported_Bonus_Xlsx_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Initial_NotificationsArgs = {
  args?: InputMaybe<GetInitialNotificationInput>;
};


/** subscription root */
export type Subscription_RootGet_New_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_New_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcement_Order_By>>;
  where?: InputMaybe<Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Withdrawal_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Withdrawal_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHistoryArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<History_Order_By>>;
  where?: InputMaybe<History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHistory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootIncomeArgs = {
  distinct_on?: InputMaybe<Array<Income_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Income_Order_By>>;
  where?: InputMaybe<Income_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIncome_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Income_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Income_Order_By>>;
  where?: InputMaybe<Income_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIncome_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootManageAvailableArgs = {
  type?: InputMaybe<Scalars['Int']>;
};


/** subscription root */
export type Subscription_RootNgan_Luong_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ngan_Luong_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ngan_Luong_Transaction_Order_By>>;
  where?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNgan_Luong_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ngan_Luong_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ngan_Luong_Transaction_Order_By>>;
  where?: InputMaybe<Ngan_Luong_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNgan_Luong_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNinepay_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Ninepay_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ninepay_Transaction_Order_By>>;
  where?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNinepay_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ninepay_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ninepay_Transaction_Order_By>>;
  where?: InputMaybe<Ninepay_Transaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNinepay_Transaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOfficeArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Announcement_Order_By>>;
  where?: InputMaybe<Office_Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOffice_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOffice_RuleArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Office_Rule_Order_By>>;
  where?: InputMaybe<Office_Rule_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffice_Rule_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPayment_MethodArgs = {
  distinct_on?: InputMaybe<Array<Payment_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Method_Order_By>>;
  where?: InputMaybe<Payment_Method_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPayment_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Method_Order_By>>;
  where?: InputMaybe<Payment_Method_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPayment_Method_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPenalize_UserArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPenalize_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Penalize_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Penalize_User_Order_By>>;
  where?: InputMaybe<Penalize_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPenalize_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootRelationshipArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRelationship_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootReport_RelyArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_Rely_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Rely_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Rely_Order_By>>;
  where?: InputMaybe<Report_Rely_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReport_Rely_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootReview_Withdrawal_RequestArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReview_Withdrawal_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Review_Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReview_Withdrawal_Request_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSearchArgs = {
  body: SearchInput;
};


/** subscription root */
export type Subscription_RootSearch_UserArgs = {
  args: Search_User_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSearch_User_AggregateArgs = {
  args: Search_User_Args;
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeen_AnnouncementArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeen_Announcement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seen_Announcement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Seen_Announcement_Order_By>>;
  where?: InputMaybe<Seen_Announcement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeen_Announcement_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamListV2Args = {
  city_list?: InputMaybe<Array<Scalars['Int']>>;
  current_page?: InputMaybe<Scalars['Int']>;
  max_employee?: InputMaybe<Scalars['Int']>;
  min_employee?: InputMaybe<Scalars['Int']>;
  office_list?: InputMaybe<Array<Scalars['Int']>>;
  page_size?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_direction?: InputMaybe<Scalars['String']>;
};


/** subscription root */
export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUpdatedOneNq_ProfileArgs = {
  input?: InputMaybe<UpdateOneNq_ProfileSubscriptionFilterInput>;
};


/** subscription root */
export type Subscription_RootVerify_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerify_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerify_History_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootVerify_TypeArgs = {
  distinct_on?: InputMaybe<Array<Verify_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_Type_Order_By>>;
  where?: InputMaybe<Verify_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerify_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_Type_Order_By>>;
  where?: InputMaybe<Verify_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerify_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootWithdrawal_RequestArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWithdrawal_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Withdrawal_Request_Order_By>>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWithdrawal_Request_By_PkArgs = {
  id: Scalars['Int'];
};

export type SyncBreachAirtableOutput = {
  __typename?: 'syncBreachAirtableOutput';
  message?: Maybe<Scalars['String']>;
};

/** columns and relationships of "team" */
export type Team = {
  __typename?: 'team';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  /** An object relationship */
  creator?: Maybe<Profile>;
  format_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_empty?: Maybe<Scalars['Boolean']>;
  /** A computed field, executes function "get_team_leaders" */
  leaders?: Maybe<Array<Profile>>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  office?: Maybe<Office>;
  office_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  profileManagedBy?: Maybe<Profile>;
  /** An array relationship */
  relationships: Array<Relationship>;
  /** An aggregated array relationship */
  relationships_aggregate: Relationship_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "team" */
export type TeamLeadersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamRelationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Relationship_Order_By>>;
  where?: InputMaybe<Relationship_Bool_Exp>;
};

export type TeamListOutput = {
  __typename?: 'teamListOutput';
  data?: Maybe<Scalars['RenderedTeamObject']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  avg?: Maybe<Team_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
  stddev?: Maybe<Team_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Sum_Fields>;
  var_pop?: Maybe<Team_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Var_Samp_Fields>;
  variance?: Maybe<Team_Variance_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team" */
export type Team_Aggregate_Order_By = {
  avg?: InputMaybe<Team_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
  stddev?: InputMaybe<Team_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Team_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Team_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Team_Sum_Order_By>;
  var_pop?: InputMaybe<Team_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Team_Var_Samp_Order_By>;
  variance?: InputMaybe<Team_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Avg_Fields = {
  __typename?: 'team_avg_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team" */
export type Team_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Team_Bool_Exp>>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Team_Bool_Exp>>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<Profile_Bool_Exp>;
  format_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_empty?: InputMaybe<Boolean_Comparison_Exp>;
  managed_by?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  office?: InputMaybe<Office_Bool_Exp>;
  office_id?: InputMaybe<Int_Comparison_Exp>;
  profileManagedBy?: InputMaybe<Profile_Bool_Exp>;
  relationships?: InputMaybe<Relationship_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint */
  TeamManagedByKey = 'team_managed_by_key',
  /** unique or primary key constraint */
  TeamPkey = 'team_pkey'
}

/** input type for incrementing integer column in table "team" */
export type Team_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  office_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  managed_by?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  office_id?: InputMaybe<Scalars['Int']>;
  profileManagedBy?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  relationships?: InputMaybe<Relationship_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "team" */
export type Team_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  format_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  managed_by?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "team" */
export type Team_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** on conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns: Array<Team_Update_Column>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** ordering options when selecting data from "team" */
export type Team_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  creator?: InputMaybe<Profile_Order_By>;
  format_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_empty?: InputMaybe<Order_By>;
  managed_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  office?: InputMaybe<Office_Order_By>;
  office_id?: InputMaybe<Order_By>;
  profileManagedBy?: InputMaybe<Profile_Order_By>;
  relationships_aggregate?: InputMaybe<Relationship_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "team" */
export type Team_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmpty = 'is_empty',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['String']>;
  format_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_empty?: InputMaybe<Scalars['Boolean']>;
  managed_by?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Team_Stddev_Fields = {
  __typename?: 'team_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team" */
export type Team_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Stddev_Pop_Fields = {
  __typename?: 'team_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team" */
export type Team_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Stddev_Samp_Fields = {
  __typename?: 'team_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team" */
export type Team_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Sum_Fields = {
  __typename?: 'team_sum_fields';
  id?: Maybe<Scalars['Int']>;
  office_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team" */
export type Team_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FormatName = 'format_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmpty = 'is_empty',
  /** column name */
  ManagedBy = 'managed_by',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Team_Var_Pop_Fields = {
  __typename?: 'team_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team" */
export type Team_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Var_Samp_Fields = {
  __typename?: 'team_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team" */
export type Team_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Variance_Fields = {
  __typename?: 'team_variance_fields';
  id?: Maybe<Scalars['Float']>;
  office_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team" */
export type Team_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export enum TypeBonus {
  Bonus = 'bonus',
  Bonus_2 = 'bonus_2',
  Salary = 'salary'
}

export enum Type_Bonus {
  Bonus = 'bonus',
  Bonus_2 = 'bonus_2',
  Salary = 'salary'
}

export type UpdateTeamCustomOutput = {
  __typename?: 'updateTeamCustomOutput';
  data?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type UpdateTeamOutput = {
  __typename?: 'updateTeamOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type UpdateUserProfileOutput = {
  __typename?: 'updateUserProfileOutput';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateUserTeamAndOfficeUsingAirtableInput = {
  baseId?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
};

export type UpdateUserTeamAndOfficeUsingAirtableOutput = {
  __typename?: 'updateUserTeamAndOfficeUsingAirtableOutput';
  message?: Maybe<Scalars['String']>;
};

export type UserListOutput = {
  __typename?: 'userListOutput';
  data?: Maybe<Scalars['RenderedUserObject']>;
  errorMessage?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verify_history" */
export type Verify_History = {
  __typename?: 'verify_history';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  type: Verify_Type_Enum;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  /** An object relationship */
  verified_user: Profile;
  /** An object relationship */
  verifier: Profile;
  verifier_id: Scalars['String'];
  /** An object relationship */
  verify_type: Verify_Type;
};

/** aggregated selection of "verify_history" */
export type Verify_History_Aggregate = {
  __typename?: 'verify_history_aggregate';
  aggregate?: Maybe<Verify_History_Aggregate_Fields>;
  nodes: Array<Verify_History>;
};

/** aggregate fields of "verify_history" */
export type Verify_History_Aggregate_Fields = {
  __typename?: 'verify_history_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verify_History_Max_Fields>;
  min?: Maybe<Verify_History_Min_Fields>;
};


/** aggregate fields of "verify_history" */
export type Verify_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verify_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verify_history" */
export type Verify_History_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Verify_History_Max_Order_By>;
  min?: InputMaybe<Verify_History_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verify_history" */
export type Verify_History_Arr_Rel_Insert_Input = {
  data: Array<Verify_History_Insert_Input>;
  on_conflict?: InputMaybe<Verify_History_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verify_history". All fields are combined with a logical 'AND'. */
export type Verify_History_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Verify_History_Bool_Exp>>>;
  _not?: InputMaybe<Verify_History_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Verify_History_Bool_Exp>>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Verify_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  verified_user?: InputMaybe<Profile_Bool_Exp>;
  verifier?: InputMaybe<Profile_Bool_Exp>;
  verifier_id?: InputMaybe<String_Comparison_Exp>;
  verify_type?: InputMaybe<Verify_Type_Bool_Exp>;
};

/** unique or primary key constraints on table "verify_history" */
export enum Verify_History_Constraint {
  /** unique or primary key constraint */
  VerifyHistoryPkey = 'verify_history_pkey',
  /** unique or primary key constraint */
  VerifyHistoryUserIdVerifierIdKey = 'verify_history_user_id_verifier_id_key'
}

/** input type for inserting data into table "verify_history" */
export type Verify_History_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Verify_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  verified_user?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  verifier?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  verifier_id?: InputMaybe<Scalars['String']>;
  verify_type?: InputMaybe<Verify_Type_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Verify_History_Max_Fields = {
  __typename?: 'verify_history_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  verifier_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "verify_history" */
export type Verify_History_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  verifier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Verify_History_Min_Fields = {
  __typename?: 'verify_history_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  verifier_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "verify_history" */
export type Verify_History_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  verifier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "verify_history" */
export type Verify_History_Mutation_Response = {
  __typename?: 'verify_history_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verify_History>;
};

/** input type for inserting object relation for remote table "verify_history" */
export type Verify_History_Obj_Rel_Insert_Input = {
  data: Verify_History_Insert_Input;
  on_conflict?: InputMaybe<Verify_History_On_Conflict>;
};

/** on conflict condition type for table "verify_history" */
export type Verify_History_On_Conflict = {
  constraint: Verify_History_Constraint;
  update_columns: Array<Verify_History_Update_Column>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};

/** ordering options when selecting data from "verify_history" */
export type Verify_History_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  verified_user?: InputMaybe<Profile_Order_By>;
  verifier?: InputMaybe<Profile_Order_By>;
  verifier_id?: InputMaybe<Order_By>;
  verify_type?: InputMaybe<Verify_Type_Order_By>;
};

/** primary key columns input for table: "verify_history" */
export type Verify_History_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verify_history" */
export enum Verify_History_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VerifierId = 'verifier_id'
}

/** input type for updating data in table "verify_history" */
export type Verify_History_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Verify_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  verifier_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verify_history" */
export enum Verify_History_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VerifierId = 'verifier_id'
}

/** columns and relationships of "verify_type" */
export type Verify_Type = {
  __typename?: 'verify_type';
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  verify_histories: Array<Verify_History>;
  /** An aggregated array relationship */
  verify_histories_aggregate: Verify_History_Aggregate;
};


/** columns and relationships of "verify_type" */
export type Verify_TypeVerify_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};


/** columns and relationships of "verify_type" */
export type Verify_TypeVerify_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verify_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verify_History_Order_By>>;
  where?: InputMaybe<Verify_History_Bool_Exp>;
};

/** aggregated selection of "verify_type" */
export type Verify_Type_Aggregate = {
  __typename?: 'verify_type_aggregate';
  aggregate?: Maybe<Verify_Type_Aggregate_Fields>;
  nodes: Array<Verify_Type>;
};

/** aggregate fields of "verify_type" */
export type Verify_Type_Aggregate_Fields = {
  __typename?: 'verify_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verify_Type_Max_Fields>;
  min?: Maybe<Verify_Type_Min_Fields>;
};


/** aggregate fields of "verify_type" */
export type Verify_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verify_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verify_type" */
export type Verify_Type_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Verify_Type_Max_Order_By>;
  min?: InputMaybe<Verify_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verify_type" */
export type Verify_Type_Arr_Rel_Insert_Input = {
  data: Array<Verify_Type_Insert_Input>;
  on_conflict?: InputMaybe<Verify_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verify_type". All fields are combined with a logical 'AND'. */
export type Verify_Type_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Verify_Type_Bool_Exp>>>;
  _not?: InputMaybe<Verify_Type_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Verify_Type_Bool_Exp>>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  verify_histories?: InputMaybe<Verify_History_Bool_Exp>;
};

/** unique or primary key constraints on table "verify_type" */
export enum Verify_Type_Constraint {
  /** unique or primary key constraint */
  VerifyTypePkey = 'verify_type_pkey'
}

export enum Verify_Type_Enum {
  /** approved */
  Approved = 'approved',
  /** rejected */
  Rejected = 'rejected'
}

/** expression to compare columns of type verify_type_enum. All fields are combined with logical 'AND'. */
export type Verify_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Verify_Type_Enum>;
  _in?: InputMaybe<Array<Verify_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Verify_Type_Enum>;
  _nin?: InputMaybe<Array<Verify_Type_Enum>>;
};

/** input type for inserting data into table "verify_type" */
export type Verify_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  verify_histories?: InputMaybe<Verify_History_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Verify_Type_Max_Fields = {
  __typename?: 'verify_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "verify_type" */
export type Verify_Type_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Verify_Type_Min_Fields = {
  __typename?: 'verify_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "verify_type" */
export type Verify_Type_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "verify_type" */
export type Verify_Type_Mutation_Response = {
  __typename?: 'verify_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verify_Type>;
};

/** input type for inserting object relation for remote table "verify_type" */
export type Verify_Type_Obj_Rel_Insert_Input = {
  data: Verify_Type_Insert_Input;
  on_conflict?: InputMaybe<Verify_Type_On_Conflict>;
};

/** on conflict condition type for table "verify_type" */
export type Verify_Type_On_Conflict = {
  constraint: Verify_Type_Constraint;
  update_columns: Array<Verify_Type_Update_Column>;
  where?: InputMaybe<Verify_Type_Bool_Exp>;
};

/** ordering options when selecting data from "verify_type" */
export type Verify_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  verify_histories_aggregate?: InputMaybe<Verify_History_Aggregate_Order_By>;
};

/** primary key columns input for table: "verify_type" */
export type Verify_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "verify_type" */
export enum Verify_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "verify_type" */
export type Verify_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verify_type" */
export enum Verify_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/**
 * represent the bonus withdrawal request, when user make a withdrawal request, everything will be recorded here
 *
 *
 * columns and relationships of "withdrawal_request"
 *
 */
export type Withdrawal_Request = {
  __typename?: 'withdrawal_request';
  /** An object relationship */
  bonus: Bonus;
  bonus_id: Scalars['Int'];
  bonus_type: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profile;
  profile_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "withdrawal_request" */
export type Withdrawal_Request_Aggregate = {
  __typename?: 'withdrawal_request_aggregate';
  aggregate?: Maybe<Withdrawal_Request_Aggregate_Fields>;
  nodes: Array<Withdrawal_Request>;
};

/** aggregate fields of "withdrawal_request" */
export type Withdrawal_Request_Aggregate_Fields = {
  __typename?: 'withdrawal_request_aggregate_fields';
  avg?: Maybe<Withdrawal_Request_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Withdrawal_Request_Max_Fields>;
  min?: Maybe<Withdrawal_Request_Min_Fields>;
  stddev?: Maybe<Withdrawal_Request_Stddev_Fields>;
  stddev_pop?: Maybe<Withdrawal_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Withdrawal_Request_Stddev_Samp_Fields>;
  sum?: Maybe<Withdrawal_Request_Sum_Fields>;
  var_pop?: Maybe<Withdrawal_Request_Var_Pop_Fields>;
  var_samp?: Maybe<Withdrawal_Request_Var_Samp_Fields>;
  variance?: Maybe<Withdrawal_Request_Variance_Fields>;
};


/** aggregate fields of "withdrawal_request" */
export type Withdrawal_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Withdrawal_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "withdrawal_request" */
export type Withdrawal_Request_Aggregate_Order_By = {
  avg?: InputMaybe<Withdrawal_Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Withdrawal_Request_Max_Order_By>;
  min?: InputMaybe<Withdrawal_Request_Min_Order_By>;
  stddev?: InputMaybe<Withdrawal_Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Withdrawal_Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Withdrawal_Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Withdrawal_Request_Sum_Order_By>;
  var_pop?: InputMaybe<Withdrawal_Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Withdrawal_Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Withdrawal_Request_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "withdrawal_request" */
export type Withdrawal_Request_Arr_Rel_Insert_Input = {
  data: Array<Withdrawal_Request_Insert_Input>;
  on_conflict?: InputMaybe<Withdrawal_Request_On_Conflict>;
};

/** aggregate avg on columns */
export type Withdrawal_Request_Avg_Fields = {
  __typename?: 'withdrawal_request_avg_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Avg_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "withdrawal_request". All fields are combined with a logical 'AND'. */
export type Withdrawal_Request_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Withdrawal_Request_Bool_Exp>>>;
  _not?: InputMaybe<Withdrawal_Request_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Withdrawal_Request_Bool_Exp>>>;
  bonus?: InputMaybe<Bonus_Bool_Exp>;
  bonus_id?: InputMaybe<Int_Comparison_Exp>;
  bonus_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "withdrawal_request" */
export enum Withdrawal_Request_Constraint {
  /** unique or primary key constraint */
  WithdrawlRequestPkey = 'withdrawl_request_pkey'
}

/** input type for incrementing integer column in table "withdrawal_request" */
export type Withdrawal_Request_Inc_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "withdrawal_request" */
export type Withdrawal_Request_Insert_Input = {
  bonus?: InputMaybe<Bonus_Obj_Rel_Insert_Input>;
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Withdrawal_Request_Max_Fields = {
  __typename?: 'withdrawal_request_max_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  bonus_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Max_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Withdrawal_Request_Min_Fields = {
  __typename?: 'withdrawal_request_min_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  bonus_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Min_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "withdrawal_request" */
export type Withdrawal_Request_Mutation_Response = {
  __typename?: 'withdrawal_request_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Withdrawal_Request>;
};

/** input type for inserting object relation for remote table "withdrawal_request" */
export type Withdrawal_Request_Obj_Rel_Insert_Input = {
  data: Withdrawal_Request_Insert_Input;
  on_conflict?: InputMaybe<Withdrawal_Request_On_Conflict>;
};

/** on conflict condition type for table "withdrawal_request" */
export type Withdrawal_Request_On_Conflict = {
  constraint: Withdrawal_Request_Constraint;
  update_columns: Array<Withdrawal_Request_Update_Column>;
  where?: InputMaybe<Withdrawal_Request_Bool_Exp>;
};

/** ordering options when selecting data from "withdrawal_request" */
export type Withdrawal_Request_Order_By = {
  bonus?: InputMaybe<Bonus_Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  bonus_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "withdrawal_request" */
export type Withdrawal_Request_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "withdrawal_request" */
export enum Withdrawal_Request_Select_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "withdrawal_request" */
export type Withdrawal_Request_Set_Input = {
  bonus_id?: InputMaybe<Scalars['Int']>;
  bonus_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Withdrawal_Request_Stddev_Fields = {
  __typename?: 'withdrawal_request_stddev_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Stddev_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Withdrawal_Request_Stddev_Pop_Fields = {
  __typename?: 'withdrawal_request_stddev_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Stddev_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Withdrawal_Request_Stddev_Samp_Fields = {
  __typename?: 'withdrawal_request_stddev_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Stddev_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Withdrawal_Request_Sum_Fields = {
  __typename?: 'withdrawal_request_sum_fields';
  bonus_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Sum_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "withdrawal_request" */
export enum Withdrawal_Request_Update_Column {
  /** column name */
  BonusId = 'bonus_id',
  /** column name */
  BonusType = 'bonus_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Withdrawal_Request_Var_Pop_Fields = {
  __typename?: 'withdrawal_request_var_pop_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Var_Pop_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Withdrawal_Request_Var_Samp_Fields = {
  __typename?: 'withdrawal_request_var_samp_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Var_Samp_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Withdrawal_Request_Variance_Fields = {
  __typename?: 'withdrawal_request_variance_fields';
  bonus_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "withdrawal_request" */
export type Withdrawal_Request_Variance_Order_By = {
  bonus_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type ProfileQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ProfileQuery = { __typename?: 'query_root', profile: Array<{ __typename?: 'profile', id: string, fullname?: string | null }> };

export type OfficeQueryVariables = Exact<{
  where?: InputMaybe<Office_Bool_Exp>;
}>;


export type OfficeQuery = { __typename?: 'query_root', office: Array<{ __typename?: 'office', code?: string | null, name: string }> };

export type TeamQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamQuery = { __typename?: 'query_root', team: Array<{ __typename?: 'team', id: number, name?: string | null, office_id?: number | null, is_empty?: boolean | null }> };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', bonus: Array<{ __typename?: 'bonus', id: number }> };

export type CreateTeamMutationVariables = Exact<{
  object: Team_Insert_Input;
}>;


export type CreateTeamMutation = { __typename?: 'mutation_root', insert_team_one?: { __typename?: 'team', id: number } | null };


export const ProfileDocument = gql`
    query Profile($limit: Int) {
  profile(limit: $limit) {
    id
    fullname
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const OfficeDocument = gql`
    query Office($where: office_bool_exp) {
  office(where: $where) {
    code
    name
  }
}
    `;

/**
 * __useOfficeQuery__
 *
 * To run a query within a React component, call `useOfficeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOfficeQuery(baseOptions?: Apollo.QueryHookOptions<OfficeQuery, OfficeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficeQuery, OfficeQueryVariables>(OfficeDocument, options);
      }
export function useOfficeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeQuery, OfficeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficeQuery, OfficeQueryVariables>(OfficeDocument, options);
        }
export type OfficeQueryHookResult = ReturnType<typeof useOfficeQuery>;
export type OfficeLazyQueryHookResult = ReturnType<typeof useOfficeLazyQuery>;
export type OfficeQueryResult = Apollo.QueryResult<OfficeQuery, OfficeQueryVariables>;
export const TeamDocument = gql`
    query Team {
  team {
    id
    name
    office_id
    is_empty
  }
}
    `;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: Apollo.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, options);
      }
export function useTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, options);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = Apollo.QueryResult<TeamQuery, TeamQueryVariables>;
export const MyQueryDocument = gql`
    query MyQuery {
  bonus {
    id
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($object: team_insert_input!) {
  insert_team_one(object: $object) {
    id
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;