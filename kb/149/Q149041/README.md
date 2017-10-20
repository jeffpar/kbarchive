---
layout: page
title: "Q149041: PRB: Error 419 Occurs if RecordSet is Assigned to Data Control"
permalink: /kb/149/Q149041/
---

## Q149041: PRB: Error 419 Occurs if RecordSet is Assigned to Data Control

{% raw %}

	Article: Q149041
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Passing a Recordset object from a client to an OLE automation server (or vice
	versa) is allowed. However, this Recordset object cannot subsequently be
	assigned to a data control. Any attempt to do so results in error 419,
	"Permission to use object denied."
	
	CAUSE
	=====
	
	Notifications for the IConnectionPoint interface are not currently marshaled by
	OLE, so setting the Recordset property of a data control to a Recordset object
	that was passed in from another process fails at some point during
	initialization. All properties and methods of the Recordset object can be
	utilized normally, so code can be written to access the passed Recordset object
	and perform all desired DAO operations.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to reproduce problem
	--------------------------
	
	1. Create a minimal OLE server and a client that accesses the OLE server.
	  Step-by-step instructions that describe this type of functionality can be
	  found in the following article in the Microsoft Knowledge Base:
	
	  Q129801 How to Create and Use a Minimal OLE Automation Server
	
	  The following steps assume a client and server created from Q129801 for
	  clarity purposes. However, the following steps can be implemented in any
	  client and server to see the behavior described in this article.
	
	2. In the server project, add a form by clicking Form on the Insert menu. On
	  this new form, place a single data control.
	
	3. Add the following procedure to Class1 (assuming the form added in step 2 is
	  named Form1):
	
	        Public Sub SetRecordset(x As Recordset)
	           Set Form1.Data1.Recordset = x
	        End Sub
	
	4. Press F5 or click Start on the Run menu to start the OLE server.
	
	5. Load the client into another instance of Visual Basic.
	
	6. Add a single data control to Form1 of the client. Set the properties of the
	  data control to the following:
	
	  DatabaseName = BIBLIO.MDB
	  RecordSource = Authors
	
	7. Change the Form_Click event to contain the following code:
	
	        Private Sub Form_Click()
	           Dim x As Object
	           Set x = CreateObject("Project1.Class1")
	           Data1.Refresh
	           x.SetRecordset Data1.Recordset
	           Set x = Nothing
	        End Sub
	
	8. Press F5 or click Start on the Run menu to start the client application.
	  Click on the form to execute the code added in step 7. Error 419 is displayed
	  on the Set statement in the OLE server (you may need to minimize the client
	  to see this error).
	
	Additional query words: kbVBp kbdse kbDSupport kbVBp400
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
