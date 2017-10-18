---
layout: page
title: "Q147701: XADM: Exchange Service Account Permissions"
permalink: kb/147/Q147701/
---

## Q147701: XADM: Exchange Service Account Permissions

	Article: Q147701
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): winnt
	Keyword(s): kbenv kbsetup XADM exc4 exc5 exc55
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install and start Microsoft Exchange Server version 4.0, 5.0, or 5.5, you
	need to create an Exchange Server service account with Domain User rights. This
	account is used to start the Exchange Server services. Create the account using
	the User Manager for Domains program that is provided with Microsoft Windows NT
	Server. During Exchange Server installation, Setup requests a service account
	and adds "Log On as a Service," "Restore Files and Directories," and "Act as
	Part of the Operating System" rights to this account.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q147702 XADM: Permissions Required to Install Microsoft Exchange Server
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv kbsetup XADM exc4 exc5 exc55 
	Version           : winnt:4.0,5.0,5.5
	Platform          : winnt
	Issue type        : kbinfo
	
	=============================================================================
	
