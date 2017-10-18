---
layout: page
title: "Q160494: DNS Zone Transfer Fails After WINS Record Added"
permalink: kb/160/Q160494/
---

## Q160494: DNS Zone Transfer Fails After WINS Record Added

	Article: Q160494
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have added Windows Internet Name Service (WINS) resource records to your
	Domain Name System (DNS). Now, zone transfers fail between Windows NT 4.0
	servers. The following error is displayed:
	
	  ID 1601 Source: DNS Warning: DNS Server encountered bad packet from <IP of
	  Primary>. Processing leads beyond packet length.
	
	CAUSE
	=====
	
	WINS resource record lengths are miscalculated.
	
	RESOLUTION
	==========
	
	As a temporary workaround, you can stop and start the DNS service on the
	primary. The zone transfer should take place after restarting the service.
	
	A permanent fix for this problem is included in Windows NT 4.0 Service Pack 2 or
	later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
