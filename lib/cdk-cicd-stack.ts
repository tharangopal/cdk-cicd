import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   
    // The code that defines your stack goes here
    const idme_pipeline = new CodePipeline(this, 'codePipeLine', {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('tharangopal/cdk-cicd', 'main'),
        commands: [
          'npm ci', 
          'npm run build',
          'npx cdk synth'
        ]
      })
    });
  }
}
