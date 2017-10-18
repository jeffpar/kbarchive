---
layout: page
title: "Q186235: XFOR: NDR and Event 142 Sending to Lotus cc:Mail Recipient"
permalink: kb/186/Q186235/
---

## Q186235: XFOR: NDR and Event 142 Sending to Lotus cc:Mail Recipient

	Article: Q186235
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message to a Lotus cc:Mail recipient after installing the
	Microsoft Exchange Connector for Lotus cc:Mail, you may receive a non- delivery
	report (NDR) and an event similar to the following may appear in the event log:
	
	  Event: 142
	  Source: MSExchangeMTA
	  Description: The MTA was unable to route to recipient <recipient>. The
	  message (MTS-ID): <message>, recipient: <recipient>, recipient number
	  <n>. Check the routing table for a possible incorrect routing
	  configuration. [MTA DISP:ROUTER 10 119] (12)
	
	CAUSE
	=====
	
	This problem can occur when the Address Space tab in the properties for the
	connector is not configured properly. By default, the Address Space tab does not
	contain any entries. You must manually add the appropriate entries for the
	connector to function properly.
	
	WORKAROUND
	==========
	
	To resolve this problem, follow these steps:
	
	1. In the Exchange Administrator program, select the appropriate Exchange
	  Connector for Lotus cc:Mail, and then click Properties on the File menu.
	
	2. Click the Address Space tab and then verify that an entry exists for the
	  address * (asterisk). The entry should look similar to the following:
	
	     Type     Address   Cost
	     -----------------------
	     CCMAIL   *         1
	
	3. In the Exchange Administrator program, select the Site Addressing object, and
	  then click Properties on the File menu.
	
	4. Click the Routing tab, and then click Recalculate Routing.
	
	5. Attempt to send a message to the cc:Mail recipient again.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
