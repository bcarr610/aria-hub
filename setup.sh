echo "Setting Up ARIA Hub"
cd $HOME

echo "Updating..."
sudo apt update

echo "Installing Git..."
sudo apt-get install git

echo "Installing NodeJS..."
sudo apt install -y nodejs
sudo apt install npm -y

echo "Setting up, please wait..."
mkdir aria && cd aria

git clone https://github.com/bcarr610/aria-hub.git
cd aria-hub
git checkout master && git pull

npm i

npm run build

# TODO Setup cronjob to start on boot
