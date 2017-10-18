---
layout: page
title: "Q272338: HOWTO: Use VFP and ADO Stream Object to Retrieve Binary Data"
permalink: kb/272/Q272338/
---

## Q272338: HOWTO: Use VFP and ADO Stream Object to Retrieve Binary Data

	Article: Q272338
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbActiveX kbADO kbvfp600 kbSQLServ700 kbGrpDSFox kbDSupport kbADO250
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- ActiveX Data Objects (ADO), version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro has the capability to handle Binary Large Object (BLOB) data from
	providers like SQL Server by using ActiveX Data Objects (ADO) Stream objects and
	recordsets.
	
	A BLOB is a type of data column that contains binary data such as graphics,
	sound, or compiled code. From the perspective of an application, this data is
	"formless." In SQL Server, this data is commonly known as an "Image" data type.
	
	MORE INFORMATION
	================
	
	The following code sample assumes that you have the necessary access and
	privileges to a Microsoft SQL Server, and that you have the pub_info table in
	the SQL Server 7.0 Pubs sample database.
	
	1. In Visual FoxPro, create a new program.
	
	2. Paste the following code into the new program:
	
	  CLEAR
	  CLEAR ALL
	  RELEASE ALL
	  #DEFINE LOC_SQLSERVERNAME	"MYSERVER"
	  #DEFINE LOC_SQLUID		"SA"
	  #DEFINE LOC_SQL_PWD	""
	
	  LOCAL lcConnStr, lcSQL, loConnection, lcImageName, ;
	  	loRecordSet, loADOStream
	
	  lcConnStr="Provider=SQLOLEDB;" +;
	  	"Data Source=" + LOC_SQLSERVERNAME + ";" +;
	  	"Initial Catalog=PUBS;" +;
	  	"UID=" + LOC_SQLUID + ";" +;
	  	"Pwd=" + LOC_SQL_PWD
	
	  lcSQL = "SELECT * FROM pub_info"
	
	  *!* Creates the objects.
	  loConnection = CREATEOBJECT("ADODB.Connection")
	  loRecordSet = CREATEOBJECT("ADODB.Recordset")
	  loADOStream = CREATEOBJECT("ADODB.Stream")
	
	  *!* Open the connections.
	  loConnection.OPEN(lcConnStr)
	  loRecordSet.OPEN(lcSQL,loConnection,2,3)
	
	  *!* Set Stream Object properties.
	  loADOStream.TYPE = 1	&& 1=Binary Data, 2=Text Data.
	  loADOStream.OPEN
	
	  loADOStream.WRITE(loRecordSet.FIELDS("logo")) 	&& Pass data to the stream object.
	  lcImageName = "BLOB.gif"                  		&& Sets the local file name.
	  loADOStream.SaveToFile(lcImageName,2)         	&& Saves stream object to a file.
	  @1,1 SAY CURDIR() + lcImageName BITMAP    		&& Displays image file
	
	  *!* Close connections.
	  loRecordSet.CLOSE
	  loConnection.CLOSE
	  loADOStream.CLOSE
	
	  ERASE CURDIR() + "BLOB.gif"
	
	3. Change the three #DEFINE statements to reflect your local setup, and then
	  save and run the program.
	
	4. Observe the image on the Visual FoxPro desktop.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Reinaldo
	Torrales, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q258038 HOWTO: Access and Modify SQL Server BLOB Data by Using the ADO Stream
	  Object
	
	Additional query words: BLOB, AppendChunk, GetChunk
	
	======================================================================
	Keywords          : kbActiveX kbADO kbvfp600 kbSQLServ700 kbGrpDSFox kbDSupport kbADO250 
	Technology        : kbVFPsearch kbAudDeveloper kbADOsearch kbADO250 kbVFP600
	Version           : WINDOWS:2.5,6.0; winnt:7.0
	Issue type        : kbhowto
	
	=============================================================================
	
