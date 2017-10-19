---
layout: page
title: "Q150397: Error Message: This Path Does Not Exist"
permalink: /kb/150/Q150397/
---

## Q150397: Error Message: This Path Does Not Exist

	Article: Q150397
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Save As command in a 16-bit Windows-based program to save a
	file to an IBM LAN server, you may receive the following error message:
	
	  This path does not exist
	
	CAUSE
	=====
	
	This error can occur if the file name you specified already exists in the
	destination folder.
	
	RESOLUTION
	==========
	
	Save the file with a file name that does not already exist in the destination
	folder.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior occurs only if all the following conditions exist:
	
	- The file is being saved to an IBM LAN server.
	
	- The 16-bit program uses Commdlg.dll to display the Save As dialog box.
	
	- You are using the Save As command.
	
	- The file name you specified already exists in the destination folder.
	
	- The destination folder is not the root of the network share.
	
	Note that this behavior does not occur with the following servers:
	
	- Microsoft Windows 95 servers
	
	- Microsoft Windows for Workgroups servers
	
	- Microsoft Windows NT servers
	
	- Microsoft LAN Manager 2.x servers
	
	- Novell NetWare 3.x or 4.x servers
	
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
