---
layout: page
title: "Q222136: FIX: C0000005 Fatal Error Typing Characters In Find Dialog Box"
permalink: kb/222/Q222136/
---

## Q222136: FIX: C0000005 Fatal Error Typing Characters In Find Dialog Box

	Article: Q222136
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMiscTools kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS6
	Last Modified: 15-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Open the Find dialog box in Visual FoxPro, type characters into the "Look for"
	combo box does not allow you to enter any more characters. Using Visual FoxPro
	6.0 with Windows 95 or later or Windows NT, you will see the following message:
	
	  Fatal error: Exception code=C0000005
	
	Under the same circumstances, Visual FoxPro 5.0 produces an error similar to the
	following under Windows NT:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  vfp.exe
	  Exception: access violation (0xc0000005),Address 0x005a8b20
	
	Under Windows 95 or later, Visual FoxPro 5.0 produces an error similar to the
	following:
	
	  VFP caused an invalid page fault in module VFP.EXE at 0157:005a8b20
	
	STATUS
	======
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior also occurs in the File text box in the Coverage dialog box. The
	Coverage dialog box is accessed from the Debugger menu by selecting Tools then
	Coverage Logging.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. From the Visual FoxPro menu select Edit then Find.
	
	3. Type as many characters in the "Look for" combo box as it permits.
	
	4. Visual FoxPro will close.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
