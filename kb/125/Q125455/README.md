---
layout: page
title: "Q125455: Shadow Effect with SMS MachineIDs and NetWare 500/1000 Licenses"
permalink: /kb/125/Q125455/
---

## Q125455: Shadow Effect with SMS MachineIDs and NetWare 500/1000 Licenses

	Article: Q125455
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server to administer a NetWare 4.x server with a
	500- or 1000-client license, the SMS MachineID starts repeating after the 255th
	user connects. Because SMS uses the IPX address for NetWare MachineIDs,
	duplicate MachineIDs are assigned for SMS clients in the SMS Administrators
	Sites window. The SMSID is not duplicated.
	
	CAUSE
	=====
	
	SMS uses the NetWare bindery and the 3.x NetWare application program interface
	(API) calls to get the IPX address for a machine on a NetWare domain. The IPX
	address is then used to create the MachineID for each client. The NetWare 3.x
	APIs that support bindery calls wrap at the 255th connection. For example, when
	the 256th client connects, SMS attempts to get the IPX address for that client.
	The NetWare API call returns the IPX address for connection one instead of 256,
	connection two instead of 257, etc. This creates a shadow effect as the 256th
	SMS client gets the same MachineID in the Sites window as the first SMS client.
	
	Older NetWare IPX stacks were designed to work with NetWare 2.x and 3.x servers
	which had a maximum of 250 users and connections available. This allowed the IPX
	stack to use only one byte to represent the connection ID. With NetWare 4.x
	servers, 500 and 1000 users and connections are supported.
	
	The problem occurs when an older IPX stack connects to a NetWare 4.x server that
	currently has 255 or more connections already assigned. If the connection ID is
	returned by the server as 256 or greater, the IPX stack can only store the lower
	8 bits. The IPX stack thinks the connection IDs 256, 512, and 768 are 1, and IDs
	257, 513, and 769 are 2, and so on.
	
	When INVDOS asks the IPX stack on a client to return the IPX address, the IPX
	stack then requests the IPX address from the server. Since the request includes
	connection "1" instead of connection "256," the return IPX address is incorrect.
	This incorrect IPX address is then reported through the SMS system and ends up
	in the SQL database. This is why SMS seems to be reporting duplicate
	MachineNames for unique SMS clients.
	
	The NetID property is always returned correctly. This only affects the IPX
	address.
	
	RESOLUTION
	==========
	
	Use the latest version of IPXODI. Do not use IPX.COM or MSIPX.COM.
	
	Additional query words: sms prodsms Novell net machine id
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
