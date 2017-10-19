---
layout: page
title: "Q191527: HOWTO: Implement GenHTML Functionality in VFP Run-Time App"
permalink: /kb/191/Q191527/
---

## Q191527: HOWTO: Implement GenHTML Functionality in VFP Run-Time App

	Article: Q191527
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement GenHTML functionality in Visual FoxPro
	6.0 run-time applications (including APPs, EXEs, DLLs, and so forth).
	
	MORE INFORMATION
	================
	
	1. Add the GenHTML.prg file to your project. GenHTML.prg is located in the
	  Visual FoxPro root directory specified by HOME().
	
	2. Add the _HTML.vcx file to your project. The _HTML.vcx class library is
	  located in the Visual FoxPro Foundation Classes (FFC) directory specified by
	  HOME()+"FFC\".
	
	3. If you plan to use any of the Web Wizard data page output layouts at
	  run-time, you must also add the _HTMLSty.vcx file to your project. The
	  _HTMLSty.vcx class library is located in the Visual FoxPro FFC directory
	  specified by HOME()+"FFC\". If you add the _HTMLSty.vcx file to your project,
	  you need to add the following two lines of code to your startup program in
	  order to avoid a project build error:
	
	        FUNCTION taFields()
	        ENDFUNC
	
	4. Generally, when you call GenHTML you do it by executing the following line:
	
	        DO (_GENHTML) WITH <params>
	
	  The default value of _GENHTML in the development version of Visual FoxPro is
	  HOME()+"GENHTML.PRG". In run-time applications, you should manually set
	  _GENHTML="GENHTML.PRG" at the start of your application so that the
	  GENHTML.PRG program included in your application is properly executing at
	  run-time using the same DO (_GENHTML) WITH <params> commands.
	
	5. Build the project into an APP, EXE, or DLL. Note that the _Base.vcx class
	  library is automatically added to your project if it did not already exist in
	  the project.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Books Online: Programmer's Guide; Chapter 13, "Compiling an
	Application"
	
	Additional query words: PGFEST600 kbVFp600 kbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
