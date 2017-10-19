---
layout: page
title: "Q220888: PRB: ErrMsg Returned w/Server-Side Cursorlocation for MSAccess"
permalink: /kb/220/Q220888/
---

## Q220888: PRB: ErrMsg Returned w/Server-Side Cursorlocation for MSAccess

	Article: Q220888
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbDSupport kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Microsoft Access (MSAccess) to set the Command object CursorLocation
	property to server-side, you may get the following error message when you invoke
	the command:
	
	  (-2147220992) The application is using arguments that are of the wrong type,
	  are out of acceptable range, or are in conflict with one another.
	
	CAUSE
	=====
	
	You cannot get the AutoNumber value after insert unless you use a server-side
	cursor with MSAccess OLE-DB Provider. The DataEnvironment.Command object allows
	the CursorLocation to be set to server-side with an MSAccess database but does
	not work when it is invoked.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must use the DataEnvironment.rsCommand object to
	specify a server-side cursor in order to return the AutoNumber value after
	insert. Set the CursorLocation to adUseClient for the DataEnvironment.Command
	object. Before you invoke the DataEnvironment.Command object, specify the cursor
	location of the recordset object with DataEnvironment.rsCommand.CursorLocation =
	adUseServer, and then refer to the rsCommand object for inserting a new row. See
	the code sample in the "More Information" section for details.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project, and configure a DataEnvironment connection
	  to the Nwind.mdb sample database with the Microsoft OLE-DB 3.51 Provider for
	  MSAccess.
	
	2. Add a Command object, and then select all of the fields of the Employee table
	  that contain an AutoNumber field.
	
	3. Use the following code as a guide to retrieve the AutoNumber value after
	  inserting a row:
	
	      'Need to set CursorLocation for the rsCommand object before invoking DE.Command...
	      DE.rsCommand1.CursorLocation = adUseServer
	      DE.Command1
	
	      DE.rsCommand1.AddNew
	      'Update some required fields in the recordset to test...
	      DE.rsCommand1.Fields("LastName").Value = "LastName"
	      DE.rsCommand1.Fields("FirstName").Value = "FirstName"
	      DE.rsCommand1.Fields("BirthDate").Value = #1/1/1998#
	      DE.rsCommand1.Update
	      'Print the new AutoNumber value to the Immediate window...
	      Debug.Print "AddressID=" & DE.rsCommand1.Fields("EmployeeID").Value
	      DE.rsCommand1.Close
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q195910 INFO: Identity (AutoIncrement) Columns in ADO or RDS
	
	  Q190370 PRB: AutoNumber Field Is Not Incremented When Using ADO
	
	Additional query words: -2147220992
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbDSupport kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
