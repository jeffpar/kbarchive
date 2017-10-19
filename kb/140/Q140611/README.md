---
layout: page
title: "Q140611: PRB: InstallSHIELD Error: Setup requires a different version"
permalink: /kb/140/Q140611/
---

## Q140611: PRB: InstallSHIELD Error: Setup requires a different version

	Article: Q140611
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbprb
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing InstallSHIELD SDK Edition from Microsoft Visual C++ version
	4.0, you may see the following error message when you try to run the Template
	application:
	
	  Setup requires a different version of Windows. Check to
	  make sure that you are running Setup on the Windows platform
	  for which it is intended.
	
	  Error 102.
	
	CAUSE
	=====
	
	The message occurs when a the _inst32i.ex_ does not exist in the directory where
	Setup.exe is located.
	
	RESOLUTION
	==========
	
	To correct the problem in both the Template application and in projects created
	with InstallSHIELD SDK Edition, copy the _inst32i.ex_ from the \Ishield\Disk1
	directory on the Visual C++ compact disc into the following two locations on the
	hard drive:
	
	  \Program Files\Stirling\InstallShield\Program
	
	  -and-
	
	  \Program Files\Stirling\InstallShield\Template\One\Disk1
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	This problem occurs only when InstallSHIELD is installed from Microsoft Visual
	C++ version 4.0. It does not occur when InstallSHIELD is installed from the
	Microsoft Win32 Software Development Kit.
	
	Additional query words: 4.00 Windows 95
	
	======================================================================
	Keywords          : kbsetup kbprb 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
