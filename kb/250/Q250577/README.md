---
layout: page
title: "Q250577: HOWTO: Use Picture Box in UserControl and DataRepeater"
permalink: /kb/250/Q250577/
---

## Q250577: HOWTO: Use Picture Box in UserControl and DataRepeater

{% raw %}

	Article: Q250577
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbActiveX kbADO210 kbBitmap kbCtrl kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 6.0 SP3 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 6.0 SP3 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to display a picture from a database in a picture
	box in a UserControl and in the Microsoft DataRepeater control.
	
	MORE INFORMATION
	================
	
	When you bind a UserControl or DataRepeater control that contains a Picture Box,
	set the DataFormat of the bound picture box to Picture.
	
	NOTE: To bind a picture to a field in a database, the field must be stored
	without the header and footer information of a Microsoft Access OLE field. An
	Access OLE field that contains a bitmap also contains header and footer
	information, which prevents binding a picture box to the field.
	
	Sample Code
	-----------
	
	To create this sample project you must:
	
	- Create a sample database.
	
	- Create the UserControl.
	
	- Create the test project.
	
	Create a Sample Database
	------------------------
	
	The following project creates a Microsoft Access 2000 database and a table in the
	database. It then populates the table with a record that contains a Picture
	object from your Windows directory. The picture is inserted as binary data, not
	as an Access OLE field.
	
	Note that you only have to run this project once to create the database.
	
	1. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. From the Project menu, select References.
	
	3. In the list of available references, select the following:
	
	   - Microsoft ActiveX Data Objects Library
	
	   - Microsoft ADO Ext. for DDL and Security
	
	4. Paste the following code into the code window of Form1's Form_Load Event:
	
	  'This code creates an Access 2000 database named C:\Picture.mdb.
	  'It then creates a table within the .mdb named PicTable with two fields
	  'one named Picture and the other named Description.
	  'Finally, it loads one record into the table.
	
	     'Create a new Access 2000 database.
	     Dim cat As ADOX.Catalog
	     Set cat = New ADOX.Catalog
	     cat.Create "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\Picture.mdb"
	     
	     'Create a new table in the new Access 2000 database.
	     Dim tbl As ADOX.Table
	     Set tbl = New ADOX.Table
	     tbl.Name = "PicTable"
	     tbl.Columns.Append "Picture", adLongVarBinary
	     tbl.Columns.Append "Description", adVarWChar, 50
	     cat.Tables.Append tbl
	
	     'Open the new table.
	     Dim RS As ADODB.Recordset
	     Set RS = New ADODB.Recordset
	     RS.CursorLocation = adUseClient
	     RS.Open "Select * from PicTable","Provider=Microsoft.Jet.OLEDB.4.0;" & _
	             "Data Source=C:\Picture.mdb", adOpenStatic, adLockOptimistic
	
	     'Check the following paths and make sure there is a valid path to the .bmp files.
	     Dim MyArray() As Byte
	     'If you use Windows 95 or Windows 98 then use This Line
	     Open "C:\Windows\Bubbles.bmp" For Binary As #1
	     'If you use Windows NT then use this line
	     'Open "C:\Winnt\Blue Monday.bmp" For Binary As #1
	     ReDim MyArray(LOF(1))
	     Get #1, , MyArray()
	     Close #1
	
	     'Add a Record containing a Picture to the new table.
	     RS.AddNew
	     RS(0).AppendChunk MyArray()
	     RS(1) = "This is Picture 1"
	     RS.Update
	
	     'Clean up
	     RS.Close
	     Set RS = Nothing
	     Set tbl = Nothing
	     Set cat = Nothing
	
	5. If you are running on Microsoft Windows NT, comment out the line:
	
	  Open "C:\Windows\Bubbles.bmp" For Binary As #1
	
	  and uncomment the line:
	
	  'Open "C:\Winnt\Blue Monday.bmp" For Binary As #1
	
	  If needed, further modify the path to the Bubbles.bmp file or the Blue
	  Monday.bmp file to the folders on your system.
	
	6. Run this code once.
	
	  You should now have a new Access 2000 Database that has one record in it.
	
	7. Exit Visual Basic.
	
	Create the UserControl
	----------------------
	
	1. In Visual Basic, create a new ActiveX control project. UserControl1 is
	  created by default.
	
	2. Right-click the UserControl1 and then select Properties. Change the text in
	  the Name property of UserControl1 to MyUserControl.
	
	3. Place a PictureBox control onto MyUserControl. Change the PictureBox's Name
	  property to MyPicture.
	
	4. Place a TextBox control onto MyUserControl. Change the TextBox's Name
	  property to MyText.
	
	5. From the Add-Ins menu, select Add-In Manager. From the list of available
	  add-ins, select:
	
	  VB 6 ActiveX Ctrl Interface Wizard.
	
	6. Clear the Loaded/Unloaded check box and then click OK.
	
	7. From the Add-Ins menu, select the ActiveX Control Interface Wizard..
	
	8. In the Introduction dialog box of the ActiveX Control Interface Wizard,
	  select Next.
	
	9. In the Select Interface Members dialog box, click << to clear the list
	  of names, and then click Next.
	
	10. In the Create Custom Interface Members dialog box, click New.
	
	  a. In the Name text box, type MyPictureData.
	
	Note that this is a property.
	
	  b. Click OK.
	
	11. In the Create Custom Interface Members dialog box, click New.
	
	  a. In the Name text box, type MyPictureText.
	
	Note that this is a property.
	
	  b. Click OK and then click Next.
	
	12. In the Set Mapping dialog box, select MyPictureData from the list of Public
	  Names.
	
	  a. In the Maps to Control list, select MyPicture.
	
	  b. In the Member list, select Picture.
	
	13. Select MyPictureText from the list of Public Names.
	
	  a. In the Maps to Control list, select MyText.
	
	  b. In the Member list, select Text.
	
	14. Click Next and then click Finish.
	
	15. In the Summary dialog box, click Close.
	
	The code created by the ActiveX Control Interface Wizard should look like the
	following:
	
	  'WARNING! DO NOT REMOVE OR MODIFY THE FOLLOWING COMMENTED LINES!
	  'MappingInfo=MyPicture,MyPicture,-1,Picture
	  Public Property Get MyPictureData() As Picture
	      Set MyPictureData = MyPicture.Picture
	  End Property
	
	  Public Property Set MyPictureData(ByVal New_MyPictureData As Picture)
	      Set MyPicture.Picture = New_MyPictureData
	      PropertyChanged "MyPictureData"
	  End Property
	
	  'WARNING! DO NOT REMOVE OR MODIFY THE FOLLOWING COMMENTED LINES!
	  'MappingInfo=MyText,MyText,-1,Text
	  Public Property Get MyPictureText() As String
	      MyPictureText = MyText.Text
	  End Property
	
	  Public Property Let MyPictureText(ByVal New_MyPictureText As String)
	      MyText.Text() = New_MyPictureText
	      PropertyChanged "MyPictureText"
	  End Property
	
	  'Load property values from storage
	  Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	      Set Picture = PropBag.ReadProperty("MyPictureData", Nothing)
	      MyText.Text = PropBag.ReadProperty("MyPictureText", "Text1")
	  End Sub
	
	  'Write property values to storage
	  Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	      Call PropBag.WriteProperty("MyPictureData", Picture, Nothing)
	      Call PropBag.WriteProperty("MyPictureText", MyText.Text, "Text1")
	  End Sub
	
	16. On the Tools menu, select Procedure Attributes.
	
	  a. Select MyPictureData in the Name list. Click Advanced.
	
	  b. In the Data Binding area, select the Property Is Data Bound check box.
	
	  c. Select the Show DataBindings Collection At Design Time check box.
	
	  d. Select MyPictureText in the Name list. Select the Property Is Data Bound
	     and Show DataBindings Collection At Design Time check boxes again.
	
	  e. Click Apply.
	
	  f. Click OK.
	
	17. On the File menu, select Make Project1.ocx. Change the file name to
	  MyUserControl.ocx, and then click OK.
	
	  NOTE: Do not exit Visual Basic, because you need to add a test project.
	
	Create the Test Project
	-----------------------
	
	1. On the File menu, select Add Project. Create a new Standard EXE project.
	  Form1 is created by default.
	
	2. On the Project menu, select Components. From the list of available
	  Components, select the following:
	
	   - Microsoft ADO Data Control (OLE DB)
	   - Microsoft DataRepeater Control (OLE DB) to the tool bar.
	
	3. Add a ADO DataControl to Form1. ADODC1 is created by default.
	
	  a. Set the ConnectionString property of ADODC1 to the Pictures database
	     created previously, using Provider=Microsoft.Jet.OLEDB.4.0;Data
	     Source=C:\Picture.mdb.
	
	  b. Set the RecordSource property of ADODC1 to the PicTable table.
	
	4. Add a DataRepeater control to the form. DataRepeater1 is created by default.
	
	  a. Set the DataSource of DataRepeater1 to ADODC1.
	
	  b. Select the RepeatedControlName property. From the list of available
	     controls, select MyUserControl.UserControl1.
	
	  c. Select the Custom property. Click the ellipsis (...) button to open the
	     Property dialog box.
	
	  d. In the Property dialog box, select the RepeaterBindings tab. From the list
	     of PropertyNames, select MyPictureData. From the list of DataFields,
	     select Picture and then click Add.
	
	  e. Select the Format tab. From the list of Format Items, select
	     MyPictureData. For the Format Type, select Picture.
	
	  f. Again, select the RepeaterBindings tab. From the list of PropertyNames,
	     select MyPictureText. From the list of DataFields, select Text and then
	     click Add. Click Apply and then click OK.
	
	5. In the Project Explorer, select the test project. Right-click the test
	  project and then select Set as Startup.
	
	6. Run the project. There should be a picture and a description in the control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbADO210 kbBitmap kbCtrl kbDatabase kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbADO270
	Version           : WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0,6.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
