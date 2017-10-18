---
layout: page
title: "Q264738: Unable to Start Citrix Installer Service"
permalink: kb/264/Q264738/
---

## Q264738: Unable to Start Citrix Installer Service

	Article: Q264738
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you configure the Citrix UNIX Integration Service, you may be unable to
	start the Citrix Installer Service. Also, you may be unable to change your
	domain password.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue:
	
	1. Start Regedt32.exe, and then view the following registry key:
	
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\control\lsa\authentication
	  packages
	
	2. The "authentication packages" are set to the UNIX Integration Service,
	  "fmjauth" (the default is msv1_0). Remove fmjauth, and then add msv1_0. This
	  works correctly if you do not need this type of authentication.
	
	Additional query words: tse
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
