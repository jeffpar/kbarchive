---
layout: page
title: "Q73414: Requirements to Run SETUP /F from 3.5- to 5.25-Inch Drives"
permalink: /kb/073/Q73414/
---

## Q73414: Requirements to Run SETUP /F from 3.5- to 5.25-Inch Drives

{% raw %}

	Article: Q73414
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using 3.5-inch Microsoft MS-DOS 5 Upgrade disks and you try to run
	SETUP /F and the following conditions are true, the installation program fails
	and generates one of the following messages:
	
	- The target disk drive is 1.2 MB.
	
	- The target disks are low density.
	
	- the target disks are unformatted.
	
	CAUSE
	=====
	
	The SETUP /F program requires the target (destination) media to have a capacity
	greater than or equal to the source media. This means that 360K disks cannot be
	reliably used to create MS-DOS 5.0 floppy disks from the 720K MS-DOS 5.0 upgrade
	disks. The problem occurs because it is currently impossible to detect media
	type of an unformatted floppy disk.
	
	If an unformatted 360K disk is used in a high-density drive, the installation
	program tries to format the disk as a 1.2 MB disk. This does not work reliably.
	
	If the 360K disk is already formatted or the disk drive is low density, an error
	message is generated, and the Setup program is halted.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
