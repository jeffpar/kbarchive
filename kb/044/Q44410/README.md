---
layout: page
title: "Q44410: QB.EXE &quot;Not Watchable&quot; Error in SUB for SHARED Watch Variable"
permalink: /kb/044/Q44410/
---

## Q44410: QB.EXE &quot;Not Watchable&quot; Error in SUB for SHARED Watch Variable

{% raw %}

	Article: Q44410
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S890508-149 | mspl13_basic
	Last Modified: 20-DEC-1989
	
	Watch variables (which are set in QuickBASIC's Debug menu) have a
	local scope. That is, you must reset a Watch on that variable in each
	SUBprogram or FUNCTION procedure, even if the variable is in a SHARED
	or COMMON SHARED statement.
	
	If you Add a Watch at the main module level for a SHARED or COMMON
	SHARED variable, when you Step into a SUB or FUNCTION, the message
	"<Not watchable>" appears in the Debug window.
	
	This information applies to the QB.EXE environment in QuickBASIC
	Versions 4.00, 4.00b, and 4.50, and to the QBX.EXE environment of
	Microsoft BASIC PDS Version 7.00.

{% endraw %}
