---
layout: page
title: "Q120078: Cannot Connect to WGPO with Full-Access Password"
permalink: /kb/120/Q120078/
---

## Q120078: Cannot Connect to WGPO with Full-Access Password

{% raw %}

	Article: Q120078
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up and share a workgroup post office (WGPO) with full access and a
	full-access password on a Windows for Workgroups network, you can connect to the
	WGPO only one time on a client machine that has the Reconnect At Startup and
	Ghosted Connections options selected. Subsequent attempts to connect to the WGPO
	after exiting and signing out of Mail and quitting and restarting Windows
	generate the following error message:
	
	  Cannot Connect to Workgroup Postoffice
	
	CAUSE
	=====
	
	When you are connected to the remote WGPO in File Manager with a password and
	the Reconnect At Startup and Ghosted Connections options selected, no physical
	connection to the WGPO is established. The Mail client cannot locate the Mail
	server, and you receive the above error message.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. In File Manager on the client, disconnect from the WGPO located on the mail
	  server.
	
	2. Delete or rename the MSMAIL.INI file on the local machine. Start Microsoft
	  Mail and connect to an existing post office. Enter the WGPO password when
	  prompted.
	
	These steps correct the serverpath= setting in the MSMAIL.INI file, allowing you
	to connect to the WGPO normally.
	
	Additional query words: 3.11 msmail password
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
