---
layout: page
title: "Q197182: XFOR: PCMTA Tries to Dial Async Connection for Downstream POs"
permalink: /kb/197/Q197182/
---

## Q197182: XFOR: PCMTA Tries to Dial Async Connection for Downstream POs

{% raw %}

	Article: Q197182
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector (PC) message transfer agent (MTA) incorrectly
	attempts to establish a dial-up connection for downstream Microsoft Mail
	postoffices, even though it was not configured to do so.
	
	WORKAROUND
	==========
	
	To work around this problem, create two Microsoft Mail (PC) MTA instances: an
	Asynchronous and LAN type for connecting PO1, and a LAN type for connecting PO2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Exchange Server 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	Given the following setup:
	
	The Exchange Server computer has two Microsoft Mail (PC) postoffices connectedly
	directly to it, one via the LAN, the second one via an asynchronous connection.
	The first Microsoft Mail (PC) postoffice also has a direct connection to a third
	Microsoft Mail (PC) postoffice via a direct asynchronous connection.
	
	1. Create a Microsoft Mail connection from the Exchange Server computer to PO1
	  and PO2.
	
	2. On the MSMI properties page of the Exchange Server computer, select "Upload
	  Routing" for PO2 to establish PO3 as indirect by way of PO2.
	
	3. Create a Microsoft Mail (PC) MTA instance of type "Async and LAN" to service
	  the Exchange Server computer, PO1, and PO2.
	
	4. Send an e-mail message from the Exchange Server computer, destined for PO3.
	
	Result
	------
	
	The Microsoft Mail (PC) MTA instance will attempt to send the mail using a
	dial-up connection to PO3, even though no information for reaching that
	postoffice is defined in Exchange Server.
	
	Expected
	--------
	
	The Microsoft Mail (PC) MTA instance should deliver the message to PO2 by means
	of the LAN connection, and not attempt to send it directly to PO3.
	
	Additional query words: dialup, DUN, msmail, PCMTA, downstream
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
