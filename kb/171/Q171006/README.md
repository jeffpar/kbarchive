---
layout: page
title: "Q171006: XCLN: ErrMsg When Attemtping to Import Another Schedule File"
permalink: kb/171/Q171006/
---

## Q171006: XCLN: ErrMsg When Attemtping to Import Another Schedule File

	Article: Q171006
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to import another Microsoft Schedule+ file into Schedule+ you may
	receive the following error message:
	
	  The file you selected is either not valid or has an older Version number.
	
	CAUSE
	=====
	
	This error message may occur when the registry contains a missing or invalid
	value.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	To work around this problem, follow these steps:
	
	1. Quit all programs.
	
	2. Click the Start button, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and click OK.
	
	4. Locate the following key:
	
	KEY_LOCAL_MACHINE\Software\Microsoft\Schedule+\Application
	
	5. In the Name list, double-click the ScheduleInterfaces key.
	
	6. In the Value Data box, type "msscd mscal" (without the quotation marks), and
	  click OK.
	
	7. On the Reigstry menu, click Exit to close the Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbprb
	
	=============================================================================
	
