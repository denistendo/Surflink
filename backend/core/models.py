from django.db import models

class InternetPackage(models.Model):
    name = models.Charfield(max_length=100, unique=True)
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
    
class voucher(models.Model):
    name = models.Charfield(max_length=10, unique=True)
    package = models.ForeignKey(InternetPackage, on_delete=models.CASCADE, related_name='vouchers')
    is_used = models.BooleanField(default=False)
    used_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ['-created_at']
    def __str__(self):
        return f"{self.name} - {self.package.name} ({'Used' if self.is_used else 'Active'})"

class payment(models.Model):
    phonenumber = models.Charfield(max_length = 10)
    package = models.ForeignKey(InternetPackage, on_delete=models.CASCADE, related_name='payments')
    amount =models.DecimalField(max_digits=10, decimal_places=2)
    
