---
layout: page
title: "Q148609: BUG: GO TO Statement Syntax Coloring Fails in Developer Studio"
permalink: /kb/148/Q148609/
---

## Q148609: BUG: GO TO Statement Syntax Coloring Fails in Developer Studio

{% raw %}

	Article: Q148609
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Developer Studio, syntax coloring of the FORTRAN statement GO TO fails when a
	space separates the syllables GO and TO.
	
	RESOLUTION
	==========
	
	Use the GOTO statement as a single word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The FORTRAN standard allows the GOTO statement to be represented as either GOTO
	or GO TO; both statements are treated the same.
	
	To illustrate the problem, copy the following source code into a text file in
	Developer Studio. Save the text file using the .for source file extension. All
	FORTRAN keywords are syntax colored except for the GO TO statement.
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        PARAMETER (LIMIT = 20)
	        INTEGER SUM
	
	  10    IF(SUM .LE. LIMIT) THEN
	          SUM = SUM + 1
	        GO TO 10      ! GO TO statement will not be syntax colored
	        END IF
	
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
