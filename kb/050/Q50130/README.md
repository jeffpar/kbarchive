---
layout: page
title: "Q50130: PRB: Linker Error L2041: &quot;Stack Plus Data Exceeds 64K&quot;"
permalink: kb/050/Q50130/
---

## Q50130: PRB: Linker Error L2041: &quot;Stack Plus Data Exceeds 64K&quot;

	Article: Q50130
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.65,3.69,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.65, 3.69, 4.x, 5.0x, 5.1x, 5.2x, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L2041 stack plus data exceeds 64K
	
	CAUSE
	=====
	
	The application has more than 64K of stack and data to put into DGROUP (the
	default data segment).
	
	RESOLUTION
	==========
	
	To address this situation, perform one or more of the following three steps:
	
	- Reduce the stack size for the application.
	
	- Compile the application in the compact, large, or huge memory model.
	
	- Use the /Gt compiler option switch or the FAR keyword to remove data from
	  DGROUP and place it into another data segment.
	
	
	MORE INFORMATION
	================
	
	Even though a nonfatal error indicates a problem in the executable file, LINK
	produces the executable file, unless linking with the /ONERROR:NOEXE linker
	switch. /ONERROR:NOEXE is available with Microsoft C/C++ 7.0, and Visual C++ for
	Windows versions 1.0 and 1.5. Each non- fatal error message has the following
	format:
	
	  location : error L2xxx: messagetext
	
	In a nonfatal error message, the "location" field names the input file associated
	with the error or "LINK" if there is no input file. If the input file is an
	object module or library file and it has a module name, the module name is also
	given, enclosed in parentheses.
	
	REFERENCES
	==========
	
	For more information on error L2041, see one of the following references:
	
	- "Linker Error Messages" (section D.4, page 374) in the "Microsoft QuickC
	  Compiler for IBM Personal Computers and Compatibles Programmer's Guide"
	
	- The ERRMSG.DOC file on Compiler disk 1 for Microsoft C version 5.1 and on the
	  Setup disk for Microsoft C version 5.0
	
	- The README.DOC file on disk 1 for Microsoft Macro Assembler (MASM) version
	  5.1
	
	- The CVREADME.DOC file on the CodeView for MS-DOS disk for Microsoft FORTRAN
	  version 4.1
	
	- The online help for Microsoft C version 6.0, MASM version 6.0, and Visual C++
	  for Windows versions 1.0 and 1.5
	
	- The "Comprehensive Index and Errors Reference" for Microsoft C/C++ version
	  7.0, page 503
	
	Additional query words: 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK365DOS kbLINK369DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.65,3.69,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
