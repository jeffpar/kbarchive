---
layout: page
title: "Q174809: FIX: Developer Studio Crashes Randomly When Navigating Workspace"
permalink: /kb/174/Q174809/
---

## Q174809: FIX: Developer Studio Crashes Randomly When Navigating Workspace

{% raw %}

	Article: Q174809
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVisID100bug kbVisID600fix kbVJ110bug kbVS97bug kbVS600fix kbVS97sp3fix kbG
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual J++, version 1.1 
	- Microsoft Visual InterDev, version 1.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Developer Studio crashes randomly while navigating in the Workspace's FileView
	or ClassView window and trying to activate different operations with right-mouse
	click, dragging objects, etc. The crash may also occur when using "Open
	Workspace" from the File menu to open a makefile. The crash is accompanied by an
	access violation dialog box. When debugged, the access violation usually points
	to the IsAlpha() function.
	
	CAUSE
	=====
	
	The cause of this access violation was due to uninitialized and invalid
	pointers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: Visual C++ visualc J++ Interdev
	
	======================================================================
	Keywords          : kbVC500bug kbVisID100bug kbVisID600fix kbVJ110bug kbVS97bug kbVS600fix kbVS97sp3fix kbGrpDSTools 
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVisID100 kbVJ110 kbVS97 kbVS97Search kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
