---
layout: page
title: "Q41701: Using ANSI Escape Sequences in Microsoft C"
permalink: /kb/041/Q41701/
---

## Q41701: Using ANSI Escape Sequences in Microsoft C

{% raw %}

	Article: Q41701
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 17-MAY-1989
	
	Question:
	
	How can I control the screen display using ANSI.SYS escape sequences
	in my C program? For example, how can I clear the screen using the
	escape sequences?
	
	Response:
	
	The easiest way to use ANSI escape sequences is to use them in the
	printf statement, as follows:
	
	#include <stdio.h>
	
	/* ESC[2J escape sequence clears the screen;
	   \033 represents the octal code for ESC */
	
	#define  CLEAR "\033[2J"
	main()
	{
	 printf ("%s screen is now cleared",CLEAR);
	}
	
	The best source of information on different escape sequences is "The
	MS-DOS Encyclopedia," Pages 731-738.
	
	Note: For escape sequences to work correctly, ANSI.SYS must be
	installed.

{% endraw %}
