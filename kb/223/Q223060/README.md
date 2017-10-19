---
layout: page
title: "Q223060: FIX: T-SQL Shows Incorrect Parameters in Local Variables Window"
permalink: /kb/223/Q223060/
---

## Q223060: FIX: T-SQL Shows Incorrect Parameters in Local Variables Window

	Article: Q223060
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbSQLServ kbTSQL kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSV
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Visual Basic T-SQL Debugger to debug SQL Server 7.0 stored
	procedures, you might see incorrect values for input parameters in the Local
	Variables window.
	
	RESOLUTION
	==========
	
	To resolve this problem, install Visual Studio 6.0 Service Pack 3 on the client
	(Visual Basic) computer. You do not need to install the updated T-SQL Debugger
	components on the server (SQL Server) computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard Exe project. Form1 is created by default.
	
	2. Open the Data View window.
	
	3. Create a Data Link to a SQL Server 7.0 Pubs database.
	
	4. Open the Stored Procedures folder.
	
	5. Right-click the reptq3 stored procedure and select Debug.
	
	6. Populate the three parameters.
	
	7. Step into the stored procedure.
	
	  You'll see that all three parameters in the Local Variables window have the
	  same value.
	
	  This problem only occurs with SQL Server 7.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbSQLServ kbTSQL kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
