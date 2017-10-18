---
layout: page
title: "Q190489: BUG: Choosing Page Setup Causes &quot;Printer not ready&quot; Error"
permalink: kb/190/Q190489/
---

## Q190489: BUG: Choosing Page Setup Causes &quot;Printer not ready&quot; Error

	Article: Q190489
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Choosing the Page Setup option from the Visual FoxPro File menu produces the
	following error message:
	
	  Printer not ready.
	
	CAUSE
	=====
	
	There are no printers installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If there are any Windows printers installed, remove them.
	
	2. From the Visual FoxPro File menu, Choose Page Setup.
	
	You get a message stating that the printer could not be found, followed by a
	message on how to install a printer. Once you click OK in the dialog box, the
	message is followed by the "Printer not ready" error.
	
	Additional query words: kbVFp600bug kbPrinting kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
