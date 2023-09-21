# Are you an art lover?
![image](https://github.com/KaizenGirl1111/guess_whose_painting/assets/73153808/25887449-bd3b-4c9f-8120-f7dc1b2428bf)

## Why make a painter detector project?

So many paintings have gone to dust and become a lost relic. If Vincent Van Gogh's paintings hadn't become a hit posthumously, the world would have never realised his maverick! It is essential we detect such lost art so that artists get the credit they deserve.

## How to open this project-
1. Download the ipynb files and run on your anaconda/Visual Studio Code.
2. Deploy the project on google colab and mount the dataset https://www.kaggle.com/datasets/delayedkarma/impressionist-classifier-data by Prepare Your Kaggle API Token:

To access Kaggle datasets programmatically, you'll need to have a Kaggle API token. If you haven't already, follow these steps to obtain your API token:

a. Go to Kaggle (https://www.kaggle.com/) and log in to your account.
b. Click on your profile picture in the top-right corner and select "Account."
c. Scroll down to the "API" section and click on "Create New API Token."
d. This will download a file named kaggle.json containing your API credentials. Keep this file secure.

Upload Kaggle API Token to Google Drive:

Upload the kaggle.json file to your Google Drive so that you can access it from your Colab or Jupyter Notebook. You can place it in a folder of your choice.

Mount Google Drive in Your Colab/Jupyter Notebook:

In your Colab or Jupyter Notebook, you can mount your Google Drive to access files stored there. Here's how to do it:

For Google Colab, you can use the following code snippet:

python
Copy code
from google.colab import drive
drive.mount('/content/drive')

