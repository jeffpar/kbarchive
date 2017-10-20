---
layout: page
title: "Q11158: tan(pi/2) Does Not Cause an Error Because of Precision"
permalink: /kb/011/Q11158/
---

## Q11158: tan(pi/2) Does Not Cause an Error Because of Precision

{% raw %}

	Article: Q11158
	Product(s): See article
	Version(s): 3.00 4.00 5.00 5.10 6.00 6.00a | 5.10 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 15-JAN-1991
	
	Question:
	
	If you try to calculate tan(pi/2), which is in fact not defined, tan()
	will return a value. This value is not large. Why isn't there an error
	message for such an overflow?
	
	Response:
	
	This is a precision limitation. Because you are constrained to work in
	single or double precision accuracy, it isn't possible to specify a
	value close enough to the true value of pi/2 so that tan(X) overflows.

{% endraw %}
