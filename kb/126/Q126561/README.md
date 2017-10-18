---
layout: page
title: "Q126561: Printing To An LPR Printer May Be Slow"
permalink: kb/126/Q126561/
---

## Q126561: Printing To An LPR Printer May Be Slow

	Article: Q126561
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It takes longer to print to an LPR printer over TCP from an NT Workstation that
	it does from a mini-computer.
	
	CAUSE
	=====
	
	Windows NT uses delays in the conversation with the printer for compatibility
	with older versions of SunOS.
	
	RESOLUTION
	----------
	
	In Windows NT version 3.51, the delay feature is off by default. You can use the
	following registry parameter to enable the delays:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\
	Monitors\LPR Port\Ports\<printer>\Timeouts
	OldSunCompatibility : REG_DWORD : 1
	
	By default, the parameter is missing and the system uses 0 (no delay).
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: 3.50 prodnt mini computer minicomputer sun os
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
