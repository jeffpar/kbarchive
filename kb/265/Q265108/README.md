---
layout: page
title: "Q265108: XADM: Error Message: Could Not Complete the Operation"
permalink: kb/265/Q265108/
---

## Q265108: XADM: Error Message: Could Not Complete the Operation

	Article: Q265108
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to delete a public folder from Outlook, you may receive the
	following error message:
	
	  Could not complete the operation. One or more parameter values are not valid.
	
	MORE INFORMATION
	================
	
	This behavior occurs when the folder that you are attempting to delete has child
	folders that are not visible to the user who is attempting to delete the folder.
	The "Folder Visible" permission hides the folder from the hierarchy for all
	users who do not have this permission. If the users are granted the "Folder
	Visible" permission, the error message changes to the following error message:
	
	  Outlook cannot delete this folder. You may not have appropriate permissions.
	
	To avoid this behavior, the user who is deleting the folder must have the proper
	permission to the folder and all child folders. To verify that the user has the
	proper folder permissions:
	
	1. Start the Admin.exe program.
	
	2. In the left pane of the Admin program, locate the Public Folder tree, and
	  then click the folder that you want to delete.
	
	3. On the File menu, click Properties (or click the folder and press ALT+Enter).
	
	4. On the General tab, click Client Permissions.
	
	5. In the Client Permissions dialog box, apply the permissions that you want to
	  the folder for the user that is deleting the folder, and then click OK.
	
	6. On the General tab, click to select the "Propagate these permissions to all
	  subfolders" check box, and then click Apply.
	
	  You see the Subfolder Properties dialog box. Verify that the only check box
	  that is selected is the "Client permissions" check box.
	
	7. Click OK. This changes all child folders properties to match the parent
	  folder (the folder that is being deleted).
	
	The client can now delete the folder and all child folders without receiving any
	error messages.
	
	Additional query words: hidden
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
