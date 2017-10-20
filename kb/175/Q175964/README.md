---
layout: page
title: "Q175964: XCON: MTA Stops Processing Messages and Generates Event ID 210"
permalink: /kb/175/Q175964/
---

## Q175964: XCON: MTA Stops Processing Messages and Generates Event ID 210

{% raw %}

	Article: Q175964
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) might stop processing
	messages and report an access violation when it receives a message from a
	foreign X.400 MTA. The Microsoft Exchange Server will generate a Windows NT
	Event Viewer Event ID 210 with a conversion error of 4097. The MTA will generate
	a Non-Delivery Report (NDR) and return a messages with the error:
	
	  Content-type unsupported.
	
	CAUSE
	=====
	
	This is caused by invalid encoding of a message by the foreign X.400 system. One
	specific cause is the message lists an improper length of the IPN ID. This can
	be detected by generating text event logging with logging level set to maximum
	for the APDU and X400 Services. Parsing the message at fault and reviewing the
	IPN ID will show that the length for the IPN ID field is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: ASN.1 HEX DAT ATT X400
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
