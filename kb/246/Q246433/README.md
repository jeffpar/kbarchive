---
layout: page
title: "Q246433: How to Disable Remote Control Acceleration on Selected Clients"
permalink: /kb/246/Q246433/
---

## Q246433: How to Disable Remote Control Acceleration on Selected Clients

	Article: Q246433
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork _IK964 kbServer kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbsms200sp2fix kbRe
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually disable Systems Management Server (SMS)
	remote control acceleration on a specific computer or on the entire network.
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can make a modification to the registry to control the loading of the Remote
	Control video accelerator. Once you make this change, the accelerator never
	loads. You can make this change for specific computers or the entire network.
	
	Before you install the Remote Control component, create the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Configuration\SMS 1.2 Client
	  Migration\Remote Control
	
	Create a DWORD value named Install Video Driver and set the data value to 0
	(zero). The value will be copied by the RemCtrl.ipf file to:
	
	  HKLM\Software\Microsoft\SMS\Client\Client Components\Remote Control\Hardware
	  Settings\Install Video Driver
	
	If no value is found in the first registry location, the default value of 1 (one)
	is written to the second location.
	
	Valid values are:
	
	  0= Never install driver
	  1= Install if in driver list
	  2= Always install, even if not in driver list
	
	By using these values, you can also force computers to always load the video
	driver.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork _IK964 kbServer kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbsms200sp2fix kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
