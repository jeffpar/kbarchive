---
layout: page
title: "Q141319: PRB: Setup Wizard Fails to Create Distribution Directory"
permalink: kb/141/Q141319/
---

## Q141319: PRB: Setup Wizard Fails to Create Distribution Directory

	Article: Q141319
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual FoxPro is installed on a shared Windows network running Novell
	Netware 3.12 with a local workstation installation, the Setup Wizard fails if
	the user selects the "create directory" option.
	
	CAUSE
	=====
	
	Visual FoxPro was installed as a shared network installation and by design, the
	workstation installation does not include the "Professional Features" option.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The "Professional Features" option and associated programs of the "Application
	Distribution" option, were not intended to be run on a shared network
	environment. The Setup Wizard will function correctly with a local copy of
	Windows 3.1, Windows for Worgroups, Windows NT, or Windows 95 and a local
	installation of Visual FoxPro.
	
	Additional query words: VFoxWin distrib workstation network
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
