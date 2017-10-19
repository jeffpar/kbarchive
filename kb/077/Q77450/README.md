---
layout: page
title: "Q77450: 84-Key Keyboard Support for Special Character Set (Code Page)"
permalink: /kb/077/Q77450/
---

## Q77450: 84-Key Keyboard Support for Special Character Set (Code Page)

	Article: Q77450
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the Hungarian, Czechoslovakian, Norwegian, or Yugoslavian keyboard
	support function of MS-DOS version 5.0, you must load the correct character set
	(code page) and use a 101-key keyboard.
	
	The Hungarian, Czechoslovakian, Norwegian, and Yugoslavian keyboards are not
	supported with a standard 84-key keyboard.
	
	MORE INFORMATION
	================
	
	For example, when using the Hungarian character set (code page), the following
	statement is valid only for 101 key keyboards:
	
	     keyb hu,,[drive]:[directory path]\keyboard.sys
	
	(Where [drive]:[directory path] is the location of KEYBOARD.SYS.)
	
	When using an 84-key keyboard, the keyboard will default back to the English
	character set (code page).
	
	The following keyboard codes require the correct character set (code page) and a
	101-key keyboard:
	
	                              Keyboard
	  Country                   Code
	  -------                   --------
	
	  Czechoslovakia (Czech)    CZ
	  Czechoslovakia (Slovak)   SL
	  Norway                    NO
	  Yugoslavia                YU
	
	Additional query words: 5.00 keyb keyboard Nlsfunc
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
