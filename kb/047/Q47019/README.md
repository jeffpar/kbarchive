---
layout: page
title: "Q47019: Mac Adm: Steps for Deleting a User"
permalink: /kb/047/Q47019/
---

## Q47019: Mac Adm: Steps for Deleting a User

	Article: Q47019
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.0a,3.0b,3.1,3.1a,3.1c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.0a, 3.0b, 3.1, 3.1a, 3.1c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To delete a user in Microsoft Mail, do the following:
	
	1. Sign in as the Network Manager and choose Server Users/Groups from the Mail
	  menu.
	
	
	2. Select the User icon.
	
	3. Click the Remove User radio button.
	
	4. Select the user to be removed.
	
	5. Select Remove.
	
	6. The following warning message is displayed:
	
	  Are you sure you want to delete <username>?
	
	7. Select Remove.
	
	8. If the user to be deleted has mail, the following warning message is
	  displayed:
	
	  Are you sure you want to remove <username>?
	  This user has mail, which will be deleted.
	
	9. Select Remove.
	
	When a user is removed in a multi-server environment, all other servers will be
	notified of the removal. If the user is a member of any groups defined on any
	server in the system, the group definition will be updated and the user will be
	removed. Also, if the user exists in another user's personal address book, that
	user will be removed from the other person's personal address book as well.
	
	Additional query words: 3.00 3.00a 3.00b 3.10 3.10a 3.10c
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN300a kbMailATN300b kbMailATN310 kbMailATN310a kbMailATN310c
	Version           : :3.0,3.0a,3.0b,3.1,3.1a,3.1c
	
	=============================================================================
	
