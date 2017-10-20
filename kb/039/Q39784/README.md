---
layout: page
title: "Q39784: &quot;D&quot; Incorrectly Defined as a printf/scanf Format Specifier"
permalink: /kb/039/Q39784/
---

## Q39784: &quot;D&quot; Incorrectly Defined as a printf/scanf Format Specifier

{% raw %}

	Article: Q39784
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 29-DEC-1988
	
	On Page 80 of the "Microsoft C 5.1 (and 5.0) Quick Reference Guide"
	(spiral bound), the capital letter "D" is incorrectly defined as a
	printf/scanf format specifier representing a signed long-decimal
	integer. The printf/scanf format specifier for a long-decimal integer
	is "ld". Using %D will print/return garbage characters.

{% endraw %}
