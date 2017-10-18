---
layout: page
title: "Q150433: PRB: 12/30/1899 Appears as a Blank Date in Microsoft Access"
permalink: kb/150/Q150433/
---

## Q150433: PRB: 12/30/1899 Appears as a Blank Date in Microsoft Access

	Article: Q150433
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual FoxPro date field contains a value 12/30/1899, then it will display
	as 12:00:00AM, a blank date, in Microsoft Access.
	
	CAUSE
	=====
	
	The FoxPro ODBC driver returns 0 for an empty date instead of NULL. In Microsoft
	Access and any other VBA/DAO product, dates and times are stored as the number
	of days since 12/30/1899, which is day 0, and time values are stored as
	fractions of a day. The default formatting for date/time data is:
	
	 Data            Display
	 ----            -------
	 3.0             date only:      1/2/1901
	 3.25            date and time:  1/2/1901 6:00:00AM
	 0.25            time only:      6:00:00AM
	 0.0             time only:      12:00:00AM
	 NULL            blank:
	
	As you can see, the 0.0 case is a special case of "time only".
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and execute the following Visual FoxPro program:
	
	        CREATE TABLE ztest (dfield d)
	        APPEND BLANK
	        REPLACE dfield WITH {12/30/1899}
	        USE
	
	2. Create a Visual FoxPro data source called ztest to the free table directory
	  where the table ztest was created.
	
	3. Start Microsoft Access. From the File menu, choose Open Database. Select and
	  open a Microsoft Access database.
	
	4. From the File menu, choose Get External Data, and select Linked Tables. Then
	  from Files of type list, select ODBC Databases().
	
	5. Select the ztest data source. Select the ztest table, and click OK.
	
	6. Click the Cancel button to not select a unique identifier.
	
	7. Double-click ztest in the database.
	
	Notice that in the data sheet view the date displays as 12:00:00 AM, which is a
	blank date.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
