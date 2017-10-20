---
layout: page
title: "Q34371: STOS Instruction Must Have String Pointed to ES:DI"
permalink: /kb/034/Q34371/
---

## Q34371: STOS Instruction Must Have String Pointed to ES:DI

{% raw %}

	Article: Q34371
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The STOS instruction must have the string pointed to by ES:DI. The
	following command will not generate a warning that an attempt to
	override the DI register was made even though it will continue to
	expect the string to be pointed to by ES:DI:
	
	   STOS  WORD PTR ES:[SI]

{% endraw %}
