---
layout: page
title: "Q225465: Add User Wizard Populated with Company Data"
permalink: /kb/225/Q225465/
---

## Q225465: Add User Wizard Populated with Company Data

	Article: Q225465
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade your computer running BackOffice Small Business Server (SBS)
	to use BackOffice Server, the Add User Wizard, which lets you create new users
	on the server, contains Company Information such as phone and fax numbers,
	company address and name.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the company information, use Regedt32 to edit the listed values in the
	following registry keys:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Small Business
	
	This list contains the values that you can modify to change the company
	information.
	
	- Address:
	
	- Country:
	
	- Fax:
	
	- Fax_ACode:
	
	- Organization:
	
	- Phone:
	
	- Phone_ACode:
	
	- State:
	
	- TAPIAreaCode:
	
	- Zip:
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft BackOffice Small
	Business Server 4.5.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
