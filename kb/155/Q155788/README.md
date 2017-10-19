---
layout: page
title: "Q155788: HOWTO: Optimize SQL Using the FORCE Clause and SYS(3054)"
permalink: /kb/155/Q155788/
---

## Q155788: HOWTO: Optimize SQL Using the FORCE Clause and SYS(3054)

	Article: Q155788
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp500 kbvfp600 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 5.0 and later have a new clause, the FORCE clause, in the SELECT -
	SQL command. You can use the FORCE clause to override the default query
	optimization that Visual FoxPro performs.
	
	The FORCE clause specifies that tables are joined in the order in which they
	appear in the FROM clause. If the FORCE clause is omitted, Visual FoxPro
	attempts to optimize the query. However, Visual FoxPro might execute the query
	faster by including the FORCE clause to disable the Visual FoxPro query
	optimization.
	
	MORE INFORMATION
	================
	
	When a SQL statement is processed, the SQL optimizer determines the most
	efficient way to join the tables. There are times when you have a better
	understanding of the data structures than FoxPro. The FORCE clause, tells Visual
	FoxPro that the SELECT statement is optimized and that it does not need to be
	further changed.
	
	In order to use FORCE clause, you must use the ANSI join syntax within the FROM
	clause. Any conditions within the WHERE clause are not subject to the FORCE
	clause. When the FORCE clause is positioned, it is global to all listed joins.
	The order in which the Join tables appear in the statement is the order in which
	they are joined. The following statements, therefore, may produce different
	performance results:
	
	     SELECT * ;
	     FROM FORCE customer JOIN(orders JOIN orditems ;
	     ON orditems.order_id=orders.order_id) ;
	     ON orders.customer_id=customer.customer_id
	
	     SELECT * ;
	     FROM FORCE customer JOIN orders ;
	     ON orders.customer_id=customer.customer_id ;
	     JOIN orditems ;
	     ON orditems.order_id=orders.order_id
	
	In the first SELECT statement, the orders and orditems tables are joined and the
	result is joined to the customer table. In the second statement, the customer
	table is joined with the orders table first. The result is then joined with the
	orditems table.
	
	In order to make the decision to Force a join condition, you can use the
	SYS(3054) function to determine the extent to which the query is optimized by
	Rushmore technology. For example, you can issue the following command before the
	SELECT statement to determine the internal optimization plan for the query:
	
	     ? SYS(3054,1)
	     SELECT * FROM customer JOIN orders;
	     ON customer.customer_id=orders.customer_id ;
	     WHERE UPPER(country)="USA"
	
	SYS(3054) returns information, such as the index tag used to optimize the join as
	well as the optimization level for each table, whether it be 'full,' 'partial,'
	or 'none.'
	
	Sometimes, you can determine the best optimization level by trial and error. Try
	running the SQL statement with and without the FORCE clause to see if there is a
	significant change in performance. Make sure to clear the environment between
	SELECT statements so that caching does not effect the outcome of successive
	queries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp500 kbvfp600 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
