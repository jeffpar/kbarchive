---
layout: page
title: "Q114332: BUG: L2029 Error Truncates Debug Information"
permalink: kb/114/Q114332/
---

## Q114332: BUG: L2029 Error Truncates Debug Information

	Article: Q114332
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to debug an application that was built with unresolved externals will
	fail with varying results.
	
	Codeview will issue the following warning:
	
	  CV0103 Warning : relink 'C:\TEST.EXE' with the current linker
	
	This indicates that the debug information should be packed with the CVPACK
	utility. Because the linker fails to add unpacked debugging information to the
	executable, CVPACK will generate the error:
	
	  CVPACK : fatal error CK1013: incompatible version of debugging information.
	
	RESOLUTION
	==========
	
	You can work around this problem by creating a shell for each function call
	which is unresolved. A function shell avoids problems that can occur if the
	function is accidentally called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Linker versions
	5.5 and 5.6 for MS-DOS. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Linking an application without the linker switch /ONERROR:NOEXE produces an
	executable. CVPACK will not have been run because of the fatal L2029 error.
	Since the executable contains truncated debug information, CVPACK will fail.
	
	Windows applications that contain errors of this nature are invalid. Codeview and
	the IDE debugger correctly responds by not loading the debuggee.
	
	Additional query words: 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:5.5,5.6
	
	=============================================================================
	
