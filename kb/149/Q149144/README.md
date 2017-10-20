---
layout: page
title: "Q149144: BUG: Space or Tab Preceding !MS&#36;NOFREEFORM in Free-Form Source"
permalink: /kb/149/Q149144/
---

## Q149144: BUG: Space or Tab Preceding !MS&#36;NOFREEFORM in Free-Form Source

{% raw %}

	Article: Q149144
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Developer Studio editor, using the !ms$nofreeform metacommand with a
	space or tab preceding it in a free-form source code file does not cause the
	source code following the metacommand to be correctly colored as fixed form
	source code.
	
	RESOLUTION
	==========
	
	Remove the space or tab preceding the !ms$nofreeform metacommand.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create a free-form source file with an .f90 extension in the Developer Studio
	editor, and place the following sample code in it:
	
	  ! Compile options needed: none
	  ! required extension: .F90
	
	   !ms$nofreeform        ! Source code not fixed-form colored in editor
	        print *, 'in main'
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
