---
layout: page
title: "Q164791: SMS: PCM Does Not Disconnect from NetWare Distribution Server"
permalink: kb/164/Q164791/
---

## Q164791: SMS: PCM Does Not Disconnect from NetWare Distribution Server

	Article: Q164791
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running a package from Package Command Manager (PCMWIN16.EXE), the client
	leaves a drive mapped to the Novell NetWare distribution server. If the servers
	have limited licenses, this may cause a problem where all the connections to the
	server are being used, and some clients will be unable to make a connection to
	the server.
	
	This problem only occurs when the client does not already have an existing
	connection to the distribution server that provides the package.
	
	
	WORKAROUND
	----------
	
	To work around this problem, manually delete the mapped drive used by the Package
	Command Manager.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server version 1.2 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	available.
	
	Additional query words: prodsms map Win95 WFW pcm
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
