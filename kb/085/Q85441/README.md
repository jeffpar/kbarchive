---
layout: page
title: "Q85441: Windows Setup Err Msg: Sector Not Found Reading Drive X"
permalink: /kb/085/Q85441/
---

## Q85441: Windows Setup Err Msg: Sector Not Found Reading Drive X

{% raw %}

	Article: Q85441
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	3.10 3.11 | 6.00 6.20 6.21
	WINDOWS   | MS-DOS
	kbsetup kberrmsg kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the MS-DOS, Windows, or Windows for Workgroups Setup
	program, the following error message is displayed:
	
	  Sector Not Found Reading Drive X
	
	where X is the floppy drive letter.
	
	The MS-DOS DIR and CHKDSK commands run successfully without errors on the Setup
	disks.
	
	CAUSE
	=====
	
	Your high density floppy disk drive is incorrectly configured as a low density
	drive in your machine's CMOS setup.
	
	RESOLUTION
	==========
	
	To correct this problem, reconfigure the machine's CMOS settings.
	
	Additional query words: winboot 3.1 3.11 3.10 6.00 6.20 6.2 6.21 bad disk drive
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
