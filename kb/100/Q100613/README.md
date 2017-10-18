---
layout: page
title: "Q100613: FIX: Data Access Setup Can Give Incorrect Error Message"
permalink: kb/100/Q100613/
---

## Q100613: FIX: Data Access Setup Can Give Incorrect Error Message

	Article: Q100613
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDatabase kbIISAMkbbuglist
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding an SQL server with the Microsoft ODBC Setup program, you may receive
	the following incorrect message when the server name is actually correct:
	
	  The server <your server name> was not found on the network. Are you
	  sure you want to use it?
	
	CAUSE
	=====
	
	The cause of this problem has not yet been determined. We are researching it.
	
	
	WORKAROUND
	==========
	
	Although Visual Basic Data Access Setup generates this incorrect message, Visual
	Basic still adds the correct information to the ODBC.INI file and the ODBC
	driver is set up correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the Data Access Setup program.
	
	2. Select SQL Server in the Install Drivers dialog box. Then click the OK
	  button. If the ODBC drivers were installed previously, you will get a message
	  box that asks if you want to replace your driver; choose Yes.
	
	3. Select the Add option in the Data Sources dialog box.
	
	4. Select SQL Server in the Add Data Source dialog box, and click the OK button.
	
	5. In the ODBC SQL Server Setup dialog box, type the name of the data source in
	  the Data Source Name field and a valid SQL server name in the Server field.
	
	6. Click the OK button. At this point, Visual Basic may generate a message box
	  with the following text
	
	  The server <your server name> was not found on the network. Are you
	  sure you want to use it?
	
	7. Click the Yes button, and the setup will continue as usual.
	
	Additional query words: buglist3.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          : kbDatabase kbIISAM kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
