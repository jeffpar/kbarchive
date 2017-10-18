---
layout: page
title: "Q125044: PRB: SYS(2004) From .EXE Returns .ESL Directory"
permalink: kb/125/Q125044/
---

## Q125044: PRB: SYS(2004) From .EXE Returns .ESL Directory

	Article: Q125044
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When run from an executable file (.EXE) outside of the FoxPro development
	environment, the SYS(2004) command returns the directory containing the
	FOXW<nnnn>.ESL file if the .ESL file is not located in the same directory
	as the .EXE.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When an .EXE created with the FoxPro for Windows Distribution Kit is run, it
	must access the .ESL support library. Since the .ESL file is rather large, it
	can be helpful to use a single common .ESL for several .EXE files. It is
	permissible to place the .ESL in a directory other than the directory which
	contains the .EXE as long as the .ESL file is in the MS-DOS path. However, after
	following this approach the SYS(2004) command will return the .ESL directory
	instead of the directory containing the .EXE.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Add a one-line program to the project that contains the command:
	
	        WAIT WINDOW SYS(2004)
	
	3. Build an .EXE from the project.
	
	4. Move the .ESL file to a directory in the MS-DOS path (such as C:\DOS) other
	  than the directory which contains the .EXE.
	
	  NOTE: Type "! PATH" in the Command window to display the MS-DOS path.
	
	5. Quit FoxPro and run the .EXE.
	
	Note that the WAIT WINDOW SYS(2004) returns the directory location of the .ESL
	file rather than the directory containing the .EXE file.
	
	Note: The SYS(2004) command returns the FoxPro directory if run from an .EXE
	within the development environment.
	
	For more information about this topic under Visual FoxPro, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q133246 How to Install VFP300.ESL in a Distributed Application
	
	  Q133143 PRB: VFP300.ESL Goes in System Directory, Not App's Directory
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
