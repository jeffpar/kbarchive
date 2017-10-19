---
layout: page
title: "Q314888: FIX: OLE DB Provider Improperly Enumerates DBSCHEMA_TABLES"
permalink: /kb/314/Q314888/
---

## Q314888: FIX: OLE DB Provider Improperly Enumerates DBSCHEMA_TABLES

	Article: Q314888
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft ActiveX Data Objects (ADO) Connection OpenSchema()
	method, version 9262 of the Microsoft Visual FoxPro OLE DB provider may not
	identify tables properly.
	
	The OLE DB provider identifies tables properly until the provider encounters a
	file with a file extension that has been modified, such as an executable (.exe)
	file that is renamed to have a .dbf file extension. The OLE DB provider may
	identify this file properly, but the provider will not identify tables properly
	after this point.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 9262 of the Visual
	FoxPro OLE DB Provider, which shipped with Microsoft Visual FoxPro 7.0. This
	problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from Visual FoxPro 7.0. The code will create four tables
	and one text (.txt) file that is renamed to have a .dbf file extension.
	
	  CLEAR
	  #DEFINE adSchemaTables 20
	
	  LOCAL lcStr1 as String, ;
	  	lcMyDSN as String, ;
	  	loRS as ADODB.RecordSet, ;
	  	loConn as ADODB.Connection
	  	
	  lcStr1 = "This is a text file, not a .dbf"
	  lcMyDsn = "Provider= vfpoledb;Data Source=" + JUSTPATH(SYS(16))
	  loRS = NULL
	  loConn = NULL
	
	  CD JUSTPATH(SYS(16))
	
	  CREATE TABLE Q314888_A.DBF (F1 i)
	  CREATE TABLE Q314888_B.DBF (F1 i)
	  STRTOFILE(lcStr1, "Q314888_C.DBF")
	  CREATE TABLE Q314888_D.DBF (F1 i)
	  CREATE TABLE Q314888_E.DBF (F1 i)
	
	  INSERT INTO Q314888_A VALUES (1)
	  INSERT INTO Q314888_B VALUES (2)
	  INSERT INTO Q314888_D VALUES (3)
	  INSERT INTO Q314888_E VALUES (4)
	  CLOSE TABLES ALL
	
	  loConn = CREATEOBJECT("ADODB.Connection")
	  loConn.OPEN(lcMyDSN)
	  loRS = loConn.OpenSchema(adSchemaTables)
	
	  WITH loRS
	      ? .FIELDS(2).NAME
	      .MoveFirst
	      DO WHILE ! .EOF
	          ? .FIELDS(2).VALUE
	          .MoveNext
	      ENDDO
	  ENDWITH
	
	  loRS.CLOSE
	  loConn.CLOSE
	  loRS = NULL
	  loConn = NULL
	  ERASE Q314888*.DBF
	
	Additional query words: OLEDB kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
