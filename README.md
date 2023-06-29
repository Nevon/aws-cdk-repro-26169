# aws-cdk repro for issue 26169

This repository demonstrates a difference in template synthesis when running aws-cdk-lib directly from source compared to when bundling it using esbuild. This behavior changed between the versions 2.80.0 and 2.81.0.

To see the difference:

```shell
$ yarn
$ yarn start:source > no-bundling.json
$ yarn start:bundled > bundling.json
$ diff -y no-bundling.json bundling.json
```

You will see that in the version using bundling, there are no tags on the resources, whereas there are on the version running from source.