---
layout: page
title: "Q287147: FP: ErrMsg: &quot;Database Results Error&quot; Updating Database Record"
permalink: kb/287/Q287147/
---

## Q287147: FP: ErrMsg: &quot;Database Results Error&quot; Updating Database Record

	Article: Q287147
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 2002 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you use the Database Interface Wizard to create a Database Editor Web
	page, you may receive the following error message when you browse the page and
	click the Edit button:
	
	  Database Results Error
	  Description: [Microsoft][ODBC Microsoft Access Driver] Syntax error in UPDATE
	  statement.
	  Number: -2147217900 (0x80040E14)
	  Source: Microsoft OLE DB Provider for ODBC Drivers
	
	CAUSE
	=====
	
	This problem can occur if a form field is using a reserved word for a field
	name. For example, the TimeStamp field is automatically created by FrontPage,
	but the word TimeStamp is a reserved name in SQL, so the SQL statement fails
	when it encounters this field name.
	
	WORKAROUND
	==========
	
	To work around this problem for the TimeStamp field, use either of the following
	methods:
	
	Method 1: Rename the Column in Access and Rerun the Database Interface Wizard
	-----------------------------------------------------------------------------
	
	1. Start FrontPage and open your Web. Double-click the folder where your
	  database is stored (this is FPDB by default).
	
	2. Double-click your database to open it in Access.
	
	3. Click the Results table, and then click Design view.
	
	4. Rename the TimeStamp column.
	
	5. Close the database, and then run the Database Interface Wizard again.
	
	Method 2: Add [] to the Custom SQL Statement on the Update.asp Page Created by the Database Interface Wizard
	------------------------------------------------------------------------------------------------------------
	
	1. After you create the Database Interface pages, double-click the
	  <Database1_Interface> folder (where <Database1> is the name of
	  the database).
	
	2. Double-click Results.
	
	3. Double-click Editor.
	
	4. Double-click Update.asp.
	
	5. Double-click "This is the start of a Database Results region".
	
	  IMPORTANT NOTE: A warning appears telling you not to open the Database Results
	  Wizard. In this case, you can ignore this warning. However, be very careful
	  to change only what you are instructed to change in this article and nothing
	  more.
	
	6. After the wizard starts, click Next.
	
	7. In step 2 of 5 in the wizard, click Edit.
	
	8. Near the end of the SQL statement, you will see the following section of
	  code:
	
	  Timestamp = '::Timestamp::'
	
	  Add brackets ([]) around the word Timestamp. Change only the first occurrence
	  of Timestamp, so that the code looks like this:
	
	  [Timestamp] = '::Timestamp::'
	
	9. Click OK and then click Next three times. Click Finish to return to the page.
	
	10. Save the page and test the Database_editor.asp page.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not use field names that are reserved words in SQL.
	See the articles listed in the References section of this article for more
	information.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information on this error message when using FrontPage and
	databases, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q256136 FP2000: "Database Results Error" When You Update a Record
	
	
	REFERENCES
	==========
	
	For additional information on reserved words in SQL queries, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q209187 ACC2000: Reserved Words in Microsoft Access
	
	  Q286335 ACC2002: Reserved Words in Microsoft Access
	
	Additional query words: front page update sql dbase
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2002Search
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
