---
layout: page
title: "Q152113: XADM: How to Send as a Public Folder"
permalink: kb/152/Q152113/
---

## Q152113: XADM: How to Send as a Public Folder

	Article: Q152113
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a rule so that the Microsoft Exchange Folder assistant can
	automatically reply to mail messages, you might receive the following message:
	
	  Changes to the rule could not be saved. You do not have permission to send
	  the message on behalf of the specified user.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Folder Assistant allows automatic replies to mail
	messages. This is done with standard message text or a Template. The owner of
	the public folders' NT account must have Send As permission on the Public Folder
	for this to be successful.
	
	RESOLUTION
	==========
	
	To add Send As permission on a Public Folder to the owner's NT account from the
	Microsoft Exchange Administrator program:
	
	1. From the Tools menu, choose Options.
	
	2. Click the Permissions tab.
	
	3. Check the Show Permissions Page for All Objects checkbox. Check the Display
	  Rights for Roles on Permissions Page checkbox.
	
	4. Click OK.
	
	5. Click the Public Folder
	
	6. From the File menu, click Properties.
	
	7. Click the Permissions tab.
	
	8. Click Add
	
	9. Select the NT account that requires the Send As permission.
	
	  Note: If all users need Send As permission, you can choose Everyone or create
	  a group with the necessary users
	
	10. Click Add.
	
	11. Choose Send As as the Role.
	
	12. Click OK
	
	To create a rule from a Microsoft Exchange client:
	
	1. Highlight the Public Folder.
	
	2. From the File menu, choose Properties.
	
	3. Click the Administration tab.
	
	4. Click the Folder Assistant button.
	
	5. Click the Add Rule button.
	
	6. Click the Reply With checkbox.
	
	7. Click the Template button.
	
	8. In the Subject: line , type some text.
	
	9. From the File menu, click Save & Close.
	
	10. Click OK.
	
	11. The following dialog box will appear:
	
	      This Rule will fire for all incoming Messages. Is this what you
	      want?
	
	12. Click Yes.
	
	13. Click OK.
	
	14. Click OK.
	
	Note: If you receive the message:
	
	  Changes to the Rule could not be saved. The client operation failed.
	
	Verify the Send As role is set for the current user.
	
	Additional query words: Public Folder Send As
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
