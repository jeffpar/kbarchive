---
layout: page
title: "Q174967: PRB: DoDefault() in Command Window Stops Visual FoxPro"
permalink: kb/174/Q174967/
---

## Q174967: PRB: DoDefault() in Command Window Stops Visual FoxPro

	Article: Q174967
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Typing DoDefault() in the Command window causes an application error in Visual
	FoxPro version 5.0a. In Windows 95, the error message below appears:
	
	  This program performed an illegal operation and will be shut down.
	
	After pressing the Details push button, the following message appears:
	
	  VFP caused an invalid pagefault in module VFP .EXE at <register
	  address>.
	
	In Windows NT 4.0, the following error appears:
	
	  An application error had occurred and an application error log is being
	  generated.
	  VFP.EXE
	  Exception: access violation.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This also occurs with Visual Studio 97 Service Pack 2 installed. In Visual
	FoxPro version 5.0, typing DoDefault() in Command window error produces the
	following error message:
	
	  Statement is only valid within a Method
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type in the following command:
	
	        DoDefault()
	
	NOTE: Visual FoxPro version 5.0a stops immediately after you press Enter.
	
	Additional query words: Dodefault GPF Invalid Page Fault Application Error Unhandled exception
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbprb
	
	=============================================================================
	
