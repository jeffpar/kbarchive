---
layout: page
title: "Q153404: XCLN: How to Allow Others User Access to Your Inbox"
permalink: /kb/153/Q153404/
---

## Q153404: XCLN: How to Allow Others User Access to Your Inbox

{% raw %}

	Article: Q153404
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 2001 for Mac 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft Exchange client, it is possible to grant other users the
	right to access your inbox.
	
	MORE INFORMATION
	================
	
	To grant other users access to your inbox:
	
	On your computer:
	
	1. Click the "Mailbox-<username>" folder to highlight it.
	
	2. On the File menu, click Properties.
	
	3. On the Permission tab, click Add in the Name/Role list and add the desired
	  user.
	
	  NOTE: Setting the Default user will give everyone on the Microsoft Exchange
	  server access to your folders.
	
	4. After you select the user from the address list, click Add, and then click OK
	  to accept the addition.
	
	5. Select the desired Permission Roles for that user.
	
	  You have to do this for each level of folders from the top level (usually the
	  Mailbox-<username>) to the bottom-level folder, that is, any subfolders
	  under Mailbox.
	
	On the computer of the person you are giving access to:
	
	1. On Tools menu, click Services, select the Microsoft Exchange Server
	  Information service, and then click Properties.
	
	2. Click the Advanced tab, and then click Add.
	
	3. Type either the e-mail alias name or the user's Display Name.
	
	4. Click OK to return to the mailbox.
	
	Access to your mailbox now appears in the listed available folders.
	
	The person you are giving access to may get the following error message when
	trying to open or access the desired folder:
	
	  The set of folders could not be opened. You do not have sufficient permission
	  to perform this operation on this object. See the folder contact or your
	  system administrator.
	
	You probably have not given that user the correct permission to access your
	folder. Make sure you have given the correct permission to all levels of folders
	above the desired folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbOutlook2001 kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2001Search kbZNotKeyword3 kbOutlookMacSearch kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
