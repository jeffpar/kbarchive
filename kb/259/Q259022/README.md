---
layout: page
title: "Q259022: XADM: Exchange Server Service Account Has Access to Any Mailbox"
permalink: kb/259/Q259022/
---

## Q259022: XADM: Exchange Server Service Account Has Access to Any Mailbox

	Article: Q259022
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you log on to a Microsoft Exchange Client by using the Exchange Server
	service account, you can open and view the mailbox of any user.
	
	MORE INFORMATION
	================
	
	This behavior is by design. By default, the Exchange Server service account
	inherits permissions for every mailbox. The service account is automatically
	granted the role of Service Account Administrator, which includes Mailbox Owner
	rights.
	
	Any other account that has been granted the role of Service Account Administrator
	also has Mailbox Owner rights, which allows those users to log on to every
	mailbox on the system.
	
	Because of these capabilities, it is important for Exchange Server administrators
	to safeguard the Exchange Server service account and password.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q168753 XADM: Microsoft Exchange Roles, Rights, and Permissions
	
	Additional query words: login
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
