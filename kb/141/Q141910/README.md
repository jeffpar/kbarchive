---
layout: page
title: "Q141910: BUG: Validate Database Dialog Allows Choice of Invalid Table"
permalink: /kb/141/Q141910/
---

## Q141910: BUG: Validate Database Dialog Allows Choice of Invalid Table

{% raw %}

	Article: Q141910
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 25-APR-2000
	
	3.00 3.00b 5.00
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Visual FoxPro detects that a table within a .dbc file has been deleted, the
	Locate file dialog box allows you to add an existing table from the same .dbc
	that has the identical structure as the deleted file. This file then appears in
	a Browse window with the name of the deleted file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you try to modify or browse a deleted table contained in a database, Visual
	FoxPro detects that the file no longer exist. The Locate File dialog box appears
	and asks for the location of the missing table. If you choose a table that is
	part of the database and has the same structure as the deleted file, Visual
	FoxPro accepts that table into the database under the name of the deleted table.
	Visual FoxPro does not detect that you are adding a table already contained in
	the database container back in under another name.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set the default to the \Samples\Data subdirectory and open Customer.dbf.
	
	2. Copy Customer.dbf to two files by typing the following in the Command window:
	
	  Copy to Test1.dbf
	  Copy to Test2.dbf.
	
	3. Create a database named Test.dbc.
	
	4. Add the Test1 and Test2 tables to the Test database.
	
	5. Type CLOSE ALL in the Command window to close all open files.
	
	6. Open either File Manager or Explorer, and delete the Test2.dbf file.
	
	7. In Visual FoxPro, open the Test.dbc, and double-click Test2.dbf.
	
	8. A Validate Database dialog appears stating:
	
	  The table 'Test2' cannot be found along the specified path. Would you like to
	  locate the file or delete this object from the database?
	
	9. Click Locate, select Test1.dbf, and click OK.
	
	Visual FoxPro opens Test1.dbf in a Browse window entitled Test2. However, the
	Locate dialog box will not add a table with a different structure from the same
	database or a table from another database. This triggers an error message.
	
	Additional query words: VFoxWin kbbuglist5.00 buglist3.00 buglist3.00b kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
