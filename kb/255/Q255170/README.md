---
layout: page
title: "Q255170: SMS: Remote Reboot Fails on Windows 95 at High Resolutions"
permalink: /kb/255/Q255170/
---

## Q255170: SMS: Remote Reboot Fails on Windows 95 at High Resolutions

	Article: Q255170
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbMMC _IK964 kbsms200 kbsms200bug kbsmsAdmin kbRemoteProg
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Windows 95 client may not accept the remote reboot command from the
	Administrator UI if the desktop size is set at or above 1024x768. The computers
	remain indefinitely at the following screen:
	
	  Windows is now shutting down
	
	CAUSE
	=====
	
	The Remote Reboot utility within Systems Management Server Remote Tools
	generates a remote API call to request the reboot. This has been known to occur
	on systems with but not limited to the Intel 810 and Matrox Millennium II AGP
	display adapters.
	
	WORKAROUND
	==========
	
	The client desktop resolution must be reduced to a setting of 800x600 or less.
	Such settings still offer high color, while allowing the remote reboot to
	function.
	
	This behavior does not occur on Microsoft Windows 98 or Microsoft Windows NT 4.0
	clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbMMC _IK964 kbsms200 kbsms200bug kbsmsAdmin kbRemoteProg 
	Technology        : kbSMSSearch
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
