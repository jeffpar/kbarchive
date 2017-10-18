---
layout: page
title: "Q124657: INF: Text Driver Needs Directory Before Define Format Enabled"
permalink: kb/124/Q124657/
---

## Q124657: INF: Text Driver Needs Directory Before Define Format Enabled

	Article: Q124657
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses why you must select a directory before the Define Format
	button is enabled when adding a new data source for the ODBC Text Driver version
	2.0.
	
	MORE INFORMATION
	================
	
	When you add a text data source for the ODBC Text Driver version 2.0, you can
	define the format of the text files that this data source is going to be
	associated with. This can be done by selecting the Define Format button under
	Options in the ODBC Text Setup dialog box.
	
	The text driver treats each text file as a table. Defining the format of a text
	file lets the driver know how many columns are there in this table, what their
	data types are, etc. The Define Format option is not enabled until you select
	Select Directory to specify the directory that is going to be used by the
	driver.
	
	The reason for this can be seen by looking at how the text driver stores the
	format information, also called as schema information. All the schema
	information associated with a text data source is stored in a file called
	SCHEMA.INI. The requirement is that the text driver should be able to locate
	this file when an application connects to the text data source.
	
	To be able to do this, the text driver needs to know during data source setup
	time, the directory that the text files (tables) are going to be located in.
	With this information, the driver will create the SCHEMA.INI file in the same
	directory.
	
	If you do not specify a directory, then the driver has no way of determining at
	connect time where the SCHEMA.INI file is located. Hence, the driver will not
	allow you to define the format. As a result, Define Format is grayed out.
	
	NOTE: This button is still grayed out when you select the Use Current Directory
	button. This is because Use Current Directory does not give the driver a
	definite directory to write the SCHEMA.INI. Although it can write SCHEMA.INI to
	the current directory, when an application uses the DSN, the current directory
	may be in another directory and the SCHEMA.INI is missing.
	
	Additional query words: 2.00.2317 ODBC Desktop Database Drivers Pack MFC VISUAL C++ FOXPRO WORD EXCEL Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
