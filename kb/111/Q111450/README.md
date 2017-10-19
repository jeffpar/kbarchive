---
layout: page
title: "Q111450: Two Token Ring Adapters Forces Source Routing on Both Adapters"
permalink: /kb/111/Q111450/
---

## Q111450: Two Token Ring Adapters Forces Source Routing on Both Adapters

	Article: Q111450
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install two Token Ring network adapters on a Windows NT Server
	computer, it will force both adapters to use Source Routed frames. In a non-
	bridged environment, this isolates the computer to the physical ring it is
	attached to. Removing an adapter from Control Panel does not solve this problem
	as the adapter Registry values remain.
	
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
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
