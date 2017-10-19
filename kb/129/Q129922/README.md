---
layout: page
title: "Q129922: BUG: Error Occurs When Stepping through BROWSE FOR UDF() Code"
permalink: /kb/129/Q129922/
---

## Q129922: BUG: Error Occurs When Stepping through BROWSE FOR UDF() Code

	Article: Q129922
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A BROWSE command contains a FOR condition that calls a User Defined Function.
	Running the code through the Debugger and closing the BROWSE window while the
	code is executing, yields an Exception Error in Windows and Windows for
	Workgroups, an Unrecoverable Application Error (UAE) in Windows NT, or an
	Illegal Operation Error Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual FoxPro for Windows.
	
	2. Create a program that contains the following code:
	
	        USE SYS(2004)+"SAMPLES\DATA\CUSTOMER" && Sample table
	        BROWSE FOR GetForCond()
	
	        PROCEDURE GetForCond
	        RETURN UPPER(ALLTRIM(country))="BRAZIL"
	
	3. Close and save the program.
	
	4. Activate the Debugger window.
	
	5. Select the program from the Debugger's Trace Debug menu pad, and open the
	  program with the DO <program> menu bar command.
	
	6. Select the "Step Into" icon, or press the F8 key to step through the
	  codeClick the STEP option.
	
	7. When the BROWSE window displays, close the window. Note that it might take a
	  few minutes to close the BROWSE window.
	
	8. Click the "Step Into" icon or press the F8 keySTEP button. The error occurs.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
