---
layout: page
title: "Q64874: Use Supplied Batch Files to Recompile Start-Up Code"
permalink: /kb/064/Q64874/
---

## Q64874: Use Supplied Batch Files to Recompile Start-Up Code

{% raw %}

	Article: Q64874
	Product(s): See article
	Version(s): 6.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S900710-95 | mspl13_c
	Last Modified: 16-AUG-1990
	
	If you recompile _file.c to increase your file streams, you will
	encounter the following warning:
	
	   L4051 llibce.lib : cannot find library
	
	If you specify /AL and /FPi87 on your compile line and build
	LLIBC7.LIB, the warning will still occur.
	
	This error occurs because, when you recompile _file.c, you must use
	the /Zl option. This option removes the default library search records
	from the object file. If this option is not used, the default library
	will be searched for, rather than the library you specify.
	
	The best way to modify the start-up code is to use the provided
	STARTUP.BAT or STARTUP.CMD files. Documentation for the use of these
	files may be found in STARTUP.DOC.

{% endraw %}
