---
layout: page
title: "Q221617: FIX: C0000005 Fatal Error After Frequent Use of CHRTRAN()"
permalink: /kb/221/Q221617/
---

## Q221617: FIX: C0000005 Fatal Error After Frequent Use of CHRTRAN()

	Article: Q221617
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an application that employs repeated calls to the CHRTRAN() function can
	result in the following error in Visual FoxPro 6.0:
	
	  Fatal error: Exception code=C0000005
	  Called from - <procedure name and line number> {<path and
	  filename>}
	
	The procedure name and line number will contain the method or procedure
	containing the CHRTRAN() function and its line number. Note that the line number
	will be 0 if the executable was built with the Debug Info checkbox in the
	Project Information dialog unchecked. The path and filename will contain the
	path and filename of the file containing the method or procedure.
	
	Under the same circumstances, Visual FoxPro 5.0 may produce an error similar to
	the following under Windows NT:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  vfp.exe
	  Exception: access violation (0xc0000005),Address 0xnnnnnnnn
	
	Under Windows 9x, Visual FoxPro 5.0 may produce an error similar to the
	following:
	
	  VFP caused an invalid page fault in module <module name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This behavior is not easily reproduced. It occurs with rapidly repeated calls to
	CHRTRAN() in Visual FoxPro COM server environments.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
