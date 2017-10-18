---
layout: page
title: "Q140059: Stop 0xA in Afd When Browsing IIS"
permalink: kb/140/Q140059/
---

## Q140059: Stop 0xA in Afd When Browsing IIS

	Article: Q140059
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When requests are performed using a web browser against IIS either remotely or
	locally, the system may stop with the following STOP error message:
	
	  0x0000000a (0x0000015a, 0x0000001c, 0x00000000, 0x80116bf4)
	  IRQL_NOT_LESS_OR_EQUAL*** Address has base at 80100000 -
	  ntoskrnl.exe.
	
	  Offset = 16bf4 in Afd.sys
	
	The system event log reports the following error message:
	
	  The computer has rebooted from a bugcheck...
	
	CAUSE
	=====
	
	Afd contains an improper Irp handling routine.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT version 4.0,
	Service Pack 1. This problem has been corrected in the latest U.S. Service Pack
	for Windows NT version 4.0. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 4.00 sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
