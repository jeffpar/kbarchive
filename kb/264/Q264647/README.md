---
layout: page
title: "Q264647: Cannot Install Applications, Error Message States That the Unins"
permalink: kb/264/Q264647/
---

## Q264647: Cannot Install Applications, Error Message States That the Unins

	Article: Q264647
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install any application, the installation may stop and you
	may receive the following error message:
	
	  The Uninstall Shield is in use. Please stop the Uninstall Shield and try
	  again.
	
	CAUSE
	=====
	
	This behavior can occur when the permissions on the Uninst.exe file and on the
	C:\Winnt directory are not set correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the permissions on both the C:\Winnt directory and
	the Uninst.exe file to:
	
	Administrators\Full Control
	System\Full Control
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
