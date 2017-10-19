---
layout: page
title: "Q164586: INF: How to Use OLE DB Sample Text Provider in ADO"
permalink: /kb/164/Q164586/
---

## Q164586: INF: How to Use OLE DB Sample Text Provider in ADO

	Article: Q164586
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can use ADO to access the sample text OLE DB
	provider.
	
	MORE INFORMATION
	================
	
	The OLE DB SDK installs a sample text OLE DB provider that allows you to access
	text files. This sample text provider is located in the Samples\Sampprov
	directory. To use this sample text provider in ADO, you need to change the
	source code of the sample text provider, and you also need to change the ADO
	threading model. To do this, perform the following steps:
	
	1. Modify the SetProperties function in the CutilProp class. The source file
	  that contains this function is Utilprop.cpp. Change the last line of this
	  function to return DB_E_ERRORSOCCURRED instead of E_FAIL. The complete line
	  is:
	
	  return ResultFromScode( DB_E_ERRORSOCCURRED  );
	
	  ADO returns an error if the underline providers return E_FAIL when setting the
	  OLE DB properties. The sample text driver needs to return DB_E_ERRORSOCCURRED
	  instead of E_FAIL if there are any unsupported properties encountered.
	
	2. The ADO threading model needs to be either "apartment" or "both." The default
	  threading model is the apartment model. The sample text provider does not
	  register any threading model, so it defaults to a single-threaded model. The
	  threading models needs to match up in order for ADO to communicate with the
	  sample text provider. After changing the threading model, you will need to
	  restart Internet Information Server (IIS) for the changes to take effect.
	
	You can use the batch file that came with the OLE DB SDK 1.1 to change the ADO
	apartment model. These files are located in the Bin\Util OLEDBSDK directory. The
	Makeapt batch file sets ADO to be apartment model threaded. You can create a REG
	file base on the following code and merge it with the registry to change the ADO
	threading model to both:
	
	WARNING: Modifying the registry incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{0000022C-0000-0010-8000-
	  00AA006D2EA4}\InprocServer32]
	  "ThreadingModel"="Both"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00000231-0000-0010-8000-
	  00AA006D2EA4}\InprocServer32]
	  "ThreadingModel"="Both"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00000280-0000-0010-8000-
	  00AA006D2EA4}\InprocServer32]
	  "ThreadingModel"="Both"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00000281-0000-0010-8000-
	  00AA006D2EA4}\InprocServer32]
	  "ThreadingModel"="Both"
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{00000293-0000-0010-8000-
	  00AA006D2EA4}\InprocServer32]
	  "ThreadingModel"="Both"
	
	After you finish the two steps listed above, you can use the following Visual
	Basic code to use the sample text provider to retrieve data from a text file in
	ADO:
	
	     Private Sub myTest()
	          Dim con As New ADODB.Connection
	          Dim rs As ADODB.Recordset
	
	          ' data source specifies path that contains customer.csv
	          con.Open "provider=sampprov;data
	     source=c:\\sdks\\oledbsdk\\samples\\sampclnt\\"
	          Set rs = con.Execute("customer.csv")
	
	          For i = 0 To rs.Fields.Count - 1
	              Print rs.Fields(i).Name
	          Next i
	          While Not rs.EOF
	              Debug.Print rs(0)
	              rs.MoveNext
	          Wend
	     End Sub
	
	Additional query words: ASP
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDB110
	Version           : WINDOWS:1.1
	Issue type        : kbhowto
	
	=============================================================================
	
