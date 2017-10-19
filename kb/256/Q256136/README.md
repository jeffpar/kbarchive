---
layout: page
title: "Q256136: FP: ErrMsg: &quot;Database Results Error&quot; Updating Database Record"
permalink: /kb/256/Q256136/
---

## Q256136: FP: ErrMsg: &quot;Database Results Error&quot; Updating Database Record

	Article: Q256136
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
	page, you may receive an error message similar to the following:
	
	  Database Results Error
	  Description: [Microsoft][ODBC Microsoft Access Driver] Syntax error in UPDATE
	  statement.
	  Number: -2147217900 (0x80040E14)
	  Source: Microsoft OLE DB Provider for ODBC Drivers
	
	  One or more form fields were empty. You should provide default values for all
	  form fields that are used in the query.
	
	  -or-
	
	  Database Results Error
	  Description: [Microsoft][ODBC Microsoft Access Driver] Field '<Table
	  Name>. <Field Name>' cannot be a zero-length string.
	  Number: -2147467259 (0x80004005)
	  Source: Microsoft OLE DB Provider for ODBC Drivers
	
	  One or more form fields were empty. You should provide default values for all
	  form fields that are used in the query.
	
	where <Table Name> is the table in the database, and <Field Name> is
	the field in the database.
	
	CAUSE
	=====
	
	This problem can occur if you attempt to update a database record that has an
	empty field. The setting for the database column does not allow zero-length
	entries.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that all data fields that do not allow
	zero-length entries are populated before you submit the form.
	
	WORKAROUND
	==========
	
	To work around this issue, start Microsoft Access and then open the database
	table in Design view. Set the Allow Zero Length attribute to Yes for each field
	that you want to allow blank entries.
	
	MORE INFORMATION
	================
	
	For additional information about this error message, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q287147 FP2000: "Database Results Error" When You Update a Record
	
	
	REFERENCES
	==========
	
	For additional information about reserved words in SQL queries, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q209187 ACC2000: Reserved Words in Microsoft Access
	
	  Q286335 ACC2002: Reserved Words in Microsoft Access
	
	Additional query words: front page update sql dbase
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
