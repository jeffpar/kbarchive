---
layout: page
title: "Q238875: PRB: C2471 or LNK1140 Error with PDB File Limits"
permalink: kb/238/Q238875/
---

## Q238875: PRB: C2471 or LNK1140 Error with PDB File Limits

	Article: Q238875
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbDebug kbLinker kbVC kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors are normally related to running into the module and size
	limits when a program database (PDB) file is created (a PDB file contains
	information used by the debugger; the file has a .pdb extension):
	
	Compiler Error:
	
	  C2471: cannot update program database
	
	Linker Error:
	
	  LNK1140 "too many modules for program database; relink with /PDB:NONE"
	
	CAUSE
	=====
	
	There is a limit of 4096 modules (.obj files) in a PDB file. The file also has a
	total size limit of approximately 64 MB.
	
	RESOLUTION
	==========
	
	There are several ways to reduce the size of PDB files:
	
	- Build some of the source files with the /Zd switch (line numbers only).
	
	- Build some of the source files as separate dynamic-link libraries (DLLs)
	  instead of static libraries.
	
	- Build some of the source files without debug information.
	
	- Try the compiler switch /Fd"myproject.pdb" (including the quotation marks).
	
	MORE INFORMATION
	================
	
	Note that the linker option /PDBTYPE:SEPT may have little affect in reducing the
	project's PDB file size. In Visual C++ 5.0, if you choose to use the /Fd switch,
	avoid using the linker option /PDBTYPE:SEPT if the PDB file name you choose is
	the same under compiler and linker options.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q121366 INFO: PDB and DBG Files - What They Are and How They Work
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbDebug kbLinker kbVC kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
