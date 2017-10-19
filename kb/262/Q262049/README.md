---
layout: page
title: "Q262049: Cannot Change Service Account Password for Secondary Site Server"
permalink: /kb/262/Q262049/
---

## Q262049: Cannot Change Service Account Password for Secondary Site Server

	Article: Q262049
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
	
	When you attempt to change the password for the service account at a secondary
	site by using the Systems Management Server (SMS) Administrator console at the
	parent primary site, the changes may not be applied at the secondary site.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the method that the secondary site uses
	to analyze the site control file delta. It does not check for password changes
	in the file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	You can change the password for the service account by running the SMS Setup
	program from the SMS CD-ROM or from a shared folder that contains the image
	files on the secondary site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	You should apply the hotfix to each secondary site server.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: You can use this method only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha folders are required; you must
	  also download them from the Microsoft FTP site. It is important to keep the
	  folder structure intact. The Q262049.exe file is a Microsoft Windows
	  Installer file that updates specific files on your site server.
	
	2. Log on to your site server; use an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q262049.exe file and follow the directions in the wizard.
	
	Manual Installation
	-------------------
	
	1. Stop the SMS_Site_Component_Manager and SMS_Executive services on the site
	  server.
	
	2. Replace the Hman.dll file in the <SMS_root>\Bin\<Platform> folder
	  with the version provided in the hotfix.
	
	3. Restart the SMS_Site_Component_Manager and SMS_Executive services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
