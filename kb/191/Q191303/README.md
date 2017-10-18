---
layout: page
title: "Q191303: SMS: Ipconfig.exe Makes Inventory Stop on Windows for Workgroups"
permalink: kb/191/Q191303/
---

## Q191303: SMS: Ipconfig.exe Makes Inventory Stop on Windows for Workgroups

	Article: Q191303
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ipconfig.exe causes inventory to stop responding on Windows for Workgroups 3.11
	client computers running VLM without the TCP/IP protocol.
	
	When running Runsms.bat in verbose mode, the following error message is
	displayed:
	
	  Windows IP configuration version 1.0. Error: Winsock failed to initialize.
	
	Inventory stops responding at 43 percent and the computer must be restarted.
	
	WORKAROUND
	==========
	
	To work around this problem, disable TCP/IP inventory collection by creating an
	Smssafe.tmp file in the Ms\Sms\Data subdirectory. This file should contain the
	following line:
	
	      WolverineInfo=CRASHED
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q139908 Creating a SMSSAFE.TMP To Bypass Specific Hardware Detection
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4 WFW reboot rebooted hang hangs hung freeze freezes frozen
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
