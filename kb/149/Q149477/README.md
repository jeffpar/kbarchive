---
layout: page
title: "Q149477: BUG: Run-Time Error F6511 - Variable Name Not Found"
permalink: /kb/149/Q149477/
---

## Q149477: BUG: Run-Time Error F6511 - Variable Name Not Found

{% raw %}

	Article: Q149477
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When reading a file using namelist directed input, you may get the following
	error:
	
	  run-time error F6511
	  - variable name not found
	
	CAUSE
	=====
	
	The file wasn't opened with the DELIM="{QUOTE|APOSTROPHE}" option in the Fortran
	OPEN statement used to open the file for writing.
	
	Microsoft Fortran PowerStation 4.0 requires the DELIM="{QUOTE|APOSTROPHE}" option
	if you are opening a file that is to be written with delimiters. However, when
	opening and using the file for a namelist directed I/O operation, the DELIM=
	option is not needed. Previous versions of Fortran did not include this option
	and character variables were always written with delimiting apostrophe's.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  ! Compile options needed: none
	
	        PROGRAM ChangeInBehavior
	
	        CHARACTER*20 CHA
	        INTEGER IA
	        REAL RA
	
	        DATA CHA /'Character A'/ 
	        DATA IA /1000/ 
	        DATA RA /100.0/ 
	
	        NAMELIST /TheNameList/ CHA,IA,RA
	
	  !     Uncomment the following line to get proper behavior
	  !      OPEN(UNIT=1,FILE='TEMP.DAT',STATUS='UNKNOWN',DELIM='APOSTROPHE')
	
	  !     Comment out the following line to get proper behavior
	        OPEN( UNIT=1, FILE='TEMP.DAT', STATUS='UNKNOWN')
	
	        WRITE ( 1, TheNameList )
	        CLOSE( 1 )
	
	        OPEN( UNIT=1, FILE='TEMP.DAT', STATUS='UNKNOWN' )
	
	        READ( 1, TheNameList )
	        CLOSE ( 1 )
	
	        WRITE ( *, TheNameList )
	
	        END
	
	REFERENCES
	==========
	
	Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0, FPS
	4.0 Books Online.
	
	Additional query words: 4.00 kbinf
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
