---
layout: page
title: "Q148880: BUG: Breakpoint Occurs When You Insert Clipboard Assistant"
permalink: /kb/148/Q148880/
---

## Q148880: BUG: Breakpoint Occurs When You Insert Clipboard Assistant

{% raw %}

	Article: Q148880
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVC kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Clipboard Assistant on the Checked build of Windows NT,
	the following message appears as you move between the pages of the Clipboard
	Assistant component:
	
	  A breakpoint has been reached.
	  (0x80000003) occured in the application at location 0x77f728d0.
	
	  Click OK to terminate the application.
	  Click Cancel to debug the application.
	
	NOTE: The Checked build of Windows NT is Windows NT with system debug versions of
	the system DLLs.
	
	RESOLUTION
	==========
	
	If Developer Studio is installed as the system debugger (The just-in-time
	debugging feature), you can click Cancel to debug the application. Then another
	instance of Developer Studio will be launched to debug the problem. At that
	point, you can just click Go on the Debug menu to continue execution. The
	breakpoint can be ignored.
	
	To install Developer Studio as your just-in-time debugger, follow these steps:
	
	1. On the Tools menu, click Options, and click the Debug tab.
	
	2. Select the Just-in-Time Debugging check box.
	
	3. Click OK.
	
	NOTE: You must have administrator privileges to set the Just-in-Time option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbVC400bug 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbide kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
