---
layout: page
title: "Q66506: Error: Cannot Open Response File : &quot;"
permalink: /kb/066/Q66506/
---

## Q66506: Error: Cannot Open Response File : &quot;

{% raw %}

	Article: Q66506
	Product(s): See article
	Version(s): 6.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 9-NOV-1990
	
	When compiling and linking in one step with C 6.00, the following
	message may occur during linking:
	
	   Cannot open response file : ""
	
	The above error message is created when an older version of the linker
	is being found in the search path. Specifically, if linker version
	3.05 is being executed, this error will occur.
	
	Check your DOS utilities directory, or any other directory specified
	with the PATH command, for an older version of the LINK.EXE file.

{% endraw %}
