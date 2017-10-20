---
layout: page
title: "Q148625: BUG: NAMELIST Output Incorrect with Renamed USE Variables"
permalink: /kb/148/Q148625/
---

## Q148625: BUG: NAMELIST Output Incorrect with Renamed USE Variables

{% raw %}

	Article: Q148625
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you rename a module's NAMELIST group name and its object variables with the
	USE statement and perform a WRITE of the NAMELIST, the original module NAMELIST
	names are written instead of their aliases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the output of the following sample code, the NAMELIST group name "&N" and
	its object variable "J" are written to both the display and to the Namelist.fil
	file when their aliases "&NN" and "JJ" should have been written.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  C Compile options needed: none
	
	        MODULE M
	          NAMELIST /N/ I, J
	        END MODULE
	
	        PROGRAM NAME_LIST
	          USE M , NN => N, JJ => J
	          I = 1
	          JJ = 2
	          OPEN(UNIT=10,FILE="NAMELST.FIL",DELIM="APOSTROPHE")
	          WRITE(10, NML=NN)
	          REWIND 10
	          READ(10,NN)
	          WRITE(*,*) 'Got: '
	          WRITE(*,NN)
	          WRITE(*,'(" Expected:   ",A)') " &NN  I = 1, JJ = 2 /"
	        END PROGRAM NAME_LIST
	
	Output
	------
	
	Got:
	&N
	I =            1
	J =            2
	/ 
	Expected:    &NN  I = 1, JJ = 2 / 
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
