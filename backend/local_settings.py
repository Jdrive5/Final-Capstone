# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-i7-lye(q%0i^lyo-41vgr42om$%udn^aej!c&z)gx)vgf0$(dg'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'sneakers_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'Elkton2009!'
    }
}