---
layout: page
title: "Q149882: HOWTO: Execute a Stored Procedure on an Oracle Server"
permalink: kb/149/Q149882/
---

## Q149882: HOWTO: Execute a Stored Procedure on an Oracle Server

	Article: Q149882
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbDSupport kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use SQL pass-through technology to execute a
	stored procedure on an Oracle server. Oracle does not use the standard SQL
	EXECUTE command to execute stored procedures.
	
	MORE INFORMATION
	================
	
	This example executes a stored procedure called SP_MYPROC. It is assumed that
	you have a valid ODBC datasource configured for the Oracle server. This example
	assumes that you have created a valid datasource called "ORADSN." This article
	does not cover the steps necessary to create a valid datasource. This article
	shows the proper syntax necessary to call a stored procedure called "SP_MYPROC,"
	which has no parameters, using Visual FoxPro. For information on creating stored
	procedures in Oracle see your Oracle documentation:
	
	  *************************************
	  ** Description of variables used  **
	  * h = handle
	  * ORADSN = datasource name
	  * USERID   = user id
	  * PWD        = password
	  **************************************
	
	     h=SQLConnect("ORADSN","USERID","PWD")   && Establish a connection
	
	     IF h > 0
	
	        WAIT WINDOW "Connection Successful" NOWAIT
	        =SQLExec(h,"{Call SP_MYPROC}")       && Execute the stored procedure
	        =SQLDisconnect(h)                    && Terminate the connection
	
	     ELSE
	
	        WAIT WINDOW "Connection Failed"
	
	     ENDIF
	
	NOTE: The 32-bit Visigenic Oracle ODBC driver that ships with Visual FoxPro 3.0b
	and many other 32-bit Microsoft products does not support the execution of
	stored procedures.
	
	NOTE: As of Dec-09-1998, Visigenic was acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: ODBC
	
	======================================================================
	Keywords          : kbcode kbinterop kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
