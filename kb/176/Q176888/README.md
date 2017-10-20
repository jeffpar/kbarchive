---
layout: page
title: "Q176888: PRB: Using &quot;!=&quot; in a Join Statement Does Not Return Records"
permalink: /kb/176/Q176888/
---

## Q176888: PRB: Using &quot;!=&quot; in a Join Statement Does Not Return Records

{% raw %}

	Article: Q176888
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify a JOIN condition in a SQL Select statement using the ON clause,
	and you use the not equal sign (!=) with one empty table, the statement does not
	return any records.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	ON Clause with !=
	-----------------
	
	The following syntax does not return all the records from one table that do not
	have a matching record in the other table:
	
	  SELECT * FROM tbl1 INNER JOIN tbl2 ON tbl1.fld1 != tbl2.fld1
	
	This creates a Cartesian product that excludes records that do match.
	
	Where Clause with !=
	--------------------
	
	To create a result set that includes all records from one table that do not exist
	in a second table, use the following syntax:
	
	  SELECT * FROM tbl1 WHERE tbl1.fld1 != tbl2.fld1
	
	In conclusion, the following statements are not equivalent:
	
	     SELECT * FROM tbl1 inner join tbl2 on tbl1.fld1 != tbl2.fld1
	     SELECT * FROM tbl1 WHERE tbl1.fld1 != tbl2.fld1
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code in a program file and run the code. Note that there are
	no records returned in the cursor.
	
	     CREATE DATABASE MyTest
	     CREATE TABLE tbl1 (fld1 c(10),fld2 c(20))
	     CREATE TABLE tbl2 (fld1 c(10), fld2 c(20))
	     INSERT INTO tbl1 VALUES('1','Rec1')
	     INSERT INTO tbl1 VALUES ('2','Rec2')
	     SELECT * INTO CURSOR MyCurse FROM tbl1 inner JOIN tbl2 ON ;
	     tbl1.fld1 != tbl2.fld1
	
	For a demonstration of the Cartesian product, run the following code with the
	database created in the code above open:
	
	     INSERT INTO tbl2 VALUES ('1','tbl2Rec1')
	     INSERT INTO tbl2 VALUES ('2','tbl2Rec2')
	     SELECT * INTO CURSOR MyCurse FROM tbl1 inner JOIN tbl2 ON ;
	     tbl1.fld1 != tbl2.fld1
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124589 How to Create a Left-Right Outer Join in FoxPro for Windows
	
	Additional query words: SQL Select
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
