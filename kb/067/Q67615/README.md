---
layout: page
title: "Q67615: FIX: Protection Violation When Structure Element Used in OPEN"
permalink: /kb/067/Q67615/
---

## Q67615: FIX: Protection Violation When Structure Element Used in OPEN

{% raw %}

	Article: Q67615
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and the compiler generates a
	protection violation.
	
	CAUSE
	=====
	
	The application uses an element of a structure as the filename in an OPEN
	statement.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following two steps:
	
	- Modify the source code to assign the value of the structure member to a
	  temporary variable and specify the variable in the OPEN statement.
	
	- Compile the application in MS-DOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the FORTRAN version 5.0 for
	MS-DOS and OS/2. This problem was corrected in FORTRAN version 5.1 for MS-DOS
	and OS/2.
	
	MORE INFORMATION
	================
	
	The code example below demonstrates this problem.
	
	Sample Code #1
	--------------
	
	  C Compile options needed: None
	
	        PROGRAM TEST
	        STRUCTURE /IO/ 
	          CHARACTER*12 NAME
	        END STRUCTURE
	        RECORD /IO/ IOINST
	        IOINST.NAME = 'TEST.DAT'
	        OPEN (10, FILE = IOINST.NAME)
	        END
	
	The code example below alleviates this problem by using the temporary variable
	TMP to hold the filename.
	
	Sample Code #2
	--------------
	
	  C Compile options needed: None
	
	        PROGRAM TEST
	        STRUCTURE /IO/ 
	          CHARACTER*12 NAME
	        END STRUCTURE
	        CHARACTER*12 TMP
	        RECORD /IO/ IOINST
	        IOINST.NAME = 'TEST.DAT'
	        TMP = IOINST.NAME
	        OPEN (10, FILE = TMP)
	        END
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
