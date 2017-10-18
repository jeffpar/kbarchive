---
layout: page
title: "Q173648: HOWTO: Updating an Oracle Table Using DBGrid and RDO"
permalink: kb/173/Q173648/
---

## Q173648: HOWTO: Updating an Oracle Table Using DBGrid and RDO

	Article: Q173648
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One way to set up a connection to Oracle and modify the data is by using the
	Microsoft Data Bound Grid. The steps listed below allow the user to accomplish
	this task. This example uses a DSN-less connection.
	
	MORE INFORMATION
	================
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. On the Project menu, click Components and select "Microsoft Data Bound Grid
	  Control." Also, click "Microsoft RemoteData Control 2.0." (NOTE: This adds
	  two new icons to the toolbar for the RemoteData Control and DBGrid.)
	
	3. On the Project menu, click References, and click "Microsoft Remote Data
	  Object 2.0."
	
	4. Place a DBGrid, RemoteData Control, and a command button on the form.
	
	5. Select the DBGrid, and set the DataSource property to "MSRDC1", which is the
	  default name of the RemoteData Control. Also ensure the AllowUpdate property
	  is True (default), and if adding new records set AllowAddNew property to True
	  (default is False).
	
	6. Add the following code to the click event of the command button:
	
	        Dim myenv as rdoEnvironment
	        Dim mycn as rdoConnection
	        Dim mydsnless as String
	        Dim mysql as String
	
	        mydsnless = "driver={Microsoft ODBC Driver for Oracle};" _
	           "Uid=pss; Pwd=pss;ConnectString=tns:ncoracle73;" _
	
	        Set myenv = rdoEnvironments(0)
	        Set mycn = myenv.OpenConnection("",false,rdDriverPrompt,mydsnless)
	
	        mysql = "Select * from demo.customer"
	
	        Set Form1.MSRDC1.Resultset = mycn.OpenResultset(mysql,rdOpenKeyset, _
	            rdConcurRowVer)
	
	        Debug.Print mycn.Connect  ' Display the connection string
	
	7. Run the form, change a value in the Grid, and move off the row to update.
	
	In the steps above, the driver being used is the Microsoft Oracle driver. You
	need to modify Uid, Pwd, and ConnectString to fit your ODBC setup.
	
	Additional query words: remote data
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
