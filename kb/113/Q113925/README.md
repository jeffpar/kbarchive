---
layout: page
title: "Q113925: FIX: Visual Workbench Cannot Create Project"
permalink: /kb/113/Q113925/
---

## Q113925: FIX: Visual Workbench Cannot Create Project

{% raw %}

	Article: Q113925
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0 
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a new project which is located in a nonexistent directory, it is
	possible to get a message box containing the following error:
	
	  Cannot switch to drive ". Cannot Create the Project.
	
	RESOLUTION
	==========
	
	Closing all of the open Workbench windows will resolve this problem. From the
	Workbench menu, select Windows and then Close All. You can then return to the
	Project menu, select New and create your project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 2.0.
	
	Additional query words: fail 1.00 1.10 1.50 S_VCNT S_VWB
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper _IKkbbogus kbvc150 kbvc100 kbVWB
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
