---
layout: page
title: "Q123497: ALR Evolution Pentium Does Not Detect COM Ports"
permalink: kb/123/Q123497/
---

## Q123497: ALR Evolution Pentium Does Not Detect COM Ports

	Article: Q123497
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kb3rdparty nthw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT version 3.5 on ALR Evolution V-Q/60 and Evolution
	V-Q/66 computers, the serial ports are not recognized in the Ports option in
	Control Panel. Windows NT Terminal reports that all serial (COM) ports are in
	use.
	
	CAUSE
	=====
	
	This problem occurs when Windows NT version 3.5 NTDETECT.COM is not able to read
	the ALR EISA configuration file for serial port information. This problem does
	not occur in Windows NT version 3.1.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain ECU213.ZIP from ALR's bulletin board system
	(BBS) at (714) 458-6834. This file includes the updated EISA configuration
	utility (version 213). For additional information, contact ALR Technical Support
	at (714) 581-6770 or (800) 257-1230.
	
	The ALR Evolution computers discussed here are manufactured by Advanced Logic
	Research Inc. (ALR), a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt 3.10 terminal.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
