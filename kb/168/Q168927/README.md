---
layout: page
title: "Q168927: FIX: Application_NewWorkspace Event Is Never Fired"
permalink: /kb/168/Q168927/
---

## Q168927: FIX: Application_NewWorkspace Event Is Never Fired

{% raw %}

	Article: Q168927
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbAutomation kbide kbVC kbVC500bug kbVC600fix kbVS kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Developer Studio automation Application_NewWorkspace event is never fired.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	The following macro never executes when a new workspace is created:
	
	     sub Application_NewWorkspace()
	        MsgBox("New Workspace")
	     end sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbAutomation kbide kbVC kbVC500bug kbVC600fix kbVS kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
