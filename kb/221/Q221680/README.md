---
layout: page
title: "Q221680: FIX:C0000005 Fatal Error With TRANSFORM() on Long Strings"
permalink: kb/221/Q221680/
---

## Q221680: FIX:C0000005 Fatal Error With TRANSFORM() on Long Strings

	Article: Q221680
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a string argument longer than 255 characters with the TRANSFORM() function
	causes Visual FoxPro 6.0 to generate the following error:
	
	  Fatal error: Exception code=C0000005
	
	Under the same circumstances, Visual FoxPro 5.0 or Visual FoxPro 3.0 terminate
	without any error or produce an error similar to the following under Windows
	NT:
	
	  An application error has occurred and an application error log is being
	  generated.
	  vfp.exe
	  Exception: access violation (0xc0000005),Address 0x0043d731
	
	Under Windows 9x, Visual FoxPro 5.0 or Visual FoxPro 3.0 produce an error similar
	to the following:
	
	  VFP caused an invalid page fault in module KERNEL32.DLL at 0137:bff85fd9
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed The fix
	involves truncating the string argument to 255 characters.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  lcText=REPLICATE("Hello World!!!",25)
	  ? TRANSFORM(lcText,"")
	
	You may have to run the program several times to cause the error to occur.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600sp2fix kbVS600SP1 kbVS600sp3fix kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
