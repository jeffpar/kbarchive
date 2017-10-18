---
layout: page
title: "Q158236: Error Message: HTTP/1.0 500 Server Error"
permalink: kb/158/Q158236/
---

## Q158236: Error Message: HTTP/1.0 500 Server Error

	Article: Q158236
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a Web page on a Windows 95-based computer running
	Microsoft Personal Web Server version 1.0 for Windows 95, you may receive the
	following error message:
	
	  HTTP/1.0 500 Server Error.
	
	CAUSE
	=====
	
	This problem may occur if Personal Web Server is configured to use Windows NT
	Challenge/Response password authentication, but the computer running Personal
	Web Server is not using a Microsoft Windows NT domain to provide user-level
	security.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure Personal Web Server so that Windows NT
	Challenge/Response password authentication is not used or configure the computer
	running Personal Web Server so that it uses a Windows NT domain to provide
	user-level security.
	
	To configure Personal Web Server so that Windows NT Challenge/Response password
	authentication is not used, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Personal Web Server.
	
	3. On the Administration tab, click Administration, and then click WWW
	  Administration.
	
	4. Click the Windows NT Challenge/Response check box to clear it, and then
	  verify that one or both of the Allow Anonymous and Basic check boxes are
	  selected.
	
	To configure a Windows 95-based computer so that it uses a Microsoft Windows NT
	domain to provide user-level security, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Access Control tab, click User-Level Access Control.
	
	4. Type the name of the Windows NT domain used to provide pass-through
	  validation in the "Obtain list of users and groups from" box, and then click
	  OK.
	
	5. When you are prompted to restart the computer, click Yes.
	
	NOTE: After you change the type of access control a computer is using, any
	resources that were shared on that computer are no longer shared. You must share
	these resources again to allow other people to access them.
	
	You can find more information about how to share resources in Windows 95 using
	online Help. To do so, use the following steps:
	
	1. Click Start, and then click Help.
	
	2. On the Index tab, in the "Type the first few letters of the word you're
	  looking for" box, type "sharing" (without the quotation marks), and then
	  click Display.
	
	3. In the Topics Found dialog box, click the appropriate topic, and then click
	  Display.
	
	MORE INFORMATION
	================
	
	Personal Web Server uses the same type of access control as the computer on
	which it is running. If the "File and printer sharing for Microsoft Networks"
	network service is installed, the computer can use share-level security or
	user-level security with pass-through validation provided by a Windows NT domain
	or Windows NT-based computer. If the "File and printer sharing for NetWare
	Networks" network service is installed, the computer can use user-level security
	with pass-through validation provided by a Novell NetWare server. If neither
	network service is installed, Personal Web Server must use local security.
	
	To use Windows NT Challenge/Response password authentication in Personal Web
	Server, the computer on which Personal Web Server is running must be using
	user-level security with pass-through validation provided by a Windows NT
	domain.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95
	Version           : WINDOWS:1.0
	
	=============================================================================
	
