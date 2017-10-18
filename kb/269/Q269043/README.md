---
layout: page
title: "Q269043: Problems Saving or Opening Files with Extended Characters"
permalink: kb/269/Q269043/
---

## Q269043: Problems Saving or Opening Files with Extended Characters

	Article: Q269043
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbfile kbdta w2000netware kbNetWareService
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience any of the following issues:
	
	- When you try to open a file with extended characters in the file name that is
	  located on a NetWare volume by using Gateway Service for NetWare or Client
	  Services for NetWare, you may not be able to open the file and you may
	  receive an error message. The error message that you receive varies,
	  depending on the program that is attempting to open the file.
	
	  -or-
	
	- When you try to save or copy files with extended characters in the file name
	  to the NetWare server, some of the characters in the file name may change.
	
	  -or-
	
	- When you try to locate a folder on a NetWare server by using Windows
	  Explorer, files with extended characters in the file name may not display
	  correctly.
	
	CAUSE
	=====
	
	The current default regional settings do not provide a character mapping for the
	extended characters.
	
	Characters with a tilde (~) over them are examples of extended characters that
	may not appear correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Regional tool in Control Panel to change the
	default regional settings to the same regional settings that you are using. To
	create the extended characters, use either of the following methods.
	
	Microsoft Windows NT 4.0
	------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Regional Settings.
	
	3. On the Regional Settings tab, click the appropriate language in the list, and
	  then click to select the "Set as system default locale" check box.
	
	4. Restart your computer when you are prompted.
	
	Windows 2000
	------------
	
	1. On the toolbar click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Regional Options.
	
	3. On the General tab, click Set Default, click the appropriate language in the
	  box, and then click OK.
	
	4. Restart your computer when you are prompted.
	
	Additional query words: gsnw csnw unicode Portuguese prb WD10
	
	======================================================================
	Keywords          : kbfile kbdta w2000netware kbNetWareService 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
