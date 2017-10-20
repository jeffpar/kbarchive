---
layout: page
title: "Q119931: Space: Setup Fails on Disk 2"
permalink: /kb/119/Q119931/
---

## Q119931: Space: Setup Fails on Disk 2

{% raw %}

	Article: Q119931
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Space Simulator for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup program for Microsoft Space Simulator may fail when requesting Disk 2.
	
	MORE INFORMATION
	================
	
	The Setup program may continue prompting for Disk 2 even after it has been
	inserted properly.
	
	This will occur if SHARE.EXE is loaded on the system and Microsoft Space
	Simulator Disk 1 is write protected.
	
	To correct this problem, disable the write protection on Space Simulator Disk 1.
	
	During the Microsoft Space Simulator installation process, the Setup program
	writes information to the SETUP.INI file on Disk 1. If Disk 1 is write
	protected, the Setup program is not able to write changes to the SETUP.INI file,
	and it leaves the file with an Open status. If a file on a floppy disk has an
	Open status, SHARE.EXE will not allow the disk change to occur properly.
	
	Additional query words: 1.00 spacesim ssim ss1 dos
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword3 kbSpaceSim100DOS
	Version           : MS-DOS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
