---
layout: page
title: "Q151474: Cannot Save Word 95 File on NetWare Server With OS/2 Name Space"
permalink: /kb/151/Q151474/
---

## Q151474: Cannot Save Word 95 File on NetWare Server With OS/2 Name Space

	Article: Q151474
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Service Pack 4 (SP4) for Windows NT 3.51, if you try to save a
	Word 95 document to a NetWare file server that has the OS/2 Name Space service,
	the following error message appears:
	
	  The disk is full or too many files are open
	
	This error will happen only if the FavourLongNames entry is enabled in the
	registry on the Windows NT computer.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q140400GSNW/CSNW Creates 8.3-Format Directory Names in Uppercase Only
	
	WORKAROUND
	==========
	
	You can use one of the following workarounds.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\NWRDR\parameters
	
	3. Disable the FavourLongNames entry by setting this data to zero.
	
	-OR-
	
	An alternative workaround is to upgrade to Office95B
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
