---
layout: page
title: "Q125390: Telnet GP Faults when Accessing InterLock Server"
permalink: kb/125/Q125390/
---

## Q125390: Telnet GP Faults when Accessing InterLock Server

	Article: Q125390
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT Telnet and Microsoft TCP/IP-32 for Windows for Workgroups
	Telnet cause a general protection (GP) fault in TELNET.EXE when you access an
	InterLock 3.0 Telnet server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	InterLock is manufactured by ANS Corporation, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability. This is a hotfix, and distribution requires manager approval. To
	receive the hotfix, customers must be encountering the bug as described above.
	You must track the customers you send this to and supply them with the next
	Service Pack when it becomes available. To obtain the new file, contact the
	Escalation Team. The HOTFIX is located on http://hotfix The fix contains both a
	32-bit and 16-bit version,
	
	Additional query words: prodtcp32 3.50 wfw wfwg prodnt gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3
	Version           : winnt:3.5; :
	
	=============================================================================
	
