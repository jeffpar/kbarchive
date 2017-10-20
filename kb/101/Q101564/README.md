---
layout: page
title: "Q101564: Stacked Floppy Disk Drives Interfere with Stacker Conversion"
permalink: /kb/101/Q101564/
---

## Q101564: Stacked Floppy Disk Drives Interfere with Stacker Conversion

{% raw %}

	Article: Q101564
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DoubleSpace may be unable to convert a Stacker 3.0-compressed hard disk drive if
	a floppy disk drive is identified as a Stacker- compressed drive in the
	CONFIG.SYS file. In this case, the following error messages may occur when you
	run the Stacker conversion:
	
	- Drive A: is not a Stacker drive.
	
	- DoubleSpace was not able to convert your Stacker drives to DoubleSpace
	  format.
	
	Because the conversion was unsuccessful, Stacker remains installed on your
	system. Press ENTER to reboot your computer and reenable Stacker.
	
	CAUSE
	=====
	
	These errors occur if you identify a floppy disk drive on the Stacker device
	line in your CONFIG.SYS file. For example:
	
	     device=c:\stacker\stacker.com c:\stacvol.dsk a:
	
	RESOLUTION
	==========
	
	To correct this problem, remove the reference to your floppy disk drive from the
	Stacker device line in your CONFIG.SYS file. For example:
	
	     device=c:\stacker\stacker.com c:\stackvol.dsk
	
	Now, run the Stacker conversion again.
	
	MORE INFORMATION
	================
	
	Stacker is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: dblspace 6.00 staker stacer stak stacked convert.bat convert conversion disk users floppies
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
