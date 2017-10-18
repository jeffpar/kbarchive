---
layout: page
title: "Q170128: HOWTO: Programmatically Create Large Tables for Testing Purposes"
permalink: kb/170/Q170128/
---

## Q170128: HOWTO: Programmatically Create Large Tables for Testing Purposes

	Article: Q170128
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This code can be used as an example of how to create a large sample table to
	test your programs. It is very basic and must be modified to meet your specific
	design needs.
	
	MORE INFORMATION
	================
	
	Create a program Lartable.prg and add the following sample code to create a
	table containing any number of records. For this example, the program creates a
	table containing 120 records. Remember not to allow the program to overwrite any
	tables that have valid data.
	
	     *Environment area.
	     CLEAR
	     CLOSE ALL
	
	     * Create a table by substituting your table, field names, and data
	     * types.
	
	     CREATE TABLE LarTable (CharVal C(20), NumVal N(9.2), DateVal D)
	     USE LarTable.DBF
	
	     * m.NumRecord = the number of record you want to create in your table.
	     * NOTE: The time that it takes to create a table will depend upon
	     *       the size of the table and the availability of system
	     *       resources.
	
	     ******************
	     m.NumRecord = 120
	     ******************
	
	     m.NumWide = LEN(ALLTRIM(STR(m.NumRecord)))
	     * Variable seed for DateVal date field.
	
	     m.dateval = DATE()
	
	     * For loop to fill the table with a Character, Number, and Date
	     * fields substitute your field names.
	
	     FOR m.CurRecord  = 1 TO m.NumRecord
	        INSERT INTO lartable (NumVal, CharVal, DateVal) ;
	        VALUES ( RECCOUNT()+1, ;
	        "Record " + PADL(ALLTRIM(STR(RECCouNt()+1, m.NumWide, 0)), ;
	         m.NumWide, "0"), m.DateVal + m.CurRecord)
	        ? RECNO()
	     NEXT
	     BROWSE
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Mike Fernald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
