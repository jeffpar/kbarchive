---
layout: page
title: "Q221665: FIX:C0000005 Fatal Error w/Invalid Form Included in File Syntax"
permalink: kb/221/Q221665/
---

## Q221665: FIX:C0000005 Fatal Error w/Invalid Form Included in File Syntax

	Article: Q221665
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2fi
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, if the header file containing invalid command syntax is
	included in a form in the Form Designer or in a class using the Class Designer,
	the following error message appears:
	
	  Fatal Error : Exception code = C0000005
	
	In Visual FoxPro 5.0a running under Windows NT 4.0, the following error appears:
	
	  An application error has occurred and an application error log is being
	  created.
	  VFP.exe
	  Exception:access violation (Oxc0000005), Address: 0x006b0f7f
	
	In Visual FoxPro 5.0a running on Windows 98, the following error may appear:
	
	  This program has performed an illegal operation and will be shut down.
	  VFP caused an invalid page fault in module VFP.EXE at 015f:006b455b
	
	Using the #INCLUDE command to include the header file generates a compile error
	or, if it is in a PRG, an error log file is created.
	
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
	
	1. Create an include file, named test.h.
	
	2. In test.h, put in the following code:
	
	  #ifndef junk_include
	     junk_include .t.
	  endif   && Purposely leave out the # sign
	   
	
	3. Create a form, named test.scx.
	
	4. In the Form Designer, select the Form menu pad and the Include File menu
	  option.
	
	5. In the Include File dialog, include test.h.
	
	6. Save the form.
	
	  Noted that immediately after saving the form, one of the errors mentioned in
	  the Symptoms section occurs and Visual FoxPro terminates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp2fix kbVS600sp3fix kbGrpDSFox kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
