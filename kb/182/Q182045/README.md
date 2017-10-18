---
layout: page
title: "Q182045: FIX: Excessive Delay Before Build, Export Makefile, or Debug"
permalink: kb/182/Q182045/
---

## Q182045: FIX: Excessive Delay Before Build, Export Makefile, or Debug

	Article: Q182045
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start a build in Microsoft Developer Studio, there could be an
	excessive delay before the actual build begins. This typically happens when
	building a large project. The delay can be about 3-5 minutes and an hourglass is
	shown in the Developer Studio. Then the build proceeds normally. This happens
	even when the project is up-to-date.
	
	This delay occurs only when you try to build the first time after opening the
	workspace. Subsequent builds do not experience the delay.
	
	This delay happens only in Developer Studio running under Windows 95.
	
	CAUSE
	=====
	
	This delay is caused by the dependency checking preceding the build. Before the
	build can start, Developer Studio needs to check file dependencies to decide
	which files are to be built. For a large project with complex dependencies,
	Developer Studio can spend a long time checking file timestamp information on a
	Windows 95 machine.
	
	RESOLUTION
	==========
	
	The following are two related workarounds. You should try Workaround 1 first; if
	that does not work, then consider the second workaround combined with the first
	workaround:
	
	Workaround 1. Use compiler switches /Yc and /Yu to create and use a precompiled
	header.
	
	Workaround 2. Use a precompiled header aggressively by including most of your
	project's header files in the precompiled header.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	This delay can also be experienced when you try to export the makefile or start
	a debug session the first time after opening the workspace.
	
	Additional query words: hang stall pause
	
	======================================================================
	Keywords          : kbDebug kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
