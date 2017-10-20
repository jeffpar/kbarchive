---
layout: page
title: "Q40183: Open() Will Not Ignore Append Path"
permalink: /kb/040/Q40183/
---

## Q40183: Open() Will Not Ignore Append Path

{% raw %}

	Article: Q40183
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 9-JAN-1989
	
	DOS allows you to set an APPEND path to locate data files. Microsoft C
	library functions such as open and fopen will not ignore the APPEND
	statement, even if a full pathname is given to the specific function.
	This is expected behavior. If you wish to have the APPEND path
	ignored, you will have to write your own low-level open function, or
	ensure that the APPEND path is removed before your program is run.

{% endraw %}
