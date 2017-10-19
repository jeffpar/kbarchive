---
layout: page
title: "Q274475: Messenger No Longer Works After Upgrading to Windows 2000"
permalink: /kb/274/Q274475/
---

## Q274475: Messenger No Longer Works After Upgrading to Windows 2000

	Article: Q274475
	Product(s): The Microsoft Network
	Version(s): 2.2,2000,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	- MSN Messenger Service, version 2.2 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading to Windows 2000, MSN Messenger no longer works.
	
	CAUSE
	=====
	
	During the setup of Windows 2000 a registry key in
	HKLM\Software\Microsoft\Active Setup\Installed Components\ is disabled.
	
	RESOLUTION
	==========
	
	1. Uninstall MSN Explorer
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add/Remove Programs scroll down and select MSN Explorer.
	
	  c. Click Change/Remove, confirm that you wish to remove the problem, and then
	     click OK when the uninstall is complete.
	
	2. Uninstall MSN Messenger Service
	
	  a. In Add Remove Programs click MSN Messenger Service, click Add/Remove and
	     then click Yes.
	
	  b. When the uninstall is complete, click OK and close the Add/Remove Programs
	     window.
	
	3. Remove any copies of msmsgs.exe
	
	  a. Click Start, point to Search, and then click Files and Folders.
	
	  b. In the Search for files or folders named text box, type msmsgs.exe and
	     click Search Now.
	
	  c. Select and delete any and all instances of the msmsgs.exe file.
	
	4. Reinstall MSN Explorer
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWinSearch kbMSNSearch kbMSN600 kbMSNMessService
	Version           : :2.2,2000,6.0
	Issue type        : kbprb
	
	=============================================================================
	
