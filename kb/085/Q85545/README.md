---
layout: page
title: "Q85545: Norton Disk Monitor May Cause Fragmented Conventional Memory"
permalink: /kb/085/Q85545/
---

## Q85545: Norton Disk Monitor May Cause Fragmented Conventional Memory

{% raw %}

	Article: Q85545
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Symantec has confirmed that using Norton Utilities version 6.0 Disk Monitor with
	Microsoft Windows 3.0 and MS-DOS 5.0 may generate the following error message:
	
	  Fragmented Conventional Memory, reboot and retry or run Windows in real mode.
	
	This problem has been corrected in Norton Utilities version 6.01.
	
	MORE INFORMATION
	================
	
	Disk Monitor is an MS-DOS level terminate-and-stay-resident (TSR) program that
	prevents data from being written to the hard disk without approval. Disk Monitor
	will load itself high if upper memory block support is available.
	
	The Norton Utilities LOADHIGH routine installs itself just below the 640K line,
	which may result in memory conflicts, and that may give the above error message
	when Windows 3.0 tries to load in standard or enhanced mode.
	
	To correct this problem, do one of the following:
	
	- Upgrade to Norton Utilities version 6.01.
	
	- If upper memory support is available, use the MS-DOS 5.0 LOADHIGH command to
	  override Norton Utilities LOADHIGH routine. In the AUTOEXEC.BAT file, enter
	  the following line:
	
	  loadhigh diskmon
	
	- Disk Monitor can be loaded into conventional memory through the AUTOEXEC.BAT
	  file as follows:
	
	  diskmon /skiphigh
	
	- Because this problem does not occur in the Microsoft Windows operating system
	  version 3.1, another solution is to upgrade to Windows 3.1.
	
	The products included here, Norton Utilities, are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00a 3.00 dos msdos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
