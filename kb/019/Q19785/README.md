---
layout: page
title: "Q19785: Local Variable Allocation Is Limited to 32K"
permalink: /kb/019/Q19785/
---

## Q19785: Local Variable Allocation Is Limited to 32K

{% raw %}

	Article: Q19785
	Product(s): See article
	Version(s): 4.00 5.00 5.10 6.00 6.00a | 5.10 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc stack | mspl13_c
	Last Modified: 15-JAN-1991
	
	The total amount of space that can be allocated for variables local to
	a function is 32K. Trying to allocate more than this will result in
	the following compiler error:
	
	   fatal error C1126: automatic allocation exceeds 32K

{% endraw %}
