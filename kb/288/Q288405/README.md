---
layout: page
title: "Q288405: How to Debug Index Server"
permalink: /kb/288/Q288405/
---

## Q288405: How to Debug Index Server

{% raw %}

	Article: Q288405
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtoolkbfaq
	Last Modified: 16-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To obtain debug output from Index Server, follow these steps:
	
	1. Install the "checked" (chk) build of Index Server.
	
	  The chk build has the cidbg flag set.
	
	2. Use a debugger to attach to Cisvc.exe.
	
	3. In the debugger, set the values of vqinfolevel and ciinfolevel to generate
	  the appropriate output. For example:
	
	   - ed query!vqinfolevel ffffffff
	
	   - ed query!ciinfolevel ffffffff
	
	If you set the values to ffffffff, you will receive all available debug output.
	
	MORE INFORMATION
	================
	
	To reduce the amount of debug output, use the following values for vqinfolevel
	or ciinfolevel:
	
	- DEB_ERROR 0x00000001 // exported error paths
	
	- DEB_WARN 0x00000002 // exported warnings
	
	- DEB_TRACE 0x00000004 // exported trace messages
	
	- DEB_IERROR 0x00000100 // internal error paths
	
	- DEB_IWARN 0x00000200 // internal warnings
	
	- DEB_ITRACE 0x00000400 // internal trace messages
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbfaq
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
