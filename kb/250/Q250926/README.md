---
layout: page
title: "Q250926: XFOR: GroupShield Interferes with POP3/IMAP with SSL Enabled"
permalink: /kb/250/Q250926/
---

## Q250926: XFOR: GroupShield Interferes with POP3/IMAP with SSL Enabled

{% raw %}

	Article: Q250926
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user is attempting to download mail from Microsoft Exchange Server by
	means of POP3 or IMAP with Secure Sockets Layer (SSL) enabled, the user may get
	the following error message even though the server certificates have been
	installed properly:
	
	  A secure connection to the server could not be established.
	  Account: 'accountname' Server: 'servername', Protocol: POP3, Port: 995, Secure
	  (SSL): Yes, Error Number: 0x800CCC1A
	
	You may also see the following events logged in the Exchange Server event log:
	
	  EventID: 11508
	  Source: MSExchangePOP3
	  Description: Accept clients on POP3 interface failed in function
	  HrRegisterProtocol with error 0x2741.
	
	  EventID: 1194
	  Source: MSExchangeIS
	  Description: Accept client on external interface POP3 failed with error
	  0x80004005.
	
	  EventID: 11506
	  Source: MSExchange IMAP4
	  Description: Accept clients on IMAP4 interface failed in function
	  HrRegisterProtocol with error 0x2741.
	
	  EventID: 1194
	  Source: MSExchangeIS
	  Description: Accept client on external interface IMAP4 failed with error
	  0x80004005.
	
	CAUSE
	=====
	
	This problem can be caused if the Network Associates GroupShield for Microsoft
	Exchange virus program is running on the server containing the POP3 mailbox.
	
	RESOLUTION
	==========
	
	Completely uninstall GroupShield and attempt to connect to Exchange Server using
	the POP3 client with SSL enabled. After you verify that this is successful, you
	should be able to re-install GroupShield and have no further problems.
	
	WORKAROUND
	==========
	
	Disabling SSL enables the client to download mail if GroupShield cannot be
	immediately uninstalled and reinstalled.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
