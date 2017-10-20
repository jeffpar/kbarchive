---
layout: page
title: "Q38225: Error C1053 Compiler Limit : Struct/union Nesting"
permalink: /kb/038/Q38225/
---

## Q38225: Error C1053 Compiler Limit : Struct/union Nesting

{% raw %}

	Article: Q38225
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc s_error docerr | mspl13_c
	Last Modified: 19-DEC-1988
	
	The following error is from "Fatal-Error Messages" in the "Microsoft C
	Optimizing Compiler User's Guide," Section E.3.1, Page 250, and in the
	"Microsoft QuickC Compiler Programmer's Guide," Section D.1.1, Page
	319:
	
	C1053       compiler limit : struct/union nesting
	
	            Structure and union definitions were nested to more than
	            10 levels.
	
	The error message and explanation given for C1053 in the "Microsoft
	QuickC Compiler Programmer's Guide" is incorrect. It has been switched
	with the message and description for C1027.
	
	The compiler cannot recover from a fatal error; it terminates after
	printing the error message.

{% endraw %}
