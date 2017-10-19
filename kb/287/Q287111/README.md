---
layout: page
title: "Q287111: PRB: SET COMPATIBLE ON Causes Error with Gendbc.prg"
permalink: /kb/287/Q287111/
---

## Q287111: PRB: SET COMPATIBLE ON Causes Error with Gendbc.prg

	Article: Q287111
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If SET COMPATIBLE is set to ON and you run Gendbc.prg against a database
	container, you may receive the following error message:
	
	  Unrecoverable Error:
	  Operator/Operand type mismatch.
	  At Line: 438
	
	RESOLUTION
	==========
	
	Before you run Gendbc.prg, make sure that SET COMPATIBLE is set to OFF.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the following command:
	
	  SET COMPATIBLE ON
	
	2. Run Gendbc.prg against the Testdata database by using the following code:
	
	  OPEN DATABASE home(2)+"data\testdata"  
	  DO SYS(2004)+'tools\gendbc\gendbc' WITH 'testdata.prg' 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
