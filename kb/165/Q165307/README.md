---
layout: page
title: "Q165307: BUG: Incorrect WHERE Clause Shows in View Designer"
permalink: /kb/165/Q165307/
---

## Q165307: BUG: Incorrect WHERE Clause Shows in View Designer

{% raw %}

	Article: Q165307
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500bug kbvfp600bug
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SQL window in the View Designer shows an incorrect WHERE clause if the view
	is browsed in the database before it is modified. The field names are prefaced
	with the name of the view instead of the name of the table the view is based on.
	
	RESOLUTION
	==========
	
	When creating the view, preface the field names in the WHERE clause with the
	table name.
	
	-or-
	
	If the Browse window has already been opened, close it and close the view, then
	modify the view and the SQL WHERE clause will be correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create a new database with a table and a view of
	  that table.
	
	        SET DEFAULT TO HOME()+"\samples\data"
	        USE customer
	        COPY TO new_cust
	        CREATE DATABASE new_dbc
	        ADD TABLE new_cust
	        CREATE SQL VIEW test AS SELECT country, maxordamt ;
	              FROM new_cust WHERE country="USA" and maxordamt>10000
	        MODIFY DATABASE NOWAIT
	
	2. Right-click on the View and select Browse.
	
	3. Right-click on the View and select Modify.
	
	4. In the View Designer, click SQL on the View Designer toolbar.
	
	  Look at the WHERE clause. The field names are prefaced with the view name not
	  the table name. The WHERE clause looks correct if the view is modified
	  without browsing first.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
