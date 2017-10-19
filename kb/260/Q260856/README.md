---
layout: page
title: "Q260856: PRB: File Access Denied Opening Table Accessed by Using  ADO"
permalink: /kb/260/Q260856/
---

## Q260856: PRB: File Access Denied Opening Table Accessed by Using  ADO

	Article: Q260856
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbADO kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGr
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Visual FoxPro table for exclusive use after the table
	has been accessed by using an ActiveX Data Object (ADO), the following error
	message appears:
	
	  File access is denied
	
	This error message may continue to occur for up to 60 seconds after the table has
	been released from the ADO connection.
	
	CAUSE
	=====
	
	When an application creates an OLE DB data source object (through ADO or an OLE
	DB consumer), OLE DB services query the data provider for supported information
	and provide a proxy data source object to the application. To the consuming
	application, this proxy data source object looks like any other data source
	object, but, in this case, setting properties merely caches the information in
	the local proxy. When the application opens a connection in ADO, the proxy data
	source object checks whether any unused connections already exist that match the
	specified connection information. If a matching unused connection is found,
	rather than creating a new object, setting properties, and establishing a new
	connection to the database, the proxy data source object uses the existing
	initialized data source object. When the application releases the data source
	object, it is returned to the pool. Any data source object that is released by
	the application and not reused after 60 seconds is automatically released from
	the pool.
	
	RESOLUTION
	==========
	
	Disable ADO Resource pooling in the ADO Connection string.
	
	Resource pooling can be controlled in the connection string used to connect to a
	data source by adding one of the following OLE DB Services clauses, as
	appropriate:
	
	  lcConnectString="DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE;" + ;
	     "OLE DB Services = 0") 
	
	  -or-
	
	  lcConnectString="DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE;" + ;
	     "OLE DB Services = -2") 
	
	  -or-
	
	  lcConnectString="DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE;" + ;
	     "OLE DB Services = -4") 
	
	  -or-
	
	  lcConnectString="DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE;" + ;
	     "OLE DB Services = -6")
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By default, service components are enabled for all Microsoft OLE DB providers.
	This is because Resource pooling provides high performance in an environment
	that exhibits frequent connects and disconnects from a backend database. The
	following table indicates valid connection string values and the OLE DB Services
	associated with each connection string:
	
	+------------------------------------------------------------------------------+
	| Value in Connection String | Services Enabled                                | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = 0"      | No Services                                     | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = -1"     | All Services (default)                          | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = -2"     | All Services Except Pooling                     | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = -4"     | All Services Except Pooling and Auto-Enlistment | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = -5"     | All Services Except Client Cursor               | 
	+------------------------------------------------------------------------------+
	| "OLE DB Services = -6"     | All Services Except Client Cursor and Pooling   | 
	+------------------------------------------------------------------------------+
	
	Note that Resource pooling is disabled when OLE DB Services is set to a value of
	0, -2, -4, or -6.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) file named Adodemo.prg using the following code:
	
	  PUBLIC myconn, myrs
	  CREATE TABLE adodemo (charfld1 c(10), charfld2 c(10))
	  FOR i=1 TO 3
	     INSERT INTO adodemo VALUES (REPLICATE(CHR(i+64),10),REPLICATE(CHR(i+65),10))
	  ENDFOR
	  CLOSE ALL
	  *!* Create an ADO Connection to the FoxPro Samples
	  myconn=CREATEOBJECT('ADODB.CONNECTION')
	  *!* Need a Client Side Cursor for this so that we get a recordcount
	  myconn.cursorlocation=3 && adUseClient
	  *!* Open the data source
	  myconn.OPEN("DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE")
	  *!* Create an ADO Recordset to be used as the datasource for the DataCombo control
	  myrs=CREATEOBJECT('ADODB.RECORDSET')
	  *!* Set the connection property of the recordset
	  myrs.activeconnection=myconn
	  *!* The recordset inherits the cursorlocation of the connection
	  myrs.locktype=3 && adLockOptimistic
	  myrs.OPEN("SELECT * FROM ADODEMO",,,,1)
	  FOR i=0 TO myrs.recordcount-1
	     FOR j=0 TO myrs.FIELDS.COUNT-1
	        ?? myrs.FIELDS(j).VALUE + " "
	     ENDFOR
	     myrs.movenext 
	     ?
	  ENDFOR
	  myrs.CLOSE
	  myconn.CLOSE
	  USE adodemo EXCLUSIVE
	
	2. Save and run the program. Note that when the USE adodemo EXCLUSIVE line is
	  encountered, the following error message appears:
	
	  File access is denied
	
	3. Open the Adodemo.prg file and change the line that opens the ADO connection
	  from
	
	  myconn.OPEN("DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE")
	
	to:
	
	  myconn.OPEN("DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBF;SourceDB="+SYS(5)+SYS(2003) + ";" + ;
	     "Exclusive=NO;BackGroundFetch=NO;NULL=NO;Collate=MACHINE;" + ;
	     "OLE DB Services = -4")
	
	4. Save and run the program. Note that the error message that appears in the
	  "Symptoms" no longer appears.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information on ADO Resource Pooling, please see the following Web
	site:
	
	  http://msdn.microsoft.com/library/techart/pooling2.htm
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q245267 DOC: 'OLEDB_SERVICES = -2' Does Not Disable Autoenlistment
	
	  Q176056 INFO: ADO/ASP Scalability FAQ
	
	Additional query words: OLEDB
	
	======================================================================
	Keywords          : kbActiveX kbADO kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
