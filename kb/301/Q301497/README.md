---
layout: page
title: "Q301497: FIX: The adAsyncExecute Flag Fails with VFPODBC on MDAC 2.6"
permalink: kb/301/Q301497/
---

## Q301497: FIX: The adAsyncExecute Flag Fails with VFPODBC on MDAC 2.6

	Article: Q301497
	Product(s): Microsoft FoxPro
	Version(s): 1.0,2.0,2.6,2.6 SP1,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbmdac260sp2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, versions 1.0, 2.0, 3.0, 4.0, 5.0 
	- Microsoft Data Access Components versions 2.6, 2.6 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Data Access Components (MDAC) version 2.6 or 2.6
	Service Pack 1 (SP1), the ODBC Driver for Visual FoxPro no longer supports the
	adAsyncExecute flag. When you try to use this flag from ActiveX Data Objects
	(ADO), you receive the following error message on the client:
	
	  Current provider does not support asynchronous execution.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Data
	Access Components 2.6. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q300635 INFO: How to Obtain the Latest MDAC 2.6 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Version       Size     File name     Platform
	  ---------------------------------------------------------
	  25-Jun-2001  2.61.7625.0   311,568  Msdasql.dll   x86
	  25-Jun-2001  2.61.7625.0    16,384  Msdasqlr.dll  x86
	  25-Jun-2001  2.61.7625.0    94,480  Msdatl3.dll   x86
	  25-Jun-2001  2.61.7625.0    24,848  Msdatt.dll    x86
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Microsoft Data Access Components 2.6 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, run the following Microsoft Visual Basic for
	Applications (VBA) code:
	
	  Sub VFPAsyncFailTest()
	  Dim conn As ADODB.Connection
	  Dim rs As ADODB.recordset
	      
	      ' Open connection to VFPODBC from ADO.
	      Set conn = New ADODB.Connection
	      conn.Open "Provider=MSDASQL;" & _
	                "DRIVER=Microsoft FoxPro VFP Driver (*.dbf);" & _
	                "BackgroundFetch=No;Exclusive=No;" & _
	                "SourceType=DBF;SourceDB=C:\;"
	      
	      ' Drop and re-create a test table.
	      On Error Resume Next
	      conn.Execute "drop table filename.dbf"
	      On Error GoTo 0
	      conn.Execute "create table filename.dbf (f1 c(10))"
	      conn.Execute "insert into filename.dbf (f1) values ('Some Data...')"
	      
	      ' Open table normally, which works OK here.
	      Set rs = conn.Execute("select * from filename.dbf", , adCmdText)
	      Debug.Print rs.Fields("f1").value
	      rs.Close
	      Set rs = Nothing
	      
	      ' Use adAsyncExecute to open. Error occurs here.
	      Set rs = conn.Execute("select * from filename.dbf", , _
	                             adCmdText + adAsyncExecute)
	      rs.Close
	      Set rs = Nothing
	      conn.Close
	      Set conn = Nothing
	      
	  End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmdac260sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC260 kbODBCVFP100 kbODBCVFP200 kbODBCVFP300 kbODBCVFP400 kbODBCVFP500 kbMDAC260SP1
	Version           : :1.0,2.0,2.6,2.6 SP1,3.0,4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
