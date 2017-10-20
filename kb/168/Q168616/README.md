---
layout: page
title: "Q168616: XFOR: Messages in the IMC Outbound Queue Waiting Delivery"
permalink: /kb/168/Q168616/
---

## Q168616: XFOR: Messages in the IMC Outbound Queue Waiting Delivery

{% raw %}

	Article: Q168616
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may discover the following errors in the Windows NT Event Viewer Application
	log:
	
	  Event ID - 2079, Source: MSExchangeIS Private, Category: Transport,
	  Type: Stop, Description, Unable to submit, send, or transfer out a
	  message.
	  No recipient was found in the envelope.
	
	  Event ID - 2219, Details, Source: MSExchangeMTA, Category: Field
	  Engineering, Type: Stop Description The MTA is running recovery on the
	  internal message database because the MTA was not shut down cleanly.
	  This operation may take some time. Status updates will be written to
	  the Windows NT Event Log. [%1 %2 %3 %4] (14)
	
	CAUSE
	=====
	
	Out of Office messages are left in the Internet Mail Connector Outbound Messages
	Waiting Delivery queue.
	
	RESOLUTION
	==========
	
	Disable the Out Of Office Responses to the Internet by starting the Microsoft
	Exchange Server Administrator program and following these steps:
	
	1. Select the Configuration container and then select the Connections container.
	
	2. Open the properties page of the Internet Mail Connector (IMC) and click the
	  Internet Mail tab.
	
	3. Under Interoperability, check the Disable Out Of Office Responses to the
	  Internet check box.
	
	If this problem is associated only with messages that are addressed to sites with
	multiple MX records, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q169781 XFOR: IMC Fails to Send Mail to Domains with Multiple MX Records
	
	MORE INFORMATION
	================
	
	To confirm that these messages are OOF replies, start the Exchange Server
	Administrator program and increase the IMC logging (SMTP protocol) to maximum.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
