---
layout: page
title: "Q198387: Chips &amp; Technologies Video Driver Causes Error in Control Panel"
permalink: /kb/198/Q198387/
---

## Q198387: Chips &amp; Technologies Video Driver Causes Error in Control Panel

{% raw %}

	Article: Q198387
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	While working with Control Panel or Display properties, you may receive the
	following error if using the Chips & Technologies video driver in
	conjunction with a Toshiba TECRA laptop.
	
	  An error occurred while Windows was working with the Control Panel file
	  C:\winnt\system32.cpl.
	
	CAUSE
	=====
	
	This error can be attributed to an improper setting in the Windows registry or a
	corrupted key in the registry.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	     \ControlsFolder\Display\shellex\PropertySheetHandlers\ChipsDSP
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Delete the ChipsDSP key from the above path.
	
	4. Quit Registry Editor.
	
	  NOTE: After restarting the computer, the video display will be set in VGA.
	
	5. Reinstall the Chips & Technologies video driver and configure the
	  resolution properties.
	
	Note: The reapplication of any Windows NT service pack may disable the Chips
	& Technologies video driver, causing for the driver to be reinstalled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
