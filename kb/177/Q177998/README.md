---
layout: page
title: "Q177998: XFOR: IMAP/POP3 Clients Cannot Reply to Migrated Messages"
permalink: kb/177/Q177998/
---

## Q177998: XFOR: IMAP/POP3 Clients Cannot Reply to Migrated Messages

	Article: Q177998
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the Exchange Migration Wizard is used to migrate mailboxes and messages
	from Microsoft Mail, Collabra Share, CCMail, Groupwise, or any other supported
	messaging system, IMAP and POP3 clients will not be able to reply to the
	original senders of the messages.
	
	CAUSE
	=====
	
	When messages are migrated from another messaging system to Exchange, the
	properties of the original messages are left intact. This includes the address
	of the sender. For example, if a user migrates a message from a Microsoft Mail
	mailbox into Exchange and replies to the message with the Microsoft Outlook
	client, the 10/10/10 MSMail address will be the only option.
	
	IMAP and POP3 clients can only send to SMTP addresses. Because the original
	message never contained an SMTP address, only the display name of the message
	originator will be present. The IMAP or POP3 users will need to update their
	personal address book with the SMTP address of the message originator to enable
	message replies. If this originator does not have an SMTP address, message
	replies will only be possible with the Microsoft Exchange or Outlook client.
	
	This behavior is by product design.
	
	WORKAROUND
	==========
	
	Typing the correct SMTP address for the original sender will allow the IMAP/POP3
	client to reply.
	
	Additional query words: migration ccmail db8 db6 pab
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
