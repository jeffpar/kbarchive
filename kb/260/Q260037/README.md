---
layout: page
title: "Q260037: XADM: How to Remove a Message from Exchange by Using ExMerge"
permalink: kb/260/Q260037/
---

## Q260037: XADM: How to Remove a Message from Exchange by Using ExMerge

	Article: Q260037
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In some cases, you may need to remove a single message from an Exchange Server
	computer. This article describes how to remove a single message by using the
	ExMerge utility.
	
	MORE INFORMATION
	================
	
	The steps in this article require the ExMerge disaster recovery utility version
	3.62 or later. Please contact Microsoft Product Support Services (PSS) to obtain
	the latest version of ExMerge.
	
	1. Log on to the Exchange service account.
	
	2. Create a folder called "Exmerge" (without quotation marks) on the Exchange
	  Server computer.
	
	3. Copy the following files to the folder:
	
	  Exmerge.exe
	  Exmerge.ini
	  Mfc42.dll
	
	4. Double-click the Exmerge.exe file, read the Welcome message, and then click
	  Next.
	
	5. Click "Two step merge", and then click Next.
	
	6. Click "Step 1: Copy data to Personal Folders", and then click Next.
	
	7. Type your server name, and then click Options.
	
	8. On the Data tab, click "User messages".
	
	9. On the Import Procedure tab, click "Archive data to target store". This
	  copies the data that you select to .pst files, and then deletes the data in
	  the Exchange Server mailbox.
	
	10. Click Yes when you receive the warning message.
	
	11. On the Message Details tab, type the subject of the message or the
	  attachment name that you want to remove, click Add, click Apply, and then
	  click OK.
	
	NOTE: If the original message was forwarded with a different subject, the ExMerge
	utility cannot delete the message based on the original message subject line or
	MTS-ID.
	
	If the Item Retention option is turned on, the message may be available for
	recovery on the Outlook client. For additional information about deleted item
	recovery, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q228934 XCLN: Understanding Deleted Item Recovery
	
	12. On the Dates tab you can select a specific date or range of dates or times
	  to narrow your search.
	
	  Note that all dates and times are selected by default.
	
	13. Select all mailboxes or only the affected mailboxes, and then check Next.
	
	14. If possible, leave the default folder as C:\Exmergedata, and then click
	  Next
	
	  NOTE: Microsoft does not recommend that you change the default folder, but it
	  may be necessary to select a different location due to free space
	  limitations.
	
	  The ExMerge utility pulls the e-mail messages that you selected from the
	  mailboxes to .pst files.
	
	15. Open a few mailboxes to make sure that the message was removed.
	
	  Note that the messages are not removed from the System Attendant Mailbox as a
	  safety measure. You must manually delete these messages.
	
	16. After you determine that the message is removed from all mailboxes, you can
	  delete the .pst files in the C:\Exmergedata folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
