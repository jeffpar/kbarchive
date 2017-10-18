---
layout: page
title: "Q73442: Disabling or Re-Enabling Mouse in MS-DOS Shell"
permalink: kb/073/Q73442/
---

## Q73442: Disabling or Re-Enabling Mouse in MS-DOS Shell

	Article: Q73442
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you respond to the following message when starting MS-DOS version 5.0
	Shell,
	
	  Warning: You do not have a current mouse driver..."
	
	a line is added to the DOSSHELL.INI file if you are using an old Microsoft or
	Logitech mouse driver. If you choose to to disable the mouse, the following line
	is added:
	
	  mouseinfo = <ver>,disabled
	
	If you choose to use the mouse anyway, the following line is added:
	
	  mouseinfo = <ver>,ignore
	
	To disable or re-enable the mouse in the MS-DOS Shell, these lines can be edited
	using a text editor such as MS-DOS Editor, or deleted from the DOSSHELL.INI
	file. Deleting the MOUSEINFO = line causes the following message to be displayed
	when Shell is restarted:
	
	  Warning: You do not have a current mouse driver...
	
	MORE INFORMATION
	================
	
	If you obtain an updated mouse driver, you do not need to manually edit the
	DOSSHELL.INI file. Upon loading Shell into memory using an updated mouse driver,
	the MOUSEINFO = line in DOSSHELL.INI will be changed to:
	
	  mouseinfo =
	
	At this point, the mouse will be enabled in Shell.
	
	Additional query words: err msg dosshell 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
