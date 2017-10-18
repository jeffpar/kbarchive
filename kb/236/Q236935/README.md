---
layout: page
title: "Q236935: PRB: C1001 Internal Compiler Error After Installing VC++ SP3"
permalink: kb/236/Q236935/
---

## Q236935: PRB: C1001 Internal Compiler Error After Installing VC++ SP3

	Article: Q236935
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing a Visual Studio 6.0 Service Pack, existing projects may give
	the following error message when they are built:
	
	<..path\filename>(line #) : fatal error C1001: INTERNAL COMPILER ERROR
	 (compiler file 'msc1.cpp', line 1794) 
	 Please choose the Technical Support command on the Visual C++ 
	 Help menu, or open the Technical Support help file for more information.
	
	CAUSE
	=====
	
	The compiler has problems parsing a precompiled header file created before the
	installation of the Visual Studio 6.0 Service Pack. The compiler was updated by
	the Service Pack and the new version does not correctly handle the PCH files
	created by the original compiler.
	
	RESOLUTION
	==========
	
	Delete all of the temporary files created by the previous compiler version.
	
	To clean out a project's temporary files using the Visual C++ IDE, open the
	project and select Clean from the Build menu.
	
	MORE INFORMATION
	================
	
	In addition to the C1001 error, there might be other symptoms. The symptoms you
	will see depend on factors that have not yet been identified. The following are
	some of the symptoms that have been seen:
	
	- You may get a message such as the following:
	
	  This program has committed an Illegal Operation.
	
	  Which may be followed by something similar to:
	
	  CL caused an invalid page fault in module <unknown> at 0000:000000BF
	
	- You may get a Windows 95 blue screen. This would likely be a recoverable blue
	  screen rather than one that forces a system restart.
	
	- You may also see Error executing Cl.exe in combination with the other errors.
	
	In all cases, the solution is to not compile or build an application after
	installing Visual Studio 6.0 Service Packs without first cleaning out all
	temporary files.
	
	A Rebuild All is safe since it cleans out the temporary files before doing a
	build.
	
	REFERENCES
	==========
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
