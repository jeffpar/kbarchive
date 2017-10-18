---
layout: page
title: "Q247923: SMS: Windows 95 Client Produces GPF When Remotely Administered"
permalink: kb/247/Q247923/
---

## Q247923: SMS: Windows 95 Client Produces GPF When Remotely Administered

	Article: Q247923
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbMMC kbRemote kbSecurity kbServer kbsms200 kbsms200bug kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 95-based clients that are running Systems Management Server
	(SMS) 2.0 Service Pack 1 (SP1) may display a general protection (GP) fault if
	the client is remotely controlled by an administrator on a SMS 2.0 SP1-based
	server.
	
	CAUSE
	=====
	
	When the Windows 95-based client is establishing a remote control session,
	Wuser32.exe searches for the Security.dll file on the client computer. Some
	third-party programs have their own Security.dll file that is found first
	because the program created an addition to the system path. This can cause the
	Windows 95-based client to become unstable.
	
	WORKAROUND
	==========
	
	Remove the third-party program, or remove the entry in the path that the
	third-party program created. This entry is located in the registry or the
	Autoexec.bat file on Windows 95-based clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbMMC kbRemote kbSecurity kbServer kbsms200 kbsms200bug kbsmsAdmin kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
