---
layout: page
title: "Q137628: PRB:Visual FoxPro App's .EXE Quits &amp; Returns to Command Window"
permalink: /kb/137/Q137628/
---

## Q137628: PRB:Visual FoxPro App's .EXE Quits &amp; Returns to Command Window

	Article: Q137628
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro application executable that was created from a workstation
	installation of Visual FoxPro quits, it returns to the Visual FoxPro Command
	window.
	
	CAUSE
	=====
	
	The distributable .exe file is using Vfp.exe to run.
	
	RESOLUTION
	==========
	
	Use one of the following options to resolve this behavior:
	
	- Place a copy of the Vfp300.esl support library file in the directory where
	  your Visual FoxPro-created .exe is located.
	
	  -or-
	
	- Add the QUIT command after the CLEAR EVENTS command in the procedure you use
	  to close the executable.
	
	  -or-
	
	- Install Visual FoxPro using one of the other three available install options:
	  Minimum, Complete, or Custom.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Using the following configuration of a PATH statement in your Autoexec.bat file
	that refers to the directory where the administrative version of Visual FoxPro
	is installed with the VFP300.ESL support library, create an executable of a
	simple form located on your local drive. After pressing a Quit button on the
	executable's form, you return to the Command window.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the administrative version of Visual FoxPro on a server.
	
	2. Connect to that server, and install the workstation version of Visual FoxPro
	  on your local drive.
	
	3. Modify the PATH statement in your Autoexec.bat file so that it incorporates
	  the drive and directory of the administrative version of Visual FoxPro.
	
	4. Create a new project that holds the following program:
	
	     var=CREATEOBJECT("MyForm")
	     var.Show
	     READ EVENTS
	
	     DEFINE CLASS MyForm AS Form
	       ADD OBJECT MyCommand AS CommandButton WITH top=5,left=5,caption='Quit'
	
	       PROCEDURE MyCommand.Click
	         CLEAR EVENTS
	       ENDPROC
	     ENDDEFINE
	
	5. Create an executable from this project. Check that the .esl and Vfp.exe files
	  are in the administrative FoxPro directory and not on your local drive.
	
	6. Run this executable outside of Visual FoxPro.
	
	7. Click the button to exit the executable.
	
	Additional query words: VFoxWin dk runtime run-time akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
