---
layout: page
title: "Q287615: SMS: Remctrl.exe Causes PendingFileRenameOperations During Clien"
permalink: kb/287/Q287615/
---

## Q287615: SMS: Remctrl.exe Causes PendingFileRenameOperations During Clien

	Article: Q287615
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Remote Tools Client Agent is verified on its 30-day Systems Management
	Server (SMS) verification cycle, the Remctrl.exe component verify operation
	causes a PendingFileRenameOperation for the Kbstuff.sys remote control driver.
	
	CAUSE
	=====
	
	The remote control verification process attempts to replace Kbstuff.sys even if
	the file exists and is the same version as the one that is contained in
	Remctrl.exe.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The PendingFileRenameOperation itself will have no adverse effects on the remote
	tools operation. The operation just means that during the Remote Tools Client
	Agent verification cycle, Remctrl.exe attempted to replace Kbstuff.sys. Because
	Kbstuff.sys is a Microsoft Windows NT driver and is started automatically, the
	file is in use when the attempt to replace it is made. Because of this, the
	replacement of the Kbstuff.sys file waits until the computer is rebooted.
	
	However, certain other software operations can be hindered by this
	PendingFileRenameOperation. During some software installation procedures, the
	software vendor may detect a PendingfileRenameOperation is in progress and
	require the computer to be rebooted and the operation completed before the
	software can be installed.
	
	Additional query words: prodsms remctrl.exe verify
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
