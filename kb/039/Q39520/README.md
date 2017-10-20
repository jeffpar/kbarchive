---
layout: page
title: "Q39520: Passing an Integer from C to MASM, Returning a Double"
permalink: /kb/039/Q39520/
---

## Q39520: Passing an Integer from C to MASM, Returning a Double

{% raw %}

	Article: Q39520
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following MASM program shows how to receive an integer from a C program,
	then pass the value back to the C program as a double. Note: This routine was
	composed for the large-memory model and assumes that a coprocessor exists on the
	system.
	
	MORE INFORMATION
	================
	
	Below is the C program that calls the MASM routine. It should be compiled for
	large-memory model and either 8087 or emulator-math library.
	
	Also shown is the MASM routine. The main piece to this program is the FILD
	instruction that transforms the integer to a floating-point real, then pushes
	the value on the co-processor stack. The other point is to obtain the segment
	and offset of the __fac variable. A value requiring more than 4 bytes cannot be
	stored in the DX and AX registers for return, so a double is returned by storing
	its address in DX:AX.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /AL /FPi87 (or /FPi)
	  */ 
	
	  #include <stdio.h>
	
	  extern double abc( int x );
	
	  void main()
	  {
	     int x;
	     double y;
	
	     x = 7;
	     y = abc( x );
	     printf( "%The value of y is %lf.\n", y );
	  }
	
	  ----------------------------------------------------------------------
	
	  ; Assemble options needed: /Mx
	
	          .MODEL LARGE,C    ; so Masm will use C naming conventions
	          .DATA
	          .CODE
	  EXTRN _fac:QWORD          ; __fac is the global variable used by C
	                            ; for storing floating point accumulations
	  PUBLIC  abc
	  abc     PROC    FAR
	          push    bp
	          mov     bp,sp
	          fild    WORD PTR [bp+6]
	          mov     dx,SEG _fac
	          mov     es,dx
	          fstp    QWORD PTR es:_fac  ; this pops the value off of
	          mov     ax,OFFSET _fac     ; the co-processor and puts it
	          fwait                      ; in __fac
	          mov     sp,bp
	          pop     bp
	          ret
	
	  abc     ENDP
	          END
	
	Program Output:
	
	The value of y is 7.000000.
	
	Additional query words: kbinf 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM600b
	Version           : :5.1,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
