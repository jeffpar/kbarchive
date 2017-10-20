---
layout: page
title: "Q140356: FIX: NMAKE Fails If Paths &amp; File Names Have Special Characters"
permalink: /kb/140/Q140356/
---

## Q140356: FIX: NMAKE Fails If Paths &amp; File Names Have Special Characters

{% raw %}

	Article: Q140356
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbVC500fix
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a character with a special meaning to NMAKE is used in a file name or path in
	a project created within the development environment, then an NMAKE error will
	be generated if you attempt to build the project from the command line with
	Nmake.exe. For example, if a file name is Tes$ting.cpp, the error is:
	
	  U1073: don't know how to make '".\Tesing.cpp"'
	
	If a file name is Tes#ting.cpp, the error is:
	
	  U1038: internal error : lexer
	
	If a file name is Tes!ting.cpp, the error is:
	
	  U1017: unknown directive '!ting.obj" :
	
	CAUSE
	=====
	
	Certain characters have special meaning to NMAKE. For example, the dollar sign
	($) indicates the beginning of a MACRO, the pound sign (#) is the start of a
	comment, and the exclamation point (!) indicates the start of a preprocessing
	directive. For further information on special NMAKE characters see the NMAKE
	reference in the Visual C++ User's Guide.
	
	Usually, placing a caret (^) in front of a special character will force that
	character to be treated as a literal character. However, these make files use
	inline response files, and if file names with special characters are used in an
	inline response file, placing a caret in front of the character will not resolve
	the error. For more information on this problem, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q59409 Trouble with File Names w/ a Dollar Sign ($) in Inline Files
	
	RESOLUTION
	==========
	
	Build the project from within the development environment.
	
	-or-
	
	Rename the files or paths so they don't use any special characters.
	
	-or-
	
	If the special characters are dollar signs, make a backup copy of the makefile
	and place a dollar sign in front of the dollar signs in the file names to force
	them to be treated as a literal character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The project will build without errors from within the development environment
	because it does not use Nmake.exe to build the project. It uses an internal
	build engine that can handle the different file names.
	
	Additional query words: kbVC400bug 10.20 utilities
	
	======================================================================
	Keywords          : kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
