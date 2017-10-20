---
layout: page
title: "Q205635: HOWTO: Save Bitmap File as OLE Object in Access OLE Object Field"
permalink: /kb/205/Q205635/
---

## Q205635: HOWTO: Save Bitmap File as OLE Object in Access OLE Object Field

{% raw %}

	Article: Q205635
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Access, OLE Object fields can store data such as Microsoft Word or
	Microsoft Excel documents, pictures, sound, and other types of binary data that
	are created in other programs. This article provides the Visual Basic code that
	uses an OLE control and the CreateEmbed method to store a bitmap file in an
	Access OLE Object field.
	
	The advantage of using this technique is that the data is stored in the Access
	OLE Object format. Thus, a user who opens the database in Access and
	double-clicks on the item will find that the appropriate container for the data
	is automatically started. If you place the data into a field without using of
	the below-mentioned method, it is stored as "Long Binary" data in Access, and
	the appropriate container for the data is not started when a user double-clicks
	the item in Access.
	
	
	MORE INFORMATION
	================
	
	The following example demonstrates how a bitmap file is stored in the OLE Object
	field of an Access table using Visual Basic.
	
	Step-by-Step Example
	--------------------
	
	1. For testing purposes, create a database named db1.mdb and a table named
	  MyOLETest in Access. The MyOLETest table structure is as follows:
	
	+---------------------------------------+
	| Field Name | Data Type                | 
	+---------------------------------------+
	| ID         | AutoNumber (Primary Key) | 
	+---------------------------------------+
	| Picture    | OLE Object               | 
	+---------------------------------------+
	
	2. Save db1.mdb in the C:\TEMP\ folder.
	
	3. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	4. Place a CommandButton, Command1, and a Data Control, Data1 on Form1.
	
	5. Add an OLE control, OLE1, to Form1. Click Cancel in the Insert Object window.
	
	6. Using the following table as a guide, set the properties of the newly added
	  controls:
	
	+-------------------------------------------+
	| Control | Property      | Value           | 
	+-------------------------------------------+
	| Data1   | Database Name | C:\TEMP\db1.mdb | 
	+-------------------------------------------+
	| Data1   | RecordSource  | MyOLETest       | 
	+-------------------------------------------+
	| OLE1    | DataSource    | Data1           | 
	+-------------------------------------------+
	| OLE1    | DataField     | Picture         | 
	+-------------------------------------------+
	
	7. Double-click Command1, and then paste the following code into the Command1
	  Code window:
	
	  Data1.Recordset.AddNew
	  OLE1.CreateEmbed "C:\Windows\Circles.bmp"
	  ' Assume the bitmap file is located at C:\Windows\ folder.
	  Data1.Recordset.Update
	  Data1.Recordset.MoveLast
	
	8. Start the program or press the F5 key. Click Command1 to add the Circles.bmp
	  file to the MyOLETest Access table.
	
	NOTE: The OLE Container control does not have to be visible to update the Access
	database with this method.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
