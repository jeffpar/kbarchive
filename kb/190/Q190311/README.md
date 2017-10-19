---
layout: page
title: "Q190311: PRB: No Task List Icon with Top-Level Form in Modal State"
permalink: /kb/190/Q190311/
---

## Q190311: PRB: No Task List Icon with Top-Level Form in Modal State

	Article: Q190311
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro top-level form is in a modal state, the Visual FoxPro icon
	does not appear in the Windows task list when you use ALT+TAB to switch tasks.
	
	CAUSE
	=====
	
	The top-level form and Visual FoxPro are both sharing the same process. The
	modal behavior in the top-level form must be completed before the Visual FoxPro
	icon reappears in the task list.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Choose Coverage Profiler from the Tools menu.
	
	2. Press the ALT+TAB keys.
	
	The Coverage Profiler icon is present in the task list, but the Visual FoxPro
	icon is no longer present.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
