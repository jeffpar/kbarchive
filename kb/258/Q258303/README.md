---
layout: page
title: "Q258303: XFOR: Notes Migrated Mailboxes Not Backed Up w. BackupExec 7.3"
permalink: kb/258/Q258303/
---

## Q258303: XFOR: Notes Migrated Mailboxes Not Backed Up w. BackupExec 7.3

	Article: Q258303
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you migrate mailboxes from Lotus Notes to Exchange Server 5.5 by using .pst
	files, VERITAS BackupExec 7.3 may not back up some mailboxes.
	
	The following error messages may be logged three times:
	
	   - Backup started on 3/16/00 at 10:44:24 PM. Access denied to file ? LastName ,
	  FirstName ?Top of Information Store?Sent Items?
	
	   - Unable to open the item LastName , FirstName ?Top of Information Store?Sent
	  Items?
	
	Both error messages are followed by the text of the body of the message.
	
	CAUSE
	=====
	
	This issue can occur if there are corrupted messages in the Inboxes or the
	personal folders that you are trying to migrate.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Exchange Server Administrator program, export the mail in the mailbox
	  to a .pst file.
	
	2. Create a new user (for example, user2).
	
	3. In Outlook, create a new profile for user2, and then click Services on the
	  Tools menu.
	
	4. Add the .pst file (that you created in step 1) as a personal folder to user2.
	
	5. Use Outlook to log on as user2, click Find on the Tools menu, and then click
	  Advanced Find. On the Messages tab, click "subject field and message body" in
	  the In list.
	
	6. Copy some text from the BackupExec log and paste the text in the "Search for
	  the words" box in the Advanced Find dialog box.
	
	7. After you find the corrupted message, delete the message, and then perform a
	  backup by using BackupExec. If there are no more corrupted messages,
	  BackupExec should finish successfully.
	
	MORE INFORMATION
	================
	
	BackupExec is a product of VERITAS Software Corporation. For more information
	about BackupExec refer to the following Web site:
	
	  http://www.veritas.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
