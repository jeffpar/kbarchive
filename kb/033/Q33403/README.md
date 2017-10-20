---
layout: page
title: "Q33403: Using 43-Line Mode with Hercules Card"
permalink: /kb/033/Q33403/
---

## Q33403: Using 43-Line Mode with Hercules Card

{% raw %}

	Article: Q33403
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# G880721-1772 | mspl13_c
	Last Modified: 27-JUL-1988
	
	Currently, only 82x55 mode is supported for the Hercules card. It
	is possible to switch to 43-line mode if you first do a
	_setvideomode(_DEFAULTMODE), then immediately do a
	_setvideomode(_ERESCOLOR).

{% endraw %}
