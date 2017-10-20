---
layout: page
title: "Q109486: BUG: Oracle Driver Fails to Find Delimited Identifiers"
permalink: /kb/109/Q109486/
---

## Q109486: BUG: Oracle Driver Fails to Find Delimited Identifiers

{% raw %}

	Article: Q109486
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCORA: 580 (1.00.3112)
	
	SYMPTOMS
	========
	
	When delimited tablenames are passed to the Oracle driver in an escape clause,
	the delimiters are removed by the driver. Oracle needs the delimiters to find
	the table in cases where the table was originally created with the delimiters as
	part of the tablename. The following error will result when the non-delimited
	tablenames are passed down:
	
	  [PageAhead][ODBC Oracle Driver][Oracle OCI]ORA-00942: table or view does not
	  exist.
	
	The following query:
	
	     select  "Categories"."Category_Name", "Products"."Product_Name" from
	       { oj "Categories" left outer join "Products" on
	     "Categories"."Category_ID" = "Products"."Category_ID" }
	
	produces the ORA-00942 error. But when the query is formed without using an
	escape clause, it works:
	
	     select  "Categories"."Category_Name" , "Products"."Product_Name" from
	     "Categories" ,"Products" where "Categories"."Category_ID" (+)=
	     "Products"."Category_ID"
	
	This behavior impacts Access users in that Oracle tables created using the Export
	function of Access cannot be queried on later when the query involved the Access
	database engine generating Access SQL queries that involve outer joins.
	
	WORKAROUND
	==========
	
	Not using ODBC escape clauses when using delimited identifiers will avoid the
	problem. Also, you can use native Oracle SQL syntax as demonstrated above.
	
	Users of Microsoft Access experiencing this problem will need to use the SQL
	Passthrough DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Oracle Driver versions
	1.00.3112 and 1.00.2816. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00.2816 1.00.3112 VB DRIVERS 1.0 FULFILLMENT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
