---
layout: page
title: "Q27778: Program's First Command-Line Argument Is &quot;C&quot; Under DOS 2.x"
permalink: /kb/027/Q27778/
---

## Q27778: Program's First Command-Line Argument Is &quot;C&quot; Under DOS 2.x

{% raw %}

	Article: Q27778
	Product(s): See article
	Version(s): 5.00 5.10 6.00 6.00a
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 15-JAN-1991
	
	Real-mode programs that access command-line arguments in order to
	determine their full pathname will find that their pathname is always
	"C" under MS-DOS versions 2.x. Under DOS versions 3.x and later, the
	full pathname is retrieved as expected.
	
	This is not a problem in the C compiler. Rather, it is a limitation of
	MS-DOS versions 2.x.

{% endraw %}
