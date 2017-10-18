---
layout: page
title: "Q110608: PPT: Resetting Customized Toolbars in PowerPoint"
permalink: kb/110/Q110608/
---

## Q110608: PPT: Resetting Customized Toolbars in PowerPoint

	Article: Q110608
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PowerPoint enables you to customize the contents and the position of toolbars.
	This article describes how to reset PowerPoint to the default toolbar settings.
	
	MORE INFORMATION
	================
	
	PowerPoint 4.0 and 7.0
	----------------------
	
	This method is useful for restoring the default set of icons in one or more
	toolbars, but not for restoring their default positions.
	
	1. On the View menu, click Toolbars.
	
	2. The Toolbars dialog box appears. Each toolbar currently in use by PowerPoint
	  is selected. Clear all the selections, then select each of the toolbars
	  previously selected.
	
	3. Click Reset.
	
	4. Click Close.
	
	PowerPoint 4.0 for Windows--Alternative Method
	----------------------------------------------
	
	NOTE: This method removes all custom settings you have made, not just changes to
	the toolbars.
	
	This method restores the toolbars to their default set of icons and their default
	positions. This process applies to PowerPoint for Windows only.
	
	1. Close PowerPoint.
	
	2. Open the Powerpnt.ini file in a text editor, such as Notepad. This file is
	  typically located in the \Windows folder.
	
	3. Delete all of the entries under the [Toolbars] section. Save the Powerpnt.ini
	  file.
	
	4. Restart PowerPoint.
	
	5. PowerPoint resets the toolbars to their default values and positions.
	
	PowerPoint 4.0 for Macintosh--Alternative Method
	------------------------------------------------
	
	NOTE: This method removes all custom settings you have made, not just changes to
	the toolbars.
	
	This method restores the toolbars to their default set of icons and their default
	positions. This process applies to PowerPoint for the Macintosh only.
	
	1. Close PowerPoint.
	
	2. Delete the PowerPoint Settings (4) file. This file is typically located in
	  the System:Preferences folder.
	
	3. Restart PowerPoint.
	
	PowerPoint resets the toolbars to their default values and positions.
	
	
	Additional query words: 4.00 4.00a 4.00c 7.00 power point powerpt ppt95 macppt winppt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
