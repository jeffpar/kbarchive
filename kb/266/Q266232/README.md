---
layout: page
title: "Q266232: Windows 9x Clients Hang When Remote Control Agent Is Installed"
permalink: kb/266/Q266232/
---

## Q266232: Windows 9x Clients Hang When Remote Control Agent Is Installed

	Article: Q266232
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbinterop kbClient _IK964 kbsms200 kbsms200bug kbsms120 kbsms120bug kbHelpDesk kbsms200
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some Microsoft Windows 9x-based clients, when you install the Remote Control
	agent, the computer may stop responding (hang) while displaying low-resource
	error messages. While the computer hangs, a background process named Winoldap
	runs. When this issue occurs, the Remctrl.log file contains the following text:
	
	  Performing a INSTALL type installation
	  Starting install.log
	  Successfully notified SMS that installation has not completed.
	  Remote Control Installation starting.
	  Looking for conflicting products on a Windows 9X system
	  Installing SMS Remote Control on Windows 95.
	  Installing Windows 95 Remote Control Files.
	  Checking the client machine type.
	
	NOTE: This error message is an example from a computer running Windows 95. Error
	messages may differ between operating systems.
	
	RESOLUTION
	==========
	
	To resolve this problem for English-based clients, obtain the latest service
	pack for Systems Management Server version 2.0. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q236325 SMS: How to Obtain and Install Systems Management Server 2.0 Service
	  Pack 2
	
	To resolve this problem for International clients, obtain the Systems Management
	Server version 2.0 Service Pack 4 (SP4) Hotfix Rollup package (HRP). For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 Service
	  Pack 4 Hotfix Rollup Package
	
	
	WORKAROUND
	==========
	
	To work around this issue, use any of the following methods:
	
	- Quit the Winoldap process:
	
	  1. On the client, press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	  2. Click Winoldap, and then click End Task.
	
	  3. Reboot the client computer. The Remote Control agent should be installed
	     properly after the client restarts.
	
	- You can work around this problem by disabling the Remote Tools Client agent
	  on the entire site.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When the client hangs, Remctrl.exe is attempting to determine the computer type.
	This detection is necessary so that Remctrl.exe can determine if the Nec-PC98
	components need to be installed. The Pcdetect code first attempts to read a
	SetupMachineType registry value (from
	HKEY_LOCAL_MACHINE\ENUM\ROOT\*PNP0C01\0000) to determine the computer type. If
	this process does not succeed, Remctrl.exe loads a real-mode program
	(Pcddos.exe) to perform the computer-type detection.
	
	To force LSM to perform a polling cycle when the LSM thread or Systems Management
	Server Executive service is stopped and restarted, set the following registry
	value to 0 (zero):
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_NT_LOGON_SERVER_MANAGER\Last
	  Update Cycle
	
	
	
	
	Additional query words: prodsms dell ibm
	
	======================================================================
	Keywords          : kbinterop kbClient _IK964 kbsms200 kbsms200bug kbsms120 kbsms120bug kbHelpDesk kbsms200preSP4fix kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
