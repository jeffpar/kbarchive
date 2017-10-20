---
layout: page
title: "Q237961: XFOR: IMAP4 and POP3 Users Cannot Retrieve Messages"
permalink: /kb/237/Q237961/
---

## Q237961: XFOR: IMAP4 and POP3 Users Cannot Retrieve Messages

{% raw %}

	Article: Q237961
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	POP3 and IMAP4 users receive error messages when trying to retrieve messages
	from the Exchange Server computer. The following error message may be received
	by an IMAP4 user in Outlook Express 4.0:
	
	  ! Updated message flags from the IMAP server could not be saved to disk. If
	  this persists, right-click this folder node, select 'Properties' and push the
	  'Delete' button under the 'Local Files' tab.
	
	  Clicking OK may reveal the following error message:
	
	  An IMAP command did not complete successfully. Could not download new
	  messages from the IMAP server.
	
	  Clicking the Details button may reveal the following:
	
	  The requested item could not be found.
	
	The following error message may be received by an IMAP4 user in Outlook Express
	5.0:
	
	  Could not download new messages from the IMAP server.
	
	  Clicking the Details button may reveal the following:
	
	  The requested item could not be found.
	
	The following error message may be received by an IMAP4 user when starting
	Outlook Express 5.0:
	
	  Some errors occurred while processing the requested tasks. Please review the
	  list of errors below for more details.
	
	  Clicking the Details button may reveal the following:
	
	  Header download for the 'Inbox' folder did not complete. Could not download
	  new messages from the IMAP server. Account: 'Account', Server: Servername',
	  Protocol: IMAP, Server Response: 'The requested item could not be found.',
	  Port: 143, Secure(SSL): No, Error Number: 0x800CCCD2
	
	The following error message may be received by a POP3 user in Outlook Express 4.0
	or 5.0:
	
	  Some errors occurred while processing the requested tasks. Please review the
	  list of errors below for more details.
	
	  Clicking the Details button may reveal the following
	
	  Message number 1 could not be retrieved. Account: 'Account', Server:
	  'Servername', Protocol: POP3, Server Response: '-ERR The requested item could
	  not be found.', Port: 110, Secure(SSL): No, Server Error: 0x800CCC90, Error
	  Number: 0x800420CD
	
	  where 'Account' is the account created in Outlook Express and 'Servername' is
	  the name of the Exchange Server computer.
	
	The following error message may be received by a user running Windows CE Inbox
	version 3.0:
	
	  A critical error has occurred. Error Retrieving Message. The message may have
	  been either moved or deleted.
	
	For IMAP4 users, the following event appears in the application event log
	
	  Event ID: 13000
	  Source:MSExchange IMAP4
	  Type: Error
	  Category: Client Action
	  Description:
	
	  An error (0x8004010f) occurred while rendering a message for download on
	  mailbox <Mailbox>.
	
	-and-
	
	For POP3 users, the following event appears in the application event log
	
	  Event ID: 11302
	  Source: MSExchange POP3
	  Type: Error
	  Category: Client Action
	  Description:
	
	  An error (0x8004010f) occurred while rendering a message for download on
	  mailbox <Mailbox>.
	
	where <Mailbox> is the mailbox receiving the IMAP4 or POP3 error messages.
	
	STATUS
	======
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	
	Additional query words: Intel I386 alpha windows ce inbox wince handheld palm-size pc pocket pmail eudora netscape communicator navigator
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
