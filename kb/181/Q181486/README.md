---
layout: page
title: "Q181486: PRB: How To Distribute the Remote Automation Connection Manager"
permalink: /kb/181/Q181486/
---

## Q181486: PRB: How To Distribute the Remote Automation Connection Manager

{% raw %}

	Article: Q181486
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.2,4.2b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Redistrb.wri file shipped on the Visual C++ 4.0/4.2 CD number 1 (in the
	MSDev\Redist directory) implies that the Racmgr32.exe file can be run with the
	following four files:
	
	  Autmgr32.exe
	  Autprx32.exe (misspelled in documentation, should be Autprx32.dll)
	  Racmgr32.exe
	  Racreg32.exe (misspelled in documentation, should be Racreg32.dll)
	
	If Racmgr32.exe is run on a system where Visual Basic 4.0 or Visual C++ 4.0/4.2
	is not installed, the following error occurs:
	
	  A required .dll file VB40032.dll, was not found.
	
	CAUSE
	=====
	
	The Redistrb.wri document doesn't mention that the Visual Basic 4.0 run- time
	dependency files are also needed. Racmgr32.exe is a Visual Basic 4.0
	application, which needs the Visual Basic run-time dependency files. Without
	these run-time files, an error will result.
	
	RESOLUTION
	==========
	
	To resolve this problem you need to distribute the following three sets of
	files:
	
	  
	
	  Core Files
	  ----------
	
	  Autmgr32.exe
	  Autprx32.dll
	  Racmgr32.exe
	  Racreg32.dll
	
	  Visual Basic 4.0 Run-Time Files
	  -------------------------------
	
	  Vb40032.dll
	  Ven2232.olb
	  Olepro32.dll
	  Mscrt20.dll
	  Msvcrt40.dll
	  Ctl3d32.dll
	
	  Component Dependency Files
	  --------------------------
	
	  Gauge32.ocx
	  Tabctl32.ocx
	  Odkob32.dll
	  Mfc40.dll
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Remote Connection Manager is a utility that allows a client application to
	connect to a remote server. This utility is shipped with Visual C++ and is
	installed by default when installing Visual C++. Machines with either Visual C++
	4.0/4.2 or Visual Basic 4.0 installed will not experience this problem.
	
	Additional query words: RACMAN
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch kbVC420b
	Version           : WINNT:4.2,4.2b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
