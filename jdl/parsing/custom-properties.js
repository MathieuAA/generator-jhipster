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

module.exports = {
  createCustomPropertiesObject,
  createEmptyCustomPropertiesObject,
};

/**
 * Creates custom properties to be taken into account when parsing and importing a JDL content.
 * One can also set the noCustomProperties attribute, meaning there isn't any new custom property (instead of no
 * value at all).
 *
 * Here is the custom properties interface:
 * ```
 {
    noCustomProperties: Boolean,
    applications: {
        options: {
            <EXISTING_OPTION>: { // such as baseName, etc.
                additionalValues: String[]
            },
            <NEW_OPTION>: {
                type: String, // either string, boolean, integer or list
                possibleValues?: String[]
                defaultValue?: String
            }
        }
    },
    entities: {
        fields: {
            types: {
                <EXISTING_FIELD_TYPE_NAME>: { // such as String, etc.
                    validations: {
                       <VALIDATION_NAME>: {
                            type: String, // either string, boolean, integer or list
                        }
                    }
                },
                <NEW_FIELD_TYPE_NAME>: {
                    validations: {
                        <VALIDATION_NAME>: {
                            type: String, // either string, boolean, integer or list
                        }
                    }
                }
            }
        }
    },
    options: {
        <EXISTING_OPTION>: {
            additionalValues: String[]
        },
        <NEW_OPTION>: {
            type: String // either 'unary' or 'binary'
            possibleValues?: String[]
        }
    }
}
 * ```
 * @param {Object} configurationObject - a configuration object, like in the example.
 * @return {Object} a new custom properties object.
 */
function createCustomPropertiesObject(configurationObject = {}) {
  return {
    // ...configurationObject,
    noCustomProperties: Object.keys(configurationObject).length === 0 || configurationObject.noCustomProperties,
    isCustomApplicationOption: optionName => !!configurationObject.applications.options[optionName],
    isCustomApplicationOptionValue: (optionName, optionValue) => {
      const applicationOption = configurationObject.applications.options[optionName];

      return applicationOption.additionalValues
        ? !!applicationOption.additionalValues[optionValue]
        : !!applicationOption.possibleValues[optionValue];
    },
    doesTheFieldTypeExist: jdlFieldType => !!configurationObject.entities.fields.types[jdlFieldType],
    doesTheValidationExist: (jdlFieldType, jdlValidationName) => {
      return (
        configurationObject.entities.fields.types[jdlFieldType] &&
        !!configurationObject.entities.fields.types[jdlFieldType].validations[jdlValidationName]
      );
    },
    doesOptionExist: jdlOption => !!configurationObject.options[jdlOption.name],
    doesValueExistForOption: jdlOption => !!configurationObject.options[jdlOption.name][jdlOption.value],
  };
}

function createEmptyCustomPropertiesObject() {
  return {
    noCustomProperties: true,
    isCustomApplicationOption: () => false,
    isCustomApplicationOptionValue: () => false,
    doesTheFieldTypeExist: () => false,
    doesTheValidationExist: () => false,
    doesOptionExist: () => false,
    doesValueExistForOption: () => false,
  };
}
