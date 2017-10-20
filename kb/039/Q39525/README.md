---
layout: page
title: "Q39525: ARPL (Protected Mode Only) Produces Incorrect Code"
permalink: /kb/039/Q39525/
---

## Q39525: ARPL (Protected Mode Only) Produces Incorrect Code

{% raw %}

	Article: Q39525
	Product(s): See article
	Version(s): 5.00   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 12-JAN-1989
	
	MASM Versions 5.10 and earlier have the register operands reversed for
	ARPL as follows:
	
	   ARPL AX, CX
	
	It should have an operand byte of C1 instead of C8.
	
	Microsoft has confirmed this to be a problem in Version 5.10. We are
	researching this problem and will post new information as it becomes
	available.
	
	The following code demonstrates this problem and should assemble to
	"63 C1":
	
	dosseg
	.model small
	.386p
	.code
	
	start:
	        ARPL AX, CX
	        end start
	
	.........................................................................
	       1                                dosseg
	       2                                .model small
	       3                                assume cs:@code,ds:@data,ss:@data
	       4                                .386p
	       5                                .code
	       6 0000                           _TEXT segment 'CODE'
	       7
	       8 0000                           start:
	       9 0000  63 C8                            ARPL AX, CX
	      10                                        end start
	      11 0002                           @CurSeg ends
	..........................................................................

{% endraw %}
