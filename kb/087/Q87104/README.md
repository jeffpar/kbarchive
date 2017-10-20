---
layout: page
title: "Q87104: BUG: Repeated EQUIVALENCE's Cause GP Fault During Compile"
permalink: /kb/087/Q87104/
---

## Q87104: BUG: Repeated EQUIVALENCE's Cause GP Fault During Compile

{% raw %}

	Article: Q87104
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code compiled with Microsoft FORTRAN 5.1 that contains repeated EQUIVALENCE
	statements using the same variables may cause the compiler to generate a Trap D
	protection violation during pass two of the compile.
	
	The test case requires that the same variables be used in three different
	EQUIVALENCE statements effectively equivalencing three different arrays
	indirectly.
	
	RESOLUTION
	==========
	
	Simplify EQUIVALENCE statements to directly equivalence arrays instead if
	indirectly through equivalencing identical elements to the same separate
	variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN version 5.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code can be used to demonstrate the problem.
	
	Sample Code #1
	--------------
	
	The following code reproduces the problem:
	
	        CHARACTER*1 ASTDAT(70),HEDR01(70),HEDR07(70)
	
	        EQUIVALENCE (HEDR01(1),NUMRES), (HEDR01(3),CUSIS),
	       1        (HEDR01(11),CRADTS)
	
	        EQUIVALENCE (HEDR07(1),NUMRES), (HEDR07(3),CUSIS),
	       1        (HEDR07(11),PFDESS)
	
	        EQUIVALENCE (ASTDAT(1),NUMRES), (ASTDAT(3),CUSIS),
	       1        (ASTDAT(11),TICKES)
	
	        stop
	        end
	
	Sample Code #2
	--------------
	
	The following code illustrates the solution:
	
	          CHARACTER*1 ASTDAT(70),HEDR01(70),HEDR07(70)
	
	        EQUIVALENCE (ASTDAT(1),HEDR01(1),HEDR07(1),NUMRES)
	        EQUIVALENCE (HEDR01(3),CUSIS),
	       1            (HEDR01(11),CRADTS,PFDESS,TICKES)
	        stop
	        end
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
