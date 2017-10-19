---
layout: page
title: "Q237752: SMS: Client Discovery Does Not Enumerate over 25 Netcards"
permalink: /kb/237/Q237752/
---

## Q237752: SMS: Client Discovery Does Not Enumerate over 25 Netcards

	Article: Q237752
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsms120 kbsms120bug kbsms200sp2fixkbfixlist
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Systems Management Server 2.0 client on a 3Com Edgeserver with
	more than 25 bound netcards and you configure the netcards to receive calls
	only, discovery does not find any netcards on the client computer. The
	Wnmanual.log file may report the following error message:
	
	  No netcards, or error retrieving netcard info.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, obtain the hotfix referenced in this article or
	change the virtual LAN adapters (RAS adapters) to dial out and receive calls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on your Systems Management
	Server site server:
	
	1. Stop the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	2. Copy the updated Compver.ini file to the Inboxes\Clicomp.src\Base folder.
	
	3. Copy the hotfixed Clicore.exe file to the
	  Inboxes\Clicomp.src\Base\<Platform> folder.
	
	4. Copy the hotfixed Smsdiscv.dll file to the \Sms\Bin\<Platform> folder.
	
	5. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	Allow the updated Compver.ini and Clicore.exe files to be propagated to all logon
	points and client access points (CAPs) in the site.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can stop
	and restart the SMS Client Service on each client. You can also create a
	software distribution for one of the Setevnt.exe or Cliutils.exe Resource Kit
	tools along with the appropriate parameters to start a CCIM work cycle. For
	information on the proper syntax to use with these tools, see the Resource Kit
	documentation.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms120 kbsms120bug kbsms200sp2fix kbfixlist
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
