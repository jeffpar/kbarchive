---
layout: page
title: "Q142001: FAQ: SQL Queries in Visual Basic"
permalink: kb/142/Q142001/
---

## Q142001: FAQ: SQL Queries in Visual Basic

	Article: Q142001
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers some of the most frequently asked questions (FAQ) about the
	Structured Query Language (SQL) for Microsoft Visual Basic for Windows. You can
	find this and other FAQ articles by querying in the Microsoft Knowledge Base
	using the keyword FAQ.
	
	The Visual Basic 3.0 FAQ covering SQL Queries may contain additional information
	regarding a portion of these questions. This FAQ is in the process of being
	completed. More frequently asked questions will be added to this article by the
	end of January 1996.
	
	NOTE: Many of the SQL statements in this article use the Biblio.mdb Access
	database that ships with Visual Basic.
	
	For more information on SQL queries, please see the following articles in the
	Microsoft Knowledge Base:
	
	
	  Q128388 : INF: Rushmore Query Optimization Paper Available on MSL
	
	
	MORE INFORMATION
	================
	
	1. Q. How can I test my SQL query quickly and easily?
	
	  A. Use VisData. VisData is a sample application that ships with Visual Basic
	  4.0. You'll find it in C:\VB\Samples\VisData\VisData.vbp. It has a window to
	  test SQL queries, can open all of the database types that Visual Basic
	  supports, and has proven to be very stable.
	
	2. Q. How do I write an SQL query that has values that contain single or double
	  quotation marks?
	
	  A. Single quotation marks ('), double quotation marks ("), and the pipe symbol
	  (|) are all special characters in Microsoft Jet SQL. Double up the quotation
	  marks or, if you have only one type of quotation mark (single or double) in
	  your data, use the other one as the delimiter. All other characters are
	  handled as is.
	
	
	3. Q. How do I use a Visual Basic variable in an SQL query?
	
	  A. Visual Basic variables and properties must be concatenated into the SQL
	  string. If you embed the name of the variable, your code will search using
	  the variable name rather than the variable value.
	
	
	4. Q. How can I call stored procedures (queries) for SQL Server databases?
	
	  A. You can pass the stored procedure name to an ExecuteSQL, a CreateDynaset,
	  or a DataControl's RecordSource property.
	
	
	5. Q. How can I select a specific list of values or exclude certain records in a
	  Select statement?
	
	  A. Use the In keyword to identify the values you want to include or exclude,
	  adding the Not keyword to exclude, as in this example:
	
	        Select * From Authors Where Au_ID In (1, 3, 5, 7, 9)
	        Select * From Authors Where Au_ID Not In (1, 3, 5, 7, 9)
	    
	
	6. Q. How can I build a Select statement that works with multiple tables?
	
	  A. A simple Select statement across unrelated tables returns a useless cross
	  product of all the records in the tables listed in the From clause:
	
	        Select * From Publishers, Titles
	     
	
	  To get a useful list of data, your data must have a common key field (or set
	  of fields) that relate the tables. You can retrieve data from your tables by
	  simply ensuring that these key fields match for each row you retrieve:
	
	        Select * From Publishers, Titles
	           Where Publishers.PubID=Titles.PubID
	     
	
	  However, this returns rows without recognizing the relationship between the
	  records in the separate tables, so the resulting RecordSet will not be
	  updatable. To return an updatable recordset, you need to join the tables as
	  in this example:
	
	        Select * From Publishers
	           Inner Join Titles On Publishers.PubID=Titles.PubID
	     
	
	  For more information, please see the "Joins" topic in the Visual Basic Help
	  file and the following articles in the Microsoft Knowledge Base:
	
	  Q102681 : PRB: Error When Updating Fields in Dynaset That Has 2+ Tables
	
	
	7. Q. How can I build a Select statement that includes multiple tables in more
	  than one database?
	
	  A. You can specify an external database with the <table> IN
	  <database> syntax, specify the connect string in your SQL query, or
	  attach the tables to a Microsoft Access database.
	
	
	8. Q. How can I return a default value in my Select statement result when the
	  real value stored in the table is null?
	
	  A. You can construct a SQL statement that returns a default value rather than
	  Null for those records where the value is actually null and use the Union
	  operator to add these records to those where the value is not null. For
	  example, the following query returns the word Anonymous for any record in the
	  Authors table where the Author field is null. (To make this example work, you
	  need to add a record with an AU_ID value but no Author value.)
	
	  (Select Author, Au_ID From Authors Where Not IsNull(Author)) Union (Select
	  "Anonymous" As Author, Au_ID From Authors Where IsNull(Author))
	
	9. Q. How can I make my SQL statement run faster?
	
	  A. For a list of hints, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q112112 : How to Optimize Microsoft Access Version 2.0 Queries
	
	  Q129882 : How to Optimize SQL Queries in Visual Basic 3.0 and 4.0
	
	  Q99321 : Tips for Optimizing Queries on Attached SQL Tables
	
	10. Q. Why can't I get a parameter query to work on the Data Control?
	
	  A. This is a limitation of the Data Control. It does not support parameter
	  queries. The Properties window lists any available non-parameter queries,
	  but does not list any parameter queries in the database, so it's not
	  possible to make the mistake of using a parameter query for a Data Control
	  at design time.
	
	  The work around to this limitation is to run the parameterized query into a
	  scratch recordset variable and then set that result into the recordset of
	  the Data Control.
	
	  The following questions may still apply, but need to be verified.
	
	
	Additional query words: FAQ kbdse kbDSupport kbVBp kbVBp400 kbVBp500 kbVBp600 kbfaq
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
