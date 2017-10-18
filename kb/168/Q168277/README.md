---
layout: page
title: "Q168277: FIX: Access Violation Running Visual FoxPro on Windows NT 4.0"
permalink: kb/168/Q168277/
---

## Q168277: FIX: Access Violation Running Visual FoxPro on Windows NT 4.0

	Article: Q168277
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbVS97sp2fix
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an application created with Visual FoxPro for Windows may cause the an
	error similar to the following under Windows NT version 4.0:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  <vfp.exe or name of runtime .exe file> Exception: access violation
	  (0xc0000005), Address: 0x100a4669"
	
	This most commonly occurs when running a form that repeatedly runs a second form
	containing a grid, but may also occur in circumstances where multiple forms or
	grids are not involved.
	
	The error address varies based on the version of Visual FoxPro, and whether the
	forms are running under the development environment (DE) or the runtime
	environment (executable).
	
	   Platform                  Dev. Env. Address    Runtime Address
	  ----------               -------------------  -----------------
	  VFP 5.0 (Build 344)           0x00401a37         0x100a4669
	  VFP 5.0a (Build 402)          0x0040118d         0x100017bf
	
	The build number can be found by using the VERSION() function. Visual FoxPro 5.0
	build 344 returns the following version information:
	
	  Visual FoxPro 05.00.00.0344 for Windows
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The conditions under which this occurs are as follows:
	
	- A value to search for is entered in form 1.
	- A second form is displayed containing a grid, which displays records that
	  match the value from step 1.
	- A record is selected in the grid and the second form is closed.
	- Steps 1 through 3 are repeated.
	
	This happens only in rare instances and is more likely to occur in complex
	applications. It does not occur under Windows 95, nor does it occur in Visual
	FoxPro 3.0b. If one of the exact addresses listed above does not appear, the
	issue is distinct from the one described in this article.
	
	Additional query words: GPF crash hang
	
	======================================================================
	Keywords          : kbtool kbvfp kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
