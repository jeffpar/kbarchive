---
layout: page
title: "Q185378: IIS 4.0: FTP &quot;Bounce&quot; Attack and CERT Advisory CA-97.27"
permalink: kb/185/Q185378/
---

## Q185378: IIS 4.0: FTP &quot;Bounce&quot; Attack and CERT Advisory CA-97.27

	Article: Q185378
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CERT (http://www.Cert.org) Advisory CA-97.27 warns of an FTP security attack
	called the "Bounce" attack. This involves misuse of the Port command to
	maliciously open a connection to a port on the File Transfer Protocol (FTP)
	server.
	
	The FTP Server service in Microsoft Internet Information Server version 4.0 (IIS)
	is not susceptible to this attack.
	
	MORE INFORMATION
	================
	
	The FTP server in IIS 4.0 disallows third-party data transfers. This is done via
	a modification to the implementation of the Port command. When the FTP server
	receives a Port command, the specified IP address must match the client's source
	IP address for the control channel.
	
	The FTP server in IIS 4.0 also has another level of protection: disallowing the
	Port command from specifying reserved ports (those less than 1024) except Port
	20 (the default data port). By default, any client attempt to issue a Port
	command with (port < 1024 and port != 20) causes the Port command to fail.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
