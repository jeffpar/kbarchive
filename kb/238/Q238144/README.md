---
layout: page
title: "Q238144: Client Installation Corrupts Path Statement in Autoexec.bat"
permalink: /kb/238/Q238144/
---

## Q238144: Client Installation Corrupts Path Statement in Autoexec.bat

	Article: Q238144
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a space or other invalid character at the end of the path statement
	in the Autoexec.bat file when you install the SMS Client, the installation makes
	the path statement invalid.
	
	CAUSE
	=====
	
	This issue occurs because the SMS Client installation does not check the
	Autoexec.bat file for spaces or other invalid characters at the end of the path
	statement and appends the following text to the end of the path statement:
	
	  ;C:\Windows\system\wbem
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. Type "sysedit" (without the quotation marks), and then click OK.
	
	3. Edit the Autoexec.bat file and verify no spaces exist at the end of the path
	  statement by placing the cursor after the last valid character of the path
	  statement, and then pressing ENTER.
	
	4. When you are finished, save the file and close System Editor.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. In Control Panel, double-click the Systems Management icon.
	
	7. On the Components tab, click Windows Management, and then click Repair
	  Installation. This causes SMS to reinstall the Windows Management portion of
	  the SMS Client installation.
	
	NOTE: This issue is only known to occur on Windows 95/98 clients.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server
	version 2.0 and 2.0 Service Pack 1. This problem was first corrected in Systems
	Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on each Systems Management Server 2.0
	and 2.0 Service Pack 1 site server :
	
	1. Stop the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE site services.
	
	2. Copy the updated Wbemsdk.exe file to the site server's
	  SMS\Bin\<Platform> folder.
	
	3. Copy the updated Wbemsdk.exe file to the site server's
	  SMS\Inboxes\Clicomp.src\Wbem\<Platform> folder.
	
	4. Copy the updated Compver.ini file to the site server's
	  SMS\Inboxes\Clicomp.src\Wbem folder.
	
	5. Start the SMS_SITE_COMPONENT_MAANGER and SMS_EXECUTIVE services.
	
	After the SMS Inbox Manager component updates the Client Access Points (CAP), the
	clients can gain access to the updated files. The default Client Configuration
	Installation Manager (CCIM) polling interval is 23 hours. Therefore, it may take
	up to 23 hours for the hotfix files to be propagated to the clients. To speed up
	this process, you can stop and restart the SMS Client service on each client.
	You can also create a software distribution for one of the Resource Kit tools
	(Setevnt.exe or Cliutils.exe), along with the appropriate parameter(s) to start
	a CCIM work cycle. For information about the proper syntax to use with these
	tools, see the Resource Kit documentation.
	
	Additional query words: prodsms wbem management autoexec.bat path statement
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
