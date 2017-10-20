---
layout: page
title: "Q26548: Cannot Load CTRL+Z-Terminated Files with Less than 129 Bytes"
permalink: /kb/026/Q26548/
---

## Q26548: Cannot Load CTRL+Z-Terminated Files with Less than 129 Bytes

{% raw %}

	Article: Q26548
	Product(s): See article
	Version(s): 1.00 1.10 2.00 2.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist1.00 buglist1.10 buglist2.00 buglist2.10 qfbv | mspl13_basic
	Last Modified: 4-NOV-1988
	
	Problem:
	
	When using the F(ile) O(pen) command to load a text file which has
	less than 129 bytes and is terminated with a hex 1A (decimal 26,
	CTRL+Z, EOF), CodeView issues the error message "Not a text file." If
	the CTRL+Z character is removed, or if the file size is 129 bytes or
	greater, CodeView has no problem loading it.
	
	Response:
	
	Microsoft has confirmed this to be a problem in Version 1.00, 1.10,
	2.00, and 2.10. We are researching this problem and will post new
	information as it becomes available.

{% endraw %}
