---
layout: page
title: "Q68238: System Font Too Large After Installing Screen Fonts"
permalink: /kb/068/Q68238/
---

## Q68238: System Font Too Large After Installing Screen Fonts

	Article: Q68238
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After using a third-party Windows screen font creation and installation utility,
	such as Bitstream Fontware Installation Kit, to create and install large Windows
	screen fonts, the text under the icons in Program Manager and on the Windows 3.0
	desktop, may become very large. This is because the fonts that were being used
	originally were the wrong resolution for the video driver that is installed.
	
	You must install the appropriate set of screen fonts from the original Windows
	disks by using the Control Panel. You can also use the EXPAND.EXE utility to
	decompress the appropriate font files from the disks by copying them to the
	Windows SYSTEM directory and modifying the [fonts] section of the WIN.INI file,
	appropriately.
	
	MORE INFORMATION
	================
	
	The screen font used for the text under the icons for Program Manager is chosen
	from the list of available screen fonts in the WIN.INI, with a preference for
	those fonts that match the screen resolution of the video driver installed. For
	Windows installed using the VGA video driver, the preference would be to use the
	font closest to Helv 8 (VGA Res). This font is included in the file HELVE.FON.
	If that font is not installed, the system will attempt to pick an appropriate
	substitute, choosing from fonts with the correct resolution first.
	
	When you install additional screen fonts that have been created for the correct
	resolution for the Windows video driver, these fonts will take precedence over
	other screen fonts that may be closer in size and style to Helv 8 (VGA Res) but
	are at the wrong resolution.
	
	For example, if you are running in VGA mode and the only Helv font installed at
	VGA resolution is 24 point, the font under the icons in Program Manager will use
	the Helv 24 (VGA Res) font even if there is a Helv 8 (8514/a Res) font
	installed.
	
	Additional query words: 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
