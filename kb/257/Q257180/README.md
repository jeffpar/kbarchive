---
layout: page
title: "Q257180: XCLN: Insufficient Permissions When Moving Contacts"
permalink: kb/257/Q257180/
---

## Q257180: XCLN: Insufficient Permissions When Moving Contacts

	Article: Q257180
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move or copy contacts either from another contact public folder or from
	the private contacts folder, you may receive the following error message:
	
	  Can't move the items. You do not have sufficient permissions to perform this
	  operation on this object. See the folder contact or your system
	  administrator.
	
	CAUSE
	=====
	
	This problem can occur because, unlike all of the other types of messages,
	contacts check for duplicates. When you assign Contributor permissions for a
	contact public folder, read access is not granted. Because Outlook 2000 cannot
	read items in the folder, Outlook 2000 cannot check for duplicate items and it
	generates the error message in the "Symptoms" section of this article stating
	that the user does not have sufficient permissions.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	Grant Read Items permissions for that specific user to the contacts public
	folder.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
