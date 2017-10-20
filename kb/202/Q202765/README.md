---
layout: page
title: "Q202765: XIMS: Using IMS Mail: &quot;503 Sender Already Specied&quot;"
permalink: /kb/202/Q202765/
---

## Q202765: XIMS: Using IMS Mail: &quot;503 Sender Already Specied&quot;

{% raw %}

	Article: Q202765
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Occasionally, messages from Exchange Server through the Internet Mail Service
	(Internet Mail Connector in version 4.0) to a remote SMTP e-mail domain are
	rejected. A non-delivery report (NDR) is returned to the sender with the
	following error message:
	
	  503 Sender already specified.
	
	CAUSE
	=====
	
	Exchange Server makes connections to remote SMTP mailers or relay hosts to
	deliver SMTP mail. If more than one message is queued to a remote domain,
	Exchange Server can send multiple messages during a single connection. If the
	remote SMTP server is not RFC-compliant, it improperly rejects the delivery of a
	second message from the Internet Mail Service during the course of a single
	connection. Then it sends the NDR mentioned above.
	
	The sequence of events is as follows:
	
	- Exchange Server's Internet Mail Service finishes the first message and
	  receives a "250 OK" acknowledgement that the message was accepted.
	
	- The Internet Mail Service then attempts to send the second message in this
	  same connection by sending the MAIL FROM command.
	
	- The remote host improperly rejects the message with the "503 Sender already
	  specified" error message. This is not RFC 821 compliant according to section
	  4.1.1.
	
	WORKAROUND
	==========
	
	Although this is a problem with the remote system, you can correct the problem
	by setting the Internet Mail Service to send only one message for each
	connection. This is a global setting that affects the performance of the
	Internet Mail Service because it no longer sends multiple messages during a
	single connection to any remote domain. This may be a minor issue for some
	e-mail networks and a preferable option to the above problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
