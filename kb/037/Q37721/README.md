---
layout: page
title: "Q37721: Error C2172 Function : Actual Is Not a Pointer..."
permalink: /kb/037/Q37721/
---

## Q37721: Error C2172 Function : Actual Is Not a Pointer...

{% raw %}

	Article: Q37721
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc s_error | mspl13_c
	Last Modified: 14-NOV-1988
	
	The following error is from "Compilation-Error Messages" in the
	"Microsoft QuickC Compiler Programmer's Guide," Section D.1.2, Page
	339, and from "Compiler and Run-Time Errors -- New Messages" in the
	Microsoft C Optimizing Compiler file ERRMSG.DOC, on Version 5.00's
	Setup Disk and on Version 5.10's Compiler Disk 1, but not in the
	"Microsoft C Optimizing Compiler User's Guide" for those versions:
	
	C2172       function : actual is not a pointer, parameter number
	
	            An attempt was made to pass a non-pointer argument to a
	            function that expected a pointer. The given number
	            indicates which argument was in error.
	
	When the compiler encounters any of the errors listed in this section,
	it continues parsing the program (if possible) and outputs additional
	error messages. However, no object file is produced.

{% endraw %}
