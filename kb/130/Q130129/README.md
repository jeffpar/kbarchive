---
layout: page
title: "Q130129: How to Open a Database or Table in Visual FoxPro"
permalink: /kb/130/Q130129/
---

## Q130129: How to Open a Database or Table in Visual FoxPro

{% raw %}

	Article: Q130129
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can use the user interface or command methods to open
	databases and tables. There are two types of tables - those contained within a
	database and those that are free tables independent of a database.
	
	If you attempt to open a table that is part of a database without the database
	open, Visual FoxPro opens the database for you.
	
	MORE INFORMATION
	================
	
	Opening Databases
	-----------------
	
	To open a database through the user interface in Visual FoxPro, choose Open from
	the File menu or click the Open file icon on the main Visual FoxPro toolbar.
	When the Open dialog box appears, select Database (*.DBC) from Files of Type
	popup. To use the database, double-click it, or select it, and click OK.
	
	To open a database by command, use the OPEN DATABASE command. This command allows
	you to open a database from the Command window or during program execution.
	There are several options that the OPEN DATABASE command can accept. The
	following examples show how to open a database with the OPEN DATABASE command:
	
	     OPEN DATABASE ?
	     OPEN DATA TASTRADE.DBC EXCL
	     OPEN DATA SAMPLE.DBC SHARED
	
	For More information on the OPEN DATABASE command, consult the Visual FoxPro
	"Language Reference" Manual or type HELP OPEN DATABASE in the Visual FoxPro
	Command window.
	
	Opening Tables
	--------------
	
	To open a table through the user interface in Visual FoxPro, choose Open from the
	File menu, or click the Open file icon on the main Visual FoxPro toolbar. When
	the Open dialog box appears, select Table (*.DBF) from Files of Type popup. To
	use the table, double-click it, or select it, and click OK.
	
	To open a table by command, use the USE command. This command allows you to open
	a table from the Command window or during program execution. There are several
	options that the USE command can accept. The following examples show how to open
	a table with the OPEN DATABASE command:
	
	        USE ?
	        USE TASTRADE.DBF EXCL
	        USE C:\VFP\DATA\SAMPLE.DBF SHARED
	
	For More information on the USE command, consult the Visual FoxPro "Language
	Reference" Manual or type HELP USE in the Visual FoxPro Command window.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
