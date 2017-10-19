---
layout: page
title: "Q118815: BUG: M6101 Drawing a Line Outside Screen Coordinates"
permalink: /kb/118/Q118815/
---

## Q118815: BUG: M6101 Drawing a Line Outside Screen Coordinates

	Article: Q118815
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
	
	When a program draws a line with an endpoint outside the screen coordinates, the
	line is not clipped and the following error message is generated:
	
	  run-time error M6101: MATH
	  - floating-point error: invalid
	
	CAUSE
	=====
	
	The limit seems to be related to converting to an int. In the sample code below,
	the extent of X in the window coordinates is 1.0, the screen coordinate is 639,
	and the line is drawn to 51.28. For example:
	
	     639 * 51.28 / 1.0 = 32,767.92 > 32,767
	
	In the preceding example, a line drawn to 51.27 succeeds (639 * 51.27 / 1.0 =
	32,761.53 < 32,767).
	
	RESOLUTION
	==========
	
	Do not draw outside the screen coordinates. Clip the endpoints of lines before
	calling the LINETO_W routine. If you clip to values within 10 times the size of
	the window, the code should work in any resolution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with Microsoft FORTRAN PowerStation for
	MS-DOS, versions 1.0 and 1.0a.
	
	MORE INFORMATION
	================
	
	To demonstrate this problem, compile the following sample code and run it from a
	full-screen MS-DOS prompt in Windows (not Windows NT) or directly from MS-DOS.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	        INCLUDE  'FGRAPH.FI'
	        INCLUDE  'FGRAPH.FD'
	        INTEGER*2 status
	        status = SETVIDEOMODE( $VRES16COLOR )
	        status = setwindow(.TRUE.,0D0,1.D0,1.D0,0.D0 )
	        status = LINETO_W( 51.28d0, 0.0d0 )
	        status = SETVIDEOMODE( $DEFAULTMODE )
	        END
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
