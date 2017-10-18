---
layout: page
title: "Q141639: BUG: Subclass Member Object Properties Cannot Be Changed"
permalink: kb/141/Q141639/
---

## Q141639: BUG: Subclass Member Object Properties Cannot Be Changed

	Article: Q141639
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to change the FontItalic property of a label that is based on a
	subclass is unsuccessful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Issue the following commands in the Command window and follow the instructions as
	noted.
	
	     CREATE CLASS redform OF newclass AS form
	     * select the backcolor property and change the color to Red.
	
	     SET CLASSLIB TO newclass
	     CREATE CLASS redform2 OF newclass AS redform  && Add a label and save.
	
	     CREATE FORM test
	     * Add redform2 and create the FormSet by selecting the View Classes icon
	     * on the toolbar, choose ADD, and select newclass. Save the form.
	
	     MODIFY CLASS redform OF newclass  && Add a label and save.
	
	     MODIFY FORM test
	     * change the FontItalic property to .T. and save the form.
	
	     MODIFY FORM test
	     * note the FontItalic property for the Parent Class
	     * label is back to the default of .F.
	
	NOTE: This same behavior occurs with other font attributes when the class is
	created visually.
	
	Additional query words: VFoxWin kbbuglist5.00 buglist3.00 buglist3.00b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
