---
layout: page
title: "Q259594: XADM: Mailbox Manager Scans Excluded Parent Folder Subfolders"
permalink: kb/259/Q259594/
---

## Q259594: XADM: Mailbox Manager Scans Excluded Parent Folder Subfolders

	Article: Q259594
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbtool exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Mailbox Manager, if the Other Folders option is selected, Mailbox Manager
	cleans subfolders under excluded parent folders.
	
	MORE INFORMATION
	================
	
	For example, if an administrator does not want a contacts folder to be scanned
	and a user has a subfolder of contacts under the parent contacts folder, that
	subfolder is cleaned when Mailbox Manager runs. This behavior is by design. The
	following information is from the Mbmanug.htm file that is included with
	Exchange Server 5.5 Service Pack 3 and Mailbox Manager:
	
	  The Other Folders option sets the age limit for all folders other than those
	  specifically listed on the dialog box. All subfolders, including subfolders
	  of the listed folders, belong to this category. For example, a subfolder of
	  the Inbox folder would not take its age limit from its parent folder - Inbox
	  - but from the Other Folders value.
	
	To prevent Mailbox Manager from cleaning subfolders under excluded parent
	folders, exclude the message class, because that exclusion applies to folders
	and subfolders. For additional information about how to exclude certain message
	classes in Mailbox Manager, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q244213 XADM: How to Configure the Mailbox Manager to Ignore Certain Message
	  Classes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
