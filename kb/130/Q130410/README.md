---
layout: page
title: "Q130410: BUG: ALTER TABLE Command Changes Field Type to Picture"
permalink: /kb/130/Q130410/
---

## Q130410: BUG: ALTER TABLE Command Changes Field Type to Picture

{% raw %}

	Article: Q130410
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ALTER TABLE command to create a primary index tag, the ALTER
	TABLE command changes the data type of the desired key field to the Picture data
	type.
	
	CAUSE
	=====
	
	If the word KEY is not supplied when using the ALTER TABLE clause PRIMARY KEY
	and the column data type and width is not supplied, Visual FoxPro changes the
	data type of the desired key field to PICTURE rather than generating a syntax
	error.
	
	RESOLUTION
	==========
	
	Provide the word KEY and the column data type and width when using the PRIMARY
	KEY clause of the ALTER TABLE command, or use the ADD PRIMARY KEY clause of the
	ALTER TABLE command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Issue the following code within the Command window:
	
	     CLOSE ALL
	     CLEAR
	     CREATE DATABASE mydata     && Creates MYDATA.DBC.
	     USE samples\data\orders
	     COPY NEXT 10 TO orders2    && Copies the first 10 records from
	                                && ORDERS.DBF to a new table ORDERS2.DBF.
	     USE                        && Clears ORDERS.DBF from memory.
	     ADD TABLE orders2          && Adds orders2 to MYDATA.DBC.
	     USE orders2
	     DISPLAY STRUCTURE          && Very Important to note that the field
	                                && order_id has the character data type.
	     CLEAR
	     *
	     * The next command is used to create a Primary index tag on the
	     * field order_id, the syntax should be:
	     *
	     * ALTER TABLE orders2 ALTER COLUMN order_id C(6) PRIMARY KEY
	     * -or-
	     * ALTER TABLE orders2 ADD PRIMARY KEY order_id TAG order_id
	     *
	
	     ALTER TABLE orders2 ALTER order_id PRIMARY
	     DISPLAY STRUCTURE           && Note the data type of order_id is now
	                                 && Picture.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
