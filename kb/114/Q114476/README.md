---
layout: page
title: "Q114476: PRB: &quot;Position Is off the Screen&quot; Error When Loading FoxPro"
permalink: kb/114/Q114476/
---

## Q114476: PRB: &quot;Position Is off the Screen&quot; Error When Loading FoxPro

	Article: Q114476
	Product(s): Microsoft FoxPro
	Version(s): 2.60
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A window with the title "Error" appears when FoxPro version 2.6 for Windows is
	invoked. The text in this window says:
	
	  Error 30 (Position is off the screen.) occurred in SPLASH. Catalog Manager
	  cancelled.
	
	CAUSE
	=====
	
	In Windows 3.1, this error occurs when the Arial Bold and Arial Bold Italic
	TrueType fonts are missing and the Enable TrueType Fonts option is turned off.
	The "normal" Arial and Arial Italic fonts don't cause the problem.
	
	In Windows 3.0, this problem occurs when FoxPro for Windows attempts to load the
	introductory, or "splash," screen. The splash screen is displayed when the
	CONFIG.FPW file does not contain a CATMAN= statement.
	
	This behavior also may occur when either the standard VGA (640 X 480) video
	driver or an EGA driver is being used.
	
	This behavior may also occur when the Stealth Pro video driver is used in 1024 x
	768 mode.
	
	NOTE: This problem does not occur under all resolutions and may also be affected
	by the resources in use (Large Fonts or Small Fonts).
	
	RESOLUTION
	==========
	
	Windows 3.1
	-----------
	
	Add the Arial fonts to your system. To add the Arial fonts to your system, follow
	these steps:
	
	1. Open the Windows Control Panel and choose (double-click) the Fonts icon.
	
	2. Choose the TrueType button.
	
	3. Make sure that the Enable TrueType Fonts check box is selected.
	
	4. Choose OK to return to the Fonts dialog box.
	
	5. In the Fonts dialog box, choose the Add button.
	
	6. In the Directories list box, locate the font files.
	
	7. Select (highlight) the following fonts:
	
	  Arial (TrueType)
	  Arial Bold (TrueType)
	  Arial Bold Italic(TrueType)
	  Arial Italic (TrueType)
	
	8. Choose OK, and then choose Close.
	
	
	Windows 3.0
	-----------
	
	Since Windows 3.0 does not support TrueType fonts, it is not possible to
	implement the previous resolution with Windows 3.0. If FoxPro for Windows is
	running under Windows 3.0, do one of the following:
	
	- If you would like to proceed to the Catalog Manager when FoxPro is invoked,
	  add the following line to your CONFIG.FPW file:
	
	        CATMAN=ON
	
	  -or-
	
	- If you would like to proceed to the Command window when FoxPro is invoked,
	  add the following line to your CONFIG.FPW file:
	
	        CATMAN=OFF
	
	When CATMAN=ON or CATMAN=OFF is placed in the CONFIG.FPW file, the splash screen
	will not be invoked. The splash screen will not function properly under Windows
	3.0 because Windows 3.0 does not support TrueType fonts.
	
	Stealth Pro Video Driver
	------------------------
	
	If you are running this video driver in 1024 x 768 mode, do one of the
	following:
	
	- If you would like to proceed to the Catalog Manager when FoxPro is invoked,
	  add the following line to your CONFIG.FPW file:
	
	        CATMAN=ON
	
	  -or-
	
	- If you would like to proceed to the Command window when FoxPro is invoked,
	  add the following line to your CONFIG.FPW file:
	
	        CATMAN=OFF
	
	When CATMAN=ON or CATMAN=OFF is placed in the CONFIG.FPW file, the splash screen
	will not be invoked.
	
	Additional query words: FoxWin errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260
	Version           : 2.60
	
	=============================================================================
	
