---
layout: page
title: "Q134880: How to Determine the Database to Which a Table Belongs"
permalink: /kb/134/Q134880/
---

## Q134880: How to Determine the Database to Which a Table Belongs

{% raw %}

	Article: Q134880
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are cases where a developer needs to be able to determine programmatically
	which database contains the table that is open. The CURSORGETPROP() function,
	with 'DATABASE' (including the quotation marks) as the first parameter, returns
	this information.
	
	MORE INFORMATION
	================
	
	The CURSORGETPROP() function returns the settings of various properties of a
	Visual FoxPro table or cursor. For example, to determine the database to which a
	table belongs, you can use this code:
	
	     USE customer
	     WAIT WINDOW "The table in the current workarea is contained by " + ;
	        CURSORGETPROP('DATABASE') + ' database'
	
	Following is a list of all the properties for which CURSORGETPROP() returns
	settings:
	
	BatchUpdateCount
	Buffering
	ConnectHandle
	ConnectName
	Database
	FetchMemo
	FetchSize
	KeyFieldList
	MaxRecords
	SendUpdates
	SourceName
	SourceType
	SQL
	Tables
	UpdatableFieldList
	UpdateNameList
	UpdateType
	UseMemoSize
	WhereType
	
	For more information on using CURSORGETPROP(), please see the Visual FoxPro Help
	file.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
