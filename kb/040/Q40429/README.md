---
layout: page
title: "Q40429: Using a Response File with Microsoft LINK"
permalink: /kb/040/Q40429/
---

## Q40429: Using a Response File with Microsoft LINK

{% raw %}

	Article: Q40429
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 5.01.20, 5.01.21, 5.03, 5.05, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Microsoft LINK response file contains responses to the prompts that the LINK
	utility displays. The responses must be in the same order as the LINK prompts.
	
	LINK interprets the lines in the response file as if they were typed as responses
	to the prompts or on the command line. A carriage return-linefeed (CR-LF)
	combination in the response file corresponds to pressing the ENTER key in
	response to a prompt or including a comma on the command line.
	
	Note: A response file cannot contain any comments.
	
	MORE INFORMATION
	================
	
	The following response file example links modules MOD1.OBJ and MOD2.OBJ to
	create an application called MODX.EXE. The linker creates MODM.MAP as a map
	file, uses the LLIBCEW.LIB and OLDNAMES.LIB libraries, the
	NODEFAULTLIBRARYSEARCH and NOEXTDICTIONARY options, and the PROJ.DEF module-
	definition file.
	
	Sample File
	-----------
	
	  mod1 mod2
	  modx
	  modm
	  llibcew oldnames /NOD /NOE
	  proj.def
	
	To use this sample file named RESPONSE.ONE, type the following at the command
	line:
	
	  " link @response.one" (without the quotation marks)
	
	Additional query words: kbinf 3.x 5.01.20 5.01.21 5.03 5.05 5.10 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK505DOS
	Version           : MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	

{% endraw %}
