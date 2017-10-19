---
layout: page
title: "Q109612: How to Pass Parameters from Windows to FoxPro for Windows"
permalink: /kb/109/Q109612/
---

## Q109612: How to Pass Parameters from Windows to FoxPro for Windows

	Article: Q109612
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are passing parameters from Windows to FoxPro for Windows, follow the
	rules below:
	
	- Do not enclose Character-type parameters in single quotation marks.
	
	- Separate multiple parameters with a space.
	
	- Each parameter is received in the Character type. Use conversion functions
	  such as VAL() or CTOD() to change to types other than Character.
	
	- If an application is invoked in the FoxPro command line, the application must
	  begin with a PARAMETERS statement.
	
	MORE INFORMATION
	================
	
	To experiment with passing parameters, do the following:
	
	1. Create a program called TEST in the FoxPro for Windows directory. Enter the
	  following lines of code in the TEST program:
	
	        PARAMETERS x,y
	        WAIT WINDOW "This is parameter 1:  " +x
	        WAIT WINDOW "This is parameter 2:  " +y
	
	2. In Windows Program Manager, select (highlight) the FoxPro for Windows icon.
	
	3. In Program Manager, choose Properties from the File menu.
	
	4. In the Command Line box, type the following:
	
	  " D:\FOXPROW\FOXPROW.EXE \FOXPROW\test.prg apple orange" (without the
	  quotation marks)
	
	This command line gives the path to TEST.PRG and specifies the information to be
	passed to parameters x and y; in this case, apple and orange.
	
	NOTE: This procedure will work for an .EXE file as well.
	
	REFERENCES
	==========
	
	For information about passing parameters from MS-DOS to a FoxPro for MS-DOS
	program, query on the following words here in the Microsoft Knowledge Base:
	
	  "pass" (without the quotation marks) and "parameters" (without the quotation
	  marks) and "foxpro" (without the quotation marks) and "ms-dos" (without the
	  quotation marks) and "prompt" (without the quotation marks)
	
	
	Additional query words: VFoxWin FoxWin 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
