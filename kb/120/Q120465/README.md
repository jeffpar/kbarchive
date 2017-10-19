---
layout: page
title: "Q120465: Scenes 2.0: Pauses When Interrupting Screen Saver"
permalink: /kb/120/Q120465/
---

## Q120465: Scenes 2.0: Pauses When Interrupting Screen Saver

	Article: Q120465
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Scenes 2.0 may pause and display a "Changing Wallpaper..." indicator when the
	screen saver is interrupted.
	
	MORE INFORMATION
	================
	
	This pause is by design. It is caused by turning on "Change wallpaper picture
	with screen saver" in the Screen Saver settings.
	
	The pause is caused by Scenes writing the MSSCENES.BMP file to disk, and Windows
	redrawing the desktop wallpaper bitmap. Scenes 1.0 writes the file to disk and
	updates the desktop after every image; Scenes 2.0 does it only on exit.
	
	Additional query words: kbhowto msscenes screen saver screensaver slow pause interrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
