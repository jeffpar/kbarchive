---
layout: page
title: "Q137604: How to Convert SQL Datetime Column to a Date in a Remote View"
permalink: /kb/137/Q137604/
---

## Q137604: How to Convert SQL Datetime Column to a Date in a Remote View

{% raw %}

	Article: Q137604
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To retrieve a datetime column value as a date (mm/dd/yy), a data type conversion
	must occur. For example, Microsoft SQL Server doesn't have a date data type;
	dates are always stored in a datetime format. This article shows how to convert
	the remote datetime data type to a date value by using the DbSetProp function.
	There is no way to do this through the user interface when creating a remote
	view.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new remote view by using the View Designer. Select the DataSource
	  that opens the Pubs database supplied with SQL Server. Open the Sales table
	  from the available tables in the Pubs database.
	
	  NOTE: This process assumes that a connection has already been established to
	  the Pubs database in SQL Server. The creation of remote connections is beyond
	  the scope of this article. For more information on how to set up a
	  connection, please see Chapter 7 of the "User's Guide" and Chapter 8 of the
	  "Developer's Guide."
	
	2. Select the following columns: Store_id, Ord_num, Qty, Payterms, Title_id, and
	  Date, or Select * to select all columns. The selected output should show:
	
	     sales.stor_id, sales.ord_num, sales.qty, sales.payterms, sales.title_id,
	     sales.date.
	
	  The SQL statement should be:
	
	     SELECT Sales.stor_id, Sales.ord_num, Sales.qty, Sales.payterms,;
	        Sales.title_id, Sales.date;
	        FROM dbo.sales Sales
	
	3. Execute the view by clicking the exclamation mark (!). A result set
	  containing a date column in the format "mon dd yyyy hh:miAM" (or PM), such as
	  "Apr 15 1995 10:23AM" will display.
	
	4. Save the view as Sales_view.
	
	5. Create a form using the Form Designer, and include the "sales_view" in the
	  data environment. Drag all the fields onto the form as text boxes. In the
	  load event of the form, place the following code including the quotation
	  marks:
	
	     OPEN DATABASE mydata
	     =DBSetProp("sales_view.date","field","Datatype","D(8)")
	
	REFERENCES
	==========
	
	FoxPro Help: Client/Server Applications, Data Type Conversions, Changing Default
	Data Types when Downloading.
	
	Language Reference, page 245, "Field Properties for Views."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
