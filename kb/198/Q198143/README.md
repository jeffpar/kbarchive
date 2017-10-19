---
layout: page
title: "Q198143: XFOR: Unique Alias Name Required for POP3/IMAP4 Client Logons"
permalink: /kb/198/Q198143/
---

## Q198143: XFOR: Unique Alias Name Required for POP3/IMAP4 Client Logons

	Article: Q198143
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	POP3 users are may not be able to log into their mailboxes. The following error
	may be returned:
	
	  The requested mailbox is not available on this server.
	
	CAUSE
	=====
	
	The alias for each user's mailbox is the same on the mailbox propertie's general
	page. Further diagnosis will show the following:
	
	  The accounts for the clients are
	  SITE1/user with an SMTP address of user@site1.org.com
	  SITE2/user with an SMTP address of user@site2.org.com
	
	Two Windows NT domains are DOM1 and DOM2, and the two Exchange Servers,
	ORG/SITE1/Server1 and ORG/SITE2/Server2, respectively.
	
	WORKAROUND
	==========
	
	To work around this problem, the Administrator needs to assign unique aliases
	for every user. While the address user@site1.org.com is unique in the case of
	SMTP protocol, it is not unique when a POP3 or IMAP4 client logs on. The
	duplicate alias of 'user' will result in the above error.
	
	Additional query words: ambiguous unique telnet
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
