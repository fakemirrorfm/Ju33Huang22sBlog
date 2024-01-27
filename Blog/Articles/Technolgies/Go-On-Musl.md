---
title: 关于 Golang 二进制文件在 musl 作为 主要 libc 的 Linux 发行版的适配记录
author: Ju33Huang22
date: 2024-01-28
categories:
 - 技术文
tags:
 - Golang
 - Go
 - musl
 - libc
 - Linux
---

# 前言

首先我自己没有对 Golang 很深了解，一切都在学习中，不过还好目前为止学习得还算顺利，毕竟写的都是人话。

在本文章中我不会去锐评有关 musl 的东西，毕竟我不会C，没啥资格聊这个。

# 正文

这次的适配记录的起因是因为我的 [复活版TPClash](https://github.com/QingNetwork/tpclash/) 项目群中有用户反馈 Alpine Linux 无法正常运行，后面想了想 Alpine Linux 是使用 [musl](https://zh.wikipedia.org/wiki/Musl) 作为 [C标准函式库(libc)](https://zh.wikipedia.org/wiki/C%E6%A8%99%E6%BA%96%E5%87%BD%E5%BC%8F%E5%BA%AB) 的，这么一想起不来也正常了

像 Alpine Linux 一样使用 musl 的发行版其实很多，我自认为用的人比较多的发行版例如 OpenWrt 和 Gentoo，所以**能**解决这个问题的话还是有必要的。

## CGO 是什么？

估计很多刚学 Go 的人和我一样很懵，虽然没啥人简短总结，不过算是找到了个比较简短的解释。

> Go 作为当下最火的开发语言之一，它的优势不必多说。Go 对于高并发的支持，使得它可以很方便的作为独立模块嵌入业务系统。有鉴于我司大量的 C/C++存量代码，如何 将 Go 和 C/C++进行打通就尤为重要。**Golang 自带的 CGO 可以支持与 C 语言接口的互通。**本文首先介绍了 cgo 的常见用法，然后根据底层[代码分析](https://cloud.tencent.com/product/tcap?from_column=20065&from=20065)其实现机制，最后在特定场景下进行 cgo 实践。
>
> 来源：[Go与C的桥梁：CGO入门剖析与实践](https://cloud.tencent.com/developer/article/1786332)

## 我的项目用到了C

我自己还没学完 Golang，所以我让 GPT-3.5 给了个回答。

> 在使用 musl 作为 C 标准库的 Linux 发行版中，可能会出现与 glibc 不同的问题，尤其是在涉及到 C 语言代码的 Go 项目中。以下是一些建议和解决方案：
>
> 1. **交叉编译：** 一个通用的方法是在开发环境中使用 glibc，但在部署目标系统上使用 musl。这可以通过交叉编译来实现。在构建 Go 项目时，可以通过设置环境变量 `CC` 来指定使用的 C 编译器。例如：
>
>     ```bash
>     CC=musl-gcc go build
>     ```
>
>     这将使用 musl-gcc 编译器来构建你的 Go 项目，确保 musl 库被链接到二进制文件中。
>
> 2. **静态链接：** 如果交叉编译并不适用，考虑将 C 代码静态链接到 Go 二进制文件中。这样，你可以在目标系统上运行 Go 二进制文件而不必依赖目标系统上的 C 库。可以通过设置 `CGO_ENABLED` 环境变量为 `0` 来禁用 CGO，并使用 `-ldflags` 标志将 C 代码静态链接到 Go 二进制文件中。例如：
>
>     ```bash
>     CGO_ENABLED=0 go build -ldflags="-linkmode external -extldflags -static"
>     ```
>
>     这会禁用 CGO 并在构建时将 C 代码静态链接到 Go 二进制文件中。
>
> 3. **使用正确的编译器和工具链：** 确保在目标系统上使用正确的编译器和工具链。如果目标系统使用 musl，确保在目标系统上安装了 musl 工具链和库。
>
> 4. **检查依赖库的兼容性：** 如果你的项目依赖于其他库，确保这些库与 musl 兼容。有些库可能依赖于特定于 glibc 的特性，因此在 musl 系统上可能会遇到问题。
>
> 5. **查看错误日志：** 如果你遇到问题，查看错误日志并检查特定于 musl 的问题。这可能包括一些系统调用的不同行为或缺失的功能。
>
> 请注意，这些建议可能需要根据你的具体情况进行调整。在处理与 musl 兼容性问题时，了解 musl 的特性和与 glibc 的差异是很重要的。
>
> —— ChatGPT 3.5

## 我的项目没有用到C

如果你的项目中没有用到C的话，其实是可以关掉的，关掉也是最简单的解决方法。

很简单，在编译的时候加个环境变量关掉 CGO 就好了。

### 如果你是在普通的终端中

写到底层环境变量中（如 `/etc/enviroment` 或 `~/.bashrc`）或每次新建终端时输入：

```bash
export CGO_ENABLED=0
```

### 如果你是在 Github Actions 中

在 `env` 中加入：

```yaml
env:
     CGO_ENABLED: 0
```

# 结尾

总的来说问题就是这样解决的了，有啥不对欢迎大佬在评论区补充。