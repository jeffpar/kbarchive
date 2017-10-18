---
layout: page
title: "Q221748: FIX:FFC's - Genhtml.prg Fails With SET COVERAGE To"
permalink: kb/221/Q221748/
---

## Q221748: FIX:FFC's - Genhtml.prg Fails With SET COVERAGE To

	Article: Q221748
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbVS600sp2fix kbVS600SP1 kbVS600sp3fix kbGrpDSFox
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, turning on code coverage in conjunction with running
	Genhtml.Prg can cause the following error to occur:
	
	  The current object has been released.
	  _htmltag
	  Error: 1945
	  Method: release
	  Line: 13
	  ENDIF
	
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
	
	1. Create a .PRG.
	
	2. Cut and paste the code below into the .PRG:
	
	  SET COVERAGE TO aaa
	  USE <table name>  && Pick a table (dbf) file.
	  DO (_GENHTML) WITH ALIAS(),ALIAS()
	   
	
	3. Save and run the code.
	
	  A few seconds after running the program, the error mentioned in the Symptoms
	  section appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbVS600sp2fix kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
