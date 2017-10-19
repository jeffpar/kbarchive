---
layout: page
title: "Q246759: Cannot Create Client Connection Account in Administrator Console"
permalink: /kb/246/Q246759/
---

## Q246759: Cannot Create Client Connection Account in Administrator Console

	Article: Q246759
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbSecurity kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsAdmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If all of the client connection accounts disappear from the Systems Management
	Server (SMS) Administrator console, or the creation of client connection
	accounts does not succeed during Setup, you cannot add new connection accounts.
	When you are adding client connection accounts in the SMS Administrator console,
	after you refresh the view, the accounts disappear.
	
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
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for Intel-based site servers. You must install this
	update manually on remote SMS Administrator consoles.
	
	1. Copy the hotfix folder structure to a share on your network. Q246759.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q246759.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	To Update an SMS Site Server:
	
	1. Quit the SMS Administrator console and stop all SMS services.
	
	2. Use Regsvr32.exe to unregister the SMS Administrator console Sms_nste.dll
	  file in the <Sms_root>\Bin\<Platform> folder. At a command
	  prompt, type the following command:
	
	  regsvr32 /u <sms_root>\bin\<platform>\sms_nste.dll
	
	3. Replace the Sms_nste.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	4. Use Regsvr32.exe to register the updated file. At a command prompt, type the
	  following command:
	
	  regsvr32 <sms_root>\bin\<platform>\sms_nste.dll
	
	5. Restart all SMS services.
	
	To Update a Remote SMS Administrator Console:
	
	NOTE: Before implementing this update on your SMS Administrator console, you must
	install it on the SMS site server(s) in your environment.
	
	1. Quit the SMS Administrator console.
	
	2. From the updated SMS site server, copy the updated SMS Administrator console
	  Sms_nste.dll file to a floppy disk or network share.
	
	3. At the remote computer that is running the SMS Administrator console, use
	  Regsvr32.exe to unregister the file you are about to overwrite. Use the
	  following command:
	
	  regsvr32 /u <smsadmin_root>\bin\<platform>\sms_nste.dll
	
	4. Make a backup copy of the file.
	
	5. Copy the updated file from the floppy disk or network share to the
	  <Smsadmin_root>\Bin\<Platform> folder.
	
	6. Use RegSvr32.exe to register the updated file. Use the following command:
	
	  regsvr32 <smsadmin_root>\bin\<platform>\sms_nste.dll
	
	Additional query words: prodsms mmc add
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbSecurity kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsAdmin kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
