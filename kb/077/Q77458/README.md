---
layout: page
title: "Q77458: MS-DOS Shell Leaves Temporary Files on Hard Drive"
permalink: /kb/077/Q77458/
---

## Q77458: MS-DOS Shell Leaves Temporary Files on Hard Drive

{% raw %}

	Article: Q77458
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Temporary files remain in the designated temporary directory when the computer
	is shut off or rebooted while applications are still active in MS-DOS Shell. If
	Shell is not active, these temporary files may be deleted.
	
	MORE INFORMATION
	================
	
	The names of the temporary files depend on the Shell setup. If Task Swapper is
	enabled,the temporary files are named:
	
	  XXXXDOSC.BAT
	
	where XXXX is a system generated hexadecimal string.
	
	The number of temporary files remaining depends on the number of tasks running at
	the time of the power down or reboot. These files must be deleted manually.
	
	If Task Swapper is not enabled, the following two temporary files remain:
	
	  DOSSHELL.SWP
	  C3BDOSCM.BAT
	
	These files are deleted the next time Shell is invoked.
	
	In both cases, the temporary files are located in either the directory specified
	in the AUTOEXEC.BAT
	
	  set temp=[drive spec]\[directory name]
	
	line or in the DOS directory if SET TEMP=[drive spec]\[directory name] is not
	used.
	
	The contents of the file C3BDOSCM.BAT or XXXXDOSC.BAT are the commands used to
	invoke the application. For example, if MS-DOS Editor was invoked for the file
	AUTOEXEC.BAT, the contents of the generated batch file would be as follows:
	
	  @EDIT AUTOEXEC.BAT
	
	
	Additional query words: 5.00 dos shell dosshell bat batch 6.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
