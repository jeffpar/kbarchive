---
layout: page
title: "Q84169: Changing the Icon Title Size/Font for Windows 3.1"
permalink: /kb/084/Q84169/
---

## Q84169: Changing the Icon Title Size/Font for Windows 3.1

	Article: Q84169
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 supplies an easy method for changing the font
	style, size, and boldness of icons. This method allows you to modify the titles
	below icons if they appears small or difficult to read. (Note that this
	procedure works for font files with a .FON extension only.)
	
	These modifications can be made in the WIN.INI file under the [Desktop] section.
	
	MORE INFORMATION
	================
	
	The following three settings can be added to the [Desktop] section of the
	WIN.INI file to change the font style, size, and boldness of titles below the
	desktop icons:
	
	- IconTitleFaceName=<FontName>
	
	     Default:  MS Sans Serif
	     Purpose:  This entry specifies the font used to display
	               icon titles.
	
	  NOTE: <FontName> is the name of the system font in Windows 3.1, not the
	  font filename, a TrueType font (for example, Arial), a Vector font (for
	  example, Modern), or a Raster font (for example, Courier).
	
	- IconTitleSize=<number>
	
	     Default:  8
	     Purpose:  This entry specifies the size of the font used to
	               display icon titles.
	
	- IconTitleStyle=<0-or-1>
	
	     Default:  0
	     Purpose:  This entry specifies whether the icon title text should be
	               bold. When the value is set to 1, the icon title text is
	               bold. When the value is set to 0, the icon title appears as
	               regular text.
	
	Not all fonts set with IconTitleFaceName change the icon title to the expected
	font. Of the fonts supplied with Windows 3.1, the bold, italic, and bold italic
	TrueType fonts do not display when set with this switch. The TrueType font
	Wingdings, and the Vector fonts, Modern, Roman, and Script do not display
	either.
	
	Steps to Edit the WIN.INI File
	------------------------------
	
	1. Open the WIN.INI file in Notepad.
	
	2. Scroll down to the [Desktop] section.
	
	3. Add the following lines (entries are not case sensitive):
	
	        IconTitleFaceName=Courier
	        IconTitleSize=10
	
	  This example changes the font to Courier and the title size to 10 point.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  raster and vector and fonts and windows
	
	  -or-
	
	  IconVerticalSpacing and SystemFont and windows
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit," version 3.1, page 169
	
	Additional query words: 3.10 3.11 screen small large icons icon sizing resizing changing
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
