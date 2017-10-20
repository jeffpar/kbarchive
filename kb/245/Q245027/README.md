---
layout: page
title: "Q245027: STOP 0xC0000143 Damaged or Missing Display_driver.dll."
permalink: /kb/245/Q245027/
---

## Q245027: STOP 0xC0000143 Damaged or Missing Display_driver.dll.

{% raw %}

	Article: Q245027
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a computer running Microsoft Windows NT Server 4.0 after you
	install the client for System Management Server (SMS), you may receive the
	following error message:
	
	  STOP 0xC0000143
	  The required system file Display_driver.dll is bad or missing.
	
	Also, when you restart the server in VGA mode, you may receive the same error
	message.
	
	CAUSE
	=====
	
	This behavior can occur if the Vga.dll file is damaged.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, follow these steps:
	
	1. Install a parallel installation of Windows NT Server 4.0.
	
	2. Restart the computer to the original installation.
	
	3. Copy the Vga.dll file from the parallel installation to the original
	  installation.
	
	4. Configure the original installation to start in VGA mode:
	
	  a. Use Registry Editor (Regedt32) to load the system hive of the original
	     installation:
	
	     1. Click HKEY_LOCAL_MACHINE.
	
	     2. On the Registry menu, click Load Hive.
	
	     3. Click the \Winnt\System32\Config\System folder, and then click Open.
	
	     4. In the Key Name box, type "Test" (without the quotation marks), and
	        then click OK.
	
	  b. Edit the original system hive:
	
	     1. Use Registry Editor to locate the following registry key
	
	        HKEY_LOCAL_MACHINE\TEST\ControlSetXXX\Services\VgaSave
	
	        where XXX represents the control set number that your computer should
	        start from the next time you restart it.
	
	        NOTE: The value data of the CURRENT:REG_DWORD:0xY value of the
	        HKEY_LOCAL_MACHINE\SYSTEM\SELECT registry key determines which control
	        set you need to locate.
	
	     2. Make sure the value data for the ImagePath value reads:
	
	  \Winnt\System32\Drivers\Vga.sys
	
	     3. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\TEST\ControlSetXXX\Services\VgaSave\Device0
	
	     4. Double-click the InstalledDisplayDrivers value, change the value data
	        to VGA, and then click OK.
	
	  c. Unload the system hive of the original installation to save the changes:
	
	     1. Collapse the HKEY_LOCAL_MACHINE\TEST key. Make sure it is highlighted.
	
	     2. On the Registry menu, click Unload Hive, and then click Yes to confirm
	        the command.
	
	5. Restart the computer in VGA mode to the original installation.
	
	6. Reinstall the driver for your video adapter.
	
	Additional query words: nt 4.0 stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbSMSSearch kbSMS200
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
