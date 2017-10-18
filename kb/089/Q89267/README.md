---
layout: page
title: "Q89267: Using the APPEND Command in FoxBASE+"
permalink: kb/089/Q89267/
---

## Q89267: Using the APPEND Command in FoxBASE+

	Article: Q89267
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to the APPEND command in FoxBASE+:
	
	- The APPEND BLANK command locks only the file header.
	
	- The APPEND FROM command does not support the dBASE III PLUS IMPORT/EXPORT
	  command. However, the APPEND FROM and COPY TO commands support reading and
	  creating ASCII text files with TYPE DELIMITED or TYPE SDF. FoxBASE+ does not
	  directly support importing and exporting DIF, SYLK, or other file types.
	
	- To load a DATE field type from an ASCII field with the APPEND FROM command,
	  the date must be stored as YYYYMMDD.
	
	- The APPEND FROM command cannot import a memo field.
	
	- The APPEND FROM SDF command loads fixed-length records that are separated by
	  spaces in a columnar form. Records are delimited by a carriage return and a
	  linefeed pair.
	
	- The APPEND FROM DELIMITED command uses quotation marks to delimit character
	  fields in an ASCII text file, unless the SET DELIMITER TO command specifies a
	  different delimiter. Commas separate the fields, unless the TYPE BLANK
	  command specifies that fields are separated by blanks.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
