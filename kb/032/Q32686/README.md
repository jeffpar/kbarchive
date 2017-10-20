---
layout: page
title: "Q32686: More Than 127 Segments Will Generate Bad Object Record"
permalink: /kb/032/Q32686/
---

## Q32686: More Than 127 Segments Will Generate Bad Object Record

{% raw %}

	Article: Q32686
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 15-JUL-1988
	
	When a macro assembler program has more than 127 segments and
	it is compiled with the /Zd switch, an invalid object module is
	produced. The object module contains an invalid LINUM record caused
	by the segment index field.
	   Microsoft has confirmed this to be a problem in Version 5.10. We
	are researching this problem and will post new information as it
	becomes available.

{% endraw %}
