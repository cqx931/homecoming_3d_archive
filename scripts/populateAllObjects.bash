#!/bin/bash

# Define paths
SOURCE_DIR="src/glb"         # Directory containing the files
TEMPLATE_DIR="project_template"  # Your template file
DEST_DIR="src/objects"             # Destination folder

# Ensure destination directory exists
mkdir -p "$DEST_DIR"
echo "Populate All Objects"

c=0
# Loop over files in the directory
for file in "$SOURCE_DIR"/*; do
    if [[ -f "$file" ]]; then  # Ensure it's a file
        filename=$(basename -- "$file")
        name="${filename%.*}"  # Extract filename without extension
        new_file="$DEST_DIR/$name/index.md"  # Destination file
        n = c
        # Copy the template file
        #cp -r "$TEMPLATE_DIR" "$DEST_DIR/$name"

        # Replace occurrences of NAME with the actual filename
        sed -i '' "s/NAME/$name/g" "$new_file"
        sed -i '' "s/000/$c/g" "$new_file"

        echo "Processed: $new_file"
        c=$((c+1));
    fi
done
