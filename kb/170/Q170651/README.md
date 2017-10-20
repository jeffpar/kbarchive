---
layout: page
title: "Q170651: PRB: ODBC Connectivity Errors with 68K Executables Only"
permalink: /kb/170/Q170651/
---

## Q170651: PRB: ODBC Connectivity Errors with 68K Executables Only

{% raw %}

	Article: Q170651
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages are received when running a 68K Visual FoxPro for
	Macintosh executable and using either the SQLConnect() command and specifying a
	connection, or trying to bring up a form that has a remote view based on a
	connection in its data environment:
	
	  Connectivity error: [Visigenic][ODBC SQL Server Driver] invalid object name
	  'dbo.titles'.
	
	  Error loading file - Loading form or the data environment - record number 4.
	
	  Connectivity error: [Visigenic][ODBC SQL Server Driver] invalid object name
	  'dbo.titles'.
	
	The invalid object name referenced in the error messages varies depending upon
	the SQL Server database used on the remote data source. The above messages were
	generated while connecting to the Authors table in the sample Pubs database
	provided with SQL Server. The record number, when loading the form, may also
	vary.
	
	The same code works without error in a Visual FoxPro for Macintosh PowerMacintosh
	executable.
	
	NOTE: As of 12/9/98, Visigenic has been acquired by INPRISE, Inc.
	
	CAUSE
	=====
	
	The connection used to connect to the remote data source has the "Always" option
	set for when to Display ODBC Login Prompts.
	
	RESOLUTION
	==========
	
	Set the Display ODBC Login Prompts for the connection in the database to "When
	Login info is not specified" or "Never." If it is set to "When Login info is not
	specified," ensure that the login info is always specified in the connection.
	The connection can be modified through the Project Manager or with the MODIFY
	CONNECTION <connection name> command when the database is open and
	current.
	
	Another possible resolution is to use the 68K ODBC files that come with FoxPro
	2.6 for Macintosh or Microsoft Office for Macintosh. The problem does not occur
	when using these ODBC extensions. These files have a Microsoft or Apple
	copyright, depending upon the file. The 68K ODBC files shipped with Visual
	FoxPro have a Visigenic Software Inc. copyright.
	
	Note that when using the non-Visigenic ODBC extensions, the data sources must be
	modified (no changes necessary though) and resaved before the errors clear up.
	
	MORE INFORMATION
	================
	
	Visual FoxPro for Macintosh can connect to remote data on SQL Server and, if an
	ODBC driver is available, other remote data sources. The ODBC driver for SQL
	Server, both 68K and PowerPC versions, is provided with Visual FoxPro.
	
	REFERENCES
	==========
	
	For additional information on the ODBC related files installed with Visual
	FoxPro for Macintosh, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152516 List of ODBC Files Installed During Setup
	
	For information on how to contact INPRISE, Inc., please see the following article
	in the Microsoft Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
