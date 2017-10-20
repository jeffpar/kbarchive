---
layout: page
title: "Q82699: Running Windows 3.0 from Windows 3.1"
permalink: /kb/082/Q82699/
---

## Q82699: Running Windows 3.0 from Windows 3.1

{% raw %}

	Article: Q82699
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to run Microsoft Windows operating system version 3.0 from inside
	Microsoft Windows operating system version 3.1, but only in real mode. To do
	this safely and efficiently, create a program information file (PIF) that sets
	up the memory requirements for real mode Windows and runs a batch file that
	removes Windows 3.1 from the PATH environment variable in the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	The optimal memory configuration for Windows 3.0 real mode is as follows:
	
	  XMS memory required: 512K
	  XMS memory desired : 512K
	
	  EMS memory required: 1024K
	  EMS memory desired : 2048K
	
	Windows 3.1 must be removed from the PATH environment variable to ensure that no
	version 3.1 drivers or dynamic-link libraries (DLLs) will be loaded by Windows
	3.0.
	
	The PIF file should have a batch file as the executable filename. The batch file
	should at least have the following lines
	
	  ...SET PATH=C:\WIN30
	  ...C:
	  ...CD\WIN30
	  ...WIN /R
	
	where "WIN30" is your Windows 3.0 program directory and C is the drive that
	contains Windows 3.0.
	
	Note: If the Windows 3.1 directory is on a drive other than C, it is critical to
	have the line "C:" in the batch file (where C is the drive that contains Windows
	3.0).
	
	Additional query words: 3.10 3.1 3.00 within under
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
