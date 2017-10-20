---
layout: page
title: "Q63582: NWPOPUP.EXE Does Not Initialize Properly in Windows 3.0"
permalink: /kb/063/Q63582/
---

## Q63582: NWPOPUP.EXE Does Not Initialize Properly in Windows 3.0

{% raw %}

	Article: Q63582
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 installed for Novell NetWare adds the line
	NWPOPUP.EXE to the load= line of the WIN.INI file. This is a support program
	that allows the display of messages which are sent across the network between
	users. When Windows is first started, NWPOPUP.EXE is not initialized.
	
	NOTE: This problem does not occur in later versions of Microsoft Windows.
	
	MORE INFORMATION
	================
	
	Do any of the following to initialize NWPOPUP at startup:
	
	- Obtain the NWPOPUP.EXE on the Supplemental Driver Library (SDL) from
	  Microsoft Sales Information Center (MSIC) by calling (800) 426-9400.
	
	- Execute the Enable Broadcast Messages command in the Control Panel's Network
	  section.
	
	- Run an MS-DOS application. NWPOPUP is initialized when an MS-DOS application
	  is executed.
	
	Note that NWPOPUP.EXE does not have an icon that displays on the screen, and the
	Task List doesn't list this application either. It is loaded silently by
	Windows.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
