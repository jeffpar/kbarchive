---
layout: page
title: "Q161188: FIX: RELEASE POPUP _medit Command Causes Invalid Page Fault"
permalink: /kb/161/Q161188/
---

## Q161188: FIX: RELEASE POPUP _medit Command Causes Invalid Page Fault

{% raw %}

	Article: Q161188
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the command RELEASE POPUP _medit twice causes Visual FoxPro 5.0 to
	terminate. The error message states:
	
	  "This program has performed an illegal operation and will be shut down"
	
	Pressing the Details button reveals the following information:
	
	  "VFP caused an invalid page fault in module VFP.EXE at < register
	  address>"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	In the Command window, issue the following command twice:
	
	     RELEASE POPUP _medit
	
	The error message mentioned above appears and Visual FoxPro terminates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
