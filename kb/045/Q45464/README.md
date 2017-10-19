---
layout: page
title: "Q45464: Lack of Memory Can Cause pg_chartscatter to Fail"
permalink: /kb/045/Q45464/
---

## Q45464: Lack of Memory Can Cause pg_chartscatter to Fail

	Article: Q45464
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 22-JUN-1989
	
	The QuickC Version 2.00 presentation graphics functions
	_pg_chartscatter and _pg_chartscatterms fail if there is not enough
	memory in the far heap. These functions, like their cousins _pg_chart
	and _pg_chartms, depend on the availability of memory in the far heap
	for successful execution. The amount of memory needed for each
	function is directly proportional to the number of points being
	displayed. These functions return zero (0) if they execute
	successfully.
	
	To display more points with _pg_chartscatter and _pg_chartscatterms,
	try executing outside of the QuickC 2.00 environment. This method
	should free up enough memory for the functions to operate. Another way
	to free up memory is to turn debug information off.
