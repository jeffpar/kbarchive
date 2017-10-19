---
layout: page
title: "Q120128: PPT: Bypassing Startup Dialog Boxes in PowerPoint"
permalink: /kb/120/Q120128/
---

## Q120128: PPT: Bypassing Startup Dialog Boxes in PowerPoint

	Article: Q120128
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start PowerPoint, two dialog boxes appear before a blank presentation
	is opened for you to work in. These dialog boxes are New Presentation and
	Autolayout. If you always prefer to begin with the same basic layout and want to
	bypass the two initial dialog boxes, you can force PowerPoint to load the
	Default.ppt presentation automatically.
	
	NOTE: If you do this, make Default.ppt read-only so that you don't accidentally
	overwrite it.
	
	MORE INFORMATION
	================
	
	To make PowerPoint open directly to a blank presentation, use the appropriate
	procedure for your version of PowerPoint.
	
	PowerPoint 7.0
	--------------
	
	1. Open a blank presentation in PowerPoint and save the presentation as
	  Blank.pot in the same folder that you find Powerpnt.exe (Blank.pot is found
	  in the Templates folder initially).
	
	2. Start the Windows Explorer, use the right mouse button to click the Blank.pot
	  icon, and drag it to the desktop.
	
	3. A shortcut menu appears. Click Create Shortcut here.
	
	4. Click on this icon when you want to enter PowerPoint with the Blank.pot as
	  the default presentation being the first thing you see.
	
	PowerPoint 4.x
	--------------
	
	1. Run PowerPoint, choose the options you would like to load as the default,
	  make any desired changes to the default slide (for example, font, color, or
	  layout), and save the file as Default.ppt. Make sure you save it in the same
	  directory as the PowerPoint executable file.
	
	2. Exit PowerPoint.
	
	3. In Program Manager, click the PowerPoint icon. Click Properties on the File
	  menu.
	
	4. The Command Line box in the Program Item Properties dialog box contains
	  something similar to the following:
	
	  C:\Powerpnt\Powerpnt.Exe
	
	  Change this line to read
	
	  "C:\Powerpnt\Powerpnt.Exe C:\Powerpnt\Default.Ppt" (without the quotation
	  marks)
	
	  where drive C is the drive where the PowerPoint directory resides, and
	  Powerpnt is the PowerPoint directory.
	
	5. Click OK to save the changes.
	
	6. Open File Manager and select the file C:\POWERPNT\DEFAULT.PPT.
	
	7. On the File menu, click Properties.
	
	8. Under Attributes, select the Read Only check box. Click OK and close File
	  Manager.
	
	9. Double-click the icon to start PowerPoint.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 power point powerpt ppt95 winppt
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
