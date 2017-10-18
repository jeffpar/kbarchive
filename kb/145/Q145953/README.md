---
layout: page
title: "Q145953: Unable to Install TCP/IP Protocol and Component After Setup"
permalink: kb/145/Q145953/
---

## Q145953: Unable to Install TCP/IP Protocol and Component After Setup

	Article: Q145953
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you cancel TCP/IP Configuration during Windows NT Setup and you try to
	install the TCP/IP protocol and related components after Setup, the TCP/IP
	Internetworking component, Connectivity Utilities, is unavailable (dimmed).
	
	
	CAUSE
	=====
	
	Windows NT Setup adds the Tcpip subkey in the registry even though you canceled
	the TCP/IP Configuration during Setup.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services
	
	2. Remove the Tcpip key and its subkeys.
	
	3. Locate the following Registry subkey in the HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\Microsoft
	
	4. Remove the Tcpipcu key and its subkeys.
	
	5. Quit the Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
