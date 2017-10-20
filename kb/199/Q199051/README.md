---
layout: page
title: "Q199051: XFOR: Incoming SMTP Messages Missing To, From, and/or Subject"
permalink: /kb/199/Q199051/
---

## Q199051: XFOR: Incoming SMTP Messages Missing To, From, and/or Subject

{% raw %}

	Article: Q199051
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients receiving messages from Internet users may report that the message
	fields To, From, and/or the Subject are populated with information.
	
	MORE INFORMATION
	================
	
	This behavior is possible if the sending mail product does not provide this
	information in the P2 (Body) of the message. This behavior can be reproduced in
	the following manner.
	
	NOTE: <CRLF> represents carriage-return/line-feed or the use of the ENTER
	key.
	
	  telnet <tcp/ip address of mail host> 25
	  helo
	  mail from: sender@example.microsoft.com
	  rcpt to: recipient@example.microsoft.com
	  data
	  <crlf>
	  .
	  <crlf>
	
	For the To, From, and Subject fields to be populated, the sending mailer must
	populate that information in the data section. The behavior described in the
	"Symptoms" section does not break any RFC; however, it is not a recommended,
	preferred, nor appreciated behavior for a mail system to engage in.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
