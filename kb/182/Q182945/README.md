---
layout: page
title: "Q182945: PRB: Database Field in Collection Treated Differently in VB"
permalink: /kb/182/Q182945/
---

## Q182945: PRB: Database Field in Collection Treated Differently in VB

{% raw %}

	Article: Q182945
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error "No Current Record" when referencing a database field that
	has been added to a collection. The code may have functioned without error in
	Visual Basic 4.0.
	
	CAUSE
	=====
	
	The Collection Object in Visual Basic 5.0 and later provides more flexibility
	when adding objects to a collection. To provide that additional level of
	functionality, Visual Basic 5.0 and later no longer make any assumptions about
	the item you are adding to the collection and will therefore add exactly what
	you specify. This differs from previous versions of Visual Basic where adding a
	reference to a field actually added the contents of that field's default
	property. For example, the following line of Visual Basic 4.0 code would add the
	contents of the "LastName" field (such as the text string "Smith") to the
	collection:
	
	     MyCollection.Add MyRecordset![LastName]
	
	This same line of code in Visual Basic 5.0 or later adds a reference to the field
	as a whole to the collection rather than the contents of the field. The Visual
	Basic 5.0 or later equivalent to the above line of code would be:
	
	     MyCollection.Add MyRecordset![LastName].Value
	
	Therefore the programmer should be explicit in determining what is added to a
	collection.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the "Microsoft DAO 3.5 Object Library."
	
	3. Paste the following code into the Form1 code window:
	
	        Private Sub Form_Load()
	           Dim MyDatabase As Database
	           Dim MyRecordset As Recordset
	           Dim CollectionItem As Variant
	           Dim MyCollection As New Collection
	
	           'Open the database and recordset
	           Set MyDatabase = OpenDatabase("C:\VB\NWIND.MDB")
	           Set MyRecordset =  _
	              MyDatabase.OpenRecordset("SELECT * FROM EMPLOYEES")
	           'Add last name of each employee to the collection
	           While Not MyRecordset.EOF
	              MyCollection.Add MyRecordset![LastName]
	              MyRecordset.MoveNext
	           Wend
	
	           'Display each item in collection
	           For Each CollectionItem In MyCollection
	              Debug.Print CollectionItem   '<- Generates an Error
	           Next
	
	           'Close the recordset and database
	           MyRecordset.Close
	           MyDatabase.Close
	        End Sub
	
	4. If necessary, modify the path to "NWIND.MDB" in the call to the
	  "OpenDatabase" method.
	
	5. Execute the sample project. Note that you will receive the "No Current
	  Record" error message.
	
	Additional query words: kbDAO kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
