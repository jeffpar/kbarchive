---
layout: page
title: "Q147838: Cannot Access Folders with Long File Names on NetWare Servers"
permalink: /kb/147/Q147838/
---

## Q147838: Cannot Access Folders with Long File Names on NetWare Servers

	Article: Q147838
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork 3rdpartynet win95 kb3rdPartyNetClientkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are browsing a Novell NetWare server from a 16-bit program using the
	Microsoft Client for NetWare Networks, you may not see any files or folders when
	you browse a folder with a long file name.
	
	RESOLUTION
	==========
	
	
	To work around this problem, use any one of the following methods:
	
	- Type the exact path to the file, using NetWare's short file names for the
	  folders and files.
	
	- Do not name folders on NetWare servers with long file names. You can still
	  use long file names for files.
	
	- Use the Novell NetWare Workstation Shell and a real-mode Novell NetWare
	  client instead of the Microsoft Client for NetWare Networks.
	
	  Note that real-mode Novell NetWare clients do not support viewing long file
	  names on NetWare servers from 32-bit Windows 95-based programs.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: lfn
	
	======================================================================
	Keywords          : kbnetwork 3rdpartynet win95 kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
