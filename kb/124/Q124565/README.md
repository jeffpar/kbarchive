---
layout: page
title: "Q124565: TCP/IP-32 Leaves Names in the NetBIOS Name Table"
permalink: kb/124/Q124565/
---

## Q124565: TCP/IP-32 Leaves Names in the NetBIOS Name Table

	Article: Q124565
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some NetBIOS applications run only once if they use NetBIOS over TCP/IP (NBT).
	To run the application a second time, you have to quit Windows for Workgroups
	and then restart it.
	
	CAUSE
	=====
	
	Most NetBIOS applications register a unique NetBIOS name when they start. If
	datagrams are sent to this NetBIOS name prior to establishing a session with
	this name, the reference count on the name may be incremented. The only time the
	reference count should be incremented is when a session is established using
	this name. When the application terminates, it attempts to delete the name. This
	decrements the reference count by one. If the reference count is not reduced to
	zero, the name is not deleted. The next time the application is run, it
	encounters an error when it attempts to register the unique name.
	
	WORKAROUND
	==========
	
	Currently, you can work around this problem only by quitting and restarting
	Windows for Workgroups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups version 3.11a. A fix to this problem is in development, but has not
	been regression-tested and may be destabilizing in production environments.
	Microsoft does not recommend implementing this fix at this time. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	
	Additional query words: wfw wfwg 3.11 prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
