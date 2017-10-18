---
layout: page
title: "Q304910: MCSE Training Kit Microsoft SQL ServerT 2000 Database Design and"
permalink: kb/304/Q304910/
---

## Q304910: MCSE Training Kit Microsoft SQL ServerT 2000 Database Design and

	Article: Q304910
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Training Kit, Microsoft SQL ServerT 2000 Database Design and Implementation ISBN 0-7356-1248-x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Training Kit Microsoft SQL Server?
	2000 Database Design and Implementation, ISBN 0-7356-1248-X.
	
	The following topics are covered:
	
	- Page 30: Incorrect Caption For Figure 1.7
	
	- Page 64: "customer" Should Be "customers"
	
	- Page 72: "Object Window" Should Be "Object Browser window"
	
	- Page 73: "sp_helpprotect" Should Be "sp_helprotect"
	
	- Page 73: Missing Step
	
	- Page 87: ?a.' Should Be ?a?.
	
	- Page 93: "sp_exectesql" Should Be "sp_executesql"
	
	- Page 106, Figure 3.7: "Authors" Should Be "BookAuthor"
	
	- Page 108: Incomplete List
	
	- Page 108: "users table" Should Be "user table"
	
	- Page 110: Typo In Step 5
	
	- Page 135: Missing Title Column In The Column List For Table Books
	
	- Pages 137, 138, & 139: Typos In Figures 3.14, 3.15, & 3.16
	
	- Page 139: Typo In Figure 3.16
	
	- Page 199: Incorrect Table Name
	
	- Page 339: Incorrect CREATE TRIGGER Sample Statement
	
	- Page 406: Correction To FILLFACTOR Property
	
	- Page 435: Connections Should Be Transactions
	
	- Page 453: Incorrect Code Sample for DBCC USEROPTIONS
	
	- Page 471: Correction To Auditing
	
	MORE INFORMATION
	================
	
	Page 30:  Incorrect Caption For Figure 1.7
	------------------------------------------
	
	On page 30, in the caption for Figure 1.7,
	
	Change:
	"Figure 1.7 Relational engine components"
	
	To:
	"Figure 1.7 Relational database engine components"
	
	
	Page 64: "customer" Should Be "customers"
	-----------------------------------------
	
	On page 64, under "To correct a Transact-SQL statement ", in step 1,
	
	Change:
	"customer"
	
	To:
	"customers"
	
	
	Page 72: "Object Window" Should Be "Object Browser window"
	----------------------------------------------------------
	
	On page 72, under "To display information about a table",
	
	Change:
	"4. Close the Object Window but leave the Query window open for the next
	procedure."
	
	To:
	"4. Close the Object Browser window but leave the Query window open for the next
	procedure."
	
	
	Page 73: "sp_helpprotect" Should Be "sp_helprotect"
	---------------------------------------------------
	
	On page 73, in step 3 under the first bulleted item,
	
	Change:
	"EXEC sp_helpprotect Investors"
	
	To:
	"EXEC sp_helprotect Investors"
	
	
	Page 73: Missing Step
	---------------------
	
	On page 73, under "To revoke permissions on a database object", after the Hint in
	step 1,
	
	Insert:
	"2. Highlight the REVOKE statement, then execute it."
	
	Change numbering for steps 2 and 3: 2 to 3 and 3 to 4
	
	
	Page 87: ?a.' Should Be ?a?.
	----------------------------
	
	On page 87, in step 2, inside comments after ?INSERT INTO [New Table] VALUES?,
	
	Change in two places:
	?a.?
	
	To:
	?a?.
	
	
	Page 93: "sp_exectesql" Should Be "sp_executesql"
	-------------------------------------------------
	
	On page 93, in Figure 2.12, inside the rectangle under ?Batch execution plan?,
	
	Change:
	"2. sp_exectesql N? INSERT??"
	
	To:
	"2. sp_executesql N?INSERT??"
	
	
	Page 106, Figure 3.7: "Authors" Should Be "BookAuthor"
	------------------------------------------------------
	
	On page 106, in Figure 3.7, the third table's name,
	
	Change:
	"Authors"
	
	To:
	"BookAuthors"
	
	
	Page 108: Incomplete List
	-------------------------
	
	On page 108, in the top paragraph,
	
	Change:
	"The list includes users tables, system tables, stored procedures, functions, and
	user-defined data types."
	
	To:
	"The list includes user tables, system tables, views, stored procedures,
	functions, and user-defined data types."
	
	
	Page 108: Incomplete List
	-------------------------
	
	On page 108, in steps 5 and 4, "users table" should be "user table".
	
	Change:
	"Expand the Users Tables node."
	To:
	"Expand the User Tables node."
	
	Change:
	"A list of users tables in the Northwind database appears."
	To:
	"A list of user tables in the Northwind database appears."
	
	On page 108, under "To view the contents of a table", in step 4,
	
	Change:
	"Review each users table object to determine the columns in each one."
	To:
	"Review each user table object to determine the columns in each one."
	
	
	Page 110: Typo In Step 5
	------------------------
	
	On page 110, in step 5,
	
	Change:
	"5. Select the Add Selected Tables Automatically checkbox."
	
	To:
	"5. Select the Add Related Tables Automatically checkbox."
	
	
	Page 135: Missing Title Column In The Column List For Table Books
	-----------------------------------------------------------------
	
	On page 135, in the Table ? Columns table, change:
	
	Table Columns:
	TitleID, AuthorID, Publisher, PubDate, Edition, Cost, SRP, ConditionID, Sold
	
	To:
	
	Table Columns:
	TitleID, Title, AuthorID, Publisher, PubDate, Edition, Cost, SRP, ConditionID,
	Sold
	
	
	Pages 137, 138, & 139: Typos In Figures 3.14, 3.15, & 3.16
	----------------------------------------------------------
	
	On pages 137, 138, & 139, in Figures 3.14, 3.15, & 3.16, change the right
	top table?s name from:
	"Authors"
	
	To:
	"BookCondition"
	
	Change the table?s name from:
	"BooksOrders"
	
	To:
	"BookOrders"
	
	Change the column name in table OrderStatus from:
	"StatusDescip"
	
	To:
	"StatusDescrip"
	
	
	Page 139: Typo In Figure 3.16
	-----------------------------
	
	On page 139, in Figure 3.16, change the table's name from:
	"BooksAuthors"
	
	To:
	"BookAuthors"
	
	
	Page 199: Incorrect Table Name
	------------------------------
	
	On page 199, in step 2 under the second bulleted item,
	
	Change:
	"ALTER TABLE Customer"
	
	To:
	"ALTER TABLE Customers"
	
	
	Page 339: Incorrect CREATE TRIGGER Sample Statement
	---------------------------------------------------
	
	On page 339, under "Creating Triggers Using Transact-SQL", change:
	
	"CREATE TABLE trigger_name"
	
	To:
	
	"CREATE TRIGGER trigger_name"
	
	
	Page 406: Correction To FILLFACTOR Property
	-------------------------------------------
	
	On page 406, in the last paragraph,
	
	Change:
	"The FILLFACTOR keyword configures the index so that the leaf level index pages
	are 40 percent full, leaving 60 percent of the space to contain additional index
	key entries."
	
	To:
	"The FILLFACTOR keyword configures the index so that the leaf level index pages
	are 60 percent full, leaving 40 percent of the space to contain additional index
	key entries."
	
	
	Page 435: Connections Should Be Transactions
	--------------------------------------------
	
	On page 435, in the first paragraph, change:
	"... and SQL Server rolls back any outstanding connections when the network
	notifies it of the break."
	
	To:
	"... and SQL Server rolls back any outstanding transactions when the network
	notifies it of the break."
	
	
	Page 453: Incorrect Code Sample for DBCC USEROPTIONS
	----------------------------------------------------
	
	On page 453, in the second instance of the code sample,
	
	Change:
	
	  USE Pubs
	  SET TRANSACTION ISOLATION LEVEL READ COMMITTED
	
	To:
	
	  Use Pubs
	  DBCC USEROPTIONS
	
	
	Page 471: Correction To Auditing
	--------------------------------
	
	On page 471, in the first paragraph under "Auditing", remove the reference to
	xp_loginconfig extended stored procedure:
	
	Change:
	"Login authentication success and failure is a server option that you configure
	with the xp_loginconfig extended stored procedure or by using the..."
	
	To:
	"Login authentication success and failure is a server option that you configure
	by using the..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	REFERENCES
	==========
	
	ITBOOK TKBOOK 0-7356-1248-X SHELDON WILANSKY
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
