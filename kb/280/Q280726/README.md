---
layout: page
title: "Q280726: XADM: How to Use Mdbview to Remove Mailbox Event Scripts"
permalink: /kb/280/Q280726/
---

## Q280726: XADM: How to Use Mdbview to Remove Mailbox Event Scripts

	Article: Q280726
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 17-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Mdbview utility (Mdbvu32.exe) to remove
	mailbox event scripts.
	
	MORE INFORMATION
	================
	
	If you run a script against a mailbox, and the script does not start, you can
	delete the script from the mailbox by using the Mdbview utility. This issue may
	occur even after you delete and republish the script in Microsoft Outlook.
	Before you perform the procedure in this section, make sure that you create an
	Outlook profile for the mailbox by using the associated script. You must create
	this profile on the computer where you run Mdbview.
	
	To delete a script using Mdbview:
	
	1. Run Mdbvu32.exe.
	
	  This file is located in Server\Support\Utils\I386 on the Exchange Server 5.5
	  CD-ROM.
	
	2. In the "MAPILogonEx(MAPI_LOGON_UI)" dialog box, click to select the following
	  check boxes, and then click OK:
	
	   - MAPI_NEW_SESSION
	
	   - MAPI_EXPLICIT_PROFILE
	
	   - MAPI_NO_MAIL
	
	3. When you are prompted to enter a profile, enter the profile for the mailbox
	  that has the broken script.
	
	4. In the MDB Viewer Test Application window, click the MDB menu, and then click
	  OpenMessageStore.
	
	5. Click the mailbox, and then click Open.
	
	6. In the MDB Viewer Test Application window, click the MDB menu, and then click
	  Open Root Folder.
	
	7. In the Child Folders section, double click "Top of Information Store".
	
	8. Double-click Inbox.
	
	9. In the "Associated Messages in Folder" section, click the script that you
	  would like to delete.
	
	  NOTE: If more than one script is displayed, make sure that you click only the
	  scripts that you want to remove.
	
	10. Click Operations Available, and then click "lpFld->DeleteMessages()".
	
	11. To delete the script, click Call Function.
	
	12. Repeat steps nine to eleven for every script that you want to delete. (You
	  can also click multiple messages to delete by using the CTRL or SHIFT key.)
	
	13. After you have deleted all of the scripts that you want to delete, click
	  Close three times to return to the MDB Viewer Test Application window.
	
	14. Click the Session menu, click Session Logoff, and then click OK.
	
	15. Quit Mdbvu32.exe
	
	Additional query words: event service script conference autoaccept
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
