---
layout: page
title: "Q135519: BUG: Creating 500 Instances of a Form Class Causes IC Error"
permalink: /kb/135/Q135519/
---

## Q135519: BUG: Creating 500 Instances of a Form Class Causes IC Error

	Article: Q135519
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to create 500 instances of a form class containing a small number of
	controls in a FOR loop causes an "Internal Consistency Error" (ICE).
	
	The number of instances it can instantiate from a form class before an ICE occurs
	depends on the amount of RAM and the operating system on your computer.
	
	NOTE: On 16-bit operating systems, such as Windows for Workgroups 3.11, you may
	get the following error message instead of an ICE:
	
	  There is not enough memory to complete this operation.
	
	In Visual FoxPro 5.0, the message "Too Many Windows Open" appears and the program
	ends. FoxPro does not exit.
	
	In Visual FoxPro 5.0a, the message "Too Many Windows Open" appears, and the
	program removes all the instances of the form class from the screen. FoxPro does
	not abnormally terminate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Enter the following command in the Command window:
	
	     CREATE CLASS x OF x AS FORM
	
	2. Add the following objects to the form:
	
	  Text Box
	  list box
	  Option Group
	  check box
	  Spinner
	
	3. Press CTRL+W to save the class, and exit from the Class Designer.
	
	4. Enter the following command in the Command window:
	
	     MODIFY COMMAND mul_inst.prg
	
	5. Type the following code into Mul_Inst.prg:
	
	     SET CLASSLIB TO X
	     PRIVATE i
	     FOR i = 1 TO 500
	        string = "x" + ALLTRIM(STR(i))
	        &string = CREATEOBJECT('x')
	        IF &string..Left = 500
	            &string..Left = 1
	        ENDIF
	        &string..Left = &string..Left+3
	        &string..Caption = string
	        &string..Show
	     NEXT i
	
	6. Enter the following command in the Command window:
	
	     DO MUL_INST.PRG
	
	Additional query words: kbvfp300b kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
