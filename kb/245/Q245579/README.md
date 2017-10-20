---
layout: page
title: "Q245579: SMS: Secondary Site Does Not Decompress Package"
permalink: /kb/245/Q245579/
---

## Q245579: SMS: Secondary Site Does Not Decompress Package

{% raw %}

	Article: Q245579
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a three-tier Systems Management Server (SMS) hierarchy with a central site,
	child primary sites, and associated secondary sites, Distribution Manager on the
	secondary sites may have problems decompressing *.pck files. This behavior is
	intermittent.
	
	In addition, the following information is recorded in Distmgr.log:
	
	  ~Package AUS0001B requires a newer version (2) of source files and the new
	  compressed files hasn't arrived yet, current version is 1, skip
	  D:\SMS\inboxes\distmgr.box\INCOMING\U2J0GVIQ.PKG
	
	  As the number of *.PKG files in the distmgr.box\INCOMING \ directory grows,
	  the following may also be logged in the DistMgr.log:
	
	  ~Cannot update the package AUS0001B in the package source, error = 8
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Create the package on the child primary site instead of on the central site,
	where they are destined for the third-level secondary sites.
	
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
	
	NOTE: You can only use this method for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245579.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Run Q245579.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s command-line switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the SMS Administrator console and stop the SMS Site Component Manager
	  and SMS Executive services. If the Sms_Site_Backup service is running, stop
	  that as well.
	
	2. Replace the Distmgr.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the version
	  obtained from the hotfix.
	
	3. Restart the SMS Site Component Manager and SMS Executive services.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
