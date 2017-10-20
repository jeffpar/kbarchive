---
layout: page
title: "Q250507: XIMS: NDRs Generated with &lt;&gt; (Blank or Null) Reverse"
permalink: /kb/250/Q250507/
---

## Q250507: XIMS: NDRs Generated with &lt;&gt; (Blank or Null) Reverse

{% raw %}

	Article: Q250507
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Exchange Server generates a non-delivery report (NDR), Exchange Server uses
	either the System Administrator or Postmaster account of the Internet Mail
	Service in the From field of the Multipurpose Internet Mail Extensions (MIME)
	message. However, the protocol logging or network trace contains the following
	commands:
	
	  HELO <domain>
	  250 OK
	  MAIL FROM: <>
	  250 OK - mail from <>
	
	In other words, the reverse path of the NDRs is null.
	
	MORE INFORMATION
	================
	
	This behavior is by design and is in accordance with Request for Comments (RFC)
	821, section 3.6. This behavior prevents loops of NDRs that might otherwise
	occur if the original sender does not exist.
	
	Excerpt from RFC 821:
	
	  This notification message must be from the server-SMTP at this host. Of
	  course, server-SMTPs should not send notification messages about problems
	  with notification messages. One way to prevent loops in error reporting is to
	  specify a null reverse-path in the MAIL command of a notification message.
	  When such a message is relayed it is permissible to leave the reverse-path
	  null. A MAIL command with a null reverse-path appears as follows:
	
	  MAIL FROM:<>
	
	If the protocol log or network trace shows that the connection is dropped (SMTP
	Error 499) after the MAIL FROM: <> command is issued, troubleshoot the
	problem. For additional information about how to troubleshoot the problem, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q198981 XFOR: SMTP Messages Not Being Delivered to Certain Domains
	
	  Q159211 Diagnoses and Treatment of Black Hole Routers
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
