---
layout: page
title: "Q244405: SMS: Distribution Manager May Not Remove Compressed Package"
permalink: kb/244/Q244405/
---

## Q244405: SMS: Distribution Manager May Not Remove Compressed Package

	Article: Q244405
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Distribution Manager may not delete the compressed copy of a package that a
	child primary site receives from its parent, when the package is deleted from
	the Systems Management Server Administrator console at the parent site.
	
	The Distribution Manager log file (Distmgr.log) may indicate that the package
	files were deleted when in fact they were not, as shown in the following
	example:
	
	~Starting package processing thread,thread ID = 129  $$<SMS_DISTRIBUTION_MANAGER>
	<Fri Oct 15 17:09:46.507 1999 Pacific Daylight Time><thread=225 (0xE1)>
	...
	Start deleting the package 61000012...  $$<SMS_DISTRIBUTION_MANAGER><Fri Oct 15 17:09:46.677 1999 Pacific Daylight Time><thread=297 
	(0x129)>
	~Successfully deleted the package 61000012  $$<SMS_DISTRIBUTION_MANAGER><Fri Oct 15 17:09:46.677 1999
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, manually delete the compressed copy of the package
	at the child site after deleting it from the parent site using the Systems
	Management Server Administrator console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. QQ244405.exe is
	  a Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q244405.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Step 2: Manual Installation
	---------------------------
	
	1. Close the Systems Management Server Administrator console and stop the
	  Systems Management Server Site Component Manager and Systems Management
	  Server Executive services. If the SMS_SITE_BACKUP service is running, stop
	  that as well.
	
	2. Replace the Distmgr.dll file in the
	  <sms_root_directory>\bin\<platform> folder with the version
	  obtained from the hotfix.
	
	3. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
