#!/bin/bash

# change this to the directory you want to move the files from
directory="/Users/allen/Desktop/pokerclubweb/web/media/profile_pictures"

# go through each folder in the directory
for folder in "$directory"/*; do
  if [ -d "$folder" ]; then
    # go into the folder
    cd "$folder"
    # move all files and subdirectories to the parent directory
    mv -n ./* ..
    # go back to the parent directory
    cd ..
  fi
done
