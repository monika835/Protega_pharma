import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const client = new S3Client({ region: 'us-west-2' });
const command = new GetObjectCommand({
  Bucket: 'copayroxybond-data',
  Key: 'Copay Card Downloadable v11 wPatient ID.pdf'
});

export default async function handler(req, res) {
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  res.status(200).json({ url })
}
