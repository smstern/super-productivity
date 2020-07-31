// TODO sort by direction
export enum IPC {
  SHUTDOWN_NOW = 'SHUTDOWN_NOW',

  JIRA_CB_EVENT = 'JIRA_RESPONSE',
  JIRA_MAKE_REQUEST_EVENT = 'JIRA',
  JIRA_SETUP_IMG_HEADERS = 'JIRA_IMAGE_HEADERS',
  REGISTER_GLOBAL_SHORTCUTS_EVENT = 'REGISTER_GLOBAL_SHORTCUTS',
  IDLE_TIME = 'IDLE_TIME',
  RESUME = 'RESUME',
  SUSPEND = 'SUSPEND',

  SHOW_OR_FOCUS = 'SHOW_OR_FOCUS',
  LOCK_SCREEN = 'LOCK_SCREEN',

  APP_READY = 'APP_READY',
  ERROR = 'ELECTRON_ERROR',
  CURRENT_TASK_UPDATED = 'CHANGED_CURRENT_TASK',
  TASK_MARK_AS_DONE = 'TASK_MARK_AS_DONE',
  TASK_START = 'TASK_START',
  TASK_TOGGLE_START = 'TASK_TOGGLE_START',
  ADD_TASK = 'ADD_TASK',
  ADD_NOTE = 'ADD_NOTE',
  TASK_PAUSE = 'TASK_PAUSE',

  TRIGGER_GOOGLE_AUTH = 'TRIGGER_GOOGLE_AUTH',
  GOOGLE_AUTH_TOKEN = 'GOOGLE_AUTH_TOKEN',
  GOOGLE_AUTH_TOKEN_ERROR = 'GOOGLE_AUTH_TOKEN_ERROR',

  TRANSFER_SETTINGS_REQUESTED = 'TRANSFER_SETTINGS_REQUESTED',
  TRANSFER_SETTINGS_TO_ELECTRON = 'TRANSFER_SETTINGS_TO_ELECTRON',

  GIT_LOG = 'GIT_LOG',
  GIT_LOG_RESPONSE = 'GIT_LOG_RESPONSE',
  EXEC = 'EXEC',

  BACKUP = 'BACKUP_APP_DATA',
  SET_PROGRESS_BAR = 'SET_PROGRESS_BAR',

  NOTIFY_ON_CLOSE = 'NOTIFY_ON_CLOSE',
  REGISTER_BEFORE_CLOSE = 'REGISTER_BEFORE_CLOSE',
  UNREGISTER_BEFORE_CLOSE = 'UNREGISTER_BEFORE_CLOSE',
  BEFORE_CLOSE_DONE = 'BEFORE_CLOSE_DONE',

  maybe_UPDATE_CURRENT_TASK = 'UPDATE_CURRENT_TASK',
  maybe_IS_IDLE = 'IS_IDLE',
  maybe_IS_BUSY = 'IS_BUSY',
  POMODORO_UPDATE = 'POMODORO_UPDATE',
  maybe_PROJECT_CHANGED = 'PROJECT_CHANGED',
  maybe_COMPLETE_DATA_RELOAD = 'COMPLETE_DATA_RELOAD',

  // stuff for db
  DB_SAVE = 'DB_SAVE',
  DB_LOAD = 'DB_LOAD',
  DB_REMOVE = 'DB_REMOVE',
  DB_CLEAR = 'DB_CLEAR',

  DB_SAVE_TRIGGER = 'DB_SAVE_TRIGGER',
  DB_SAVE_SUCCESS = 'DB_SAVE_SUCCESS',
  DB_SAVE_ERROR = 'DB_SAVE_ERROR',

  DB_LOAD_TRIGGER = 'DB_LOAD_TRIGGER',
  DB_LOAD_SUCCESS = 'DB_LOAD_SUCCESS',
  DB_LOAD_ERROR = 'DB_LOAD_ERROR',

  DB_REMOVE_TRIGGER = 'DB_REMOVE_TRIGGER',
  DB_REMOVE_SUCCESS = 'DB_REMOVE_SUCCESS',
  DB_REMOVE_ERROR = 'DB_REMOVE_ERROR',

  DB_CLEAR_DB_TRIGGER = 'DB_CLEAR_DB_TRIGGER',
  DB_CLEAR_DB_SUCCESS = 'DB_CLEAR_DB_SUCCESS',
  DB_CLEAR_DB_ERROR = 'DB_CLEAR_DB_ERROR',
}

