---
layout: page
title: "Q142869: Event ID 3210 and 5722 Appear When Synchronizing Entire Domain"
permalink: /kb/142/Q142869/
---

## Q142869: Event ID 3210 and 5722 Appear When Synchronizing Entire Domain

{% raw %}

	Article: Q142869
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you select Synchronize Entire Domain in Server Manager on the primary
	domain controller (PDC), system Event ID 5722 appears. System Event ID 3210
	appears on the backup domain controller (BDC).
	
	RESOLUTION
	==========
	
	To correct this problem, select Synchronize with Primary Domain Controller in
	Server Manager after highlighting the BDC.
	
	NOTE: If this option is not available in Server Manager, type the following at
	the MS-DOS command prompt:
	
	" net config server /srvcomment:"<Comment for this BDC>" " (without the
	quotation marks)
	
	The following lists detailed information about Event ID 3210 and Event ID 5722:
	
	  3210NELOG_NetlogonAuthDCFail
	  Failed to authenticate with %2, a Windows NT domain controller for domain %1.
	
	  5722NELOG_NetlogonServerAuthFailed
	  The session setup from the computer %1 failed to authenticate. The name of the
	  account referenced in the security database is %2. The following error
	  occurred: %n%3
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
