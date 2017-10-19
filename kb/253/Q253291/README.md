---
layout: page
title: "Q253291: XADM: Determining the Last User to Modify a Public Folder Item"
permalink: /kb/253/Q253291/
---

## Q253291: XADM: Determining the Last User to Modify a Public Folder Item

	Article: Q253291
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a collaborative environment, several users may have the ability to modify the
	body of a message or post it in a public folder. An administrator may need to
	determine which user last modified the message. The last user to modify the
	message is stored as a property of the message, which is called the
	PR_LAST_MODIFIER_NAME property.
	
	MORE INFORMATION
	================
	
	To read the PR_LAST_MODIFIER_NAME property, you need to use the Mdbvu32.exe
	utility. This utility is located on the Exchange Server CD in the <CD
	root>\Server\Support\Utils\I386 folder. The Mdbvu32.exe utility is a raw
	Messaging Application Programming Interface (MAPI) client that displays property
	information for folders and messages in the information store.
	
	Prerequisite
	------------
	
	Before the Mdbvu32.exe utility can work correctly, you must set up a profile at
	the computer on which you want to run the Mdbvu32.exe utility. Install Exchange
	Client or Outlook, and then configure a profile for a user who has rights to the
	folder that you want to examine.
	
	Examining the MAPI Property
	---------------------------
	
	To examine the PR_LAST_MODIFIER_NAME property, perform the following steps:
	
	1. Start the Mdbvu32.exe utility.
	
	2. The MAPILogonEx(MAPI_LOGON_UI) dialog box is displayed. Click OK.
	
	3. If the client profile is configured to prompt you for a profile selection, a
	  dialog box is displayed that asks you to choose a profile. Click the profile
	  that you configured in the "Prerequisite" section of this article, and then
	  click OK.
	
	4. The MDB Viewer Test Application dialog box is displayed. On the File menu,
	  click MDB.
	
	5. Click OpenMessageStore.
	
	6. The Select Message Store To Open dialog box is displayed. Click Public
	  Folders, and then click Open.
	
	7. The MDB Viewer Test Application dialog box is displayed. On the File menu,
	  click MDB.
	
	8. Click Open IPM Subtree to open the MAPI_FOLDER - IPM_SUBTREE dialog box.
	
	9. In the Child Folders list, double-click All Public Folders. In the Child
	  Folders list, find the folder that you want, and then click to select the
	  folder.
	
	10. In the Messages in Folder list, click the message that you want to examine.
	  Double-click the message to open the MessageProperties window.
	
	11. Scroll down to the property tag 0x3FFA; this is the PR_LAST_MODIFIER_NAME
	  property, and contains the alias of the last user to modify the message.
	
	NOTE: If you use version 4.0 of Mdbvu32.exe, the property 0x3FFA is displayed. If
	you use version 5.5 of Mdbvu32.exe, the actual property name
	PR_LAST_MODIFIER_NAME is displayed.
	
	Additional query words: PF changed modified post
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
