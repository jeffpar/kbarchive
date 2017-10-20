---
layout: page
title: "Q75081: Cannot Use /U Switch with DOS=LOW and MOUSE.COM Version 8.0"
permalink: /kb/075/Q75081/
---

## Q75081: Cannot Use /U Switch with DOS=LOW and MOUSE.COM Version 8.0

{% raw %}

	Article: Q75081
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
	
	Microsoft Mouse drivers versions 8.0 and later allow for the use of an XMS
	driver to load themselves high. The /U switch allows you to load the mouse
	driver high, but does not work if MS-DOS is loaded into conventional memory.
	MS-DOS loads into conventional memory with the line DOS=LOW in the CONFIG.SYS
	file, or the lack of a DOS= line in the CONFIG.SYS file.
	
	To work around this feature, type the following command:
	
	  " setver mouse.com 4.00 " (without the quotation marks)
	
	Make sure that SETVER.EXE is being loaded in the CONFIG.SYS file, and then
	restart the machine. To verify that the mouse driver is loading into XMS, type
	"MEM /C" (without the quotation marks). The size of the driver in conventional
	memory should be approximately 3.5K.
	
	NOTE: Microsoft does not recommend using the /U switch when DOS=HIGH with
	Microsoft Mouse Driver, version 8.0. For more information, query on the
	following words:
	
	  " conflicts and mouse.com and DOS=HIGH " (without the quotation marks)
	
	
	MORE INFORMATION
	================
	
	MOUSE.COM uses an XMS Sub-Allocate call to load itself high. This call requires
	MS-DOS to be loaded into the HMA before the mouse can load high.
	
	MOUSE.COM has a version check built into it that allows it to load into the HMA
	in MS-DOS versions earlier than 5.0. If the MS-DOS version is earlier than 5.0,
	MOUSE.COM does not check to see if MS-DOS has been loaded high first. Loading
	SETVER.EXE allows MOUSE.COM to make the appropriate XMS initialization calls to
	allow for proper HMA loading.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 8.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
