---
layout: page
title: "Q142262: XCLN: Display of Public Folder Summary Causes Error"
permalink: kb/142/Q142262/
---

## Q142262: XCLN: Display of Public Folder Summary Causes Error

	Article: Q142262
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user of the Microsoft Exchange Client for Windows 3.x , Windows NT, or
	Windows 95 attempts to view the Folder contacts of a migrated public folder, it
	is likely that this field will display unreadable text. In addition, an Access
	Violation might occur.
	
	MORE INFORMATION
	================
	
	The Folder contacts field is displayed by clicking a public folder, the File
	menu, the Properties option, and then the Summary tab.
	
	CAUSE
	=====
	
	Public Folders migrated using the Microsoft Exchange Migration Wizard, set the
	System Attendant to be the owner of the folder by default. The System Attendant
	does not have a display name and this creates a problem for the client when it
	builds the Folder contacts window. Normally, the folder owner name would be
	visible when viewing the Folder contacts in the summary tab of the folders
	properties.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients
	listed at the beginning of this article. This problem was corrected in Microsoft
	Exchange Server 4.0 U.S. Service Pack 2. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash GP fault protection
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : :4.0
	
	=============================================================================
	
