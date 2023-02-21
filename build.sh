#/bin/bash
[[ -d zip ]] || mkdir zip
zip -r -FS ./zip/unfeed-vk.zip * --exclude '*.git*' '*.sh' '*.md'