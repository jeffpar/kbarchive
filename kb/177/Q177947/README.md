---
layout: page
title: "Q177947: PRB: &quot;Syntax Error in FROM Clause&quot; Using Text ODBC Driver"
permalink: kb/177/Q177947/
---

## Q177947: PRB: &quot;Syntax Error in FROM Clause&quot; Using Text ODBC Driver

	Article: Q177947
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC500 kbVC600 kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSOD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AppWizard to create a CRecordset class using the ODBC Text
	Driver, your project will compile. However, when you try to open the recordset,
	you will get the following error message:
	
	  Syntax error in FROM clause.
	
	CAUSE
	=====
	
	The AppWizard incorrectly parses the table as [Table].[txt], instead of as
	[Table#txt].
	
	RESOLUTION
	==========
	
	In the CTextDriverSet.cpp implementation file, find the
	CTextDriverSet::GetDefaultSQL() function and change the return value from
	
	     return _T("[Table].[txt]");
	
	to the following:
	
	     return _T("[Table#txt]");
	
	Here is the function before the changes:
	
	     CString CTextDriverSet::GetDefaultSQL()
	     {
	        return _T("[Table].[txt]");
	
	     }
	
	Here is the function after the changes:
	
	     CString CTextDriverSet::GetDefaultSQL()
	     {
	        return _T("[Table#txt]");
	     }
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In Notepad
	----------
	
	1. Create a text file with the following content:
	
	     Field1,Field2
	     1,abc
	
	2. Save this file as Table.txt and close it.
	
	3. Create a new User DSN based on the Microsoft Text Driver and name it
	  TextDriverSample.
	
	4. Clear the Use Current Directory box.
	
	5. Click the Select Directory button and select the directory that contains
	  Table.txt.
	
	6. Click Options.
	
	7. Select *.txt from the Extensions list box.
	
	8. Click the Define Format button.
	
	9. Select Table.txt.
	
	10. Select the Column Name Header box.
	
	11. From the Format combo box, select CSV Delimited.
	
	12. Click the Guess button.
	
	13. Save and exit the ODBC Manager.
	
	Start Visual C++ 5.0 or Visual C++ 6.0
	--------------------------------------
	
	1. Create a new MFC application.
	
	2. Select Single Document, then click Next.
	
	3. Select Database View Without File Support.
	
	4. Click the Data Source button.
	
	5. From the ODBC combo box, select TextDriverSample, then click OK.
	
	6. From the Database Tables list, select Table.txt.
	
	7. Click OK, then click Finish.
	
	8. Compile the project.
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no longer
	contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	Additional query words: Bomb Error
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC500 kbVC600 kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:2.5; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
