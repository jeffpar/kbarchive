---
layout: page
title: "Q193262: PRB: Quotes Added When Using Write# to Write Numbers to File"
permalink: /kb/193/Q193262/
---

## Q193262: PRB: Quotes Added When Using Write# to Write Numbers to File

{% raw %}

	Article: Q193262
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When writing numerical data obtained from a database recordset to a text file
	using the Write# command, Visual Basic erroneously places quotes around the
	numbers.
	
	RESOLUTION
	==========
	
	See the workaround as described in the MORE INFORMATION section below.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select References from the Project menu and check Microsoft DAO 3.5 Object
	  Library or Microsoft DAO 3.51 Object Library.
	
	3. Paste the following code into the declarations section of Form1:`
	
	        Private Sub Form_Load()
	           Dim wrkJet As Workspace
	           Dim dbsNorthwind As Database
	           Dim rsInvoices As Recordset
	     
	           'Create Microsoft Jet Workspace object.
	           Set wrkJet = CreateWorkspace("", "admin", "", dbUseJet)
	     
	           'Open Database object from saved Microsoft Jet database for
	           'exclusive use.
	     
	           MsgBox "Opening Northwind..."
	           Set dbsNorthwind = wrkJet.OpenDatabase("Nwind.mdb", True)
	           Set rsInvoices = dbsNorthwind.OpenRecordset("select _
	           [Salesperson],[OrderID],[OrderDate],[ProductID] from [Invoices]")
	     
	           Open "test.tmp" For Output As #1
	           Write #1, rsInvoices.Fields("productid").Properties("Value").Value
	           Write #1, rsInvoices!ProductID
	           Close #1
	     
	           rsInvoices.Close
	           dbsNorthwind.Close
	           wrkJet.Close
	
	           Dim a As Long, b As Long
	           Open "test.tmp" For Input As #1
	           Input #1, a, b
	           Msgbox "a=" & a
	           Msgbox "b=" & b
	           Close #1
	     
	        End Sub
	
	4. Press the F5 key to run the project. The message boxes "a=24" and "b=0" are
	  displayed.
	
	  NOTE: The file test.tmp that is created in the project or default Visual Basic
	  directory has the following contents which demonstrates that Visual Basic has
	  placed quotes around the number:
	
	        24
	        "24"
	
	Workaround
	----------
	
	A workaround to this problem is to change the code that writes to the text file
	from:
	
	     Write #1, rsInvoices!ProductID
	
	to:
	
	     Write #1, rsInvoices!ProductID.value
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp500 kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
