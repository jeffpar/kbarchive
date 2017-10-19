---
layout: page
title: "Q180593: FIX: Cannot Rename Directory of a Closed Workspace"
permalink: /kb/180/Q180593/
---

## Q180593: FIX: Cannot Rename Directory of a Closed Workspace

	Article: Q180593
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While Visual C++ is running, renaming a project's directory fails even though
	the project has been closed.
	
	CAUSE
	=====
	
	The project .ncb file remains open even after the project is closed.
	
	RESOLUTION
	==========
	
	Open another project, or close Visual C++ Developer Studio.
	
	If renaming the directory still fails, and Visual C++ previously crashed [general
	protection (GP) fault], consult Task Manager for a running process named
	Msdev.exe and end the process.
	
	If renaming still fails, another task may have a file open in that directory or
	one of its subdirectories. Find and close that task.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a directory named C:\MyTest.
	
	2. In Visual C++, on the File menu, click New and start a new MFC AppWizard
	  project located in C:\MyTest. Click Finish, then click OK.
	
	3. On the File menu, click Close Workspace.
	
	4. Using Windows Explorer, try to rename C:\MyTest.
	
	RESULTS: Windows Explorer reports a sharing violation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC400a kbVC420b kbVC500Search
	Version           : WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
