#!/bin/bash

#if( !(killall -KILL node)) 
fuser -n tcp -k 3000
#killall -KILL node || { echo "command failed"; }
exit 0
