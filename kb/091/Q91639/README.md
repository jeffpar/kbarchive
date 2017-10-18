---
layout: page
title: "Q91639: Shortcut Key for Startup MS-DOS-Based Application Doesn't Work"
permalink: kb/091/Q91639/
---

## Q91639: Shortcut Key for Startup MS-DOS-Based Application Doesn't Work

	Article: Q91639
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you assign a shortcut key to an MS-DOS-based application and position its
	icon as the first icon in the StartUp group (that is, in the upper-left corner
	of the group), the shortcut key is assigned to Program Manager instead of the
	MS-DOS-based application.
	
	WORKAROUND
	==========
	
	To work around this problem, make an icon for PROGMAN.EXE, and place this icon
	in the StartUp group. This eliminates the problem no matter where you position
	the icon for the MS-DOS-based application in the StartUp group.
	
	MORE INFORMATION
	================
	
	Normal functioning of the shortcut keys occurs under the following conditions:
	
	- The first icon in the StartUp group is a Windows application, with or without
	  a shortcut key assigned.
	
	- The first icon is an MS-DOS-based application without a shortcut key
	  assigned.
	
	Additional query words: 3.10 start up short cut
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
