---
layout: page
title: "Q65979: PRB: C Pragma Comment &amp; #ident Strings Missing from Executable"
permalink: /kb/065/Q65979/
---

## Q65979: PRB: C Pragma Comment &amp; #ident Strings Missing from Executable

	Article: Q65979
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After compiling an application developed for Windows version 3.0 or 3.1 from
	code that uses the comment pragma feature or the #ident preprocessor directive
	of the Microsoft C Compiler, the comment string is missing from the final
	executable file.
	
	CAUSE
	=====
	
	The Resource Compiler in the Windows Software Development Kit (SDK) version 3.0
	or 3.1 removes the comment string from the executable.
	
	RESOLUTION
	==========
	
	Declare the comment as a static string variable, as follows:
	
	     static char CommentString[] = _FILE_" = $Revision:   1.2   $";
	
	This will embed the desired information in the .EXE file; however, when the
	program is run, the application will load the string with the program's other
	variables. This will take up some storage in the local data space.
	
	MORE INFORMATION
	================
	
	This behavior is an unavoidable consequence of the method the Microsoft C
	compiler uses to store comment strings in an executable file. Placing the
	strings outside all segments is not consistent with the Windows segment-
	executable format, which places all code and data into segments that can be
	loaded separately. The Resource Compiler cannot preserve comment data stored
	outside any segment.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
