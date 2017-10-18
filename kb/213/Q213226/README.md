---
layout: page
title: "Q213226: SMS: NDS Logon Manager Does Not Create Logon Point"
permalink: kb/213/Q213226/
---

## Q213226: SMS: NDS Logon Manager Does Not Create Logon Point

	Article: Q213226
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbSecurity kbServer kbsms200 kbBindery kbNDS
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Novell Directory Service (NDS) Logon Server Manager, and there is a
	residual bindery site system connection account in existence, Logon Server
	Manager does not create a logon point as expected.
	
	CAUSE
	=====
	
	NDS Logon Server Manager attempts to use the connection left behind by the
	Bindery Logon Server Manager and/or the Inbox Manager site system connection
	account.
	
	WORKAROUND
	==========
	
	When both Bindery and NDS site systems are configured on the same NetWare server
	by the same SMS site server, both a bindery and an NDS site system connection
	account must exist. Both accounts need adequate permissions to the site system
	volumes, and both require write permissions to the NDS Logon Point container
	object properties. Both accounts also require Supervisor-equivalent permissions
	in the bindery context to have bindery script updating capability.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbSecurity kbServer kbsms200 kbBindery kbNDS 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
