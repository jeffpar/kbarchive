---
layout: page
title: "Q132116: FIX: CheckAutoCenter May Return TRUE with DS_ABSALIGN"
permalink: /kb/132/Q132116/
---

## Q132116: FIX: CheckAutoCenter May Return TRUE with DS_ABSALIGN

{% raw %}

	Article: Q132116
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGr
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Positioning a dialog box, using DS_ABSALIGN and the Y axis screen coordinate of
	zero causes the dialog box to be centered within the application's main window.
	
	CAUSE
	=====
	
	The function Dialog::CheckAutoCenter() is called to determine whether the dialog
	should be centered. In the case of y == 0, CheckAutoCenter() will always return
	TRUE. This happens because of the following code from CheckAutoCenter() in
	WINCORE.CPP:
	
	     BOOL bResult = !(lpTemplate->style & DS_ABSALIGN) &&
	         lpTemplate->x == 0 || lpTemplate->y == 0;
	
	Note that because of the way C/C++ handles logical expressions, if
	lpTemplate->style == DS_ABSALIGN, then lpTemplate->x == 0 will not be
	evaluated. However, lpTemplate->y == 0 is evaluated and therefore is capable
	of returning TRUE to CheckAutoCenter().
	
	RESOLUTION
	==========
	
	Do not use a Y coordinate of zero with DS_ABSALIGN.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ 5.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	To reproduce this problem set the DS_ABSALIGN style and a y position of zero for
	the about box of a standard Appwizard-generated application.
	
	Additional query words: center
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
