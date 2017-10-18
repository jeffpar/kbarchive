---
layout: page
title: "Q152992: Netlogon Service Does Not Start After Applying SP4"
permalink: kb/152/Q152992/
---

## Q152992: Netlogon Service Does Not Start After Applying SP4

	Article: Q152992
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Netlogon service on random platforms does not start after applying Service
	Pack 4 (SP4) for Windows NT 3.51.
	
	MORE INFORMATION
	================
	
	When the Netlogon service tries to add itself to the Administrator's group to
	start up, it hits a condition that keeps the Netlogon service from starting.
	This occurs on the first restart after applying SP4. Although the security
	accounts manager (SAM) is apparently upgraded to its new format, the condition
	described above prevents the upgrade from taking place, rendering all further
	access to the SAM impossible. De-installing Service Pack 4, even when it
	preserves SAMSRV.DLL, does not fix the problem since the SAM itself has not been
	upgraded properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
