---
layout: page
title: "Q155744: SMS: WINS Replication Causes Remote Control Delay"
permalink: kb/155/Q155744/
---

## Q155744: SMS: WINS Replication Causes Remote Control Delay

	Article: Q155744
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SMS site server and the remotely controlled computer are using separate
	primary WINS servers, the SMS Administrator cannot locate the client for remote
	control using TCP/IP (until the WINS database is replicated to its partner).
	Once the WINS replication occurs, remote control functions normally. This
	problem does not occur if the SMS site server and client computer reside on the
	same network segment.
	
	CAUSE
	=====
	
	When the remote agent is loaded on a TCP/IP client, the <43> extension of
	the client NetBIOS name is registered on the client. It is viewable by typing
	"nbtstat -n" (without quotation marks) at the command prompt on the client. This
	registration is picked up by the client's WINS server and is viewable in WINS
	Manager. On the appropriate interval, the <43> extension registration is
	replicated to any of the WINS replication partners.
	
	If you attempt a remote control session prior to the WINS replication, the server
	running SMS Administrator cannot resolve the <43> extension of the client
	name.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Configure the Site Server (or server running the SMS Tools) to use the same
	  primary WINS server
	
	  -or-
	
	- Keep the remote agent loaded on all computers all the time (once the
	  extension is registered and replicated the first time, no delay occurs) Keep
	  in mind that the extension can be removed from WINS by rebooting or unloading
	  the remote agent.
	
	  -or-
	
	- Use the LMHOSTS file on the server. For more information, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q122057 How to Use Remote Control with TCP/IP
	
	- Upgrade to Systems Management Server version 1.2, and set the default
	  protocol to TCP/IP. For more information, please see the Systems Management
	  Server 1.2 Administrator's Guide, Chapter 10, "Configuring Default Protocol
	  Settings for Clients". Doing this allows remote sessions to use sockets,
	  avoiding NetBIOS name resolution for the remote agent. This configuration is
	  supported for Windows 95, Windows NT 3.51, Windows NT 4.0, and Windows for
	  Workgroups (using MSTCPIP-32) client computers.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
