---
layout: page
title: "Q177304: HOWTO: Programmatically Copy the Current Record to a New Record"
permalink: /kb/177/Q177304/
---

## Q177304: HOWTO: Programmatically Copy the Current Record to a New Record

	Article: Q177304
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to programmatically copy the contents of a selected
	record into a new record in the same table.
	
	MORE INFORMATION
	================
	
	The following code may be used in either a program (.prg) file or interactively
	in the FoxPro Command window.
	
	NOTE: The code in Step 1 creates a new table used to provide sample data for the
	rest of the steps that illustrate how to copy an existing record. However, any
	table may be used provided that a duplicate record may be added and no index
	primary key is violated. Primary key indexes are only available in versions of
	Visual FoxPro.
	
	1. Copy the following code to a test program and run it to create Testcopy.dbf
	  that contains five sample records:
	
	        ***** Table setup for TEST of record copy *****
	        CREATE TABLE 'testcopy.dbf' ;
	        (FNAME C(12), LNAME C(10), SEQUENCE I(2))
	
	        ***** Add five records for testing *****
	        INSERT INTO testcopy (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('Rutherford B.', 'Hayes', 19)
	        INSERT INTO testcopy (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('James A.', 'Garfield', 20)
	        INSERT INTO testcopy (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('Chester A.', 'Arthur', 21)
	        INSERT INTO testcopy (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('Grover', 'Cleveland', 22)
	        INSERT INTO testcopy (FNAME, LNAME, SEQUENCE) ;
	        VALUES ('Benjamin', 'Harrison', 23)
	
	2. This step shows one way that may be used to locate the record to copy.
	
	        LOCATE FOR sequence = 22
	
	3. The following code copies and creates a duplicate record.
	
	  NOTE: The MEMO clause used below is needed only if there is a memo field. The
	  contents of a General field will not be copied.
	
	        SCATTER MEMVAR MEMO   && Copies contents of current record to memory.
	        APPEND BLANK          && Creates a new blank record.
	        GATHER MEMVAR MEMO    && Copies contents from memory to new record.
	
	4. BROWSE the table to view the records. Note that record number 6 is a
	  duplicate of record number 4.
	
	REFERENCES
	==========
	
	For information about copying a general field, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q113443 How to Copy a General Field from One Record to Another
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: edit copy paste
	
	======================================================================
	Keywords          : kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300Mac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
