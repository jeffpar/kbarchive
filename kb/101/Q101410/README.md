---
layout: page
title: "Q101410: Windows/MS-DOS for PS/2 Not Supported on IBM ValuePoint"
permalink: /kb/101/Q101410/
---

## Q101410: Windows/MS-DOS for PS/2 Not Supported on IBM ValuePoint

{% raw %}

	Article: Q101410
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows and MS-DOS 5 Upgrade for IBM PS/2 computers cannot be
	installed on an IBM ValuePoint machine. However, the Microsoft Windows and
	MS-DOS Upgrade for machines other than PS/2s does work on the ValuePoint
	machine.
	
	MORE INFORMATION
	================
	
	Microsoft Windows & MS-DOS 5 for IBM PS/2 Setup fails on the ValuePoint
	machine because a specific string is missing in the ROM. When this string is not
	found, the following error message appears:
	
	  This version of Windows and MS-DOS setup will only work on a computer
	  manufactured by IBM. Obtain the correct Windows and MS-DOS setup from your
	  computer manufacturer or dealer. Remove the disk from your floppy disk drive
	  and restart or turn off your computer.
	
	To work around this problem, use the non-PS/2 version.
	
	
	Additional query words: 5.00 3.10 3.1 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	

{% endraw %}
