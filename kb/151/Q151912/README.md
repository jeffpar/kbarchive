---
layout: page
title: "Q151912: NWRedir Returns Cached File Size Information"
permalink: /kb/151/Q151912/
---

## Q151912: NWRedir Returns Cached File Size Information

	Article: Q151912
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file on a Novell NetWare network server is opened by a Windows 95 client
	running the Microsoft Client for NetWare Networks (NWRedir), and the size of the
	file subsequently changes, the new file size may not be reported by Windows 95.
	
	CAUSE
	=====
	
	If a file is being cached, the GetFileSize API returns cached file size
	information, instead of reading the actual file size from the server.
	
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
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
