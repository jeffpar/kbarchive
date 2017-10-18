---
layout: page
title: "Q186289: XCON: Least-cost Routing Doesn't Consider Open-retry State"
permalink: kb/186/Q186289/
---

## Q186289: XCON: Least-cost Routing Doesn't Consider Open-retry State

	Article: Q186289
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When message transfer agent (MTA) least-cost routing is enabled, as described in
	Knowledge Base article Q166567, the routing algorithm does not take into account
	the open-retry state of the connector. Therefore, when a message is sent to be
	re-routed, the normal load-balancing logic is used, and the MTA tends to send
	the message back to the connector that is in the retry state. Additionally, the
	way in which the MTA performs load balancing now tends to favor the first
	selected connector in the early stages of message delivery, and then this tapers
	off to a more equal ratio as message flow and time increase.
	
	For example, in the following scenario, there are three servers in two sites:
	
	  Site #1, Server #1
	  Site #2, Server #2
	  Site #2, Server #3
	
	and two X.400 Connectors:
	
	  Connector #1 between Server #1 and Server #2, cost of 1 and with least- cost
	  routing enabled.
	  Connector #2 between Server #1 and Server #3, cost of 1 and with least- cost
	  routing enabled.
	
	1. When messages are sent from Site #1 to Site #2, the messages should
	  load-balance over Connector #1 and Connector #2.
	
	2. If Server #2 is shut down and messages sent from Site #1 to Site #2, messages
	  should be sent over Connector #2 (after Connector #1 starts open-retry).
	
	CAUSE
	=====
	
	The only scenario affected by the problem should be least-cost routing where
	multiple links of equal lowest cost exist. The reason is that for least-cost
	routing, the MTA does not filter connectors based on whether they are in
	open-retry mode.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
