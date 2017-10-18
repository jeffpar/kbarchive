---
layout: page
title: "Q153874: PRB: Setup Error 992 Object 243 When Installing on Win95"
permalink: kb/153/Q153874/
---

## Q153874: PRB: Setup Error 992 Object 243 When Installing on Win95

	Article: Q153874
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing a set of disks created by the Setup Wizard on Windows 95, the
	user receives an error. This error occurs after clicking "Continue" when
	choosing the directory to install the application. The title bar of the dialog
	box that comes up says:
	
	  "Setup Error 992"
	
	The box itself reads:
	
	  "Object 243. Your setup files may be damaged. Try restarting the setup
	  program."
	
	The same set of disks will install without error onto a Windows for Workgroups
	system.
	
	CAUSE
	=====
	
	In step 6 of the Setup Wizard ("File Summary"), the developer has specified a
	description for an icon to be created containing illegal characters. Characters
	that cannot be used in the description of a Windows 95 icon are (not including
	the commas):
	
	  \,/,:,*,?,",<,>,|,+
	
	RESOLUTION
	==========
	
	Do not use any of the characters specified above in the description of an icon
	in step 6 of the Setup Wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project, and add a new program to it called test.prg. In
	  test.prg, put one line of code:
	
	     =messagebox("Hello World")
	
	2. Create a new subdirectory called test, and build the project into an exe
	  called test.exe in that new subdirectory.
	
	3. Run the Setup Wizard, and point to the test subdirectory you just created. In
	  step 6 of the Setup Wizard, choose a file and click the "PM Item" check box.
	
	4. In the resulting dialog box, give the description as follows (excluding
	  quotation marks):
	
	     "This is a Test/Simulation"
	
	  In the Command line, type (excluding the quotation marks):
	
	     "%s\test.exe"
	
	5. Finish creating disk images.
	
	6. Attempt to run setup.exe from the disk images you just created. After
	  clicking "Continue" from the dialog where you choose the application
	  directory, you will receive the error described above.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbprb
	
	=============================================================================
	
