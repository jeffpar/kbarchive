---
layout: page
title: "Q173510: XCON: NDR Sent to Originator Instead of DL Owner"
permalink: kb/173/Q173510/
---

## Q173510: XCON: NDR Sent to Originator Instead of DL Owner

	Article: Q173510
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message to a distribution list (DL) that is larger than the
	established message size limit for that DL, a non-delivery report (NDR) is
	generated and sent back to you, the message originator, regardless of the
	options set on the Advanced tab of the DL's Properties dialog box. For example,
	you send a 50-KB message to a DL called Test that has a maximum message size
	restriction of 25 KB. Also, on the Advanced tab, Distribution List options, the
	Report to message originator option is disabled (unavailable), and the Report to
	distribution list owner option is enabled. Instead of the DL owner receiving an
	NDR as expected, you, the originator,
	receive the NDR.
	
	CAUSE
	=====
	
	The Report-to-Owner and Report-to-Sender fields that direct this action do not
	apply to DLs but only to users. When an oversized message is sent to a DL, the
	message transfer agent (MTA) checks the message size and sends the NDR back
	before the DL expansion process takes place. In this case, only the default
	Report-to- Sender function is called, and the NDR goes to the originator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: dl expand content
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Solution Type     : kbpending
	
	=============================================================================
	
