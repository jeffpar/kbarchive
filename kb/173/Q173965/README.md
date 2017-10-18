---
layout: page
title: "Q173965: Max Number of SQL Statements Reached in IDC"
permalink: kb/173/Q173965/
---

## Q173965: Max Number of SQL Statements Reached in IDC

	Article: Q173965
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using more than 20 SQL Statements in an Internet Database Connector
	(IDC) file, you may get the following error message:
	
	  Error performing query maximum number of SQL statement fields in
	  the idc file has been exceeded.
	
	CAUSE
	=====
	
	The Httpodbc.dll file was hard coded to support a maximum of 20 SQL Statements
	per IDC file.
	
	RESOLUTION
	==========
	
	A new version of the Httpodbc.dll file allows a maximum of 100 SQL Statements
	per IDC file. This new version will only work with Microsoft Windows NT Server
	Service Pack 3 (SP3) or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem.
	
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the next Service Pack that contains this fix. Contact
	Microsoft Technical Support for more information.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
