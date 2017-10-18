---
layout: page
title: "Q245051: Updated Collections Go to Every Child Site with New Child Site"
permalink: kb/245/Q245051/
---

## Q245051: Updated Collections Go to Every Child Site with New Child Site

	Article: Q245051
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Updated collection (.psd) files go to every child site when a new child site is
	added. This behavior can create a significant amount of inter-site traffic if
	there are a lot of collections and a lot of existing child sites. Additionally,
	Collection Evaluator does not perform any other work while it is processing
	these collection update requests.
	
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
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. The Q245051.exe
	  file is a Microsoft Windows Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q245051.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode by using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Stop the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	2. Replace the Colleval.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	3. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	NOTE: When a new child site is attached, collection evaluator at the parent site
	will now send updated collection files to the new child site only.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
