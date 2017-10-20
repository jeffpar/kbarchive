---
layout: page
title: "Q61190: C 6.00 README: Arithmetic Operations on Signed Short Values"
permalink: /kb/061/Q61190/
---

## Q61190: C 6.00 README: Arithmetic Operations on Signed Short Values

{% raw %}

	Article: Q61190
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 6-NOV-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	Arithmetic Operations on Signed Short Values
	--------------------------------------------
	
	In C 5.10 and Microsoft QuickC(R) 2.00, arithmetic on constants of
	type signed short is done using a signed long value. C 6.00 conforms
	to the ANSI specification by performing arithmetic operations on
	signed shorts and yielding a signed short value.
	
	This causes overflow in some instances of constant arithmetic, most
	noticeably, multiplication. For example, when interpreted as a signed
	short, 48*1000 results in a value of -15232 rather than 48000.

{% endraw %}
