---
layout: page
title: "Q145623: Access Violation in LSASS.EXE On Primary Domain Controller"
permalink: /kb/145/Q145623/
---

## Q145623: Access Violation in LSASS.EXE On Primary Domain Controller

	Article: Q145623
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there are any LAN Manager backup domain controllers (BDC) in your domain and
	more than 251 global groups are defined in the domain, an access violation in
	LSASS.EXE occurs on your primary domain controller (PDC).
	
	CAUSE
	=====
	
	LAN Manager servers can recognize a total of 255 global groups in a domain
	including Local, Admins, Users and Guests groups. If more than 251 global groups
	are defined in the domain, LAN Manager BDCs enter an infinite full
	synchronization state. This state continuously requests the full accounts
	database from the PDC.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
