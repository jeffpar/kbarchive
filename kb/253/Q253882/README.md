---
layout: page
title: "Q253882: HOWTO: Use a DataGrid ActiveX Control in Visual FoxPro"
permalink: /kb/253/Q253882/
---

## Q253882: HOWTO: Use a DataGrid ActiveX Control in Visual FoxPro

{% raw %}

	Article: Q253882
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbADO kbContainer kbCtrl kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft DataGrid control (Msdatgrd.ocx) cannot directly use Microsoft
	Visual FoxPro tables as a data source. The DataGrid control can, however, be
	bound to an ActiveX Data Objects (ADO) recordset. This article illustrates how
	to bind a DataGrid ActiveX control to an ADO recordset from within a Visual
	FoxPro application.
	
	You must have Visual Studio Service Pack 3 installed for this code to function.
	
	MORE INFORMATION
	================
	
	NOTE: The Microsoft DataGrid control has not been tested with and is not
	supported by Microsoft Visual FoxPro.
	
	In order to bind a DataGrid ActiveX control to an ADO recordset, a recordset that
	can be bookmarked or a client side ADO recordset must first be created. After
	this ADO recordset has been created, the DataGrid.DataSource property is used to
	bind the control with the ADO recordset, as follows:
	
	  THISFORM.DataGrid1.DATASOURCE=myADORecordSet
	
	1. Create a program file named "Datagrid.prg" (without the quotation marks)
	  using the following code:
	
	  PUBLIC OX
	  OX=CREATEOBJECT('MYFORM')
	  OX.SHOW
	  READ EVENTS
	
	  DEFINE CLASS myform AS FORM
	     CAPTION = "DataGrid Form"
	     HEIGHT = 250
	     LEFT = 0
	     TOP = 0
	     WIDTH = 375
	     NAME = "myform"
	
	     ADD OBJECT DataGrid1 AS OLECONTROL WITH ;
	        OLECLASS="MSDataGridLib.DataGrid.1",;
	        TOP = 25, ;
	        LEFT = 25, ;
	        HEIGHT = 190, ;
	        WIDTH = 325, ;
	        NAME = "DataGrid1"
	
	     ADD OBJECT commandbutton1 AS COMMANDBUTTON WITH ;
	        TOP=225, ;
	        LEFT=275, ;
	        HEIGHT=25, ;
	        CAPTION="\<Close", ;
	        NAME="commandbutton1"
	
	     PROCEDURE INIT
	        PUBLIC myconn, myrs
	        *!* Create an ADO Connection
	        myconn=CREATEOBJECT('ADODB.CONNECTION')
	        *!* Use a Client Side Cursor so that a bookmarkable cursor is used.
	        myconn.cursorlocation=3 && adUseClient
	        *!* Set a connection string to the VFP samples
	        lcConnectString="DRIVER=Microsoft Visual FoxPro Driver;" + ;
	           "SourceType=DBC;SourceDB="+HOME(2)+"DATA\TESTDATA.DBC;" + ;
	           "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE"
	        *!* Open the connection
	        myconn.OPEN(lcConnectString)
	        *!* Create an ADO Recordset
	        myrs=CREATEOBJECT('ADODB.RECORDSET')
	        *!* Set the recordset activeconnection property
	        myrs.activeconnection=myconn
	        *!* The Recordset inherits the cursorlocation of the connection.
	        *!* Use Optimistic locking
	        myrs.locktype=3 && adLockOptimistic
	        *!* Open the recordset
	        myrs.OPEN("SELECT * FROM CUSTOMER",,,,1)
	        *!* Bind the Control to the ADO recordset
	        THISFORM.DataGrid1.DATASOURCE=myrs
	     ENDPROC
	
	     PROCEDURE commandbutton1.CLICK
	        myrs.CLOSE
	        myconn.CLOSE
	        RELEASE myrs
	        RELEASE myconn
	        RELEASE THISFORM
	     ENDPROC
	
	     PROCEDURE UNLOAD
	        CLEAR EVENTS
	     ENDPROC
	
	  ENDDEFINE
	
	2. Save and run DATAGRID.PRG
	
	If you make a change to a field in the DataGrid control, you might see the
	following error:
	
	  Multiple-step operation generated errors. Check each status value.
	
	The fields in the DataGrid are padded with spaces. You might need to press the
	DELETE key to remove a space for each character entered or delete the contents
	of the entire field before typing.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information regarding ActiveX Controls supported with Microsoft
	Visual FoxPro 6.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q191222 INFO: ActiveX Controls Supported by Visual FoxPro 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbADO kbContainer kbCtrl kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
