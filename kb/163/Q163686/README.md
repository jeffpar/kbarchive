---
layout: page
title: "Q163686: XADM: What to Do If the Service Account Is Deleted"
permalink: kb/163/Q163686/
---

## Q163686: XADM: What to Do If the Service Account Is Deleted

	Article: Q163686
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Exchange Server services require a Windows NT domain account to start. This
	account is called the Exchange Server service account. This article explains
	what to do if the service account is deleted by mistake.
	
	MORE INFORMATION
	================
	
	The service account is given permissions for the Exchange Server directory
	during the setup process. The service account, by default, has permissions for
	all of the objects in the directory. Windows NT accounts in the directory are
	referred to by their Windows NT Security Identifier (SID) values, and not by
	their names.
	
	If the service account is deleted from the Windows NT Accounts database, none of
	the Exchange Server services can start. Even if you recreate this service
	account using the identical name and password, the SID value associated with
	this account is not the same as that of the previous account. Thus, when an
	Exchange Server service tries to start using this new account, the service
	cannot start because the SID value of this new account is different from that
	saved in the directory, and so the account does not have access to the directory
	objects.
	
	The only recommended solution to this problem is to restore the Windows NT
	Security Accounts Manager (SAM) database from a recent backup. This restores the
	deleted service account with its original SID value and all of the Exchange
	Server services can start.
	
	If a backup of the SAM database is not available, the only other alternative is
	to reinstall Exchange Server on all of the servers affected by the loss of the
	service account.
	
	You can save information from the Exchange Server information store (the Priv.edb
	and Pub.edb databases), but you need to recreate the directory, which results in
	the loss of all directory specific information (custom recipients, distribution
	lists, mailbox details, connectors, and so on).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
