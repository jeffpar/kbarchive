---
layout: page
title: "Q260184: XADM: How to Add Storage Limits Columns for Mailboxes"
permalink: /kb/260/Q260184/
---

## Q260184: XADM: How to Add Storage Limits Columns for Mailboxes

	Article: Q260184
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the how to use Exchange Administrator to add a Storage
	Limits column for mailboxes.
	
	MORE INFORMATION
	================
	
	In Exchange Administrator, you can add a Storage Limits column under the mailbox
	resources of the server container. This column reports if there are limits set
	for each particular user, and reports the users status according to the limits.
	The following list defines the limits that are used in the Storage Limits
	column:
	
	- No Checking:
	  Mailbox limits are not enabled for this mailbox.
	
	- Below Limit:
	  Mailbox has limits set, but the mailbox is below all set limits.
	
	- Issue Warning:
	  Mailbox has reached the Issue Warning limit and a warning message is delivered
	  to the mailbox.
	
	- Prohibit Send:
	  Mailbox has reached the Prohibit Send limit and is no longer able to send
	  messages.
	
	- Mailbox Disabled:
	  Mailbox has reached the Prohibit Send and Receive limit and is now set to
	  Disabled. You are not able to send messages from this mailbox, and this
	  mailbox is unable to receive messages.
	
	To add the Storage Limits column to mailboxes:
	
	1. Start the Exchange Administrator.
	
	2. Browse to the Servers container.
	
	3. Click to expand the server.
	
	4. Click to expand Private information store.
	
	5. Click Mailbox Resources.
	
	6. On the View menu, click Columns.
	
	7. Click Storage Limits, and then click Add.
	
	8. Click OK to apply the changes.
	
	The Storage Limits column is now displayed.
	
	Additional query words: mailbox limit disabled
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
