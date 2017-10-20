---
layout: page
title: "Q38317: CodeView Gives &quot;Illegal Instruction&quot; on Clone 386"
permalink: /kb/038/Q38317/
---

## Q38317: CodeView Gives &quot;Illegal Instruction&quot; on Clone 386

{% raw %}

	Article: Q38317
	Product(s): See article
	Version(s): 2.20
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | CV | mspl13_basic
	Last Modified: 23-NOV-1988
	
	Some clones that are not entirely IBM-compatible under CodeView may
	give an "illegal instruction" message upon executing Go (F5), and then
	hang, requiring a warm boot. If the instruction being called illegal
	is FINIT or FNINIT, the particular ROM BIOS probably has a built-in
	387 emulator. Either turn off the emulator, or set the environment
	variable SET NO87=(some string).

{% endraw %}
