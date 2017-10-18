---
layout: page
title: "Q182904: XADM: How to Set Up a Moderated Public Folder"
permalink: kb/182/Q182904/
---

## Q182904: XADM: How to Set Up a Moderated Public Folder

	Article: Q182904
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting up a folder as a moderated folder causes all items posted to the folder
	to be forwarded to a designated recipient or public folder for review. You must
	give one or more people permissions to move these items back into the folder
	after they have reviewed the items and approved them for viewing by others.
	
	MORE INFORMATION
	================
	
	Use the following steps to create moderated folders:
	
	1. Start the Outlook client.
	
	2. Create a public folder to be moderated.
	
	3. Right-click on the folder you just created.
	
	4. Select Properties.
	
	5. Select the Administration tab.
	
	6. Make the folder available to: All users with access permission.
	
	7. Click the Moderated Folder button.
	
	8. Select the "Set folder up as a moderated folder" option.
	
	9. Add the mailboxes to Forward new items to: Validate the mailbox names with
	  the Check Names button.
	
	10. Select the "Reply to new items with" option, and select Standard Response.
	
	11. Add Account(s) to Moderators: list.
	
	12. Click OK to close the dialog box.
	
	13. Select the Permissions tab.
	
	14. NOTE: Settings for rights and roles can vary, but for testing purposes, the
	  following settings were used:
	
	     Default Role: Nonediting Author
	     Anonymous:  None
	     <User_name>: owner
	
	15. Click OK to close the folder Properties.
	
	NOTE: When the owner or moderator posts to a moderated folder, a response is not
	generated!
	
	Additional query words: custom response standard response
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbhowto
	
	=============================================================================
	
