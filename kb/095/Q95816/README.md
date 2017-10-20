---
layout: page
title: "Q95816: DBLSPACE.SYS /MOVE or DRVSPACE.SYS /MOVE in CONFIG.SYS Twice"
permalink: /kb/095/Q95816/
---

## Q95816: DBLSPACE.SYS /MOVE or DRVSPACE.SYS /MOVE in CONFIG.SYS Twice

{% raw %}

	Article: Q95816
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	NOTE: Although the text in this article specifically refers to MS-DOS 6.2
	DoubleSpace, the information also applies to MS-DOS 6.22 DriveSpace. If you
	have MS-DOS 6.22, substitute DRVSPACE for any DBLSPACE commands.
	
	SUMMARY
	=======
	
	During installation, DoubleSpace may add the statement
	DEVICEHIGH=C:\DOS\DBLSPACE.SYS /MOVE to the CONFIG.SYS file more than once.
	DoubleSpace adds this line to more than one location in the CONFIG.SYS file if
	DoubleSpace determines that DBLSPACE.BIN may cause problems for network device
	drivers.
	
	MORE INFORMATION
	================
	
	DBLSPACE.SYS /MOVE does not load a device driver for DoubleSpace. Instead, it
	moves the DoubleSpace component (DBLSPACE.BIN) into memory. Multiple instances
	of DBLSPACE.SYS do not use additional memory because this device driver simply
	moves DBLSPACE.BIN and then unloads itself.
	
	Additional query words: 6.00 dblspace double space 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
