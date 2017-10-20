---
layout: page
title: "Q29837: C 5.10 MTDYNA.DOC: Sample MT Program/Possible Problem Areas"
permalink: /kb/029/Q29837/
---

## Q29837: C 5.10 MTDYNA.DOC: Sample MT Program/Possible Problem Areas

{% raw %}

	Article: Q29837
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-JAN-1991
	
	The following information is from "Section 4: Sample Multiple-Thread C
	Program" of the Microsoft C version 5.10 MTDYNA.DOC file.
	
	4.3   Possible Problem Areas
	
	Several possible problems may occur when creating, linking, or
	executing a multiple-thread C program. Some of the more common ones
	are listed below. The symptom is listed first, followed by the likely
	cause:
	
	1. LINK searches for xLIByz.LIB
	
	   This is caused by omitting the /NOD option from the LINK command.
	   If /NOD is omitted, LINK searches for the default library. The
	   default library should NOT be used with multiple-thread programs.
	   The /NOD option tells the computer not to search the default
	   libraries. This problem may also be avoided by compiling with the
	   /Zl option which suppresses default library search records in the
	   object files.
	
	2. You get the following execution error:
	
	      SYS1943: A program caused a protection violation.
	
	   This is caused by failing to specify the condition "SS is not equal
	   to DS" in the CL command invocation. Specify the correct conditions
	   with the /Alfw customized memory-model option. Recompile the
	   program with /Alfw.

{% endraw %}
