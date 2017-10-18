---
layout: page
title: "Q145752: How to Eliminate RI Rule Code from a .DBC File"
permalink: kb/145/Q145752/
---

## Q145752: How to Eliminate RI Rule Code from a .DBC File

	Article: Q145752
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to remove the Referential Integrity rules from a
	database container (.dbc file) object.
	
	MORE INFORMATION
	================
	
	There may be circumstances where you have added Referential Integrity (RI) to a
	database but then later decide you no longer want the RI code in the database.
	You can start over after deleting all the old RI rules.
	
	the safest (and preferred) way to do this is to go into the Referential Integrity
	builder and set all options (Update, Delete, and Insert) on the tables to
	Ignore. Then generate the RI code again. This method will eliminate the stored
	procedures in the database. This process is tedious, however, and if the .dbc
	file contains many tables, it may take a long time. Also, the RI Builder puts
	some default code into the stored procedures even when Ignore is chosen, but the
	code isn't used unless RI code (Cascade or Ignore) is generated.
	
	CAUTION: The following method will remove any and all stored procedures from your
	database container. This means that if you have any custom code in SPs, the code
	will be deleted. Therefore, you should use the following method only in cases
	where you only want to strip out RI code.
	
	Alternatively, you can open the .dbc as a table and manipulate the code manually.
	The following commands create the same end result as the first method:
	
	     REPLACE ALL Riinfo with ''
	     REPLACE CODE WITH "" FOR Objectname='StoredProceduresSource' or ;
	        Objectname='StoredProceduresObject'
	
	Additional query words: VFoxWin delete
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
