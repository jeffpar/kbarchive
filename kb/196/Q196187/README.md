---
layout: page
title: "Q196187: XADM: Cannot View Recipients in the Global Address List"
permalink: /kb/196/Q196187/
---

## Q196187: XADM: Cannot View Recipients in the Global Address List

	Article: Q196187
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to view a list of Global Address Book names from the drop down
	box in the "Show Names From" section of the Address Book using either the
	Exchange or Outlook clients, certain objects may not appear in the list.
	
	This list of objects can include the following:
	
	  Recipient Containers
	  Site Objects
	  Exchange Server Distribution Lists
	  Exchange Server Mailboxes
	  Public Folders
	
	MORE INFORMATION
	================
	
	This behavior can occur if the Search permission has been set by the
	administrator in the Exchange Server Administrator program. The search control
	in Exchange Server 5.5 is used to limit directory access, and after being set by
	an administrator, the recipients in the global address list may become
	unavailable or do not have the same appearance as before. This can be confusing
	to some end users.
	
	If the Search permissions were set in error, then removing the Search permissions
	in the Exchange Server Administrator program will correct the look of the global
	address list.
	
	For additional information on how to check search permissions, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q182902 XADM: How To Setup Container Level Search Control
	
	  Q173760 XADM: User's GAL Displayed Differently Based on Search Control
	
	Typically, Search permissions are used if you have multiple companies or
	departments in one Exchange Server organization, and you want to prevent these
	companies or departments from viewing each other's mailboxes.
	
	Additional query words: Address Book View List Viewing Hide Global Container
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
