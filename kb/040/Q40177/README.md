---
layout: page
title: "Q40177: Redirecting Errors to an Error File in M"
permalink: /kb/040/Q40177/
---

## Q40177: Redirecting Errors to an Error File in M

{% raw %}

	Article: Q40177
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 1-MAY-1989
	
	Under DOS, M Version 1.00 will store the error messages in the M.MSG
	file. This file is located in the directory the TMP environment
	variable points to. If TMP is not set, this file is located in
	the current working directory. Under OS/2, MEP uses named pipes, so
	there is no file to look at.

{% endraw %}
