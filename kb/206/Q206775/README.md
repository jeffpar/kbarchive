---
layout: page
title: "Q206775: XADM: Network Monitor Hangs When Installing on Exchange Server"
permalink: kb/206/Q206775/
---

## Q206775: XADM: Network Monitor Hangs When Installing on Exchange Server

	Article: Q206775
	Product(s): Microsoft Exchange
	Version(s): 1.0,1.1,1.2,2.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install System Management Server's Network Monitor or the
	time-stamped PSS version of Network Monitor from the Microsoft ftp Web site, the
	setup program may stop responding (hang) and not respond when you try to use
	Task Manager.
	
	When you attempt to end the task in Task Manager, you may receive the following
	error message:
	
	  The System cannot end the selected task because WOWEXEC is not allowing it to
	  run.
	  Press OK to End Task WOWEXEC or Cancel to leave it running.
	
	WORKAROUND
	==========
	
	To work around the problem, perform the following steps:
	
	1. When you receive the error message, click OK to close the Microsoft Network
	  Monitor Setup program.
	
	2. Start the Control Panel Services tool, and stop the System Attendant
	  Service.
	
	  NOTE: This stops all of the Exchange Services.
	
	3. From Disk1, run the Microsoft Network Monitor Setup program again.
	
	4. After the Setup program has finished, restart the Exchange services, or
	  restart the Exchange server to restart the Exchange services automatically.
	
	NOTE: When you install Network Monitor on a computer on which the Network Monitor
	agent is not installed, you are prompted to install the agent.
	
	MORE INFORMATION
	================
	
	Microsoft Network Monitor is a tool that you can use to troubleshoot
	network-related problems. You may need to install this tool on your Exchange
	Server computer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	
	
	Additional query words: Hang evaluation 60-day traces trace not responding
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbSMSSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : :1.0,1.1,1.2,2.0,4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
