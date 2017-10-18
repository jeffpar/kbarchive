---
layout: page
title: "Q83448: Error Message &quot;Invalid TrueType Font Detected...&quot;"
permalink: kb/083/Q83448/
---

## Q83448: Error Message &quot;Invalid TrueType Font Detected...&quot;

	Article: Q83448
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 displays the following error message if you use a corrupt
	TrueType font:
	
	  Invalid TrueType Font Detected
	  An application used a TrueType font that caused an error in Windows
	  Quit all applications, and then restart Windows
	
	MORE INFORMATION
	================
	
	As a result of this error, TrueType fonts may no longer be available in your
	application. This problem occurs because after Windows detects an invalid
	TrueType font, it disables TrueType fonts availability to maintain the integrity
	of the system. To enable TrueType fonts again, quit all your applications, then
	restart Windows.
	
	Make sure you delete and reinstall the corrupt font before using it again. If you
	don't know which font is causing the error message, follow the steps below to
	determine which font is corrupt:
	
	1. Open the Control Panel, and double-click the Fonts icon.
	
	2. Click each font entry in the Installed Fonts list.
	
	3. Check the line "The size of the font on the disk is: X" If the size is either
	  0 (zero)K or 2K, you must remove and reinstall that particular font. For
	  information on how to add and remove TrueType fonts, refer to pages 166 and
	  168 in the "Microsoft Windows User's Guide" for version 3.1.
	
	If you attempt to reinstall the font without restarting Windows, the following
	message appears:
	
	  TrueType fonts are disabled
	
	  To use TrueType fonts, select the enable TrueType Fonts check box in the
	  TrueType dialog box, and then restart Windows before installing TrueType
	  fonts.
	
	All you need to do is restart Windows; TrueType fonts are enabled automatically.
	
	
	KBCategory: kbprint kbenv kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 ttf True Type invalid tt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
