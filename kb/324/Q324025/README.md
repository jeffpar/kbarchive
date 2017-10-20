---
layout: page
title: "Q324025: XCON: POP3 &amp; IMAP4 Clients Can't Log On, Event ID 13003 Occurs"
permalink: /kb/324/Q324025/
---

## Q324025: XCON: POP3 &amp; IMAP4 Clients Can't Log On, Event ID 13003 Occurs

{% raw %}

	Article: Q324025
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Post Office Protocol 3 (POP3) and Internet Message Access Protocol, Version
	4rev1 (IMAP4) clients may not be able to log on to Exchange 5.5 Server.
	Additionally, an event similar to the following is recorded in the application
	event log:
	
	  Event ID: 13003
	  Event Type: MSExchangePOP3
	  Event Source:
	  Event Category: Authentication
	  Description:
	
	  Hr lookup credentials () call failed with error logon failure. Unknown user
	  name or bad password.
	
	CAUSE
	=====
	
	This behavior may occur if the Exchange Server mailbox alias is different from
	the Microsoft Windows user account name.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods, as appropriate to your
	situation:
	
	- Use the following format for the user account name on the client, where
	  <Domain> is the name of the domain, <UserName> is the Windows
	  user account name, and <Mailbox> is the Exchange Server mailbox alias:
	
	  <Domain\UserName\Mailbox>
	
	-or-
	
	- Change the Exchange Server mailbox alias to use the same name as the Windows
	  user account name. By doing so, users require only one account name.
	
	NOTE: The <Domain\UserName\Mailbox> format is used by and works with
	Microsoft Outlook Express clients. Results may vary with other clients.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot a similar issue, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q236032 OLEXP: Outlook Express and Outlook Repeatedly Prompt You for Your
	  Password
	
	  Q199274 XCON: Event 13005 During POP3 Logon
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
