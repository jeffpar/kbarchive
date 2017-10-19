---
layout: page
title: "Q174135: PRB: Setup Cannot Continue...System Files Are Out of Date"
permalink: /kb/174/Q174135/
---

## Q174135: PRB: Setup Cannot Continue...System Files Are Out of Date

	Article: Q174135
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp500 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a Setup.exe program created by the Visual Basic 5.0 Application Setup
	Wizard or the Visual Basic 6.0 Package and Deployment Wizard (PDW) on a client
	machine may cause the following message:
	
	  Setup cannot continue because some system files are out of date on your
	  system. Click OK if you would like setup to update these files now. You will
	  need to restart Windows before you can run setup again. Click Cancel to exit
	  setup without updating system files.
	
	If you click OK, the application installs the correct file. If you select Cancel,
	the operation stops. The setup process will not complete successfully until the
	correct file has been installed on the system.
	
	CAUSE
	=====
	
	The above message occurs when the version of Oleaut32.dll on the client machine
	is older than version 2.20.0000. Certain files critical to the installation
	process of Visual Basic applications require Oleaut32.dll version 2.20.0000 or
	later.
	
	MORE INFORMATION
	================
	
	By selecting OK to the above message, Setup.exe will install a newer version of
	Oleaut32.dll that is compatible with the installation program. In order for this
	file to be updated to the correct version, the operating system must be
	restarted. Therefore, after the correct file is installed, the user will be
	prompted to restart the computer. The application setup process cannot continue
	until the machine is restarted. After the machine is rebooted, re-run the
	application Setup.exe program.
	
	If you choose Cancel, the Setup.exe program will terminate. The application setup
	will not complete until version 2.20.0000 or later of Oleaut32.dll is installed
	on the system.
	
	NOTE: This process also resolves the issue documented in the following Microsoft
	Knowledge Base article:
	
	Q162518 PRB: "Unexpected error; quitting" Installing VB4 Application
	
	REFERENCES
	==========
	
	If you continue to receive the above error after multiple attempts, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q191096 PRB: Multiple 'System Files Are Out of Date' Errors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp500 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
