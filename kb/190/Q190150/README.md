---
layout: page
title: "Q190150: HOWTO: Force Application Setup to Use the Default Directory"
permalink: /kb/190/Q190150/
---

## Q190150: HOWTO: Force Application Setup to Use the Default Directory

	Article: Q190150
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp400 kbVBp500 kbVBp600 kbFAQ kbVBp600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although it is not recommended, the Visual Basic Setup Toolkit provides a means
	to disable the user interface for changing the default installation directory of
	your application's setup routine. This forces the installation process to use
	the default directory as the destination for the application's files.
	
	MORE INFORMATION
	================
	
	It is recommended that you allow the user to choose the destination directory
	for Windows applications setup processes. However, a Visual Basic application
	that has a setup program created by the Visual Basic Setup Wizard on Visual
	Basic versions 4.0 and 5.0 or the Package and Deployment Wizard (PDW) on Visual
	Basic 6.0 does provide an option that allows the programmer to force the user to
	use a specific destination directory.
	
	The Setup.lst file is a standard Windows initialization file. It informs the
	Setup.exe and Setup1.exe programs of the distribution set how to perform setup.
	To force a user to use a specific destination directory, you must provide the
	default directory name and add the keyword "ForceUseDefDir" to the Setup.lst
	file.
	
	Step-by-Step Example
	--------------------
	
	1. Run the Application Setup Wizard or PDW to create a distribution set for your
	  application.
	
	2. Open the Setup.lst file (found on disk #1 of the distribution set) in a text
	  editor, such as Notepad.
	
	3. Specify the default installation directory by modifying the "DefaultDir" key
	  in the "Setup" section of the Setup.lst file. For example:
	  "DefaultDir=C:\MyProgramDir" (without the quotation marks)
	
	4. Insert the following line immediately after the "DefaultDir" line:
	
	  "ForceUseDefDir=1" (without the quotation marks)
	
	5. Save the Setup.lst file. Note that the Setup Wizard makes maximum usage of
	  each disk. If you cannot save the file due to insufficient space on the
	  diskette, delete one or more of the ";
	  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" lines at the
	  bottom of the Setup.lst file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp400 kbVBp500 kbVBp600 kbFAQ kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
