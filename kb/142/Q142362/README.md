---
layout: page
title: "Q142362: NetWare FLAG and FLAGDIR Commands Do Not Work"
permalink: kb/142/Q142362/
---

## Q142362: NetWare FLAG and FLAGDIR Commands Do Not Work

	Article: Q142362
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
	
	The Novell NetWare FLAG and FLAGDIR commands may not change the attributes of
	files and folders.
	
	CAUSE
	=====
	
	This behavior can occur if the NetWare FLAG and FLAGDIR commands are being used
	on a Windows 95-based computer with the File and Printer Sharing for NetWare
	Networks service enabled.
	
	RESOLUTION
	==========
	
	This behavior is by design. These commands are not supported on Windows 95-based
	computers acting as NetWare servers.
	
	MORE INFORMATION
	================
	
	A Windows 95-based computer can appear to be a NetWare server when the File and
	Print Sharing for NetWare Networks service is enabled.
	
	The FLAG and FLAGDIR commands are used to change file or folder attributes. These
	fall under NetWare's attribute security, which is most commonly used to
	restrict:
	
	- Copying a file
	
	- Deleting a file
	
	- Viewing a file or folder
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
