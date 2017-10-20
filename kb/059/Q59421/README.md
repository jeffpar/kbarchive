---
layout: page
title: "Q59421: PRB: L2029: Unresolved External &#95;&#95;_aDBswpchk with GRAPHICS.LIB"
permalink: /kb/059/Q59421/
---

## Q59421: PRB: L2029: Unresolved External &#95;&#95;_aDBswpchk with GRAPHICS.LIB

{% raw %}

	Article: Q59421
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Linking with GRAPHICS.LIB in OS/2 may give the following error message:
	
	  d:\lib\GRAPHICS.LIB(..\gr\qeswap.asm) : error L2029 :
	  '___aDBswpchk' : unresolved external
	
	CAUSE
	=====
	
	This is because GRAPHICS.LIB is designed for MS-DOS and is being linked with a
	protected-mode FORTRAN library, which does not include the external references
	required by GRAPHICS.LIB.
	
	RESOLUTION
	==========
	
	Link with the real-mode library to correct the problem.
	
	MORE INFORMATION
	================
	
	For example, the following sample programs included with FORTRAN produce this
	error if linked under OS/2:
	
	  MAGNIFY.FOR
	  COLOR.FOR
	  TEXT.FOR
	  ANIMATE.FOR
	  EGA.FOR
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	
	=============================================================================
	

{% endraw %}
