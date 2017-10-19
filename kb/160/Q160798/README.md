---
layout: page
title: "Q160798: How to Change the SMS Remote Control Agent Startup Value"
permalink: /kb/160/Q160798/
---

## Q160798: How to Change the SMS Remote Control Agent Startup Value

	Article: Q160798
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be desirable for a Systems Management Server administrator to change the
	startup type of the Windows NT Remote Control Agent on computers running Windows
	NT Server or Workstation to Manual (as opposed to Automatic). To do this, you
	need to modify a registry key.
	
	MORE INFORMATION
	================
	
	To modify the registry key to change the startup type of the Remote Control
	Agent, use the following steps:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT or Microsoft Systems
	Management Server. Microsoft cannot guarantee that any problems resulting from
	the use of Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor.
	
	2. Navigate to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wuser32
	
	3. From the parameter list, select the value that corresponds to your choice.
	  Reg_DWord: 0x2 is the default, and it indicates that the startup type is
	  Automatic. The following is a list of other startup options:
	
	  0x1 - System
	  0x2 - Automatic (default)
	  0x3 - Manual
	  0x4 - Disabled
	
	Additional query words: remote control services
	
	======================================================================
	Keywords          : kbenv kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	
