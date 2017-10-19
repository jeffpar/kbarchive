---
layout: page
title: "Q153850: BUG: Access Driver DBQ=, DefaultDir= Incorrect with Large mdb"
permalink: /kb/153/Q153850/
---

## Q153850: BUG: Access Driver DBQ=, DefaultDir= Incorrect with Large mdb

	Article: Q153850
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.4
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.4 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If the path to an mdb file is over 85 bytes, then after a SQLDriverConnect call,
	the ends of the DBQ= and DefaultDir= strings in the szConnStrOut parameter will
	be overwritten.
	
	MORE INFORMATION
	================
	
	If you have an mdb file in a deeply nested directory whose path exceeds 85
	bytes, such as the following:
	
	  c:\nested01\nested02\nested03\nested04\nested05\nested06\nested07\nested
	  08\nested09\general.mdb
	
	and if you create a data source on it, then, after a SQLDriverConnect using that
	data source, the szConnStrOut variable will have two problems:
	
	1. The end of the DBQ= string will be overlaid with the literal DBQ.
	
	2. The end of the DefaultDir= string will be overlaid with the literal
	  DefaultDir
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Access 3.40.2505
	driver. Microsoft is researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, move the mdb file to a directory that has a shorter
	path name.
	
	Additional query words: 3.40.2505
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:3.4
	Issue type        : kbbug
	
	=============================================================================
	
