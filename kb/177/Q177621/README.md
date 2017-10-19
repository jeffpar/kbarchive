---
layout: page
title: "Q177621: Dr. Watson in Mprouter.exe When Using a Script"
permalink: /kb/177/Q177621/
---

## Q177621: Dr. Watson in Mprouter.exe When Using a Script

	Article: Q177621
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Routing and Remote Access Service (RRAS) server attempts to use a
	demand dial interface, which is configured to run a script file after
	connection, to connect to a remote resource, you may receive the following Dr.
	Watson error in Mprouter.exe:
	
	  Dr. Watson
	  Exception: access violation (0xc0000005), Address: <Hex address>
	
	NOTE: The hex address at the end of the error may be specific to your
	configuration.
	
	CAUSE
	=====
	
	The credentials were not configured properly in the demand dial interface
	properties.
	
	RESOLUTION
	==========
	
	Even though you have a valid account and password in the script file, it is
	necessary to specify the user name and password in the interface properties.
	
	To resolve this issue, use the following steps to configure the credentials in
	the demand dial interface:
	
	1. In RRAS Admin, right-click the demand dial interface and click Set
	  Credentials.
	
	2. Type the valid user name and password.
	
	  NOTE: It is only necessary to enter a domain name if the remote router is a
	  member of a Windows NT domain.
	
	3. Click OK.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
