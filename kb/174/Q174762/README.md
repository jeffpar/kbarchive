---
layout: page
title: "Q174762: XADM: Servers Without Public Store Require Anonymous Mailbox"
permalink: /kb/174/Q174762/
---

## Q174762: XADM: Servers Without Public Store Require Anonymous Mailbox

{% raw %}

	Article: Q174762
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In order to allow anonymous IMAP4 clients access to a Microsoft Exchange Server
	computer that has no Public Information Store, a mailbox must be created in the
	Private Information Store to act as the anonymous account. This account is then
	specified on the Anonymous tab of the IMAP4 protocol's Properties dialog box.
	
	MORE INFORMATION
	================
	
	When allowing anonymous access via the IMAP4 protocol on an Exchange Server
	computer, an account called Anonymous is specified by default. If the server
	does not contain a Public Information Store, a mailbox in the Private
	Information Store must be created for anonymous user(s) to use to log on.
	
	Additional query words: POP3
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
