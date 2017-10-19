---
layout: page
title: "Q141391: FIX: GP Fault If Exit Windows 95 w/ Insert Object Dialog Open"
permalink: /kb/141/Q141391/
---

## Q141391: FIX: GP Fault If Exit Windows 95 w/ Insert Object Dialog Open

	Article: Q141391
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro version 3.0 terminates with a general protection (GP) fault when
	you are creating a form, if you insert an OLE Container and then exit from
	Visual FoxPro with the Insert Object dialog box still open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro 3.0b for
	Windows.
	
	MORE INFORMATION
	================
	
	This GP fault is specific to Windows 95; it should not occur on other
	platforms.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Save all your work before continuing.
	
	2. In the Command window, type:
	
	  " CREATE FORM myform" (without the quotation marks)
	
	3. Place an OLE Container control on the form.
	
	4. When the Insert Object dialog box appears, exit Windows. At this point Visual
	  FoxPro quits, and a GP fault error appears.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b GPF
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
