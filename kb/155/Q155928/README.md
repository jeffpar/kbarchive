---
layout: page
title: "Q155928: SELECT - SQL's NOFILTER Clause Forces Physical File"
permalink: /kb/155/Q155928/
---

## Q155928: SELECT - SQL's NOFILTER Clause Forces Physical File

	Article: Q155928
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp500 kbvfp600 KbDBFDBC kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The new SELECT ... INTO CURSOR ... NOFILTER clause causes a cursor to be created
	that has a corresponding physical file.
	
	MORE INFORMATION
	================
	
	In previous versions of FoxPro, the following code generates an error:
	
	     SELECT * FROM customer INTO Cursor temp
	     SELECT * FROM temp INTO Cursor temp2
	
	The following error, 1815, is generated:
	
	  'TEMP' must be created with SELECT...INTO TABLE.
	
	The following code was frequently used as a workaround in previous versions of
	FoxPro:
	
	     SELECT *,.T. FROM customer INTO Cursor temp
	     SELECT * FROM temp INTO Cursor temp2
	
	The extra column created by the .T. causes a physical file to be created, which
	can have subsequent SELECT - SQL statements run against it.
	
	In FoxPro 5.0, you can use the following code instead:
	
	     SELECT * FROM customer INTO Cursor temp NOFILTER
	     SELECT * FROM temp INTO Cursor temp2
	
	The NOFILTER clause forces the SELECT to create a physical file that can have
	SELECT - SQL statements run against it, without adding more columns.
	
	When the cursor is closed, the physical (temp) file is deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp500 kbvfp600 KbDBFDBC kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
