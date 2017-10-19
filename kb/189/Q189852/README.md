---
layout: page
title: "Q189852: HOWTO: Change Databindings on the Fly"
permalink: /kb/189/Q189852/
---

## Q189852: HOWTO: Change Databindings on the Fly

	Article: Q189852
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changing data bindings for a textbox requires changing the DataSource and the
	the DataField. Set the DataField property of the textbox to Empty prior to
	resetting the DataSource and the DataField. If this is not done you will
	encounter the following error.
	
	  "Run time Error 545
	  Unable to bind to field DataMember: 'fieldname'"
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a standard.exe project. Form1 is created by default. Check the
	  following under project references:
	
	     Microsoft ActiveX Data Objects 2.0 Library
	     Microsoft Data Binding Collection
	
	2. Place a Textbox and a CommandButton on the form.
	
	3. Paste the following code in the code window for the form:
	
	        Dim rsProducts As ADODB.Recordset
	        Dim rsCustomers As ADODB.Recordset
	
	        Private Sub Command1_Click()
	
	          If Text1.DataField = "CompanyName" Then
	            Text1.DataField = Empty
	            Set Text1.DataSource = rsProducts
	            Text1.DataField = "ProductName"
	          Else
	            Text1.DataField = Empty
	            Set Text1.DataSource = rsCustomers
	            Text1.DataField = "CompanyName"
	          End If
	
	        End Sub
	
	        Private Sub Form_Load()
	         'set up recordsets
	         Set rsProducts = New ADODB.Recordset
	         Set rsCustomers = New ADODB.Recordset
	         rsProducts.Open "Select * from Products", _
	                       "Provider=Microsoft.Jet.OLEDB.3.51; " & _
	                       "Data Source=c:\school\nwind.mdb", _
	                       adOpenstatic, adLockOptimistic
	         rsCustomers.Open "Select * from Customers", _
	                       "Provider=Microsoft.Jet.OLEDB.3.51; " & _
	                       "Data Source=c:\school\nwind.mdb", _
	                       adOpenstatic, adLockOptimistic
	
	         Set Text1.DataSource = rsCustomers
	         Text1.DataField = "CompanyName"
	
	        End Sub
	
	4. Run the form and press the CommandButton repeatedly. It will alternate the
	  contents of the textbox between companyname and Productname. Alter the 'Data
	  Source' in the Open statement above to fit your environment.
	
	REFERENCES
	==========
	
	In the MSDN, select Visual Basic Documentation, and query on "data binding"
	
	Additional query words: databinding kbbetapublic kbDSupport kbdse kbVBp kbvbp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
