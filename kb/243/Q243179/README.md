---
layout: page
title: "Q243179: SMS: Sinvproc Log Error Message: Delete Zero Length File Failed"
permalink: /kb/243/Q243179/
---

## Q243179: SMS: Sinvproc Log Error Message: Delete Zero Length File Failed

{% raw %}

	Article: Q243179
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The software inventory processor does not delete zero-byte software inventory
	(.sic, .sid) files. The Sinvproc.log file displays an error message similar to
	the following example:
	
	  WARNING - Delete zero length file V4TY4GF3.sid failed, Win32 = 2
	  $$<SMS_SOFTWARE_INVENTORY_PROCESSOR>
	  <Fri Sep 03 12:23:46.229 1999 Central Daylight Time>
	  <thread=250 (0xFA)>
	
	As a result, zero-byte files may build up in the software inventory processor's
	inbox causing the Microsoft Windows NT master file table (MFT) to become very
	large.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, manually delete the zero-byte files.
	
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
	
	1. Copy the hotfix folder structure to a share on your network. Q243179.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q243179.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Stop the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	2. Replace the Sinvproc.dll file in the
	  <sms_root_directory>\bin\<platform> folder with the version
	  obtained from the hotfix.
	
	3. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	Additional query words: prodsms sinv
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
