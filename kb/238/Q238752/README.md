---
layout: page
title: "Q238752: PRB: SQLConfigDatasource Allows PageTimeout Value of 0"
permalink: kb/238/Q238752/
---

## Q238752: PRB: SQLConfigDatasource Allows PageTimeout Value of 0

	Article: Q238752
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.0,3.5,3.6,4.0
	Operating System(s): 
	Keyword(s): kbODBC kbODBC300 kbODBC350 kbODBC351 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, versions 3.0, 3.5, 3.6, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ODBC API call, SQLConfigDataSource(), provides the application developer a
	means to programmatically create a Datasource Name (DSN) for the ODBC "Microsoft
	Access Driver (*.mdb)." The SQLConfigDataSource() function can create a registry
	entry for PageTimeout that allows the value of 0. When the DSN is created in
	this manner and is reviewed in the ODBC Administrator, the following error
	message is displayed when the <OK> button is clicked:
	
	  ODBC Microsoft Access Setup - Invalid page timeout value.
	
	CAUSE
	=====
	
	A PageTimeout value of 0 or less is not valid for this driver property.
	
	RESOLUTION
	==========
	
	Ensure that the PageTimeout value is set to something greater than 0 when using
	the SQLConfigDataSource() function in the ODBC API.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use the following code to create a DSN that has a PageTimeout value of 0:
	
	  #include <windows.h>
	  #include <odbcinst.h>
	  #include <stdio.h>
	
	  int main(int argc, char* argv[])
	  {
	  	BOOL	rc;
	  	char szDriver[] = "Microsoft Access Driver (*.mdb)\0\0";
	  		rc = SQLConfigDataSource( NULL, 
	  								  ODBC_ADD_DSN, 
	  								  szDriver, 
	  								  (LPCSTR)"DSN=TestDSN\0" 
	  									"DBQ=C:\\db1.mdb\0" 
	  									"DRIVER=C:\\WINNT\\System32\\odbcjt32.dll\0" 
	  									"DRIVERID=25\0" 
	  									"PAGETIMEOUT=0\0" 
	  									"FIL=MS Access\0"
	  									"THREADS=3\0"
	  									"DESCRIPTION=Testing Driver\0" 
	  									"UID=sa\0" 
	  									"IMPLICITCOMMITSYNC=Yes\0"
	  									"MAXBUFFERSIZE=2048\0" 
	  									"USERCOMMITSYNC=Yes\0" 
	  									" General\0\0");
	  	   
	  		return 0;
	  }
	
	2. Click ODBC Administrator.
	
	3. Select the DSN you created, then click Configure.
	
	4. Click Advanced to see the PageTimeout value.
	
	5. Press OK.
	
	Additional query words: SQLConfigDataSource PageTimeOut
	
	======================================================================
	Keywords          : kbODBC kbODBC300 kbODBC350 kbODBC351 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbODBCAccess300 kbODBCAccess350 kbODBCAccess360 kbODBCAccess400
	Version           : :3.0,3.5,3.6,4.0
	Issue type        : kbprb
	
	=============================================================================
	
