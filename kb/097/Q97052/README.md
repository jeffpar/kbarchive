---
layout: page
title: "Q97052: Redefining the Function Keys in FoxPro Config File"
permalink: /kb/097/Q97052/
---

## Q97052: Redefining the Function Keys in FoxPro Config File

{% raw %}

	Article: Q97052
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.0,1.01,1.02,1.21,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 1.0, 1.01, 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To assign an expression to a function key in the CONFIG.FPW (FoxPro for
	Windows), CONFIG.FX (FoxBASE+ for MS-DOS), or CONFIG.FP (FoxPro for MS-DOS)
	file, specify F<num>=<char_str>.
	
	MORE INFORMATION
	================
	
	For example, to assign the character string 'SET SYSMENU TO DEFAULT' to the F2
	key, use the following statement in the CONFIG.FPW file:
	
	  F2='SET SYSMENU TO DEFAULT;'
	
	FoxPro translates a semicolon (;) in the expression as a carriage return. When
	the F2 key is pressed, the command SET SYSMENU TO DEFAULT is executed.
	
	To clear function key definitions, use the CLEAR MACROS command.
	
	Additional query words: FoxDos FoxWin 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASE200DOS kbFoxBASESearch
	Version           : MS-DOS:1.0,1.01,1.02,1.21,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a
	
	=============================================================================
	

{% endraw %}
