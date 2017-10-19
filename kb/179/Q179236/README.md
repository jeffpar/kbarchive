---
layout: page
title: "Q179236: INFO: Using SQLConfigDatasource with MS Oracle ODBC Driver"
permalink: /kb/179/Q179236/
---

## Q179236: INFO: Using SQLConfigDatasource with MS Oracle ODBC Driver

	Article: Q179236
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.5,Build 2.573.2927,Build 2.73.7269
	Operating System(s): 
	Keyword(s): kb3rdparty kbGrpDSMDAC kbDSupport kbMDAC250
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft ODBC for Oracle version 2.0 Build 2.73.7269 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a list of valid SQLConfigDatasource settings for the
	Microsoft ODBC Driver for Oracle, version 1.0 (Msorcl10.dll) and the Microsoft
	ODBC Driver for Oracle, version 2.0 (Msorcl32.dll).
	
	Note that the Msorcl10.dll ODBC driver (version 1.0) supports all of the settings
	below except the Server setting.
	
	The Msorcl32.dll ODBC driver (version 2.0 and higher) supports all of the
	settings listed below.
	
	Some of the settings are ignored by the driver but are accepted by
	SQLConfigDatasource. These settings can only be provided at run time by
	including them in the ODBC connection string. An ignored setting will not be
	stored in the registry when SQLConfigDatasource creates the data source. You can
	run the sample code provided below and examine the registry settings created to
	determine which settings are ignored by the particular driver you are using.
	
	In the chart below, A/N means any valid alphanumeric string up to the maximum
	allowable length. Max Len (maximum length) is the maximum allowable string
	length accepted by the setting and includes the zero terminator character when
	determining the length.
	
	  Setting            Max Default  Valid    Setting
	  Name               Len Value    Values   Description
	  ------------------------------------------------------------------
	
	  BufferSize         7   65535    1000     Minimum fetch buffer size.
	                                   to
	                                  65535
	
	  CatalogCap         2   1        0 or 1   1 means convert non-quoted
	                                           identifiers to upper case in
	                                           the catalog functions.
	
	  ConnectString      128 ""       A/N      Connection string. Required
	                                           method of specifying the server
	                                           name with the Msorcl10.dll
	                                           driver.
	
	  Description        256 ""       A/N      Description.
	
	  DSN                33  ""       A/N      Data source name.
	
	  NumberFloat        2   ""       0 or 1   0 means FLOAT columns are
	                                           treated as SQL_FLOAT. 1 means
	                                           FLOAT columns are treated as
	                                           SQL_DOUBLE.
	
	  PWD                30  ""       A/N      Password.
	
	  RDOSupport         2   ""       0 or 1   Allows RDO to call Oracle
	                                           procedures.
	
	  Remarks            2   0        0 or 1   Include REMARKS in Catalog
	                                           functions.
	
	  RowLimit           4   ""       0        Maximum number of rows returned
	                                  to       by a select. A zero length
	                                  999      string or 0 means there is no
	                                           limit applied.
	
	  Server             128 ""       A/N      Oracle server name.
	
	  SynonymColumns     2   1        0 or 1   Include SYNONYMs in SQLColumns.
	
	  SystemTable        2   ""       0 or 1   0 means do not display system
	                                           tables. 1 means display system
	                                           tables.
	
	  TranslationDLL     33  ""       A/N      Translation DLL name.
	
	  TranslationName    33  ""       A/N      Translation name.
	
	  TranslationOption  33  ""       A/N      Translation option.
	
	  TxnCap             2   ""       A/N      Transaction capable. 0 means
	                                           the driver reports that it does
	                                           not support transactions. 1
	                                           means the driver reports it is
	                                           capable of performing
	                                           transactions.
	
	  UID                30  ""       A/N      User name.
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates how to create a data source using the
	SQLConfigDataSource application program interface (API) functions with the two
	available Microsoft Oracle ODBC drivers.
	
	     // START CODE SAMPLE
	
	     #include <windows.h>
	     #include <odbcinst.h>
	     #include <stdio.h>
	     #include <conio.h>
	
	     void main()
	     {
	      BOOL fResult = FALSE;
	
	      // Drop and re-create a Msorcl10.dll (version 1.0) data source.
	      fResult = SQLConfigDataSource( NULL,
	                                     ODBC_REMOVE_DSN,
	                                     "Microsoft ODBC Driver for Oracle",
	                                     "DSN=MSORCL10_DSN\0"
	                                   );
	
	      fResult = SQLConfigDataSource( NULL,
	                                     ODBC_ADD_DSN, /* OR ODBC_ADD_SYS_DSN */ 
	                                     "Microsoft ODBC Driver for Oracle",
	                                     "BufferSize=40000\0"
	                                     "CatalogCap=1\0"
	                                     "ConnectString=MyConnectString\0"
	                                     "Description=My Description Text\0"
	                                     "DSN=MSORCL10_DSN\0"
	                                     "NumberFloat=0\0"
	                                     "PWD=MyPassword\0"
	                                     "RDOSupport=0\0"
	                                     "Remarks=0\0"
	                                     "RowLimit=0\0"
	                                     "SynonymColumns=1\0"
	                                     "SystemTable=1\0"
	                                     "TranslationDLL=\0"
	                                     "TranslationName=\0"
	                                     "TranslationOption=\0"
	                                     "TxnCap=1\0"
	                                     "UID=MyUserID\0"
	                                   );
	
	      // Display success/failure.
	      printf( "MSORCL10.DLL SQLConfigDataSource returned %s\n",
	              (fResult) ? "TRUE" : "FALSE" );
	
	      // Drop and re-create a Msorcl32.dll (version 2.0) data source.
	      fResult = SQLConfigDataSource( NULL,
	                                     ODBC_REMOVE_DSN,
	                                     "Microsoft ODBC for Oracle",
	                                     "DSN=MSORCL32_DSN\0"
	                                   );
	
	      fResult = SQLConfigDataSource( NULL,
	                                     ODBC_ADD_DSN, /* OR ODBC_ADD_SYS_DSN */ 
	                                     "Microsoft ODBC for Oracle",
	                                     "BufferSize=40000\0"
	                                     "CatalogCap=1\0"
	                                     "ConnectString=MyConnectString\0"
	                                     "Description=My Description\0"
	                                     "DSN=MSORCL32_DSN\0"
	                                     "NumberFloat=0\0"
	                                     "PWD=MyPassword\0"
	                                     "RDOSupport=0\0"
	                                     "Remarks=0\0"
	                                     "RowLimit=0\0"
	                                     "Server=MyOracleServer\0"
	                                     "SynonymColumns=0\0"
	                                     "SystemTable=0\0"
	                                     "TranslationDLL=\0"
	                                     "TranslationName=\0"
	                                     "TranslationOption=\0"
	                                     "TxnCap=0\0"
	                                     "UID=MyUserID\0"
	                                    );
	
	      // Display success/failure.
	      printf( "MSORCL32.DLL SQLConfigDataSource returned %s\n",
	              (fResult) ? "TRUE" : "FALSE" );
	
	      printf( "Press any key to exit.\n" );
	      _getch();
	
	     }
	
	     // END CODE SAMPLE
	
	Additional query words: Msorcl32.dll kbODBC kbDatabase kbOracle kbDriver
	
	======================================================================
	Keywords          : kb3rdparty kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle206325 kbODBCOracle2737269 kbODBCOracle25732927 kbODBCOracle100Search kbODBCOracle200Search kbODBCOracle250Search
	Version           : :1.0,2.5,Build 2.573.2927,Build 2.73.7269
	Issue type        : kbinfo
	
	=============================================================================
	
