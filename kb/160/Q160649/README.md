---
layout: page
title: "Q160649: STOP 0x0000000A in Ntoskrnl.exe at Logon to Windows NT 4.0"
permalink: /kb/160/Q160649/
---

## Q160649: STOP 0x0000000A in Ntoskrnl.exe at Logon to Windows NT 4.0

	Article: Q160649
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A STOP 0x0000000A error in Ntoskrnl.exe may occur at logon time in Windows NT
	4.0.
	
	CAUSE
	=====
	
	The Registry code passes an invalid pointer to NtWriteFile.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
