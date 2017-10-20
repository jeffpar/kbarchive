---
layout: page
title: "Q84015: Adaptec 1740 Controller Requires Double Buffering"
permalink: /kb/084/Q84015/
---

## Q84015: Adaptec 1740 Controller Requires Double Buffering

{% raw %}

	Article: Q84015
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 6.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Adaptec documentation, using the Adaptec 1740 controller with
	Windows in enhanced mode or with the EMM386.SY/EMM386.EXE device driver requires
	a double buffering device driver.
	
	However, if SMARTDrive (SMARTDRV.EXE) version 4.0 from Microsoft Windows version
	3.1, is installed to perform double buffering, it may not detect that double
	buffering is required. If you are using SMARTDrive version 4.0, you can force
	SMARTDrive to perform double buffering by loading it with "/DOUBLE_BUFFER+". For
	example:
	
	      device=c:\windows\smartdrv.exe /double_buffer+
	
	If you are not using Windows 3.1, you can force SMARTDRV.SYS from MS-DOS 5.0 or
	Windows 3.0 to perform double buffering by loading it with "/b+". For example:
	
	     device=c:\dos\smartdrv.sys /b+
	
	MORE INFORMATION
	================
	
	When providing double buffering, SMARTDRV.SYS cannot be loaded into upper memory
	blocks (UMBs).
	
	SMARTDRV.EXE (which is SMARTDrive version 4.0, included with Windows 3.1)
	separates the double buffering and disk caching functions. The double buffering
	portion is loaded in CONFIG.SYS and must be loaded in conventional memory. The
	disk cache portion of SMARTDrive is loaded from the AUTOEXEC.BAT file, and can
	be loaded into upper memory if an upper memory block (UMB) provider such as
	EMM386.EXE is loaded.
	
	For more information on double buffering, query on:
	
	  double buffering definition
	
	Additional query words: 3.00 3.00a 3.10 3.11 5.0 5.00 5.0a 4.00 4.01 4.01a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS400 kbMSDOS600 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.x,5.0,6.0; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
