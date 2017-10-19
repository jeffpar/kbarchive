---
layout: page
title: "Q152890: XADM: Installing Server Into Large Existing Site Is Slow"
permalink: /kb/152/Q152890/
---

## Q152890: XADM: Installing Server Into Large Existing Site Is Slow

	Article: Q152890
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of a new Microsoft Exchange Server into an existing Microsoft
	Exchange Site that already has a large number of Servers (about 50) installed
	can take a very long time to complete.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server Setup program tries to replicate the new Microsoft
	Exchange Server's Directory with all of the other Servers in the Site.
	
	WORKAROUND
	==========
	
	Tell the Microsoft Exchange Server Setup program to replicate the new Microsoft
	Exchange Server's Directory only with Microsoft Exchange Server specified in the
	Join an Existing Site dialogue. Then, after the Microsoft Exchange Server Setup
	program is finished, the Microsoft Exchange Knowledge Consistency Checker (KCC)
	will take care of informing the new Microsoft Exchange Server of the other
	Servers in the Site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
