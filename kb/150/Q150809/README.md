---
layout: page
title: "Q150809: Commenting an Internet Database Connector (IDC) File"
permalink: kb/150/Q150809/
---

## Q150809: Commenting an Internet Database Connector (IDC) File

	Article: Q150809
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Database Connector (IDC) files are used in the Internet Information
	Server (IIS) to specify an ODBC data source, username, template, and SQL
	statements to exchange data with a database.
	
	To place comments in an IDC file, begin a line with either the pound sign (#) or
	semi-colon (;).
	
	MORE INFORMATION
	================
	
	Here is an example IDC file with comments:
	
	  ; this is a comment
	  Datasource: Web SQL
	  Username: sa
	  Password:
	  Template: ctguestb.htx
	  SQLStatement:
	  +CREATE TABLE "Guests" (
	  +"FirstName" varchar(40),
	  +"LastName" varchar(40),
	  +"Email" varchar(40),
	  +"Homepage" varchar(80),
	  +"Comment" text,
	  +"WebUse" varchar(40)
	  +)
	  # This is also a comment
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	Issue type        : kbhowto
	
	=============================================================================
	
