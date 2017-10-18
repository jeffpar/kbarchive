---
layout: page
title: "Q95369: Using the Spelling Checker in FoxPro for Windows"
permalink: kb/095/Q95369/
---

## Q95369: Using the Spelling Checker in FoxPro for Windows

	Article: Q95369
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FoxPro for Windows comes with a spelling checker utility. To use this
	utility, choose Spelling from the Text menu. If the utility doesn't work, check
	the items listed below.
	
	MORE INFORMATION
	================
	
	In order to use the spelling checker utility, the following conditions must be
	met:
	
	- An editing window must be open, for example, a program file, memo field, or a
	  text file.
	
	- SPELLCHK.APP must be on the system.
	
	- The system variable _SPELLCHK must contain the full path to the SPELLCHK.APP
	  file (including the filename).
	
	  To check the value of _SPELLCHK, type "?_SPELLCHK" (without the quotation
	  marks) or "DISPLAY MEMORY" (without the quotation marks) in the Command
	  window.
	
	  If _SPELLCHK is blank, issue _SPELLCHK=" <pathname> <filename>" in
	  the Command window or in the CONFIG.FPW file. For example:
	
	  _SPELLCHK="C:\FOXPROW\SPELLCHK.APP"
	
	- The file FOXTOOLS.FLL must be in the FoxPro root directory.
	
	  NOTE: In a distributed executable, FOXTOOLS.FLL must be in the same directory
	  as the ESL file. Typically the Visual FoxPro ESL file is located in the
	  Windows\System directory.
	
	Additional query words: VFoxWin FoxWin 2.50 Spelling Foxtools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
