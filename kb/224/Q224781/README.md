---
layout: page
title: "Q224781: BackOffice Server Requires Minimum of 256 Megabyte Swap File"
permalink: /kb/224/Q224781/
---

## Q224781: BackOffice Server Requires Minimum of 256 Megabyte Swap File

	Article: Q224781
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BackOffice Server requires a paging (or swap) file size of at least 256
	megabytes (MB). You can run BackOffice Server Setup with a smaller swap file
	size, but you must increase the size immediately after the operating system
	starts.
	
	MORE INFORMATION
	================
	
	To change the size of the swap file, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab and then click Change under Virtual Memory
	
	4. Under "Paging File Size for Selected Drive", type a number equal to or
	  greater than 256 in the Initial Size (MB) box.
	
	5. In the Maximum Size (MB) box, type a number equal to or greater than 256, and
	  then click Set.
	
	6. Click OK.
	
	7. Restart your computer.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	
