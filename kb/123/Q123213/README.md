---
layout: page
title: "Q123213: Requirements of a SMS Network Monitor Agent"
permalink: kb/123/Q123213/
---

## Q123213: Requirements of a SMS Network Monitor Agent

	Article: Q123213
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsnetmon kbNetworkMon
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	Microsoft Network Monitor is a component of Systems Management Server that
	allows network administrators to detect and troubleshoot problems on the
	network.
	
	A Network Monitor Agent enables a client computer to be used by a remote
	installation of Network Monitor to capture network statistics. One of the
	requirements of a Network Monitor Agent is that it must run on a computer
	running Windows NT to remotely capture network statistics. This process
	cannot be accomplished on any other client computer such as a computer
	running Windows for Workgroups version 3.11. A computer running Windows for
	Workgroups and Network Monitor Agent can only monitor locally.
	
	Additional query words: netmon sms wfw wfwg prodsms
	
	======================================================================
	Keywords          : kbnetwork smsnetmon kbNetworkMon 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
