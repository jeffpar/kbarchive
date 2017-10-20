---
layout: page
title: "Q304482: PRB: VFP Executable File Is Slow to Access Tables On Server"
permalink: /kb/304/Q304482/
---

## Q304482: PRB: VFP Executable File Is Slow to Access Tables On Server

{% raw %}

	Article: Q304482
	Product(s): Microsoft FoxPro
	Version(s): 3.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbServer kbXPlatform kbGrpDSFox kbDSupport
	Last Modified: 15-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a second user launches a Visual FoxPro run-time executable file,
	performance may be greatly reduced.
	
	CAUSE
	=====
	
	Norton 2001 Anti-Virus is running on the computer and Enable SmartScan
	Technology is selected.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Open Norton 2001 Anti-Virus.
	
	2. On the Options menu, click Norton Anti-Virus.
	
	3. In the list box, expand System and select Auto-Protect.
	
	4. Clear Enable SmartScan Technology and close the dialog box.
	
	5. Start Visual FoxPro or the run-time executable file. Note that it opens
	  quickly.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Make sure that Norton 2001 Anti-Virus is installed on at least one computer
	(either on one of the workstations or the server) and start a run-time
	executable file that accesses tables on the server. If Norton's Enable SmartScan
	Technology is selected, performance will be very slow.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbServer kbXPlatform kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600 kbVFP700
	Version           : :3.0,5.0,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
