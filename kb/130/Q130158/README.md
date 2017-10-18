---
layout: page
title: "Q130158: PPT: Double-Clicking File Opens Wrong Version of PowerPoint"
permalink: kb/130/Q130158/
---

## Q130158: PPT: Double-Clicking File Opens Wrong Version of PowerPoint

	Article: Q130158
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0,95
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a file to open it, a different version of PowerPoint than
	you expect starts.
	
	CAUSE
	=====
	
	This behavior occurs if you have multiple versions of PowerPoint installed on
	your computer. When you run a version of PowerPoint, it registers itself in the
	Windows registry and takes ownership of files that have the .ppt extension and
	certain system registration entries. If you then run a different version of
	PowerPoint, it registers itself. It owns the files having the .ppt extension and
	system registration entries until you run another version of PowerPoint. This
	means that if you double-click a file with a .ppt extension, the most recently
	run version of PowerPoint tries to open the file.
	
	WORKAROUND
	==========
	
	If you want to open the PowerPoint presentation in a specific version of
	PowerPoint, follow these steps:
	
	1. On the Windows Start menu, point to Programs and then click Windows Explorer.
	
	2. Open the \Windows\SendTo folder.
	
	3. Create three shortcuts--one for each version of PowerPoint you have installed
	  on your computer. To do this, follow these steps:
	  a. On the File menu, point to New, and then click Shortcut.
	
	  b. In the Command Line box in the Create Shortcut Wizard, type the path and
	     file name for the Powerpnt.exe file you want to use. Or, click Browse,
	     select the Powerpnt.exe file you want to use, and click Open.
	
	  c. Click Next.
	
	  d. On the "Select a Title for the Program" panel, type the description you
	     want to use, and then click Finish.
	
	  e. Repeat steps a through d for each version of PowerPoint.
	
	After creating the shortcuts, you can select the version of PowerPoint you want
	to open the file by following these steps:
	
	1. Right-click a presentation file, and then click Send To on the menu that
	  appears.
	
	2. Select the version of PowerPoint you want to open the file.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 Win95 right-click mouse step on properties ppt95
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbOSWin95 kbOSWinSearch kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0,95
	Issue type        : kbprb
	
	=============================================================================
	
