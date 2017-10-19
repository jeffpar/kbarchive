---
layout: page
title: "Q254355: Access to Internet Services Manager Limited to Localhost"
permalink: /kb/254/Q254355/
---

## Q254355: Access to Internet Services Manager Limited to Localhost

	Article: Q254355
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbIIS kbiis400 kbiis500
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to remotely connect to the IISADMIN virtual directory (or
	possibly some other administrative share) of either the default Web site or the
	Administrative Web site on an Internet Information Services Server 4.0 or
	Internet Information Services 5.0 server, the connection fails, and the
	following error message appears in the browser:
	
	  Access to Internet Services Manager (HTML) is restricted to Localhost
	
	CAUSE
	=====
	
	The reason for this error is that permissions for that virtual directory, by
	default, restrict access to only those persons actually logged on to the local
	computer, not people connecting across the network.
	
	RESOLUTION
	==========
	
	Permissions to this folder (or any administrative virtual directory) should not
	be adjusted without great care because they can allow a high degree of control
	over the Web Server.
	
	NOTE: You are strongly discouraged from changing these attributes because of the
	security implications.
	
	You can use this procedure too allow or change access to the IISADMIN directory:
	
	1. Right-click the folder and select Properties.
	
	2. On the Directory Security tab, click the Edit button for IP Address and
	  Domain Name Restrictions.
	
	3. Adjust the settings to match your security needs.
	
	MORE INFORMATION
	================
	
	Another way that you can delegate permissions is to make a copy of the IISADMIN
	Web site and place it into the directory structure of the Web sites that are
	being hosted on this server. This allows the administrator to delegate control
	to some other person. Again, the Directory Security must be amended to open up
	access beyond the local computer.
	
	Additional query words: IIS 5, permissions, iisadmin
	
	======================================================================
	Keywords          : kbOSWin2000 kbIIS kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
