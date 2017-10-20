---
layout: page
title: "Q82224: DRIVER.SYS Incompatible with Windows File Manager"
permalink: /kb/082/Q82224/
---

## Q82224: DRIVER.SYS Incompatible with Windows File Manager

{% raw %}

	Article: Q82224
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the MS-DOS device driver DRIVER.SYS to create a logical floppy drive,
	you may encounter problems accessing both the logical drive as well as the
	physical drive it represents from Microsoft Windows, especially from File
	Manager.
	
	Some problems that you may be encountered are:
	
	- Drive letter(s) are not present in File Manager.
	
	- Drive letter(s) are present, but File Manager reports the drives do not exist
	  when you attempt to access them.
	
	- MS-DOS error messages appear superimposed on the File Manager screen.
	
	- The system stops responding (hangs) when you access the drive(s).
	
	MORE INFORMATION
	================
	
	The MS-DOS device driver DRIVER.SYS can be used to create a logical drive
	designator for a physical floppy disk drive. Drives configured in this manner
	are not supported in the Windows environment and can lead to erratic floppy
	drive and system behavior, particularly when the drives are accessed through
	File Manager.
	
	Do not use DRIVER.SYS to configure physical or logical floppy drives if you plan
	to access those drives from the Windows environment.
	
	Additional query words: 3.00 3.10 3.0 3.1 3.11 crash freeze lock up missing
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	
	=============================================================================
	

{% endraw %}
