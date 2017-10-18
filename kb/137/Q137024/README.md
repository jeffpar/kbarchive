---
layout: page
title: "Q137024: PRB: Asterisks Don't Hide an RDC Password Set in Design Time"
permalink: kb/137/Q137024/
---

## Q137024: PRB: Asterisks Don't Hide an RDC Password Set in Design Time

	Article: Q137024
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Password property of the RemoteData control (RDC) at design
	time, it is possible for others to read the password on your screen as it is
	entered because the password is not filtered by asterisks. When the ODBC dialog
	box does hide the password by converting it into asterisks.
	
	CAUSE
	=====
	
	The RDC does not control the edit field in the Property window and therefore
	cannot force asterisks to be displayed.
	
	RESOLUTION
	==========
	
	Passwords that need to be protected as sensitive information should not be coded
	into the Properties window of the RemoteData control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a RemoteData control on Form1, and set the Connect property of the
	  RemoteData control to ODBC.
	
	3. Type a value into the Password property of the RemoteData control. Note that
	  the password is readable.
	
	4. Run the program. After you select a DataSource, the ODBC driver manager
	  displays the login dialog, and the password is displayed as asterisks.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
