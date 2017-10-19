---
layout: page
title: "Q145794: XADM: 1993 Private Extension Support on Per-Message Envelope"
permalink: /kb/145/Q145794/
---

## Q145794: XADM: 1993 Private Extension Support on Per-Message Envelope

	Article: Q145794
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from a DEC All-in-One mail system to a Microsoft
	Exchange Server with the X.400 Connector, the message may not get to the
	intended Microsoft Exchange Recipient and the original sender may not receive a
	Non-Delivery Report (NDR). No errors will be recorded in the Windows NT Event
	Log.
	
	However, messages sent from Microsoft Exchange to DEC All-In-One recipients flow
	fine. Additionally, messages sent from Microsoft Exchange to DEC with a read
	receipt requested will successfully return the read notification back to the
	Microsoft Exchange sender.
	
	MORE INFORMATION
	================
	
	The 1993 X.400 recommendation supports a per-message envelope Private Extension.
	Digital Equipment's latest version of Mailbus400 MTA (v2.0) implements this
	extension. Microsoft Exchange Server version 4.0 does not support per-message
	envelope Private Extensions. Service Pack 2 (SP2) and Microsoft Exchange Server
	version 4.0a add support for per-message envelope and report content Private
	Extensions.
	
	NOTE: Microsoft Exchange Server does not support per-recipient Private
	Extensions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: dec digital mailbus xmr gateway x400
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
