---
layout: page
title: "Q259009: XADM: Is SMTP Address Used by Hidden Recipient or Public Folder"
permalink: /kb/259/Q259009/
---

## Q259009: XADM: Is SMTP Address Used by Hidden Recipient or Public Folder

	Article: Q259009
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine if Simple Mail Transfer Protocol (SMTP)
	addresses are used by hidden mailboxes or public folders.
	
	MORE INFORMATION
	================
	
	Use the following procedure to export and search the SMTP addresses for hidden
	mailboxes and public folders.
	
	Note that you cannot view these mailboxes with the Outlook client.
	
	To export data to a .csv file:
	
	1. Open the Exchange Administrator program.
	
	2. Click View Hidden Recipients, and then click the global address list object
	  that displays the hidden recipients in your organization.
	
	3. Click the Views column, click the Internet e-mail address in the Columns
	  dialog box, and then click OK.
	
	  You see the E-mail Address (Internet) column.
	
	4. On the File menu, click Save Window Contents to save the contents in the
	  right pane to a .csv file.
	
	You can use the .csv file to search for hidden recipients.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
