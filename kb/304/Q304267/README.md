---
layout: page
title: "Q304267: FIX: Error in VBA6.DLL When Concatenating ADO Recordset Field"
permalink: kb/304/Q304267/
---

## Q304267: FIX: Error in VBA6.DLL When Concatenating ADO Recordset Field

	Article: Q304267
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,2.6 SP1,6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbVBp600fix kbGrpDSVBDB kbGrpDSMDAC kbDSupport
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - Microsoft Data Access Components versions 2.6, 2.6 SP1, 2.7 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - Microsoft Data Access Components versions 2.6, 2.6 SP1, 2.7 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, used with:
	   - Microsoft Data Access Components versions 2.6, 2.6 SP1, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reference a field value in an ActiveX Data Objects (ADO) recordset when
	BOF or EOF is true, if you use late binding, and if you concatenate it to a
	string, an unhandled exception occurs in VBA6.DLL and causes an error.
	
	Under Windows 95 or Windows 98, you receive the following error message:
	
	  VB6 Has Caused An Error in VBA6.DLL
	
	Under Windows NT 4.0, you receive the following Dr. Watson error:
	
	  An application error has occurred and an application error log is being
	  generated. VB6.EXE. Exception: access violation (0xc0000005) address
	  0x0fa91abd
	
	Under Windows 2000, Visual Basic quits.
	
	CAUSE
	=====
	
	If you pass a reference to an ADO field value when BOF or EOF is true, the
	following error message normally appears:
	
	  Either BOF or EOF is true, or the current record has been deleted. Requested
	  operation requires a current record.
	
	However, if you reference a field value in an ADO recordset when BOF or EOF is
	true, if you use late binding, and if you concatenate it to a string, an
	unhandled exception occurs in VBA6.DLL and causes the above-mentioned error
	messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual Basic 6.0 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Place a command button on Form1.
	
	3. Add the following code to the button's click event:
	
	    Dim strConn As String
	    Dim strSQL As String
	    
	    strConn = "provider=sqloledb;data source=stevenbr01;initial catalog=northwind;user id=sa;"
	    strSQL = "SELECT * FROM Customers"
	    
	    Set cn = CreateObject("ADODB.Connection")
	    Set rs = CreateObject("ADODB.Recordset")
	    
	    cn.Open strConn
	    
	    rs.CursorLocation = 3
	    rs.Open strSQL, cn, 1, 1
	    
	    While Not rs.EOF
	      For i = 0 To rs.fields.Count - 1
	        If Not IsNull(rs.fields(i).Value) Then
	          Debug.Print rs.fields(i).Value & ""
	        End If
	      Next
	      rs.movenext
	    Wend
	     
	    Debug.Print "value " & rs.fields("contactname") '<this fails
	    'Debug.Print rs.fields("contactname") '<this works
	
	4. Modify the ADO connection string in the strConn variable as appropriate for
	  your environment.
	
	5. Run the project, and click the command button. Notice that data scrolls by in
	  the Immediate window. When the recordset is fully read, you receive the
	  above-mentioned error messages.
	
	6. To see the error that should occur under these circumstances, comment the
	  first Debug.Print line and uncomment the second one, which does not
	  concatenate the field value to the word "value " in the print statement.
	  Then, rerun the project.
	
	
	Additional query words: VBA6.dll
	
	======================================================================
	Keywords          : kbVBp600bug kbVBp600fix kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :2.6,2.6 SP1,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
