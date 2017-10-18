---
layout: page
title: "Q140770: PRB: Accessing Visual FoxPro 3.0 Files from Visual Basic 4.0"
permalink: kb/140/Q140770/
---

## Q140770: PRB: Accessing Visual FoxPro 3.0 Files from Visual Basic 4.0

	Article: Q140770
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft FoxPro for Windows database file by
	connecting the database file to a Data Control in a Visual Basic version 4.0
	program, the DatabaseName dialog box selects only files with the .dbf file name
	extension. Moreover, if you select a file with the .dbc file name extension, the
	DatabaseName property of the Data control displays the path without the file
	name.
	
	CAUSE
	=====
	
	This behavior occurs because the Data control in Visual Basic assumes that a
	.dbc file is an unlinked FoxPro 3.0 table.
	
	The 16-bit edition of Visual Basic version 4.0 cannot read files in the Visual
	FoxPro version 3.0 format.
	
	RESOLUTION
	==========
	
	Use the following steps to work around this problem:
	
	1. Set the Connect property of the Data1 Data control to FoxPro DBC.
	
	2. Add the FoxPro 3.0 database file name to the path in DatabaseName property of
	  the Data control. This file must have the .dbc file name extension.
	
	3. Select a table in the RecordSource property of the Data control. You can now
	  use bound controls on this recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic version 4.0 for
	Windows. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	FoxPro 3.0 Databases and their associated linked tables are read-only in the
	32-bit edition of Visual Basic version 4.0. The 16-bit edition of Visual Basic
	version 4.0 cannot read files in the Visual FoxPro version 3.0 format with the
	.dbc or .dbf file name extension. FoxPro creates three types of files that
	Visual Basic can open through Data Access Methods.
	
	- Databases: Has the file name extension .dbc.
	
	- Linked Tables: Has the file name extension .dbf.
	
	- Unlinked Table: Also has the file name extension .dbf.
	
	When you set the Connect property of the Data control to FoxPro 3.0, clicking the
	down arrow of the DatabaseName property displays a dialog box that looks for
	files with the .dbf file name extension. The Data control assumes that FoxPro
	3.0 files are unlinked tables, even if the file is a linked table or a
	database.
	
	If you get the error, "Cannot Access the Bound FoxPro 3.0 bound DBF file," the
	Data control is attempting to access a linked table as a stand alone table.
	Follow the steps shown in the Workaround section to eliminate this error
	message.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0, or if it is already running,
	  click New Project on the File menu.
	
	2. From the toolbox, add a Data control button to the Form1 form.
	
	3. Click the Connect property of the Data Control and then click the down arrow
	  to select FoxPro 3.0.
	
	4. Click the DatabaseName property of the Data Control and then click the
	  ellipses button to display the DatabaseName dialog box. Note the default file
	  name extension is .dbf.
	
	5. Select a .dbc file and click the OK button. Note that Visual Basic has
	  truncated the file name out of the database name text box.
	
	Additional query words: update readonly
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbFoxproSearch kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
