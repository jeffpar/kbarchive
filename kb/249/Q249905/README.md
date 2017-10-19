---
layout: page
title: "Q249905: Cannot Access SQL Database from Cold Fusion Applications"
permalink: /kb/249/Q249905/
---

## Q249905: Cannot Access SQL Database from Cold Fusion Applications

	Article: Q249905
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Allaire Cold Fusion server software to create Web applications on a
	computer running Microsoft SQL Server, you may then not be able to access a
	Structured Query Language (SQL) database from those applications. You may
	receive either of the following error messages:
	
	  403: Access Forbidden
	
	  or
	
	  404: Object Not found
	
	CAUSE
	=====
	
	This behavior can occur because Cold Fusion installs its own version of Open
	Database Connectivity (ODBC) drivers, which overwrites the SQL ODBC drivers.
	
	RESOLUTION
	==========
	
	To resolve this behavior, reinstall the ODBC drivers from SQL Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
