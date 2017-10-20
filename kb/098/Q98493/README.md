---
layout: page
title: "Q98493: SYS1733 Error Caused by Hardware Configuration Problems"
permalink: /kb/098/Q98493/
---

## Q98493: SYS1733 Error Caused by Hardware Configuration Problems

{% raw %}

	Article: Q98493
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you are installing OS/2, this error message may be displayed:
	
	  SYS1733 The country info file a:\country.sys is incorrect, the system has
	  stopped.
	
	CAUSE
	=====
	
	The error is caused by a hardware configuration problem. Known causes of this
	are:
	
	- Misconfigured CMOS for the floppy disk drives.
	
	- Missing one of two floppy disk drives, but CMOS states both exist.
	
	- Incorrect SCSI configurations.
	
	RESOLUTION
	==========
	
	To see if your CMOS is configured incorrectly, check your computer's owner's
	manual for information on how to configure it to match your installed hardware.
	
	To see if you have a misconfigured adapter card (such as an SCSI) check the
	card's settings against the proper settings in the user or installation manual,
	or contact the manufacturer for help.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2 country.sys
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
