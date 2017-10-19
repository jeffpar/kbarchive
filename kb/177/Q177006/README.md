---
layout: page
title: "Q177006: XADM: MTA May Fail During Mailstorms Involving Large DLs"
permalink: /kb/177/Q177006/
---

## Q177006: XADM: MTA May Fail During Mailstorms Involving Large DLs

	Article: Q177006
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	If a brief, intense flurry of messages and replies (also known as a mailstorm)
	occurs in an Exchange Server organization and involves one or more very large
	distribution lists (DLs), the Microsoft Exchange message transfer agent (MTA)
	may fail repeatedly. The Event Log will typically show events 2051 and 9405 for
	the MTA preceding the failures, and the exceptions generated will usually all
	have the same error code, 0xe0050803.
	
	MORE INFORMATION
	================
	
	Under certain conditions, a message sent to a very large DL may generate a large
	volume of replies and replies-to-replies over a short period, all addressed to
	the same DL. This can cause a mailstorm that increases the load on messaging
	servers exponentially over a period of minutes or hours. Under these high-stress
	conditions, occasional failures of the MTA as described in this article may
	occur.
	
	WORKAROUND
	==========
	
	Temporarily or permanently place delivery restrictions on the distribution
	list(s) involved in the mailstorm, to prevent the message traffic from
	escalating as multiple users reply to messages sent to the lists. When the
	traffic drops, the MTAs will stop failing. Under extreme conditions, it may be
	necessary to delete the MTA queues or take other urgent action to reduce
	traffic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest Microsoft Exchange
	Server 5.0 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: volume alias traffic storm
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
