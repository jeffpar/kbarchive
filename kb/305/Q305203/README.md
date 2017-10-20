---
layout: page
title: "Q305203: XCON: Reply to SMTP Messages Routed Across X.400 Connector Fails"
permalink: /kb/305/Q305203/
---

## Q305203: XCON: Reply to SMTP Messages Routed Across X.400 Connector Fails

{% raw %}

	Article: Q305203
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an X.400 Connector between unreplicated sites with an SMTP
	address space, you can send SMTP messages by using this connection. However, if
	the recipient tries to reply to the message, the recipient immediately receives
	a non-delivery report (NDR), which appears in the following format:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:	Testmail
	     Sent:	20.07.01 17:26
	
	  The following recipient(s) could not be reached:
	
	     'TEST1' on 20.07.01 17:26
	           The recipient name is not recognized
		
	  The MTS-ID of the original message is: c=US;a=;p=SECONDORG;l=MUSICHALL-010720152543Z-3
	  MSEXCH:MSExchangeMTA:BAYBERRY:MUSICHALL
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	Mail that you send over the connector contains the sender's address in two
	different formats depending on the connector's settings of the sending server:
	
	- If you have enabled the Allow MS Exchange Content option on the Advanced tab
	  in the connector's properties dialog box, the mail contains the sender's
	  distinguished name.
	
	- If the option is not enabled, the mail contains the sender's X.400 Connector
	  name.
	
	In the first case, a reply to the message fails because the two sites are not
	replicated and therefore the distinguished name is not recognized. In the second
	case, a reply fails because there is no X.400 Connector address space that is
	specified on the connector.
	
	To work around this issue, disable the Allow MS Exchange Content option on both
	sides of the connection and specify the appropriate X.400 address spaces.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
