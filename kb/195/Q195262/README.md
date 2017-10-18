---
layout: page
title: "Q195262: HOWTO: Delete ODBC Data Source Using SqlConfigDataSource"
permalink: kb/195/Q195262/
---

## Q195262: HOWTO: Delete ODBC Data Source Using SqlConfigDataSource

	Article: Q195262
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to programmatically remove an existing ODBC
	datasource instead of manually removing it through the ODBC Administrator. You
	can use the SqlConfigDataSource function in Odbccp32.dll for this purpose.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to use this API function to remove a
	Visual FoxPro Database datasource. To use this code, you need to create a
	datasource called rmtest that points to the data1.dbc in your local hard drive.
	
	     DECLARE Integer SQLConfigDataSource IN odbccp32.dll Integer, ;
	        Integer, String, String
	     DriverName="Microsoft Visual FoxPro Driver"
	     IsRemove =SQLConfigDataSource(1,3,DriverName, "DSN=rmtest" + CHR(0)+;
	                 "Description=david test"+CHR(0)+;
	                 "SourceDB=C:\TEMP\data1.dbc"+CHR(0)+;
	                 "SourceType=DBC")
	     IF IsRemove>0
	        WAIT WINDOW "Deleted"
	     ELSE
	        WAIT WINDOW "Delete failed"
	     ENDIF
	
	Note that the "Description=david test" portion of the connection string can be
	omitted and the datasource will still be removed.
	
	REFERENCES
	==========
	
	To programmatically create a data source, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q142216 HOWTO: Create ODBC Data Sources Using SqlConfigDataSource
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
