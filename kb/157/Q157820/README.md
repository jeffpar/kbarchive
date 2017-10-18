---
layout: page
title: "Q157820: STOP 0x0000001A on a Vectra VL Series System"
permalink: kb/157/Q157820/
---

## Q157820: STOP 0x0000001A on a Vectra VL Series System

	Article: Q157820
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the normal operation of a Windows NT 3.51 system on a Hewlett Packard
	Vectra VL Series 3 or Vectra VL Series 4 computer with 16 MB of RAM installed in
	4 MB SIMMS, the system fails with random STOP codes. The most predominate STOP
	code is STOP 0x0000001A.
	
	The following STOP error message appears on your Windows NT server:
	
	  STOP: 0x0000001A (00041284, 0e7f8000, 00000CDB, C0502000)
	
	NOTE: the first parameter in this case will always be 000041284. The other
	parameters will vary depending on the system configuration.
	
	MORE INFORMATION
	================
	
	The system board on the Vectra VL Series has a problem it runs Windows NT with
	16 MB of RAM using sets of 4-4 MB SIMMS. Hewlett Packard is currently working on
	the problem.
	
	
	WORKAROUND
	==========
	
	Hewlett Packard has found that adding 8 MB more of RAM to the system (for a
	total of at least 24 MB of RAM) resolves the issue. Contact Hewlett Packard for
	more information on this problem.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt memory 0x1A HP
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
