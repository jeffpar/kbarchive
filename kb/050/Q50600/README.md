---
layout: page
title: "Q50600: Graphics Routines Available in OS/2 with GRTEXTP Library"
permalink: /kb/050/Q50600/
---

## Q50600: Graphics Routines Available in OS/2 with GRTEXTP Library

	Article: Q50600
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FORTRAN includes GRAPHICS.LIB, a run-time library that supports a
	number of graphics functions in the MS-DOS environment. The OS/2 graphics
	library, GRTEXTP.LIB, supports the subset of the graphics functions that perform
	text graphics. The text below lists the functions that GRTEXTP.LIB supports:
	
	  clearscreen        getvideoconfig    settextposition
	  displaycursor      getvisualpage     settextrows
	  getactivepage      outtext           settextwindow
	  getbkcolor         setactivepage     setvideomode
	  gettextcolor       setbkcolor        setvideomoderows
	  gettextcursor      settextcolor      setvisualpage
	  gettextposition    settextcursor     wrapon
	
	To use graphics in an application designed to run with OS/2, link the GRTEXTP.LIB
	library instead of GRAPHICS.LIB. Functions not included in the list above are
	not available in OS/2.
	
	To perform additional graphics operations in an application developed for the
	OS/2 operating system, use the functions of the OS/2 Presentation Manager.
	
	For more information, see the Microsoft FORTRAN "Advanced Topics" manual. For
	FORTRAN version 5.1, see page 190 and for FORTRAN version 5.0, see page 148.
	
	Additional query words: kbinf 5.00 nofps 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	
	=============================================================================
	
