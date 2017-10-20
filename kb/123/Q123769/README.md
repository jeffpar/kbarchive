---
layout: page
title: "Q123769: PRB: RC1120 Error When Building in Low Memory Conditions"
permalink: /kb/123/Q123769/
---

## Q123769: PRB: RC1120 Error When Building in Low Memory Conditions

{% raw %}

	Article: Q123769
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an application, the resource compiler (RC.EXE) may give this
	error:
	
	  fatal error RC1120: out of memory, needed 16777216 bytes
	
	CAUSE
	=====
	
	RC.EXE version 3.5 requires 16 megabytes of virtual memory.
	
	RESOLUTION
	==========
	
	Work around the problem by closing down some applications or by increasing the
	Paging File Size (set in the System settings).
	
	To set the Paging File Size:
	
	1. Select the Control Panel icon from the Main group.
	
	2. Double-click the System icon.
	
	3. Click the Virtual Memory button.
	
	4. Increase the Maximum Size field in the Virtual Memory dialog box.
	
	STATUS
	======
	
	Although this behavior is by design, RC.EXE was modified to function in less
	memory in Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          : kberrmsg kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
