#!/bin/bash

gh octodemo test create-demo --demo-org "octodemo-test" --demo-option "backend=nodejs" --demo-option "needs_azure_deployment=No" "$@"
