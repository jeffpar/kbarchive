---
layout: page
title: "Q298836: XIMS: Exchange Server 5.5 Generates Error Messages"
permalink: kb/298/Q298836/
---

## Q298836: XIMS: Exchange Server 5.5 Generates Error Messages

	Article: Q298836
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Post Office Protocol version 3 (POP3) or Internet Message Access Protocol,
	Version 4rev1 (IMAP4) client polls an Exchange Server 5.5 mailbox that contains
	more than 65,535 messages, the client session may either time out, or the user
	may receive an error message.
	
	In addition, the following event will be logged in the application event log on
	the server:
	
	  Event ID: 13005
	  Event Source: MSExchange Pop3 Interface
	  Event Category: Authentication
	  Event Type: Error
	  Description:
	  Logon attempt by DOMAIN\user from 127.0.0.1 to domain/mailbox has failed:
	  EcQueryRows() call failed with error Unspecified error.
	
	CAUSE
	=====
	
	Microsoft Exchange Server 5.5 does not support using a POP3 or IMAP4 client to
	read mailboxes containing more than 65,535. This is a known design limitation.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Either use a MAPI client to read the mailbox or install mailbox agents or
	  event sinks to process and remove mail in real time. If you do so, you avoid
	  the possibility of a mailbox reaching this size limit.
	
	-or-
	
	- Upgrade to Microsoft Exchange 2000 Server; this problem has been resolved in
	  Exchange 2000.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	If you establish a POP3 session through Telnet to the Exchange Server and
	connect to a mailbox with more than 65,535 items in the inbox, you may receive
	an error message similar to the following after you issue the pass command:
	
	  telnet <server> 110
	  +OK Microsoft Exchange POP3 server version 5.5.2655.20 ready
	
	  user domain\user/mailbox
	  +OK
	
	  pass <password>
	  -ERR Unspecified error
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
