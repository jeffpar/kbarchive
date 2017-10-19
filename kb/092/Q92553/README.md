---
layout: page
title: "Q92553: Creating a Combined Ascending and Descending Index"
permalink: /kb/092/Q92553/
---

## Q92553: Creating a Combined Ascending and Descending Index

	Article: Q92553
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, indexes are created in ascending order (for example, alphabetically
	from A to Z, or by date, from January to December). Indexes can also be created
	in reverse or descending order (for example, alphabetically from Z to A, or by
	date, from December to January).
	
	The character field example below demonstrates how to create an index on the
	concatenation of two fields, where the first field is indexed in ascending order
	and the second field is indexed in descending order. These techniques also apply
	to more than two fields.
	
	MORE INFORMATION
	================
	
	To create an index on the concatenation of two fields (as described above), do
	the following:
	
	1. Create the MCOMP.PRG file to contain the following code. MCOMP creates a 255
	  character string that contains the characters in descending order. For
	  example:
	
	        PRIVATE char, mdescend
	        char = 255
	        mdescend = ""
	        DO WHILE char >= 1
	           mdescend = mdescend + CHR(char)
	           char = char - 1
	        ENDDO
	        RETURN mdescend
	
	  NOTE: The MCOMP.PRG file must be present on the system unless you delete the
	  index created in this procedure.
	
	2. Assign the results of the MCOMP program to a variable, as follows:
	
	  mdesc_ord = mcomp()
	
	  NOTE: You must create this variable each time you use the descending index.
	  Otherwise, FoxPro returns a "Variable not found" error.
	
	3. Create the index using the first field, the results of a SYS(15) function,
	  the variable, and the second field.
	
	  For example, if the mdesc_ord variable is set as indicated in step 2 above,
	  FNAME is the first field to be indexed in ascending order, LNAME is the
	  second field to be indexed in descending (reverse) order, and INDEXNAME is
	  the name of the index, you can create the index using the following code:
	
	        INDEX ON fname + SYS(15, mdesc_ord, lname) TO file
	
	  The SYS(15, <expC1>, <expC2>) function translates each character
	  of the string <expC2> according to the string in <expC1>.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE210DOS kbFoxBASESearch kbVFP300
	Version           : MS-DOS:1.02,2.0,2.1,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
