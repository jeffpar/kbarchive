---
layout: page
title: "Q190869: INFO: Visual FoxPro 6.0 Required Run-Time Files"
permalink: /kb/190/Q190869/
---

## Q190869: INFO: Visual FoxPro 6.0 Required Run-Time Files

	Article: Q190869
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a list of the files that you need in order to run a Visual
	FoxPro application.
	
	MORE INFORMATION
	================
	
	The following list represents the minimum files required to run a Visual FoxPro
	6.0 application. However, other files may be required to support specific
	application features.
	
	  Filename                       Version
	  ----------------------------------------
	
	  Asycfilt.dll                   2.30.4261
	  Msvcrt.dll                     6.00.8168
	  Oleaut32.dll                   2.30.4261
	  Olepro32.dll                   5.0.4261
	  Stdole2.tlb                    2.30.4261
	  Vfp6r.dll                      6.0.8167
	  Vfp6renu.dll                   6.0.8167
	
	The following file is also required when distributing an Active Document
	application:
	
	  Vfp6run.exe                    6.0.8167
	
	All of the preceding files should be placed in the \Windows\System directory
	under Windows 95 or Windows 98 and the \WinNT\System32 directory under Windows
	NT. In addition, you must also register the following files:
	
	  Vfp6r.dll
	  Oleaut32.dll
	  Olepro32.dll
	  Vfp6run.exe
	
	The Setup Wizards installs the following three files but the files may not be
	required to run a Visual FoxPro .exe file:
	
	  Mscvrt40.dll
	  Odbckey.inf
	  Odbcstf.dll
	
	Additional query words: kbAppSetup kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
