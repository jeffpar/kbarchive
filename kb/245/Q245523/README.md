---
layout: page
title: "Q245523: SMS: Backlog of .ct2 Files on Central Site in Large Hierarchy"
permalink: /kb/245/Q245523/
---

## Q245523: SMS: Backlog of .ct2 Files on Central Site in Large Hierarchy

{% raw %}

	Article: Q245523
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0 site hierarchies with thousands or tens
	of thousands of sites, Hierarchy Manager may develop a backlog of .ct2 files
	from which it never recovers.
	
	CAUSE
	=====
	
	The backlog develops because Hierarchy Manager continually sorts the list of SMS
	sites each time it gains access to the list.
	
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
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245523.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run Q245523.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Stop the SMS_Site_Component_Manager and SMS_Executive services on the site
	  server.
	
	2. Replace the Hman.dll and Basesvr.dll files in the
	  <SMS_root>\Bin\<Platform> folder with the newer version provided
	  in the hotfix.
	
	3. Restart the SMS_Site_Component_Manager and SMS_Executive services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
