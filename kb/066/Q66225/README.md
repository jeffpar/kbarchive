---
layout: page
title: "Q66225: Possible Cause of L2029: '&#95;&#95;aDBswpchk': Unresolved External"
permalink: /kb/066/Q66225/
---

## Q66225: Possible Cause of L2029: '&#95;&#95;aDBswpchk': Unresolved External

{% raw %}

	Article: Q66225
	Product(s): See article
	Version(s): 6.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 17-OCT-1990
	
	A common cause of "L2029: '__aDBswpchk': unresolved external" is
	linking in the real mode graphics library, GRAPHICS.LIB, with an OS/2
	application. OS/2 may use the text graphics functions from Microsoft's
	library, but they must be linked with the protected mode version of
	the graphics library, GRTEXTP.LIB. The following example will compile
	and link an OS/2 application that uses text graphics functions, using
	the sample program TEXT.C from the on-line help.
	
	   cl /Lp text.c /link grtextp.lib

{% endraw %}
