---
layout: page
title: "Q210457: ASP 0115 or Inetinfo Application Error Occurs on ASP File"
permalink: /kb/210/Q210457/
---

## Q210457: ASP 0115 or Inetinfo Application Error Occurs on ASP File

	Article: Q210457
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an ASP file that performs a database query, one of the following
	error messages may occur:
	
	  Error 'ASP 0115'
	  Unexpected error
	  /<RelativePath>/<ASP_File_Name>.asp
	  A trappable error occurred in an external object. The script cannot continue
	  running.
	
	  Inetinfo application error "The instruction at 0x77f6467a referenced memory
	  at 0x64002e00 the memory could not be written.
	
	Note: The Roadmap sample Web site contains ASP files that can cause the above
	error messages to occur if the ACL permissions are not set correctly.
	
	CAUSE
	=====
	
	When you perform a query (either IDQ or ADO), it is executed in the context of
	the Windows NT user account that has been authenticated on the Web site. The
	errors occur when the user account does not have the appropriate permissions in
	the Access Control Lists (ACLs) for all resources used by the query.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Grant Read permission to the user account (IUSR_<ComputerName> by
	  default) for the following directories:
	
	   - The root directory of the disk that contains the ASP file.
	
	   - The %SystemRoot%\system32\ directory.
	
	   - The %SystemRoot%\system32\inetserv directory.
	
	   - The Web site's home directory (C:\InetPub by default).
	
	  Note: If ADO queries are being used, grant Read permission to the following
	  directories:
	
	   - C:\Program Files\Common Files\System\ole db
	
	   - C:\Program Files\Common Files\System\ado
	
	2. Grant Change permission to the user account for the actual database file
	  being used, as well as the directory that contains that file.
	
	3. Grant Write permission to the user account for the system's temporary
	  directory. (This directory is specified by the system TEMP and TMP
	  environment variables. For more information on temporary variables, see the
	  following section.)
	
	MORE INFORMATION
	================
	
	Temporary Variables:
	
	The Jet database engine creates temporary files in the temporary directory during
	Jet operations. By default, these environment variables are defined for each
	user profile, and are not system-wide settings. To modify them, use one of the
	following methods:
	
	- System-Wide Settings
	
	  In the Autoexec.bat file (located in the root of the system drive), add lines
	  similar to the following, using the path to the directory that you want to
	  keep temporary files:
	
	  Set TEMP=C:\Temp
	  Set TMP =C:\Temp
	
	  For the Autoexec.bat file to be read with the new settings, you will need to
	  restart the computer.
	
	- User Settings
	
	  To set the variables only for the user who's currently logged on to the
	  server, perform the following steps:
	
	  1. On the desktop, right-click My Computer, and the click Properties.
	
	  2. Click the Environment tab.
	
	  3. Under User Variables for <User_Name>, change the values for both the
	     TEMP and TMP variables, and then click OK.
	
	  4. Log off, and then log back on to the Windows NT computer.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: oledb idc htx ado idq query odbc db akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
