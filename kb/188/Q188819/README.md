---
layout: page
title: "Q188819: XFOR: OV/VM Connector Returns Different NDRs to PROFS Sender"
permalink: /kb/188/Q188819/
---

## Q188819: XFOR: OV/VM Connector Returns Different NDRs to PROFS Sender

{% raw %}

	Article: Q188819
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sent from PROFS to unknown PROFS addresses in Exchange using the
	LinkAge version 3.2 Connector or the Microsoft Exchange Connector for IBM OV/VM
	version 5.5 may result in different types of non-delivery reports (NDRs) being
	returned.
	
	+-----------------+
	|      PROFS      |
	|                 |
	|   NODE3(USER3)  |
	+--------+--------+
	        |
	        | OV/VM Connector
	        |
	+--------+--------+                +-----------------+
	| Exchange Site 1 | X.400 Connector| Exchange Site 2 |
	|                 +----------------+                 |
	|   NODE1(USER1)  |  with Dir Rep  |   NODE2(USER2)  |
	+-----------------+                +-----------------+
	
	Address Space on OV/VM Connector in Site 1:
	
	        PROFS * cost=1
	
	Address Space on X.400 Connector in Site 1:
	
	        PROFS NODE2(*) cost=1
	
	NOTE: This particular Address Space is not required to reproduce the NDR
	behavior.
	
	Address Space on X.400 Connector in Site 2:
	
	        PROFS * cost=1
	
	1. Messages sent from a PROFS user to an unknown PROFS address in Site 1 result
	  in an NDR similar to the following:
	
	  BADUSER unknown at NODE1; <date and time> not received.
	
	  The conditions leading to the production of this NDR are explained in the
	  CAUSE section (1), below.
	
	2. Messages sent from a PROFS user to an unknown PROFS address in Site 2 result
	  in a different NDR message:
	
	  NODE2 cannot deliver <date and time> to BADUSER.
	
	  This NDR does not indicate that the PROFS address was unknown. The conditions
	  leading to the production of this NDR are explained in the CAUSE section (2),
	  below.
	
	CAUSE
	=====
	
	This behavior is by design. The reason for the differences in the NDR messages
	is that the delivery error is detected at different points in the mail network.
	Depending upon the location in the network, where the problem is detected, and
	the circumstances under which it is detected, the NDR is created. It is not
	possible or desirable to guarantee the same error message for different "bad
	recipients."
	
	A fundamental function of the connectors (PROFS, SNADS, and Notes) is to allow
	the use of Exchange as a messaging backbone. As part of this feature, it is not
	required that every address in every attached messaging system be registered in
	the Exchange directory adjacent to the connector. In fact, Exchange
	administrators may decide, for various reasons, not to enable directory
	synchronization (dirsync) between Exchange and PROFS. However, even if dirsync
	is enabled, directory replication latency may cause a valid address not to be
	immediately present in a directory.
	
	1. When a PROFS user sends an address to NODE1 (BADUSER) in the topology shown
	  above, the connector determines that NODE1 is the PROFS proxy node name by
	  reading the site addressing. The connector categorically knows that all proxy
	  addresses with the node name of NODE1 must be registered in Site 1's Exchange
	  directory. When the address lookup fails, the connector knows the user does
	  not exist and immediately generates the appropriate error code for an unknown
	  address NDR.
	
	  When a PROFS user sends an address to NODE2(BADUSER), the connector knows that
	  NODE2 is not the PROFS proxy node name for the immediate site. Because
	  NODE2(BADUSER) cannot be found in Site 1's directory, the message is
	  submitted to the Exchange backbone for routing.
	
	2. If there is a specific NODE2(*) PROFS Address Space defined on the X.400
	  Connector leading to Site 2, the message transfer agent (MTA) routes the
	  message to the other Site, where the receiving MTA attempts to resolve the
	  address. If the address does not exist in Site 2's directory, the MTA once
	  again routes the message, based on Site 2's GWART. Site 2 has a PROFS *
	  Address Space defined on the X.400 Connector, which causes the MTA to route
	  the message back to Site 1. The MTA in Site 1 eventually routes the message
	  back to the OV/VM Connector based on the PROFS * Address Space defined on the
	  OV/VM Connector. The OV/VM Connector detects that the message is looping and
	  generates the error code that causes the following NDR to be generated:
	
	  NODE2 cannot deliver <date and time> to BADUSER.
	
	  The looping message condition is detected even more quickly when the PROFS *
	  Address Space defined on the OV/VM Connector is the only PROFS Address Space
	  defined in Site 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
