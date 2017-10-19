---
layout: page
title: "Q258676: PRB: Inconsistent Behavior Using rdoParameter's Value Property"
permalink: /kb/258/Q258676/
---

## Q258676: PRB: Inconsistent Behavior Using rdoParameter's Value Property

	Article: Q258676
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbRDO _IK12473 kbGrpDSVBDB kbDSupport kbGrpDSODBC
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Visual Basic 5.0 to Visual Basic 6.0 and use an RDO Query
	with a parameter, a behavioral change may cause the following error:
	
	  S1090: [Microsoft][ODBC Microsoft Access Driver]Invalid string or buffer
	  length
	
	WORKAROUND
	==========
	
	The workaround for this change in behavior is to ensure that rdoParameters are
	initialized with an empty string or NULL value prior to executing the rdoQuery.
	
	MORE INFORMATION
	================
	
	When using the MSRDO20.dll version 5.01.4319 with Microsoft Access ODBC Driver
	version 4.00.4202.00, it was not necessary to initialize any parameters when
	using an RDO Query. The parameters would use a default value and successfully
	return the first record.
	
	When upgrading to MSRDO20.DLL version 6.00.8450, it became necessary to
	explicitly initialize the parameters or else the above error message would be
	generated.
	
	Steps to Reproduce Behavior
	---------------------------
	
	On a computer that has Visual Basic 6.0 installed, MSRDO20.DLL version 6.00.8450
	and Microsoft Access Driver version 4.00.4202.00 (MDAC 2.1SP2), do as follows:
	
	1. Create a new Standard Exe project. Form1 is created by default.
	
	2. Set a reference to the Microsoft Remote Data Objects 2.0.
	
	3. Copy the code into the code module for Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	    Dim cn As rdoConnection, qry1 As rdoQuery, rs As rdoResultset
	    Dim sResults As String, i As Integer
	
	  Set cn = New rdoConnection
	    With cn
	        .Connect = "DSN=biblio;"
	        .EstablishConnection rdDriverCompleteRequired
	    End With
	    Set qry1 = cn.CreateQuery("QUERY1", "Select * from PUBLISHERS where Name like ? or City like '%'")
	    'qry1(0) = "" 
	    Set rs = qry1.OpenResultset
	    For i = 0 To 3
	      sResults = sResults & ", " & rs(i).Name & ":" & rs(i)
	    Next
	    debug.print  "First Record: " & Mid(sResults, 3)
	  End Sub
	
	4. Create a DSN named "Biblio" (without the quotation marks) and point it to the
	  Microsoft Access Biblio sample database.
	
	5. Press the F5 key to run the code. You should see the following error:
	
	  S1090: [Microsoft][ODBC Microsoft Access Driver]Invalid string or buffer
	  length
	
	6. Uncomment the following line of code:
	
	  'qry1(0) = ""
	
	7. Press F5, and check the debug window to see that the message, "First Record:
	  PubID:1, Name:SAMS" was returned successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbRDO _IK12473 kbGrpDSVBDB kbDSupport kbGrpDSODBC 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
