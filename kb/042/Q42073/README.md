---
layout: page
title: "Q42073: Initialized Local Arrays"
permalink: /kb/042/Q42073/
---

## Q42073: Initialized Local Arrays

{% raw %}

	Article: Q42073
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 2-MAY-1989
	
	Microsoft QuickC Version 2.00 now allows you to have initialized local
	arrays.
	
	For example, the following program generates the following message if
	compiled under C Version 5.10 or QuickC Version 1.01.
	
	   error C2073 - cannot initialize array in function
	
	However, if the program is compiled under QuickC Version 2.00 it works
	correctly with no errors. This is the correct behavior, and is a new
	feature of Microsoft QuickC Version 2.00.
	
	The following is an example:
	
	void main(void)
	{
	    int test[5] = { 1, 2, 3, 4, 5 };
	}

{% endraw %}
