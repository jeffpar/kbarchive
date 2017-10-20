---
layout: page
title: "Q185967: HOWTO: Display Hierarchical Data Using the MSHFlexGrid"
permalink: /kb/185/Q185967/
---

## Q185967: HOWTO: Display Hierarchical Data Using the MSHFlexGrid

{% raw %}

	Article: Q185967
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As its name suggests, the MSHFlexGrid control that ships with Visual Basic 6.0
	allows database data to be displayed in an aggregated, hierarchical format.
	Using this control in conjunction with the Data Environment Designer, developers
	can easily and logically display information contained in several different
	database tables, which are connected through the use of foreign keys.
	
	MORE INFORMATION
	================
	
	The Data Environment Designer is a tool that enables developers to encapsulate
	ActiveX Data Object (ADO) connection and command objects in a reusable Visual
	Basic object. This sample project makes use of a Data Environment Designer to
	establish a connection to SQL Server and to retrieve related data from two
	tables in the Pubs sample database via command objects. The related data is then
	displayed in a hierarchical format in the MSHFlexGrid control.
	
	To create this sample, do the following:
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Components, and click the Designers tab in the
	  Components window. On the Designers tab, make sure that the Data Environment
	  check box is selected. On the Controls tab, select the check box next to the
	  Microsoft Hierarchical FlexGrid Control 6.0 option. Then click OK to exit the
	  Components window.
	
	3. On the Project menu, click Add Data Environment, which adds the
	  DataEnvironment1 object to your project.
	
	4. If the object window for the DataEnvironment1 object is not visible,
	  right-click the DataEnvironment1 object in Project Explorer and select View
	  Object.
	
	5. In the DataEnvironment1 object window, right-click the Connection1 icon
	  pictured beneath the DataEnvironment1 icon and select the Properties option
	  from the pop-up menu (this displays the Data Link Properties window).
	
	6. Select the Use Connection String option, and click Build. Select the
	  Microsoft OLE DB Provider for SQL Server option, and click Next.
	
	7. Under step 1 on the Connection tab, select or enter the name of the SQL
	  Server that you are using for this project.
	
	8. Under step 2, enter a user name and password that are valid values for your
	  SQL Server Environment. Also select the Allow Saving Of Password check box.
	
	9. Under step 3, select the Pubs sample database from the combo box. Click Test
	  to test your connection information. If your test is successful, click OK to
	  exit the Data Link Properties window.
	
	10. Right-click the Connection1 icon in the object window for the
	  DataEnvironment1 object. Select the Add Command option from the pop-up menu
	  to add a new command object to your project.
	
	11. Right-click the new Command1 icon in the DataEnvironment1 object window and
	  select the Properties option from the pop-up window (this displays the
	  Command1 Properties window).
	
	12. On the General tab, select the SQL Statement option button and cut and paste
	  the following code into the enabled text box:
	
	        SELECT pub_id, pub_name FROM Publishers
	
	  Then click OK to close the Command1 Properties window.
	
	13. Right-click the Command1 icon in the DataEnvironment1 object window, and
	  select the Add Child Command option from the pop-up menu (this adds another
	  icon to the DataEnvironment1 object window called Command2).
	
	14. Right-click the Command2 icon in the DataEnvironment1 object window and
	  select the Properties option from the pop-up menu (this displays the
	  Command2 Properties window).
	
	15. On the General tab, select the SQL Statement option button and cut and paste
	  the following code into the enabled text box:
	
	        SELECT pub_id, title, price FROM Titles
	
	16. On the Relation tab, make sure that the pub_id value is selected in both the
	  Parent Fields and the Child Fields/Parameters combo boxes. Then click Add
	  (this creates a hierarchical relationship between the pub_id fields that are
	  selected in the two command objects).
	
	17. Place an MSHFlexGrid control onto Form1, the default form of the project.
	
	18. Select the MSHFlexGrid control that you added to Form1, then select the
	  Properties window.
	
	19. Select the DataEnvironment1 option for the DataSource property, and select
	  the Command1 option for the DataMember property.
	
	20. Now run your project. The MSHFlexGrid control is filled with data from both
	  the Publishers and Titles tables of the Pubs database, and the information
	  is hierarchically grouped.
	
	NOTE: The results of steps 18 and 19 can also be accomplished at run time by
	adding the following code to the code window of Form1:
	
	     Option Explicit
	
	     Private Sub Form_Load()
	         DataEnvironment1.Command1
	         Set MSHFlexGrid1.DataSource = DataEnvironment1.rsCommand1
	     End Sub
	
	REFERENCES
	==========
	
	Search for "MSHFlexGrid control" in the MSDN Library for Visual Studio 6
	
	Additional query words: kbDSupport kbdse kbVBp kbVBp600
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
