---
layout: page
title: "Q169155: FIX: SET ANSI ON Default Setting in VFPODBC Driver"
permalink: /kb/169/Q169155/
---

## Q169155: FIX: SET ANSI ON Default Setting in VFPODBC Driver

	Article: Q169155
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Queries with filter criteria run through the Visual FoxPro ODBC (VFPODBC) driver
	could return fewer records than the same query run in Microsoft Visual FoxPro.
	
	CAUSE
	=====
	
	The VFPODBC driver defaults SET ANSI to ON where the default for SET ANSI in
	Microsoft Visual FoxPro is OFF. This setting cannot be changed in the VFPODBC
	driver.
	
	RESOLUTION
	==========
	
	To work around not being able to use SET ANSI OFF for partial matches, you can
	either use wildcards in the SQL Select statement, or create an OLE Automation
	Server in Microsoft Visual FoxPro to manipulate the data in the Microsoft Visual
	FoxPro database.
	
	Visual FoxPro 6.0 ships with a new Visual FoxPro driver, version 6.00.8167, that
	fixes this problem.
	
	Wildcard Example
	----------------
	
	In the example given in the Steps to Reproduce Behavior section below, replace
	the line:
	
	     ?SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id = "A"','cur1')
	
	with the line:
	
	     ?SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id LIKE "A%"','cur1')
	
	and the line:
	
	     ?SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id = "A"','cur2')
	
	with the line:
	
	     ?SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id LIKE "A%"','cur2')
	
	When the above lines are substituted into the sample code below, each Browse
	window should have four records.
	
	Note that the above workaround will not be fully Rushmore optimized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	In Drvvfp.hlp (the VFPODBC Help file), there are references to the SET ANSI
	command being supported in the VFPODBC driver. While issuing this command to the
	ODBC driver does not return an error, it does not affect the SET ANSI setting.
	
	Drvvfp.hlp also lists the SET ANSI command in the list of unsupported commands.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following from a program in Microsoft Visual FoxPro:
	
	     CLOSE DATABASES ALL
	     CLEAR ALL
	     CLEAR
	     *Create the datasource pointed to the sample data
	     DECLARE Integer SQLConfigDataSource in odbccp32.dll Integer, Integer, ;
	        String, String
	
	     lcPath = HOME()+'samples\data'  && Check this path and make sure
	                                     && it points to the folder containing
	                                     && the Customer table.
	
	     settings="DSN=VFP Tables"+chr(0)+;
	               "Description=VFP Desc"+chr(0)+;
	               "SourceDB="+lcPath+chr(0)+;
	               "SourceType=DBF"
	
	     ? SQLConfigDataSource(0,1,"Microsoft Visual FoxPro Driver",settings)
	
	     nh = SQLCONNECT('VFP Tables')
	     ? nh
	     ? SQLEXEC(nh,'SET ANSI OFF')
	     ? SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id = "A"','cur1')
	     BROWSE LAST NOWAIT
	     ? SQLEXEC(nh,'SET ANSI ON')
	     ? SQLEXEC(nh,'SELECT * FROM Customer WHERE Cust_id = "A"','cur2')
	     BROWSE LAST NOWAIT
	     ? SQLDISCONNECT(nh)
	
	Both Browse windows should have no records.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
