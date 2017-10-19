---
layout: page
title: "Q246283: XADM: Set Deleted Message Retention Time in Exchange 5.5"
permalink: /kb/246/Q246283/
---

## Q246283: XADM: Set Deleted Message Retention Time in Exchange 5.5

	Article: Q246283
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set the deleted item retention periods for the
	public and private information stores and for individual mailboxes and public
	folders in Microsoft Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	When you set retention times for an individual mailbox or a single public
	folder, or for an entire information store, you can also specify that no items
	be deleted before the information store is backed up.
	
	When you delete a message, Exchange Server marks the message for deletion but
	also marks it as hidden until it is permanently deleted from the information
	store. If you are using Microsoft Outlook version 8.03 or later, when you decide
	to retrieve a message before its retention expiration time, you can click the
	Deleted Item Recovery menu option on the Tools menu. The item is then visibly
	restored to the Inbox, and Exchange Server removes the mark for deletion.
	
	To specify how long to retain an item:
	
	1. To set a retention period for an individual mailbox or a public folder:
	
	  NOTE: By default, deleted item retention periods that you set on individual
	  mailboxes or public folders override the settings on the private information
	  store.
	
	  a. In the Exchange Server Administrator program, open the mailbox (or the
	     public folder), and then click the Limits tab.
	
	  b. Type the appropriate number in the Use This Value (Days) box.
	
	2. To set a retention period for an entire private or public information store:
	
	  a. In the Exchange Administrator program, click to expand the <Server>
	     container, and then click the information store (public or private, as
	     applicable) that you need to set the retention time for.
	
	  b. Click the General tab, and then type the appropriate number in the
	     "Deleted item retention time (days)" box.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
