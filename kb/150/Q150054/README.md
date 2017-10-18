---
layout: page
title: "Q150054: Error: &quot;An Extended Error Has Occurred&quot; on Windows 95 Client"
permalink: kb/150/Q150054/
---

## Q150054: Error: &quot;An Extended Error Has Occurred&quot; on Windows 95 Client

	Article: Q150054
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows 95 client tries to connect to a share on a Windows NT 3.51
	Server, the following error message appears:
	
	  An extended error has occurred.
	
	Administrators are able to get connected; nonadministrators cannot.
	
	CAUSE
	=====
	
	One possible cause of this error is that License Manager has not been set up to
	grant enough connections to meet the clients' demands.
	
	RESOLUTION
	==========
	
	Go into Control Panel, click the Licensing icon, and set up License Manager with
	the appropriate number of client licenses per seat or per server.
	
	
	Additional query words: 3.51 95 win95 4.00
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :3.51,4.0
	
	=============================================================================
	
