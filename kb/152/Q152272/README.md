---
layout: page
title: "Q152272: GetSecurityDescriptorGroup() Returns Incorrect Primary Group"
permalink: kb/152/Q152272/
---

## Q152272: GetSecurityDescriptorGroup() Returns Incorrect Primary Group

	Article: Q152272
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications that use the Win 32 call GetSecurityDescriptorGroup() may receive
	an incorrect or invalid primary group security ID (SID) for the referenced
	security descriptor.
	
	CAUSE
	=====
	
	The primary group SID returned is invalid because the Local Security Authority
	(LSA) ignores the value that should be set in the primary group field of an
	object's security descriptor.
	
	RESOLUTION
	==========
	
	The LSA was modified to correctly set the primary group SID on an objects
	security descriptor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
