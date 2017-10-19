---
layout: page
title: "Q213249: SMS Remote Control Service Is Not Installed After Upgrading"
permalink: /kb/213/Q213249/
---

## Q213249: SMS Remote Control Service Is Not Installed After Upgrading

	Article: Q213249
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbClient _IK964 kbsms120 kbsms120bug kbCAP kbHelpDesk kbUpgrade kbRemoteProg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Microsoft Windows NT 3.51 SP5-based client computer from
	Systems Management Server (SMS) 1.2 to SMS 2.0, you may receive the following
	error message in the Windows NT Event log:
	
	  Error received on creation of WUSER32 service:
	
	  Not enough storage is available to process this command
	
	CAUSE
	=====
	
	The Microsoft Windows NT 3.51 Resource Kit describes this error message as a
	problem with low resources on the computer, and recommends the following methods
	as resolutions to fix the problem. After attempting one of the following
	methods, retry the command:
	
	- Reduce the number of running programs.
	
	- Remove unwanted files from the disk on which the paging file is located and
	  restart the computer.
	
	- Check the paging file disk for an I/O error.
	
	- Install additional memory in the computer.
	
	RESOLUTION
	==========
	
	This problem was first corrected in Systems Management Server version 2.0
	Service Pack 2.
	
	WORKAROUND
	==========
	
	If the methods listed earlier in this article do not correct the problem, use
	any of the following methods to manually install the Remote Control service:
	
	1. Send a package to the client that runs Remctrl.exe.
	
	2. On the client, click the Components tab in the Systems Management tool in
	  Control Panel. Click Remote Control, and then click Repair Installation.
	
	3. Connect to one of the Client Access Points from the client and run the
	  Remctrl.exe file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient _IK964 kbsms120 kbsms120bug kbCAP kbHelpDesk kbUpgrade kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
