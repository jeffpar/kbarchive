---
layout: page
title: "Q221722: FIX: C0000005 Fatal Error Using DIRECTORY(&quot;&#92;&#92;&#92;dirname&quot;)"
permalink: kb/221/Q221722/
---

## Q221722: FIX: C0000005 Fatal Error Using DIRECTORY(&quot;&#92;&#92;&#92;dirname&quot;)

	Article: Q221722
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the DIRECTORY() function where the directory name argument contains
	three backslashes under Windows NT causes Visual FoxPro 6.0 to generate the
	following error:
	
	  Fatal error: Exception code=C0000005
	
	Under the same circumstances, Visual FoxPro 5.0 produces an error similar to the
	following under Windows NT:
	
	  An application error has occurred and an application error log is being
	  generated.
	  vfp.exe
	  Exception: access violation (0xc0000005),Address 0x0049b575
	
	Under Windows 9x, Visual FoxPro executes the function without error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	- Run the following code from the Command Window
	
	  ? DIRECTORY("\\\bogusdir")
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
