---
layout: page
title: "Q129632: Visual FoxPro Capacities"
permalink: /kb/129/Q129632/
---

## Q129632: Visual FoxPro Capacities

{% raw %}

	Article: Q129632
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenv kbvfp300
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles lists Visual FoxPro's System capacities in the following areas:
	
	- Tables and Index files.
	
	- Field Characteristics.
	
	- Memory Variables and Arrays.
	
	- Program and Procedure Files.
	
	- Report Designer Capacities.
	
	- Miscellaneous Capacities.
	
	MORE INFORMATION
	================
	
	NOTE: Some of Visual FoxPro's capacities may be limited by available memory.
	
	Table and Index Files
	---------------------
	
	Maximum # of records per table file             1 billion  (1)
	Maximum size of a table file                    2 gigabytes
	Maximum # of characters per record                 65,500
	Maximum # of fields per record                        255
	Maximum # of tables open at one time                  255
	Maximum # of characters per table field               254
	Maximum # of characters per index key (.IDX)          100
	Maximum # of characters per index key (.CDX)          240
	Maximum # of open index files per table         unlimited  (2)
	Maximum # of open indexes in all work areas     unlimited  (2)
	Maximum # of relations                          unlimited
	Maximum length of relational expressions        unlimited
	
	Field Characteristics
	---------------------
	
	Maximum size of character fields                      254
	Maximum size of numeric (and float) fields             20
	Maximum number of characters in field names
	  in a free table                                     10
	Maximum number of characters in field names
	  in a table contained in a database                 128
	Minimum value of an integer                -2,147,483,647
	Maximum value of an integer                 2,147,483,647
	Digits of precision in numeric computations            16
	
	Memory Variables and Arrays
	---------------------------
	
	Default # of memory variables                       1,024
	Maximum # of memory variables                      65,000
	Maximum # of arrays                                65,000
	Maximum # of elements per array                    65,000
	
	Program and Procedure Files
	---------------------------
	
	Maximum # of lines in source program files      unlimited
	Maximum size of compiled program modules              64K  (3)
	Maximum # of procedures per file                unlimited
	Maximum # of nested DO calls                          128
	Maximum # of READ nesting levels                        5
	Maximum # of nested structured programming commands   384
	Maximum # of procedure arguments                       27
	Maximum # of transactions                               5
	
	Report Designer Capacities
	--------------------------
	
	Maximum # of objects in a report definition     unlimited  (2)
	Maximum length of a report definition                  20 inches
	Maximum # of grouping levels                          128
	Maximum length of character report variables          255
	
	Miscellaneous Capacities
	------------------------
	
	Maximum # of open windows (all types)           unlimited  (2)
	Maximum # of open Browse windows                      255
	Maximum # of characters per character string            2 gigabytes
	Maximum # of characters per command line            8,192
	Maximum # of characters per label control on
	  a report                                           252
	Maximum # of characters per macro subst. line       8,192
	Maximum # of open files  limited only by operating system
	Maximum keystrokes in keyboard macro                1,024
	Maximum fields that can be selected by a SQL
	SELECT statement                                      255
	
	Notes
	-----
	
	(1) The actual file size (in bytes) cannot exceed two gigabytes for
	single-user or exclusively opened multiuser .DBF files. Shared multiuser
	.DBF files with no indexes or .IDX indexes cannot exceed one gigabyte. All
	Visual FoxPro tables and shared multiuser 2.x .DBF files with structural
	.CDX indexes cannot exceed two gigabytes.
	
	(2) Limited by memory and available file handles. .CDX files use only one
	file handle.
	
	(3) A program module is one procedure. A program or application can contain
	an unlimited number of program modules.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
