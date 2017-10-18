---
layout: page
title: "Q152852: XADM: Steps to Move User and Inbox Assistant Rules"
permalink: kb/152/Q152852/
---

## Q152852: XADM: Steps to Move User and Inbox Assistant Rules

	Article: Q152852
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 18-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The steps below outline the method for moving a user's mailbox and Inbox
	Assistant Rules from Site 1 to Site 2.
	
	MORE INFORMATION
	================
	
	1. Log on to the mailbox that needs to be moved.
	
	2. Download all messages to a PST.
	
	3. Create the mailbox in Site 2.
	
	4. Log on to the new mailbox in Site 2 and define the moved .PST name in the
	  information services for this mailbox.
	
	  Notes:
	
	   - Be sure you also move the Schedule+ information to a .SCD file and import
	     it into the new mailbox, if necessary.
	
	   - Also, if necessary, remove the old mailbox from Distribution Lists and add
	     the new mailbox to the Distributions Lists.
	
	5. If the new mailbox name is the same as the old mailbox name, delete the old
	  mailbox. If mailbox names will be different, then leave the old mailbox in
	  place with an auto forward rule to the new mailbox, and a reply to sender
	  telling them to update his or her Personal Address Book. After the user has
	  successfully moved and everything is working fine in the new location, you
	  can safely delete the old mailbox.
	
	Moving Inbox Assistant Rules
	----------------------------
	
	You can save the rules by copying them to a folder on a local .PST
	
	- Select a folder where you want to copy the Inbox Assistant rules.
	
	- Click Application Design on the Tools menu. Then select Copy Folder Design.
	
	- Select the Inbox from your Microsoft Exchange Server mailbox.
	
	You can reverse these steps to copy the rules back to the Inbox on the new
	mailbox.
	
	1. Select Inbox (the location where you want to copy TO).
	
	2. Click Application Design on the Tools menu. Then select Copy Folder Design.
	
	3. Select the new folder from your local .PST.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
