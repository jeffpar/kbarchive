---
layout: page
title: "Q191708: BUG: Visual FoxPro ODBC Driver May Crash Client Application"
permalink: kb/191/Q191708/
---

## Q191708: BUG: Visual FoxPro ODBC Driver May Crash Client Application

	Article: Q191708
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing Visual FoxPro data using the Visual FoxPro ODBC driver version 6.0 may
	cause a fatal exception in the ODBC client application.
	
	CAUSE
	=====
	
	The FoxPro.int resource file was not installed with the Visual FoxPro ODBC
	driver.
	
	RESOLUTION
	==========
	
	The FoxPro.int resource file must be located in the same directory as the Visual
	FoxPro ODBC driver. This file should be located in the following directory:
	
	  \WinNT\System32
	
	  -or-
	
	  \Windows\System
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem usually occurs when the ODBC client application accesses an index
	that was created using a collating sequence other than MACHINE.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191685 FILE: Vfp6int.exe VFP 6.0 ODBC Driver FoxPro.int Resource File
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCVFP600828100
	Version           : WINDOWS:2.5,2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
