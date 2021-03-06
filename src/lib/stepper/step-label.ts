/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directive} from '@angular/core';
import {CdkStepLabel} from '@angular/cdk/stepper';

@Directive({
  selector: '[matStepLabel]',
})
export class MatStepLabel extends CdkStepLabel {}

// TODO(devversion): workaround for https://github.com/angular/material2/issues/12760
(MatStepLabel as any)['ctorParameters'] = () => (CdkStepLabel as any)['ctorParameters'];
