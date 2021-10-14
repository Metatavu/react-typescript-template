/* tslint:disable */
/* eslint-disable */
/**
 * Template API-spec
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Example,
    ExampleFromJSON,
    ExampleToJSON,
} from '../models';

export interface CreateExampleRequest {
    example: Example;
}

export interface DeleteExampleRequest {
    exampleId: string;
}

export interface FindExampleRequest {
    exampleId: string;
}

export interface ListExamplesRequest {
    firstResult?: number;
    maxResults?: number;
}

export interface UpdateExampleRequest {
    example: Example;
    exampleId: string;
}

/**
 * 
 */
export class ExamplesApi extends runtime.BaseAPI {

    /**
     * Creates a new example.
     * Create an example.
     */
    async createExampleRaw(requestParameters: CreateExampleRequest): Promise<runtime.ApiResponse<Example>> {
        if (requestParameters.example === null || requestParameters.example === undefined) {
            throw new runtime.RequiredError('example','Required parameter requestParameters.example was null or undefined when calling createExample.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/examples`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExampleToJSON(requestParameters.example),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExampleFromJSON(jsonValue));
    }

    /**
     * Creates a new example.
     * Create an example.
     */
    async createExample(requestParameters: CreateExampleRequest): Promise<Example> {
        const response = await this.createExampleRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a example.
     * Delete a example.
     */
    async deleteExampleRaw(requestParameters: DeleteExampleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.exampleId === null || requestParameters.exampleId === undefined) {
            throw new runtime.RequiredError('exampleId','Required parameter requestParameters.exampleId was null or undefined when calling deleteExample.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/examples/{exampleId}`.replace(`{${"exampleId"}}`, encodeURIComponent(String(requestParameters.exampleId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a example.
     * Delete a example.
     */
    async deleteExample(requestParameters: DeleteExampleRequest): Promise<void> {
        await this.deleteExampleRaw(requestParameters);
    }

    /**
     * Finds a example by id.
     * Find a example.
     */
    async findExampleRaw(requestParameters: FindExampleRequest): Promise<runtime.ApiResponse<Example>> {
        if (requestParameters.exampleId === null || requestParameters.exampleId === undefined) {
            throw new runtime.RequiredError('exampleId','Required parameter requestParameters.exampleId was null or undefined when calling findExample.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/examples/{exampleId}`.replace(`{${"exampleId"}}`, encodeURIComponent(String(requestParameters.exampleId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExampleFromJSON(jsonValue));
    }

    /**
     * Finds a example by id.
     * Find a example.
     */
    async findExample(requestParameters: FindExampleRequest): Promise<Example> {
        const response = await this.findExampleRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists examples.
     * List examples.
     */
    async listExamplesRaw(requestParameters: ListExamplesRequest): Promise<runtime.ApiResponse<Array<Example>>> {
        const queryParameters: any = {};

        if (requestParameters.firstResult !== undefined) {
            queryParameters['firstResult'] = requestParameters.firstResult;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/examples`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExampleFromJSON));
    }

    /**
     * Lists examples.
     * List examples.
     */
    async listExamples(requestParameters: ListExamplesRequest): Promise<Array<Example>> {
        const response = await this.listExamplesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a example
     * Update a example.
     */
    async updateExampleRaw(requestParameters: UpdateExampleRequest): Promise<runtime.ApiResponse<Example>> {
        if (requestParameters.example === null || requestParameters.example === undefined) {
            throw new runtime.RequiredError('example','Required parameter requestParameters.example was null or undefined when calling updateExample.');
        }

        if (requestParameters.exampleId === null || requestParameters.exampleId === undefined) {
            throw new runtime.RequiredError('exampleId','Required parameter requestParameters.exampleId was null or undefined when calling updateExample.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/examples/{exampleId}`.replace(`{${"exampleId"}}`, encodeURIComponent(String(requestParameters.exampleId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExampleToJSON(requestParameters.example),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExampleFromJSON(jsonValue));
    }

    /**
     * Updates a example
     * Update a example.
     */
    async updateExample(requestParameters: UpdateExampleRequest): Promise<Example> {
        const response = await this.updateExampleRaw(requestParameters);
        return await response.value();
    }

}
