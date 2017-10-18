---
layout: page
title: "Q59069: FIX: NMAKE File Hangs Machine When Right Parenthesis Missing"
permalink: kb/059/Q59069/
---

## Q59069: FIX: NMAKE File Hangs Machine When Right Parenthesis Missing

	Article: Q59069
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11; OS/2:1.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11 
	- Microsoft NMAKE Utility for OS/2, version 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you forget the right parenthesis in an IF "$(flag)"=="comparison" line in a
	makefile and run the makefile through NMAKE, you can receive machine hangs or
	corrupt COMMAND.COM messages under MS-DOS or an Internal Processing Error under
	OS/2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the versions of NMAKE listed
	above. This problem was corrected in NMAKE version 1.12.
	
	MORE INFORMATION
	================
	
	The following makefile, simplified from the sample makefile on Page 172 of the
	"QuickC ToolKit" manual, demonstrates this problem:
	
	  debug=Y
	  CC=qcl
	  !CMDSWITCHES +D
	  HELLO.EXE : HELLO.OBJ
	  !IFDEF debug
	  !   IF "$(debug"=="y"
	                  LINK /CO hello;
	  !   ELSE
	                  LINK hello;
	  !   ENDIF
	  !ELSE
	  !   ERROR Macro named debug is not defined.
	  !ENDIF
	
	Adding a right parenthesis after "$(debug solves the problem.
	
	The error seems to occur because NMAKE does not recognize the end of the line and
	continues to parse the line until the end of the file. A customer has reported
	receiving "U1076, Line too long" messages, followed by a DOS level error
	reading
	
	  Invalid COMMAND.COM - system halted.
	
	Testing the same problem in an MS-DOS window under OS/2 version 1.2 returned
	Internal Processing Errors and halted the system with no other error messages.
	
	Additional query words: buglist1.01 buglist1.11 fixlist1.12
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE111OS2
	Version           : MS-DOS:1.01,1.1,1.11; OS/2:1.11
	Solution Type     : kbfix
	
	=============================================================================
	
