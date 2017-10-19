---
layout: page
title: "Q197076: INFO: Controlling Anti-aliased Text via the LOGFONT Structure"
permalink: /kb/197/Q197076/
---

## Q197076: INFO: Controlling Anti-aliased Text via the LOGFONT Structure

	Article: Q197076
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98; winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Beginning with Windows 95 and Windows NT 4.0, the Graphics Device Interface
	(GDI) can display TrueType fonts that are anti-aliased for better on-screen
	readability. Applications receive the benefits of anti-aliased text without
	making modifications to the program code. However, applications may want to
	control the use of anti-aliased explicitly.
	
	MORE INFORMATION
	================
	
	Windows and Windows NT display anti-aliased text if the video display is
	configured to be 16-bit per pixel or greater color depth and the user has chosen
	the "smooth edges of screen fonts" display option. Anti-aliased text, otherwise
	known as gray-scale text, uses shades of gray when the background is white, to
	smooth the transition of glyph edge pixels to the background color.
	
	Application developers can specifically realize fonts with or without anti-
	aliasing by using the lfQuality member of the LOGFONT structure.
	
	NOTE: Anti-aliased text can only be realized if the video display is configured
	to be in 16-bit per pixel or greater color depth.
	
	Unfortunately the Platform SDK documentation for the LOGFONT structure fails to
	document the constants that are used to control anti-aliased text by the
	application. However, the following constants are declared in the WinGDI.h
	header file of the Platform SDK:
	
	     #define NONANTIALIASED_QUALITY  3
	     #define ANTIALIASED_QUALITY     4
	
	Disabling Anti-Aliased Text
	---------------------------
	
	To disable anti-aliased text, set the LOGFONT structure's lfQuality member to
	NONANTIALIASED_QUALITY. The font created by selecting the HFONT into a device
	context (DC) is not anti-aliased even if the system option for anti- aliasing
	has been chosen.
	
	Enabling Anti-Aliased Text
	--------------------------
	
	To enable anti-aliased text, set the LOGFONT structure's lfQuality member to
	ANTIALIASED_QUALITY. The font created by selecting the HFONT into a device
	context (DC) is anti-aliased if the system's video display settings can support
	anti-aliased fonts.
	
	If an application sets the lfQuality member of the LOGFONT structure to
	DEFAULT_QUALITY or PROOF_QUALITY, anti-aliasing of text is controlled by the
	user's selection of the "smooth edges of screen fonts" display option.
	
	NOTE: The Windows 95 base installation does not produce anti-aliased text (smooth
	fonts). To install font smoothing capabilities into Windows 95, install the
	Plus! pack for Windows 95 or download the font smoothing utility from the
	Microsoft Typography Web site referenced below.
	
	REFERENCES
	==========
	
	To obtain the Windows 95 font smoothing utility, download the Microsoft
	Typography Web site at:
	
	  http://www.microsoft.com/typography/
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
