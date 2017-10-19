---
layout: page
title: "Q89672: Importing Dates from a Text File into FoxBASE+/Mac"
permalink: /kb/089/Q89672/
---

## Q89672: Importing Dates from a Text File into FoxBASE+/Mac

	Article: Q89672
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	To import dates into FoxBASE+/MAC from a text file, the dates must be
	in year-month-day order and include the century. For example, 19920823
	represents August 23, 1992.
	
	If dates in the file are in month/day/year (08/23/92) format, modify
	the structure of the database to place the date into a character data
	field, ten characters long. Import the text file into the database,
	then modify the database structure and change the field to the date
	field type.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
