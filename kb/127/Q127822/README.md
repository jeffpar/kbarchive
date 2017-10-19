---
layout: page
title: "Q127822: EISA Configuration Utility for Compaq Prosignia"
permalink: /kb/127/Q127822/
---

## Q127822: EISA Configuration Utility for Compaq Prosignia

	Article: Q127822
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
	
	Internal modems used with Windows NT require that serial port 1 or serial
	port 2 be disabled. Compaq Prosignia EISA configuration utilities prior to
	version 2.22 revision E fail to disable the specified port. The port is
	reported as available in Control Panel (Ports) even though the EISA
	configuration utility reports it disabled.
	
	A new version of the EISA configuration utility (version 2.22 revision E)
	is available on the Compaq FTP server (FTP.COMPAQ.COM
	\pub\softpaq\diagnostic-setup) and the Compaq bulletin board system (BBS)
	at (713) 378-1418. The updated EISA configuration utility is in the
	compressed file SP1016.ZIP. After you uncompress the file, run SP1016.EXE
	and then follow the directions in README3H.1ST.
	
	Additional query words: prodnt 3.10 com comm config com1 com2
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
