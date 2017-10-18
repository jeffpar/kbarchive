---
layout: page
title: "Q142216: HOWTO: Create ODBC Data Sources Using SqlConfigDataSource"
permalink: kb/142/Q142216/
---

## Q142216: HOWTO: Create ODBC Data Sources Using SqlConfigDataSource

	Article: Q142216
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbcode kbODBC kbvfp300 kbvfp300b kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible programmatically to create an ODBC datasource rather than
	requiring it to be created manually through the ODBC Administrator (or through
	the modification of the Odbc.ini file). The SqlConfigDataSource function, found
	in the Odbccp32.dll, can be used for this purpose.
	
	MORE INFORMATION
	================
	
	The following two examples show how to use this API function to create a
	datasources to a Microsoft Excel 5.0 file using the Microsoft Excel tier 1
	driver or to a VFP table. You can find information on the properties that are
	used for any particular driver by creating an test entry manually through the
	ODBC administrator and then checking the registry entries that are present. For
	example, in Windows 95, you can run Regedit.exe and look at the registry for the
	following entry:
	
	  Hkey_Current_User/Software/ODBC/ODBC.INI
	
	Example 1:
	
	   * Code to create a new datasource for an Excel file.
	     *
	     * First you need to use the Declare DLL function to prototype the
	     * SQLConfigDataSource function
	     ***
	     DECLARE Integer SQLConfigDataSource in odbccp32.dll Integer, Integer,;
	             String, String
	     ***
	     * Now you need to create a string containing the settings appropriate
	     * to the driver you are using.. the following is an example for a tier 1
	     * Microsoft Excel ODBC driver accessing the Schedule.xls file.
	     ***
	     settings="DSN=NewExcelDataSource"+chr(0)+;
	               "Description=NewExcel Description"+chr(0)+;
	               "FileType=Excel 5.0"+chr(0)+;
	               "DBQ=C:\schedule.xls"+chr(0)+;
	               "MaxScanRows=16"
	     * Note: If you have spaces on either side of the equal sign (=), this
	     * code will not work.
	     ? SQLConfigDataSource(0,1,"Microsoft Excel Driver (*.xls)",settings)
	     ***
	
	Example 2:
	
	     * Code to create a new datasource to a VFP table.
	     *
	     * First you need to use the Declare DLL function to prototype the
	     * SQLConfigDataSource function
	     ***
	     DECLARE Integer SQLConfigDataSource in odbccp32.dll Integer, ;
	        Integer, String, String
	     ***
	     * Now you need to create a string containing the settings appropriate
	     * to the driver you are using. The following is an example for the
	     * Microsoft VFP ODBC driver accessing the customer.dbf file.
	     ***
	     settings="DSN=VFP Tables"+chr(0)+;
	               "Description=VFP ODBC Driver"+chr(0)+;
	               "SourceDB=c:\vfp\samples\data\customer.dbf"+chr(0)+;
	               "SourceType=DBF"
	
	     * Note: If you have spaces on either side of the equal sign (=), this
	     * code will not work.
	     ? SQLConfigDataSource(0,1,"Microsoft Visual FoxPro Driver",settings)
	
	     ***
	     * Now you can create a view to these datasources either through the view
	     * designer or in code.
	     ***
	
	Additional query words: ODBC SQLCONFIGDATASOURCE
	
	======================================================================
	Keywords          : kbcode kbODBC kbvfp300 kbvfp300b kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
