import shutil, os


def updateFrontEnd():
    # send build folder to front end
    copyFolders("./build", "../front_end/src/chain-info")
    return None


def copyFolders(src, target):
    if os.path.exists(target):
        shutil.rmtree(target)
    shutil.copytree(src, target)


def main():
    updateFrontEnd()
