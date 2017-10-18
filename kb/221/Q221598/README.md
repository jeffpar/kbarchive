---
layout: page
title: "Q221598: XADM: Search Permissions Deny Access to the Offline Address Book"
permalink: kb/221/Q221598/
---

## Q221598: XADM: Search Permissions Deny Access to the Offline Address Book

	Article: Q221598
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to download the offline Address Book, that user may receive
	the following error messages:
	
	  An error occurred while opening the Microsoft Exchange Offline Address Book
	  file on the Microsoft Exchange server. See your administrator.
	
	  Unable to download the Offline Address Book. The Offline Address Book could
	  not be accessed.
	
	CAUSE
	=====
	
	This issue can occur if the user cannot gain access to the directory because
	access to the directory has been limited with search permissions (on the
	Permissions tab on either the Organization, Site, or Configuration container).
	
	WORKAROUND
	==========
	
	To work around this issue, either remove the search permissions from the
	container or grant permissions for the container to the Microsoft Windows NT
	account of the user.
	
	MORE INFORMATION
	================
	
	If you set search permissions, you may inadvertently limit access to information
	in the Exchange Server directory. Before you apply any search permissions, make
	sure that you understand the ramifications of this action.
	
	If incorrect search permissions are set and the client downloads the offline
	Address Book, there may not be any Address Books displayed to choose from under
	the Address Book section.
	
	For additional information about search permissions, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q182902 XADM: How To Setup Container Level Search Control
	
	  Q173760 XADM: User's GAL Displayed Differently Based on Search Control
	
	  Q196187 XADM: Cannot View Recipients in the Global Address List
	
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
