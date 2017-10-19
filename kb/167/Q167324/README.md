---
layout: page
title: "Q167324: FIX: Custom Build Rule Not Saved for File Excluded from Build"
permalink: /kb/167/Q167324/
---

## Q167324: FIX: Custom Build Rule Not Saved for File Excluded from Build

	Article: Q167324
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbATL kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdatekbbuglist
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file has custom build rules associated with it and the file is excluded
	from the build, the custom build rules are not saved when the project is closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL COM project named ATLCOM.
	
	2. On the Build menu, click Settings, and then click the General tab. Exclude
	  atlcom.idl from build for all configurations.
	
	3. Close and reload the workspace.
	
	4. On the Build menu, click Settings, and then click the Custom Build tab and
	  notice that the custom build rule for atlcom.idl isn't there.
	
	Additional query words: custom build
	
	======================================================================
	Keywords          : kbtool kbATL kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
