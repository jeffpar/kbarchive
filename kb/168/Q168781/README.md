---
layout: page
title: "Q168781: XFOR: Sending to SMTP Gets Immediate NDR 550 Error Message"
permalink: /kb/168/Q168781/
---

## Q168781: XFOR: Sending to SMTP Gets Immediate NDR 550 Error Message

{% raw %}

	Article: Q168781
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All users are receiving Simple Mail Transfer Protocol (SMTP) mail; however,
	sending to SMTP addresses results in an immediate non-delivery report (NDR) that
	includes the following error message:
	
	  550 Relaying mail to <recipient address> is not allowed.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Confirm that the information store, the message transfer agent (MTA), and the
	  Internet Mail Service (Internet Mail Connector in version 4.0) services are
	  started, by going to Control Panel and double-clicking Services.
	
	2. Check the configuration of the Internet Mail Service, especially the address
	  space page, which should be a (*) or (a space).
	
	3. Set all the categories of the Internet Mail Service diagnostic logging to
	  maximum, and then send a message and check the event viewer for errors
	  related to the Internet Mail Service.
	
	4. Check the four queues of the Internet Mail Service, and the Exchange Server \
	  Message Transfer Agent \ Internet Mail Service (Server Name) queue. If there
	  are no messages in any of the queues, then the problem may be with the
	  Internet Service Provider (ISP). Go to step 5.
	
	  If there is no MTA object under the sender's server, the Exchange Server
	  computer is a Standard Edition, and you must use the Performance Monitor \
	  Qlength counter of the MSExchangeIMC Object in order to check the Internet
	  Mail Service queues.
	
	5. Send a message to the sender's ISP. If the sender does not receive the
	  immediate NDR, then ask the sender to call his or her ISP and ask whether he
	  or she received a message. If the ISP received the message, then the Internet
	  Mail Service is able to send, and most probably the ISP is not routing or
	  resolving names.
	
	
	6. Run the NSLookup utility to confirm the domain name, MX records, and the
	  A-Records of the sender's ISP.
	
	7. Run the Telnet command to port 25 of the ISP according the Knowledge Base
	  article: Q153119, "XFOR: Telnet to Port 25 of IMC to Test IMC Communication."
	
	8. If the sender is using DNS, modify the Internet Mail Service to forward all
	  messages to the host. If this works, then the Domain Name resolution is the
	  cause of the problem.
	
	9. If all the above fails, then delete and recreate the Internet Mail Service.
	
	NOTE: After every step, stop and restart the Internet Mail Service and see
	whether all messages are being delivered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
