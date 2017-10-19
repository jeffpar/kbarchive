---
layout: page
title: "Q149609: How to Search for Duplicate Character Strings"
permalink: /kb/149/Q149609/
---

## Q149609: How to Search for Duplicate Character Strings

	Article: Q149609
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to search for duplicate character strings by
	using macro substitution to examine each field of each record. When found, the
	duplicate character string, the field name containing the string, and the
	corresponding record number are displayed on the FoxPro desktop. This code can
	be modified to search for as many character strings as needed.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a free table called Names that contains six fields of Character type
	  with a width of 10. Name the fields field1, field2, field3, field4, field5,
	  and field6.
	
	2. Load 10 records. Populate some fields with the name SMITH and the rest with
	  names of your choice. Make certain that in some records SMITH appears in more
	  than one field.
	
	3. Create a program and insert the following code:
	
	     CLOSE DATABASES
	     CLEAR
	     USE names
	     SCAN                            && Search through each record
	       FOR i = 1 TO FCOUNT()         &&Search through each field
	           x = FIELD(i)              && Assign the field name to a variable
	           IF UPPER(&;x) = "SMITH"
	             ? &x + "   " + FIELD(i) + "   " + "Record # " ;
	                + LTRIM(STR(RECNO()))
	           ENDIF                     && Insert needed IF ENDIF statements
	           NEXT i
	       ENDFOR
	     ENDSCAN
	
	4. Run the program, and notice that the information that is displayed on the
	  FoxPro desktop.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
