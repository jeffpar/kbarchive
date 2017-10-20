---
layout: page
title: "Q261108: HOWTO: Use ADO in VFP Interactively with the ADO Control"
permalink: /kb/261/Q261108/
---

## Q261108: HOWTO: Use ADO in VFP Interactively with the ADO Control

{% raw %}

	Article: Q261108
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbADO kbCtrl kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbCodeSnippet kbMDAC2
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Normally, when using ActiveX Data Objects (ADO) in Visual FoxPro, code is
	written to make a call to an ODBC driver, which then retrieves the data. The
	same result can be accomplished interactively in a Visual FoxPro form by using
	the ADO Data control to access a table using an ODBC driver. You may display the
	results by using the DataGrid control.
	
	NOTE: The DataGrid control has not been tested with and is not supported by
	Microsoft Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Even though the ADO control is not visible when the form runs, it has properties
	that allow the user to change the table and/or datasource interactively. These
	controls are shipped with Visual FoxPro 6.0.
	
	1. Create a form, select the OLE ActiveX (Olecontrol) button from the Form
	  Controls toolbar, and then click on the form.
	
	2. Select the Insert Control button, and then scroll down and select Microsoft
	  ADO Data, version 6.0.
	
	3. After deciding which ODBC datasource and table that you want to access, go to
	  the properties sheet of the form and change the following properties on
	  Olecontrol1:
	
	CommandType - "2 - Table Command"
	ConnectionString - DSN=<your datasource>
	RecordSource - <table name>
	
	Make sure that DSN= is in front of your datasource name.
	
	4. From the Form Controls toolbar, select the OLE ActiveX (Olecontrol) button to
	  create a second olecontrol. After clicking on your form, select the Insert
	  Control button and choose Microsoft DataGrid Control, version 6.0.
	
	5. Add the following code to the Init event of the form and run the form:
	
	       Thisform.Olecontrol2.DataSource = Thisform.Olecontrol1.Object
	
	After the form runs, the grid is populated with data from the table.
	
	6. If the user wants to change the data in the DataGrid control interactively,
	  then change the table name and/or datasource of the ADO Data control. For
	  example, drop a Command button on the form and add the following code to the
	  click event:
	
	       Thisform.Olecontrol1.ConnectionString='DSN=<your datasource'
	       Thisform.Olecontrol1.RecordSource='<table name>'
	       Thisform.Olecontrol2.DataSource=Thisform.Olecontrol1.Object
	       Thisform.Refresh
	
	7. Click the Command button, and note that the grid is populated with data from
	  the other table.
	
	REFERENCES
	==========
	
	For additional information on ActiveX controls supported in Visual FoxPro 6.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q191222 INFO: ActiveX Controls Supported by Visual FoxPro 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbADO kbCtrl kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbCodeSnippet kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC260 kbVFP600
	Version           : WINDOWS:2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
