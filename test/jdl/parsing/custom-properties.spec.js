/**
 * Copyright 2013-2021 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { expect } = require('chai');
const { createEmptyCustomPropertiesObject, createCustomPropertiesObject } = require('../../../jdl/parsing/custom-properties');

describe('CustomProperties', () => {
  describe('createCustomPropertiesObject', () => {
    context('when not passing a configuration object', () => {
      it('should return an empty custom properties object', () => {
        expect(createCustomPropertiesObject().noCustomProperties).to.be.true;
      });
    });
    context('when passing an empty configuration object', () => {
      it('should return an empty custom properties object', () => {
        expect(createCustomPropertiesObject({}).noCustomProperties).to.be.true;
      });
    });
    context('for applications', () => {
      context('when adding validation rules', () => {
        it('should take them into account', () => {
          // TODO
        });
      });
      context('when updating an existing option', () => {
        context('to add a new value', () => {
          it('should take it into account', () => {
            // TODO
          });
        });
      });
      context('when creating a new option', () => {
        it('should take it into account', () => {
          // TODO
        });
      });
    });
  });
  describe('createEmptyCustomPropertiesObject', () => {
    // TODO
  });
});
