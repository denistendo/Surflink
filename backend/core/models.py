from django.db import models

class InternetPackage(models.model):
    name = models.Charfield(max_length=100, unique=True, help_text="Enter the name of the package")
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Enter the price of the package")
    duration_hours
    