---
layout: page
title: "Q193294: PRB: PRTINFO() Function Causes Fatal Error on Windows 98"
permalink: kb/193/Q193294/
---

## Q193294: PRB: PRTINFO() Function Causes Fatal Error on Windows 98

	Article: Q193294
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp600 kbvfp600bug kbGrpDSFox
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A fatal exception error occurs on a Windows 98 computer after you use the
	GETPRINTER() function and SET PRINTER ON PROMPT command followed by a PRTINFO
	function.
	
	RESOLUTION
	==========
	
	The current resolution is to avoid using the GETPRINTER function and SET PRINTER
	ON PROMPT command followed by a PRTINFO function. The fatal error occurs after
	issuing the PRTINFO function.
	
	The SET PRINTER ON PROMPT can be used instead of the GETPRINTER function.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Execute the following code on a computer running Windows 98:
	
	  cPrinter = GETPRINTER()
	  SET PRINTER ON PROMPT
	  ?PRTINFO(2) && This returns a code for the paper size.
	
	After you issue the PRTINFO() function, a fatal exception error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp600 kbvfp600bug kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
