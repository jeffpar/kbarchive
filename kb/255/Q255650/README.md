---
layout: page
title: "Q255650: Err Msg: HTTP 500.100 - Internal Server Error - ASP Error"
permalink: kb/255/Q255650/
---

## Q255650: Err Msg: HTTP 500.100 - Internal Server Error - ASP Error

	Article: Q255650
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse the Default Web Site on the local computer (using
	either http://localhost or the computer's host name), the following error
	messages appear in the browser:
	
	  The page cannot be displayed
	
	  There is a problem with the page you are trying to reach and it cannot be
	  displayed.
	
	  HTTP 500.100 - Internal Server Error - ASP error
	  Internet Information Services
	
	In addition, the following information is displayed in the Technical Information
	(for support personnel) section:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A0046) Permission denied: 'GetObject'
	  /localstart.asp, line 19
	
	  Page:
	  GET /localstart.asp
	
	CAUSE
	=====
	
	The error messages occur when one of the default documents (Iisstart.asp) for
	the Web site attempts to load the Localstart.asp file, and the user attempting
	to access the page does not have sufficient permissions to run the script that
	is contained in the Localstart.asp file. The Localstart.asp file contains ADSI
	and VBScript code that accesses the metabase by using the IIS Admin Objects. For
	security reasons, access to the metabase is restricted to members of the local
	Administrators group. This behavior is by design.
	
	The error messages occur under both of the following conditions:
	
	- Anonymous authentication is enabled on the Directory Security tab for the
	  Default Web Site properties, which causes the user to run the Localstart.asp
	  file in the security context of the Anonymous User (IUSR_ServerName, by
	  default), who should never be made a member of the local Administrators
	  group.
	
	- The user is logged on locally and is not a member of the local Administrators
	  group.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable Anonymous authentication for the Localstart.asp
	file (the Localstart.asp file usually uses Integrated Windows authentication),
	and then verify that the user who is logged on is a member of the local
	Administrators group.
	
	MORE INFORMATION
	================
	
	An administrator can inadvertently enable Anonymous authentication for the
	Localstart.asp file by selecting the Localstart.asp file in the Inheritance
	Overrides dialog box when configuring authentication settings for the Default
	Web Site.
	
	For additional information about the Iisstart.asp and Localstart.asp files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q246053 Why Default.asp is Not Created in the Default Web Site of IIS 5.0
	
	Additional information about the IIS Admin Objects is available in the IIS 5.0
	documentation, which is either installed locally or located in the MSDN Online
	Library.
	
	For additional information about the metabase, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q240941 An Introduction to the IIS Metabase
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: IIS 5 child node 500-100 500100 500;100 akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
