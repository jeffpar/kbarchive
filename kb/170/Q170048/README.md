---
layout: page
title: "Q170048: Err Msg: Cannot Open the File: Queryhits.idq"
permalink: /kb/170/Q170048/
---

## Q170048: Err Msg: Cannot Open the File: Queryhits.idq

{% raw %}

	Article: Q170048
	Product(s): Internet Information Server
	Version(s): WinNT:1.1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click "Show Highlights (full text)" or "Show Highlights (condensed),"
	Index Server returns the error message:
	
	  Cannot open the file: \queryhits.idq.
	
	CAUSE
	=====
	
	When a web server hosts more than one Web site, Index Server will be able to
	function across all web sites with a global \scripts subdirectory, except for
	hit highlighting. The CGI program used for hit highlighting, Webhits.exe, cannot
	transverse global virtual directories to find the .idq file.
	
	RESOLUTION
	==========
	
	Upgrade to Index Server version 2.0 or later.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Create a second Scripts virtual directory, and point it to the same physical
	  directory as the global Scripts directory.
	
	2. Assign the IP address of the virtual server to the new Scripts virtual
	  directory.
	
	Because the virtual server now has a Scripts virtual directory assigned to it
	with the virtual server's IP address, Webhits.exe will then be able to find the
	scripts directory on that virtual server, and return the correct results.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WinNT:1.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
