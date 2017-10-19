---
layout: page
title: "Q221662: FIX: Error Calling FPOLE With Single Quote (') in Caption"
permalink: /kb/221/Q221662/
---

## Q221662: FIX: Error Calling FPOLE With Single Quote (') in Caption

	Article: Q221662
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbole kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kb
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FPOLE.DLL reports an error if the _Screen.Caption property contains a single
	quote or apostrophe (') character.
	
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
	
	Type or paste the following lines into the Command window:
	
	  CD Home(2)+"data"
	  _Screen.Caption = "Customer's test " + version()
	  DECLARE integer FoxDoCmd in "FPOLE.DLL" string,string
	  =FoxDoCmd("SELECT * FROM customer","at")
	
	After you type the last line of code, the following error appears twice and then
	the Browse window appears:
	
	  Error: could not invoke method
	  _Screen.Caption = 'Customer's Test '
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
