---
layout: page
title: "Q255995: Deploying Windows 2000 with SMS Requires an Unattend.txt File"
permalink: kb/255/Q255995/
---

## Q255995: Deploying Windows 2000 with SMS Requires an Unattend.txt File

	Article: Q255995
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Deploying Microsoft Windows 2000 by using Systems Management Server (SMS)
	requires the use of an Unattend.txt file. This file must supply Windows 2000
	Setup with a CD Key number during installation. In addition, the Unattend.txt
	answer file should also contain the domain name and account information to
	create a computer account during the upgrade process. You can use the
	Unattend.txt file to configure additional settings during the installation.
	
	MORE INFORMATION
	================
	
	If the Unattend.txt answer file does not contain the domain name and account
	information to create a computer account, the client may not be able to join the
	domain after the upgrade and may become orphaned from the SMS site.
	
	For more information about using unattended Setup, please click the Chapter 14
	link on the following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/techinfo/reskit/dpg/default.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
