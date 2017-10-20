---
layout: page
title: "Q149508: PRB: SETTEXTPOSITION() Does Not Scroll Window to New Location"
permalink: /kb/149/Q149508/
---

## Q149508: PRB: SETTEXTPOSITION() Does Not Scroll Window to New Location

{% raw %}

	Article: Q149508
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SETTEXTPOSITION() graphics subroutine to move the cursor to a new
	location outside the current client view area in a QuickWin program does not
	cause the client view area to move to this new location, so it is not made
	visible.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the following sample code, the call to the SETTEXTPOSITION() subroutine moves
	the cursor to a location outside of the current client view, but the window is
	not scrolled to the new location. Consequently the cursor is not visible, and
	the user cannot see the text specified in the call to OUTTEXT.
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW
	
	        include 'flib.fi'
	        include 'fgraph.fi'
	
	        implicit none
	
	        include 'flib.fd'
	        include 'fgraph.fd'
	
	        integer*2 i
	        record /rccoord/ rc
	
	        print *,"Please size the child window so that the last line"
	        print *,"   is not visible, then press a key..."
	        i=incharqq()
	        call settextposition(30,1,rc)
	        call outtext('Enter an integer*2 value : ')
	        read (*,*) i
	
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
