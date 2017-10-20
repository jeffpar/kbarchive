---
layout: page
title: "Q37219: No Such Thing as a static auto Variable."
permalink: /kb/037/Q37219/
---

## Q37219: No Such Thing as a static auto Variable.

{% raw %}

	Article: Q37219
	Product(s): See article
	Version(s): 5.00 5.10 | 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QUICKC docerr | mspl13_c
	Last Modified: 21-NOV-1988
	
	Page 86 (section 4.6.2, third paragraph) of the "Microsoft QuickC and
	Optimizing C Language Reference" states "A static auto variable can
	be initialized..."
	
	However, the storage classes static and auto are mutually exclusive --
	there is no "static auto" class. The text should read, "A static OR
	auto variable can be initialized..."

{% endraw %}
