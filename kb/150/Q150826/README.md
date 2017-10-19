---
layout: page
title: "Q150826: Batch File to Display IIS Environment Variables from Browser"
permalink: /kb/150/Q150826/
---

## Q150826: Batch File to Display IIS Environment Variables from Browser

	Article: Q150826
	Product(s): Internet Information Server
	Version(s): 1.0 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following batch file will create a listing of environment variables when a
	client connects to a Microsoft Internet Information Server (IIS).
	
	Create a file with Notepad and type the following lines of code. Save the file in
	the scripts directory as Environment.cmd.
	
	     @echo off
	     echo Content-Type: text/plain
	     echo.
	     set
	
	From a browser, type the http://<Web Server Name>/<Path to the Script
	file>
	
	where, WWW.UNKNOWN.COM is the full qualified Domain Name, and
	SCRIPTS/ENVIRONMENT.CMD? is the Path to the Script file. For example:,
	HTTP://WWW.UNKNOWN.COM/SCRIPTS/ENVIRONMENT.CMD?
	
	NOTE: The question mark is very important. It informs the server that this is a
	GET request instead of downloading the file.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150041 : Environment Variables Returned by IIS via CGI
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0 3.5 3.51
	
	=============================================================================
	
