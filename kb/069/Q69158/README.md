---
layout: page
title: "Q69158: ISAMCVT Doesn't Properly Convert db/LIB Date Fields"
permalink: kb/069/Q69158/
---

## Q69158: ISAMCVT Doesn't Properly Convert db/LIB Date Fields

	Article: Q69158
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,7.0,7.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	- Microsoft Basic Professional Development System (PDS) for MS-DOS and MS OS/2, versions 7.0, 7.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pages 148-149 of the "Microsoft Visual Basic for MS-DOS: Professional Edition
	Features" manual states that the ISAMCVT utility will convert db/LIB date fields
	to Basic double-precision numbers for use with the Date/Time add-on libraries.
	This information is also listed on Page 393 of the "Microsoft Basic 7.0:
	Programmer's Guide" (for versions 7.0 and 7.1).
	
	ISAMCVT does convert a date field to a double-precision number, but the resulting
	number is not a serial number that can be used with the date libraries included
	with Visual Basic for MS-DOS, or Basic PDS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the ISAMCVT.EXE utility for the
	Professional Edition of Microsoft Visual Basic for MS-DOS, version 1.0, and for
	Microsoft Basic Professional Development System (PDS) for MS-DOS, versions 7.0
	(buglist7.00) and 7.1 (buglist7.10). We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	When ISAMCVT converts a date field, it converts it to a 8-byte string, but tags
	it internally as a double. To see the string, you must use the MKD$ function to
	convert the double to a string.
	
	However, ISAMCVT also converts the year portion of the date incorrectly by
	dropping the last two digits (for example, 1990 becomes 19, and 1890 becomes
	18.)
	
	For example, if you have a db/LIB file ("test.dbf") containing three fields and
	one record
	
	  NUMERIC (length=4, # decimals=1) = 1.2
	  CHARACTER (length = 50) = My Name
	  DATE = 19901214
	
	and you convert it using the following command:
	
	  " ISAMCVT /D test.dbf table test.mdb " (without the quotation marks)
	
	The program listed below will then show that the ISAM file contains the
	following:
	
	  CustNum = 1.2
	  Name = My Name
	  Date = 12/14/19
	
	Code Sample
	-----------
	
	NOTE: PROISAM.EXE must be loaded before running this program inside of VBDOS.EXE
	or QBX.EXE.
	
	  ' To try this example in VBDOS.EXE:
	  ' 1. From the File menu, choose New Project.
	  ' 2. Copy the code example to the Code window.
	  ' 3. Press F5 to run the program.
	  TYPE rectype
	      CustNum AS DOUBLE
	      Name AS STRING * 50
	      Date AS DOUBLE
	  END TYPE
	  DIM a AS rectype
	  OPEN "test.mdb" FOR ISAM rectype "table" AS #1
	  SETINDEX #1, ""
	  MOVEFIRST #1
	  RETRIEVE #1, a
	  PRINT a.CustNum
	  PRINT a.Name
	  PRINT MKD$(a.Date)
	  CLOSE #1
	
	Additional query words: VBmsdos BasicCom SR# S910116-88 buglist1.00 1.00 7.00 7.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbBASICSearch kbZNotKeyword3 kbBASICPDS700DOS kbBASICPDS710DOS kbBASICPDS700OS2 kbBASICPDS710OS2 kbVB100DOS
	Version           : :1.0,7.0,7.1
	
	=============================================================================
	
