---
layout: page
title: "Q142681: IDC Script Fails to Connect to Database"
permalink: kb/142/Q142681/
---

## Q142681: IDC Script Fails to Connect to Database

	Article: Q142681
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- Microsoft Internet Explorer version 2.0 for Windows NT 3.51 
	- Microsoft Internet Explorer version 2.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to run an Internet Database Connector (IDC) script file from a Web
	browser, the following error messages (or similar) occur:
	
	In Internet Explorer 1.0:
	
	  The server considered the request for http://YourWebServer/YourScript.idc?'
	  an invalid request.
	
	In Internet Explorer 2.0:
	
	  Unable to open http://YourWebServer/YourScript.idc?. The site reported an
	  invalid request.
	
	The library Odbc32.dll could not be loaded to perform the query. Make sure ODBC
	has been properly installed on the server.
	
	CAUSE
	=====
	
	A possible cause for these error messages is insufficient Windows NT File System
	(NTFS) file permissions for Odbc32.dll.
	
	ODBC32.DLL is located in the nt_root\System32 directory. By default, the group
	EVERYONE has Change permissions (RWXD) on this directory and the files created
	in this directory. If this default has been changed, there is a chance that when
	Odbc32.dll was copied into the System32 directory it did not receive the
	"eXecute" permission that Internet Information Server (IIS) needs to run the DLL
	for the Web browser.
	
	RESOLUTION
	==========
	
	To resolve the problem, either restore the Change permission for the domain
	group Everyone on Odbc32.dll, or grant the eXecute permission for any account
	that you expect to be used to run IDC scripts from a Web browser. Typically,
	this includes the anonymous logon account that IIS creates for you during
	installation (IUSR_machine_name).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbIEsearch kbiis100 kbZNotKeyword2 kbIENT400Search kbIENT351Search kbZNotKeyword3 kbIE200WinNT351 kbIE200WinNT400
	Version           : :1.0,2.0
	
	=============================================================================
	
