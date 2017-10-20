---
layout: page
title: "Q51413: STACK STACK Correctly Gives &quot;Out of Memory&quot; in QBX.EXE"
permalink: /kb/051/Q51413/
---

## Q51413: STACK STACK Correctly Gives &quot;Out of Memory&quot; in QBX.EXE

{% raw %}

	Article: Q51413
	Product(s): See article
	Version(s): 7.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S891019-160 | mspl13_basic
	Last Modified: 12-DEC-1989
	
	If you run a program containing the statement STACK STACK in the
	QBX.EXE environment and then attempt to edit the program, the error
	message "Out of memory" will result. The error message can be
	prevented by going to the Immediate window in QBX and executing the
	STACK statement to reset the stack size to the default. The error
	occurs because the STACK STACK statement allocates all available
	memory in the data segment for the stack. However, QBX needs to use
	part of this segment for its own purposes.
	
	This information applies to Microsoft BASIC PDS Version 7.00 for
	MS-DOS.

{% endraw %}
