---
layout: page
title: "Q154504: Windows Explorer Error with Long Path on Windows NT Server"
permalink: kb/154/Q154504/
---

## Q154504: Windows Explorer Error with Long Path on Windows NT Server

	Article: Q154504
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create or rename a folder located deep in a Windows NT shared
	directory structure, you may receive the following error message:
	
	  Explorer
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	If you click Close, Windows Explorer quits.
	
	If you click Details, the following information appears:
	
	  EXPLORER caused an invalid page fault in module <module name> at
	  <memory location address>.
	
	CAUSE
	=====
	
	This problem occurs because the path length setting in the Svrapi.dll file is
	set to 128 bytes. This length is too short.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
