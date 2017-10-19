---
layout: page
title: "Q136670: How to Set Up CTRL+G as a Find Again Hot Key in Visual FoxPro"
permalink: /kb/136/Q136670/
---

## Q136670: How to Set Up CTRL+G as a Find Again Hot Key in Visual FoxPro

	Article: Q136670
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro does not automatically use CTRL+G as a Find Again hot key, but you
	can add it.
	
	MORE INFORMATION
	================
	
	To add use CTRL+G as a Find Again hot key to repeat the last text search:
	
	1. Open a program called Vfpstart.prg. It should be located in your VFP
	  directory.
	
	2. Locate the line that says "*Startup program for Visual FoxPro," and after
	  that line type:
	
	     DEFINE BAR _MED_FINDA OF _medit ;
	        PROMPT "Find A\<gain" ;
	        AFTER _MED_FIND ;
	        KEY Ctrl+G, "Ctrl+G" ;
	        MESSAGE "Repeat the last text search"
	
	3. Save and close Vfpstart.prg.
	
	4. The next time you start Visual FoxPro, Find Again will appear as an option in
	  the Edit menu.
	
	REFERENCES
	==========
	
	Programming Visual FoxPro 3.0, Page 17.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
