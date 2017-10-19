---
layout: page
title: "Q127908: Granularity Value Changes After Installing Service Pack 2"
permalink: /kb/127/Q127908/
---

## Q127908: Granularity Value Changes After Installing Service Pack 2

	Article: Q127908
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you update Windows NT version 3.5 to Service Pack 2, the Granularity value
	for Sizing Grid changes when you choose Desktop in Control Panel, log off and
	log back on, and choose Desktop in Control Panel again. The Granularity value in
	Desktop of Control Panel increases in increments of 8. For example, if
	Granularity is set to 1, it changes to 8 the next time you choose Desktop in
	Control Panel after you log off and log back on (and from 8 to 64 even though
	the maximum value for Granularity is 49).
	
	CAUSE
	=====
	
	This problem only occurs if you choose Desktop in Control Panel after each
	successive logon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
