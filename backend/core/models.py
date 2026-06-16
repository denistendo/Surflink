from django.db import models

class InternetPackage(models.model):
    name = models.Charfield(max_length=100, unique=True, help_text="Enter the name of the package")
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Enter the price of the package")
    duration_hours = models.IntegerField(help_text="Enter the duration of the package in hours")
    data_limit_mb = models.IntegerField(null=True, blank=True)
    speed_limit_down = models.IntegerField(null=True, blank=True)
    speed_limit_up = models.IntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['price']

    def __str__(self):
        return f"{self.name} - {self.price} (Duration: {self.duration_hours} hours)"
    
class Voucher(models.model):
    name = models.CharField(max_length=10, unique=True)
    