---
layout: page
title: "Q104901: BUG: Anti-Virus TSRs May Prevent Builds from VWB"
permalink: /kb/104/Q104901/
---

## Q104901: BUG: Anti-Virus TSRs May Prevent Builds from VWB

	Article: Q104901
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench (VWB) may hang during the link phase of a build if any
	active anti-virus protection terminate-and-stay resident (TSR) program is
	enabled.
	
	CAUSE
	=====
	
	Central Point anti-virus (CPAV) and many others provide active anti-virus
	protection that traps all attempts to modify an executable. The program then
	asks the user for confirmation before allowing the modification to proceed, and
	nothing else can happen until the request is either granted or denied. In the
	Visual Workbench, this request is made in a wintee window, and the user has no
	way to answer it if that window is invisible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	versions 1.0 and 1.0a.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	RESOLUTION
	==========
	
	The request for confirmation from the anti-virus software can be seen if wintee
	is made visible when the Visual Workbench is started. Add the /v option to the
	command line in the Program Item Properties for the Visual Workbench icon to
	make wintee visible. This also helps in diagnosing other VWB related problems.
	
	Turning off all the active anti-virus protection software when building programs
	is another solution.
	
	Additional query words: 1.00 1.00a MSAV nofpsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
