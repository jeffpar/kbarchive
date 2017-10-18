---
layout: page
title: "Q165792: FIX: MSDEV.EXE Application Error When Building an Application"
permalink: kb/165/Q165792/
---

## Q165792: FIX: MSDEV.EXE Application Error When Building an Application

	Article: Q165792
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT: 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbide kbVC kbVC500bug kbVS97sp1fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a file in Developer Studio, an error similar to the following
	may occur:
	
	  MSDEV.EXE - Application Error
	  The instruction at "0x500b153d" referenced memory at "0x100000c1.
	  The memory could not be "read".
	
	  -or-
	
	  Error executing ~vcecho!Compiling.
	
	CAUSE
	=====
	
	The install directory contains spaces and the root directory contains a file
	with the same name as the first part of the install directory, or the project
	directory contains an ampersand (&) in its name.
	
	A common scenario follows.
	
	Developer Studio was installed under the default Program Files directory and
	there is a file in the root directory with a filename of Program. For example:
	
	  C:\Program
	
	  -or-
	
	  C:\Program.exe
	
	RESOLUTION
	==========
	
	Rename the file.
	
	  -or-
	
	Delete the file.
	
	  -or-
	
	Uninstall Developer Studio and install it in a directory that doesn't contain
	spaces.
	
	  -or-
	
	Uninstall Developer Studio and install it in a directory with spaces that doesn't
	have a file in the root directory with the same name as the first part of the
	install directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	If the file happens to be an executable such as C:\Program.exe, then program.exe
	will be executed instead of the build. If program.exe returns zero, then you
	will see any output from stdout in the build tab of the output window. If
	program.exe returns non-zero, then you will see the error message "Error
	executing ~vcecho!Compiling." in the build tab of the output window.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbide kbVC kbVC500bug kbVS97sp1fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS NT: 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
