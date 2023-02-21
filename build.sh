#!/bin/bash
build_dir='zip'

[[ -d $build_dir ]] || mkdir $build_dir
zip -r -FS ./$build_dir/unfeed-vk.zip * --exclude '*.git*' '*.sh' '*.md'