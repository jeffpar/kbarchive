---
layout: page
title: "Q130627: Quick Format Results in No ID Address Mark Found"
permalink: kb/130/Q130627/
---

## Q130627: Quick Format Results in No ID Address Mark Found

	Article: Q130627
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.51, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a quick format on an unformatted floppy disk in Windows NT
	File Manager or MS-DOS Command Prompt, the following error message appears when
	you copy large files to the floppy disk:
	
	  No ID address mark was found on the floppy disk.
	
	CAUSE
	=====
	
	This is expected behavior. When you quick format an unformatted floppy disk,
	correct data structures are placed; however, no media test and verification of
	cluster usability are performed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform the normal format on an unformatted floppy
	disk.
	
	Additional query words: prodnt 3.10 /q
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0 SP6,4.0 SP6a
	
	=============================================================================
	
