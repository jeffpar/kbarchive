---
layout: page
title: "Q157945: PRB: What to Do If Syntax Coloring Is Not Working"
permalink: /kb/157/Q157945/
---

## Q157945: PRB: What to Do If Syntax Coloring Is Not Working

	Article: Q157945
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Visual FoxPro 5.0, color highlighting of key words and comment
	lines in FoxPro code may not be active.
	
	CAUSE
	=====
	
	This may be the result of installing version 5.0 in the same directory that
	Visual FoxPro 3.0 is in.
	
	RESOLUTION
	==========
	
	There are three places where you may need to change this: the Command window,
	Program windows, and Method Code windows. Use the following steps:
	
	1. Right-click or press the Shift+F10 keys in any of the above windows and
	  select Properties.
	
	2. In the Properties window, check the box labeled "Syntax coloring."
	
	3. In the property sheet for Program and Method windows, check a second box
	  called "Apply to .prg files" or "Apply to method code" if coloring of syntax
	  is desired in all program files and all Method Code windows.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
