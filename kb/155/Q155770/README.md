---
layout: page
title: "Q155770: FP: Registration Form not Supported on IIS Web Server"
permalink: kb/155/Q155770/
---

## Q155770: FP: Registration Form not Supported on IIS Web Server

	Article: Q155770
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q208637.
	
	For a Microsoft FrontPage 98 version of this article, see Q194452.
	
	SYMPTOMS
	========
	
	If you try to use the FrontPage Registration WebBot in on a Web site running the
	Microsoft Internet Information Server (IIS) or Microsoft Personal Web Server,
	you may receive the following error message when viewing the properties of the
	page:
	
	  This server does not support registered end users.
	
	CAUSE
	=====
	
	Internet Information Server and Microsoft Personal Web Server do not allow users
	to register through a browser for access to a Web.
	
	MORE INFORMATION
	================
	
	IIS requires that all users, authors, and administrators of a FrontPage Web have
	valid Windows NT accounts. User accounts can only be created by a Windows NT
	administrator using User Manager. The HyperText Transport Protocol (HTTP) does
	not support creating user accounts.
	
	When you create a registration Web, you ask the server to create and update a
	list of registered users based on input from HTTP browsers. IIS is not designed
	to support the creation of registered users without creating a corresponding
	Windows NT account.
	
	For additional information about how to create a registration page for use with
	Web servers that support this feature, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q143092 FP: How to Create a Registration Web
	
	Additional query words: logon restricted restrict security
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : :; MACINTOSH:1.0; WINDOWS:1.1
	Hardware          : x86
	
	=============================================================================
	
