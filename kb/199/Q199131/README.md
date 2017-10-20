---
layout: page
title: "Q199131: HOWTO: Add a FoxPro Database to SQL Server as a Linked Server"
permalink: /kb/199/Q199131/
---

## Q199131: HOWTO: Add a FoxPro Database to SQL Server as a Linked Server

{% raw %}

	Article: Q199131
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbSQLServ kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server 7.0 allows the addition of external data sources as linked servers.
	This feature provides access to distributed, heterogeneous queries against OLE
	DB data sources. This article shows how to programmatically add and query a
	Visual FoxPro data source as a linked server from Visual FoxPro.
	
	MORE INFORMATION
	================
	
	sp_addlinkedserver is a new stored procedure introduced in SQL Server 7.0.
	sp_addlinkedserver creates a linked server, which allows access to distributed,
	heterogeneous queries against OLE DB data sources.
	
	The syntax for adding a linked server from Transact - SQL is:
	
	  sp_addlinkedserver [@server =] 'server',
	     [@srvproduct =] 'product_name',
	     [@provider =] 'provider_name',
	     [@datasrc =] 'data_source',
	     [@location =] 'location',
	     [@provstr =] 'provider_string',
	     [@catalog =] 'catalog'
	
	  [@server =] 'server'            Is the name of the linked server to
	                                  create with sp_addlinkedserver.
	
	  [@srvproduct =] 'product_name'  Is the product name of the OLE DB data
	                                  source to add as a linked server.
	
	  [@provider =] 'provider_name'   Is the unique provider identifier of the
	                                  OLE DB provider corresponding to the
	                                  data source.
	
	  [@datasrc =] 'data_source'      Is the name of the data source, as
	                                  interpreted by the OLE DB provider.
	
	  [@location =] 'location'        Is the location of or path to the
	                                  database as interpreted by the OLE DB
	                                  provider.
	
	  [@provstr =] 'provider_string'  Is the OLE DB provider-specific.
	
	  [@catalog =] 'catalog'          Is the catalog to be used when making a
	                                  connection to the OLE DB provider.
	
	The following code snippet adds the Visual FoxPro database Testdata.DBC from the
	SAMPLES\DATA directory to SQL Server as a linked server.
	
	NOTE: This code snippet assumes that Visual FoxPro and SQL Server are being run
	on the same machine.
	
	     Source_Path=IIF(VAL(SUBSTR(VERSION(),15,2))=6,HOME(2),HOME()+"SAMPLES\")
	     Connect_String='DRIVER={SQL Server};' + ;
	        'SERVER=MY_SERVER;DATABASE=PUBS;UID=SA;PWD='
	     gnConnHandle=SQLSTRINGCONN(Connect_String)
	     IF gnConnHandle > 0
	        * Create a command string to pass to SQL Server via SQLExec
	        SQLCommand="sp_addlinkedserver 'VFP','','MSDASQL',NULL,NULL,"+ ;
	           "'DRIVER={Microsoft Visual FoxPro Driver};" + ;
	           "SourceDB="+Source_Path+"DATA\TESTDATA.DBC;SourceType=DBC;NULL'"
	        * CREATE the LINKED Server"
	        Create_Linked_Server=SQLExec(gnConnHandle,SQLCommand)
	        IF Create_Linked_Server > 0
	           * The linked server was successfully created
	           * Run the query
	           =RunQuery()
	        ELSE
	           * The Linked Server either already exists or the command failed.
	           * Test for existence of linked server with aerror()
	           =AERROR(s_failed)
	           IF "VFP' ALREADY EXISTS."$UPPER(s_failed[1,2])
	              * The linked server exists, so run the query
	              =RunQuery()
	           ELSE
	              * The linked server doesn't exist, so display a message
	              =MESSAGEBOX(s_failed[1,2],32,'Failed')
	           ENDIF
	        ENDIF
	        =SQLDISCONN(gnConnHandle)
	     ENDIF
	
	     PROCEDURE RunQuery
	        SQLCommand="SELECT * FROM OPENQUERY(VFP,'SELECT * FROM CUSTOMER')"
	        QRYVal=SQLExec(gnConnHandle,SQLCommand,'SQLRESULTS')
	        IF QRYVal > 0
	           SELECT SQLResults
	           BROW
	        ELSE
	           =AERROR(L_Server)
	           =MESSAGEBOX(L_Server[1,2],32,'Query Failed')
	        ENDIF
	        RETURN
	
	After running the code snippet, open SQL Server Enterprise Manager and expand the
	Linked Servers node. Note that a linked server named VFP has been added.
	
	REFERENCES
	==========
	
	For more information about sp_addlinkedserver, search for "sp_addlinkedserver"
	in the Transact - SQL Reference Help file.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbSQLServ kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbSQLServSearch kbAudDeveloper kbSQLServ700 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0; winnt:7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
