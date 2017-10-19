---
layout: page
title: "Q196587: BUG: Data View: New Oracle Views Incorrectly Named During Save"
permalink: /kb/196/Q196587/
---

## Q196587: BUG: Data View: New Oracle Views Incorrectly Named During Save

	Article: Q196587
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDataview kbOracle kbDataEnv kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating and saving a new view with the Data view tool, trying to access
	the newly created view results in the following run-time error:
	
	  '-2147217865 (80040e37)': ORA-00942: table or view does not exist.
	
	CAUSE
	=====
	
	The Data View is saving the view name in lower case to the Oracle database, but
	Oracle sees views all in upper case.
	
	RESOLUTION
	==========
	
	Delete the View that is causing the error. Create the view again. Save and name
	the view with the same name but use all upper case letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 6.0 and create a Standard EXE project.
	
	2. From the Project menu, choose Add Data Environment.
	
	3. Right-click Connection1 and choose Properties. In the Data Link Properties
	  dialog box, click the Connection tab. In step 1, select "Use connection
	  string" and enter a valid Server name, UserID, and Password to your Oracle
	  Data Source in the Connection string text box. Here is an example of a
	  connection string:
	
	     Server: dseOracle
	             UserID: Scott
	             Password: Tiger
	
	  After you enter the connection sting, click OK.
	
	4. From the View menu choose "Data View Window". Click the "+" next to the
	  folder labeled "Connection1" to expand the folder. When the folder expands,
	  right-click the folder named "View", and then select New View.
	
	5. In the space provided enter a valid SQL statement, such as the following:
	
	        SELECT *
	        FROM EMPLOYEES
	
	6. Click the Close button in the top right corner of the form. When prompted to
	  save, click Yes. Save the view, name it vEmp and then click OK.
	
	7. Open the DataEnvironment. In the Project1 DataEnvironment dialog box,
	  right-click Connection1 and choose Add Command.
	
	8. Right-click Command1 to open the Command1 Properties dialog box. In the
	  Command1 Properties dialog box, click the General tab. Select the Database
	  Object option button, click the down arrow of the text box and then select
	  View.
	
	9. Click the drop-down arrow of the Object Name textbox, select vEmp or
	  <uid>.vEmp, and then click OK.
	
	10. From the Project menu, choose Components and select the Microsoft Datagrid
	  Control 6.0 (OLEDB). Next, place a Datagrid and a Command button on the
	  form.
	
	11. Enter the following code into the Click event of the Command button:
	
	        Set DataGrid1.DataSource = DataEnvironment1
	        DataEnvironment1.Commands("Command1").CommandText = "vEmp"
	        DataEnvironment1.Command1
	        DataGrid1.DataMember = "Command1"
	        DataGrid1.Refresh
	
	12. Run the project and click the Command1 command button.
	
	  RESULT: The following error occurs:
	
	  Run-time error '-2147217865 (80040e37)': ORA-00942: table or view does not
	  exist.
	
	  This error also appears if the view is executed in SQL Plus.
	
	======================================================================
	Keywords          : kbDataview kbOracle kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
