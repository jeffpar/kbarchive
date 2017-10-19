---
layout: page
title: "Q83402: Removing Wingdings Font Disables Flying Windows Screen"
permalink: /kb/083/Q83402/
---

## Q83402: Removing Wingdings Font Disables Flying Windows Screen

	Article: Q83402
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove the Wingdings TrueType font that ships with Microsoft Windows
	version 3.1 from the list of installed fonts in Control Panel, the Flying
	Windows screen saver no longer displays the Windows flag. Instead, the flags are
	replaced with small colored dots.
	
	CAUSE
	=====
	
	The flag logo is actually character number 255 in the Wingdings font set; that
	character must be installed so that the screen saver utility can recognize and
	use it.
	
	MORE INFORMATION
	================
	
	You can change the character that displays in the logo by modifying the file
	SSFLYWIN.SCR as follows:
	
	1. Make a backup copy of the SSFLYWIN.SCR file.
	
	2. Open the SSFLYWIN.SCR file in Microsoft Write and choose No Conversion.
	
	3. Search for the word "display." Right before the word display is the y umlaut
	  character (the letter "y" with two dots over it).
	
	4. Change that character to another character.
	
	  NOTE: You can use Character Map to find a character number. In the character
	  set that Windows uses, character number 255 is the y umlaut character for
	  regular text fonts (such as Times New Roman). By substituting a different
	  character, you can make a different Wingdings symbol appear.
	
	5. Save the file as SSFLYWIN.SCR, and test it in the Desktop dialog box of
	  Control Panel.
	
	Additional query words: 3.1 screensaver true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
