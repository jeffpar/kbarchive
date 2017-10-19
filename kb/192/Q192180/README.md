---
layout: page
title: "Q192180: XADM: Selecting the View Only Admin Role for the Organization"
permalink: /kb/192/Q192180/
---

## Q192180: XADM: Selecting the View Only Admin Role for the Organization

	Article: Q192180
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The View Only Admin role is not available for the Organization or Configuration
	container through the drop-down list of roles. To allow a user to have the View
	Only Admin role on either of these two containers, perform the following steps:
	
	1. From the Tools menu, select Options and click the Permissions tab.
	
	2. Enable "Display Rights for roles on Permissions page."
	
	3. Click OK.
	
	4. Highlight the Organization or Configuration Object.
	
	5. From the File menu, select Properties, and then click the Permissions tab.
	
	6. Select or add the user for the View Only Admin role.
	
	7. Disable all rights for the user, and they will receive the View Only Admin
	  role.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
