---
layout: page
title: "Q235174: SMS: Remote Control Connection Issues w/ Win2K and IP Security"
permalink: kb/235/Q235174/
---

## Q235174: SMS: Remote Control Connection Issues w/ Win2K and IP Security

	Article: Q235174
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig _IK964 kbSecurity kbServer kbsms200 kbsms200bug k
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Protocol (IP) security in Microsoft Windows 2000 can cause some
	connection issues when you try to establish a remote control session. If IP
	security is enabled on a server, client, or both, you may experience an initial
	timeout when you try to connect to a client through remote control. It may
	appear as though the remote control session is unable to establish a connection.
	Multiple attempts are made, resulting in a connection failure, with the user
	prompted to retry or cancel. This issue is somewhat random, and its frequency
	can vary depending on how IP security is configured on the server or client.
	
	WORKAROUND
	==========
	
	To work around this issue and establish a remote control session, follow these
	steps:
	
	1. Ping server-to-client or client-to-server with the command prompt ping
	  utility to allow IP security to establish a connection.
	
	2. When the remote control session fails to establish a connection, retry
	  several times to allow IP security to establish a connection.
	
	3. Use the "nbtstat -a <client name>" command to view information about
	  the computer.
	
	  This command fails until an IP security connection is established, after
	  which, information about the computer is displayed.
	
	NOTE: After a connection is successfully established between a server and client,
	it should not be necessary to repeat these steps every time a remote control
	session is attempted between the two computers, because the IP Sec information
	is cached until shortly after the connection is dropped.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig _IK964 kbSecurity kbServer kbsms200 kbsms200bug kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
