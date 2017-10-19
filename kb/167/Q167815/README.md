---
layout: page
title: "Q167815: Mapping Operation Attempted on Non-NetWare Drive"
permalink: /kb/167/Q167815/
---

## Q167815: Mapping Operation Attempted on Non-NetWare Drive

	Article: Q167815
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Client or Gateway Service for Novell NetWare configured to run a NetWare
	login script, the following error may occur when the login script attempts to
	map a drive letter to a NetWare volume:
	
	  The following drive mapping operation was attempted on a non-NetWare network
	  drive. "X:=SERVER/VOL:\DIR"
	
	The exact syntax of the drive mapping in the error message will depend on the
	syntax of the actual MAP command in the login script.
	
	CAUSE
	=====
	
	This message will occur if drive X: in the earlier example is already redirected
	to another network resource. If you have previously created a persistent
	connection to a non-NetWare server on drive X:, the persistent connection will
	be established before the NetWare login script is run, resulting in the error
	message above.
	
	RESOLUTION
	==========
	
	To resolve the problem, change the drive letter that the Map command refers to
	in the NetWare login script, or remove the Windows NT persistent server
	connection.
	
	MORE INFORMATION
	================
	
	If the persistent connection on drive X: is to a NetWare server, you will
	receive the following error during processing of the NetWare login script:
	
	  Attempt to map drive to invalid path in map command "X:=SERVER/VOL:\DIR".
	
	The exact syntax of the drive mapping in the error message will also depend on
	the syntax of the actual Map command in the login script.
	
	Additional query words: csnw gsnw
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
