---
layout: page
title: "Q163806: SMS: Can't Remote Control Windows NT Client with NWLink IPX/SPX"
permalink: /kb/163/Q163806/
---

## Q163806: SMS: Can't Remote Control Windows NT Client with NWLink IPX/SPX

	Article: Q163806
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbInventory smsremtshoot smsinv kbRemoteProgkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to locate a client computer running Windows NT Workstation with
	NWLink IPX/SPX as the only protocol, remote control may fail with the following
	error:
	
	  Unable to locate <machine name>.
	
	If the Site Properties were not configured so that remote control of Windows NT
	occurs over IPX, the Systems Management Server Remote Control Agent service on
	the client computer starts with the following error:
	
	  Failed to initialize the network.
	
	If you attempt to start that service manually, you receive the following error:
	
	  Could not start the SMS Remote Control Agent Service on \\<machine
	  name>. Error 2186: The service is not responding to the control function.
	
	CAUSE
	=====
	
	The Inventory agent (Invwin32.exe) does not report the IPX address of clients
	running NWLink IPX/SPX as their only protocol. Therefore, the Systems Management
	Server Administrator program is unable to locate the client. The remote agent is
	unable to bind to the NWLink IPX/SPX protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbInventory smsremtshoot smsinv kbRemoteProg kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
