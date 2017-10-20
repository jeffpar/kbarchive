---
layout: page
title: "Q166111: Asynchronous MFC ODBC Database Processing Using Threads"
permalink: /kb/166/Q166111/
---

## Q166111: Asynchronous MFC ODBC Database Processing Using Threads

{% raw %}

	Article: Q166111
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSample kbDatabase kbMFC kbODBC kbThread kbVC kbVC420 kbVC500 kbV
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample shows how to provide asynchronous database processing by running a
	database query on a secondary thread.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Mtdb.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	NOTE: Use the -d option when running MTDB.EXE to decompress the file and re-
	create the proper directory structure.
	
	
	MORE INFORMATION
	================
	
	Beginning with version 4.2 of the MFC database classes, the ability to set the
	processing mode to asynchronous using CDatabase::SetSynchronousMode() has become
	obsolete. The MFC ODBC classes now use only synchronous processing.
	
	The following functions, which were used with asynchronous processing in versions
	before 4.2, are also obsolete: CDatabase::InWaitForDataSource(),
	CDatabase::OnWaitForDataSource() and CRecordset::OnWaitForDataSource().
	
	One way to implement asynchronous database processing with MFC 4.2 and above is
	to run your database query on a secondary worker thread. The MTDB sample
	illustrates this by having each document open the corresponding recordset on a
	new worker thread. When the user presses the "Cancel Query" button, the primary
	thread cancels processing on the secondary thread.
	
	As with any multi-threaded database application, each component must be
	thread-safe. Specifically, you must be using a thread-safe ODBC driver, such as
	the Microsoft SQL Server ODBC driver, for this application to work correctly.
	
	This sample uses the Student Registration database, which can be created for SQL
	Server using the STDREG sample program that is included with Visual C++.
	
	Additional query words: Mtdb
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbDatabase kbMFC kbODBC kbThread kbVC kbVC420 kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	
	=============================================================================
	

{% endraw %}
