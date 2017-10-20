---
layout: page
title: "Q100069: INFO: Outer Join with Three or More Data Tables"
permalink: /kb/100/Q100069/
---

## Q100069: INFO: Outer Join with Three or More Data Tables

{% raw %}

	Article: Q100069
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When two data tables are joined through a SELECT-SQL statement, only those
	records that have entries in both the parent and child databases are included in
	the resulting data table. If it is necessary to also include parent records that
	do not have corresponding child entries, an outer join is performed.
	
	A SQL outer join creates one data table that includes parent records--both those
	with and those without corresponding child records--and fields from both the
	parent and child databases.
	
	Using an outer join, you can create one final result set from three or more
	databases (where the second and subsequent databases are each children of the
	parent) that includes fields from all databases regardless of whether the parent
	has records in any one or more of the child databases. The procedure for
	creating this single result set is detailed below.
	
	NOTE: Visual FoxPro 5.0 and later support the OUTER JOIN syntax, which makes the
	techniques described in this article unnecessary. For more information, please
	see the "References" section.
	
	
	MORE INFORMATION
	================
	
	To create one result set from three databases, where one database is the parent
	and the two other databases are children of the same parent, do the following:
	
	1. Using the CUSTOMER database located in the GOODIES\TUTORIAL subdirectory in
	  the main FoxPro directory or in the SAMPLES\DATA directory in Visual FoxPro,
	  create the following sample data set:
	
	  lcVersion = VERSION()
	
	  DO CASE
	  	CASE "Visual FoxPro 03" $ lcVersion OR "Visual FoxPro 05" $ lcVersion
	  	    SET DEFAULT TO HOME() + "SAMPLES\DATA"
	  	CASE "Visual FoxPro 06" $ lcVersion
	  		SET DEFAULT TO HOME(2) + "DATA"
	  	OTHERWISE
	  	    SET DEFAULT TO HOME() + "TUTORIAL"
	  ENDcase
	
	  USE customer
	  COPY TO child1 NEXT 50
	  SKIP -10
	  COPY TO child2 NEXT 50
	
	The parent file will now have 100 children in CHILD1 and 50 different children in
	CHILD2. For several customer numbers, child records will exist both in CHILD1
	and CHILD2.
	
	2. Determine which fields are needed from the parent and each child.
	
	3. Perform an outer join between the parent (CUSTOMER) and the first child
	  (CHILD1). Store the results in a cursor so you don't have to eliminate
	  temporary files later:
	
	  IF "Visual" $ VERSION()
	  	SELECT customer.cust_id, child1.company ;
	  		FROM customer, child1 ;
	  		WHERE customer.cust_id = child1.cust_id ;
	  	UNION ;
	  	SELECT customer.cust_id, "" FROM customer ;
	  		WHERE customer.cust_id NOT IN ;
	  			(SELECT child1.cust_id ;
	  				FROM child1 ;
	  				WHERE customer.cust_id = child1.cust_id) ;
	  		INTO CURSOR oj1
	  ELSE
	  	SELECT customer.cno, child1.company ;
	  		FROM customer, child1 ;
	  		WHERE customer.cno = child1.cno;
	  	UNION ;
	  	SELECT customer.cno, "" FROM customer ;
	  		WHERE customer.cno NOT IN ;
	  		(SELECT child1.cno ;
	  			FROM child1 ;
	  			WHERE customer.cno = child1.cno ) ;
	  		INTO CURSOR oj1
	  ENDif
	
	NOTE: The placeholder for CHILD1.COMPANY is critical, since this field would
	otherwise be blank whenever there was not a match between the parent and child.
	This would result in a huge output data set, since an attempt would be made to
	join each blank CHILD1.COMPANY field with each CUSTOMER.CNO record. Use a
	placeholder for any field in the child database that was selected in the first
	half of the outer join command.
	
	4. Perform an outer join of the parent and CHILD2:
	
	  IF "Visual" $ VERSION()
	  	SELECT customer.cust_id, child2.contact, child2.maxOrdAmt ;
	  		FROM customer, child2 ;
	  		WHERE customer.cust_id = child2.cust_id ;
	  	UNION ;
	  	SELECT customer.cust_id, "", NTOM(0.00) FROM customer ;
	  		WHERE customer.cust_id NOT IN ;
	  			(SELECT child2.cust_id FROM child2 ;
	  				WHERE customer.cust_id = child2.cust_id) ;
	  		INTO CURSOR oj2 
	  ELSE
	  	SELECT customer.cno, child2.contact, child2.lat ;
	  		FROM customer, child2 ;
	  		WHERE customer.cno = child2.cno ;
	  	UNION ;
	  	SELECT customer.cno, "", 0 FROM customer;
	  		WHERE customer.cno NOT IN ;
	  			(SELECT child2.cno ;
	  				FROM child2 ;
	  				WHERE customer.cno = child2.cno) ;
	  		INTO CURSOR oj2
	  ENDif
	
	5. Repeat the outer join for each child. (NOTE: Capacity will be limited by the
	  number of available file handles, open work areas, free disk space, and RAM.)
	
	6. Perform a join of each of the temporary data sets that were created in steps
	  3 through 5:
	
	  IF "Visual" $ VERSION()
	  	SELECT oj1.cust_id, oj1.company, oj2.contact, oj2.maxOrdAmt ;
	  		FROM oj1, oj2 ;
	  		WHERE oj1.cust_id = oj2.cust_id ;
	  		INTO CURSOR ojFinal
	  ELSE
	  	SELECT oj1.cno, oj1.company, oj2.contact, oj2.lat ;
	  		FROM oj1, oj2 ;
	  		WHERE oj1.cno = oj2.cno ;
	  		INTO CURSOR ojFinal
	  ENDif
	
	7. Use a BROWSE command to examine the results:
	
	  SELECT ojfinal
	  BROWSE
	
	  Examine the results. OJFINAL should contain the same number of records as
	  exist in CUSTOMER.DBF. In FoxPro 2.x, all records should contain an entry in
	  the CNO field. One hundred records should contain an entry in the COMPANY
	  field. Fifty records should contain entries in the CONTACT and LAT fields.
	  The COMPANY, CONTACT, and LAT fields should be blank in the majority of
	  output records.
	
	  In Visual FoxPro, all records should contain an entry in the CUST_ID field.
	  Fifty records should contain an entry in the COMPANY field. Fifty records
	  should contain entries in the CONTACT and MAXORDAMT fields. Two or three
	  records, depending on the version, should contain no records in COMPANY,
	  CONTACT, and MAXORDAMT.
	
	REFERENCES
	==========
	
	For more information, see "SELECT-SQL" in the FoxPro 2.0 "Commands &
	Functions" manual or in the FoxPro 2.5 "Language Reference" manual, or please
	see the following article in the Microsoft Knowledge Base:
	
	  Q89181 Outer Join Syntax Example for SELECT-SQL Statement
	
	For more information about the SELECT - SQL command, please see the manuals or
	the online Language Reference.
	
	For additional information about performing Outer Joins in Visual FoxPro 5.0 and
	later, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q238518 PRB: SQL Select Statement Using an Outer Join Clause Adds NULL Values
	  to the Output
	
	  Q176888 PRB: Using '!=' in a Join Statement Does Not Return Records
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP600
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
