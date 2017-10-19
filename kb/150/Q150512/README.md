---
layout: page
title: "Q150512: Client Setup is Unable To Validate Windows Path"
permalink: /kb/150/Q150512/
---

## Q150512: Client Setup is Unable To Validate Windows Path

	Article: Q150512
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a shared installation of Windows from a NetWare server, where your
	Windows directory also resides on a NetWare server, the following error will
	occur while running cli_dos in verbose mode:
	
	  Reading configuration...Could not Validate Windows path:
	  <Path to Windows directory>
	
	where <Path to Windows directory> denotes the complete path to the Windows
	directory on the NetWare server. For example, \USERS\JOHNDOE\WIN31.
	
	NOTE: This problem occurs on NetWare clients running NETX only. This problem does
	not occur on NetWare clients running VLM.
	
	WORKAROUND
	==========
	
	When you run the setup /n from the Windows administrative share on the NetWare
	server, specify that the Windows directory be installed locally (that is,
	C:\windows).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available
	
	MORE INFORMATION
	================
	
	Microsoft Knowledge Base article Q140781, "How Systems Management Server Detects
	a Windows Client," states the following:
	
	NOTE: Shared Windows is currently not supported by Systems Management Server, but
	a reasonable effort has been made to contend with it.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbprb
	
	=============================================================================
	
