---
layout: page
title: "Q276054: SMS: Unable to Remote Control Computers at Remote Site"
permalink: kb/276/Q276054/
---

## Q276054: SMS: Unable to Remote Control Computers at Remote Site

	Article: Q276054
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As a Systems Management Server (SMS) administrator, when you attempt to initiate
	a remote control session on a client workstation that is located at a remote
	site on a different physical network, the session is not successful, and you
	receive the error message "Remote Control Agent not found." Although the
	workstations client components include the Remote Control component, and it
	displays a status of installed, you may still be unable to initiate the remote
	control session.
	
	If you first establish a remote control session with the remote site server, and
	then you attempt the remote control session to the client, this method will be
	successful. In addition, attempts to establish a remote control session by using
	a command line such as "remote.exe 2 192.168.32.55" might not succeed. After you
	successfully establish a connection with the computer, subsequent connections to
	that computer are successful.
	
	MORE INFORMATION
	================
	
	This issue may be the result of NetBIOS name resolution issues. When SMS
	attempts to initiate a remote control session, it first attempts to resolve the
	hostname to IP address. If name resolution is not possible, you receive the
	error message "Remote Control Agent not found." NetBIOS name resolution problems
	can include any of the following possible causes:
	
	- There is corruption in the Windows Internet Naming Service (WINS) database
	  that is preventing SMS Remote Control from correctly resolving the computer.
	
	- An improperly configured Lmhosts file exists.
	
	- There are workstations that are not configured to reference the WINS servers
	  for the local and remote location.
	
	In addition, if the local router is not configured with a static route to the
	remote subnet, the local SMS site server may not be able to determine a route to
	the remote client.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
