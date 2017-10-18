---
layout: page
title: "Q173539: Routing and Remote Access Event ID 20063"
permalink: kb/173/Q173539/
---

## Q173539: Routing and Remote Access Event ID 20063

	Article: Q173539
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure your Windows NT 4.0 Remote Access Service (RAS) server that
	is running the Routing and Remote Access Service (RRAS) Update to use Remote
	Authentication Dial-In User Service (RADIUS) authentication, the Routing and
	Remote Access Service may fail to start with the following error in Event Viewer
	on your RAS Server:
	
	  Event ID: 20063
	  Source: Router
	  Description: Remote Access Connection Manager failed to start because the
	  Point to Point Protocol failed to initialize. There are currently no logon
	  servers available to service the logon request.
	
	CAUSE
	=====
	
	The RRAS server cannot resolve the host name entered in the Server Name field in
	the RADIUS configuration, or the Server Name field has been left blank.
	
	RESOLUTION
	==========
	
	To resolve this issue, you must use one of the following methods:
	
	- Change the host name to the IP address of the RADIUS Server.
	
	  -or-
	
	- Configure name resolution to resolve the host name
	
	  For additional information on name resolution, please see the following white
	  paper available on the Microsoft anonymous ftp server:
	
	  File Name: Tcpipimp2.doc
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "Microsoft Windows NT 3.5/3.51/4.0: TCP/IP Implementation Details
	  TCP/IP Protocol Stack and Services, Version 2.0"
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
