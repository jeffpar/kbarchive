---
layout: page
title: "Q109270: PRB: CK1024 Error May Be Caused by Modules in Library"
permalink: kb/109/Q109270/
---

## Q109270: PRB: CK1024 Error May Be Caused by Modules in Library

	Article: Q109270
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.5,5.6; winnt:1.0,2.5,2.55
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.5, 5.6 
	- Microsoft LINK for Windows NT, versions 1.0, 2.5, 2.55 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project, the following error occurs during the link stage:
	
	  CVPACK Fatal Error CK1024
	  <modulename> cannot use program database <pdbfile> : signatures do
	  not match
	
	  -or-
	
	  LINK: error LNK1202: "<path>\vc20.pdb" is missing debugging information
	  for referencing module.
	
	RESOLUTION
	==========
	
	The online help states the following:
	
	  The .OBJ file modulename uses the .PDB file pdbfile, but the internal
	  signature in pdbfile does not match the internal signature in modulename.
	  Delete modulename, recompile, and relink. If a makefile is used, check the
	  makefile dependencies.
	
	The error can occur when a library contains debug information. When a library is
	generated and built with debug information using the /Zi compiler option, the
	debug information contained in the library references a .PDB file (by default
	MSVC.PDB) on the computer where the library is built. A project that uses the
	library on another computer has its own .PDB file. During the linking phase when
	modules from the library are linked into the application, the linker checks to
	make sure that the PDB file it finds is the same one that was used when the
	library was built. Because the PDB file for the project is not the same one used
	when building the library, the error occurs.
	
	To resolve the problem, re-build the library using the /Z7 compiler option. This
	will place all debugging information for the library modules into the modules
	themselves. A .PDB file will not be referenced.
	
	For additional information on the CK1024 error, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q109269 PRB: Cause of Error CK1024
	
	Additional query words: 1.00 5.50 5.60
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbZNotKeyword3 kbLINKSearch kbLINK550DOS kbLINK560DOS kbLINK100NT kbLINK250NT kbLINK255NT
	Version           : MS-DOS:5.5,5.6; winnt:1.0,2.5,2.55
	
	=============================================================================
	
