---
layout: page
title: "Q190999: BUG: Visual C++ Project Settings Saved Only on Normal Exit"
permalink: /kb/190/Q190999/
---

## Q190999: BUG: Visual C++ Project Settings Saved Only on Normal Exit

{% raw %}

	Article: Q190999
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC200bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ project settings can be lost if a project is terminated by any means
	other than a normal exit. Loss of settings can result despite clicking OK after
	making a change to a project setting.
	
	RESOLUTION
	==========
	
	To avoid losing project settings, close the project before leaving the computer
	for an extended period of time. Also, on the File menu, click Save All before
	performing a task that could crash the machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The loss of project settings can occur on an abnormal termination of the
	project, that could result from power loss or other reasons. This risk can be
	minimized by closing the workspace before leaving the computer for an extended
	period of time or by clicking Save All on the File menu before performing a task
	that may cause the computer to crash.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual C++ Win32 Application project, give it a name, and click
	  OK.
	
	  NOTE: Depending on the version of Visual C++ in use, a wizard may supply
	  additional dialog boxes. Provide appropriate responses to these dialog boxes.
	
	2. On the Project menu, click Settings (in Visual C++ .NET, click Properties),
	  and then select C/C++. In the Warning Level combo box, select a different
	  level than the default level and click OK.
	
	3. Terminate the project abnormally by pressing CTRL+ALT+DEL to bring up the
	  Task Manager in Windows NT or the Close Window dialog box in Windows 95 or
	  Windows 98. Highlight the Visual C++ task and then click End Task.
	
	  NOTE: Do not respond to a dialog box asking if changes are to be saved.
	  Instead, click End Task in the dialog box that follows.
	
	4. Start Visual C++ again and open the Visual C++ project that was just
	  terminated abnormally.
	
	5. On the Project menu, click Settings (in Visual C++ .NET, click Properties)
	  and then click C/C++. The bug described in this article is demonstrated by
	  the loss of the project setting change made earlier.
	
	6. Verify the workaround by making another setting change: Click Save All on the
	  File menu prior to abnormally terminating the project as described in step 3,
	  and then repeat steps 4 and 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC200bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
