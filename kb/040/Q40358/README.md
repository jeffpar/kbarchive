---
layout: page
title: "Q40358: Bit-Shift Function in C"
permalink: /kb/040/Q40358/
---

## Q40358: Bit-Shift Function in C

	Article: Q40358
	Product(s): See article
	Version(s): 5.10    | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 16-MAY-1989
	
	Question:
	
	How do I rotate, rather than shift, bits in a word? I don't want to
	lose any bits as happens when I shift.
	
	Response:
	
	Use the _rotl and _rotr functions in the C Runtime Library. These
	are described in the "Microsoft C Run-Time Library Reference."
