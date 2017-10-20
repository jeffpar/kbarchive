---
layout: page
title: "Q35290: MDA Blinking Normal Underlined Text Example"
permalink: /kb/035/Q35290/
---

## Q35290: MDA Blinking Normal Underlined Text Example

{% raw %}

	Article: Q35290
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 12-OCT-1988
	
	On a monochrome display adapter, there is no way to display colors.
	However, you can display Normal Text, Bright Text, Reverse Video,
	Underline, and Blinking.
	
	The following program shows how to get Normal Text, Blinking,
	Underlined, and No Inverse on a monochrome display adapter:
	
	#include<graph.h>
	int     oldcolor;
	long    oldbkcolor;
	
	main()
	{
	 _clearscreen(_GCLEARSCREEN);
	 oldcolor=_gettextcolor();
	 oldbkcolor=_getbkcolor();
	 _settextposition(12,0);
	 _settextcolor(17);           /* foreground color Blue + 16 */
	 _setbkcolor(0L);             /* background color Black */
	 _outtext("Blinking Normal Underlined Text, on Mono\n");
	 _settextcolor(oldcolor);
	 _setbkcolor(oldbkcolor);
	}

{% endraw %}
