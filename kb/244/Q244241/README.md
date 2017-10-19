---
layout: page
title: "Q244241: APM Message Never Received If Windows 95 Client Not Logged On"
permalink: /kb/244/Q244241/
---

## Q244241: APM Message Never Received If Windows 95 Client Not Logged On

	Article: Q244241
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user is logged on and receives a new advertised program, the following
	message is displayed:
	
	  A new advertised program is available. Do you want to open the Advertised
	  Programs Wizard now?
	
	If the user is not logged on when the advertised program is sent, the message is
	not displayed when the user subsequently logs on to the network. However, the
	Advertised Programs Monitor icon is displayed in the system tray (the area on
	the right side of the taskbar).
	
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
	
	To install the hotfix, use either of the following methods.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method works on Intel-based computers only.
	
	1. Copy the hotfix folder structure to a share on your network. Q244241.exe is
	  an Systems Management Server (SMS) Installer file that updates specific files
	  on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q244241.exe and follow the directions in the wizard. You can run the file
	  in quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	NOTE: You can use this method for both Intel-based and Alpha-based site servers.
	
	1. Copy the hotfix folder structure to a local subfolder on your site server or
	  to a share on your network.
	
	2. Quit the Systems Management Server Administrator console and stop all Systems
	  Management Server services.
	
	3. Copy the following files from the hotfix I386 folder into the
	  <Drive>:\Sms\Bin\I386 folder:
	
	  Odpsys32.exe
	  Odpusr32.exe
	
	4. If Alpha-based support is enabled on the primary site, copy the following
	  files from the hotfix Alpha folder into the <Drive>:\Sms\Bin\Alpha
	  folder:
	
	  Odpsys32.exe
	  Odpusr32.exe
	
	5. Copy the updated Swdist32.exe file from the appropriate <Platform>
	  subfolder into the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Swdist\<Platform> folder.
	
	6. Copy the updated Compver.ini file into the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Swdist folder.
	
	7. Restart the SMS services.
	
	Additional query words: prodsms logged off notification ad
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
