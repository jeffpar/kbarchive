---
layout: page
title: "Q139637: FIX: Developer Studio Ignores /nologo Linker Setting"
permalink: kb/139/Q139637/
---

## Q139637: FIX: Developer Studio Ignores /nologo Linker Setting

	Article: Q139637
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbVC500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Linker (LINK.EXE), used with:
	   - Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deselecting the Suppress Startup Banner (/nologo) linker option from within the
	Developer Studio does not cause the linker banner to display when building the
	project.
	
	CAUSE
	=====
	
	When building from within Developer Studio, the linker is spawned directly from
	the environment. The linker does not echo the command line options unless the
	options are received from a linker response file.
	
	RESOLUTION
	==========
	
	If you need to view the linker options, on the Project menu, click Settings, and
	click the Link tab. In the Settings For box, select the target for which you
	want to view the options. The command line options will appear under Project
	Options.
	
	The only way to see the actual command line while executing is to build the
	project from the command line. To do this, you may need to run the Vcvars32.bat
	file in the \Msdev\Bin directory to set up the environment variables. Change to
	the directory containing the project makefile and enter this command:
	
	     nmake /f <MakefileName.mak>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
