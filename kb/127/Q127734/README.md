---
layout: page
title: "Q127734: HOWTO: Ensure ODBC.DLL and ODBCCURS.DLL Cursor Levels Match"
permalink: kb/127/Q127734/
---

## Q127734: HOWTO: Ensure ODBC.DLL and ODBCCURS.DLL Cursor Levels Match

	Article: Q127734
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,2.2,2.5,2.6,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC1
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ODBC Driver Manager and the Cursor Library must have the same cursor level.
	ODBC.DLL and ODBCCURS.DLL are the corresponding files in 16-bit Windows.
	ODBC32.DLL and ODBCCR32.DLL are the corresponding files in 32-bit Windows.
	
	Attempting to use these dynamic link libraries with mismatched cursor levels will
	cause the cursor library to fail to load. If the cursor library fails to load,
	the recordset will be a forward-only, read-only recordset. The following message
	may appear in the trace output when this condition exists:
	
	  Cursor library not used. Version mismatch with driver manager
	  State:01000[Microsoft][ODBC DLL]
	
	In some older versions of ODBC.DLL, this message may not appear even if the
	Driver Manager and Cursor Library do not match.
	
	MORE INFORMATION
	================
	
	To ensure that the Driver Manager and Cursor Library have the same cursor
	level:
	
	1. Open File Manager and go to the \WINDOWS\SYSTEM subdirectory.
	
	2. Highlight the file ODBC.DLL (or ODBC32.DLL) and press ALT+ENTER or choose
	  Properties from the File menu.
	
	3. In the Version Information section of the dialog box that appears, select
	  cursor level and note the level indicated.
	
	4. Follow steps 1 through 3 for the ODBCCURS.DLL (or ODBCCR32.DLL) file. If the
	  cursor levels are not the same, the Driver Manager and Cursor Library do not
	  match.
	
	What to Do If the Driver Manager and Cursor Library Do Not Match
	----------------------------------------------------------------
	
	If the Driver Manager and the Cursor Library do not match, reinstall the latest
	version of Microsoft Data Access Components (MDAC) from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/data
	
	If the cursor level for the Driver Manager and Cursor Library do match, but the
	trace message listed above still appears in the output, check to ensure that an
	older version of the DLL's are not anywhere in the path of the program. You can
	also use Component Checker Utility to verify MDAC installation. For additional
	information on Component Checker, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q307255 INFO: Component Checker: Diagnose Problems and Reconfigure MDAC
	  Installations
	
	Additional query words: 2.50 2.51 2.52 3.00 3.10 3.50
	
	======================================================================
	Keywords          : kbenv kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC150 kbMDAC210 kbMDAC250 kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,2.2,2.5,2.6,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
