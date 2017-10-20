---
layout: page
title: "Q73663: FIX: LINK May Incorrectly Generate L2049 for Resource-Only DLL"
permalink: /kb/073/Q73663/
---

## Q73663: FIX: LINK May Incorrectly Generate L2049 for Resource-Only DLL

{% raw %}

	Article: Q73663
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.03,5.05,5.1,5.11; OS/2:5.03,5.05,5.1,5.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.03, 5.05, 5.1, 5.11 
	- Microsoft LINK for OS/2, versions 5.03, 5.05, 5.1, 5.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft LINK utility versions 5.03, 5.05, 5.1, and 5.11 will generate the
	following error if you attempt to link a resource-only DLL that contains no code
	or data:
	
	  LINK: error L2049: no segments defined
	
	Although a valid DLL is created in this case, these versions of LINK set the
	error bit in the DLL's header and return an error code to the calling program.
	
	RESOLUTION
	==========
	
	Beginning with LINK version 5.13, the L2049 error was converted to a warning and
	the error bit is no longer set in the output file. To work around the problem
	with LINK 5.03, 5.05, 5.1, or 5.11, the EXEHDR utility may be used to reset the
	error bit in the header.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 5.03, 5.05, 5.1,
	and 5.11. This problem was corrected in LINK version 5.13.
	
	MORE INFORMATION
	================
	
	A resource-only DLL does not contain code or data--it is only used to store
	bitmaps, menus, fonts, and other static resources, but LINK versions 5.03, 5.05,
	5.1, and 5.11 flag the lack of segments with an L2049 error and mark the output
	file as invalid.
	
	To use the DLL, you can use EXEHDR to turn off the error bit by invoking it with
	the /RESET option. For example:
	
	  EXEHDR /RESET RESOURCE.DLL
	
	The most efficient method is to add this statement to the description block in
	your makefile that contains the LINK command. For example:
	
	  test.dll: test.obj test.def
	
	  link test,test.dll,,,test.def; exehdr /reset test.dll
	
	Note that in order to stop NMAKE from terminating with the error code from LINK,
	you should use either the /I (ignore exit codes) switch when invoking NMAKE,
	specify the .IGNORE directive inside the makefile, or add a dash (-) before the
	LINK command to indicate that processing the makefile should continue even if
	there is an error with the link step. See your NMAKE documentation for further
	information about the /I option, the .IGNORE directive, and the dash operator.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK503DOS kbLINK510DOS kbLINK511DOS kbLINK503OS2 kbLINK505OS2 kbLINK510OS2 kbLINK511OS2 kbLINK505DOS
	Version           : MS-DOS:5.03,5.05,5.1,5.11; OS/2:5.03,5.05,5.1,5.11
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
