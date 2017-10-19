---
layout: page
title: "Q170667: Index Server CGI Error"
permalink: /kb/170/Q170667/
---

## Q170667: Index Server CGI Error

	Article: Q170667
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears:
	
	  CGI Error
	
	  The specified CGI application misbehaved by not returning a complete set
	  of HTTP headers. The headers it did return are:
	
	CAUSE
	=====
	
	When a search is performed with Microsoft Index Server and the Highlight option
	is used (Condensed or Full Text), the link calls Webhits.exe. This is a CGI
	application that uses Netapi32.dll. If the IUSR_machinename account (or the
	logged on user) does not have access to this file, the error message results.
	
	RESOLUTION
	==========
	
	This problem does not occur in Index Server version 2.0 and later. To resolve
	this problem, upgrade to Index Server 2.0 or later.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Give the IUSR_machinename account or your webusers group read access on
	  Netapi32.dll in the Winnt\System32 directory.
	
	  -OR-
	
	- Do not use the highlighting functionality of Microsoft Index Server.
	
	MORE INFORMATION
	================
	
	Webhits.exe resides by default in the /scripts/samples/search directory.
	Netapi32.dll resides in the winnt\system32 directory.
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINDOWS:1.1
	Issue type        : kbprb
	
	=============================================================================
	
