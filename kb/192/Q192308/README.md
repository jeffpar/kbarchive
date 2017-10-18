---
layout: page
title: "Q192308: PRB: View Designer Misreads Date Criteria in ODBC Date Format"
permalink: kb/192/Q192308/
---

## Q192308: PRB: View Designer Misreads Date Criteria in ODBC Date Format

	Article: Q192308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After saving and closing a remote view with a date criteria in the Open Database
	Connectivity (ODBC) Date Format, the View Designer does not read the criteria
	correctly. For example:
	
	  {d 'yyyy-mm-dd'}
	
	RESOLUTION
	==========
	
	Use the Create SQL View command to create and modify views. For an existing
	view, the following code can be used to capture the existing SQL statement:
	
	     MyFile=CURDIR() + 'sqltxt.txt'
	     SET ALTERNATE TO &MyFile ADDITIVE
	     SET ALTERNATE ON
	     ?DBGETPROP("Test1","View","SQL")
	     SET ALTERNATE TO
	     SET ALTERNATE OFF
	     MODI FILE &MyFile NOWAIT
	
	One other option is to modify the view in the View Designer. This necessitates
	entering the date criteria again before saving.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 6.0, this problem is further exacerbated by the new setting,
	SET STRICTDATE. The default setting of SET STRICTDATE causes the following error
	when trying to open the view definition in the View Designer:
	
	  Date/DateTime contains illegal characters.
	
	To avoid this error and modify the view in the View Designer, issue the following
	command from the Command window:
	
	     SET STRICTDATE TO 0
	
	Please note that to save any changes in the View Designer to this remote view,
	the date criteria must be re-entered. This is true for all versions of Visual
	FoxPro listed in the "Applies to" section of this article.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a data source to a SQL Server Pubs database where you have
	  permissions.
	
	2. Run the following code in a program file:
	
	        CREATE DATABASE test
	        CREATE SQL VIEW Test1 REMOTE CONNECTION MyPubsDSN AS ;
	           SELECT * FROM sales WHERE ord_date > {d '1993-12-30'}
	        USE Test1
	        BROWSE NOWAIT
	        *SET STRICTDATE TO 1 && Uncomment For Visual FoxPro 6.0.
	        MODIFY VIEW Test1
	        MESSAGEBOX(DBGETPROP("test1","view","sql"))
	        *SET STRICTDATE TO 0 && Uncomment For Visual FoxPro 6.0.
	        *MODIFY VIEW Test1 && Uncomment For Visual FoxPro 6.0.
	
	  Notice that the date criteria displayed in the View Designer is:
	
	  { / / }
	
	  It should be:
	
	  {d '1993-12-30'}
	
	Note that the message box displays the correct criteria.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
