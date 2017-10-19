---
layout: page
title: "Q156405: Cannot Administrate the Microsoft Index Server"
permalink: /kb/156/Q156405/
---

## Q156405: Cannot Administrate the Microsoft Index Server

	Article: Q156405
	Product(s): Internet Information Server
	Version(s): winnt:1.0; :
	Operating System(s): 
	Keyword(s): kbenv kbOSWin2000
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to administrate Microsoft Index Server running with Microsoft
	Internet Information Server (IIS) version 2.0, you may see the following error
	message with Microsoft Internet Explorer version 3.0:
	
	  Internet Explorer cannot open the Internet site
	  http://<server>/srchadm/admin.htm
	
	  The requested header was not found.
	
	CAUSE
	=====
	
	By default, the Index Server only allows Administrative accounts and the System
	account access to the administrative functions of the server. If you only have
	Allow Anonymous selected in the Microsoft Internet Service Manager Password
	Authentication, any user is denied access, and the user will get the above error
	message.
	
	RESOLUTION
	==========
	
	Check either Basic (Clear Text) or Microsoft Windows NT Challenge/Response
	authentication under the Microsoft Internet Service Manager Password
	Authentication. This will allow users to use any browser for Index Server
	administration.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbOSWin2000 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : winnt:1.0; :
	
	=============================================================================
	
