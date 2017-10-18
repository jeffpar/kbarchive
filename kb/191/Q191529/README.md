---
layout: page
title: "Q191529: HOWTO: Use UPDATE SQL Command to Modify a Second Table"
permalink: kb/191/Q191529/
---

## Q191529: HOWTO: Use UPDATE SQL Command to Modify a Second Table

	Article: Q191529
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbDSupport
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you cannot use a Visual FoxPro View for some reason, the Visual FoxPro UPDATE
	- SQL command allows you to update selected records based upon specific
	criteria. This article describes how to modify second table field values based
	upon a matching value in the first table.
	
	MORE INFORMATION
	================
	
	Steps to Create a Sample Program
	--------------------------------
	
	1. Create a program (.prg) file.
	
	2. Place the following code in the .prg file:
	
	  CLOSE ALL
	        CREATE TABLE bldg1 (sid c(5), busnum c(3))
	        CREATE TABLE main (name c(10), sid c(5), busnum c(3))
	
	        * Insert records into main with bus number matching
	        * last two digits of student's id.
	        SELECT main
	        FOR i = 20 to 30
	           INSERT INTO main (name, sid, busnum);
	           VALUES (SYS(2015), "888"+ALLTRIM(STR(i)), ALLTRIM(STR(i)))
	        ENDFOR
	
	        * Insert records into bldg1 with single digit bus number.
	        SELECT bldg1
	        FOR i = 20 to 30
	           INSERT INTO bldg1 (sid, busnum);
	           VALUES ("888"+ALLTRIM(STR(i)), ALLTRIM(STR(i/10)))
	        ENDFOR
	
	        BROWSE
	
	        * Modify records in bldg1 table to be the same as those in main.
	        SELECT main
	        SCAN
	        UPDATE bldg1 ;
	           SET bldg1.busnum = main.busnum ;
	           WHERE bldg1.sid = main.sid
	        ENDSCAN
	
	        SELECT bldg1
	        BROWSE
	
	3. Save and run the .prg file.
	
	Note that after the bldg1 table is created the busnum values are all single
	digit. After the update command routine is completed all the bldg1 busnum values
	are double digit, corresponding to the last two digits of the sid value.
	
	With large tables, performance using the UPDATE - SQL command with the preceding
	method may be somewhat slow, due to the use of a SCAN... ENDSCAN loop. In those
	instances, creating indexes, setting a relationship between tables and using
	either a REPLACE command or an UPDATE - SQL command provides much better
	performance.
	
	The following example illustrates use of the REPLACE command:
	
	1. Create a program (.prg) file.
	
	2. Place the following code in the .prg file:
	
	  CLOSE ALL
	        CREATE TABLE bldg1 (sid c(5), busnum c(3))
	        CREATE TABLE main (name c(10), sid c(5), busnum c(3))
	
	        * Insert records into main with bus number matching
	        * last two digits of student's id
	        SELECT main
	        FOR i = 20 to 30
	           INSERT INTO main (name, sid, busnum);
	           VALUES (SYS(2015), "888"+ALLTRIM(STR(i)), ALLTRIM(STR(i)))
	        ENDFOR
	        SELECT main
	        INDEX ON sid TAG sid OF main
	
	        * Insert records into bldg1 with single digit bus number.
	        SELECT bldg1
	        FOR i = 20 to 30
	           INSERT INTO bldg1 (sid, busnum);
	           VALUES ("888"+ALLTRIM(STR(i)), ALLTRIM(STR(i/10)))
	        ENDFOR
	        SELECT bldg1
	        INDEX ON sid TAG sid OF bldg1
	
	        BROWSE
	
	        * Modify records in bldg1 table to be the same as those in main.
	        SELECT bldg1
	        SET ORDER TO TAG sid
	        SELECT main
	        SET ORDER TO TAG sid
	        SET RELATION TO sid INTO bldg1
	        SET SKIP TO bldg1
	        GO TOP
	        REPLACE bldg1.busnum WITH main.busnum WHILE !EOF()
	        SELECT bldg1
	        BROWSE
	
	The following example illustrates use of the UPDATE - SQL command:
	
	1. Create a program (.prg) file.
	
	2. Place the following code in the .prg file:
	
	  CLOSE ALL
	        CREATE TABLE bldg1 (sid c(5), busnum c(3))
	        CREATE TABLE main (name c(10), sid c(5), busnum c(3))
	
	        * Insert records into main with bus number matching
	        * last two digits of student's id
	        SELECT main
	        FOR i = 20 to 30
	           INSERT INTO main (name, sid, busnum);
	           VALUES (SYS(2015), "888"+ALLTRIM(STR(i)), ALLTRIM(STR(i)))
	        ENDFOR
	        SELECT main
	        INDEX ON sid TAG sid OF main
	
	        * Insert records into bldg1 with single digit bus number.
	        SELECT bldg1
	        FOR i = 20 to 30
	           INSERT INTO bldg1 (sid, busnum);
	           VALUES ("888"+ALLTRIM(STR(i)), ALLTRIM(STR(i/10)))
	        ENDFOR
	        SELECT bldg1
	        INDEX ON sid TAG sid OF bldg1
	
	        BROWSE
	
	        * Modify records in bldg1 table to be the same as those in main.
	        SELECT main
	        SET ORDER TO TAG sid
	        SELECT bldg1
	        SET ORDER TO TAG sid
	        SET RELATION TO sid INTO main
	        UPDATE bldg1 SET bldg1.busnum = main.busnum
	        SELECT bldg1
	        BROWSE
	
	3. Save and run the preceding .prg file.
	
	REFERENCES
	==========
	
	Microsoft FoxPro Help; search on: "UPDATE [ASCII 150] SQL" Command
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: two tables
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
