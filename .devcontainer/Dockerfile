FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
    build-essential \
    cmake \
    autoconf \
    libtool \
    pkg-config \
    libssl-dev \
    libprotobuf-dev \
    protobuf-compiler \
    gcc \
    gdb \
    g++ \
    git \
    python3 \
    curl \
    libcurl4-openssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
