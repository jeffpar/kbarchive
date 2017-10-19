---
layout: page
title: "Q140577: PRB: Visual FoxPro Laptop Install Doesn't Provide Uninstall"
permalink: /kb/140/Q140577/
---

## Q140577: PRB: Visual FoxPro Laptop Install Doesn't Provide Uninstall

	Article: Q140577
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Laptop (Minimum) installation of Visual FoxPro 3.0 on a
	computer running Windows 95, Visual FoxPro isn't listed as one of the registered
	applications for Uninstall.
	
	CAUSE
	=====
	
	Laptop installations don't install the Setup Utility.
	
	WORKAROUND
	==========
	
	If you want the Install/Uninstall option, run Visual FoxPro setup again:
	
	1. Run Setup.exe from floppy disk 1 or from the compact disc.
	
	2. Select custom installation, and clear the selection from all options.
	
	3. Choose Microsoft Tools from the list, and click Change Options.
	
	4. From the list of options, choose Microsoft Visual FoxPro Setup, and click OK.
	
	5. Click Continue, and proceed with the installation.
	
	STATUS
	======
	
	This behavior is by design. A minimal installation will install only components
	that are needed to run the application. The Setup icon does not affect Visual
	FoxPro, so it is not installed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
