---
layout: page
title: "Q260568: BUG: Error: Platform Manager Failed to Queue File Cemon.exe"
permalink: kb/260/Q260568/
---

## Q260568: BUG: Error: Platform Manager Failed to Queue File Cemon.exe

	Article: Q260568
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup kbDebug kbDSupport kbGrpDSETK
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the eMbedded Visual C++ debugger on a computer that is running
	Microsoft Windows 98, you may encounter the following error message at the
	beginning of the debug session:
	
	  Error: Platform Manager failed to queue file CEMON.EXE pkg for copying.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds to enable the Cemon.exe download.
	
	Workaround 1
	------------
	
	Reinstall eMbedded Visual Tools Common Components:
	
	1. Start the Add/Remove Programs Control Panel application.
	
	2. Click Microsoft eMbedded Visual Tools.
	
	3. Click Add/Remove.
	
	4. Clear the Common Components check box.
	
	5. Click OK, click Continue, and then click Yes.
	
	6. Click Microsoft eMbedded Visual Tools in the Add/Remove Programs application.
	
	7. Click Add/Remove.
	
	8. Click to select the Common Components check box.
	
	9. Click Continue.
	
	Workaround 2
	------------
	
	Install an SDK before installing eMbedded Visual Tools:
	
	1. Uninstall eMbedded Visual Tools.
	
	2. Install an SDK from eMbedded Visual Tools disk #2.
	
	3. Install eMbedded Visual Tools as usual.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem has been encountered only on computers that are running Windows 98
	Second Edition.
	
	Additional query words: Platform Manager
	
	======================================================================
	Keywords          : kbsetup kbDebug kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
