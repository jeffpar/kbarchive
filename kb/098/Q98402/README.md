---
layout: page
title: "Q98402: Using Computer Lab International 5250 with DoubleSpace"
permalink: /kb/098/Q98402/
---

## Q98402: Using Computer Lab International 5250 with DoubleSpace

{% raw %}

	Article: Q98402
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	According to Computer Lab International Technical Support, the 5250 emulator card
	and software do not work unless you have the following command in your
	CONFIG.SYS file:
	
	  DEVICE=C:\DOS\DBLSPACE.SYS /MOVE
	
	Since DoubleSpace usually adds this line to the CONFIG.SYS file, this problem
	should rarely occur.
	
	MORE INFORMATION
	================
	
	If you are having problems with the emulation software even though the
	DEVICE=C:\DOS\DBLSPACE.SYS /MOVE line is in your CONFIG.SYS file, move the
	command closer to the top of the file.
	
	The 5250 emulator card and software are manufactured by Computer Lab
	International, a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding this product's performance or reliability.
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
