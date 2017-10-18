---
layout: page
title: "Q311387: XADM: Search Permission Prevents Viewing Membership of DL"
permalink: kb/311/Q311387/
---

## Q311387: XADM: Search Permission Prevents Viewing Membership of DL

	Article: Q311387
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are logged on to a client computer and attempt to view the membership of a
	distribution list. When you view the properties of the distribution list, you
	cannot view the membership list in the Members dialog box, the owner in the
	Owner dialog box, or which distribution lists this list is a member of in the
	Distribution List Membership window on the Member Of tab.
	
	CAUSE
	=====
	
	This behavior can occur because the Search permission has been set on the
	distribution list and the user that is logged on does not have the Search
	permission.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the Search permission from the distribution
	list. To do so:
	
	1. In the Microsoft Exchange Server Administrator program, open the properties
	  of the distribution list.
	
	2. Click the Permissions tab.
	
	3. View the permissions that are assigned to the accounts listed in the "Windows
	  NT accounts with permissions" box.
	
	4. Clear the Search check box for any account that has the Search permission in
	  the Rights dialog box.
	
	5. Click OK to close the distribution list properties.
	
	WORKAROUND
	==========
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q173760 XADM: User's GAL Displayed Differently Based on Search Control
	
	Additional query words: outlook empty dl
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
