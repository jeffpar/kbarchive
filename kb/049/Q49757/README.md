---
layout: page
title: "Q49757: PRB: Error U1082 When Command Line Too Long in Makefile"
permalink: /kb/049/Q49757/
---

## Q49757: PRB: Error U1082 When Command Line Too Long in Makefile

{% raw %}

	Article: Q49757
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to build a file with the Microsoft MAKE or NMAKE utilities fails and
	the utility generates the following message:
	
	  U1082: Not enough memory '...' cannot execute '...'
	
	where '...' is replaced by the name of a command.
	
	CAUSE
	=====
	
	The length of the command line executed to build a given dependency is longer
	than the longest command line allowed in MS-DOS (128 characters). This error
	occurs most often with the Microsoft LINK command line.
	
	RESOLUTION
	==========
	
	Create a response file in the makefile and specify the name of the response file
	on the LINK command line. For more information on response files, see the
	documentation or the on-line help provided with your language compiler.
	
	Additional query words: 1.10 1.20 1.30 1.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.21
	
	=============================================================================
	

{% endraw %}
