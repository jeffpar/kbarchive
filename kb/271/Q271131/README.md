---
layout: page
title: "Q271131: Use the DRDA_VB Sample for DB2OLEDB"
permalink: kb/271/Q271131/
---

## Q271131: Use the DRDA_VB Sample for DB2OLEDB

	Article: Q271131
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbsna
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to test drive the OLE DB Provider for DB2 feature of
	Host Integration Server 2000 by using the demonstration host link services.
	
	MORE INFORMATION
	================
	
	The following steps are necessary to test drive the OLE DB Provider for DB2
	feature of Host Integration Server 2000 by using the demonstration host link
	services:
	
	1. From the Microsoft SNA Manager, add a new DEMO SDLC Link Service, by choosing
	  the DB2OLEDB script file.
	
	2. From the Microsoft SNA Manager, right-click the server name and click AS/400
	  Wizard on the All Tasks menu. Configure a new connection as follows:
	
	   - SNA Service: (Select server name.)
	
	   - Connection Name: DRDADEMO
	
	   - Link Service: (Select Link Service created in step 1.)
	
	   - Network Name: APPN
	
	   - Control Point Name: DRDADEMO
	
	   - SDLC settings: (Leave as default.)
	
	3. From the Microsoft SNA Manager, right-click the "Local APPC LUs" folder under
	  the server name, and then click Local LU on the New menu. Configure the new
	  Local LU as follows:
	
	   - LU Alias: LOCAL
	
	   - Network Name: APPN
	
	   - LU Name: LOCAL
	
	4. From the Action menu in Microsoft SNA Manager, click Save Configuration, and
	  then start the SNA Service. The newly-created DRDADEMO connection should go
	  to On Demand status.
	
	5. From the Run line of the Start menu, type "drda_vb" (without the quotation
	  marks), and then click OK to load the ADO Microsoft Visual Basic consumer
	  sample application.
	
	  a. Click Connect to use the ADO Connection.Open method. This action
	     establishes an APPC session between the OLE DB Provider for DB2 computer
	     and the demonstration AS/400.
	
	  b. When you are prompted to use an existing data link file, click Yes. When
	     you are prompted to enter the path to the data link file, use the
	     following, and then click OK:
	
	  "c:\program files\common files\system\ole db\data links\drdademo.udl"
	  (without the quotation marks)
	
	     (This path may vary depending on the system.)
	
	  c. Click Open RS to use the ADO Recordset.Open method.
	
	  d. In the Open dialog box, enter "SELECT * FROM PUBS.AUTHORS" (without the
	     quotation marks), and then click OK to continue.
	
	     The recordset is composed of the records in the "AUTHORS" DB2/400 table in
	     the DB/400 collection "PUBS", sorted by the first column AU_ID. The sample
	     DB/400 data is based on the authors table from the Microsoft SQL Server
	     pubs sample database.
	
	  e. Click Next to sequentially access all of the records in the table.
	
	  f. Click Close RS to close the host file by using the ADO Recordset.Close
	     method.
	
	  g. Click Disconnect to end the APPC session by using the ADO Connection.Close
	     method.
	
	  h. Exit the ADO consumer sample application.
	
	The current off-line script can be used to demonstrate a simple Visual Basic
	application, Active Server Page application, or Visual Basic component. It also
	works with well-known tools such as RowsetViewer. Unfortunately, the off-line
	demonstration script playback capabilities are insufficient to support
	demonstrating complex consumers such as SQL Server Data Transformation Services
	or Distributed Query Processing.
	
	Additional query words: VB ASP OLEDB SNA DTS DQP
	
	======================================================================
	Keywords          : kbDSupport kbsna 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
