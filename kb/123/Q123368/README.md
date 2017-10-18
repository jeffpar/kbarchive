---
layout: page
title: "Q123368: Can't Recognize Beyond 64MB RAM on ALR Evolution Pentium"
permalink: kb/123/Q123368/
---

## Q123368: Can't Recognize Beyond 64MB RAM on ALR Evolution Pentium

	Article: Q123368
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT is only able to recognize and use the first 64MB of RAM on ALR
	Pentium Evolution V-Q/60 and Evolution V-Q/66 computers.
	
	CAUSE
	=====
	
	These ALR Pentium computers have a Phoenix BIOS revision of 1.00.26b. ALR
	confirms that programs attempting to access the BIOS through INT15 calls are
	able to access only up to 64MB of RAM. The ALR Pentium Evolution series
	computers are shipped with 256MB of RAM.
	
	RESOLUTION
	==========
	
	In order to correct this problem, upgrade the Phoenix BIOS to revision 1.00.35b.
	Contact ALR Technical Support at (714) 581-6770 or (800) 257-1230 for more
	information.
	
	
	The ALR products discussed here are manufactured by Advanced Logic Research, Inc.
	(ALR), a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt 3.10 simm memory
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
