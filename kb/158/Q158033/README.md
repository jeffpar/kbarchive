---
layout: page
title: "Q158033: PRB: Browse Information Not Generated"
permalink: /kb/158/Q158033/
---

## Q158033: PRB: Browse Information Not Generated

	Article: Q158033
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your project is loaded and you try to browse a symbol inside the Visual C++
	IDE, you receive the following error message:
	
	  No Browse Information is available
	
	or, in earlier versions of Visual C++:
	
	  Browse information is not available for this project
	
	CAUSE
	=====
	
	The project does not have the right settings switched on to create a browser
	(BSC) file.
	
	RESOLUTION
	==========
	
	In Visual C++ .NET, you must click to select a single project option to create
	the BSC file:
	
	1. In the Solution Explorer window, right-click the project in question (note
	  that solutions can contain more than one project), and then click Properties.
	
	2. In the Property Pages dialog box, click to select the General section.
	
	3. Locate the Build Browser Information property in the General section, and
	  then change the setting from No to Yes.
	
	4. Rebuild your project to create the BSC file.
	
	In earlier versions of Visual C++, you must click to select two check boxes in
	the build settings:
	
	1. On the main menu, select Build/Settings.
	
	2. Select the C/C++ tab. Select the Generate browse info box. This tells the
	  compiler to generate an intermediate SBR file for each source file.
	
	3. Select the Browse Info tab. Select the Build browse info file box. This
	  invokes the BSCMAKE utility when a project is built to generate a BSC file.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: browser
	
	======================================================================
	Keywords          : kbide kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
