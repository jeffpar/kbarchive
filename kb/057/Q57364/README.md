---
layout: page
title: "Q57364: Missing FUNCTION Name in BASIC PDS 7.00 Example"
permalink: /kb/057/Q57364/
---

## Q57364: Missing FUNCTION Name in BASIC PDS 7.00 Example

{% raw %}

	Article: Q57364
	Product(s): See article
	Version(s): 7.00 7.10 | 7.00 7.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# S891219-95 docerr | mspl13_basic
	Last Modified: 8-JAN-1991
	
	There is an error on Page 494 of the "Microsoft BASIC 7.0:
	Programmer's Guide" (for 7.00 and 7.10), as shown below.
	
	The following is incorrect:
	
	   C$ = (A$, LEN(A$), B$, LEN(B$))
	
	The following is correct:
	
	   C$ = AddString$(A$, LEN(A$), B$, LEN(B$))
	
	This information applies to Microsoft BASIC Professional Development
	System (PDS) versions 7.00 and 7.10 for MS-DOS and MS OS/2.

{% endraw %}
