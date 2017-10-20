---
layout: page
title: "Q39309: Example of C Calling a MASM Procedure"
permalink: /kb/039/Q39309/
---

## Q39309: Example of C Calling a MASM Procedure

{% raw %}

	Article: Q39309
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | h_masm | mspl13_c
	Last Modified: 29-DEC-1988
	
	The sample code below demonstrates a C program calling a MASM
	procedure. The C code declares an integer and passes the integer to
	the MASM procedure called mixed(). The mixed() function has an integer
	return value. The C code is compiled in the large-memory model and the
	MASM code is assembled with the /ML option.
	
	The following is the code:
	
	#include <stdio.h>
	
	int retval, value, foo;
	extern int mixed(int);
	
	main() {
	    value = 35;
	    foo = 25;
	    retval = 0;
	    retval = mixed(foo);
	    printf("%d\n%d\n",retval,value);
	    }
	
	      DOSSEG
	      .MODEL LARGE C
	      .STACK  100h
	      .DATA
	        Dw 0
	      .FARDATA
	        EXTRN _value:WORD
	      .CODE
	        PUBLIC _mixed
	_mixed PROC
	         push  bp
	         mov   bp,sp
	; access and change _value
	         mov   ax, seg _DATA
	         mov   ds,ax
	         mov   ax,SEG _value
	         mov   es,ax
	         mov   es:_value,10h
	; return the passed variable
	         mov   ax,[bp+6]
	         pop   bp
	         ret
	_mixed   ENDP
	         END

{% endraw %}
