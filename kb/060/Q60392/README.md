---
layout: page
title: "Q60392: FIX: &#91;PWB&#93; Tag Missing in PWB 1.0 Sample Init File, TOOLS.PRE"
permalink: /kb/060/Q60392/
---

## Q60392: FIX: &#91;PWB&#93; Tag Missing in PWB 1.0 Sample Init File, TOOLS.PRE

{% raw %}

	Article: Q60392
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TOOLS.PRE is a sample Programmer's WorkBench (PWB) initialization file that is
	installed (and modified) when C 6.0 is installed by running the Setup program.
	On pages 19 and 20 of "Microsoft C: Installing and Using the Professional
	Development System," it states that the contents of TOOLS.PRE can be merged with
	an existing TOOLS.INI file, if one exists, or it can be renamed to TOOLS.INI, if
	there isn't one. To work correctly, you must make sure that the contents of this
	file are preceded by a PWB tag (for example, [PWB]) because the supplied
	TOOLS.PRE lacks this tag.
	
	RESOLUTION
	==========
	
	When merging the PWB 1.0 TOOLS.PRE file into an existing TOOLS.INI file, a [PWB]
	tag should be added just above the area where the file is merged. For example:
	
	[PWB]
	 .
	 .
	 .
	 (TOOLS.PRE contents)
	 .
	 .
	 .
	
	[NEXT-TAG]
	
	If TOOLS.PRE is being renamed to TOOLS.INI, the tag should be added as the first
	line in the file. In either case, failure to add the tag will result in PWB
	ignoring the initialization information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0. This problem
	was corrected in PWB version 1.1.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
