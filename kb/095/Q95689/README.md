---
layout: page
title: "Q95689: Unable to Run TrueType Font Pack 2 Font Assistant (FAST.EXE)"
permalink: kb/095/Q95689/
---

## Q95689: Unable to Run TrueType Font Pack 2 Font Assistant (FAST.EXE)

	Article: Q95689
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
	
	When you start the Microsoft Font Assistant version 1.0 or 1.01 (included with
	the TrueType Font Pack 2), you may receive the following error message
	
	  Font Assistant Program Startup Failed, Aborting
	
	and the program will quit.
	
	CAUSE
	=====
	
	This error message occurs if the FAST.INI file contains a syntax error or
	incorrect information.
	
	The FAST.INI file contains the font database used by the Font Assistant to manage
	TrueType fonts. If this file contains a syntax error or is corrupt, the above
	error message will be displayed and the Font Assistant will not run.
	
	RESOLUTION
	==========
	
	To correct this problem, rename the FAST.INI file from the MS-DOS prompt as
	follows:
	
	  REN C:\Windows\FAST.INI FAST.INO
	
	When you restart the Font Assistant, the program will scan the WIN.INI file for
	installed TrueType fonts and will recreate the FAST.INI file. You will have to
	recreate custom font groups.
	
	For more information on valid FAST.INI entries, query on the following words in
	the Microsoft Knowledge Base:
	
	  fast.ini and font and assistant and groups and fonts and pref
	
	Additional query words: 3.10 3.11 true type tt ttf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
