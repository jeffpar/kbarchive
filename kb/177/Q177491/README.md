---
layout: page
title: "Q177491: XADM: Corrupted IPX Packets Cause Information Store to Stop"
permalink: /kb/177/Q177491/
---

## Q177491: XADM: Corrupted IPX Packets Cause Information Store to Stop

{% raw %}

	Article: Q177491
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP1,5.5
	Operating System(s): 
	Keyword(s): exc55 exc5sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Server version 5.0 information store may stop responding at
	random intervals with a Dr. Watson report similar to the following:
	
	  Application exception occurred:
	  App: Store.DBG (pid=240)
	  When: 1/1/1997 @ 12:00:00.000
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	The information store may have received a corrupted IPX packet from the network
	that caused the access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0 Service Pack 1. This problem has been corrected in the latest U.S.
	Service Pack for Microsoft Exchange Server version 5.0. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Windows NT does not support checksums for IPX packets, so rather than corrupt
	packets being dealt with at the network layer, this packet, with corrupt data,
	is being passed on to the information store. The information store cannot deal
	with this corruption and it stops.
	
	
	Additional query words: 5.00 SP1 STORE access violation corrupt IPX
	
	======================================================================
	Keywords          : exc55 exc5sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:5.0 SP1,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
