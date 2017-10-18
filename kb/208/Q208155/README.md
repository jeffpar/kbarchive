---
layout: page
title: "Q208155: PRB: BK1503 when Building Large .bsc File"
permalink: kb/208/Q208155/
---

## Q208155: PRB: BK1503 when Building Large .bsc File

	Article: Q208155
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a large browser database, or .bsc file, the following error may
	occur:
	
	  BK1503: cannot write to file 'filename'
	
	CAUSE
	=====
	
	During compilation the compiler stores browser information for each source file
	in a corresponding .sbr file. BSCMAKE combines the .sbr files generated during
	compilation into one browser database. If the resulting browser database exceeds
	64 MB or if the number of input files the compiler processes (source and
	headers) exceeds 4086 this error will be emitted by BSCMAKE.
	
	RESOLUTION
	==========
	
	If the problem is caused by the number of input files exceeding 4086, the only
	way to work around this problem is to reduce the number of source files the
	compiler generates browse information for. From Visual Studio, this can be
	accomplished by clearing Generate Browse Info on the C/C++ tab in Project
	Settings for your entire project, then select on a file by file basis.
	
	If the problem is caused by the size of the .bsc file exceeding 64MB, then
	reducing the number of input files will decrease the size of the resulting .bsc
	file. The size of the .bsc file may also be reduced through the use of /Em
	(Exclude Macro Expanded Symbols), /El (Exclude Local Variables), and /Es
	(Exclude System Files). The /E options can be added manually to the Project
	Options on the BSCMAKE tab of the Project Settings dialog.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbMiscTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
