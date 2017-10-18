---
layout: page
title: "Q131388: STOP Msg: C000021A Accessing PostScript Printer Driver"
permalink: kb/131/Q131388/
---

## Q131388: STOP Msg: C000021A Accessing PostScript Printer Driver

	Article: Q131388
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your application accesses a PostScript printer driver, such as a Print
	Preview, the following STOP Message appears:
	
	  STOP c000021a {Fatal System Error}
	
	CAUSE
	=====
	
	The Windows NT PostScript printer driver parses PostScript Printer Description
	(PPD) files and overwrites system memory if it encounters an invocation string
	in the PPD that is longer than 512 bytes.
	
	RESOLUTION
	==========
	
	There is no resolution at this time. Note that PPD files with invocation strings
	longer than 512 bytes are rare. Windows NT does not supply PPD files with
	invocation strings longer than 512 bytes.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	This problem has been corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt 3.10 seiko personal colorpoint 241.3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
