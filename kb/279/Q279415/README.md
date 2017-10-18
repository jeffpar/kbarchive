---
layout: page
title: "Q279415: XCON: MSEXCHANGEMTA 9321 Err Msg When Attempting to Start MTA"
permalink: kb/279/Q279415/
---

## Q279415: XCON: MSEXCHANGEMTA 9321 Err Msg When Attempting to Start MTA

	Article: Q279415
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply the post-Exchange Server 5.5 Service Pack 3 (SP3) hotfix, or
	Exchange Server 5.5 Service Pack 4 (SP4), the Message Transfer Agent (MTA) may
	not start and you may receive a 2140 error message. The following errors may be
	reported in the application event log:
	
	  MSEXCHANGEMTA 9321
	  An RPC communications error occurred. An attempt to listen over RPC has
	  failed. NT Error: 11004. [ BASE IL MAIN BASE 1 504] (14)
	
	  MSEXCHANGEMTA 9266
	  A fatal system error occurred while initializing the MTA. Reboot the computer.
	  If that does not work, contact Microsoft Technical Support. [4 BASE IL MAIN
	  BASE 1 173] (16)
	
	  MSEXCHANGEMTA 9406
	  There is not enough Performance Monitor memory to display the MTA Connections
	  information. Stop attached Performance Monitors and re-start the MTA. [BASE
	  MAIN BASE 1] (14)
	
	RESOLUTION
	==========
	
	To resolve this issue, ensure that the internal network adaptor is the first
	item that is displayed in the binding order:
	
	1. Quit any programs that are running.
	
	2. Right-click Network Neighborhood, and then click Properties.
	
	3. Click the Bindings tab. In the "Show Bindings For" box click All Services.
	
	4. Double-click each listed service to expand it.
	
	5. Under each service, move the internal network adapter to the top of the
	  binding order.
	
	6. In the "Show Bindings For" box, click All Protocols.
	
	7. Double-click each listed protocol to expand it.
	
	8. Under each protocol, move the internal network adapter to the top of the
	  binding order. The final order should be similar to:
	
	   - Network adapter one
	
	   - Network adapter two (if present)
	
	   - Remote Access wide area network (WAN) Wrapper
	
	9. After you have verified that the bindings are set correctly for all services
	  and protocols, click OK. Rebinding then occurs.
	
	10. Click Yes when you are prompted to restart the computer.
	
	MORE INFORMATION
	================
	
	This behavior has been observed on servers that have more than one network
	adapter.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
