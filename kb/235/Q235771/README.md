---
layout: page
title: "Q235771: BUG: Rchelp.Sys Can Cause CHKDSK to Run Continuously"
permalink: kb/235/Q235771/
---

## Q235771: BUG: Rchelp.Sys Can Cause CHKDSK to Run Continuously

	Article: Q235771
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig _IK964 kbsms200 kbsms200bug kbRemoteProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After installing Systems Management Server version 2.0 you may notice clients
	running CHKDSK every time your computer is started. This behavior goes away as
	soon as the the Systems Management Server client is removed from the computer.
	
	You may also see the following error message.
	
	  "Cannot open volume for direct access"
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around the problem, edit the following registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Start value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\rchelp
	
	3. Select the DWORD Value "Start"
	
	4. On the Edit menu, click DWORD, type "2" (without the quotation marks), and
	  then click OK.
	
	5. Quit Registry Editor.
	
	NOTE: Another workaround is to convert the BOOT partition to NTFS.
	
	This has the effect of changing the startup value from "System" to "Automatic",
	starting it later in the boot process, which solves the CHKDSK problem.
	
	CHKDSK will still work normally when you start the computer and the Systems
	Management Server Remote Control functionality is retained.
	
	CAUSE
	=====
	
	This is caused by the startup configuration of the Rchelp.sys driver. This file
	is trying to load at boot time and does not allow chkdsk to have exclusive
	access to the volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For additional information about SMS, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q180694 CHKDSK Runs Every Time the System Is Restarted Post-SP3
	
	NOTE: The 30 day verify cycle may reset the registry value
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rchelp\Start back to its
	default value of 1. If that happens, the clients may start running Chkdsk at
	startup again.
	
	See Microsoft Knowledge Base article
	
	  Q246040 How to Configure the Client Verify Cycle
	
	for information on configuring or turning off the 30-day client verify cycle.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig _IK964 kbsms200 kbsms200bug kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
