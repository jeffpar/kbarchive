---
layout: page
title: "Q104053: Difference Between COPY TO ARRAY and SELECT INTO ARRAY"
permalink: kb/104/Q104053/
---

## Q104053: Difference Between COPY TO ARRAY and SELECT INTO ARRAY

	Article: Q104053
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once an array has been created with the COPY TO ARRAY command, the array length
	remains constant even when a subsequent COPY TO ARRAY command is issued.
	However, the SQL SELECT INTO ARRAY command creates a new array each time it is
	issued.
	
	MORE INFORMATION
	================
	
	The following steps illustrate this behavior using the FoxPro 2.x CUSTOMER
	table:
	
	1. In the Command window, issue the following commands:
	
	  SET DEFAULT TO <path to FoxPro TUTORIAL directory>
	  USE customer
	
	2. Open the Debug window, and type "ALEN(arr)" (without the quotation marks).
	  Observe the value displayed after issuing each of the following commands:
	
	        COPY TO ARRAY arr FIELDS state FOR state = "CA"
	        * arr has 123 elements, all of which are "CA".
	
	        COPY TO ARRAY arr FIELDS state FOR state = "AK"
	        * arr still has 123 elements, but issuing the command
	        * DISPLAYMEMORY LIKE arr will show that only the first
	        * element of arr is "AK"; the rest are "CA".
	
	  NOTE: If the second COPY TO ARRAY command returns a smaller number of elements
	  than those existing in the array, only that number of elements will be
	  overwritten; the others will retain their former value.
	
	  If the second COPY TO ARRAY command returns a larger number of elements than
	  those existing in the array, the result set will be truncated to the number
	  of elements in the array.
	
	  To obtain correct results, you must use the RELEASE command to release the
	  array between consecutive COPY TO ARRAY commands.
	
	3. Observe the value of ALEN(arr) after issuing the following commands:
	
	        SELECT cno FROM customer INTO array arr WHERE state = "CA"
	        * arr now has 123 elements, all of which are "CA".
	
	        SELECT cno FROM customer INTO ARRAY arr WHERE cno = "AK"
	        * ALEN(arr) =1; the value is "AK".
	
	REFERENCES
	==========
	
	"Commands & Functions," version 2.0, COPY TO ARRAY and SELECT - SQL
	"Language Reference," version 2.5, pages L3-317 and L3-862
	
	Additional query words: VFoxWin FoxDos FoxWin dimension declare
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
