---
layout: page
title: "Q177908: ADT/ODE: There Is &quot;No Object in this Control&quot; Error Message"
permalink: /kb/177/Q177908/
---

## Q177908: ADT/ODE: There Is &quot;No Object in this Control&quot; Error Message

{% raw %}

	Article: Q177908
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use an ActiveX control in a Microsoft Access application, the control
	may appear blank when the application is used in the run-time environment. You
	may also receive the following error messages
	
	  Run-time error '438': Object doesn't support this property or method
	
	-or-
	
	  Run-time error '2683': There is no object in this control
	
	-or-
	
	  Run-time error '2455': Application-defined or object-defined error
	
	followed by:
	
	  Execution of this application has stopped due to a run-time error. The
	  application can't continue and will be shut down.
	
	Your application then quits. The error you receive depends on both the ActiveX
	control and the version of the developer tools that you are using to distribute
	the application.
	
	CAUSE
	=====
	
	You have pasted a copy of an existing ActiveX control into your form.
	
	RESOLUTION
	==========
	
	You can resolve this error by deleting the failing control from the form and
	adding a new control from the Insert menu. You should then rename the newly
	placed control to the same name as the old control so that any code existing on
	the form will work properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Microsoft Access and create a blank database.
	
	2. Import the Customers, Employees, and Orders tables from the Northwind sample
	  database. The default location for the Northwind database is:
	
	  C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb
	
	3. Create a blank form, insert a Listview control and name it ListV.
	
	4. Type or paste the following code into the form's code module.
	
	  Private Sub Form_Load()
	
	  Dim clmX As ColumnHeader, mydb As Database, myrs As Recordset
	  Dim itmX As ListItem
	
	  Set mydb = CurrentDb
	  Set myrs = mydb.OpenRecordset("Customers", dbOpenDynaset)
	  Set clmX = ListV.ColumnHeaders.Add(, , "Company", ListV.Width / 3)
	  Set clmX = ListV.ColumnHeaders.Add(, , "Address", ListV.Width / 3)
	  Set clmX = ListV.ColumnHeaders.Add(, , "Phone", ListV.Width / 3)
	  ListV.BorderStyle = ccFixedSingle
	
	  While Not myrs.EOF
	
	    Set itmX = ListV.ListItems.Add(, , CStr(myrs!CompanyName))
	   
	    If Not IsNull(myrs!Address) Then
	      itmX.SubItems(1) = CStr(myrs!Address) ' Address field.
	    End If
	
	    If Not IsNull(myrs!Phone) Then
	      itmX.SubItems(2) = myrs!Phone  ' Phone field.
	    End If
	
	    myrs.MoveNext
	
	    Wend
	
	  ListV.View = lvwReport
	
	  End Sub
	
	  Private Sub ListV_ColumnClick(ByVal ColumnHeader As Object)
	
	  ListV.SortKey = ColumnHeader.Index - 1
	  ListV.Sorted = True
	
	  End Sub
	
	  Private Sub ListV_ItemClick(ByVal Item As Object)
	
	      Select Case Item.Index
	
	      Case Is <= 15
	          Exit Sub
	
	      Case Is >= 15
	          ' Toggle Ghosted property.
	          Item.Ghosted = Abs(Item.Ghosted) - 1
	
	  End Select
	
	  End Sub
	
	5. Save the form as ListVForm.
	
	6. Open the form. The list should display without errors.
	
	7. Create a new blank form and copy the ListV control from the previously saved
	  form.
	
	  NOTE: It is important that you copy only the control, not the whole form. Do
	  not insert the control from the Insert menu.
	
	8. Type or paste the code listed in step 4 into this new form.
	
	9. Save the form as ListVCTlCopy.
	
	10. Open the form. The list should display without errors.
	
	11. Create a new form with a command button to open the ListVForm form and
	  another command button to open the ListVCtlCopy form.
	
	12. Save this form as MenuForm and in the Startup dialog box make it the Display
	  Form.
	
	13. Create a distribution disk set using the Setup Wizard and distribute the
	  application to a clean Windows 95 computer. Make sure to include the ActiveX
	  control file (.ocx) in the list of distribution files.
	
	When you run this application on the clean computer, the ListVForm form will work
	without any errors, but the ListVCtlCopy form will produce the errors described
	in the "Symptoms" section of this article.
	
	REFERENCES
	==========
	
	For more information about other issues involving the Office 97 Developers
	Edition Tools and ActiveX controls, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q129303 ADT/ODE: OLE Controls appear blank in Run-time Applications
	
	Additional query words: doesn't appear nothing does not ole run time error 438 object doesn t support this property or method 2455 2683 can t
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
