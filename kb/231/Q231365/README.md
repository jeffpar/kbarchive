---
layout: page
title: "Q231365: Microsoft BackOffice 4.5 Resource Kit Setup.exe Fails With SP5"
permalink: kb/231/Q231365/
---

## Q231365: Microsoft BackOffice 4.5 Resource Kit Setup.exe Fails With SP5

	Article: Q231365
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft BackOffice 4.5 Resource Kit ISBN 0-7356-0583-1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Microsoft Windows NT Service Pack 5 (SP5) or later on your system,
	when you attempt to install the Microsoft BackOffice Resource Kit software, the
	installation will ask you to install Service Pack 4 (SP4) or quit the Setup
	program. If you attempt to install SP4 over SP5 or later, the installation will
	fail.
	
	CAUSE
	=====
	
	The Resource Kit Setup program requires SP4 to run correctly. Consequently, the
	Setup program detects whether you have SP4 and will install it if SP4 is not
	already present. However, the Setup program does not recognize the presence of
	SP5 or later. Thus, if you have a later service pack, the Setup program will
	attempt to install SP4 over top of the later service pack, causing the
	installation to fail.
	
	RESOLUTION
	==========
	
	If you run Sloader.exe instead of Setup.exe, the setup code will run while
	bypassing the code that checks to see if the service pack has been installed.
	Users who run Sloader.exe will be able to successfully install the software.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in "Microsoft BackOffice 4.5
	Resource Kit."
	
	MORE INFORMATION
	================
	
	Running Sloader.exe will also bypass the AutoRun dialog box. This dialog box
	contains the option for installing additional Microsoft Exchange tools that are
	not installed with the main Resource Kit tools. For information on these tools,
	please refer to section 1.3.2.2 of the Readme.doc file.
	
	Additional query words: ms_press press 0-7356-0583-1
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
