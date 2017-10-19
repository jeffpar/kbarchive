---
layout: page
title: "Q325782: HIS MMC Does Not Close After You Run Host Security Domain Wizard"
permalink: /kb/325/Q325782/
---

## Q325782: HIS MMC Does Not Close After You Run Host Security Domain Wizard

	Article: Q325782
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Manager Microsoft Management Console (MMC) snap-in may not shut down
	after you run the Host Security Domain Wizard.
	
	CAUSE
	=====
	
	This problem occurs only if, instead of clicking OK, you press the ENTER key on
	the last page of the Host Security Domain Wizard.
	
	
	WORKAROUND
	==========
	
	After the Host Security Domain Wizard completes, click OK (do not press ENTER).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	To close SNA Manager, you must open Windows Task Manager and end the Mmc.exe
	process. The next time you start SNA Manager, the new Host Security Domain is
	listed in the Host Security Domain folder and is ready for use.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	NOTE: The following assumes that you have already configured a connection, which
	you must have when you create a Host Security Domain.
	
	1. Open SNA Manager and run the Host Security Domain Wizard: right-click Host
	  Security Domains, and then select New/Host Security Domain.
	
	2. Populate the required wizard fields.
	
	3. After the wizard is completed, a wizard status dialog box shows which
	  components were installed, and an OK button also appears.
	
	4. Instead of clicking OK, press the ENTER key to continue. The dialog box
	  disappears.
	
	  If you try to close SNA Manager, it remains open and you cannot close it.
	
	Additional query words:
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
