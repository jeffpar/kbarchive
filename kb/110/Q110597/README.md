---
layout: page
title: "Q110597: Scenes 1.0: Does Not Restore MSSCENES.BMP as Wallpaper"
permalink: /kb/110/Q110597/
---

## Q110597: Scenes 1.0: Does Not Restore MSSCENES.BMP as Wallpaper

	Article: Q110597
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Microsoft Scenes, the Wallpaper option in the Desktop dialog box
	of Control Panel is set to (None).
	
	CAUSE
	=====
	
	This problem occurs if the Wallpaper option is set to MSSCENES.BMP prior to
	running Scenes.
	
	Scenes is designed to control the Wallpaper option while it is running. When you
	start Scenes, it saves its wallpaper in your Windows directory as MSSCENES.BMP.
	Your original Wallpaper selection is written to the SCENES.INI file so that it
	can be restored when you quit Scenes.
	
	When you quit Scenes, it removes MSSCENES.BMP as the wallpaper and replaces it
	with the name of the previous wallpaper, provided it was not MSSCENES.BMP.
	
	RESOLUTION
	==========
	
	If you want to use MSSCENES.BMP as your wallpaper, copy the file to another
	filename (for example, SCENES.BMP) and select the new filename as your wallpaper
	in Control Panel.
	
	Additional query words: blank close gone msscenes screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
