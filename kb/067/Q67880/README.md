---
layout: page
title: "Q67880: LIB Error U2155 When Hyphen in File or Directory Name"
permalink: /kb/067/Q67880/
---

## Q67880: LIB Error U2155 When Hyphen in File or Directory Name

{% raw %}

	Article: Q67880
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.2
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, versions 3.1, 3.11, 3.17, 3.18, 3.2, 3.20.010, 3.31, 3.4 
	- Microsoft LIB for OS/2, versions 3.1, 3.11, 3.17, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Library Manager utility LIB.EXE does not allow file or directory
	names to contain a hyphen (-) character. If a file or directory name containing
	a hyphen is passed to LIB.EXE, the following error will be generated:
	
	  LIB : error U2155: <path> : module not in library; ignored
	
	MORE INFORMATION
	================
	
	Although a hyphen is a valid character for an MS-DOS or OS/2 filename, LIB
	interprets this character as the extraction operator that tells LIB to remove an
	object module from an existing library. Since LIB is assuming everything
	following the hyphen is the name of an object module that you want removed, and
	since this is not an actual module name, the U2155 error is generated.
	
	A common situation where this error may occur is while installing one of the
	Microsoft language products that build combined libraries during the
	installation process. You may receive the U2155 error when running a Setup
	program if you have specified a directory name during setup that contains a
	hyphen. For example, many C users install the C compiler in a directory called
	MS-C, but Setup then fails when LIB is called to build the combined libraries in
	that directory.
	
	This is expected behavior for LIB.EXE and is the result of the established
	command-line syntax. Unless the command-line syntax is changed, the hyphen
	cannot be recognized as a filespec character instead of an operator.
	
	Additional query words: kbinf 3.10 3.20 3.40 dash minus sign
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan318DOS kbLibMan310DOS kbLibMan311DOS kbLibMan317DOS kbLibMan320DOS kbLibMan320010DOS kbLibMan331DOS kbLibMan340DOS kbLibMan311OS2 kbLibMan317OS2 kbLibMan320OS2
	Version           : MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.2
	
	=============================================================================
	

{% endraw %}
