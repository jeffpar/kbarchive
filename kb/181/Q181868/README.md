---
layout: page
title: "Q181868: Config.pol File Attributes Change After Supervisor Logs On"
permalink: /kb/181/Q181868/
---

## Q181868: Config.pol File Attributes Change After Supervisor Logs On

	Article: Q181868
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user with sufficient permissions to change file attributes logs on to a
	Windows 95-based computer that has system policies enabled, the Config.pol file
	attributes are set to "archive". All other file attributes, such as "read only",
	are removed. This would allow unrestricted editing of the policy, which may have
	undesired effects on subsequent user logins.
	
	This problem applies to both the Client for Microsoft Networks, and the Client
	for NetWare Networks, and is typically manifested when an administrative user
	logs in.
	
	CAUSE
	=====
	
	This problem occurs because the program that applies the system policy
	explicitly sets the archive bit, which results in the clearing of all other file
	attributes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. This
	problem no longer occurs in Windows 98. To resolve this problem, install the
	current version of Windows. For information about the current version of
	Windows, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
