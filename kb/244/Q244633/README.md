---
layout: page
title: "Q244633: SMS: Site Status Node is Slow"
permalink: kb/244/Q244633/
---

## Q244633: SMS: Site Status Node is Slow

	Article: Q244633
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbMMC kbsms200 kbsms200bug kbsmsAdmin kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Site Status node in the Systems Management Server Administrator Console may
	be extremely slow on sites within a large hierarchy. When you click this node,
	the Systems Management Server provider runs the sp_GetSummarizers_sitedetail
	stored procedure once for every site in the hierarchy. The repeated calls to the
	stored procedure are redundant and contribute to the slowness that occurs when
	you open the node.
	
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
	
	To install the hotfix, use the appropriate method.
	
	NOTE: You must use the manual installation method to update workstations with the
	stand-alone Systems Management Server Administrator Console installed.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q244633.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q244633.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the Systems Management Server Administrator console and stop the
	  Windows Management service.
	
	2. Replace the Sms_nsst.dll file in the
	  <sms_root_directory>\bin\<platform> folder with the version
	  obtained from the hotfix.
	
	3. Register the .dll file by typing the following commands at a command prompt,
	  pressing ENTER after each command:
	
	  cd <sms_root_directory>\bin\<platform>
	  regsvr32 sms_nsst.dll
	
	4. Restart the Windows Management service and Systems Management Server
	  Administrator console.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbsms200 kbsms200bug kbsmsAdmin kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
