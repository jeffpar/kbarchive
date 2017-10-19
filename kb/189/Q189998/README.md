---
layout: page
title: "Q189998: BUG: Data Environment: MSHFlexGrid Rebinding Data"
permalink: /kb/189/Q189998/
---

## Q189998: BUG: Data Environment: MSHFlexGrid Rebinding Data

	Article: Q189998
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to rebind the MSHFlexGrid to a different Data Environment as the
	DataSource property results in an error:
	
	  Runtime Error 30022, The Hierarchical FlexGrid does not support the requested
	  type of data binding.
	
	CAUSE
	=====
	
	If the MSHFlexGrid.DataMember is set to a Data Environment other than the
	original, the MSHFlexGrid attempts to rebind the data using the previous
	DataSource property setting. Because the same Command does not exist in the
	subsequent Data Environment, an error results.
	
	RESOLUTION
	==========
	
	To work around this problem, set MSHFlexGrid.DataSource = Nothing before
	rebinding to the next Data Environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	1. Create a new Visual Basic Standard.Exe project.Form1 is created by default.
	
	2. From the <Project-Components-Controls> menu, check the selection for
	  <Microsoft Hierarchical FlexGrid Control 6.0 (OLEDB)>.
	
	3. Add a MSHFlexGrid to the form.
	
	4. From the <Project-Add Data Environment> menu, create a new Data
	  Environment.
	
	5. Right-click the Connection icon and, under the Provider tab, select
	  <Microsoft Jet OLEDB Provider>. On the Connection tab, click the
	  ellipse button, choose the NWind.MDB, and then click OK.
	
	6. Right-click the Connection icon again, and select <Add Command>.
	
	7. Right-click on Command, and select <Properties>. Select <Table>
	  as the database object source, and select <Employees> for the Object
	  Name.
	
	8. Right-click the Command icon and select <Rename>. Rename the Command to
	  <test1>.
	
	9. Repeat steps 4-7 to create a second Data Environment. Do not rename the
	  second Command.
	
	10. Add two CommandButtons to the form and paste the following code into each
	  respectively.
	
	        Private Sub Command1_Click()
	           'Set MSHFlexGrid1.DataSource = Nothing
	           MSHFlexGrid1.DataMember = "test1"
	           Set MSHFlexGrid1.DataSource = DataEnvironment1
	        End Sub
	
	        Private Sub Command2_Click()
	           'Set MSHFlexGrid1.DataSource = Nothing
	           MSHFlexGrid1.DataMember = "command1"
	           Set MSHFlexGrid1.DataSource = DataEnvironment2
	        End Sub
	
	11. Run the project and click on ommand1. The MSHFlexGrid should be populate
	  with the results. Click on Command2. You should receive an error
	  indicating:
	
	  The Hierarchical FlexGrid does not support the requested type of data
	  binding.
	
	12. Uncomment the commented out lines in the CommandButtons. Repeat step 11. You
	  should not receive an error attempting to rebind the Data Environment.
	
	REFERENCES
	==========
	
	Visual Basic Books Online, "The Data Environment"
	
	Additional query words: kbVBp600bug kbDSupport kbdse kbDatabase kbVBp kbDataBinding kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
