import { Handler,  } from 'aws-lambda';
import { App, Stack, Tags } from 'aws-cdk-lib';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { IpAddresses, Vpc } from 'aws-cdk-lib/aws-ec2';

const test = () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    const vpc = new Vpc(stack, 'Vpc', {
        ipAddresses: IpAddresses.cidr('10.0.0.0/16'),
    });
    new ApplicationLoadBalancer(stack, 'test-alb', {
        vpc,
    });

    Tags.of(stack).add('TestTag', 'Value');

    const assembly = app.synth();
    const template = assembly.getStackArtifact(stack.artifactId).template;

    console.log(JSON.stringify(template, null, 2));
    return template;
};

test();