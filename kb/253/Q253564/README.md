---
layout: page
title: "Q253564: XFOR: GroupWise Migration Creates Duplicate Folders in Outlook"
permalink: /kb/253/Q253564/
---

## Q253564: XFOR: GroupWise Migration Creates Duplicate Folders in Outlook

	Article: Q253564
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you migrate a Novell GroupWise mailbox to Exchange Server 5.5, when you
	open the new Exchange Server mailbox in Microsoft Outlook, there may be multiple
	default folders. For example, the new Exchange Server mailbox may contain the
	following folders:
	
	- Calendar
	
	- Calendar1
	
	- Tasks
	
	- Tasks1
	
	- Journal
	
	- Journal1
	
	CAUSE
	=====
	
	This problem can occur if the GroupWise user gained access to the GroupWise
	mailbox by using Outlook. When Outlook opens the GroupWise mailbox, Outlook
	creates the default Outlook folders (Tasks, Journal, Calendar, and so on) in the
	user's mailbox in the Novell server message store. When you migrate these
	folders from GroupWise to Exchange Server, they are treated as regular folders.
	When you start Outlook to gain access to the new Exchange Server mailbox,
	Outlook creates the default Outlook folders. A naming conflict occurs, and
	Outlook renames the default folders.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Before you migrate GroupWise mailboxes, have the GroupWise users open their
	  mailboxes by using the default Novell GroupWise client and delete any default
	  Outlook folders.
	
	2. Delete the migrated GroupWise folders from Outlook after you migrate the
	  GroupWise mailboxes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
