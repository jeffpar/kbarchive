---
layout: page
title: "Q153093: XCLN: Error Message: The Set of Folders Could Not Be Opened"
permalink: /kb/153/Q153093/
---

## Q153093: XCLN: Error Message: The Set of Folders Could Not Be Opened

	Article: Q153093
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch a Microsoft Exchange client for Windows, you might receive the
	following errors:
	
	  The set of folders could not be opened. You do not have permission to log on.
	
	  The command you specified could not be carried out. You do not have
	  permission to log on.
	
	RESOLUTION
	==========
	
	Verify that you are logged into a Windows NT domain account that has access
	permissions to the mailbox specified in the profile.
	
	If you are not logging into a Windows NT domain account that has access to the
	mailbox, follow these steps:
	
	1. Open the Control Panel.
	
	2. Click the Mail and Fax icon.
	
	3. Click the Show Profiles button.
	
	4. Select the profile that you are using.
	
	5. Click properties.
	
	6. Select Microsoft Exchange Server.
	
	7. Click properties.
	
	8. Click the Advanced tab.
	
	9. Make sure the Use Network Security During Logon option is not checked.
	
	The next time you launch a Microsoft Exchange client for Windows, you will be
	prompted to enter a user name, domain name, and password. This Windows NT
	account must have access permissions to the mailbox on the Microsoft Exchange
	Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
