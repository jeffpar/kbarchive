---
layout: page
title: "Q145817: HOWTO: Formatting a Date or Time Value to Query an SQL Table"
permalink: kb/145/Q145817/
---

## Q145817: HOWTO: Formatting a Date or Time Value to Query an SQL Table

	Article: Q145817
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b
	Operating System(s): 
	Keyword(s): kbinterop kbvfp kbvfp300 kbvfp300b kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can format date type input data as {mm/dd/yy}, or, if you
	type directly in a date field, as mm/dd/yy. However, when you perform a remote
	query on an SQL table and format the data in this fashion, an ODBC error is the
	result.
	
	MORE INFORMATION
	================
	
	If, in a remote query, you pass date, time, or timestamp values to an SQL table,
	you need to format the data with the following escape clauses:
	
	- Date value: {d 'yyyy-mm-dd'}, where yyyy represents the year, mm the month,
	  and dd the day.
	
	- Time value: {t 'hh:mm:ss'}, where hh represents the hours, mm the minutes,
	  and ss the seconds.
	
	- Timestamp value: {ts 'yyyy-mm-dd hh:mm:ss'}.
	
	In a SQL Pass Through command, you can use the following syntax to retrieve the
	value of a date field:
	
	     =SQLEXEC( nConnHandle, "SELECT * FROM TITLES WHERE
	        Titles.pubdate<{ts '1995-06-12 12:55:00'}", 'MyCursor')
	
	You can use the following syntax to create a remote view that queries datetime
	information:
	
	     CREATE SQL VIEW sqldate REMOTE CONNECTION sqldate AS SELECT * FROM ;
	        dbo.titles WHERE Titles.pubdate<{ts '1985-06-12 12:55:00'}
	
	In the View Designer, ensure that the date, the time, or the timestamp values are
	formatted as needed in the Examples field of the Selection Criteria tab. Once
	the view is saved, the information in the Examples field is saved with the view.
	If the view is opened and modified, the information disappears and has to be
	typed back in the Examples field.
	
	
	Note that when you pass the field name (not a value) as a parameter to a remote
	query, you do not receive an ODBC error because Visual FoxPro performs a
	conversion.
	
	REFERENCES
	==========
	
	ODBC 2.0 Programmer's Reference and SDK Guide, pp.50-52, Microsoft Press.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.0 3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
