---
layout: page
title: "Q83733: Windows 3.1 Cannot Upgrade Windows 2.x"
permalink: kb/083/Q83733/
---

## Q83733: Windows 3.1 Cannot Upgrade Windows 2.x

	Article: Q83733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Windows operating system version 3.1 attempts to upgrade a
	version of Windows version 2.x, the following error message appears:
	
	  Setup is unable to upgrade Windows version 2.x. To set up Windows version
	  3.1, you will need to specify a different directory. Setup will leave your
	  previous version of Windows on your system.
	
	  Press ENTER to type a new path and continue Setup.
	
	The retail upgrade of Windows 3.1 indicates that upgrading from Windows 2.x is
	supported; however, it is only supported by installing Windows 3.1 in a separate
	directory. The retail upgrade of Windows 3.1 is a complete version of Windows
	3.1 and therefore does not require that a previous version of Windows be
	installed on your system.
	
	MORE INFORMATION
	================
	
	The above error message may also display when using Windows 3.1 to upgrade a
	copy of Windows 3.0 that was previously used to upgrade Windows 2.x. Old 2.x
	files may also generate the error message below:
	
	  Setup has detected an old version of Windows on your system, you cannot
	  upgrade to Windows 3.1.
	
	Setup looks for the WIN200.BIN and WIN200.OVL files. If either of these files is
	found in the same directory as WIN.COM, the above message displays.
	
	To correct this problem, use one of the following methods:
	
	- Remove or rename these two files, and run Setup again.
	
	  -or-
	
	- Install Windows 3.1 in a different directory. (Microsoft recommends this
	  option.)
	
	Additional query words: 3.10 2.x 286 386 update
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
