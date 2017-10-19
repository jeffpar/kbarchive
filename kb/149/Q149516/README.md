---
layout: page
title: "Q149516: BUG: Watching a DLL Common Block Using Context Operator Fails"
permalink: /kb/149/Q149516/
---

## Q149516: BUG: Watching a DLL Common Block Using Context Operator Fails

	Article: Q149516
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to view a DLL variable or common block contents in a watch window
	using the context operator {} fails with the following messages:
	
	DLL variable:
	
	  "EE2347: Undefined variable"
	
	DLL common block:
	
	  "Invalid Debug Information"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Debug information for DLL variables and common blocks is available in the
	debugger's Locals window. The members of a common block can be viewed in a watch
	window but only if specified without the context operator. Trying to view a DLL
	variable or common block by using the context operator will always fail. Also,
	attempting to watch a common block structure in a watch window will fail with
	the message "Invalid Debug Information".
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create two source code files using the sample code provided. One (Theapp.for)
	  will be the main source code and the other (Thedll.for) will be the DLL
	  source code.
	
	2. Create a QuickWin project using the main source file (Theapp.for). From the
	  Developer Studio File menu, choose New, and then double-click the Project
	  Workspace option. In the New Project Workspace dialog box, click the QuickWin
	  Application type, name the project TheApp, set the project directory, and
	  click the Create button.
	
	3. Insert the main source code file into the project. From the Insert menu,
	  choose Files into Project. and select the Theapp.for file.
	
	4. Create a DLL project using the file Thedll.for, which will be a subproject of
	  the QuickWin project created in step 2. From the Insert menu, choose Project,
	  and then in the Insert Project dialog box, click the Dynamic-Link Library
	  type, name the project TheDll, click Subprojects of:, and click the Create
	  button.
	
	5. Insert the DLL source code file into the subproject. From the Insert menu,
	  choose Files into Project, and select the Thedll.for file.
	
	6. Set the DLL build output directory to be the same as the QuickWin build
	  output directory. From the Build menu, choose Settings, and then select the
	  General folder tab. In the Settings For list box, highlight the DLL debug
	  project target "TheDll - Win32 Debug (TheDll.dll)." Then select the Output
	  files edit box, and remove the "TheDll\Debug" text, replacing it with
	  "Debug." Then click the OK button to save the changes and exit the dialog
	  box.
	
	7. Build and link the QuickWin and DLL projects. In Developer Studio, change the
	  default configuration to "TheApp - Win32 Debug." Then from the Build menu,
	  choose Rebuild All.
	
	8. Try to view the common block or its members in a watch window. Begin a
	  debugging session, from the Build menu, choose Debug, and then select Step
	  Into. Step past the variable initialization statements in the DLL. Now, in a
	  watch window, type the variable "i" or the common block name "TheBlock" using
	  the context operator as in the following examples and press the ENTER key.
	
	  Example One
	  -----------
	
	  Type:
	
	  " {,,TheDll.dll}i" (without the quotation marks)
	
	  Result:
	
	  This fails with "EE2347: Undefined variable"
	
	  Example Two
	  -----------
	
	  Type:
	
	  " {,,TheDll.dll}TheBlock" (without the quotation marks)
	
	  Result:
	
	  This fails with "Invalid Debug Information"
	
	Sample Code
	-----------
	
	Main:
	
	  C Compile options needed: /MW /Zi
	  C TheApp.for (QuickWin app)
	        program TheApp
	            integer i, j
	            common /TheBlock/ i, j
	            !ms$attributes dllimport :: TheBlock
	            call initcommon()
	            print *, i, j
	        end
	
	DLL:
	
	  C Compile options needed: /LD /Zi
	  C TheDll.for (DLL for TheApp)
	        subroutine initcommon()
	            !ms$attributes dllexport :: initcommon
	            integer i, j
	            common /TheBlock/ i, j
	            !ms$attributes dllexport :: TheBlock
	            i = 5
	            j = 7
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
