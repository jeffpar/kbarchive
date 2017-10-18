---
layout: page
title: "Q245101: SMS: LSM Is Case Sensitive When Comparing Domain Names"
permalink: kb/245/Q245101/
---

## Q245101: SMS: LSM Is Case Sensitive When Comparing Domain Names

	Article: Q245101
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Logon Server Manager uses a case-sensitive string comparison to detect if a
	domain is still active. It first builds a list of domain configuration files by
	using the domain names from the Ntlogon.pcf file, and then later checks this
	list against a list in the registry to detect any missing domains.
	
	If the domain name in the .pcf file is not the same case as the domain name
	stored in the registry, the check is unsuccessful and the service marks the
	domain as DEINSTALL_PENDING. This can cause sites managing that domain to
	repeatedly add and remove the logon files and folders from the logon points.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the update, use the appropriate method.
	
	Method 1: Using the Update Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the update folder structure to a share on your network. Q245101.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q245101.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the Systems Management Server Administrator console and stop the
	  Systems Management Server Site Component Manager and Systems Management
	  Server Executive services.
	
	2. Replace the Nt_logon.dll file in the
	  <sms_root_directory>\Bin\<platform> folder with the version
	  obtained from the update.
	
	3. Replace the Ntlg_rem.exe file in the
	  <sms_root_directory>\Bin\<platform> folder with the version
	  obtained from the update.
	
	4. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	
	Additional query words: prodsms deinstall fail fails lsm
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
