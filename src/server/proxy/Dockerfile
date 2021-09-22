FROM envoyproxy/envoy:v1.18-latest
COPY ./src/server/proxy/envoy.yaml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml
EXPOSE 9001
