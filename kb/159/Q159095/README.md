---
layout: page
title: "Q159095: STOP 0x0000001E in Win32k.sys When Exiting Applications"
permalink: /kb/159/Q159095/
---

## Q159095: STOP 0x0000001E in Win32k.sys When Exiting Applications

	Article: Q159095
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT exits an application, a blue screen with the following STOP code
	and parameters is generated:
	
	  STOP 0x0000001E (0xC0000005, 0x80118bf4, 0x00000000, 0x00000074).
	
	NOTE: On single processor systems, the parameters in parenthesis will exactly
	match those shown above.
	
	CAUSE
	=====
	
	When the API function CallWndProc is set from the context of a service, it can
	cause the blue screen when applications are closed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
