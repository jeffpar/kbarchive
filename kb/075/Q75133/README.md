---
layout: page
title: "Q75133: Installing MS-DOS Upgrade on a Texas Instruments Model 12"
permalink: /kb/075/Q75133/
---

## Q75133: Installing MS-DOS Upgrade on a Texas Instruments Model 12

{% raw %}

	Article: Q75133
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft MS-DOS 5 or later Upgrade on the Texas
	Instrument Model 12, your machine may not start successfully from the hard disk.
	
	WORKAROUND
	==========
	
	To successfully install MS-DOS version 5.0 or later on this system, Texas
	Instruments recommends you enter the following at the drive C command prompt:
	
	  " makeboot 0/u " (without the quotation marks)
	
	This command will uninstall the ROM Disk version 3.3 in the Model 12 and allow
	the MS-DOS 5.0 or later upgrade to successfully install.
	
	
	STATUS
	======
	
	The product included here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
