---
layout: page
title: "Q91204: Order in Which Applications Load from the StartUp Group"
permalink: /kb/091/Q91204/
---

## Q91204: Order in Which Applications Load from the StartUp Group

	Article: Q91204
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Windows 3.1 StartUp group, applications load in left-to-right sequence,
	with Windows-based applications taking precedence over MS-DOS- based
	applications, regardless of the order in which they appear in the StartUp group.
	
	MORE INFORMATION
	================
	
	The Windows 3.1 StartUp group starts Windows-based applications beginning with
	the first icon in the group and moves from left to right, starting each
	Windows-based application in the first line. It then moves down a line, if
	applicable, and begins starting Windows-based applications in the same fashion.
	Startup skips over any MS-DOS-based applications that are placed between the
	Windows-based applications. If a switch appears on the command line for a
	Windows-based application, then it will load after the other Windows-based
	applications.
	
	Startup then begins with the second MS-DOS-based application and moves from left
	to right, skipping over the already running Windows-based applications. After
	the last MS-DOS-based application in the StartUp group is started, startup goes
	back and starts the first MS-DOS-based application.
	
	If the StartUp group contains MS-DOS-based applications only, startup begins
	loading the second application and does not start the first application in the
	group until the last application has been started.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS500
	Version           : WINDOWS:3.1,3.11; :
	
	=============================================================================
	
