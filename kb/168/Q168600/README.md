---
layout: page
title: "Q168600: SMS: Simultaneous Attempts to Remote Control May Cause Errors"
permalink: /kb/168/Q168600/
---

## Q168600: SMS: Simultaneous Attempts to Remote Control May Cause Errors

	Article: Q168600
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Server Remote Control (Wuser32.exe) may fail if multiple Systems
	Management Server administrators attempt to take control at the same time. When
	Remote Control fails, the "Quick Windows Viewer" on the controlling computer
	running Systems Management Server will appear to stop responding, and
	Wuser32.exe may cause an error to occur on the client computer running Windows
	NT Workstation.
	
	  WUSER32.exe Application Error:
	
	  The Instruction at "0x77a835e1" referenced memory at "0x21270028". The memory
	  could not be "read".
	  Click on OK to terminate the application.
	  Click on CANCEL to debug the application.
	
	Nobody will be able to take remote control of that computer until either it is
	shut down and restarted, or the Systems Management Server Remote Control Agent
	Service is restarted.
	
	CAUSE
	=====
	
	Windows NT Server Remote Control allows only one computer running Systems
	Management Server to control the client at a time. If multiple computers running
	Systems Management Server attempt to control the client, Wuser32.exe initially
	accepts the connections, starts to verify permissions, and then disconnects the
	additional Systems Management Server connections because it is already being
	controlled.
	
	When a Systems Management Server connection is disconnected, Wuser32.exe parses
	through a list of security contexts held for Systems Management Server
	connections. If a security context has been inactive in the list for more than
	one minute, Wuser32.exe frees the context.
	
	When the Systems Management Server administrator that currently has control of
	the workstation attempts to perform a remote task in the "Quick Windows Viewer",
	Wuser32.exe on the client computer running Windows NT Workstation looks up the
	security context for that Systems Management Server connection to verify
	permissions. If the Systems Management Server administrator's security context
	was freed during the connection termination of another computer running Systems
	Management Server, Wuser32.exe passes an invalid security context to Windows NT
	Server. The invalid security context causes Wuser32.exe to cause an access
	violation (AV) and the "Quick Windows Viewer" will appear to stop responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix,
	Wuser32.exe was modified to clean up inactive security contexts without
	releasing the active Systems Management Server administrator's security context.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Systems Management Server version 1.2. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms DrWatson GPF
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
