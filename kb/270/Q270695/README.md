---
layout: page
title: "Q270695: XADM: MTA Logs Content Conversion Error 4096 for Inbound Message"
permalink: /kb/270/Q270695/
---

## Q270695: XADM: MTA Logs Content Conversion Error 4096 for Inbound Message

{% raw %}

	Article: Q270695
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When receiving a message from a foreign X.400 system, the Microsoft Exchange
	Server message transfer agent (MTA) may log an event similar to the following:
	
	  Source : MSExchangeMTA
	  Type : Warning
	  Category : X.400 Service
	  Event ID: 210
	  Description:
	  An internal MTA error occurred. Content conversion for message
	  C=C;A=admd;P=prmd;L=ID failed. Conversion error: 4096, Object at fault:
	  0600006C, Original content type: 56010A01, New content type:
	  2A864886F7140501. PDU dump reference 23224 [MTA DISP:RESULT 22 112] (14)
	
	After this event, you also see Event ID 290, which indicates that a non-delivery
	report (NDR) was sent for the message.
	
	CAUSE
	=====
	
	The inbound message contained an attachment of zero length. The Exchange MTA was
	unable to decode this attachment correctly, resulting in the conversion
	failure.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
