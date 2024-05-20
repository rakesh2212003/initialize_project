import { PutObjectCommand, GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Client, { send } from './s3Client';

export const uploadObject = async (bucketName, key, body) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: key,
            Body: body,
        };
        const command = new PutObjectCommand(params);
        const response = await send(command);
        console.log('Success', response);
    } catch (err) {
        console.log('Error', err);
    }
}

export const downloadObject = async (bucketName, key) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: key,
        };
        const command = new GetObjectCommand(params);
        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        console.log('Download URL', url);
    } catch (err) {
        console.log('Error', err);
    }
}

export const listObjects = async (bucketName) => {
    try {
        const params = {
            Bucket: bucketName,
        };
        const command = new ListObjectsCommand(params);
        const response = await send(command);
        console.log('Success', response.Contents);
    } catch (err) {
        console.log('Error', err);
    }
}