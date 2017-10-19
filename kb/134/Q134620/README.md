---
layout: page
title: "Q134620: FIX: Error in Converter: Variable Gendircount Not Found"
permalink: /kb/134/Q134620/
---

## Q134620: FIX: Error in Converter: Variable Gendircount Not Found

	Article: Q134620
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a screen built in FoxPro version 2.x that contains a #REGION statement is
	converted, the converter halts, and displays this error message:
	
	  Variable 'GENDIRCOUNT' is not found
	
	CAUSE
	=====
	
	This is an error in the Converter. The error occurs when the #REGION statement
	is located in an object's code or in the Cleanup code - but not in the Setup
	code. This causes the GENDIRCOUNT variable to be passed to a method when it was
	not initialized.
	
	WORKAROUND
	==========
	
	Edit the Converter code to initialize the GENDIRCOUNT variable. The source code
	to the Converter application is included with the Professional Edition of Visual
	FoxPro. The following step-by-step procedure illustrates the method to correct
	the error.
	
	Step-by-Step Workaround
	-----------------------
	
	1. Open the Convert.pjx project located in the Tools\Convert directory.
	
	2. Select the Code tab. Drill down to view the Program, and select the Convert
	  program. Click the Modify button to edit the file.
	
	3. On the Edit menu, click Find, and in the Look For area of the dialog box,
	  type FUNCTION AddMethods. Click Find. The Addmethods method is the one to
	  modify.
	
	4. The second line of code in the Addmethods method is this LOCAL statement:
	
	        LOCAL cTmp, savearea, gendir, m.newmethod2
	
	  Add the GENDIRCOUNT variable to this statement. It should now read:
	
	        LOCAL cTmp, savearea, gendir, m.newmethod2, Gendircount
	
	5. Close the Program, and save changes. Rebuild the Converter application.
	
	6. In the Project Manager, click the Build button, and then click Build
	  Application. The Save As dialog box is displayed.
	
	7. In the Save As dialog box, select the main Visual FoxPro directory (VFP).
	
	8. Click Save. The new application is built in your VFP directory.
	
	You can verify the value of the _CONVERTER system memory variable to ensure that
	it points to the correct location of the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In FoxPro for Windows, version 2.6, issue this command:
	
	     CREATE SCREEN
	
	2. In the screen's Cleanup code, place this code:
	
	     #REGION 1
	     Mvar1=2
	
	     #REGION 2
	     Mvar2=3
	
	3. Save the screen.
	
	4. In Visual FoxPro, on the File menu, click Open, and try to open the screen as
	  a form.
	
	5. The Converter is invoked. Select Functional Conversion, and Click the
	  Continue button. The error is displayed and the screen is not converted.
	
	Additional query words: 3.00 VFoxWin Fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
