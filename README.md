# AxB valid word grid finder

This code finds valid grids of words were all words both across (left to right) and down are valid English words.

The code uses a pre-baked [list of valid English words](https://www.npmjs.com/package/an-array-of-english-words). An example of a valid grid would be:



## Install

First, download and install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads). If you're on Windows, I recommend [installing Choco](https://chocolatey.org/docs/installation) and then installation of these packages becomes easy (from an Administrator command prompt):

```shell
choco install nodejs git
```

Then clone this code into a folder from the command line with:

```shell
git clone https://github.com/markhoney/AxB.git
```

Next enter the new folder with this code and install all dependencies:

```shell
cd AxB
npm install
```

## Run

To run this code, simply run the following from the code folder (AxB):

```shell
npm start
```

## Output

At the moment, results are printed to the console. A valid 5x5 grid would look like:

```
a a h e d
a b a c a
h a u l t
e c l a t
d i t t o
```

And a 7x3 grid (which inspired this project) would look like:

```
a a r r g h h
a c h e n i a
s h o g u n s
```
