---
layout: page
title: "Q141145: PRB: APPEND FROM to Logical Field Loads Literal t or y Values"
permalink: kb/141/Q141145/
---

## Q141145: PRB: APPEND FROM to Logical Field Loads Literal t or y Values

	Article: Q141145
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the the following command saves literal "t" and "y" values as false in a
	logical field:
	
	     APPEND FROM <textfile> TYPE DELIMITED
	
	CAUSE
	=====
	
	The APPEND FROM command does not recognize lowercase "t" or "y" as valid logical
	values.
	
	RESOLUTION
	==========
	
	Change the table structure of the logical field to a character field. After
	appending the records to the table, change the structure of the character field
	back to a logical field.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce & Resolve Behavior
	-------------------------------------
	
	The following program converts all the logical fields in a table to character
	fields. Records are appended to the table from a text file. All of the records
	in character field are converted to uppercase and switched back to logical field
	type.
	
	1. Create a new text file called Mytext.txt. There should be no spaces, tabs, or
	  periods on each line. Type the following exactly as shown:
	
	  " T
	  F
	  t
	  f
	  Y
	  y
	  N
	  n" (without the quotation marks)
	
	2. Open a program file and type the following lines of code into it:
	
	     CREATE TABLE TABLE1 (FIELD1 L)
	     DIMENSION laMyarray(fcount())
	     laMyarray=.F.
	     FOR lnI = 1 TO FCOUNT()
	        IF TYPE(FIELD(lnI)) = "L"
	           laMyarray(lnI)=.T.
	           lcFld=FIELD(lnI)
	           ALTER TABLE TABLE1 ALTER COLUMN &lcFld c(1)
	        ENDIF
	     ENDFOR
	     APPEND FROM mytext.txt TYPE DELIMITED
	     FOR lnI=1 to FCOUNT()
	        IF laMyarray(lnI)
	           lcFld=FIELD(lnI)
	           REPLACE ALL &lcFld WITH UPPER(&lcFld)
	           ALTER TABLE TABLE1 ALTER COLUMN &lcFld L
	        ENDIF
	     ENDFOR
	
	3. Save and close the program.
	
	4. In the Command window, type:
	
	     DO <Myprogram>
	     BROWSE
	
	  Notice that the logical fields now correctly display T or F.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
