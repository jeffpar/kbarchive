---
layout: page
title: "Q176572: FIX: ODBC Date Filter Greater Than 12/31/1999 Return No Records"
permalink: kb/176/Q176572/
---

## Q176572: FIX: ODBC Date Filter Greater Than 12/31/1999 Return No Records

	Article: Q176572
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbDriver kbvfp500 kbVS600fix kbGrpDSFox kbGrpDSMDAC
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SQL query through the Microsoft Visual FoxPro driver (Vfpodbc.dll) that
	specifies a date greater than 12/31/1999 in the WHERE statement does not return
	any records.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Use the Visual FoxPro syntax {01/01/2000} instead of the ODBC escape sequence
	  dates {d '01/01/2000'}.
	
	- Use the CTOD() function to convert the date string to a date. For example:
	
	  SELECT * FROM Test WHERE MyDate BETWEEN CTOD('01/01/1997');
	           AND CTOD('01/01/2002')
	
	- Pass the date as a parameter instead of an embedded string. For example:
	
	  SELECT * FROM Test WHERE MyDate BETWEEN ? and ?
	
	  NOTE: The method only works if the application you are using in the front end
	  supports passing parameters to the ODBC driver using the SQLBindParameter
	  ODBC API.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in the Vfpodbc.dll file that
	ships with Visual FoxPro 6.0..
	
	The fix is available in Microsoft Visual Studio 6.0 and through the download of
	the Microsoft Data Access Components (MDAC) version 2.5. You can download MDAC
	2.5 from the following Microsoft Web site:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	NOTE: This problem only occurs when you attempt to connect from a client other
	than Microsoft Visual FoxPro through ODBC to a Microsoft Visual FoxPro
	database.
	
	This problem specifically deals with the ODBC escape sequence dates. For
	example:
	
	  {d '2000/01/01')
	
	NOTE: This format works correctly for any dates less than 01/01/2000.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table in Microsoft Visual FoxPro by running the following code in a
	  program file:
	
	  CREATE TABLE TEST (MyID c(10), MyDate d)
	        INSERT INTO TEST VALUES ('1',{01/01/1997})
	        INSERT INTO TEST VALUES ('2',{02/01/2001})
	        INSERT INTO TEST VALUES ('3',{10/22/2002})
	
	2. Create a datasource based on the Microsoft Visual FoxPro Driver with a
	  database type of Free Table Directory. Make sure you specify the directory
	  where Test.dbf is saved in the Path textbox.
	
	  NOTE: If your application supports specifying a data source connection string,
	  here is an example for the connect string.
	
	  Replace the SOURCEDB setting with the path for the saved Test.dbf file as
	  follows:
	
	  DRIVER=Microsoft Visual FoxPro Driver;BACKGROUNDFETCH=NO;
	        SOURCETYPE=DBF; SOURCEDB=C:\MYPATH
	
	3. Using that data source, execute the following SQL statement. This query does
	  not return any records:
	
	  SELECT * FROM TEST WHERE MyDate BETWEEN ;
	        {d '01/01/1996'} and {d '01/01/2000'}
	
	  This query returns the one record that matches the criteria:
	
	  SELECT * FROM TEST WHERE MyDate BETWEEN ;
	        {d '01/01/1996'} and {d '12/31/1999'}
	
	  NOTE: If the application you are using does not support multi-line SQL
	  statements without a line continuation character, please make sure to insert
	  the appropriate line continuation character after the word BETWEEN in both
	  SQL statements.
	
	Additional query words: Date
	
	======================================================================
	Keywords          : kbYear2000 kbDriver kbvfp500 kbVS600fix kbGrpDSFox kbGrpDSMDAC 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
