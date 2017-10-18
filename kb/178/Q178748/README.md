---
layout: page
title: "Q178748: SMS: SATAN Causes High Memory Utilization in WUSER32"
permalink: kb/178/Q178748/
---

## Q178748: SMS: SATAN Causes High Memory Utilization in WUSER32

	Article: Q178748
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT Server may experience a low virtual memory
	condition. Closer examination of the Server Monitor reveals a high utilization
	of memory by Wuser32.exe (Systems Management Server Remote Control Agent)
	service. It will finally use up so much memory that no other process can
	allocate memory.
	
	Left unchecked, this will render the server unable to respond to remote users'
	requests.
	
	CAUSE
	=====
	
	The Security Administrator Tool for Analyzing Networks (SATAN) is a UNIX- based
	testing and reporting tool that collects a variety of information about
	networked hosts. SATAN will attempt to access many UDP and TCP ports across the
	network in a very short space of time.
	
	Wuser32.exe normally listens on UDP ports 1761 and 1762. When the SATAN utility
	scans these ports on a host running Wuser32, the service immediately starts to
	allocate memory at a rapid rate. As the memory utilization increases, the server
	is unable to allocate memory for other services running on the server (File,
	Print, SMS, WINS, and so forth). This continues until the server is unable to
	respond to any network requests. Normally, the interactive services are still
	active.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	If you still want to perform SATAN scans on internal networks, you can disable
	scanning of UDP ports 1761, 1762, and TCP port 7161. This will enable the SATAN
	scans to be performed without triggering the problem.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
