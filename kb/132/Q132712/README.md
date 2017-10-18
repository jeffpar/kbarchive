---
layout: page
title: "Q132712: Doc Err: Attachmate Extra for Windows Requires IPXINTFC TSR"
permalink: kb/132/Q132712/
---

## Q132712: Doc Err: Attachmate Extra for Windows Requires IPXINTFC TSR

	Article: Q132712
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	Chapter 5 of the Windows NT Services for NetWare Networks help file
	(NETWARE.HLP) includes a subtopic titled "Special Considerations for
	Individual NetWare-Aware Applications." It states the following:
	
	  Attachmate Extra for Windows requires IPXINTFC, a terminate-
	  and-stay-resident (TSR) utility. This TSP must be loaded by AUTOEXEC.NT prior
	  to the DOSX TSR being loaded.
	
	  For example, suppose Attachmate Extra! for Windows has been loaded in the
	  C:\EXTRAWIN subdirectory. In AUTOEXEC.NT, make sure the following three lines
	  are in the order shown:
	
	  lh c:\extrawin\ipxintfc REM Install DPMI support lh winnt\system32\dosx
	
	After you follow the instructions and load the IPXINTFC TSR required by
	Attachmate for IPX/SPX connectivity and ensure the IPX/SPX Compatible
	Transport is installed on the computer, an error message indicating that
	IPX is not loaded appears.
	
	To correct this problem, use Attachmate Extra! for Windows version 4.1 (or
	later) or Attachmate Extra! for Windows NT version 1.0 (or later). These
	versions do not require a TSP for IPX connectivity.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
