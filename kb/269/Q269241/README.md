---
layout: page
title: "Q269241: Anonymous FTP Fails with Password Synchronization Enabled"
permalink: /kb/269/Q269241/
---

## Q269241: Anonymous FTP Fails with Password Synchronization Enabled

{% raw %}

	Article: Q269241
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log into FTP anonymously, the following error message may occur:
	
	  
	
	  c:\ftp ftp.someserver.com
	  Connected to ftp.someserver.com.
	  220 someserver Microsoft FTP Service (Version 4.0).
	  User (ftp.someserver.com:(none)): anonymous
	  331 Anonymous access allowed, send identity (e-mail name) as password.
	  Password:
	  530 User someuser@microsoft.com cannot log in.
	  Login failed.
	  ftp>
	
	CAUSE
	=====
	
	If the World Wide Web Server component is removed during the installation of the
	Windows NT Option Pack, anonymous FTP login fails because automatic password
	synchronization relies on a DLL that is uninstalled with the World Wide Web
	Server component.
	
	RESOLUTION
	==========
	
	Reinstall the World Wide Web Server component from the Windows NT Option Pack
	setup.
	
	If the service is not needed, disable the services in Control Panel Services.
	
	MORE INFORMATION
	================
	
	Password synchronization is a sub-authentication process used by Internet
	Information Server. This functionality is provided by the Iissuba.dll file. This
	DLL is uninstalled when the World Wide Web Server component is removed, which in
	turn causes anonymous FTP login to fail if the Enable Automatic Password
	Synchronization option is checked in the Security settings for the FTP service.
	
	For additional information on Password Synchronization and the sub-authentication
	process, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q216828 Password Synchronization/Allow IIS to Control Password
	
	  Q218756 Logon Privileges Required for Anonymous Access
	
	Additional query words: iis4 ftp login
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
