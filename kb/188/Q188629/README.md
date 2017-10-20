---
layout: page
title: "Q188629: XADM: Using PFADMIN to Remove Public Folder Permissions"
permalink: /kb/188/Q188629/
---

## Q188629: XADM: Using PFADMIN to Remove Public Folder Permissions

{% raw %}

	Article: Q188629
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use Pfadmin.exe to remove mailboxes from the
	permissions list of Microsoft Exchange Server public folders.
	
	Pfadmin.exe ships with the Microsoft BackOffice Resource Kit, Second and Third
	Editions, and allows an Exchange Server administrator to manipulate public
	folders.
	
	MORE INFORMATION
	================
	
	To remove a mailbox from the permissions list of a public folder, perform the
	following steps:
	
	1. On the Exchange Server computer or another server or workstation, install
	  Pfadmin.exe from the BackOffice CD by copying the files Pfadmin.exe and
	  Aclcls.dll to the local hard drive.
	
	2. Install the Exchange client or Microsoft Outlook, on the computer used in the
	  previous step.
	
	3. Log on to Windows NT as the Exchange Service Account or an account that has
	  Service Account Admin privilege on the Exchange Organization Site and
	  Configuration containers.
	
	4. Create a MAPI profile called "PFProfile". Add the Exchange Server Service to
	  the profile and configure this service with a valid mailbox and server name.
	
	5. Type the the following command from an MS-DOS command prompt:
	
	  PFADMIN "PFProfile" SETACL "<Folder Path>" "<Mailbox Name>"
	  remove no
	
	  Where <Folder Path> is the full path to the public folder <Mailbox
	  Name> is the display name of the mailbox to be removed from the
	  permissions list of the folder specified by <Folder Path>
	
	  NOTE: The above command will only remove the mailbox from the folder
	  specified. If you wish to recursively remove the mailbox from the permissions
	  of the specified folder and all its sub-folders, then do not type "no"
	  (without the quotation marks) at the end of the above command.
	
	  Make sure that you are using version 1.30 or later of Pfadmin.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
