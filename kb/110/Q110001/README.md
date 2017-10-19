---
layout: page
title: "Q110001: BUG: WRITE Statement Not Shifting Window Focus"
permalink: /kb/110/Q110001/
---

## Q110001: BUG: WRITE Statement Not Shifting Window Focus

	Article: Q110001
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a FORTRAN PowerStation QuickWin application, if a WRITE statement outputs to
	a child window that does not have the focus but that has IOFOCUS set to .TRUE.,
	then that window is not given the focus.
	
	CAUSE
	=====
	
	The READ/WRITE routines in the standard FORTRAN libraries are supposed to give
	the graphics and the Windows focus to a child window during I/O if its IOFOCUS
	is TRUE. Instead, the READ/WRITE routines are giving the focus only to the
	graphics focus.
	
	RESOLUTION
	==========
	
	Switch focus to a particular child window by explicitly calling FocusQQ.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code reproduces the problem (the last write fails to bring Unit 1
	to the foreground):
	
	Sample Code
	-----------
	
	  C Compile options needed: -MW
	  C
	        include 'flib.fi'
	        include 'fgraph.fi'
	        include 'flib.fd'
	        include 'fgraph.fd'
	
	        integer*2 grstat
	        call outtext('This is the default (*) window\n'c)
	        open (1,file='USER')
	        call outtext('This should be in Unit 1\n'c)
	        grstat=incharqq()
	
	        write (*,*) 'This should NOT bring the * unit to the '
	       +   //'foreground.'
	        call outtext('This should still be in Unit 1.\n'c)
	        grstat=incharqq()
	
	        open (2,file='USER')
	        call outtext('This should be in Unit 2\n'c)
	        grstat=incharqq()
	
	        write (1,*) 'This should have brought Unit 1 to the '
	       +   //'foreground.'
	        call outtext('This should be in Unit 1.\n'c)
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
