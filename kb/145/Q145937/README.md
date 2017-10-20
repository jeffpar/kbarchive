---
layout: page
title: "Q145937: FIX: DUMPBIN, LIB, and EDITBIN Fail on File Names with Spaces"
permalink: /kb/145/Q145937/
---

## Q145937: FIX: DUMPBIN, LIB, and EDITBIN Fail on File Names with Spaces

{% raw %}

	Article: Q145937
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVC410fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The command-line utilities Dumpbin.exe, Editbin.exe, and Lib.exe do not accept
	file names that contain embedded spaces. For example, this code:
	
	     DUMPBIN /ALL "my test.obj"
	
	results in this error:
	
	  DUMPBIN : fatal error LNK1181: cannot open input file "my"
	
	CAUSE
	=====
	
	Dumpbin.exe, Lib.exe, and Editbin.exe are front-end utilities that spawn and
	pass their arguments to Link.exe. When the front-end utility parses its command
	line, it strips the quotation marks. This stripped argument is passed to Link
	.exe by the spawning program.
	
	RESOLUTION
	==========
	
	Use LINK with the file names that contain embedded spaces instead of using the
	front-end utilities. The syntax is:
	
	     LINK  /<Link Utility Switch>  [Utility Arguments]
	
	Here [Utility Arguments] is the list of arguments for the front-end utility.
	
	Front-End Utility Link Utility Switch
	
	EDITBIN.EXE         /EDIT
	DUMPBIN.EXE         /DUMP
	LIB.EXE             /LIB
	
	For example, the equivalent of:
	
	     DUMP /ALL "my test.obj"
	
	is:
	
	     LINK /DUMPBIN /ALL "my test.obj"
	
	Similarly, LINK /LIB is equivalent to LIB and LINK /EDIT is equivalent to
	EDITBIN.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbVC410fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
