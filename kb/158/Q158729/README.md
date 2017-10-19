---
layout: page
title: "Q158729: Characters Converted by Httpodbc.dll"
permalink: /kb/158/Q158729/
---

## Q158729: Characters Converted by Httpodbc.dll

	Article: Q158729
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certain characters are converted when you pass them into the Internet Database
	Connector (IDC) mechanism (Httpodbc.dll).
	
	MORE INFORMATION
	================
	
	The Internet Database Connector makes the following conversions on characters
	when it passes from an HTML form into the IDC file.
	
	The following can cause a problem when you try to pass portions of a Microsoft
	SQL Server statement into an IDC file. It is not recommended to pass entire
	portions of a SQL statement in via parameters. Due to malicious users
	potentially being able to specify rogue SQL parameters alter intended
	application usage.
	
	- Double all single quotes to prevent SQL quoting problem.
	
	- Remove escaped '\n's.
	
	- Replace all '&' parameter delimiters with real '\n'.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis200
	Version           : :2.0
	
	=============================================================================
	
