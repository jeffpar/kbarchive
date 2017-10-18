---
layout: page
title: "Q127193: SAMPLE: DLGDB CDialog Sharing a CRecordset Object"
permalink: kb/127/Q127193/
---

## Q127193: SAMPLE: DLGDB CDialog Sharing a CRecordset Object

	Article: Q127193
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: This is the 16-bit version of this sample. There is an equivalent 32- bit
	sample available under the name DLGDB32.
	
	The DLGDB code sample demonstrates how to have a CDialog derived class share a
	CRecordset object that a CRecordView is already using. In addition, when used by
	itself, the code sample also demonstrates how to select CRecordset object from a
	CDocument without having a CRecordView.
	
	NOTE: This sample assumes that ODBC has been installed and that the Student
	Registration data source has been configured.
	
	NOTE: The file must be decompressed by typing "DLGDB -d".
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Dlgdb.exe (http://support.microsoft.com/download/support/mslfiles/Dlgdb.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: DLGDB32
	
	======================================================================
	Keywords          : kbfile kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	
	=============================================================================
	
