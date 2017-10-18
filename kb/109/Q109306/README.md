---
layout: page
title: "Q109306: REPORT FORM ... PLAIN Command Is Not Functioning Properly"
permalink: kb/109/Q109306/
---

## Q109306: REPORT FORM ... PLAIN Command Is Not Functioning Properly

	Article: Q109306
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5b; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.5b 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Windows, when the PLAIN parameter is used in conjunction with the
	REPORT FORM command, it does not function as documented on page L3-822 in the
	"Language Reference":
	
	  If PLAIN is included, a page heading appears only at the beginning of the
	  report.
	
	The documentation is incorrect. When the PLAIN parameter is issued in conjunction
	with the REPORT FORM command, it produces a report that does not have any page
	headers.
	
	Additional query words: VFoxWin 3.00 FoxMac FoxWin 2.50 2.50a 2.50b 2.60 2.60a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbFoxBASESearch kbVFP300
	Version           : MS-DOS:2.5b; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
