---
layout: page
title: "Q141956: BUG: 'Z' Function on @ GET Doesn't Suppress Display of Zero"
permalink: kb/141/Q141956/
---

## Q141956: BUG: 'Z' Function on @ GET Doesn't Suppress Display of Zero

	Article: Q141956
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a format function code of 'Z' defined for an @...GET text box on
	your screen, the value of '0' (zero) is still displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following information is taken from the Help file on the FUNCTION clause for
	the text box. The FUNCTION parameter:
	
	  Specifies a function code or picture code that determines how the text box
	  output is displayed or printed. You can include the FUNCTION clause, the
	  PICTURE clause, or both to create an editing mask. These clauses contain
	  special codes that control how the memory variable, array element, or field
	  is displayed and edited.
	
	The Z function code is supposed to display the memory variable or field name as
	blank if its numeric value is 0. In Visual FoxPro, when the text box has focus,
	the display of the zero is not suppressed. In FoxPro for Windows, no zero is
	displayed.
	
	Steps to Reproduce Problem
	--------------------------
	
	  CLEAR
	  Dept=0
	  @ 2,2 GET dept FUNCTION "@Z"          ;
	                 SIZE 1.000, 18.000     ;
	                 FONT "MS sans Serif", 8
	  READ
	
	Additional query words: VFoxWin buglist3.00b text box kbvfp300 kbvfp500 kbvfp600 function picture clause
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0b,5.0,6.0
	
	=============================================================================
	
