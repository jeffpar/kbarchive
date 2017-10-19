---
layout: page
title: "Q180111: XADM: Setting Up View Only Admin for Message Tracking"
permalink: /kb/180/Q180111/
---

## Q180111: XADM: Setting Up View Only Admin for Message Tracking

	Article: Q180111
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up permissions using the Microsoft Exchange
	Administrator program so users can track messages, but not add, modify, or
	delete objects in the Exchange directory.
	
	MORE INFORMATION
	================
	
	To configure a "Message Tracking Only" account, perform the following steps:
	
	1. Run the Microsoft Exchange Program, preferably logged onto Windows NT as the
	  Exchange Service Account.
	
	2. From the Tools menu, select Options.
	
	3. Go to the Permissions property page.
	
	4. Select the following options:
	
	   - Show Permissions page for all objects.
	
	   - Display rights for roles on Permissions page
	
	  Click OK to close the property page.
	
	5. Get properties on the Organization object, and select the Permissions page.
	
	6. Select the Windows NT account or group that you want to assign permissions
	  to.
	
	7. In the Rights list, deselect all the options.
	
	8. Click OK.
	
	9. Get properties on the Site object, and select the Permissions page.
	
	10. Select the Windows NT account or group that you want to assign the right to
	  track messages.
	
	11. From the Roles list, select "View Only Admin."
	
	12. Click OK.
	
	The desired users should now be able to track messages. Because these users have
	View Only Admin privileges, they will not be able to add, modify, or delete any
	objects in the Exchange directory.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
