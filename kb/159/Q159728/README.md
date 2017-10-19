---
layout: page
title: "Q159728: DIR Command to NetWare Server Using GSNW Results in Error"
permalink: /kb/159/Q159728/
---

## Q159728: DIR Command to NetWare Server Using GSNW Results in Error

	Article: Q159728
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a NetWare server using the Windows NT Gateway Services for
	NetWare (GSNW), if you attempt to use the DIR command in a directory on the
	NetWare server, you may receive the following error message:
	
	  File not found
	
	If you make a direct connection to the NetWare server (without using GSNW), this
	problem does not occur.
	
	CAUSE
	=====
	
	This problem occurs when a large number of files exist in the directory on the
	NetWare server for which the DIR command is being used.
	
	
	RESOLUTION
	==========
	
	As a workaround, use one of the following methods:
	
	- Connect to the NetWare server directly, without using GSNW.
	
	- Divide the directory on the NetWare server into smaller directories with
	  fewer files.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
