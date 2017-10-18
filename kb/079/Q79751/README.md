---
layout: page
title: "Q79751: Quitting Windows While an MS-DOS-Based Application is Running"
permalink: kb/079/Q79751/
---

## Q79751: Quitting Windows While an MS-DOS-Based Application is Running

	Article: Q79751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two instances in which you can close a running or minimized
	MS-DOS-based application (either by choosing Close from the Control menu or by
	quitting Windows):
	
	- The application's program information file (PIF) has the Allow Close When
	  Active option selected in the PIF's advanced settings.
	
	  -or-
	
	- The application was started with SHIFT+ENTER or a double-click while the
	  SHIFT key was held down.
	
	MORE INFORMATION
	================
	
	The Allow Close When Active option in the advanced section of the application's
	PIF allows the application to be closed when it is still running. This setting
	is not recommended for applications that need to run in the background because
	the application does not have an opportunity to save work when it is shut down.
	
	NOTE: The Allow Close When Active option in the advanced section of the PIF
	Editor is only available in 386 enhanced mode.
	
	When you start an application with either SHIFT+ENTER or SHIFT+ double-click, it
	does not actually perform any functions until you open it by switching to it
	(provided background operation has not been enabled). Before you switch to the
	application, you can still close it by choosing Close from the Control menu or
	by quitting Windows.
	
	Additional query words: 3.10 win31 exit 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
