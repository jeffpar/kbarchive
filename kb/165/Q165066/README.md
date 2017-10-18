---
layout: page
title: "Q165066: FIX: Subquery Causes SUM to Return Incorrect Results"
permalink: kb/165/Q165066/
---

## Q165066: FIX: Subquery Causes SUM to Return Incorrect Results

	Article: Q165066
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Including a subquery with a SQL-SELECT statement containing a SUM command causes
	the SUM command to report incorrect amounts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0a
	for Windows.
	
	MORE INFORMATION
	================
	
	The following code creates a table, populates it with data, and performs a
	SELECT-SQL statement containing a subquery.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program containing the following lines of code and execute it:
	
	     *** Begin program code
	
	     CLOSE ALL
	     CREATE CURSOR Master ( nId I, cName C(10))
	     INSERT INTO Master VALUES ( 1, "One")
	     INSERT INTO Master VALUES ( 2, "Two")
	     INSERT INTO Master VALUES ( 3, "Three")
	     INSERT INTO Master VALUES ( 4, "Four")
	
	     CREATE CURSOR Results ( nId I, dDate D)
	     INSERT INTO Results VALUES ( 1, DATE())
	     INSERT INTO Results VALUES ( 1, DATE())
	     INSERT INTO Results VALUES ( 1, DATE())
	     INSERT INTO Results VALUES ( 1, DATE())
	     INSERT INTO Results VALUES ( 2, DATE() + 3)
	     INSERT INTO Results VALUES ( 2, DATE() + 3)
	     INSERT INTO Results VALUES ( 2, DATE() + 3)
	
	     CREATE CURSOR Detail ( nId I, nAmount Y)
	     INSERT INTO Detail VALUES ( 1, 100.00)
	     INSERT INTO Detail VALUES ( 3, 300.00)
	
	     * This will show correct sums
	     WAIT WINDOW "Correct:" timeout 3
	     SELECT Master.cName, ;
	        SUM( NVL( Detail.nAmount, 0)) AS nSum ;
	        FROM Master LEFT OUTER JOIN Detail ON Detail.nId = Master.nId ;
	        GROUP BY 1
	
	     * However, if I add an additional subquery, sum results are wrong.
	     WAIT WINDOW "w/ Subquery - Wrong under VFP 5.0:" timeout 3
	     SELECT Master.cName, ;
	        SUM( NVL( Detail.nAmount, 0)) AS nSum ;
	        FROM Master LEFT OUTER JOIN Detail ON Detail.nId = Master.nId ;
	        WHERE Master.nId IN ( SELECT DISTINCT nId FROM Results ) ;
	        GROUP BY 1
	
	     CLOSE ALL
	     *** End of program code
	
	Executing the first query in Visual FoxPro 5.0 gives the following results:
	
	  Cname       Nsum
	  -----       -----
	  Four        0.0000
	  One         100.000
	  Three       300.000
	  Two         0.00000
	
	The second query in Visual FoxPro 5.0, which contains the subquery, gives the
	following incorrect results based on the same data:
	
	  Cname       Nsum
	  -----       -----
	  One         0
	  Two         0
	
	In Visual FoxPro 5.0a, the results of the first query remain the same. However,
	the second query correctly returns to following values:
	
	  Cname       Nsum
	  -----       -----
	  One         100.0000
	  Two         0.0000
	
	Additional query words: 5.0
	
	======================================================================
	Keywords          : kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
