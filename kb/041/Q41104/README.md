---
layout: page
title: "Q41104: DOC: Libraries Added by Comment pragma Appear After Default"
permalink: /kb/041/Q41104/
---

## Q41104: DOC: Libraries Added by Comment pragma Appear After Default

	Article: Q41104
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbVC100 kbVC150 kbVC200 kbVC500
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, and 6.0ax 
	   - Microsoft C for OS/2, versions 6.0 and 6.0a 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation states that when using the library option of the comment
	pragma the specified library name will be inserted before the default library
	name in the object module. This is not the case; the given library name appears
	after the default library name. This agrees with the next statement in the
	documentation which states that using this pragma is the same as giving the
	library to LINK on the command line.
	
	MORE INFORMATION
	================
	
	If the order of the default library and an added library is important, compiling
	with the /Zl switch will prevent the default library name from being placed in
	the object module. A second comment pragma then can be used to insert the name
	of the default library after the added library. The libraries listed with these
	pragmas will appear in the object module in the same order they are found in the
	source code.
	
	Additional query words: kbCompiler kbDSupport
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbVC100 kbVC150 kbVC200 kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:1.0,2.0,5.0,6.0
	
	=============================================================================
	
