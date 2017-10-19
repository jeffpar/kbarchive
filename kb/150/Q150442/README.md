---
layout: page
title: "Q150442: XCLN: Cancel After Adding Service, Installs But Not Configured"
permalink: /kb/150/Q150442/
---

## Q150442: XCLN: Cancel After Adding Service, Installs But Not Configured

	Article: Q150442
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a service to a profile, such as a Personal Folder, you might want
	to select the Cancel button during the configuration of the service and expect
	the installation of the service to aborted. However, the result is the service
	is installed but not configured.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	Windows, Windows NT, and Windows 95 clients. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	If you press the Cancel button during the configuration of several of the
	services for the Microsoft Exchange clients, such as Internet Mail (Windows 95),
	Microsoft Mail, and Personal Address Book, you will receive the following
	information dialog box:
	
	  The service you have just added will not start until you choose Exit
	  and Log Off on the File menu, and then restart Microsoft Exchange.
	
	After you select the OK button, the service is installed even though the Cancel
	button was pressed.
	
	If you select the Cancel button during the configuration of Personal Folders, the
	following dialog box is displayed:
	
	  Properties for this information service must be defined prior to use.
	
	The result is the same; an unconfigured Personal Folder service is installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
