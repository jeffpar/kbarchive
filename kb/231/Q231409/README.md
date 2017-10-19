---
layout: page
title: "Q231409: SMS: How to Enable the Software Metering Spy Window"
permalink: /kb/231/Q231409/
---

## Q231409: SMS: How to Enable the Software Metering Spy Window

	Article: Q231409
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can set the Software Metering client agent to debug mode by enabling the
	Software Metering Spy window. This is helpful for troubleshooting Software
	Metering client problems.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable the Spy window, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components\License
	  Metering
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: spy
	  Data Type: REG_SZ
	  Value: yes
	
	4. Quit Registry Editor.
	
	5. Shutdown and restart the client.
	
	
	Additional query words: prodsms smstshoot tshoot swm kbhowto
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
