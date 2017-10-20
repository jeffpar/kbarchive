---
layout: page
title: "Q142853: Virtual Directories Not Visible on FTP Clients"
permalink: /kb/142/Q142853/
---

## Q142853: Virtual Directories Not Visible on FTP Clients

{% raw %}

	Article: Q142853
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use your FTP client, you are unable to see virtual directories created
	in Internet Server Manager for the FTP service even though you have permissions
	to access the directory.
	
	However, if you issue the "cd" command with the correct name to the virtual
	directory or "ls" or "dir" of the virtual directory, the contents are listed
	(provided sufficient permissions exist for the user/anonymous user).
	
	CAUSE
	=====
	
	This behavior is by design. The ability to hide these directories is a security
	option in the FTP server configuration.
	
	WORKAROUND
	==========
	
	A work around is to create a physical directory with the same name in the
	location of the virtual directory so the FTP client can see the name.
	
	/ --> c:\inetpub\ftproot
	/sample --> d:\ftpvdir
	
	If you create the directory c:\inetpub\ftproot\sample, the FTP client will see
	that directory in directory listings. The FTP client will only be able to
	see/retrieve files located in d:\ftpvdir. If any files are placed in
	c:\inetpub\ftproot\sample, the FTP client will not see them or be able to
	retrieve them.
	
	You can also create a virtual directory for the FTP service from the Directories
	tab in the FTP Service Properties by choosing Add. Select the directory and type
	in an alias. The virtual directory alias is used to change to the directory.
	
	The way you change to the directory varies slightly depending on if you use a web
	browser or standard FTP client to access the FTP server.
	
	From a WWW Browser
	------------------
	
	Include the virtual directory name in the URL:
	
	  ftp://myftpserver/mydirectory/
	
	From a Standard FTP Client
	--------------------------
	
	Even though the directories can not be seen, you can explicitly "cd" to the
	virtual directory name. For example:
	
	  cd /mydirectory
	
	The forward slash is necessary, otherwise "cd" tries to change directory from
	within the current directory the client is in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 1.0, 2.0, 3.0, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	
	=============================================================================
	

{% endraw %}
