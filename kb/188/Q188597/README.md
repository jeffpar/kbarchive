---
layout: page
title: "Q188597: XCON: Delivery Report Discarded Over 1984 X.400 Connector"
permalink: /kb/188/Q188597/
---

## Q188597: XCON: Delivery Report Discarded Over 1984 X.400 Connector

{% raw %}

	Article: Q188597
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user sends a message over an X.400 Connector configured in 1984 mode and
	requests a delivery receipt. The message is delivered to the remote user, the
	report is returned, but it is discarded by the sending user's store, and the
	sending user does not receive the report. The following event is logged by the
	store:
	
	  Computer: ComputerName
	  Event-ID: 2026
	  Source  : MSExchangeIS Private
	  Type    : Information
	  Category: Transport General
	
	  The delivery of a report failed due to error 00000BB8. The report has
	  been deleted.
	
	CAUSE
	=====
	
	The delivery report has an invalid X.400 format. This happens when the message
	transfer agent (MTA) that receives the message over the 1984 link (the
	"Connector Server") routes it to another MTA in the site for delivery, and the
	recipient has an Alternative Recipient set. The delivering MTA delivers the
	message correctly and creates the delivery report. However, the Actual Recipient
	attribute in the report contains only the Directory Name, and not the O/R
	Address of the recipient. When the report reaches the connector server, it must
	be downgraded to 1984 format for transfer over the connector. The Directory Name
	is removed, and the Actual Recipient attribute consists of only an empty
	Standard Attributes set, an invalid structure.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
