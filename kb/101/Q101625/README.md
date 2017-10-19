---
layout: page
title: "Q101625: ORACLE.TXT for Visual Basic Version 3.0 Users"
permalink: /kb/101/Q101625/
---

## Q101625: ORACLE.TXT for Visual Basic Version 3.0 Users

	Article: Q101625
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The ORACLE.TXT file that shipped with Visual Basic version 3.0's ODBC Oracle
	driver has changed. The new version contains important troubleshooting
	information that is not available in the shipping version.
	
	MORE INFORMATION
	================
	
	Visual Basic version 3.0 (VB3.0) ships with the ODBC Oracle driver, which allows
	programmers to write applications that can make use of data in an Oracle server.
	One of the components installed with the ODBC Oracle driver is a file called
	ORACLE.TXT. This is installed in the Windows SYSTEM subdirectory. ORACLE.TXT
	contains a lot of information about how to install components that are required
	to connect to an Oracle Server using the ODBC Oracle driver. This information
	includes: the versions of SQL*Net for Windows that required, the contents and
	location of configuration files, troubleshooting tips for common error messages,
	and so forth.
	
	Since the release of Visual Basic 3.0, Oracle has released new updates to the
	SQL*Net .DLLs; as a result of this, the information in the ORACLE.TXT is no
	longer current. The new ORACLE.TXT containing the updated information is
	available from Microsoft Product Support Services. Please note that Microsoft
	Access version 1.1 ships the updated version of ORACLE.TXT. If you have
	installed Access after installing Visual Basic, then you will automatically have
	the new ORACLE.TXT. Otherwise, you can reinstall the Oracle driver from the
	Access ODBC disk to obtain the new ORACLE.TXT.
	
	Additional query words: 1.00.2816 Setup VB
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
