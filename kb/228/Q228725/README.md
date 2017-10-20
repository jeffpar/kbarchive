---
layout: page
title: "Q228725: XFOR: IMS Outbound Queue Backlog - SMTP Error 499"
permalink: /kb/228/Q228725/
---

## Q228725: XFOR: IMS Outbound Queue Backlog - SMTP Error 499

{% raw %}

	Article: Q228725
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
	
	The Outbound Awaiting Delivery queue of the Microsoft Exchange Server Internet
	Mail Service has a backlog of messages, and the Internet Mail Service is
	repeatedly attempting delivery to a remote host. The remote host can be either a
	firewall with an SMTP daemon installed or an SMTP host.
	
	The Internet Mail Service's Simple Mail Transfer Protocol (SMTP) log contains the
	following conversation between the Internet Mail Service and the host it is
	connecting to:
	
	  4/5/99 10:22:41 AM : A connection to 10..1.1.1 was established.
	
	  4/5/99 10:22:41 AM : IO: |220 r40.domain.com InterLock SMTP Gateway 3.0 ready
	  at Mon, 5 Apr 1999 10:22:41 -0400
	
	  4/5/99 10:22:41 AM : EHLO xxmims2.srv.dom.com
	
	  4/5/99 10:22:41 AM : IO: |250-Hello xxmims2.srv.dom.com, pleased to meet you
	
	  4/5/99 10:22:41 AM : MAIL FROM:bob@dom.com
	
	  4/5/99 10:22:42 AM : IO: |250 bob@dom.com... Sender ok
	
	  4/5/99 10:22:42 AM : RCPT TO:sam@tool.com
	
	  4/5/99 10:22:42 AM : IO: |250 sam@tool.com... Recipient ok
	
	  4/5/99 10:22:42 AM : DATA
	
	  4/5/99 10:22:43 AM : IO: |354 Enter mail, end with "." on a line by itself
	
	  4/5/99 10:22:43 AM : 354 Enter mail, end with "." on a line by itself
	
	  4/5/99 10:22:44 AM : 499 No routing hosts are reachable for tool.com. Message
	  subject: ""Case 27375"". Rescheduling delivery for later.
	
	MORE INFORMATION
	================
	
	A 499 Error: "No routing hosts are reachable," indicates that the TCP connection
	has been dropped. To determine exactly what is happening, a network trace is
	required.
	
	If the host the Internet Mail Service is connecting to sends a reset command to
	the Internet Mail Service, it causes the connection to be dropped.
	
	If the connection is interrupted and a 400 series SMTP response is generated, the
	Internet Mail Service will immediately try to resend the queued messages. The
	behavior of the Exchange Server Internet Mail Service is compliant with RFC-821.
	
	Additional query words: xfor interlock telnet
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
