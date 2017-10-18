---
layout: page
title: "Q155628: PRB: &quot;Save As&quot; Does Not Save a Stored Procedure on the Server"
permalink: kb/155/Q155628/
---

## Q155628: PRB: &quot;Save As&quot; Does Not Save a Stored Procedure on the Server

	Article: Q155628
	Product(s): Microsoft C Compiler
	Version(s): 4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbEEdition kbide kbVC kbVC420 kbVC500 kbVC600 kbGrpDSODBC
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.2, 4.2b 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Save As on the File menu in MSDEV to save a stored procedure, the
	stored procedure code will be saved as a text file on disk instead of being
	stored in the server database.
	
	CAUSE
	=====
	
	File.Save As is not intended for use in saving stored procedures to the server.
	
	RESOLUTION
	==========
	
	The resolution to this problem depends on your intention:
	
	If you are attempting to modify an existing stored procedure and save those
	modifications to the server to overwrite the original stored procedure code,
	then use the File.Save menu item.
	
	If you are attempting to save the stored procedure code to a new stored procedure
	on the server, then you can follow these steps:
	
	1. Insert a new stored procedure on the server by selecting the "Stored
	  Procedures" node in the Data View pane and right-clicking. When prompted,
	  specify a name for the target stored procedure that is different from the
	  name of any existing stored procedure.
	
	2. Copy the body of the stored procedure you want to duplicate and paste the
	  selection into the body of the new stored procedure.
	
	  Note: Be sure not to overwrite the name of the new stored procedure when
	  pasting code or you will experience the following error when you try to save
	  the stored procedure:
	
	  The database object <name of existing SP> already exists
	
	3. Make any additional modifications to the new stored procedure code, and then
	  use File.Save to save the new procedure to the server.
	
	MORE INFORMATION
	================
	
	When you click File.Save As, MSDEV brings up the Save As dialog box with the
	title of the edit window as the file name, allowing the user to save the stored
	procedure to disk as a text file with this name. If you save the procedure with
	this name, it is possible to later open both the text file and the stored
	procedure and to end up with two windows that have the same title. You cannot
	execute a stored procedure that has been saved in this manner.
	
	If you save the file with a .sql extension, MSDEV interprets this file name as a
	SQL script file and allows execution of it within MSDEV. However, you are not
	executing a stored procedure on the server when you execute such a file.
	Instead, the file name will result in execution of the full Transact SQL
	statement contained in the file, and the resulting attempt to create a procedure
	with the same name as an existing stored procedure will likely result in the
	error:
	
	  37000[Microsoft][ODBC SQL Server Driver][SQL Server]
	  Object 'your procedure name' group number 1 already exists in the database.
	  Choose another procedure name.
	
	If you save the modified stored procedure with the .sql extension and specify a
	new name for the stored procedure, you can then successfully execute the SQL
	script file to create a new stored procedure on the server.
	
	Additional query words: Enterprise
	
	======================================================================
	Keywords          : kbcode kbDatabase kbEEdition kbide kbVC kbVC420 kbVC500 kbVC600 kbGrpDSODBC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : :4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
