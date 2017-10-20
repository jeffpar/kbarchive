---
layout: page
title: "Q76207: Preserving Compaq DOS Keyboard Click Feature"
permalink: /kb/076/Q76207/
---

## Q76207: Preserving Compaq DOS Keyboard Click Feature

{% raw %}

	Article: Q76207
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compaq DOS keyboard click feature can be retained in MS-DOS 5.0 or later by
	using the old Compaq MODE command with the MS-DOS SETVER command.
	
	MORE INFORMATION
	================
	
	To incorporate the Compaq keyboard click feature, copy MODE.COM from the
	previous version of Compaq DOS to your hard drive.
	
	Before copying the file to your DOS subdirectory, rename it to distinguish it
	from the MS-DOS 5.0 or later version of MODE.COM. For example, MODE41.COM or
	MODE33.COM, for versions 4.01 or 3.3 respectively.
	
	After copying and renaming the file, use the SETVER command to update the version
	of DOS reported to MODEXX.COM. See page 561 in the version 5.0 "Microsoft MS-DOS
	User's Guide and Reference" for more information about the SETVER command.
	
	You must also change the AUTOEXEC.BAT file to reflect the new filename. For
	example, the new line will read:
	
	  MODE41 CLI = n
	
	The above line in the AUTOEXEC.BAT file sets the duration of the keyboard click
	tone. Valid values for "n" are from 0 to 127. If you set n=0, there is no sound.
	The higher the number, the louder the click.
	
	The MODE CLI = n feature is specific to Compaq DOS.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 Compaq DOS Reference Guide
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
