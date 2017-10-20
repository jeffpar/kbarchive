---
layout: page
title: "Q155828: XFOR: How the IMC Dial-Up Can Retrieve Mail from an ISP"
permalink: /kb/155/Q155828/
---

## Q155828: XFOR: How the IMC Dial-Up Can Retrieve Mail from an ISP

{% raw %}

	Article: Q155828
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) has an option to enter a
	retrieve mail command. To find this option:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Double-click Configuration in the left-hand pane in the Site containing the
	  IMC.
	
	3. Double-click Connections in the right-hand pane.
	
	4. Double-click the Internet Mail Connector object in the right-hand pane.
	
	5. Click the Dial-Up Connections tab.
	
	6. Under the Mail Retrieval heading or button, the Type Command field is the
	  command to "trigger" the remote system to send mail.
	
	The retrieve mail command (commonly known as the "trigger" command) can be any
	locally executable program. Some Internet Service Providers (ISPs) provide a
	facility for subscribers to "trigger" their inbound mail by performing some
	action like "finger" or "ping". This method for retrieving the mail must be set
	up with the ISP. The ISP will have to configure their system to hold queued SMTP
	messages for you. Commonly, this is known as a relay host. The host will hold
	the queued mail until the command is ran to trigger the host to send to the IMC.
	
	Additional query words: exfaqcon
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
