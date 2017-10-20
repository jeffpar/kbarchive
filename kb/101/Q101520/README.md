---
layout: page
title: "Q101520: INF: SQLDescribeCol Limitation on Meta Data"
permalink: /kb/101/Q101520/
---

## Q101520: INF: SQLDescribeCol Limitation on Meta Data

{% raw %}

	Article: Q101520
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	SQLDescribeCol in the ODBC API and SAG's Call Level Interface Specification is
	intended to return meta data about a column in a results set. However, it does
	not return table names as part of this meta data. This article discusses how
	this limitation stems from SQL92, and also how applications can work around this
	limitation.
	
	MORE INFORMATION
	================
	
	SQLDescribeCol returns the column names of the results set in szColname.
	However, when two columns in a results set have the same name (for example, by a
	join between 2 tables), it does not return the table name along with the column
	name to differentiate the two similarly named columns.
	
	This limitation arises from SQL, more specifically SQL92, which addresses this
	issue in Subclause 7.4, Syntax Rule 1b) on the 'From Clause':
	
	  If the <from clause> contains more than one <table reference>
	  with no intervening <derived table> or <joined table>, then the
	  descriptors of the columns of the result of the <from clause> are the
	  descriptors of the columns of the tables identified by the <table
	  reference>s, in the order in which the <table reference>s appear in
	  the <from clause> and in the order in which the columns are defined
	  within each table.
	
	Given the above rule, the following SQL example should clarify this:
	
	  // Table1 has a column 'address', and so does Table2
	  select * from Table1, Table2
	
	The 'address' column can be differentiated as being from Table1 or Table2
	depending on its position in the results set. The 'address' column from Table1
	will always come before the 'address' column in Table2.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
