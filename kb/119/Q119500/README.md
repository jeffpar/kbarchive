---
layout: page
title: "Q119500: FIX: Link /OUT Does Not Rename Target"
permalink: /kb/119/Q119500/
---

## Q119500: FIX: Link /OUT Does Not Rename Target

{% raw %}

	Article: Q119500
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project with a makefile created by the Visual Workbench, if you
	attempt to specify the output filename (.EXE or .DLL) by selecting the Options
	menu, and choosing Project, Linker, Output, or specifying the /OUT switch by
	selecting the Options menu and choosing Project, Linker, Miscellaneous, Other
	Options, the target name remains unchanged. The target is named according to the
	base name of the makefile being used.
	
	RESOLUTION
	==========
	
	To work around the problem, add a line similar to the following ( without
	brackets ):
	
	  REN <makefile base name>.<EXE or DLL> <new target base
	  name>.<EXE or DLL>
	
	to the Visual Workbench-generated makefile, immediately following the LINK
	command line in the inference rule that causes LINK to be executed. The
	resulting makefile can be used with NMAKE from the command line, as well as by
	the Visual Workbench. The caveat here is that when using the (modified) makefile
	in the Visual Workbench, the makefile must be opened as an external makefile, so
	that the inference rules will be used when NMAKE is spawned. When an "internal"
	makefile is used, the inference rules in the Visual Workbench-generated makefile
	are not used, rather, the Visual Workbench manages the build process much like
	NMAKE would, without actually spawning NMAKE. Using the modified makefile as an
	"internal" makefile will not give an error, but the target file will not be
	renamed. The only way to ensure that the target will properly be renamed is to
	use the modified "internal" makefile as an external makefile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
