import React, { useEffect, useState } from "react";
import { Button, Grid, Header, Image } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { Cropper } from 'react-cropper';
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import PhotoWidgetCropper from "./PhotoWidgetCropper";

export default function PhotoUploadWidget() {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blog => console.log(blog))
        }
    }
    
    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])


    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 1 - Add Photo' />
                <PhotoWidgetDropzone setFiles={setFiles}/>
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 2 - Resize Photo' />
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview}/>
                )}
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 3 - Preview & Upload' />
                {files && files.length > 0 &&
                <>
                <div className="img-preview" style={{minHeight: 200, overflow: 'hidden'}} />                
                <Button.Group widths={2}>
                    <Button onClick={onCrop} positive icon='check' />
                    <Button onClick={() => setFiles([])} icon='close' />
                </Button.Group>
                </>}
                
            </Grid.Column>
        </Grid>
    )
}