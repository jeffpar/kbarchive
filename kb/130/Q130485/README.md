---
layout: page
title: "Q130485: PRB: Unable to Save Project State Information"
permalink: kb/130/Q130485/
---

## Q130485: PRB: Unable to Save Project State Information

	Article: Q130485
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbide kbVC200 kbVC210 kbVC400 kbGrpDSTools
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The development environment was tested with projects that included up to 100
	source files. While it is possible to create and successfully use larger
	projects in Visual C++, you may encounter problems related to performance or
	undocumented errors. Performance problems can often be minimized by increasing
	the size of your RAM or swap file.
	
	One known, undocumented error is:
	
	  <Project Name>.VCP
	  Unable to save project-specific state information.
	  Generic Error
	
	RESOLUTION
	==========
	
	To work around this error, simplify the project or decrease it in size. In
	general, breaking the project up into modules, based on functionality, is the
	best way to work around this problem. This can be accomplished through the use
	of static or dynamically linked libraries.
	
	There is no defined source file or VCP file limit, because projects are a complex
	combination of many interrelated variables.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC200 kbVC210 kbVC400 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC200 kbVC210
	Version           : :2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
