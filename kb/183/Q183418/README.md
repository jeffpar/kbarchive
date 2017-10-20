---
layout: page
title: "Q183418: BUG: Build Succeeds Despite Invalid Custom Build Command"
permalink: /kb/183/Q183418/
---

## Q183418: BUG: Build Succeeds Despite Invalid Custom Build Command

{% raw %}

	Article: Q183418
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp2, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The message "Bad command or file name" shows up in the Build pane. On Windows
	NT, the build fails with an error. However, on Windows 95 the project may still
	build with no errors indicated.
	
	CAUSE
	=====
	
	A custom build step references a non-existent executable. The command
	interpreters for Windows 95 and Windows NT, which spawn the custom build
	command, respond differently for non-existent executables.
	
	RESOLUTION
	==========
	
	The following are two possible resolutions:
	
	- Make the custom build command refer to a valid file.
	
	- Create an application that spawns other executables, and have it return an
	  error code on failure to load.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the behavior, add a build command with an invalid command:
	
	1. Create a Win32 Console Application.
	
	2. On the Project menu, click Settings, and click the Custom Build Tab.
	
	3. For Build Command(s), enter Bogus.exe.
	
	4. For Output File(s), enter X.out.
	
	5. Click OK to save the settings.
	
	6. Build the project on Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : winnt:5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
