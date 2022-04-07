import yaml, json


def sendConfig():
    with open("../brownie-config.yaml", "r") as bconfig:
        config_dict = yaml.load(bconfig, Loader=yaml.FullLoader)
        print("file opened")
        with open("../../front_end/src/brownie-config.json", "w") as bconfigjs:
            json.dump(config_dict, bconfigjs)


def main():
    sendConfig()
