---
layout: page
title: "Q221604: INFO: Known Issues with Internet Explorer 5 and Visual Basic 6.0"
permalink: /kb/221/Q221604/
---

## Q221604: INFO: Known Issues with Internet Explorer 5 and Visual Basic 6.0

	Article: Q221604
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbIE kbVBp kbVBp600 kbGrpDSVB kbie500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Explorer (Programming) version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 6.0 may be used safely with Internet Explorer 5.0 with one
	exception, which is detailed as below.
	
	MORE INFORMATION
	================
	
	The main issue is that Internet Explorer 5 separates the typelib into a separate
	.tlb (Mshtml.tlb) file to reduce the memory footprint. This has the following
	impact:
	
	- Developers who develop using Internet Explorer 5 can only distribute Page
	  Designer applications to systems where Internet Explorer 5 is installed.
	
	- Developers who develop using Internet Explorer 4 can distribute Page Designer
	  applications to systems where either Internet Explorer 4 or Internet Explorer
	  5 are installed.
	
	Thus, when distributing an Internet Explorer 5 Page Designer Application using
	the Package and Deployment Wizard, you will receive a warning message stating
	that "there is no dependency information for Mshtml.tlb." This warning can
	safely be ignored and Mshtml.tlb can be removed from your distribution package.
	The application will work properly on a system with Internet Explorer 5
	installed.
	
	Additional query words: PDW
	
	======================================================================
	Keywords          : kbIE kbVBp kbVBp600 kbGrpDSVB kbie500 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
