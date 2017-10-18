---
layout: page
title: "Q105118: PRB: CodeView Displays &quot;Bad DLL Format in 'Filename'&quot;"
permalink: kb/105/Q105118/
---

## Q105118: PRB: CodeView Displays &quot;Bad DLL Format in 'Filename'&quot;

	Article: Q105118
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting CodeView, or when CodeView loads a program to debug, the following
	message is displayed:
	
	  Bad DLL Format in 'path\filename'
	
	CAUSE
	=====
	
	Here are four of the most common reasons for this message (resolutions to each
	of the causes is shown below):
	
	1. There are not enough free file handles.
	
	2. There is not enough available memory.
	
	3. A dynamic-link library (DLL) from a previous version of CodeView is being
	  loaded.
	
	4. CodeView is trying to load an expression evaluator for a different operating
	  system.
	
	RESOLUTION
	==========
	
	To work around each problem:
	
	1. Check available file handles, using STRESS.EXE. There should be a minimum of
	  six available file handles. If there are too few handles, shut down an
	  application and retry, or increase the "FILES=" entry in the CONFIG.SYS file.
	
	2. CodeView can be run with as little as 2 megabytes (MB)of memory, although
	  more is recommended. Use STRESS for Windows, MEM for MS-DOS, or some other
	  memory utility to find out how much memory is available. Shut down other
	  applications and remove any unnecessary terminate-and- stay-resident (TSR)
	  programs.
	
	3. This happens most commonly when upgrading from C/C++ 7.0 to Visual C++ 1.0,
	  without removing C/C++ 7.0. The CodeView DLLs are still in the path. Unlike
	  CodeView for Windows, CodeView for MS-DOS looks for DLLs in the path first.
	  So, for example, CodeView 4.1 might find a 4.0 DLL and try to load it,
	  resulting in an error. To eliminate this problem, remove the path entry
	  pointing to the C700 directory, remove C700, or rename the offending DLL to
	  something else.
	
	4. Attempting to have CodeView for Windows load one of the MS-DOS expression
	  evaluators through an Eval statement in the [CVW] section of the TOOLS.INI
	  file will also cause the "Bad DLL format in 'filename'" error to be
	  displayed. "Filename" is the name of the expression evaluator that CodeView
	  for Windows is trying to load, and will be either EED1CAN.DLL or EED1CXX.DLL.
	  The message is issued immediately after the file to be debugged has been
	  specified. This is discussed in more detail in the Knowledge Base (KB)
	  article Q87922.
	
	MORE INFORMATION
	================
	
	CodeView version 4.0 introduces a new, flexible architecture for the debugger.
	CodeView is composed of a main executable program, CV.EXE (CodeView for MS-DOS)
	or CVW.EXE (CodeView for Windows) and a collection of dynamic-link libraries.
	Each DLL implements an aspect of the debugging process. For more information on
	this architecture, see the CodeView documentation.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
