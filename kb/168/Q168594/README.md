---
layout: page
title: "Q168594: HOWTO: Use a Date Filter in an Oracle Remote View"
permalink: /kb/168/Q168594/
---

## Q168594: HOWTO: Use a Date Filter in an Oracle Remote View

	Article: Q168594
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbDatabase kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a date field as a filter criteria in a remote view to an Oracle
	table, the date value must be specified using the following format:
	
	  'YYYY-MM-DD HH:MM:SS'
	
	MORE INFORMATION
	================
	
	The following example filter criteria returns all records from the table where
	the date field contains a date later than January 1, 1996:
	
	     Date_Field > '1996-01-01 00:00:00'
	
	NOTE: The time portion of this date must be included. If the time is not needed,
	use 00:00:00 as the time portion of the datetime expression as in the above
	example.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbDatabase kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
