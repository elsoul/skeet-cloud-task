/**
 * Creates and schedules an HTTP task to a specified endpoint.
 *
 * @param {string} project - The project ID.
 * @param {string} location - The location of the task.
 * @param {string} queue - The name of the task queue.
 * @param {string} endpoint - The endpoint URL for the task.
 * @param {Record<string, any>} body - The body of the HTTP request.
 * @param {number} [inSeconds] - The schedule time for the task in seconds from now.
 * @returns {Promise<boolean>} - Indicates success or failure of task creation.
 * @throws {Error} - Throws an error if there is an issue creating the task.
 *
 * @example
 * ```
 * const project = 'your-project-id'
 * const location = 'your-location'
 * const queue = 'your-queue'
 * const endpoint = 'https://your.endpoint.url'
 * const body = { key: 'value' }
 * const inSeconds = 60 // 1 minute from now
 *
 * const result await = createTask(project, location, queue, endpoint, body, inSeconds)
 * console.log(result)
 * ```
 */
export declare function createTask(project: string, location: string, queue: string, endpoint: string, body: Record<string, any>, inSeconds?: number): Promise<boolean>;
