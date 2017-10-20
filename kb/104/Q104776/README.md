---
layout: page
title: "Q104776: BUG: Endless Loop in Code Containing Graphics &amp; Compiled -Ox"
permalink: /kb/104/Q104776/
---

## Q104776: BUG: Endless Loop in Code Containing Graphics &amp; Compiled -Ox

{% raw %}

	Article: Q104776
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program may execute in an infinite loop if it was compiled with full
	optimization (-Ox) and contains a do loop calling some of the graphics routines
	[such as POLYGON_W()].
	
	CAUSE
	=====
	
	Some of the graphics functions (such as POLYGON_W) prevent optimized code from
	recognizing the end condition for the loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0 and 1.0a.
	
	This problems does not apply to FORTRAN PowerStation 32.
	
	RESOLUTION
	==========
	
	Compile the program with no optimization (this is the default).
	
	Sample Code
	-----------
	
	  c Compile options needed:    -Ox
	  c The following program will output in an infinite loop:
	
	        include 'fgraph.fi'
	        include 'fgraph.fd'
	        INTEGER*2  status, npts
	
	        RECORD     / wxycoord /  wxyarr(3)
	
	        status = setvideomode(18)
	        do it=1,2
	           write (*,'(i4\)') it
	           wxyarr(1).wx = 43.d0
	           wxyarr(1).wy = 85.d0
	           wxyarr(2).wx = 50.d0
	           wxyarr(2).wy = 71.d0
	           wxyarr(3).wx = 45.d0
	           wxyarr(3).wy = 85.d0
	           npts = 3
	           status = POLYGON_W($GBORDER, wxyarr, npts)
	        enddo
	        END
	
	Additional query words: nofpsnt 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
