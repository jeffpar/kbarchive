---
layout: page
title: "Q152003: Server Stops Responding upon Startup"
permalink: /kb/152/Q152003/
---

## Q152003: Server Stops Responding upon Startup

	Article: Q152003
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Periodically the server stops responding upon startup. This symptom occurs on
	NCR 3455 using several Buslogic MCA SCSI adapters.
	
	CAUSE
	=====
	
	Timing in the Windows NT driver causes the server to stop responding.
	
	RESOLUTION
	==========
	
	To get the server to start again, it may be necessary to install Windows NT in a
	separate subdirectory. The original installation is not corrupt. This will reset
	the computer so the original installation will now start again.
	
	Later Buslogic drivers from Buslogic do not have this issue. To resolve this
	issue, you will need to download the latest driver:
	
	1. Locate your current driver (Buslogic.sys) and rename it.
	
	2. Copy the new driver (it should be also Buslogic.sys) into that directory
	  (System32\Drivers).
	
	To download the latest Buslogic drivers from Buslogic, connect through the ftp
	server ftp://ftp.buslogic.com/pub/ or their BBS at 408-492-1984, 8 bits, No
	parity, 1 stop bit, up to 14.4k baud.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
