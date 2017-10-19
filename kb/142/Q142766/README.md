---
layout: page
title: "Q142766: Updated Ifsmgr.vxd Allows Trailing Backslashes"
permalink: /kb/142/Q142766/
---

## Q142766: Updated Ifsmgr.vxd Allows Trailing Backslashes

	Article: Q142766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Windows-based version of a Novell NetWare program that attempts
	to map a path to a NetWare server with a backslash (\) at the end of the path,
	the connection may not be made or you may receive an error message stating that
	the server could not be found.
	
	This problem may also occur with the Microsoft Service for NetWare Directory
	Services (MSNDS).
	
	CAUSE
	=====
	
	This behavior can occur because the Ifsmgr.vxd file does not support a trailing
	backslash on a network connection.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
