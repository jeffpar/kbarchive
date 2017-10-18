---
layout: page
title: "Q212854: SMSINST: Overwritten Files Are Not Restored During Uninstall"
permalink: kb/212/Q212854/
---

## Q212854: SMSINST: Overwritten Files Are Not Restored During Uninstall

	Article: Q212854
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbAdvertisement kbPackage kbs
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uninstall a program created by Microsoft Systems Management Server
	(SMS) Installer, the installer does not restore any files that were overwritten
	by the initial installation.
	
	CAUSE
	=====
	
	This behavior is by design. For example:
	
	Consider a user who installs program A with version 1.0 of a DLL, and then
	installs program B with version 1.1 of the same DLL. The user later installs
	program C with version 1.5 of the same DLL, and then decides to uninstall
	program B. If SMS Installer were to restore the version of the DLL that it
	overwrote while installing program B, it would restore version 1.0, which would
	likely break program C because program C requires version 1.5 of the DLL.
	
	It is recommended that you configure SMS Installer to back up overwritten files.
	Doing so allows these files to be preserved in a separate directory, from which
	they can be manually restored if necessary.
	
	MORE INFORMATION
	================
	
	To learn more about creating backup copies of replaced files, refer to the SMS
	Installer online Help.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbServer kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsInst kbsmsUtil kbSoftwareDist smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
