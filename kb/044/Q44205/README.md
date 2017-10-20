---
layout: page
title: "Q44205: BIND: &quot;Structure Error in .EXE File&quot; Caused by Non-FAPI Call"
permalink: /kb/044/Q44205/
---

## Q44205: BIND: &quot;Structure Error in .EXE File&quot; Caused by Non-FAPI Call

{% raw %}

	Article: Q44205
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# G890502-17544 | mspl13_c
	Last Modified: 22-MAY-1989
	
	A possible cause of the BIND error message "Structure error in .EXE
	file" is calling a non-FAPI function from within the program to be
	bound.
	
	The solution is to be sure to call only FAPI functions or to follow
	the directions in the BIND documentation for programs that make
	non-FAPI calls.

{% endraw %}
