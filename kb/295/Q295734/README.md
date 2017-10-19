---
layout: page
title: "Q295734: XCON: NDR When  SMTP Messages Are Relayed to a Domino Server"
permalink: /kb/295/Q295734/
---

## Q295734: XCON: NDR When  SMTP Messages Are Relayed to a Domino Server

	Article: Q295734
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Internet Information Server (IIS) Simple Mail Transfer Protocol (SMTP)
	service is configured to relay SMTP messages to a Lotus Domino R5.x server, the
	message originator may receive a non-delivery report (NDR) that is similar to
	the following message:
	
	  This is an automatically generated Delivery Status Notification.
	
	  Delivery to the following recipients failed.
	  <user-of-lotus-domino>@<company>.com
	
	CAUSE
	=====
	
	This issue can occur if the Domino server has not been configured to support
	8-bit MIME-formatted messages. When the SMTP service receives an 8-bit
	MIME-formatted message that needs to be routed to a Domino server, the SMTP
	service initiates an SMTP connection to the Domino server. After the SMTP
	service sends an EHLO command, Domino responds with its list of supported ESMTP
	verbs. If "8BITMIME" is not included in the list of support verbs, the SMTP
	service cannot deliver the message to the Domino recipient because Domino has
	not been configured to understand the message format. The SMTP service then
	sends the RSET command to Domino to reset the SMTP connection. Finally, the SMTP
	service sends an NDR to the original sender. To view the SMTP commands that are
	sent, use a network packet analyzer, such as Microsoft Network Monitor.
	
	RESOLUTION
	==========
	
	Top resolve this issue:
	
	1. On the Domino server, open the server's Configuration Document.
	
	2. Click the Router/SMTP tab, and then click the Advanced tab.
	
	  The ESMTP verbs that can be enabled are displayed in the "Commands and
	  Extensions" section; one of the verbs is "8BITMIME".
	
	MORE INFORMATION
	================
	
	To check to see if the Domino server supports a certain extension, telnet to
	port 25 of the Domino server, and then type "EHLO domain.com" (without the
	quotation marks). You can perform the same telnet procedure against the SMTP
	service to see a larger set of supported MIME types. The SMTP service cannot
	down-convert an 8-bit MIME message to 7-bit.
	
	
	
	Additional query words: smtpsvc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbExchangeSearch kbiis500 kbiis400 kbExchange2000Search kbExchange2000Serv kbExchange2000EntServ
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
