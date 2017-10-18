---
layout: page
title: "Q140024: FIX: Tools Won't Run If There's a Space in the Path"
permalink: kb/140/Q140024/
---

## Q140024: FIX: Tools Won't Run If There's a Space in the Path

	Article: Q140024
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to run a user-defined tool that has a space in the path results in this
	error:
	
	  Bad command or file name
	
	RESOLUTION
	==========
	
	Use one of the following two workarounds:
	
	- Call the command interpreter in either Windows 95 or Windows NT, and pass the
	  path in quotation marks. For example:
	
	  In Windows 95:
	
	  COMMAND.COM /c "d:\batch dir\batch.bat"
	
	  In Windows NT:
	
	  CMD.EXE /c "d:\batch dir\batch.bat"
	
	  -or-
	
	- Use the short name of the tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
