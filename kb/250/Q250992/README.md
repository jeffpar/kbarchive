---
layout: page
title: "Q250992: SMS Provider Hangs Under Stress from Multiple Admin Consoles"
permalink: /kb/250/Q250992/
---

## Q250992: SMS Provider Hangs Under Stress from Multiple Admin Consoles

{% raw %}

	Article: Q250992
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple Systems Management Server (SMS) Administrator consoles are connected
	to an SMS primary site and the SMS provider is stressed by servicing requests to
	view multiple large collections simultaneously, the SMS provider may stop
	responding (hang). Large collections may consist of "All Systems" or
	user-defined collections.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0, 2.0 SP1. This problem was first corrected in Systems Management
	Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	
	When the SMS provider stops working, connection error messages are recorded in
	the Smsprov.log file:
	
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspSqlSourceExtractor.h(213) : Unable to
	  connect to SQL Source!
	
	When this occurs, WMI no longer responds to service control requests, requiring
	you to restart the server. You may also need to rebuild WMI.
	
	Sample Wbemcore.log file entry:
	
	  (Date) : Error 1 occured executing queued request
	  (Date) : Failed to QueryInterface for IID_IWbemProviderInit, provider
	  PerfPropProv: error code 0x80004002
	  (Date) : Sink 04BCB8B4 failed with 800706BA. Cancelling
	
	INSTALLING THE HOTFIX
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q250992.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q250992.exe and follow the directions in the wizard.
	
	Manual Installation
	-------------------
	
	Site System with Local Provider:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. Quit the SMS Administrator console and stop all SMS services, including the
	  Windows Management service and the SMS_SQL_MONITOR service.
	
	3. Replace the Basesvr.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	4. Restart all SMS services.
	
	Site System with Remote Provider:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. Quit the SMS Administrator console and stop all SMS services on the SMS site
	  server.
	
	3. Replace the Basesvr.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	4. Restart all SMS services.
	
	Remote Administrator Console:
	
	1. Log on using an account with administrative privileges.
	
	2. Quit the SMS Administrator console.
	
	3. From the updated SMS site server, copy the Basesvr.dll file to a disk or
	  network share.
	
	4. Copy the updated file from the disk or network share to the
	  <SMSAdmin>\Bin\<Platform> folder.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
