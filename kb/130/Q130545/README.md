---
layout: page
title: "Q130545: Description of New Integer Data Type"
permalink: /kb/130/Q130545/
---

## Q130545: Description of New Integer Data Type

{% raw %}

	Article: Q130545
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro version 3.0 has a new data type called Integer. This is a
	four-byte binary type that is stored as such in memory and on disk. Its range
	is:
	
	     -2,147,483,647 to 2,147,483,646 (-2**32 to 2**32 - 1).
	
	If used, Integers can increase performance and reduce disk space for tables
	compared to the other numeric data types.
	
	You will find the new data type in the Table Designer as an "Integer" type. It
	will also show up in CREATE/ALTER TABLE, DISPLAY STRUCTURE, AFIELDS(), and COPY
	STRUCTURE EXTENDED.
	
	MORE INFORMATION
	================
	
	Integers should be familiar to developers using third-generation languages like
	C/C++ and Pascal. The integer in Visual FoxPro version 3.0 is the same as a
	signed long in C/C++.
	
	  Field Type   Description      Size            Range
	  ------------------------------------------------------------------
	  Integer      Integer values   4 bytes         -2147483647 to
	                                                2147483646
	  Numeric      Integers or      8 bytes in      -.9999999999E+19 to
	               fractions        memory;         .9999999999E+20
	                                1 to 20 bytes
	                                in table
	
	Use integers for non-decimal numbers that are not exceeding the range. Serial
	numbers, counters, customer ID numbers are examples. There are two major
	advantages to using integers instead of numerics, size and performance.
	
	Size
	----
	
	Integers take up less disk space because they are saved on disk in their binary
	representation. They use only four bytes per number as compared to 10 for
	numerics. This can be significant savings for large tables. The following is an
	example, having one CUST_ID field:
	
	                 Numeric (10.0)     Integer
	  # of Records          (bytes)     (bytes)     Gain
	  --------------------------------------------------
	         1,000           10,000       4,000     6 K
	       100,000        1,000,000     400,000   586 K
	     1,000,000       10,000,000   4,000,000     6 MB
	
	Performance
	-----------
	
	Using an integer has several performance advantages over a numeric. First of all,
	it loads faster from disk. Only four bytes are read from disk compared to 10 for
	each Numeric.
	
	Integers are stored on disk in a binary format. They can be read directly into
	memory. When numerics are read from disk, a conversion takes place because they
	are stored as ASCII text strings.
	
	Also, the SQL SELECT optimizer has improved performance during joins and queries
	that use the ORDER BY or GROUP BY clauses. By using integers, Visual FoxPro can
	generate smaller and more efficient intermediate temporary tables for these
	queries.
	
	Additional query words: VFoxWin kbfest
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
