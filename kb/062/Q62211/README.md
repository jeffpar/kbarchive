---
layout: page
title: "Q62211: &quot;Out of String Space&quot; Using DB/lib"
permalink: /kb/062/Q62211/
---

## Q62211: &quot;Out of String Space&quot; Using DB/lib

{% raw %}

	Article: Q62211
	Product(s): See article
	Version(s): 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S900406-40 | mspl13_basic
	Last Modified: 25-MAY-1990
	
	A customer reported that when using DB/lib with Microsoft QuickBASIC
	Compiler version 4.50 for MS-DOS, he received an "Out of string space"
	error when running his program. The solution to the problem was to
	decrease the number stored in the "DBPOOL" environment variable.
	According to the customer, this environment variable allocates memory
	for DB/lib, apparently from string space. He said that the default
	value for this variable was 64 (meaning 64K). When he set DBPOOL to
	16, his program functioned normally.
	
	Although this problem has not been duplicated by Microsoft, AJS
	Publishing, the developer of DB/lib, has confirmed the above
	information about the DBPOOL environment variable and the possibility
	of a memory conflict with QuickBASIC.

{% endraw %}
