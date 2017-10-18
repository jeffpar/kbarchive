---
layout: page
title: "Q169413: XADM: Mailbox Resources Does Not Show All Mailboxes"
permalink: kb/169/Q169413/
---

## Q169413: XADM: Mailbox Resources Does Not Show All Mailboxes

	Article: Q169413
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Administrator program to view the Mailbox
	Resources on a server, not all the mailboxes listed in the Recipients container
	are displayed in the Mailbox Resources.
	
	MORE INFORMATION
	================
	
	If you use the Microsoft Exchange Administrator program, information about the
	mailboxes on a Microsoft Exchange Server computer can be obtained. This
	information, such as a Windows NT account, number of items, or logon/logoff
	times, is obtained by selecting the Mailbox Resources page of the private
	information store under the server object. Because the information displayed on
	the Mailbox Resources page is obtained from the information store, only objects
	that are present in the information store are displayed. When a mailbox is
	created, a directory object is created for that mailbox, but an information
	store object is not. An information store object is created when a user logs on
	to the mailbox, or a message is mailed to the mailbox. Therefore, only those
	mailboxes that contain mail or that have been logged on to are displayed in the
	Mailbox Resources page of the private information store.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
