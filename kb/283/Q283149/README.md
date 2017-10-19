---
layout: page
title: "Q283149: XADM: -1011 Error Message Reported After Running ISINTEG -PATCH"
permalink: /kb/283/Q283149/
---

## Q283149: XADM: -1011 Error Message Reported After Running ISINTEG -PATCH

	Article: Q283149
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the isinteg -patch command to start the information store, Isinteg
	may finish successfully, but the information store may still report a "-1011"
	error message.
	
	CAUSE
	=====
	
	This issue can occur if the user account that you are using to run isinteg
	-patch does not have the appropriate permissions to modify the database files.
	
	RESOLUTION
	==========
	
	To resolve this issue, log on using an account that has permission to edit
	database files (for example, the Exchange Service Account).
	
	MORE INFORMATION
	================
	
	When you run isinteg -patch, it runs but it does not report an "Access is
	Denied" error message. Instead, it reports that the information store has been
	successfully updated. To confirm this behavior, rename one of the information
	store files, and then run the command line again. Isinteg does not report that
	it could not find the information store; it does not report any error messages.
	
	For example, if you want to rename the Pub.edb file to "Pub.old", run isinteg
	-patch. Isinteg reports that it has successfully updated the information store.
	However, you expect to receive the following error message:
	
	  Warning, public store was not found (assuming private-only store)
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
