---
layout: page
title: "Q253306: XCLN: cc:Mail Mailbox Receives Mail after Migration to Exchange"
permalink: kb/253/Q253306/
---

## Q253306: XCLN: cc:Mail Mailbox Receives Mail after Migration to Exchange

	Article: Q253306
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration Wizard to migrate all users from cc:Mail to Microsoft
	Exchange Server, the cc:Mail mailboxes remain in the cc:Mail post office. When a
	cc:Mail user sends a message to a user whose mailbox has been migrated, the
	message goes to the cc:Mail mailbox instead of to the mailbox on Exchange
	Server.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Migration Wizard does not remove mailboxes and their contents from the
	cc:Mail system but copies them to Exchange Server and creates a mailbox for the
	migrated recipient. When the migration is complete, custom recipients that are
	associated with the cc:Mail mailbox for the same user are deleted. The new
	Exchange mailbox now has two cc:Mail addresses:
	
	- The primary address, displayed in bold formatting, is the user's Exchange
	  Server address in cc:Mail format.
	
	- The secondary address is the user's old cc:Mail address.
	
	This allows mail addressed to the user from an outdated personal address book to
	be successfully delivered.
	
	To allow for recovery in case of a migration failure, the cc:Mail address for the
	user is not deleted from the mail directory. No changes are made to the cc:Mail
	data, and the old mailbox is not deleted from the cc:Mail post office.
	
	After you confirm that the mailboxes are migrated successfully, manually remove
	or delete the user from the cc:Mail post office. During the next directory
	synchronization cycle, dirsync reports that a new Exchange user is created. Then
	Import.exe creates an entry for the migrated user in the cc:Mail directory, and
	mail is now delivered to the new Exchange Server mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
