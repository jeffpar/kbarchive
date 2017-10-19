---
layout: page
title: "Q152906: XADM: Regedit Errors When Installing or Updating Server"
permalink: /kb/152/Q152906/
---

## Q152906: XADM: Regedit Errors When Installing or Updating Server

	Article: Q152906
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up or update a Microsoft Exchange Server on a Windows NT Server
	that has been configured for dual boot to Windows 95, the following error
	messages may be encountered:
	
	  regedit.exe - Ordinal Not Found
	  The ordinal 195 could not be located in the dynamic link library SHELL32.DLL
	
	  regedit.exe - Application Error
	  The application failed to initialize properly 0xc0000138). Click OK to
	  terminate the application.
	
	Setup will finish after the error messages have been cleared and Setup will
	report that it finished successfully. However, Setup (or Update, for the Service
	Packs) was not able to make the required registry changes and thus the setup is
	incomplete.
	
	WORKAROUND
	==========
	
	In order to make sure that the appropriate registry entries have been set, run
	Setup (or Update) again.
	
	MORE INFORMATION
	================
	
	These errors will only appear under very specific circumstances, as follows:
	
	- The Exchange Server must be configured to dual boot into both NT and Windows
	  95.
	
	- Setup (or Update) must be run through the File Manager.
	
	- Two File Manager windows must be open: one with the Windows95 directory
	  selected and another window for the Exchange Server compact disc.
	
	- The errors will only occur the first time attempting to run Setup or Update
	  just after booting the Windows NT Server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	SP1 and SP2. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbPTProdChange kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
