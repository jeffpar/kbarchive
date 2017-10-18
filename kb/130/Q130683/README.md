---
layout: page
title: "Q130683: How to Create a General Purpose Reusable Navigation Toolbar"
permalink: kb/130/Q130683/
---

## Q130683: How to Create a General Purpose Reusable Navigation Toolbar

	Article: Q130683
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create and use a general-purpose navigational
	Toolbar that has VCR-like icons on its buttons.
	
	MORE INFORMATION
	================
	
	Use the Visual Class Designer tool to create a general-purpose navigational
	Toolbar by creating a visual class based on the Toolbar base class. Then you
	need only add code to the individual buttons of this class, drop the class on a
	formset, and then run the formset upon starting Visual FoxPro to make the
	Toolbar accessible.
	
	Steps to Create Custom Toolbar
	------------------------------
	
	1. Choose New from the File menu, and select Visual Class as the file type.
	
	2. Use the Visual Class Designer to create a new class based on the Toolbar base
	  class. To this class, add four command buttons. Change the caption property
	  for each button to <<, <, >, and >>.
	
	3. Add the following code to the click method of each command button as
	  indicated:
	
	     Command1.Click (<<):
	
	        GO TOP
	
	     Command2.Click (<):
	
	        SKIP -1
	        IF BOF()
	           GO TOP
	        ENDIF
	
	     Command3.Click (>):
	
	        SKIP +1
	        IF EOF()
	           GO TOP
	        ENDIF
	
	     Command4.Click (>>):
	
	        GO BOTTOM
	
	4. Save this new class.
	
	5. Create a new form, and set the Visible property of the form to false (.F.).
	  If the visible property on the form is set to true (.T.), meaning that the
	  toolbar will be used as a navigation toolbar to move through records in a
	  form, add the command _SCREEN.ACTIVEFORM.REFRESH to the code of each one of
	  the command button's click events as the last line of code. Add the Toolbar
	  class you just created and save the form. Choose Yes when prompted to create
	  a formset. Confirm that the Visible property of the toolbar is set to true
	  (.T.).
	
	6. In the destroy procedure for the toolbar, place the following code to release
	  the Toolbar and Formset memory when the Toolbar is closed:
	
	     RELEASE THISFORMSET
	
	7. Run the form.
	
	The Toolbar should come up. Open a table, and note the record number in the
	status bar. Click the various buttons, and note where the record pointer moves
	by the watching the indicator on the status bar. The Toolbar can also be moved
	and docked.
	
	To open this Toolbar automaticaly when FoxPro starts, place the following line in
	the CONFIG.FPW file:
	
	     command= DO FORM <PATH\FORM NAME>
	
	Where PATH is the path to the location of this form and FORM NAME is the name of
	the form when saved. This will allow the Toolbar to be used with any open table.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
