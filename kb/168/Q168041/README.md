---
layout: page
title: "Q168041: PRB: Can't Export All Subprojects Into a Single Makefile"
permalink: /kb/168/Q168041/
---

## Q168041: PRB: Can't Export All Subprojects Into a Single Makefile

{% raw %}

	Article: Q168041
	Product(s): Microsoft C Compiler
	Version(s): 5.0, 6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you export a makefile in Visual C++ 5.0, each project is written to a
	separate makefile. This means that subprojects of a project are built using
	separate makefiles.
	
	RESOLUTION
	==========
	
	This should not negatively impact builds. The makefile for the parent project
	invokes NMAKE to build the subprojects. There is no way to force Developer
	Studio to write a single makefile for all projects in the build.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Visual C++ 4.x, a parent project and its subprojects were written to the same
	makefile. In Visual C++ 5.0, you must manually export a makefile and each
	project is written to a separate makefile. The only way this should impact
	builds is that you are responsible for exporting all makefiles needed for a
	build. The makefile for a parent project contains commands to invoke NMAKE to
	build its subprojects. If all of the makefiles needed are present, the build
	executes as expected.
	
	You do not need to change how you invoke NMAKE, nor do you need to invoke NMAKE
	separately for the subprojects. The parent project should invoke NMAKE for any
	subprojects that need to be built.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 5.0, 6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
