---
layout: page
title: "Q78417: Relocating Help Files in Windows with Multimedia Extensions"
permalink: /kb/078/Q78417/
---

## Q78417: Relocating Help Files in Windows with Multimedia Extensions

	Article: Q78417
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can move the .HLP Help files in Multimedia Windows to a different directory
	by either creating or editing the WINHELP.INI file.
	
	NOTE: You cannot relocate help files in the original Windows 3.0 nor 3.0a
	product.
	
	MORE INFORMATION
	================
	
	To relocate a Help file:
	
	1. Open the the WINHELP.INI file in a text editor such as Notepad and look for
	  the [Files] section.
	
	2. On a new line, place the name of the file to be relocated.
	
	3. Enter an equal sign and then the path for the new location.
	
	For example, to relocate the Calculator Help file to a directory called WHELP on
	network drive X:, add the following line to the [Files] section of the
	WINHELP.INI file:
	
	  calc.hlp=X:\WHELP
	
	If a WINHELP.INI file does not yet exist, one needs to be created in the
	following form:
	
	     [Files]
	     calc.hlp=X:WHELP
	
	Additional query words: MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
