---
layout: page
title: "Q164961: Network Monitor Setup Doesn't Find Previous Version Installation"
permalink: /kb/164/Q164961/
---

## Q164961: Network Monitor Setup Doesn't Find Previous Version Installation

	Article: Q164961
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsnetmon kbNetworkMon
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Two menu options for Network Monitor are placed on the Start menu, one in the
	Administrative Tools group, and one in the Network Analysis Tools group.
	Depending on which icon you use to start Network Monitor, the Network Monitor
	program may behave differently or erratically, or it may function with limited
	abilities (like not being able to capture all network traffic).
	
	
	CAUSE
	-----
	
	The Windows NT Server 4.0 Network Monitor is installed in the <System
	root>\System32\Netmon directory. By default, the Systems Management Server
	Network Monitor installation location is C:\Nm (or x:\Sms\netmon if you are
	installing Network Monitor onto a Systems Management Server site server). If
	both versions of Network Monitor are installed, you will observe different
	results in Network Monitor, depending on which Netmon.exe executable file you
	ran.
	
	WORKAROUND
	----------
	
	If the Windows NT 4.0 "Network Monitor Tools and Agent" is installed in the
	Winnt\System32\Netmon directory before you install Network Monitor from the
	Systems Management Server compact disc, specify the <System
	root>\System32\Netmon directory as the installation location during the
	Systems Management Server Network Monitor installation. However, note that two
	menu options for Network Monitor are placed on the Start menu, one in the
	Administrative Tools group, and the other in the Network Analysis Tools group.
	Both of these icons start the same version of Network Monitor, and you can
	remove one of them by changing the Taskbar properties.
	
	If the Windows NT Server 4.0 Network Monitor is installed and the Systems
	Management Server Network Monitor is installed into a directory other than the
	<System root>\System32\Netmon directory, two menu options for Network
	Monitor are placed on the Start menu, one in the Administrative Tools group, and
	one in the Network Analysis Tools group. Each of these icons runs a different
	version of the program.
	
	To remove the Windows NT Server version of Network Monitor, perform the following
	steps:
	
	1. On the Start menu, point to Settings, click Control Panel, and then
	  double-click the Services icon.
	
	2. Select "Network Monitor Tools and Agent", and then click Remove.
	
	3. Click Add, and then click "Network Monitor Agent".
	
	4. Shut down the computer, and then restart it.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	----------------
	
	The Windows NT Server 4.0 Network Monitor can be installed from the following
	location on the Windows NT 4.0 Server CD-ROM:
	
	  \i386\Netmon
	
	Additional query words: prodsms prodnt 0xA
	
	======================================================================
	Keywords          : kbnetwork smsnetmon kbNetworkMon 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
