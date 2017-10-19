---
layout: page
title: "Q34170: C4040 Occurs on Declaration of Huge Array"
permalink: /kb/034/Q34170/
---

## Q34170: C4040 Occurs on Declaration of Huge Array

	Article: Q34170
	Product(s): See article
	Version(s): 4.00 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | 5.10
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 17-AUG-1988
	
	The compiler warning "C4040 near/far/huge on identifier ignored"
	occurs on the declaration of a huge array if the array is not
	declared globally or statically. A huge or far array only can be
	declared at the global (or static) level because local (auto)
	variables are allocated on the stack and cannot be far or huge.
	   To ensure that your arrays are allocated as huge or far arrays,
	declare them at the global level or declare them with the static
	storage class.
