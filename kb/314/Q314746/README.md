---
layout: page
title: "Q314746: BUG: Access Violation Occurs in ADO When You Run Executable File"
permalink: /kb/314/Q314746/
---

## Q314746: BUG: Access Violation Occurs in ADO When You Run Executable File

	Article: Q314746
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.5,2.6,2.7,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 02-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an access violation in ADO under the following circumstances:
	
	1. Call the Debug.Print method on certain properties of the ADO Recordset
	  object.
	
	2. Compile the project.
	
	3. Run the file as an executable (.exe) file.
	
	CAUSE
	=====
	
	This problem occurs because the compiler does not remove the Debug.Print
	statement correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Remove the Debug.Print statement from the code.
	
	- Store the property value in a variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. Add two CommandButton controls to the form. Specify the caption "Open
	  Recordset" for Command1. Specify the caption "Close Application" for
	  Command2.
	
	3. On the Project menu, click Reference, and then select the "Microsoft ActiveX
	  Data Object 2.x" check box.
	
	4. Add the following code to the form:
	
	  Option Explicit
	  Dim cn As ADODB.Connection
	
	  Private Sub Command1_Click()
	      Dim rs As ADODB.Recordset
	      Set rs = New ADODB.Recordset
	      
	      rs.Open "Select * from Customers", cn, adOpenDynamic, adLockBatchOptimistic
	      
	      Debug.Print "Update: " & rs.EOF
	      
	      rs.Close
	      Set rs = Nothing
	      
	  End Sub
	
	  Private Sub Command2_Click()
	      Unload Me
	  End Sub
	
	  Private Sub Form_Load()
	      Set cn = New ADODB.Connection
	      cn.Open "User ID=sa;password=sa;Initial Catalog=pubs;Data Source=mySQLServer"
	  End Sub
	
	5. Modify the connection string as appropriate for your environment.
	
	6. Compile and run the executable file.
	
	7. Click Open Recordset.
	
	8. Click Close Application. Notice that an access violation occurs.
	
	9. To resolve this problem, use one of the following methods:
	
	   - Comment out the Debug.Print line of code, and then repeat steps 5 through
	     7.
	
	   - Replace the code
	
	      Debug.Print "Update: " & rs.EOF
	
	     with the following code:
	
	  Dim b as boolean
	  b = rs.eof
	  Debug.Print "Update: " & b
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5 kbADO260SP1 kbADO270
	Version           : :2.1,2.5,2.6,2.7,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
