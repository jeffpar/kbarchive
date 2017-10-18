---
layout: page
title: "Q248743: XFOR: How to Migrate Messages from GroupWise 5.x to Exchange"
permalink: kb/248/Q248743/
---

## Q248743: XFOR: How to Migrate Messages from GroupWise 5.x to Exchange

	Article: Q248743
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to migrate e-mail messages from a Novell GroupWise
	5.x mailbox to an existing Microsoft Exchange Server version 5.5 mailbox.
	
	MORE INFORMATION
	================
	
	To migrate e-mail messages to an existing mailbox, you need to create a
	secondary proxy GroupWise address on the mailbox that you want to migrate the
	messages to. This address must match the GroupWise address of the user's mail
	that you want to migrate the messages from.
	
	To migrate e-mail messages to an existing mailbox:
	
	1. Start the Exchange Server Migration Wizard and click "Migrate from Novell
	  GroupWise 5.x".
	
	2. When a dialog box is displayed that asks which migration procedure you want
	  to perform, click "Extract Migration Files only".
	
	3. Select the users that you want to migrate when you are prompted to do so.
	
	4. When a dialog box is displayed that asks what information you would like to
	  migrate, click to clear the "Information to create mailboxes" check box.
	
	5. Complete the migration.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
