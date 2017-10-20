---
layout: page
title: "Q47768: Unrecognized Switches /Z1, /NOI with Old Version of Linker"
permalink: /kb/047/Q47768/
---

## Q47768: Unrecognized Switches /Z1, /NOI with Old Version of Linker

{% raw %}

	Article: Q47768
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.x,3.01,3.02,3.04,3.05,3.51,3.55
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 2.x, 3.01, 3.02, 3.04, 3.05, 3.51, 3.55 
	-------------------------------------------------------------------------------
	
	The switches /Z1 or /NOI may appear in the following message when
	linking with Version 3.55 or earlier of the linker:
	
	  Unrecognized Switch <switch>
	
	Such old versions of the linker can be found in the MS-DOS directories of
	most distributed versions of MS-DOS.
	
	If the MS-DOS directory is listed in the PATH environment variable before
	the directory containing the correct version of the linker, the old
	linker will be executed. Delete or rename this linker, or place the
	DOS directory behind the proper linker's directory in the PATH.
	
	Additional query words: kbinf LinkIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK2xDOSSearch
	Version           : MS-DOS:2.x,3.01,3.02,3.04,3.05,3.51,3.55
	
	=============================================================================
	

{% endraw %}
