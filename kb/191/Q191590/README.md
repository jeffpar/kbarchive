---
layout: page
title: "Q191590: PRB: FPOle.dll Errors if _VFP.Caption Contains Apostrophe"
permalink: /kb/191/Q191590/
---

## Q191590: PRB: FPOle.dll Errors if _VFP.Caption Contains Apostrophe

	Article: Q191590
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the _VFP.Caption property contains an apostrophe, an error occurs when you
	run the FPOLE.dll file.
	
	RESOLUTION
	==========
	
	Do not use apostrophes in the _VFP.Caption property.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from the Command window:
	
	     _VFP.CAPTION="VFP '98"
	     DECLARE INTEGER FoxDoCmd IN "FPOLE.DLL" STRING,STRING
	     =FoxDoCmd("SELECT * FROM customer","at")
	
	This returns the following error twice:
	
	  ERROR Could Not Invoke Method: _Screen.Caption="VFP '98"
	
	Additional query words: kbVFp600 kbAPI kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
