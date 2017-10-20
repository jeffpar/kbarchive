---
layout: page
title: "Q123426: STOP 0x0000000A During Upgrade to Windows NT 3.5"
permalink: /kb/123/Q123426/
---

## Q123426: STOP 0x0000000A During Upgrade to Windows NT 3.5

{% raw %}

	Article: Q123426
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the upgrade process from Windows NT version 3.1 to Windows NT version 3.5
	with a Hewlett-Packard (HP) 27252A PC LAN Adapter/16 TL Plus network interface
	card (NIC), the following STOP message appears:
	
	  Stop 0x0000000A
	
	
	CAUSE
	=====
	
	This problem occurs because Windows NT does not automatically upgrade the HP
	27252 NIC driver during installation.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Shut down your computer and remove the HP 27252A NIC.
	
	2. Complete the upgrade to Windows NT 3.5 and log on as Administrator.
	
	3. In Control Panel, choose Network.
	
	4. Remove the currently installed HP 27252A PC LAN Adapter/16 TL Plus NIC
	  driver.
	
	5. Choose Add adapter, select the HP 27252A PC LAN Adapter/16 TL Plus, and
	  choose Continue. When prompted for the path, specify the following directory
	  on the Windows NT 3.5 CD:
	
	  \DRVLIB\NETCARD\X86\HPISA (for Intel-based systems)
	
	6. Shut down and restart Windows NT.
	
	The HP products discussed here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt blue trap
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
