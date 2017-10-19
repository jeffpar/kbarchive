---
layout: page
title: "Q134982: PRB: Err Msgs Starting Wizards, Building EXE, or Class Browser"
permalink: /kb/134/Q134982/
---

## Q134982: PRB: Err Msgs Starting Wizards, Building EXE, or Class Browser

	Article: Q134982
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Professional Edition of Visual FoxPro over a Standard
	Edition installation, performing one of the following actions causes these error
	messages:
	
	Starting the Setup Wizard:
	
	  The Setup Wizard requires the Professional Edition of Visual FoxPro
	
	Starting the Documentation Wizard:
	
	  The Documentation Wizard requires the Professional Edition of Visual FoxPro
	
	Building an .EXE file:
	
	  This feature not available
	
	Using the Class Browser:
	
	  Class Browser Requires The Professional Version.
	
	CAUSE
	=====
	
	The Standard Edition was not removed before installing the Professional Edition.
	
	RESOLUTION
	==========
	
	Before upgrading from the Standard to Professional Editions, the Standard
	Edition must be completely removed from the computer.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Standard Edition.
	
	2. Install the Professional Edition.
	
	3. Try to run the Setup Wizard or build an .EXE file.
	
	Additional query words: 3.00 VFoxWin upgrade options vfp.exe
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
