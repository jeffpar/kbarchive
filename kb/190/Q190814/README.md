---
layout: page
title: "Q190814: HOWTO: Display a ReadMe File at the End of a Custom Setup"
permalink: /kb/190/Q190814/
---

## Q190814: HOWTO: Display a ReadMe File at the End of a Custom Setup

	Article: Q190814
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to modify the Setup Toolkit project (Setup1.vbp)
	to display a text file, such as a ReadMe.Txt, at the end of an application's
	setup.
	
	NOTE: Microsoft Technical Support does not support the modification of the setup
	process or any of the setup files. Support is provided for the Package and
	Deployment Wizard on an "as is" basis only.
	
	MORE INFORMATION
	================
	
	Follow these steps to modify the Setup Toolkit project to display a text file at
	the end of Setup:
	
	Step-by-Step Example
	--------------------
	
	NOTE: This example assumes that NotePad is already installed on the end user's
	computer, and it is located in the same folder as Windows.
	
	1. Create a text file named ReadMe.txt.
	
	2. Make a backup copy of the VB98\Wizards\PDWizard\Setup1 folder.
	
	3. Open VB98\Wizards\PDWizard\Setup1\Setup1.vbp.
	
	4. Open the basSetup1 module, and go to the ExitSetup Sub procedure.
	
	5. At the beginning of Sub ExitSetup, add the following statement:
	
	        Dim vRetVal As Variant
	
	6. Locate the following statement in Sub ExitSetup:
	
	        If IsWindowsNT4WithoutSP2() Then
	
	  ABOVE this statement, add the following statement:
	
	        vRetVal = Shell(gstrWinDir & "NotePad.exe " & gstrDestDir & _
	           "ReadMe.txt", 1)
	
	7. Save the project, and make Setup1.exe.
	
	  NOTE: Save Setup1.exe in the VB98\Wizards\PDWizard folder. When you save
	  setup1.exe in this folder, you will be bounced back to
	  VB98\Wizards\PDWizard\Setup1 unless you click the original setup1.exe in that
	  folder to overwrite it explicitly
	
	8. Use the Package and Deployment Wizard to create a Standard Setup Package for
	  a simple project, such as Calc.vbp. In the Included Files screen, add the
	  ReadMe.txt file you created earlier.
	
	9. Run Setup.exe from the file distribution set you created in step 8. If the
	  application's Setup completes successfully, NotePad displays the ReadMe.txt
	  file at the end of Setup.
	
	10. Restore the original Setup Toolkit files before using the Package and
	  Deployment Wizard to distribute applications that do not have a ReadMe file.
	
	REFERENCES
	==========
	
	"Programmer's Guide," "Distributing Your Applications" chapter, "The Setup
	Toolkit" section
	
	Additional query words: PDW
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
