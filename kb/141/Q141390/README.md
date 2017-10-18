---
layout: page
title: "Q141390: FIX: NOCONSOLE in Report Form Command Causes Erratic Behavior"
permalink: kb/141/Q141390/
---

## Q141390: FIX: NOCONSOLE in Report Form Command Causes Erratic Behavior

	Article: Q141390
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You experience erratic behavior when you use the NOCONSOLE parameter in the
	REPORT FORM command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro 3.0b for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create and run the following program:
	
	     REPORT FORM C:\vfp\samples\mainsamp\reports\listcat ;
	               PREVIEW NOWAIT NOCONSOLE
	     REPORT FORM C:\vfp\samples\mainsamp\reports\listcust ;
	               PREVIEW NOWAIT NOCONSOLE
	
	The NOCONSOLE clause prevents the NOWAIT clause from working. The next report
	does not show up until the first report window is closed.
	
	The NOCONSOLE clause in conjunction with the PREVIEW clause (with or without the
	NOWAIT clause) causes the preview window's control menu to be dimmed although
	you can still click an option and have it work.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
