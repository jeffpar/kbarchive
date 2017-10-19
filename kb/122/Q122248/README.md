---
layout: page
title: "Q122248: Event Id 2000 Errors In System Log"
permalink: /kb/122/Q122248/
---

## Q122248: Event Id 2000 Errors In System Log

	Article: Q122248
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbother kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You find many occurrences of the following error in your system log:
	
	  EVENT ID 2000
	
	  The server's call to a system service failed unexpectedly.
	
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c0000008 00000000 00000000
	  0020: 00000000 00000000 00000bc0
	
	  c00000008 define STATUS_INVALID_HANDLE ((NTSTATUS)0xC0000008L)
	
	  00000bc0 define SRV_SVC_NT_Query_INFO_FILE 0xbc0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
