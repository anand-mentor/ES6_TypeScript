import "babel-polyfill";


import { testArrowFunctions, testWithoutArrowFunctions } from './components/arrow_functions';


import { testConstants } from './components/constants.js';


import { testScoping } from './components/scoping.js';

import { testEnhancedObjectProperties, testCopyProperties } from './components/enhanced_object_properties.js';

import { testDestructuringAssignment } from './components/destructuring_assignment.js';
import { testExtendedParameters} from './components/extended_parameter_handling.js';
import { testTemplateLiterals } from './components/template_literals.js';
import testAnimal from './components/animal.js';
import { testPromises, testPromises_2, testPromises_3, testPromises_4 } from './components/promises.js';
import { testOrganization } from './components/organization.js';


//testArrowFunctions();
//testWithoutArrowFunctions();
//testTemplateLiterals();
//testOrganization();
testPromises_4();