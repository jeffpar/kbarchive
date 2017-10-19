---
layout: page
title: "Q101706: MS-DOS-Based Multimedia Application Support in Windows NT"
permalink: /kb/101/Q101706/
---

## Q101706: MS-DOS-Based Multimedia Application Support in Windows NT

	Article: Q101706
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Typically, an MS-DOS-based multimedia application writes directly to
	the I/O ports of an installed sound adapter to perform audio
	functions. To support system security in Windows NT, an application
	cannot write directly to the hardware ports, it must write to a VDD
	(virtual device driver) that simulates the sound adapter. Currently,
	Windows NT does not include any VDDs for sound adapters; multimedia
	applications that perform direct I/O are not supported.
	
	Microsoft will post new information here in the Microsoft Knowledge
	Base as these modules are available to install in Windows NT.
	
	Additional query words: prodnt 0
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
