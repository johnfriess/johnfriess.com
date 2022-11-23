from django.db import models

class Project(models.Model):
    index = models.IntegerField()
    video = models.URLField(blank=True, null=True)
    languages = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=90, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
         
    class Meta:
        ordering = ('-index',)
        verbose_name_plural = 'Projects Section'

    def __str__(self):
        return self.title