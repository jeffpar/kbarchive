---
layout: page
title: "Q123951: FIX: Problem with Remote Builds on Novell Netware Servers"
permalink: kb/123/Q123951/
---

## Q123951: FIX: Problem with Remote Builds on Novell Netware Servers

	Article: Q123951
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbCompiler kbide kbVC kbVC200bug kbGrpDSTools
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ projects that are located on Netware servers under Windows NT version
	3.5 may not build. Two possible errors are:
	
	  fatal error C2308: program database file, 'filename.pdb', has an obsolete
	  format, delete it and recompile.
	
	  -or-
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1056)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	
	The errors do not occur if the project is local or is located on Windows NT
	Advanced Server machines.
	
	CAUSE
	=====
	
	The problem relates to the memory mapped file I/O and the Novell Netware
	redirector (NWRDR.SYS).
	
	RESOLUTION
	==========
	
	These problems can be fixed by installing Service Pack 2 for Microsoft Windows
	NT, version 3.5.
	
	You can work around Error C2308 by using the /Z7 compiler switch. This will force
	the compiler to keep the debugging information in the .OBJ files and not write
	it to .PDB files.
	
	You can work around Error C1001 by turning off the compiler option for the
	Pre-compiled headers in the Project|Settings|C/C++|Pre-compiled headers dialog
	box.
	
	Building the .PDB file or the .PCH file on a local drive also works around the
	problem.
	
	STATUS
	======
	
	This problem is fixed by applying Service Pack 2 for Windows NT version 3.5.
	Please see Knowledge Base article Q121693 for more information.
	
	Additional query words: 2.00 9.00 err msg errmsg
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbCompiler kbide kbVC kbVC200bug kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
