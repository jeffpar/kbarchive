---
layout: page
title: "Q170552: HOWTO: Establish a One-to-Many Relation with a DBCombo"
permalink: kb/170/Q170552/
---

## Q170552: HOWTO: Establish a One-to-Many Relation with a DBCombo

	Article: Q170552
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often it is desirable to have a DBCombo pick-list to allow users to choose a
	single data item and have a set of records from a different but related table
	display. Most often this scenario is based on two tables with a one- to-many
	relationship. The DBCombo box lists records from the table on the "one" side of
	the relationship and other controls show the records from the table on the
	"many" side of the relationship.
	
	MORE INFORMATION
	================
	
	A one-to-many relationship is based on a field that exists in both tables in the
	relationship. The field in the one side of the relationship is a unique field.
	The same field in the many side of the relationship can contain duplicate
	values. Two Data controls should be used to coordinate the two tables.
	
	The DBCombo box must present records from the one side table using a field that
	is easily interpreted by the user. Usually, the field presented to the user is
	different than the field used in the relationship. That being the case, after a
	selection is made in the DBCombo box the corresponding relationship field or
	join field must be retrieved. The relationship field from the current record
	selected in the DBCombo box can then be used to filter the data from the many
	side table in the second data control using an SQL "WHERE" clause in the
	RecordSource property of the data control.
	
	Sample Program
	--------------
	
	This program uses the Biblio database's Titles and Publishers table to illustrate
	creating a one-to-many relation with a DBCombo box. There is a one-to-many
	relation between the Publishers and Titles tables in the Biblio database joined
	on the PubID field. The DBCombo box shows a list of possible Publishers' names
	and the DBGrid control displays the related records on the many side of the
	relationship, namely the Titles table:
	
	1. Start Visual Basic, or, if it is already running, click New Project from the
	  File menu.
	
	2. Place the following objects on the Form1 form and set the appropriate
	  properties:
	
	   Control           Name         Property          Value
	   ------------------------------------------------------------------
	   Data Control      Data1        DatabaseName      Biblio.mdb
	                                  RecordSource      SELECT * FROM
	                                                    [Publishers]
	                                                    ORDER BY [Name];
	   Data Control      Data2        DatabaseName      Biblio.mdb
	                                  RecordSource      Titles
	   DBCombo Box       DBCombo1     RowSource         Data1
	                                  ListField         Name
	                                  Style             2 - dbcDropdownList
	   DBGrid Control    DBGrid1      DataSource        Data2
	
	3. Copy and paste the following code to the Form1 Code Window:
	
	        Private Sub DBCombo1_Click(Area As Integer)
	          If Area = dbcAreaList Then 'User clicked item from the
	             'combo list.
	             'Move the data1 recordset to the currently selected
	             'publisher's record.
	            Data1.Recordset.Bookmark = DBCombo1.SelectedItem
	             'Change the RecordSource property for the DBGrid to only
	             'show records for the currently selected publisher.
	            Data2.RecordSource = "SELECT * FROM [Titles] WHERE_
	            [PubID] = " & Data1.Recordset("PubID")
	            Data2.Refresh
	          End If
	        End Sub
	
	4. Press the F5 key to run the project or click Run Project from the Tools menu.
	
	REFERENCES
	==========
	
	For more information about database relationships, search for the keywords
	"Relational Database Design" in the Microsoft Visual Basic 5.0 Books Online.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
