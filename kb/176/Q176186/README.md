---
layout: page
title: "Q176186: PRB: File Name Extension Needed to Run Exe from Support Library"
permalink: /kb/176/Q176186/
---

## Q176186: PRB: File Name Extension Needed to Run Exe from Support Library

	Article: Q176186
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use either the Visual FoxpPro Support Library PPC or Visual FoxPro
	Support Library 68K to open a file in the Do Program File dialog box and the
	file you are trying to open does not have an .exe file extension, an error
	message is displayed.
	
	CAUSE
	=====
	
	The name of the executable file selected does not have an .exe extension.
	
	RESOLUTION
	==========
	
	Add the .exe extension to the name of the executable file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When an executable file is built in the Visual FoxPro Project Manager, by
	default the .exe file name extension is not added. When the executable is
	double-clicked, it starts with the appropriate Visual FoxPro Support Library,
	assuming the library is present.
	
	Alternately, the Visual FoxPro Support Library can be double-clicked to open the
	file. It will then displays the Program to Do dialog box. An executable file
	(.exe extension), application file (.app extension) or a compiled program file
	(.fxp extension) can be selected to run. Unless the All Files check box in this
	dialog box is selected, only files with extensions of .exe, .app, and .fxp
	appear.
	
	If the All Files check box is selected in the Do Program File dialog box that
	appears after double-clicking the Visual FoxPro Support Library, other file
	types can be chosen. If an executable file without the .exe extension or a .prg
	file that does not have a corresponding .fxp file is chosen the following errror
	message occurs:
	
	  File '<filename>.prg' does not exist
	
	If a form (.scx extension) is selected, the following error occurs:
	
	  <path>:<filename>.scx is not an object file
	
	Forms cannot be run from the Visual FoxPro Support Library unless they are built
	into an executable or converted to program code and compiled.
	
	Note: 68K versions of an executable file can be tested on a PowerPC by
	double-clicking the Visual FoxPro (VFP) Support Library 68K and running the
	executable. This is especially useful for testing ODBC applications since PPC
	and 68K use different ODBC Setup control panels and ODBC SQL Server drivers.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following command in a new program file in Visual FoxPro:
	
	        WAIT WINDOW "This is a test"
	
	2. Save the program as Test.prg and create a new project named Test.pjx. Add the
	  Test.prg to the project.
	
	3. Build the project into an executable file named Test without the .exe
	  extension.
	
	4. Double-click the Visual FoxPro Support Library PPC and locate the executable
	  file built in step 3. Select the All Files check box so that the executable's
	  name, Test, appears. Select Test, and then click the Do button. This error
	  message appears:
	
	  File 'Test.prg' does not exist
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp kbMDAC250 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac
	Version           : MACINTOSH:3.0b; WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
