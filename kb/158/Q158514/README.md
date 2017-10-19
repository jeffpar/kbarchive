---
layout: page
title: "Q158514: PPT7: Internet Explorer Prevents Association of .ppt, .pot Files"
permalink: /kb/158/Q158514/
---

## Q158514: PPT7: Internet Explorer Prevents Association of .ppt, .pot Files

	Article: Q158514
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbdta
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Internet Explorer version 3.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you install the Microsoft Internet Explorer 3.0 before Microsoft Office for
	Windows 95, version 7.0 or PowerPoint for Windows 95, version 7.0, the
	extensions for PowerPoint (.ppt and .pot) are not associated with PowerPoint.
	Therefore, .pot and .ppt files display with generic icons. If you double-click
	on one in Windows Explorer, the Open With dialog box appears.
	
	RESOLUTION
	==========
	
	To correct the file associations for PowerPoint, perform the following steps:
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
	
	1. Run the program Regedit.exe.
	
	2. Click the plus sign next to HKEY_CLASSES_ROOT.
	
	3. Click the folder labeled .ppt.
	
	4. Press the DELETE key on your keyboard.
	
	5. Exit the Registry Editor.
	
	6. Start Office (or PowerPoint) Setup.
	
	7. In the Maintenance Mode Setup dialog box, click the Reinstall button.
	
	8. Insert whatever disk or compact disc Setup asks you for.
	
	
	Additional query words: 7.00 w_powerpt ppt powerpnt ie internet explorer .ppt .pot ppt7 file associations extensions
	
	======================================================================
	Keywords          : kbinterop kbusage kbdta 
	Technology        : kbIEsearch kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbIE95Search kbZNotKeyword3 kbPowerPt95Search kbIE300Win95
	Version           : :3.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
