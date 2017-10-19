---
layout: page
title: "Q190113: BUG: Query Designer Generates Invalid SQL Statement"
permalink: /kb/190/Q190113/
---

## Q190113: BUG: Query Designer Generates Invalid SQL Statement

	Article: Q190113
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, the Query Designer may generate invalid SQL statement
	if database is MDB file. When the statement is executed, VB generates the
	error:
	
	  Syntax error in FROM clause
	
	RESOLUTION
	==========
	
	Manually remove the braces "{}" and "oj" from the "From" statement.
	
	Code Example
	------------
	
	Change the following statement
	
	     SELECT Products.ProductName, `Order Details`.Quantity
	     FROM { oj `Order Details` LEFT OUTER JOIN
	     Products ON `Order Details`.ProductID = Products.ProductID }
	
	To the following:
	
	     SELECT Products.ProductName, `Order Details`.Quantity
	     FROM `Order Details` LEFT OUTER JOIN
	     Products ON `Order Details`.ProductID = Products.ProductID
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual Basic and create a new Standard EXE project.
	
	2. On the Project menu, click Add a Data Environment.
	
	3. Right click the connection, select Properties, and select OLEDB Provider for
	  Jet 3.51.
	
	4. Click the Connection tab and select the NWind.mdb by using the ellipsis
	  button for item 1.
	
	5. Right-click the connection and select "Add a Command."
	
	6. Right-click Command1; select "SQL" as data source. Click SQL Build to launch
	  the Query Designer.
	
	7. Drag-drop Table "Order Details" and "Products" onto the diagram pane; there
	  is a relationship between these two tables.
	
	8. Check the column "ProductName" in Products and column "Quantity" in "Order
	  Details."
	
	9. Right-click the relationship line and select "select all rows from 'Order
	  Details'."
	
	RESULT: The SQL sentence in the SQL pane is:
	
	     SELECT Products.ProductName, 'Order Details'.Quantity
	     FROM { oj 'Order Details' LEFT OUTER JOIN
	     Products ON 'Order Details'.ProductID = Products.ProductID }
	
	This is an invalid SQL statement; when running it, Visual Basic generates "Syntax
	error in FROM clause" when it attempts to save the query.
	
	Additional query words: kbvbp600bug kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
