---
layout: page
title: "Q110087: BUG: SAVEIMAGE May Cause Error DX1020 in SVGA Display Modes"
permalink: /kb/110/Q110087/
---

## Q110087: BUG: SAVEIMAGE May Cause Error DX1020 in SVGA Display Modes

{% raw %}

	Article: Q110087
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SAVEIMAGE function in a high resolution Super VGA mode may produce the
	following error during program execution:
	
	  DOSXMSF : fatal error DX1020: unhandled exception: General protection fault;
	
	CAUSE
	=====
	
	The error occurs when attempting to save regions close to the entire size of the
	display. The exact region that causes the GP fault varies according to the
	display adapter used.
	
	RESOLUTION
	==========
	
	Select smaller regions of the display to save as Windows .BMP files. For
	example, an entire screen could be stored in two .BMP files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-
	DOS.
	
	This problem does not occur on FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Compile and run the sample code on a PC with an ATI Graphics Ultra to generate
	the following error on the second call to SAVEIMAGE:
	
	Sample Code
	-----------
	
	  Compile options needed: none
	        include 'fgraph.fi'
	        include 'fgraph.fd'
	
	        i= setvideomode($XRES16COLOR)
	        i= saveimage('savimag1.bmp',0,0,1023,510)
	        i= saveimage('savimag2.bmp',0,0,1023,511)
	        end
	
	Additional query words: nofpsnt 1.00 gpf gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
