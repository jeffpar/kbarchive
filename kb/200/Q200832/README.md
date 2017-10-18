---
layout: page
title: "Q200832: SMS: Conflict Does Not Allow Multiple Remote Control Sessions"
permalink: kb/200/Q200832/
---

## Q200832: SMS: Conflict Does Not Allow Multiple Remote Control Sessions

	Article: Q200832
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbConfig kbMMC _IK964 kbServer kbsms200 kbsms200bug kbsms120 kbHelpD
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Systems Management Server (SMS) versions 1.2 and 2.0 Remote
	Control function does not allow multiple remote control sessions of Microsoft
	Windows 3.1 and Windows 95 on client computers running SMS 1.2 client software.
	This is because of an internal limitation of the NetBIOS protocol and also, in
	part, because of a NETBIOS and TCP/IP protocol conflict.
	
	CAUSE
	=====
	
	SMS 2.0 is designed to support up to four remote control sessions on different
	client computers when all connections are using TCP/IP. When NETBIOS is used for
	remote control sessions, the SMS Administrator console can connect to and
	initiate remote control sessions on only one computer at a time.
	
	As long as the remote control protocol is configured to use TCP/IP only, any
	Administrator console is able to initiate remote control sessions on up to four
	computers simultaneously. However, as soon as one of the computers needs to use
	NetBIOS, the number of available sessions is limited to one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	When the first NetBIOS session is established, the special NetBIOS name
	<machinename A> (padded to 15 characters) is obtained for the session
	(<machinename> refers to the viewer). When a second session is attempted,
	even on TCP, a NetBIOS connection is attempted regardless, because the system
	tries all known protocols. However, the <machinename A> name cannot be
	obtained.
	
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbnetwork kbClient kbConfig kbMMC _IK964 kbServer kbsms200 kbsms200bug kbsms120 kbHelpDesk kbsmsAdmin kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
